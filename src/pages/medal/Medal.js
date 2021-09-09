import React from 'react';
import "./medal.css";
import  data from './medal-winner';

function Medal(props) {
   let gold = [];
   let silver = [];
   let bronze = [];
   for(let i=0;i<data.length;i++){
       if(data[i]["medal"] == "Gold"){
           gold.push(data[i]);
       }else if(data[i]["medal"] == "Silver"){
           silver.push(data[i]);

       }else{
           bronze.push(data[i]);

       }
   }

    return (
        <div className="container">
            <h1>🥇 Medal Tally</h1>
            <hr width="90%"/>
            <div>
                <h3>🥇 Gold Medal</h3>
                <hr width="50%"/>
                <div class="name-container">

                {
                gold.map(x=>(
                    <p>
                  <h2>               {x.team}{x.person} </h2>
                    {x.name}
                    </p>

                ))
                }
                </div>

            </div>
            <div>
                <h3>🥈 Silver Medal</h3>
                <hr width="100%"/>

                <div class="name-container">
               
               {
               silver.map(x=>(
                   <p>
                 <h2>               {x.team}{x.person} </h2>
                   {x.name}
                   </p>
               
               ))
               }
             </div>

            </div>
            <div>
                <h3>🥉 Bronze Medal</h3>
                <hr width="50%"/>

                <div class="name-container">
               
               {
               bronze.map(x=>(
                   <p>
                 <h2>               {x.team}{x.person} </h2>
                   {x.name}
                   </p>
               
               ))
               }
             </div>
            </div>
            <hr width="90%"/>

        </div>
    );
}

export default Medal;