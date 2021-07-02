const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');
const db = require('../../../database/index');

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
      console.log(passportUser._id, 'PASSPORT')
      const user = passportUser;
      user.token = passportUser.generateJWT();
      console.log(user, user.token)
      res.cookie('Token', user.token);
      return res.send({ user: user.toAuthJSON() });
    }

    return status(400).info;
  })(req, res, next);
});

// //GET current route (required, only authenticated users have access)
router.get('/current', async (req, res, next) => {
  if (!req.headers.cookie.split(';')[1]) return res.send('user not logged in');
  const token = req.headers.cookie.split(';')[1].split('Token=')[1];

  const jsonPayload = Buffer.from(token, 'base64').toString();
  const splitJson = jsonPayload.split(",");
  const sliceJson = splitJson.slice(0, splitJson.length - 1);
  const id = JSON.parse(sliceJson[2].split(':')[1]);

  const user = await Users.findOne({_id:mongoose.Types.ObjectId(`${id}`)})
      .select('-password');

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(400);
  }

});

module.exports = router;