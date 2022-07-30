const Cook = require("../../../model/Cook");
const Customer = require("../../../model/Customer");

const {
  addUser,
  getByEmail,
  addNewCook,
  addNewCustomer,
  addNewReview,
  getReviewsByCookID,
  getCookByUserId,
  getCustomerByUserId,
  getByUserId,
  getAllCooks,
  getUserIdByCook,
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
    console.log(user._id.toString());
    const cook = await getCookByUserId(user._id.toString());
    const customer = await getCustomerByUserId(user._id.toString());

    if (user.user_type == "customer") {
      description = "";
      opening_hours = "";
      rate = null;
      customer_id = customer._id;
      cook_id = "";
    } else {
      description = cook.description;
      opening_hours = cook.opening_hours;
      rate = cook.rate;
      cook_id = cook._id;
      customer_id = "";
    }

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
        description: description,
        opening_hours: opening_hours,
        rate: rate,
        cook_id: cook_id,
        customer_id: customer_id,
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

// Add Review
async function addReview(req, res) {
  try {
    console.log(req.body);

    const addReviewResult = await addNewReview(req.body);
    console.log("addReviewResult =>", addReviewResult);

    return res.send({ review_id: addReviewResult });
  } catch (error) {
    console.log(error);
  }
}

// Get Reviews
async function getReview(req, res) {
  try {
    console.log(req.query);

    if (req.query.id) {
      const id = req.query.id;
      const result = await getReviewsByCookID(id);
      console.log("review data =>", result);
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
}

// Get User by id
async function getUser(req, res) {
  try {
    console.log(req.query);

    if (req.query.id) {
      const id = req.query.id;
      const result = await getByUserId(id);
      console.log("user data =>", result);
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
}

// Get Cooks
async function getCooks(req, res) {
  try {
    console.log(req.query);

    const result = await getAllCooks();
    console.log("cooks =>", result);
    return res.send(result);
  } catch (error) {
    console.log(error);
  }
}

// Get User by cook id
async function getByCookId(req, res) {
  try {
    console.log(req.query);

    if (req.query.id) {
      const id = req.query.id;
      const result = await getUserIdByCook(id);
      console.log("user id =>", result._id);
      return res.send(result._id);
    }
  } catch (error) {
    console.log(error);
  }
}

async function findNearbyCooks(req, res) {
  try {
    //get customer location
    const id = req.query.id;
    const customer = await Customer.findById(req.query.id).populate("user");
    const customerLatitude = customer.user.location.coordinates[0];
    const customerLongitude = customer.user.location.coordinates[1];
    //get all cooks
    const cooks = await getAllCooks();
    //find cooks within 5km
    const nearbyCooks = cooks.filter((cook) => {
      const cookLatitude = cook.user.location.coordinates[0];
      const cookLongitude = cook.user.location.coordinates[1];
      const distance = getDistanceFromLatLonInKm(
        customerLatitude,
        customerLongitude,
        cookLatitude,
        cookLongitude
      );
      return distance <= 5;
    });
    return res.send(nearbyCooks);
  } catch (error) {
    console.log(error);
  }
}
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = degreesToRadians(lat2 - lat1); // deg2rad below
  var dLon = degreesToRadians(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(lat1)) *
      Math.cos(degreesToRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}
function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

module.exports = {
  register,
  login,
  addCook,
  addCustomer,
  addReview,
  getReview,
  getUser,
  getCooks,
  getByCookId,
  findNearbyCooks,
};
