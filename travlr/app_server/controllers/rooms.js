/* GET rooms view */
var rooms = (req, res) => {
    res.render('index',{title: 'Travlr Getaways'});
};
module.exports = {
    rooms
};