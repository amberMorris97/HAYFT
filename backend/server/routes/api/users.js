const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');
const db = require('../../../database/index');

router.post('/register', auth.optional, (req, res, next) => {
  const { name, username, email, password } = req.body;
  if (!email) {
    return res.status(422).send({
      error: {
        email: 'is required',
      },
    });
  }

  if (!password) {
    return res.status(422).send({
      error: {
        password: 'is required',
      },
    });
  }

  if (!name) {
    return res.status(422).send({
      error: {
        name: 'is required',
      },
    });
  }

  if (!username) {
    return res.status(422).send({
      error: {
        username: 'is required',
      },
    });
  }

  const user = { name, email, username, password };

  const finalUser = new Users(user);

  finalUser.setPassword(password);

  return finalUser.save()
    .then(() => res.send({ user: finalUser.toAuthJSON() }))
    .catch((err) => res.send({ error: 'Register failed' }));
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  const { body: { username, password } } = req;
  console.log(username, password)
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
      throw err;
      return res.status(422).send({ error: err });
    }

    if (passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();
      res.cookie('Token', user.token);
      return res.status(200).send({ success: user.toAuthJSON() });
    }

    return res.status(200).send({ errors: 'Invalid credentials' });
  })(req, res, next);
});

router.get('/current', async (req, res, next) => {
  let cookie = req.headers.cookie.split(';')[1];
  if (!cookie) return res.send('user not logged in');

  const token = req.headers.cookie.split(';')[1].split('Token=')[1];

  const jsonPayload = Buffer.from(token, 'base64').toString();
  const splitJson = jsonPayload.split(",");
  const sliceJson = splitJson.slice(0, splitJson.length - 1);
  const id = JSON.parse(sliceJson[2].split(':')[1]);

  const user = await Users.findOne({_id:mongoose.Types.ObjectId(`${id}`)})
      .select('-password');

  if (user) {
    res.send({ success: user });
  } else {
    res.status(400).send({ error: 'user not found' });
  }
});

router.patch('/updateUser/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, username, password } = req.body;

  let filter;
  if (name) filter = { name };
  if (email) filter = { email };
  if (password) {
    bcrypt.genSalt(10, async (err, salt) => {
      bcrypt.hash(password, salt, async (err, hashed) => {
        const updated = await Users.updateOne({ _id:mongoose.Types.ObjectId(`${id}`) }, { password: hashed });
        if (updated) return res.status(200).send({ success: 'Information updated' });
        if (!updated) return res.status(400).send({ error: 'Information could not be updated at this time' });
      });
     });
     return;
  }

  const updated = await Users.updateOne({_id:mongoose.Types.ObjectId(`${id}`)}, filter);

  if (updated) res.status(200).send({ success: 'Information updated' });
  if (!updated) res.status(400).send({error: 'Information could not be updated at this time' });
});

router.put('/deleteUser/:id', async (req, res) => {
  const { id }  = req.params;

  const deleted = await Users.deleteOne({ _id:mongoose.Types.ObjectId(`${id}`) });

  if (deleted) res.status(200).send({ success: 'User has been deleted' });
  if (!deleted) res.status(200).send({ error: 'User could not be deleted at this time' });
});

module.exports = router;