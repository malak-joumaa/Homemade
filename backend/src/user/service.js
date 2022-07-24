const User = require("../../model/User");
const Cook = require("../../model/Cook");
const Customer = require("../../model/Customer");
const Review = require("../../model/Review");
const { populate } = require("../../model/Menu");

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
async function addNewCook(body) {
  const { rate, description, opening_hours, user, orders } = body;

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
  const { user, categories, orders } = body;

  const customer = new Customer({
    user,
    categories,
    orders,
    submitted_orders,
  });

  return await customer.save();
}

//Add customer function
async function addNewReview(body) {
  const { user_review, cook, customer } = body;

  const review = new Review({
    user_review,
    cook,
    customer,
  });

  return await review.save();
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

async function getCookByUserId(userId) {
  return await Cook.findOne({ user: userId });
}

async function getCustomerByUserId(userId) {
  return await Customer.findOne({ user: userId });
}
async function getReviewsByCookID(id) {
  return await Review.find({ cook: id }).populate("customer");
}

module.exports = {
  addUser,
  addNewCook,
  addNewCustomer,
  addNewReview,
  getByEmail,
  getReviewsByCookID,
  getCookByUserId,
  getCustomerByUserId,
  getByUserId,
};
