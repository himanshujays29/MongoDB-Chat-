import mongoose, { Types } from 'mongoose';

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        maxLength: 50,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now,
    },
})

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;