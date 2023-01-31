// / use to check whether the user has been logged in pr not

const User = require('../Models/user');

let auth =(req,res,next)=>{
    let token =req.cookies.auth;
    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.json({
            error :true
        });

        req.token= token;
        req.user=user;
        next();

    })
}

module.exports={auth};