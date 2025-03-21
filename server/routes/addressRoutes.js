const express = require("express");
const { addAddress, getAddresses, deleteAddress } = require("../controllers/addressController");

const router = express.Router();

router.post("/:userId", addAddress);
router.get("/:userId", getAddresses);
router.delete("/:userId/:addressId", deleteAddress);

module.exports = router;
