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


const initialState = {
    countries:[],
    activities:[],

    detailCountry:[],
    continents: [],
    filteredCountries: [],
    sContinent: '',
    sActivity:''
}




const rootReducer = ( state = initialState, actions) =>{

    switch (actions.type) {
        case GET_COUNTRIES:
            
            return {
                ...state,
                countries:actions.payload,
                filteredCountries:actions.payload,
                
            }
        case GET_ACTIVITIES:
            return {
                 ...state,activities:actions.payload
            }
        case FILTER_BY_CONTINENT:
                const continent = actions.payload;
                if(continent === 'All'){
                    return {
                        ...state,
                        filteredCountries : [...state.countries]
                     }
                    
                }else{
                const filteredCount = state.filteredCountries.filter((count) => count.continent === continent)
                return {...state,filteredCountries: filteredCount}
                }
        
        case FILTER_BY_ACTIVITIES:
                const activity = actions.payload;

                    if(activity === 'none' || activity === ''){

                        return{
                            ...state,filteredCountries:[...state.countries]
                        }
                    }

                    if(activity === 'All'){
                            let filtered = state.filteredCountries.filter((count)=> count.Activities.length > 0)
                        return{
                            ...state,filteredCountries: filtered
                        }
                    }else{
                        const activityComplete = state.activities.filter(act => act.name === activity)
                        const countriesRaw = activityComplete[0]?.Countries
                        const cleanNames = countriesRaw?.map(c => c.name)
                        const filtered = [];
                      
                        cleanNames?.forEach((country)=>{
                            let result = state.filteredCountries.filter(count => count.name === country)[0]
                            if(result !== undefined){
                                filtered.push({...result})
                            }
                        })
                        return{
                          ...state,filteredCountries:filtered
                        }
                    }

        case GET_CONTINENTS:
                return {
                    ...state,continents:actions.payload
                }
        case ORDER_BY_NAME:
            const orderN = actions.payload;
            
            const sortedN = state.filteredCountries.sort((a, b) => {
                if (orderN === 'Upward') {
                  return a.name.localeCompare(b.name); // Orden ascendente
                } else {
                  return b.name.localeCompare(a.name); // Orden descendente
                }
              })
              return {...state,filteredCountries:sortedN}
            
        case ORDER_BY_POP:
            const orderP = actions.payload;
                const sortedP = state.filteredCountries.sort((a, b) => {
                    if (orderP === 'Upward') {
                      return a.population - b.population; // Orden ascendente
                    } else {
                      return b.population - a.population; // Orden descendente
                    }
                  })
                  return {...state,filteredCountries:sortedP}


        case SEARCH_BY_NAME:
            const search = actions.payload;
            if (search.length){
                return{
                    ...state,filteredCountries:search
                }
            }

        case GET_COUNTRY_BY_ID:
            const filteredById = actions.payload
            return {
                ...state,detailCountry: filteredById
            }

        case NEW_ACTIVITY:
            return {...state}

            default:
                    return {...state};
    }
}


export default rootReducer;