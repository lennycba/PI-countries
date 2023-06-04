const { Country } = require('../db');



const getCountriesById = async(req,res)=>{
    let {IdPais} = req.params;
        IdPais = IdPais.toUpperCase();
    try {
        const pais = await Country.findByPk(IdPais);
        res.status(200).json(pais)
        
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}






module.exports = getCountriesById;