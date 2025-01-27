
  const Passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const Menu = require('../Models/menu');

  // implementing authentication on Menu Routes

  Passport.use(new LocalStrategy(async (USERNAME, password, done)=>{
        try{
             const user = await Menu.findOne({username: USERNAME});

             if(!user) {
                  return done (null, false, {message: "Incorrect Username"});
             }

             const isPasswordMatch = await user.comparePassword(password);

             if(isPasswordMatch) {
                  return done(null, user);
             } else {
                  return done (null, false, {message: "Incorrect Password"});
             }
        }   catch (err) {
             return done(err);
        }
  }))

  module.exports = Passport;