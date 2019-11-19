// const router = require('express').Router();
const express = require('express');
const app = express();

const passport = require('passport');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();  
})

// OAuth login
app.get('/login', (req, res) => {
  res.send('hey you gotta login');
});

app.get('/logout', (req, res) => {
  // handle with passport
  req.logout();
  res.redirect('/')
});

app.get('/spotify', passport.authenticate('spotify', {
  scope: ['playlist-modify-private']
}), (req, res) => {
  res.status(418).send('Error in passport Spotify auth route')
});

// callback route for spotify to redirect to
app.get('/spotify/callback', passport.authenticate('spotify'), (req, res) => {
  res.status(418).send(res.locals.profile);
  // res.redirect('/profile')
})

module.exports = app;