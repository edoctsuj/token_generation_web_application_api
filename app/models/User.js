const knexConfig = require("../../db/knexfile");
const knex = require("knex")(knexConfig.development);

const User = {
  getByPhoneNumber: async (phone) => {
    try {
      return await knex("users").where("phone", phone).first();
    } catch (error) {
      console.error("Error fetching user by phone number:", error);
      throw error;
    }
  },
  create: async (userData) => {
    try {
      const [insertedUser] = await knex("users").insert(userData);
      return insertedUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
};

module.exports = User;
