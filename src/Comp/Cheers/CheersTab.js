import React from 'react';
import "./Cheers.css";

function CheersTab({name="India",}) {
    const [count,setCount] = React.useState(0);
    return (
        <div className="container-tab">
            <h1> {name}</h1>
            <h3> 🍻{count} </h3>
            <button onClick={()=>(setCount(count+1))}> Cheers</button>
        </div>
    );
}

export default CheersTab;