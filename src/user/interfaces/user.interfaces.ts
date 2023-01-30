import { Document } from "mongoose";

export interface User extends Document {
    id: string,
    name: string,
    email: string,
    username: string,
    createdAt: Date,
    password: string,
}