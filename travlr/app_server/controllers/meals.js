/* GET meals view */
var meals = (req, res) => {
    res.render('index',{title: 'Travlr Getaways'});
};
module.exports = {
    meals
};