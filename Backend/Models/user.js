
var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const salt = 10;

const userSchema = mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        maxlength: 100
    },
    lastname:{
        type: String,
        required: true,
        maxlength: 100
    },
    mobileNumber:{
        type:Number,
        required: true,
        minlength:8
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password:{
        type:String,
        required: true,
        // minlength:8
    },
    password2:{
        type:String,
        required: true,
        // minlength:8
    },
    token:{
        type: String
    }
});


userSchema.pre('save',function(next){
    var user = this;
    
    if(user.isModified('password')){
        bcrypt.genSalt(salt,function(err,salt){
            if(err)return next(err);

            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err);
                user.password =  hash;
                user.password2 = hash;
                next();
            })
        })
    }
    else{
        next();
    }
});

module.exports = mongoose.model('User',userSchema);