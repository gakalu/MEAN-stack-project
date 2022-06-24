const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true},
    role: {type: String, required: true}
});

const UserModel = mongoose.model('user', UserSchema);

class UserCollection {
    static async create(username, password,email,age, role){
        const user = new UserModel({username, password,email,age, role});
        await user.save();
        return user;
    }

    static async getUserByUsername(username){
        const user = await UserModel.findOne({username});
        return user;
    }
}


module.exports = UserCollection;