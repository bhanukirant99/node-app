const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value) {
            if( value < 0 ) {
                throw new Error('Age must a positive number')
            } 
        }
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'task1',
    completed: true
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})

const user = new User({
    name: 'Sam',
    age: -1
})

user.save().then(() => {
    console.log(user)
}).catch((error) => {
    console.log(error)
})

Query {
    _mongooseOptions: {},
    _transforms: [],
    _hooks: Kareem { _pres: Map(0) {}, _posts: Map(0) {} },
    _executionCount: 0,
    mongooseCollection: NativeCollection {
      collection: Collection { s: [Object] },
      Promise: [Function: Promise],
      _closed: false,
      opts: {
        schemaUserProvidedOptions: {},
        capped: false,
        autoCreate: undefined,
        Promise: [Function: Promise],
        '$wasForceClosed': undefined
      },
      name: 'users',
      collectionName: 'users',
      conn: NativeConnection {
        base: [Mongoose],
        collections: [Object],
        models: [Object],
        config: [Object],
        replica: false,
        options: null,
        otherDbs: [],
        relatedDbs: {},
        states: [Object: null prototype],
        _readyState: 1,
        _closeCalled: false,
        _hasOpened: true,
        plugins: [],
        id: 0,
        _listening: false,
        _connectionString: 'mongodb://127.0.0.1:27017/todo-app',
        _connectionOptions: [Object],
        name: 'todo-app',
        host: '127.0.0.1',
        port: 27017,
        user: undefined,
        pass: undefined,
        client: [MongoClient],
        '$initialConnection': [Promise],
        db: [Db]
      },
      queue: [],
      buffer: false,
      emitter: EventEmitter {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        [Symbol(kCapture)]: false
      }
    },
    model: Model { User },
    schema: Schema {
      obj: { name: [Object], email: [Object], password: [Object] },
      paths: {
        name: [SchemaString],
        email: [SchemaString],
        password: [SchemaString],
        _id: [ObjectId],
        __v: [SchemaNumber]
      },
      aliases: {},
      subpaths: {},
      virtuals: { id: [VirtualType] },
      singleNestedPaths: {},
      nested: {},
      inherits: {},
      callQueue: [],
      _indexes: [],
      methods: {},
      methodOptions: {},
      statics: {},
      tree: {
        name: [Object],
        email: [Object],
        password: [Object],
        _id: [Object],
        __v: [Function: Number],
        id: [VirtualType]
      },
      query: {},
      childSchemas: [],
      plugins: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
      '$id': 1,
      s: { hooks: [Kareem] },
      _userProvidedOptions: {},
      options: {
        typePojoToMixed: true,
        typeKey: 'type',
        id: true,
        noVirtualId: false,
        _id: true,
        noId: false,
        validateBeforeSave: true,
        read: null,
        shardKey: null,
        autoIndex: null,
        minimize: true,
        discriminatorKey: '__t',
        optimisticConcurrency: false,
        versionKey: '__v',
        capped: false,
        bufferCommands: true,
        strictQuery: false,
        strict: true,
        pluralization: true
      },
      '$globalPluginsApplied': true
    },
    op: 'findOne',
    options: {},
    _conditions: { email: 'hash1@gmail.com' },
    _fields: undefined,
    _update: undefined,
    _path: undefined,
    _distinct: undefined,
    _collection: NodeCollection {
      collection: NativeCollection {
        collection: [Collection],
        Promise: [Function: Promise],
        _closed: false,
        opts: [Object],
        name: 'users',
        collectionName: 'users',
        conn: [NativeConnection],
        queue: [],
        buffer: false,
        emitter: [EventEmitter]
      },
      collectionName: 'users'
    },
    _traceFunction: undefined,
    '$useProjection': true
  }