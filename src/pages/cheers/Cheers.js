import React from 'react';
import CheersTab from '../../Comp/Cheers/CheersTab';
import "./cheers.css";

function Cheers(props) {
    return (
        <div className="container">
            <h1>🍻 Cheers For Your Contry </h1>
            <hr width="80%"/>
            <CheersTab name="India :)"></CheersTab>
            <CheersTab name="Nepal"></CheersTab>
            <CheersTab name="Bhutan"></CheersTab>
            <CheersTab name="Sri Lanka"></CheersTab>



        </div>
    );
}

export default Cheers;