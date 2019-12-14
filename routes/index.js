var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "TutorHall" });
});

/* GET login page*/
router.get("/login", (req, res, next) => {
  res.render("login", { title: "Login - TutorHall" });
});

/* GET signup page*/
router.get("/signup", (req, res, next) => {
  res.render("signup", { title: "Register - TutorHall" });
});

router.get("/course", (req, res, next) => {
  res.render("course", { title: "Course Detail - TutorHall" });
});

router.get("/blog", (req, res, next) => {
  res.render("blog", { title: "Welcome to TutorHall Blog" });
});

router.get("/about", (req, res, next) => {
  res.render("about", { title: "About Us - TutorHall" });
});

module.exports = router;
