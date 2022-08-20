import { mainInstance }  from "../instances";

const mainServices = {
  async getMainPage() {
    try {
      const result = await mainInstance.get("/");
      return result;
    } catch (error) {
      throw error;
    }
  },

  async getAllGames(pageNum = 1) {
    try {
      const result = await mainInstance.get("/games", { params: { page: pageNum } });
      return result;
    } catch (error) {
      throw error;
    }
  },

  async getAllCategories() {
    try {
      const result = await mainInstance.get("/categories");
      return result;
    } catch (error) {
      throw error;
    }
  },

  async getGameInfo(gameTitle) {
    try {
      const result = await mainInstance.get(`/games/${gameTitle}`);
      return result;
    } catch (error) {
      throw error;
    }
  },

  async getGamesNews() {
    try {
      const result = await mainInstance.get("/news");
      return result;
    } catch (error) {
      throw error;
    }
  },
};

export default mainServices;
