import userModel from "../model/UserModel.js";

const myResolvers = {
  Query: {
    BeginningToNail: () => {
      return "this is a brand new";
    },

    getUserByName: async (_, { name: args }) => {
      try {
        const desiredUser = await userModel.findOne({ name: args });
        return desiredUser;
      } catch (error) {
        throw new Error("Failed to fetch user", error);
      }
    },
    fetchAllUsers: async () => {
      try {
        const allUsers = await userModel.find();
        return allUsers;
      } catch (error) {
        throw new Error("Cannot fetch allUsers");
      }
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      try {
        const { email } = args;

        const existingEmail = await userModel.findOne({ email });
        if (existingEmail) {
          throw new Error("A user with the same email already exists");
        }

        const newUser = new userModel(args);
        const result = await newUser.save();
        return result;
      } catch (error) {
        throw new Error("Failed to create a new user", error);
      }
    },
    deleteUserById: async (_, { userId }) => {
      try {
        await userModel.findByIdAndDelete(userId);
        return true;
      } catch (error) {
        console.error("Failed to delete user:", error);
        throw new Error("Failed to delete user");
      }
    },
    updateUser: async (_, { input }) => {
      try {
        const { id, name, email, password, age } = input;
        const updateFields = { name, email, password, age };
        const updatedUser = await userModel.findByIdAndUpdate(
          id,
          updateFields,
          {
            new: true,
          }
        );
        return updatedUser;
      } catch (error) {
        throw new Error("Unable to update the user information", error);
      }
    },
  },
};

export default myResolvers;
