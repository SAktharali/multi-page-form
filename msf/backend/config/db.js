const mongoose = require('mongoose');

const createDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
         console.log('mongodb is connected',mongoose.connection.host);
    
    }
    catch(err){
console.log('mongodb is not connected',err);

    }
}
      
module.exports=createDb;
