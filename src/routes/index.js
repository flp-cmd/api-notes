const { Router } = require("express");

const routes = Router();

const usersRouter = require("./user.routes");
const notesRouter = require("./notes.routes");
const sessionRouter = require("./sessions.routes")
const tagsRoutes = require("./tags.routes")

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use("/sessions", sessionRouter);
routes.use("/tags", tagsRoutes);

module.exports = routes;
