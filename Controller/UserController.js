const UserCollection = require('../model/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const PRIVATE_KEY = "Final-Project"

exports.signup = async (req, res) => {
    const {username, password,email,age, role} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await UserCollection.create(username, hashedPassword,email,age, role);
    res.send(user)
}

exports.login = async (req, res) => {
    const {username, password} = req.body;
    if(username && password){
        const user = await UserCollection.getUserByUsername(username);
        if(user){
            if(bcrypt.compareSync(password, user.password)){
                const accessToken = jwt.sign({username, role: user.role}, PRIVATE_KEY);
                res.send(accessToken);
            }else{
                res.send('Wrong password');
            }
        }else{
            res.send("Wrong username or password")
        }
    }else{
        res.send("Please input username and password");
    }
};

exports.authorize = (req, res, next) => {
    if(req.headers.authorization){
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, PRIVATE_KEY, (err, payload) => {
            if(err){
                res.status(403).send("Forbidden");
            }else{
                next();
            }
        })
    }else{
        res.status(401).send('Unauthorized');
    }
}