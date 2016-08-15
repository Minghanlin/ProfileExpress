var router  = express.Router();

router.get('/', function(req, res) {
  res.render('index', { header: 'index!'});
});

router.get('/contact', function(req, res) {
  res.render('index', { header: 'contact!'});
});

router.get('/about', function(req, res) {
  res.render('index', { header: 'about!'});
});

router.get('/posts/new', function(req, res) {
  res.render("posts/new");
});

router.post('/posts', function(req, res) {
  console.log(req.body);
});


//RESTFUL 7 ROUTES
// GET    /posts
// GET    /posts/:id
// GET    /posts/new
// POST   /posts
// GET    /posts/:id/edit
// PUT    /posts/:id
// DELETE /posts/:id
// router.get('/posts', function(req, res) {
//   console.log("index");
//   res.send("INDEX");
// });
//
// router.get('/posts/:id', function(req, res) {
//   console.log("show");
//   res.send("SHOW");
// });
//
// router.get('/posts/new', function(req, res) {
//   console.log("new");
//   res.send("NEW");
// });
//
// router.post('/posts', function(req, res) {
//   console.log("create");
//   res.send("CREATE");
// });
//
// router.get('/posts/:id/edit', function(req, res) {
//   console.log("edit");
//   res.send("EDIT");
// });
//
// router.put('/posts/:id', function(req, res) {
//   console.log("update");
//   res.send("UPDATE");
// });
//
// router.delete('/posts/:id', function(req, res) {
//   console.log("delete");
//   res.send("DELETE");
// });

module.exports = router;
