class MainController {
  home(req, res) {
    res.json({ message: "home" });
  }

  allGames(req, res) {
    res.json({ message: "all games" });
  }

  allCategories(req, res) {
    res.json({ message: "all categories" });
  }

  gameInfo(req, res) {
    res.json({ message: "game information" });
  }
}

module.exports = new MainController();
