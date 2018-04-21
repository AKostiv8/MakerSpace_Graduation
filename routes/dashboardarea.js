/**
 * Created by Anastasiia on 25.03.2018.
 */

const firebase = require('firebase');
const config = require('../config/database');
firebase.initializeApp(config);


module.exports = (router) => {
    router.post('/register', (req, res) => {
        if(!req.body.email){
            res.json({ success: false, message: 'You must provide a valid e-mail' });
        } else {
            if(!req.body.password){
                res.json({ success: false, message: 'You must provide a password'});
            } else {
                if (!req.body.username) {
                    res.json({success: false, message: 'You must provide an username'});
                } else {
                    if (!req.body.phoneNumber) {
                        res.json({success: false, message: 'You must provide a telephone number'});
                    } else {
                        res.send("12");


                        firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password).then(function(userData){
                            console.log("Successfully created");
                            console.log("Successfully created user with uid:", userData.uid);
                            var user = {
                                uid: userData.uid,
                                email: req.body.email,
                                password: req.body.password,
                                username: req.body.username,
                                phoneNumber: req.body.phoneNumber
                            }

                            var userRef = firebase.database().ref('users/');
                            userRef.push().set(user);

                            console.log('Success!');
                        }).catch(function(error) {
                            console.log("Started 2...");
                            if(error){
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                console.log("Error creating user: ", error);
                            } else {}

                        });


                    }
                }
            }
        }

    });


    router.post('/authentication', (req, res) => {
        if(!req.body.email){
            res.json({success: false, message: 'No username was provided'});
        } else {
            if(!req.body.password){
                res.json({success: false, message: 'No password was provided'});
            } else {
                firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password).then(function(firebaseUser) {
                    res.send('Logged In');
                    console.log('User signed in!');
                }).catch(function(error) {
                    // Handle Errors here.
                    console.log("Started 2...");
                    if(error){
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log("Error user: ", error);
                    } else {}

                });
            }
        }



});




    return router;

}
