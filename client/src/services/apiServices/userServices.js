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
  async addToCart(gameId) {
    try {
      const result = userInstance.post(`/add_to_cart/${gameId}`);
      return result;
    } catch (error) {
      throw error;
    }
  },
  async getCartGames() {
    try {
      const result = userInstance.get("/cart");
      return result;
    } catch (error) {
      throw error;
    }
  },
  async changeAmount(data) {
    try {
      const result = userInstance.post("/change_amount", data);
      return result;
    } catch (error) {
      throw error;
    }
  },
};

export default userServices;
