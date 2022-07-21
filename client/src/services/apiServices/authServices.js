import { authInstance } from "../instances";

const authServices = {
  async userRegistration(data) {
    try {
      const result = await authInstance.post("/registration", data);
      return result;
    } catch (error) {
      throw error;
    }
  },
  async userLogin(data) {
    try {
      const result = await authInstance.post("/login", data);
      return result;
    } catch (error) {
      throw error;
    }
  },
  async userLogout() {
    try {
      const result = await authInstance.post("/logout");
      return result;
    } catch (error) {
      throw error;
    }
  },
};

export default authServices;
