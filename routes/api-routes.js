var db = require('../models');

module.exports = function (app) {
    app.get('/', function (req, res) {
        db.Burger.findAll().then(function (data) {
            console.log("===========table data============");
            console.log(data)
            var obj = {burgers: data}
            console.log(obj);
            res.render('index', obj)
        })
    })
    app.put('/:id', function (req, res) {
        var id = req.params.id;
        db.Burger.update({ devoured: req.body.devoured }, { where: { id: id } })
            .then(function (data) {
                res.redirect('/');
            });
    });
    app.post('/', function (req, res) {
        var data = {
            burger_name: req.body.name,
            devoured: 0
        }
        db.Burger.create(data).then(function (response) {
            res.redirect('/');
        })
    });
}