const indexPage = async (req, res, next) => { 
    try { 
        res.render('index.pug');
    } catch (err) { 
        next(err);
    }

};

module.exports = {
    indexPage,
};