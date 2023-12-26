const express = require('express')
const URL = require('../models/urlModel')
const router = express.Router();
const { handleGenerateNewShortUrl, handleGetRedirectedUrl } = require('../controllers/urlController')
router.post("/", handleGenerateNewShortUrl)
router.get("/:shortId", handleGetRedirectedUrl)

module.exports = router;