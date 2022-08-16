import { userInstance } from "../instances";

const userServices = {
  async getUserAccount() {
    try {
      const result = userInstance.get("/account");
      return result;
    } catch (error) {
      throw error;
    }
  },
};

export default userServices;
