const { Activity } = require('../db');


const postActivity = async (req,res)=>{
    try {
        const{name,dificulty,duration,season,countries}=req.body;
        console.log(name,dificulty,duration,season,countries)
        if(!name || !dificulty || !duration || !season || !countries)
        {
            res.status(208)('faltan datos necesarios para crear la actividad')
        }

        const existingActivity = await Activity.findOne({where:{name}});
        if (existingActivity) {
          res.status(208).json({message:'there is already a previously created activity with the same name'});

        }else{
            const newActivity = await Activity.create({name,dificulty,duration,season});
            newActivity.addCountry(countries);
            res.status(200).json({message:'activity successfuly created'})
        }

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}




module.exports= postActivity;