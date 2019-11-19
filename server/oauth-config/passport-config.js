const SpotifyStrategy = require('passport-spotify').Strategy;
const passport = require('passport');
const authKeys = require('../oauth-config/auth-keys.js')

passport.use(
  new SpotifyStrategy(
    {
      clientID: authKeys.clientID,
      clientSecret: authKeys.clientSecret,
      callbackURL: 'http://localhost:8888/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
        return done(err, user);
      });
    }
  )
);