const User = require("../../model/Users");

//Add user function
async function addUser(body, hashPassword) {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    profile_photo,
    location,
  } = body;

  const user = new User({
    first_name,
    last_name,
    email,
    password: hashPassword,
    phone_number,
    profile_photo,
    location,
  });

  return await user.save();
}

module.exports = {
  addUser,
};
