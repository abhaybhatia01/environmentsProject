
const productionConfig= {
    mongodb:{ 
        url : 'mongodb://localhost:27018,localhost:27019,localhost:27020/mongoauth?replicaSet=rs0',
    },
    production : true,

}

module.exports = productionConfig

