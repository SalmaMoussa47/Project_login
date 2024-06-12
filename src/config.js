const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://salmaghazouly:kWs7hgXYo0PUc7vs@cluster0.hf6snwz.mongodb.net/test")

// Check database connected or not

connect.then(() => {
    console.log("Database connected successfully");
})

.catch(() => {
    console.log("Database cannot be connected");
});

// Create a schema

const LogInSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },

    lname:{
        type: String,
        required: true
    },

    username:{
        type: String,
        required: true
    },

    password: {
        type:String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    isSubscribed: {
        type: Boolean,
        default: false  // Default value is false for new users
    },


    card: String  // New attribute to store card number
});



// collection port
// Create a model from the schema
const collection = new mongoose.model("users", LogInSchema);





// Export the model
module.exports = {
    // Subscription: Subscription,
    collection: collection
}; 
