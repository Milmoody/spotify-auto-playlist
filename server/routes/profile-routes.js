const router = require('express').Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    // execute if user is not logged in
    res.redirect('/auth/login')
  } else {
    // if they are logged in, go next
    next();
  }
};

router.get('/', authCheck, (req, res) => {
  res.send('You are logged in, this is your username: ' + req.user.username);
})

module.exports = router;