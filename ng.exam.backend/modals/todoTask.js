const mongoose=require('mongoose');

const todoTask= mongoose.model('Todo',{
    content:String,
    creationDate: Date,
    famMemberID:String 
});

module.exports=todoTask;