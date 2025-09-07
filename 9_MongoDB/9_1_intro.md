
# Article : https://www.geeksforgeeks.org/mern/mongo-with-express-tutorial/

# MongoDB
MongoDB is a popular NoSQL database that offers a flexible, scalable, and high-performance way to store data. In MongoDB, databases, collections, and documents are the important building blocks for data storage and management.

Database: A container for collections, providing structure and logical isolation for data.
Collection: A group of documents within a database, similar to a table in relational databases.
Document: A single data record within a collection, stored as a BSON object.

Multiple Databases: MongoDB allows you to create multiple databases on a single server. Each database is logically isolated from others.
Default Databases: When you start MongoDB, three default databases are created: admin, local, and config . These are used for internal purposes.
Database Creation: Databases are created when you insert data into them. You can create or switch to a database using the following command:

to show existing databases: ``` show dbs```
to switch to specific database: ``` use db_name ```
to create a database: ```use db_name``` [this will create that base if not present]

to show all collections in database: ````show collections```
to create a collction in database: ```db.createCollection("myCollection")``` [in this 'db' is keyword not database name , it will create a collcetion in current active database]

to switch to a collcetion: ** there is no any concept for switch if we want to do any operation in collction we simply do ** :```db.myCollection.insertOne({ name: "karan", age: 19 }); ``` 

## CRUD In MONGODB:

Create: Add new documents to a collection.
Read: Retrieve documents from a collection.
Update: Modify existing documents.
Delete: Remove documents from a collection.

### Create
1. Create Operations
The create or insert operations are used to insert or add new documents in the collection. If a collection does not exist, then it will create a new collection in the database. We can perform, create operations using the following methods provided by the MongoDB:

Method	Description:
db.collection.insertOne()  ->  It is used to insert a single document in the collection.
db.collection.insertMany() ->  It is used to insert multiple documents in the collection.
db.createCollection()	   ->  It is used to create an empty collection.

### Read
2. Read Operations
The Read operations are used to retrieve documents from the collection, or in other words, read operations are used to query a collection for a document. We can perform read operation using the following method provided by the MongoDB:

Method	Description
db.collection.find()	-> It is used to retrieve documents from the collection.
db.collection.findOne() -> Retrieves a single document that matches the query criteria.[first one]

Note: pretty() method is used to decorate the result such that it is easy to read.

### Update
3. Update Operations
The update operations are used to update or modify the existing document in the collection. We can update a single document or multiple documents that match a given query. We can perform update operations using the following methods provided by the MongoDB:

Method	Description
db.collection.updateOne()  -> It is used to update a single document in the collection that satisfy the given criteria.
db.collection.updateMany() -> It is used to update multiple documents in the collection that satisfy the given criteria.
db.collection.replaceOne() -> It is used to replace single document in the collection that satisfy the given criteria.

### Delete
Delete Operations
The delete operation are used to delete or remove the documents from a collection. We can delete documents based on specific criteria or remove all documents. We can perform delete operations using the following methods provided by the MongoDB:

Method Description
db.collection.deleteOne()  -> It is used to delete a single document from the collection that satisfy the given criteria.
db.collection.deleteMany() -> It is used to delete multiple documents from the collection that satisfy the given criteria.