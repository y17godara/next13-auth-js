import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
    },
    image: {
        type: String,
        default: 'https://imgur.com/L7nNyj4',
    },
    role: {
        type: String,
        default: 'user',
    },
    provider: {
        type: String,
        default: 'credentials',
    },
}, { timestamps: true });

const User = models.user || model('user', userSchema);

export default User;