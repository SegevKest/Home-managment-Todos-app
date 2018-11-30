const mongoose=require('mongoose');

const famMember= mongoose.model('familyMember',{
    name:String,
    nickName:String,
    famRole:String
});

module.exports=famMember;