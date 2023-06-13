const { Activity } = require('../db');


const postActivity = async (req,res)=>{
    try {
        const{name,dificulty,duration,season,countries}=req.body;
        console.log(name,dificulty,duration,season,countries)
        if(!name || !dificulty || !duration || !season || !countries)
        {
            throw Error('faltan datos necesarios para crear la actividad')
        }
        const newActivity = await Activity.create({name,dificulty,duration,season});
        newActivity.addCountry(countries);
        res.status(200).json({message:'actividad creada correctamente'})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}




module.exports= postActivity;