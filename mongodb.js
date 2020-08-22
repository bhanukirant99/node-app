// const mondodb = require('mongodb');
// const MongoClient = mondodb.MongoClient;
// const ObjectID = mondodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'todo-app';

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id.length);
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect ot the database');
    }

    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vir',
    //     age: 17,
    //     mail_id: 'vir@gmail'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops);
    // });

    console.log('Connected');

    // db.collection('users').insertMany([{
    //     name: 'Raj',
    //     age: 17,
    //     email_id: 'raj@gmail'
    // },{
    //     name: 'Sam',
    //     age: 17,
    //     email_id: 'sam@gmail'
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops);
    // });

    // console.log('Connected');
    // db.collection('tasks').insertMany([{
    //     description: 'added',
    //     completed: true
    // },{
    //     description: 'added',
    //     completed: true
    // },{
    //     description: 'added',
    //     completed: true
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops);
    // });

    // console.log('Connected');

    db.collection('users').findOne({_id: ObjectID("5f3c6fd6f6692185f4d3b345")}, (error, user) => {
        if (error) {
            return console.log('Unable to find the user')
        }
        
        console.log(user);
    })
    // db.collection('users').find({age: 17}).toArray((error, user) => {
    //     if (error) {
    //         return console.log('Unable to find the user')
    //     }
        
    //     console.log(user);
    // })
    // db.collection('users').find({age: 17}).count((error, user) => {
    //     if (error) {
    //         return console.log('Unable to find the user')
    //     }
        
    //     console.log(user);
    // })
    // db.collection('tasks').findOne({_id: ObjectID("5f34591f26fd3eb8f49c98aa")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find the user')
    //     }
        
    //     console.log(user);
    // })
    // db.collection('tasks').find({completed: false}).toArray((error, user) => {
    //     if (error) {
    //         return console.log('Unable to find the user')
    //     }
        
    //     console.log(user);
    // })

    // const updatePro = db.collection('users').updateOne({
    //     _id: ObjectID("5f3452fcbda3d796a863c50d")
    // }, {
    //     $set: {
    //         name: 'Dev'
    //     }
    // })
    // updatePro.then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // })
    
    // db.collection('users').updateOne({
    //     _id: ObjectID("5f3452fcbda3d796a863c50d")
    // }, {
    //     $set: {
    //         name: 'Kumar'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // })

    // db.collection('users').updateOne({
    //     _id: ObjectID("5f3452fcbda3d796a863c50d")
    // }, {
    //     $inc: {
    //         age: 2
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // })

    // db.collection('tasks').deleteOne({ _id: ObjectID("5f34591f26fd3eb8f49c98aa")}).then((res) => { console.log(res)}).catch((err) => {console.log(err)})
    // db.collection('tasks').deleteMany({ completed: true}).then((res) => { console.log(res)}).catch((err) => {console.log(err)})
})


//./mongod --dbpath=/Users/91988/MongoDB-data
//C:\Users\91988\MongoDB\Server\4.2\bin>mongod.exe --dbpath=/Users/91988/MongoDB-data
// cd Users\91988\MongoDB\Server\4.2\bin