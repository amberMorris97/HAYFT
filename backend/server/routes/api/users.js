const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');

router.post('/register', auth.optional, (req, res, next) => {
  const { user } = req.body;

  if (!user.email) {
    return res.status(422).send({
      errors: {
        email: 'is required',
      },
    });
  }

  if (!user.password) {
    return res.status(422).send({
      errors: {
        password: 'is required',
      },
    });
  }

  if (!user.name) {
    return res.status(422).send({
      errors: {
        name: 'is required',
      },
    });
  }

  if (!user.username) {
    return res.status(422).send({
      errors: {
        username: 'is required',
      },
    });
  }

  const finalUser = new Users(user);

  console.log(finalUser, 'FINAL U')

  finalUser.setPassword(user.password);

  return finalUser.save()
    .then(() => res.send({ user: finalUser.toAuthJSON() }));
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  const { body: { username, password } } = req;
  if (!username) {
    return res.status(422).send({
      errors: {
        username: 'is required',
      },
    });
  }

  if (!password) {
    return res.status(422).send({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if (err) {
      return next(err);
    }
    if (passportUser) {
      console.log(passportUser, 'PASSPORT')
      const user = passportUser;
      user.token = passportUser.generateJWT();
      return res.send({ user: user.toAuthJSON() });
    }

    return status(400).info;
  })(req, res, next);
});

// //GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  // console.log(req)
  const { payload: { id } } = req;
  return Users.findById(id)
    .then((user) => {
      console.log(user, id, 'user ID')
      if (!user) {
        return res.sendStatus(400);
      }

      return res.json({ user: user.toAuthJSON() });
    });
});

module.exports = router;