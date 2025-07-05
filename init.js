import mongoose from 'mongoose';
import Chat from "./models/chat.js"; 

main().then((res)=>{console.log("connection successful!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    { 
        from: "sana", 
        to: "vikas", 
        msg: "Join the call at 3 PM", 
        created_at: new Date() 
    },
    { 
        from: "arjun", 
        to: "meera", 
        msg: "Did you upload the files?", 
        created_at: new Date() 
    },
    { 
        from: "rohan", 
        to: "aisha", 
        msg: "Let's discuss the plan tomorrow", 
        created_at: new Date() 
    },
    { 
    
        from: "diya", 
        to: "kabir", 
        msg: "Please bring the book today", 
        created_at: new Date() 
    },
    { 
        from: "tanvi", 
        to: "arjun", 
        msg: "When is the next meeting?", 
        created_at: new Date() 
    },
    { 
        from: "kabir", 
        to: "diya", 
        msg: "Thanks for helping me out", 
        created_at: new Date()
     },
    { 
        from: "meera", 
        to: "sana", 
        msg: "Can you share your notes?", 
        created_at: new Date() 
    },
    { 
        from: "vikas", 
        to: "rohan", 
        msg: "Where should we meet?", 
        created_at: new Date() 
    },
    { 
        from: "aisha", 
        to: "tanvi", 
        msg: "Did you check my email?", 
        created_at: new Date() 
    },
    { 
        from: "raj", 
        to: "ananya", 
        msg: "Submit the form today", 
        created_at: new Date() 
    },
    { 
        from: "ananya", 
        to: "raj", 
        msg: "I'll be there on time", 
        created_at: new Date() 
    },
    { 
        from: "mohit", 
        to: "isha", 
        msg: "Can you forward the link?",
        created_at: new Date() 
    },
    { 
        from: "isha", 
        to: "mohit", 
        msg: "Let's prepare for the test", 
        created_at: new Date() 
    },
    { 
        from: "veer", 
        to: "riya", 
        msg: "Your presentation was excellent", 
        created_at: new Date()
     },
    { 
        from: "riya", 
        to: "veer", 
        msg: "I have shared the document", 
        created_at: new Date()
     },
    { 
        from: "yash", 
        to: "priya",
        msg: "Will you attend the seminar?", 
        created_at: new Date() 
    },
    { 
        from: "priya", 
        to: "yash", 
        msg: "Yes, I'll join you", 
        created_at: new Date() 
    },
    { 
        from: "kartik", 
        to: "swara", 
        msg: "Let's meet at the café", 
        created_at: new Date()
     },
    { 
        from: "swara", 
        to: "kartik", 
        msg: "I'm on my way", 
        created_at: new Date() 
    },
    { 
    
        from: "dev", 
        to: "tara", 
        msg: "Please review my code", 
        created_at: new Date() 
    },
]

Chat.insertMany(allChats);
