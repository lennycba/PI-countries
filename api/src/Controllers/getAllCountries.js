const { Country } = require('../db');
const axios = require('axios');
const {URL} = process.env;



const getAllCountries = async () =>{
    const allCountries = await Country.findAll(); //EN PRODUCCION ELIMINAR, busco todos los registros en la bdd

    if(allCountries.length === 0){    //si no hay registros busco en la api, mapeo y los cargo en la bdd
        countries = await axios.get(`${URL}all`);
        countries = countries.data.map(c => {
            return {
                ID: c.alpha3Code,
                name: c.name,
                flag: c.flag,
                continent: c.region,
                capital: c.capital,
                subregion: c.subregion,
                area: c.area,
                population: c.population,
            }
        })
        
         await Country.bulkCreate(countries);
         console.log('base de datos actualizada')
    }
    return allCountries;
}

//esta funcion se ejecuta cada vez que el servidor inicia, busca todos los paises en la api y los carga en la bdd

module.exports = getAllCountries;