
//  if not provided the its development env by default
process.env.NODE_ENV = process.env.NODE_ENV || "development"


module.exports = {
    NODE_ENV : process.env.NODE_ENV,
    mongodb:{ 
        url : 'mongodb://localhost:27017/test',
    },
    production : false,
    testing:false,
    development: false,
}