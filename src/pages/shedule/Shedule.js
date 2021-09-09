import React from 'react';
import "./Shedule.css";
import  data from './Shedule.-dummy-data'

function Shedule(props) {
    const [contry,setCountry] = React.useState("");
    const [date,setDate] = React.useState("");
    console.log(data);
    return (
        <div class="page-container">
            <h1 class="heading-text">Schedule </h1>
            <hr  width="50%"/>

            {contry&& <div class="result-text"> Showing events in which {contry} is taking part </div>}
            {date && <div class="result-text"> Showing events on {date} </div>}

            <div class="select-values"> 
              <select class="selector" name="Country" placeholder="Country" onChange={(e)=>setCountry(e.target.value)}>
              <option value="" disabled selected hidden>Country</option>

                 <option value="India">India</option>
                  <option value="China">China</option> 
              </select>
              <select class="selector" name="Date" onChange={(e)=>setDate(e.target.value)}>
              <option value="" disabled selected hidden>Date</option>

                  <option value="24">24</option>
                  <option value="22">22</option> 
                  <option value="20">20</option> 

              </select>
            </div>
            <div class="event-card">
                 <h2>Event </h2>
                 <h2>Team </h2>
                 <h2>Date </h2> 
             </div>
            <div class="shedule-data">
                {
                    data.filter(
                        value =>{

                            if(contry=="" && date==""){
                                return value;
                            }else if(contry != "" || date !=""){
                               
                                if(date == ""){
                                if(value.team == contry){
                                    return value;
                                }
                            }else if(contry == ""){
                                if(value.date == date){
                                    console.log(date+"yo");
                                    return value;
                                }
                            }else{
                                if(value.date == date && value.team == contry){
                                    return value;
                                }

                            }
          
                        }
                    }
                    ).map(x=>(
                        <div class="event-card"key={x.id}>
                           <h3>
                           {x.name}
                            </h3> 
                           <p> {x.team}</p>
                           <p> {x.date} </p>
                            {x.isLive &&  <p class="live"> Live</p>}
                        </div>
                    ))
                }
                     
            </div>

        </div>
    );
}

export default Shedule;