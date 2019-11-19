import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import Login from './Login.jsx'

const routing = (
  <Router>
    <div>
      {/* <Link to="/main">Main</Link> */}
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/main" component={App} />
      {/* <Link to="/main"><button>Login with Spotify</button></Link> */}
      {/* <button onClick={()=>handleSignIn()}>Login with Spotify</button> */}
      <button><a href="/auth/spotify">Login with Spotify</a></button>
    </div>
  </Router>
);

const handleSignIn = () => {
  fetch('/auth/spotify', {
    // mode: 'no-cors'
  })
  .then((res) => {
    console.log('res in handlesignin: ', res)
  })
  .catch((err) => {
    console.log('Error signing in from index.js')
  });
}

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// function AuthButton() {
//   let history = useHistory();

//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         fakeAuth.isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }


ReactDOM.render(routing, document.getElementById('root'));