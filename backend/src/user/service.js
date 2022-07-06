const User = require("../../model/Users");
const Cook = require("../../model/Cooks");
const Customer = require("../../model/Customers");

//Add user function
async function addUser(body, hashPassword) {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    profile_photo,
    location,
    user_type,
  } = body;

  const user = new User({
    first_name,
    last_name,
    email,
    password: hashPassword,
    phone_number,
    profile_photo,
    location,
    user_type,
  });

  return await user.save();
}

//Add cook function
async function addCook(body) {
  const { rate, opening_hours, user } = body;

  const cook = new Cook({
    rate,
    opening_hours,
    user,
  });

  return await cook.save();
}

//Add customer function
async function addCustomer(body) {
  const { user, categories } = body;

  const customer = new Customer({
    user,
    categories,
  });

  return await customer.save();
}

//Get user by email
async function getByEmail(email) {
  return await User.findOne({
    email,
  });
}

module.exports = {
  addUser,
  addCook,
  addCustomer,
  getByEmail,
};
