const mongoose=require("mongoose");
dbConnect()
async function dbConnect(){
    try{
    await mongoose.connect('mongodb+srv://admin-harshit:Test123@cluster0.muzjr.mongodb.net/job_portal',{useNewUrlParser:true});
    console.log("Mongodb Connection Successful");
    }
    catch(err){
        console.log("Mongodb connection failed");
    }
}
mongoose.exports=mongoose;