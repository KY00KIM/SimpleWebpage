const DAO = require(`${__dirname}/../DAO`);


const indexPage = async (req, res, next) => { 
    try { 
        const obj = await DAO.getUserList();

        res.render('index.pug', {obj, total:obj.length});
    } catch (err) { 
        next(err);
    }

};

module.exports = {
    indexPage,
};