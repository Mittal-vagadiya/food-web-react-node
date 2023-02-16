const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./config/config').get(process.env.NODE_ENV);
const User = require("./Models/user");
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const auth = require("./MiddleWares/auth");
const app = express();
// app use
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(cors());

// database connection
mongoose.Promise = global.Promise;
mongoose.connect(db.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) console.log(err);
    console.log("database is connected");
});

// listening port
const PORT = db.PORT || 5500;
app.listen(PORT, () => {
    console.log(`app is live at ${PORT}`);
});

// /with the registering user 
app.post('/register', function (req, res) {
    const { fname, lname, email, phone, pass, repass } = req.body

    // taking a user
    const newuser = new User({ firstname: fname, lastname: lname, mobileNumber: phone, email: email, password: pass, password2: repass });

    
    User.findOne({ email: newuser.email }, function (err, user) {
        if (user) return res.status(400).json({ auth: false, message: "email exits" });
        if (newuser.password != newuser.password2) return res.status(400).json({ auth:false,message: "password not match" });

        newuser.save((err, doc) => {
            if (err) {
                console.log(err);
                return res.status(400).json({ success: false, message: "something is wrong",error:err});
            }
            res.status(200).json({
                succes: true,
                message: "User Created Successfully-",
                user: { firstname : newuser.firstname , lastname: newuser.lastname , email: newuser.email, mobileNumber: newuser.mobileNumber}
            });
        });
    });
});


// login endpoint
app.post("/login", (request, response) => {
    // check if email exists
    User.findOne({ email: request.body.email })

        // if email exists
        .then((user) => {
            // compare the password entered and the hashed password found
            bcrypt
                .compare(request.body.password, user.password)

                // if the passwords match
                .then((passwordCheck) => {
                    // check if password matches
                    if (!passwordCheck) {
                        return response.status(400).send({
                            message: "Passwords does not match",
                            success:false
                        });
                    }

                    //   create JWT token
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        db.SECRET,
                        { expiresIn: "4h" }
                    );

                    //   return success response
                    response.status(200).send({
                        message: "Login Successful",
                        userId: user._id,
                        email: user.email,
                        token,
                        success:true
                    });
                })
                // catch error if password does not match
                .catch((error) => {
                    response.status(400).send({
                        message: "Passwords does not match",
                        success: false
                    });
                });
        })
        // catch error if email does not exist
        .catch((e) => {
            response.status(404).send({
                message: "Email not found",
                succes:false
            });
        });
});

app.post('/check',auth, function (req, res) {
    res.status(200).send("Welcome 🙌 ");
});

