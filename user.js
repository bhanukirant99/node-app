const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/todo-app', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (validator.isEmail(value)) {
                console.log('success')
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    todo: {
        description: {
            type: String,
            required: true,
            trim: true
        },
        completed: {
            type: Boolean,
            default: false
        },
        _id: {
            type: Number,
            default: 0,
            
        }
    }
})

const user = new User({
    name: 'Sam',
    email: 'sam@gmail.com',
    password: 'asdsfsedfs',
    todo: {
        description: 'new'
    }
})

user.save().then(() => {
    console.log(user)
}).catch((error) => {
    console.log(error)
})

module.exports = mongoose;

