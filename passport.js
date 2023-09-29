const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;


// FACEBOOK
passport.use(new FacebookStrategy({
  clientID: '327586519677774',
  clientSecret: '8282a7af7c2062a53d385edc269edef9',
  callbackURL: 'http://localhost:4000/auth/facebook/callback',
  passReqToCallback: false,
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

// GOOGLE
passport.use(new GoogleStrategy({
  clientID: '763551140865-g58q49gvee53blb4av6vr02r46e96ifd.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:4000/auth/google/callback',
  scope: ['profile', 'email'],
}, (accessToken, refreshToken, profile, done) => {

  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport