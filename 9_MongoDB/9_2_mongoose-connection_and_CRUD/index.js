require('dotenv').config();
const mongoose = require('mongoose');

// establishing connection with Mongoose

const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI).then(()=>{
    console.log(`MONGODB connected succesfully`);
}).catch((e)=>{
    console.log(`MONGODB connection failed`, e.message);
})

// Creating user Schema

const Userschema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    isActive: Boolean,
    tags : [String],
    CreatedAt : {type: Date , default: Date.now}
});

// creating User model

const User = mongoose.model('User', Userschema);

// Create / insert 

async function insert(newUserData){
    try{
        const newUser = await User.create(newUserData);

        console.log(`new user created`, newUser);
    }catch(e){
        console.log(`Something Went Wrong! ${e.message}`);
    }
}

//Read /find

async function findOneUser(){
    try{
        
        const userfound = await User.findOne({name: "julie"});    
        if (!userfound){
            return console.log (`user not present in database`)
        }
        console.log(`user Found:`, userfound);
    }catch(e){
        console.log(`Something Went Wrong! ${e.message}`);
    }
}

async function checkisActive(){
    try{
        
        const ActiveUsers = await User.find({isActive: true});    
        if (!ActiveUsers){
            return console.log (`no one is Active`);
        }
        console.log(`Active users:`, ActiveUsers);
    }catch(e){
        console.log(`Something Went Wrong! ${e.message}`);
    }
}


// Update 

async function UpdateUser(username){
    try{ 
        const UsertoUpdate = await User.updateOne({name: username},{$set:{tags:[`karan's fineshyt`]}});   
        
        //warning: updateOne() and deleteOne() always return an object like { acknowledged: true, modifiedCount: X }.

        if (!UsertoUpdate){
            return console.log (`user id not found `);
        }
        console.log(`user data updated:`, UsertoUpdate);
    }catch(e){
        console.log(`Something Went Wrong! ${e.message}`);
    }
}

//delete

async function deleteUser(username){
    try{ 
        const deletedUser = await User.deleteOne({name: username});   

        //warning: updateOne() and deleteOne() always return an object like { acknowledged: true, modifiedCount: X }.

        if (!deletedUser){
            return console.log (`user id not found `);
        }
        console.log(`deleted user:`, deletedUser);
    }catch(e){
        console.log(`Something Went Wrong! ${e.message}`);
    }
}

//----------------------------

const newUserData={
    name : "julie",
    email : "julie@gmail.com",
    age : 19,
    isActive: true,
    tags : [`karan's partner`,`bueatiful girl` ],
}
const newUserData2={
    name : "karan",
    email : "julie@gmail.com",
    age : 19,
    isActive: false,
    tags : [`gentlemen`, 'playboy'],
}

const newUserData3={
    name : "krupi",
    email : "julie@gmail.com",
    age : 19,
    isActive: true,
    tags : [`badie`],
}


async function main() {
    await insert(newUserData);
    await insert(newUserData2);
    await insert(newUserData3);
    await findOneUser();
    await checkisActive();
    await UpdateUser("krupi");
    await deleteUser("karan");
    mongoose.connection.close();
}
main();




