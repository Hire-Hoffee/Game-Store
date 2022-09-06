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
  async addToCart(gameId, platform) {
    try {
      const result = userInstance.post(`/add_to_cart/${gameId}`, platform);
      return result;
    } catch (error) {
      throw error;
    }
  },
  async deleteFromCart(gameId) {
    try {
      const result = userInstance.post(`/delete_from_cart/${gameId}`);
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
  async postReview(gameId, reviewContent) {
    try {
      const result = userInstance.post(`/post_review/${gameId}`, reviewContent);
      return result;
    } catch (error) {
      throw error;
    }
  },
  async buyGames(cartId, amount) {
    try {
      const result = userInstance.post(`/buy_games/${cartId}`, amount);
      return result;
    } catch (error) {
      throw error;
    }
  },
};

export default userServices;
