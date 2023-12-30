const _ = require("lodash")

const config = require("./env/default.config.js")
const testConfig = require("./env/test.config.js");
const productionConfig = require("./env/produnction.config.js");
const developmentConfig = require("./env/development.config.js")

let  localConfig;

//get config local config files according to environment.
if(process.env.NODE_ENV === "testing"){
    localConfig = testConfig;
}else if(process.env.NODE_ENV === "production"){
    localConfig = productionConfig;
}else {
    //env other than testin and production are development.
    localConfig = developmentConfig;
}

_.merge(config, localConfig);

console.log(process.env.NODE_ENV,config)
module.exports = config