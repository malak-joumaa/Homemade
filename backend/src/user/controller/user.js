const {
  addUser,
  getByEmail,
  addNewCook,
  addNewCustomer,
} = require("../service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

// User Register
async function register(req, res) {
  try {
    console.log(req.body);

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const addUserResult = await addUser(req.body, hashPassword);
    console.log("addUserResult =>", addUserResult);

    return res.send({ user: addUserResult._id });
  } catch (error) {
    console.log(error);
  }
}

// User Login
async function login(req, res) {
  try {
    const user = await getByEmail(req.body.email);
    if (!user) return res.status(400).send("invalid credentials");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) return res.status(400).send("invalid credentials");

    const token = jwt.sign(
      {
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_number: user.phone_number,
        profile_photo: user.profile_photo,
        location: user.location,
        user_type: user.user_type,
      },
      TOKEN_SECRET
    );

    return res.status(200).json({ token: token });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

// Add Cook
async function addCook(req, res) {
  try {
    console.log(req.body);

    const addCookResult = await addNewCook(req.body);
    console.log("addCookResult =>", addCookResult);

    return res.send({ cook_id: addCookResult._id });
  } catch (error) {
    console.log(error);
  }
}

// Add Customer
async function addCustomer(req, res) {
  try {
    console.log(req.body);

    const addCustomerResult = await addNewCustomer(req.body);
    console.log("addCustomerResult =>", addCustomerResult);

    return res.send({ customer_id: addCustomerResult._id });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  register,
  login,
  addCook,
  addCustomer,
};
