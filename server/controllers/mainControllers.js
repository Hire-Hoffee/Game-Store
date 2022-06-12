class MainControllers {
  getMainPage(req, res) {
    res.json({ message: "home" });
  }

  getAllGames(req, res) {
    res.json({ message: "all games" });
  }

  getAllCategories(req, res) {
    res.json({ message: "all categories" });
  }

  getGameInfo(req, res) {
    res.json({ message: "game information" });
  }

  getGamesNews(req, res) {
    res.json({ message: "news" });
  }
}

module.exports = new MainControllers();
