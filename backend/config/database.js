const mongoose = require('mongoose');
require('dotenv').config();
// const urlkey = 'mongodb+srv://admin:admin@cluster0.5r8ak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const urlkey = 'mongodb://admin:admin@cluster0-shard-00-00.5r8ak.mongodb.net:27017,cluster0-shard-00-01.5r8ak.mongodb.net:27017,cluster0-shard-00-02.5r8ak.mongodb.net:27017/?ssl=true&replicaSet=atlas-13j58s-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

exports.connectDB = () => {
    mongoose.connect(urlkey, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Database connected succcessfully');
        })
        .catch(error => {
            console.log(`Error while connecting server with Database`);
            console.log(error);
            process.exit(1);

        })
};

