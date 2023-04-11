import mongoose, { Schema, Document} from "mongoose";

interface IUser extends Document {
    name: string;
    age: number;
    address: string;
    numberPhone: string;
};

const userSchema : Schema = new Schema({
    name: String,
    age: Number,
    address: String,
    numberPhone: String
})

const User = mongoose.model<IUser>("users", userSchema);

export default User;