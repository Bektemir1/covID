import React,{useEffect,useState} from 'react';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import TopRecoverred from '../TopRecoverred/TopRecoverred';
import './Statistics.css';
import { useSelector , useDispatch } from 'react-redux';
import { getStatistics,getCountries } from '../../redux/statistics-action';

const Statistics = () =>{

    // country comes from localStorage
    const [country,setCountry] = useState(JSON.parse(localStorage.getItem('country')))

    // Get all data from state

    let statistics = useSelector(state=>state.statistics.statistics.sort((a,b)=> a.Date - b.Date));
    

    // find the max recovered object

    const recover = Math.max(...statistics.map(o => o.Recovered))
    const recoverObj = statistics.find((el)=>el.Recovered === recover);
    
    // get all countries for select option
    const countries = useSelector(state=>state.statistics.countries)

    const dispatch = useDispatch()
   
    useEffect(()=>{
        dispatch(getStatistics(country))
        dispatch(getCountries())
       
    },[country])

    // Select country

    const selectCountry  = (e) =>{
        localStorage.setItem('country',JSON.stringify(e.target.value))
        setCountry(JSON.parse(localStorage.getItem('country')))
    }
  
    return(
        <div className='container'>
         
           
             <div className="select">
                <select onChange={(e)=>{selectCountry(e)}} >

                <option defaultValue={country} >{country}</option>
                   {
                       countries.map((item,index)=>{

                           return <option key={index} value={item.Country}>{item.Country}</option>
                       })
                   }
                </select>
             </div>

            <div className="row">
                <div className="col-lg-8">
                   {
                       statistics.reverse().slice(0,5).map((item,index)=>{
                           return  <StatisticsItem key={index} item={item}/>
                       })
                   }
                </div>

                <div className="col-lg-4">
                    <TopRecoverred recover={recoverObj} />
                </div>
            </div>
        </div>
    )
}
export default Statistics;