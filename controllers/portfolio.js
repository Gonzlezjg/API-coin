const { response } = require("express");
const  Portfolio  = require("../models/portfolio");


const portfolioGet = async ( req,  res = response ) => {

    const [ portfolio ]= await Promise.all([
        Portfolio.find( { status: true } )
         .populate("user", "user_name")
    ]);

    res.json( {portfolio: portfolio })
} 

const portfolioPost = async( req, res = response ) => {

    const {name, name_coin, actual_price} = req.body;
   
    const portfolioData = await Portfolio.findOne({name, name_coin, actual_price})

    if( portfolioData ) {
        return res.status(400).json({
            msg: "El portafolio ya existe"
        })
    }

    const data = {
        name,
        name_coin,
        actual_price,
        user : req.user._id,
    }

    const portfolio = new Portfolio( data );

    await portfolio.save();

    res.status(201).json(portfolio)

}

module.exports = {
    portfolioPost,
    portfolioGet
}
