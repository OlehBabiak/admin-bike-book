import './Main.css'
import BikeForm from "./BikeForm";
import Statistics from "./Statistics";
import ScrollBar from "./scrollBar/ScrollBar";


function Main() {
    return (
       <div className='main'>
           <div className='bike-list'>
               <ScrollBar/>
           </div>
           <div className='vertical-devider'/>
           <div className='bake-data'>
               <BikeForm/>
               <div className='horisontal-devider'/>
               <Statistics/>
           </div>
       </div>
    );
}


export default Main
