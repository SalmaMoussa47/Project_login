const express = require('express');
const path= require("path");
const bcrypt= require("bcrypt");
const models = require('./config');
const { Collection } = require('mongoose');

// const Subscription = models.Subscription;
const collection = models.collection;
// const User = mongoose.model('User', LogInSchema, 'users');


// const {collection,Subscription} = require("./config");



const app = express();
// convert data into json format
app.use(express.json());

app.use(express.urlencoded({extended: false}));

// app.use(express.static(path.join(__dirname, 'Project_Login','Images')));
// to serve static files from the Images directory
app.use(express.static('Images'));

// to serve static files from the CSS directory
app.use(express.static('CSS'));
// to serve static files from the public directory
app.use(express.static('Public'));

// using ejs as the view engine
app.set('view engine', 'ejs');

app.get("/Home", (req,res) => {
    res.render("Home");
});

app.get("/login",(req,res) => {
    res.render("login");
});
 
app.get("/signup",(req,res) => {
    res.render("signup");
});

app.get("/subscribe",(req,res) => {
    res.render("subscribe");
});

app.get("/terms", (req,res) => {
    res.render("terms");
});

app.get("/privacypolicy", (req,res) => {
    res.render("privacypolicy");
});

app.get("/learnmore",(req,res) => {
    res.render("learnmore");
});

app.get("/Articles",(req,res) => {
    res.render("Articles");
});

app.get("/profilepage",(req,res) => {
    res.render("profilepage");
});

app.get("/profilepage2",(req,res) => {
    res.render("profilepage2");
});

app.get("/page1", (req,res) => {
    res.render("page1");
});

app.get("/page2", (req,res) => {
    res.render("page2");
});

app.get("/page3", (req,res) => {
    res.render("page3");
});

app.get("/page4", (req,res) => {
    res.render("page4");
});

app.get("/page5", (req,res) => {
    res.render("page5");
});

app.get("/page6", (req,res) => {
    res.render("page6");
});

app.get("/page7", (req,res) => {
    res.render("page7");
});

app.get("/page8", (req,res) => {
    res.render("page8");
});

app.get("/page9", (req,res) => {
    res.render("page9");
});

app.get("/page10", (req,res) => {
    res.render("page10");
});

app.get("/page11", (req,res) => {
    res.render("page11");
});

app.get("/page12", (req,res) => {
    res.render("page12");
});

app.get("/page13", (req,res) => {
    res.render("page13");
});

app.get("/page14", (req,res) => {
    res.render("page14");
});

app.get("/page15", (req,res) => {
    res.render("page15");
});

app.get("/page16", (req,res) => {
    res.render("page16");
});

app.get("/page17", (req,res) => {
    res.render("page17");
});

app.get("/page18", (req,res) => {
    res.render("page18");
});

app.get("/page19", (req,res) => {
    res.render("page19");
});

app.get("/page20", (req,res) => {
    res.render("page20");
});

// Register User

app.post("/signup", async (req, res) => {
const data = {
    fname: req.body.fname,
    lname: req.body.lname,
    username: req.body.username, 
    password: req.body.password,
    email: req.body.email
}

const isNameValid = validateName(data.fname);
const isUsernameValid = validateUsername(data.username);
const isPasswordValid = validatePassword(data.password);
const isEmailValid = validateEmail(data.email);

if (!isNameValid || !isUsernameValid || !isPasswordValid || !isEmailValid) {
    return res.status(400).send("Invalid input data");
}


// check if the user already exists
const existingUser = await collection.findOne({ $or: [{ username: data.username }, { email: data.email }] });
        if (existingUser) {
            if (existingUser.username === data.username) {
                return res.status(400).send("Username already exists. Please choose a different username.");
            } else if (existingUser.email === data.email) {
                return res.status(400).send("Email already exists. Please choose a different email.");
            }
        

}else {
    try{
    // hash the password using bcrypt
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    data.password = hashedPassword; //Replace the hash password with original password
    const userdata = await collection.insertMany(data);
    console.log(userdata);
    return res.redirect("/login");

    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Error registering user");
    }
}

}); 

// Login user
app.post("/login", async (req, res) => {

    try {
        const check = await collection.findOne({ username: req.body.username });
        if (!check || !(await bcrypt.compare(req.body.password, check.password))) {
            res.status(401).json({ success: false, error: "Wrong Username or Password. Please enter your details again." });
        } else {
            // res.status(200).json({ success: true });
            res.redirect("/profilepage2");
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ success: false, error: "An unexpected error occurred. Please try again later." });
    }

});

app.get('/profilepage2', async (req, res) => {
    try {
        // Fetch user data from the database based on the user's ID or any other identifier
        const user = await collection.findById(req.body.username); // Assuming you have the user ID in req.user.id
        console.log(user);

        // Render the profilepage2.ejs template and pass the user object to it
        res.render('profilepage2');
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).send('Internal server error');
    }
});

// Route to handle subscription
app.post("/subscribe", async (req, res) => {
    const { username, card } = req.body;

    // Update the user's subscription status and card number
    try {
        const user = await collection.findOneAndUpdate(
            { username: username },
            { isSubscribed: true, card: card },
            { new: true } // Return the updated user document
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
        console.error("Subscription error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});










const checkSubscription = async (req, res, next) => {
    try {
        const { username } = req.body;
        // Check if the user is subscribed by username
        const user = await collection.findOne({ username: username });
        if (user && user.isSubscribed) {            
            next();
        } else {
           
            res.status(403).json({ message: "Subscription required for unlimited access" });
        }
        // next();
    } catch (error) {
        console.error('Error checking subscription:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Route to handle reading articles
app.get('/Articles', checkSubscription, (req, res) => {
    if (req.isSubscribed) {
        // User is subscribed, allow reading
        res.render('Articles');
    } else {
        // User is not subscribed, show subscription message or redirect to subscribe page
        res.render('subscribeMessage');
    }
});



const port = 5000;
app.listen(port, () => {
    console.log('Server running on Port: 5000');
});

// this function validates name format: checks if it's not empty
function validateName(name) {
    return name && name.trim().length > 0;
}

 // this function validate username format: check if it's not empty
function validateUsername(username) {
    return username && username.trim().length > 0;
}

 // this function validates password format: checks if it's not empty and meets length requirements, 
 // it will return true if the password is not empty and has a length of 8 or more characters, and false otherwise.
function validatePassword(password) {
    return password && password.trim().length >= 8;
}
   
// this function validates email format using a regular expression
function validateEmail(email) {
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return format.test(email);
}






