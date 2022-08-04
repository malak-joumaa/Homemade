const User = require("../../model/User");
const Cook = require("../../model/Cook");
const Customer = require("../../model/Customer");

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
    firebase_token,
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
    firebase_token,
  });

  return await user.save();
}

//Add cook function
async function addNewCook(body) {
  const { rate, description, opening_hours, user, orders, submitted_orders } =
    body;

  const cook = new Cook({
    rate,
    description,
    opening_hours,
    user,
    orders,
    submitted_orders,
  });

  return await cook.save();
}

//Add customer function
async function addNewCustomer(body) {
  const { user, orders, submitted_orders } = body;

  const customer = new Customer({
    user,
    orders,
    submitted_orders,
  });

  return await customer.save();
}

//Get user by id
async function getByUserId(id) {
  return await User.findById(id);
}

//Get user by email
async function getByEmail(email) {
  return await User.findOne({
    email,
  });
}

// Get Cook by id
async function getCookById(id) {
  return await Cook.findById(id).populate("user");
}

// Get Cook by user id
async function getCookByUserId(userId) {
  return await Cook.findOne({ user: userId });
}

// Get Customer by user id
async function getCustomerByUserId(userId) {
  return await Customer.findOne({ user: userId });
}

async function getAllCooks() {
  return await Cook.find().populate("menu").populate("user");
}

// Get user by cook id
async function getUserIdByCook(cookId) {
  return await Cook.findOne({ cook: cookId });
}

// Get cook by user id
async function getCookByUserId(userId) {
  return await Cook.findOne({ user: userId });
}

module.exports = {
  addUser,
  addNewCook,
  addNewCustomer,
  getByEmail,
  getCookByUserId,
  getCustomerByUserId,
  getByUserId,
  getAllCooks,
  getUserIdByCook,
  getCookById,
};
