const { Customer, Payment } = require("../models/userModels");
const { verifyToken } = require("../config/webTokens");

const userServices = {
  async userAccountService(userToken) {
    const jwt = userToken.split(" ")[1];
    const payload = verifyToken(jwt, process.env.SECRET_ACCESS, {
      ignoreExpiration: true,
    });

    const userData = await Customer.findOne({
      where: { email: payload.email },
      attributes: {
        exclude: ["id", "isVerified", "verificationString", "authToken", "password"],
      },
      include: [
        { model: Payment, attributes: { exclude: ["customerId", "id", "CVV"] } },
      ],
    });

    return userData;
  },
};

module.exports = userServices;
