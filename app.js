if(process.env.NODE_ENV !== 'production'){
    require ('dotenv').config();
}
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const methodOverride = require('method-override')
const localStrategy = require('passport-local');
const session = require('express-session');
const flash = require('connect-flash')

const User = require('./models/user')
// const seedDB = require('./seed');

const blogRoutes = require('./routes/blog');
const subscribeRoutes = require('./routes/subscribe');
const authRouter = require('./routes/auth')
mongoose.connect(process.env.DB_URL,
 {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex:true
    })
    .then(()=>{
        console.log("db connect");  
    })

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(__dirname + './assets'));    
app.use(express.static(path.join(__dirname, '/assets')));
app.use(express.static(__dirname + './public'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended:true}));
const sessionConfig = {
    secret:'we need nlog',
    resave: false,
    saveUninitialized: true
}
app.use(methodOverride('_method'));
app.use(session(sessionConfig))
app.use(flash());
// initialize passport and session
app.use(passport.initialize());
app.use(passport.session());
// configring the passport to use local
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
})


app.use(blogRoutes);
app.use(subscribeRoutes);
app.use(authRouter)


app.listen(process.env.PORT || 3000,()=>{
    console.log("server start 3000")
})