import React from 'react';
import moment from 'moment';
import './StatisticsItem.css';


const StatisticsItem = ({item}) =>{
    return(
        <div className='statistics-item'>
      
            <div className='statistics-item__date d-flex align-items-center ml-4'>
                    {
                        moment(item.Date).format('LL')
                    }
                </div>

                <div className='statistics-item__detail'>
                    <div className=' statistics-item__info'>
                        <div className='d-flex justify-content-between align-items-center mb-3'>
                            <h3 className='statistics-item__status '>Active</h3>
                            <span className='statistics-item__quantity'>{item.Active}</span>
                        </div>
                        
                        <div className='d-flex justify-content-between align-items-center'>
                            <h3 className='statistics-item__status'>Confirmed</h3>
                            <span className='statistics-item__quantity'>{item.Confirmed}</span>
                        </div>

                    </div>

                    <div  className=' statistics-item__info'>
                        <div className='d-flex  justify-content-between align-items-center mb-3'>
                            <h3 className='statistics-item__status'>Death</h3>
                            <span className='statistics-item__quantity'>{item.Deaths}</span>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <h3 className='statistics-item__status'>Recovered</h3>
                            <span className='statistics-item__quantity'>{item.Recovered}</span>
                        </div>

                    </div>
                </div>
          </div>

      
    )
}
export default StatisticsItem;