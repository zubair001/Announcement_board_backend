var express = require('express');
var router = express.Router();

const {Posts} = require('../model/posts');
const posts = new Posts();



/* GET posts listing. */
router.get('/', function (req, res) {
  res.json(posts.jsonData());
});

router.delete('/:id', (req, res) => {
    posts.delete(req.params.id);
    res.sendStatus(200);
});

router.post('/', (req, res) => {
    const postId = posts.create(req.body);
    res.status(200).send({"id": postId});
});

router.get('/filter', (req, res) => {
  const filteredData = posts.getPostsBetweenDates(req.query.fromDate, req.query.toDate);
  res.status(200).json(filteredData);
});


module.exports = router;
