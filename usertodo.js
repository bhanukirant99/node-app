const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/todo-app', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const todoModel = mongoose.model('todo', todoSchema)

const userSchema = new Schema(    {
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
    todos: [{type: Schema.Types.ObjectId, ref: 'todo'}]
})

const userModel = mongoose.model('user', userSchema)


// const user = new userModel({
//     name: 'Sam',
//     email: 'sam@gmail.com',
//     password: 'asdsfsedfs',
// })



// const todo = new todoModel({
//     description: 'testing'
// })

// const user = new userModel({
//     name: 'Raj',
//     email: 'raj@gmail.com',
//     password: 'raj'
// })

// console.log(todo)

// userModel.findById('5f3d9cfde8ed122e68442173').then((user) => {
//     const todoid = '5f3da72afb4775a22cf1328e'
//     console.log(user)
//     // console.log(user.todos)
//     const todos = user.todos.filter(todo => {
//         console.log(todoid)
//         if (todo != todoid) {
//             return todo

//         }
//         console.log(todo)
//     })
//     user.todos.fill(todos)
//     user.todos
//     console.log(todos)
//     // user.todos.push(todo)
//     // user.save()
// })

userModel.findById('5f3cfa54698e4b2b30563445', (e, user) => {
    if (e) {
        console.log(e)
    }
    console.log(user.todos)
    user.todos.map((todo) => {
        if (todo._id == '5f3cfa59698e4b2b30563446') {
            console.log(todo)
        }
        console.log(todo)
    })
    console.log(user)
})

// userModel.findById("5f3cfa54698e4b2b30563445", (err, user) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(user)
//     const indexOfTodo = user.todos.map((todo) => {
//         console.log(todo._id)
//         if(todoid == todo._id) {
//             // console.log(todo)
//             todo.description = ""
//             return todo._id
            
//         }
//    })

// Object.assign(user.todos, {todo: todo._id})

// user.save().then(() => {
    
//         console.log(user)
    
// }).catch((error) => {
//     console.log(error)
// })
// todo.save()


// const userid = "5f3c7df255a4d0d55cdf4c70"
// const todoid =  "5f3c7df655a4d0d55cdf4c71"

// userModel.findById(userid, (err, user) => {
//     console.log(user)
//     console.log(user._id)
//     console.log(user.todos)


//     // if (err) {
//     //     console.log(err)
//     // }
//     // console.log(user.todos)
//     const indexOfTodo = user.todos.map((todo) => {
//         // console.log(todo._id)
//         if(todoid == todo._id) {
//             // console.log(todo)
//             return todo._id
            
//         }
//     })
//     console.log(indexOfTodo[0])
//     userModel.findById({"todo._id": indexOfTodo[0]}).then((result) => {
//         console.log(result)
//     })
// })

// userModel.findById('5f3c6ad3bc3847453022252b').then((user) => {
//     console.log(user)
// })

module.exports = {
    userModel,
    todoModel
};

