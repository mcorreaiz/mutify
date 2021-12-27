const auth = false

export const getIndex = (req, res, next) => {
    auth ? res.render('index', { title: 'Express' }) : res.redirect('/auth');
}
