import mongoose, { Schema } from "mongoose";

const NoteSchema=new mongoose.Schema({
    title:{ type:String,required:true},
    content:{type:String,required:true},
});


export default mongoose.model('Note',NoteSchema);