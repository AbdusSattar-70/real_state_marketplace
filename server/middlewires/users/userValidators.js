const { check, validationResult } = require('express-validator');
const User = require('../../models/User.model');

// add user
const addUserValidators = [
  check('userName')
    .isLength({ min: 1 })
    .withMessage('userName is required')
    .isAlpha('en-US', { ignore: ' -' })
    .withMessage('Name must not contain anything other than alphabet')
    .trim(),
  check('email')
    .isEmail()
    .withMessage('Invalid email address')
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          throw Error('Email already is use!');
        }
      } catch (err) {
        throw Error(err.message);
      }
    }),
  check('password')
    .isStrongPassword()
    .withMessage(
      'Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol',
    ),
];

const addUserValidationHandler = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    // response the errors
    res.status(500).json({
      errors: mappedErrors,
    });
  }
};

module.exports = {
  addUserValidators,
  addUserValidationHandler,
};
