const Users = require("../model/Users");

// Get All users
const users_all = async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
      } catch (error) {
          
        res.json({ message: error });
      }
};

// Single users
const users_details = async (req, res) => {
    try {
        const users = await Users.findById(req.params.usersId);
        res.json(users);
      } catch (error) {
          
        res.json({ message: error });
      }
};

// Add New users
const users_create = async (req, res) => {
    const users = new Users({
        name: req.body.name,
        password: req.body.password,
        gender: req.body.gender,
        birthdate: req.body.birthdate,
        age: req.body.age, 
        country: req.body.country
      });
    
      try {
        const savedUsers = await users.save();
        res.send(savedUsers);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update users
const users_update = async (req, res) => {
    try {
        const users = {
            name: req.body.name,
            password: req.body.password,
            gender: req.body.gender,
            birthdate: req.body.birthdate,
            age: req.body.age,
            country: req.body.country
        };
        
        
        const updatedUsers = await Users.findByIdAndUpdate(
            { _id: req.params.usersId },
            users,
            {new: true}
            );
            
            res.json(updatedUsers);
        } catch (error) {
            res.json({ message: error });
        }
       
};

// Delete users
const users_delete = async (req, res) => {
    try {
        const removeUsers = await Users.findByIdAndDelete(req.params.usersId);
        res.json(removeUsers);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    users_all, 
    users_details, 
    users_create, 
    users_update, 
    users_delete
  }