import axios from "axios";

export const getStatistics = (country) => async dispatch =>{
    await axios.get(`https://api.covid19api.com/total/dayone/country/${country ? country : 'Kyrgyzstan'}`)
    .then((res)=>{
        console.log(res,'redux')
        dispatch({
            type:'GET_DATA',
            payload: res.data
        })
    })
}
export const getCountries = () => async dispatch =>{
    await axios.get('https://api.covid19api.com/countries')
    .then((res)=>{
        dispatch({
            type:'GET_COUNTRY',
            payload:res.data
        })
    })
}