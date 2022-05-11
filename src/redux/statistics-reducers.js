const INITIAL_STATE={
    statistics:[],
    countries:[]
}

const statisticsReducers =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'GET_DATA':
            return{
                ...state,
                statistics: action.payload
            }
        case 'GET_COUNTRY':
            return{
                ...state,
                countries: action.payload
            }
        default:
            return state;
        
    }
}
export default statisticsReducers;