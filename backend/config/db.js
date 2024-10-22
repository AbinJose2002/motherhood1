import mongoose from "mongoose";

export const connection = async ()=>{
    let response = await mongoose.connect('mongodb+srv://abinjos307:abinjose123@cluster0.pxkoo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log('connected'))
}