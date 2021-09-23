const { Router } = require("express");
const { check } = require("express-validator");


const { validation } = require("../middlewares/validations");
const { validationJwt } = require("../middlewares/validationJwt");

const { portfolioPost, portfolioGet } = require("../controllers/portfolio");

const router = Router();

router.get( "/" , portfolioGet );

router.post( "/" , [
    validationJwt,

    check("name", "nombre obligatorio").not().isEmpty(),
    check("name_coin", "name_coin obligatorio").not().isEmpty(),
    check("actual_price", "actual_price es obligatorio").not().isEmpty(),
    check("user", "el user es obligatorio").not().isEmpty(),

    validation,

], portfolioPost );

router.put( "/:id" , (req, res) => {
    console.log("hello")
});

router.delete( "/:id" , (req, res) => {
    console.log("hello")
});


module.exports = router;