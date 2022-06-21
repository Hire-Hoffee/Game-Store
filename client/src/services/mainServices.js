import instance from "./instance";

const mainServices = {
  async getMainPage() {
    try {
      const result = await instance.get("/");
      return result;
    } catch (error) {
      throw error;
    }
  },

  async getAllGames() {
    try {
      const result = await instance.get("/games");
      return result;
    } catch (error) {
      throw error;
    }
  },

  async getAllCategories() {
    try {
      const result = await instance.get("/categories");
      return result;
    } catch (error) {
      throw error;
    }
  },

  async getGameInfo(params) {
    try {
      const result = await instance.get(`/games/${params}`);
      return result;
    } catch (error) {
      throw error;
    }
  },

  async getGamesNews() {
    try {
      const result = await instance.get("/news");
      return result;
    } catch (error) {
      throw error;
    }
  },
};

export default mainServices;
