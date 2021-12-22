const auth = false

const getIndex = (req, res, next) => {
    auth ? res.render('index', { title: 'Express' }) : res.redirect('/auth');
}

module.exports = { getIndex }