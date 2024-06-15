const { Router } = require("express");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tagsRoutes = Router();

const TagsController = require("../controllers/TagsController");

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);

module.exports = tagsRoutes;
