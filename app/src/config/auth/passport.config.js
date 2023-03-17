const LocalStrategy = require('passport-local').Strategy; // Local Strategy

const { comparePasswords } = require('../../middleware/hashPassword.middleware');
const { BCRYPT_PASSWORD } = require('../environment/env.config');
const UserModel = require('../../models/users.model');

let userModel = new UserModel();

function initialize(passport) {
  // Function will run when the Passport executed
  const authenticateUser = async (email, password, done) => {
    console.log(`Email: ${email}, Password: ${password} form Passport`);

    let user = await userModel.findUserBy('email', email);

    if (user) {
      // User found in db
      //   console.log('------------>>>', user);

      //   let isMatched = comparePasswords(`${password}${BCRYPT_PASSWORD}`, user.password);
      let isMatched = comparePasswords(password, user.password);

      if (isMatched) {
        return done(null, user);
      } else {
        done(null, false, { message: 'Password is not correct' });
      }
    } else {
      // User not found in db
      return done(null, false, { message: 'Email is not Registered' });
      // done("Server-side Error message", user, {message: "Descriptive Message for Client"})
    }
  };

  /**
   * 1- Choose the Passport Strategy (login Strategy type, ex: using google, or facebook account)
   * Here we will use Local Strategy
   */
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email', // the name of the HTML input field
        passwordField: 'password',
      },
      authenticateUser,
    ),
  );

  /**
   *  2 Configure the Passport Serialization
   * (How to Save the Session in the user device)
   */
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    let user = await userModel.findUserBy('id', id);

    if (user) return done(null, user);
  });
}

module.exports = initialize;
