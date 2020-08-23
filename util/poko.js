const mongodb=require('mongodb');

const MongoClient=mongodb.MongoClient;

mongoConnect=callback=>{
    MongoClient.connect('mongodb+srv://tansen:AV5HKRcDzOuzrjRf@poko.k0ese.mongodb.net/poko?retryWrites=true&w=majority').
    then(client=>{
        console.log('connected');
        callback(client);
    }).catch(err=>{
        console.log('error');
    })
}
module.exports=mongoConnect;