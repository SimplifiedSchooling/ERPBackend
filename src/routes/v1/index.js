const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const videoRoute = require("./video.route");
const planvideoRoute = require("./planvideo.route");
const boardRoute = require("./board.route");
const classesRoute = require("./classes.route");
const chapterRoute = require("./chapter.route");
const docsRoute = require("./docs.route");
const config = require("../../config/config");

const mediumRoute = require("./medium.route");
const lessionRoute = require("./lession.route");
const subjectRoute = require("./subject.route");
const bookRoute = require("./book.route");
const studioRoute = require("./studio.route");
const presentatorRoute = require("./presentator.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/videos",
    route: videoRoute,
  },
  {
    path: "/planvideos",
    route: planvideoRoute,
  },
  {
    path: "/boards",
    route: boardRoute,
  },
  {
    path: "/classes",
    route: classesRoute,
  },
  {
    path: "/medium",
    route: mediumRoute,
  },
  {
    path: "/lession",
    route: lessionRoute,
  },
  {
    path: "/chapter",
    route: chapterRoute,
  },
  {
    path: "/subjects",
    route: subjectRoute,
  },
  {
    path: "/books",
    route: bookRoute,
  },
  {
    path: "/studio",
    route: studioRoute,
  },
  {
    path: "/presentator",
    route: presentatorRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: "/docs",
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
