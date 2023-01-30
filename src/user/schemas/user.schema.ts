// import { SchemaFactory } from '@nestjs/mongoose';
// import * as mongoose from 'mongoose';
// import { User } from '../entities/user.entity';

// export const UserSchema = new mongoose.Schema({
//     name: String,
//     email: {
//         type: String,
//         required: true
//     },
//     username: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now()
//     }
// })

import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = Document & User;

@Schema()
export class User {

    @Prop()
    name: string;

    @Prop({ type: String, required: true })
    email: string;

    @Prop({ type: String, required: true })
    username: string;

    @Prop({ type: String, required: true })
    password: string;

    @Prop({ type: Date, default: Date.now() })
    createdAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
