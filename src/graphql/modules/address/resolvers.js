import Address from '../../../models/Address';
import User from '../../../models/User';

export default {
  Address: {
    user: (post) => User.findById(post.user)
  },
  Query: {
    addresses: () => Address.find(),
    address: async (_, { id }) => await Address.find({ user: id })
  },
  Mutation: {
    createAddress: (_, { data }) => {
      const address = Address.create(data);

      return address;
    },
    updateAddress: (_, { id, data }) => Address.findOneAndUpdate(id, data, { new: true }),
    deleteAddress: async (_, { id }) => {
      const deleted = await Address.findOneAndDelete(id);

      return !!deleted;
    }
  },
};