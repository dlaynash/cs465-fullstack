/* GET about view */
var about = (req, res) => {
    res.render('index',{title: 'Travlr Getaways'});
};
module.exports = {
    about
};