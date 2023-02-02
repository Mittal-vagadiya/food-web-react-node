const config = {
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'myfoodpracticedemo',
        DATABASE: 'mongodb://localhost:27017/Food-web',
        PORT:5000
    }
}

exports.get = function get(env){
    return config[env] || config.default
}