const shortid = require('shortid')
const URL = require('../models/urlModel')

const handleGenerateNewShortUrl = async (req, res) => {
    console.log(req.body)
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'URL is required' })
    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
    })
    return res.json({ id: shortId })
}

const handleGetRedirectedUrl = async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push:{
                visitHistory:Date.now()
            }
        }
    )
    res.redirect(entry.redirectUrl)
}


module.exports = {
    handleGenerateNewShortUrl,
    handleGetRedirectedUrl
}