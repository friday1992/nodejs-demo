//使用mongodb
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'student';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
var dbclient = function () {
    return new Promise((resolve, reject) => {
        var data = []
        client.connect(function (err) {
            assert.equal(null, err);
            console.log("Connected successfully to server");

            const db = client.db(dbName);
            // insertDocuments(db, (result) => {
            //     console.log(result)
            // })

            findDocuments(db, (result) => {
                data = result
                // console.log(result)
                // client.close()
                resolve(data)
            })


        });
    })


}

const insertDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('user');
    // Insert some documents
    collection.insertMany([
        { a: 1 }, { a: 2 }, { a: 3 }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}

const updateDocument = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ a: 2 }
        , { $set: { b: 1 } }, function (err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated the document with the field a equal to 2");
            callback(result);
        });
}
const findDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('user');
    // Find some documents
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        // console.log(docs)
        callback(docs);
    });
}
module.exports = dbclient