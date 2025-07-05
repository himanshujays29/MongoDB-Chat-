import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import Chat from "./models/chat.js"; 
import methodOverride from "method-override";

const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));


main().then((res)=>{console.log("connection successful!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat ({
    from: "elon musk",
    to: "Himanshu",
    msg: "this should join office from monday",
})


//index Route
app.get("/chats",async (req, res)=>{
    let chats = await Chat.find() ;
    // console.log(chats);
    res.render("index.ejs", {chats})
})

app.get("/chats/new", (req, res)=>{
    res.render("new.ejs");
})

//Create route 

app.post("/chats", (req, res)=>{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    })
    newChat.save().then((result)=>{
        console.log("Chat was saved");
    })
    .catch((err)=>{
        console.log(err);
    })
    res.send("Working");
    res.redirect("/chats");
});

//Edit Route 

app.get("/chats/:id/edit", async(req, res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
})

//Update Route

app.put("/chats/:id", async(req, res)=>{
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let updateChat =await Chat.findByIdAndUpdate(
        id, 
        {msg: newMsg},
        {runValidators: true, new: true}
    );
    let updateChatDate =await Chat.findByIdAndUpdate(
        id, 
        {created_at: new Date()},
        {runValidators: true, new: true}
    );
    console.log(updateChat);
    res.redirect("/chats")
})

//Distroy Route

app.delete("/chats/:id",async(req, res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
    
})

app.get("/", (req, res)=>{
    res.send("Server is Runing");
})

app.listen(port, ()=>{
    console.log(`Server is listning on port ${port}`); 
});
