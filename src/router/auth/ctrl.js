const DAO = require('../../DAO');


const signInForm = (req, res, next) => {
    try {
        res.render('./auth/sign-in.pug');
    } catch (e) {
        next(e);
    }
}


const signUpForm = (req, res, next) => {
    try {
        res.render('./auth/sign-up.pug');
    } catch (e) {
        next(e);
    }
}


const signIn = async (req, res, next) => {


}


const signUp = async (req, res, next) => {


}


const signOut = async (req, res, next) => {


}

module.exports = {
    signInForm,
    signUpForm
}