const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const SpotifyStrategy = require('passport-spotify').Strategy;
const authKeys = require('./oauth-config/auth-keys.js')


app.use(bodyParser.json());
app.use(cors());

// app.use(cookieSession({
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: [authKeys.session.cookieKey],
// }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new SpotifyStrategy(
    {
      clientID: authKeys.clientID,
      clientSecret: authKeys.clientSecret,
      callbackURL: 'http://localhost:8080/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      // process.nextTick(function() {
      //   return done(null, profile);
      // })
      return done();
    }
  )
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();  
})

// authorization
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// // TEMPORARY OAUTH TEST
// // view engine
// app.set('view engine', 'ejs');
// app.get('/', (req, res) => {
//   res.render('./../client/auth-test.ejs');
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});


// Listen for requests on PORT 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000')
});
module.exports = app;
