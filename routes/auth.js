const express = require('express');
const router = express.Router();
const passport = require('passport');

const URL_LOGIN_FAILED = 'http://localhost:3000/loginFailed'
const URL_LOGIN_SUCCESS = 'http://localhost:3000/loginSuccess'
const URL_LOGIN = 'http://localhost:3000/login'


// GOOGLE
router.get('/google',
  passport.authenticate('google')
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: URL_LOGIN_FAILED }),
  (req, res) => {
    console.log('Login Email:', req.user)
    res.redirect(URL_LOGIN_SUCCESS);
  }
);

router.get('/google/logout', async (req, res, next) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect(URL_LOGIN);
  });

});


// FACEBOOK
router.get('/facebook',
  passport.authenticate('facebook')
);

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: URL_LOGIN_FAILED }),
  (req, res) => {
    console.log('Login Facebook: ', req.user);
    res.redirect(URL_LOGIN_SUCCESS);
  }
);

router.get('/facebook/logout', async (req, res) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect(URL_LOGIN);
  });
});




module.exports = router;
