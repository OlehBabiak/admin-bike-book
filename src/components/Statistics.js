import './Statistics.css'

function Statistics() {
    return (
       <div className='statistic'>
           <div className='statistic-title'>Statistics</div>
           <div className='statistic-item'>Total Bikes: <span>0</span></div>
           <div className='statistic-item'>Available Bikes: <span>0</span></div>
           <div className='statistic-item'>Booked Bikes: <span>0</span></div>
           <div className='statistic-item'>Average bike cost: <span>0.00</span> UAH/hr.</div>
       </div>
    );
}

export default Statistics
