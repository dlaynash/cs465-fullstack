/* GET news view */
var news = (req, res) => {
    res.render('index',{title: 'Travlr Getaways'});
};
module.exports = {
    news
};