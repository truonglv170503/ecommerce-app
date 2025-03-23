const User = require("../models/user");

exports.addAddress = async (req, res) => {
  try {
    const { userId } = req.params;
    const newAddress = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.addresses.push(newAddress);
    await user.save();

    res.status(200).json({ message: "Address added successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Failed to add address", error });
  }
};

exports.getAddresses = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user.addresses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch addresses", error });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const { userId, addressId } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { addresses: { _id: addressId } } },
      { new: true }
    );

    res.status(200).json({ message: "Address deleted successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete address", error });
  }
};
