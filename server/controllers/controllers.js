class MainController {
  main(req, res) {
    res.json({ message: "working" });
  }
}

module.exports = new MainController();
