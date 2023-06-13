const { Country,Activity } = require('../db');
const {Op}=require('sequelize')

const getCountriesByName = async (req,res)=>{
    let {name} = req.query
    let countries
    try {
        if(name === undefined){
            countries = await Country.findAll({
                include:{
                    model:Activity,
                    attributes:['name'],
                    through:{
                        attributes:[],
                    }
                }
            });
            console.log('soy name, vengo desde el back',name)
        }else{
            countries = await Country.findAll({
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
        }

        
        if(countries.length < 1) throw Error('no se encontró el pais buscado')
        res.status(200).json(countries)
    } catch (error) {
        res.status(404).json({error:error.message});
    }
}


module.exports = getCountriesByName;