const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountriesByName = async (req, res) => {
  let { name } = req.query;
  let countries;
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
    }else{
      countries = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: {
          model: Activity,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
    }

    if (countries.length === 0) {
      res.status(200).json({ message: "country not found" });
    } else {
      res.status(200).json(countries);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCountriesByName;
