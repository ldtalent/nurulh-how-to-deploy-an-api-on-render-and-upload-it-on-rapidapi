const express = require('express');
const router = express.Router();

router.get(`/`, function (req, res) {
    res.status(200).json({msg: `Hi there! Welcome to our API. This is a GET request.`});
});

router.post(`/`,function (req, res) {
    res.status(200).json({msg: `Hi there! This is a POST request.`});
})

router.put(`/`, function (req, res) {
    res.status(200).json({msg: `Hi there! This is a PUT request.`})
})

router.delete(`/`, function (req, res) {
    res.status(200).json({msg: `Hi there! This is a DELETE request`})
})

module.exports = router;