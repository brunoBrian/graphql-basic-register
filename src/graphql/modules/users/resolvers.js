import User from '../../../models/User';
import Address from '../../../models/Address';
import { USER_ADDED } from './channels';

export default {
  // User: {
  //   fullName: (user) => `${user.firstName} ${user.lastName}`
  // },
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: async(_, { data }, { pubsub }) => {
      const user = await User.create(data);

      await Address.create({...data.address, user: user._id })

      pubsub.publish(USER_ADDED, {
        userAdded: user
      })
      
      return user;
    },
    updateUser: (_, { id, data }) => User.findOneAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => {
      const deleted = await User.findOneAndDelete(id);

      return !!deleted;
    }
  },
  Subscription: {
    userAdded: {
      subscribe: (obj, args, { pubsub }) => pubsub.asyncIterator(USER_ADDED)
    }
  }
};