import React from 'react';
import moment from 'moment'
import './TopRecoverred.css';

const TopRecoverred = ({recover}) =>{
    return(
        <div className='recover'>
            <h2 className='recover__title'>Top recovered cases</h2>
            <h2 className='recover__quantity'>{recover?.Recovered}</h2>
            <hr/>
            <span className='recover__date'>{  moment(recover?.Date).format('LL')}</span>
        </div>
    )
}
export default TopRecoverred;