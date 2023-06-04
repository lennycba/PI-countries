const { Country,Activity } = require('../db');
const {Op}=require('sequelize')

const getCountriesByName = async (req,res)=>{
    try {
        const {name} = req.query
        const countries = await Country.findAll({
            where:{
                name:{
                    [Op.iLike]:`%${name}%`
                }
            },
            include:{
                model:Activity,
                attributes:['name'],
                through:{
                    attributes:[]
                }
            }
        })
        if(countries.length < 1) throw Error('no se encontró el pais buscado')
        res.status(200).json(countries)
    } catch (error) {
        res.status(404).json({error:error.message});
    }
}


module.exports = getCountriesByName;