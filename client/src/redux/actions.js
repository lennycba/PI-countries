import axios from 'axios';
import {
    GET_COUNTRIES,
    GET_ACTIVITIES,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITIES,
    GET_CONTINENTS,
    ORDER_BY_NAME,
    ORDER_BY_POP,
    SEARCH_BY_NAME,
    NEW_ACTIVITY,
    GET_COUNTRY_BY_ID,
} from './types';


export const getCountries = () => {
    return async function (dispatch) {
	const bddInfo = await axios.get('http://localhost:3001/countries')
    const countries = bddInfo.data;
    dispatch({type:GET_COUNTRIES,payload:countries});
    }
};


export const getActivities = () => {
    return async function (dispatch) {
	const bddInfo = await axios.get('http://localhost:3001/activities')
    const activities = bddInfo.data;
    dispatch({type:GET_ACTIVITIES,payload:activities});
    }
};

export const getContinents = () =>{
    const repitedContinents = [];
    return async function (dispatch) {
	const bddInfo = await axios.get('http://localhost:3001/countries')
    bddInfo.data.map(country => repitedContinents.push(country.continent));
    const uniqueContinents = new Set(repitedContinents);

    let continents = [...uniqueContinents];
    dispatch({type:GET_CONTINENTS,payload:continents});
    }

}

export const filterByContinent = (continent) => {
    return {
        type:FILTER_BY_CONTINENT,
	    payload:continent
    }
}

export const filterByActivities = (activity) =>{
    return {
        type:FILTER_BY_ACTIVITIES,
        payload:activity
    }
}

export const orderByName = (orderName) =>{
    return {
        type:ORDER_BY_NAME,
        payload:orderName
    }
}

export const orderByPop = (orderPop) =>{
    return {
        type:ORDER_BY_POP,
        payload:orderPop
    }
}

export const searchByName = (search) =>{

    return async function (dispatch){
        let bddInfo = await axios.get(`http://localhost:3001/countries?name=${search}`)
        let countries = bddInfo?.data;
        dispatch({type:SEARCH_BY_NAME,payload:countries});
    }
}


export const addNewActivity = (newActivity) => {
    return async function (dispatch){
        await axios.post('http://localhost:3001/activities',newActivity)
        dispatch({type:NEW_ACTIVITY});
    
    }
}

export const getCountryById = (id) =>{
    return async function (dispatch){
            let country =  await axios.get(`http://localhost:3001/countries/${id}`)
            dispatch({type:GET_COUNTRY_BY_ID,payload:country.data})
    }
}
