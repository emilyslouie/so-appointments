import React from 'react';

function WhatToBring({ heading, items }) {


    return (
        <div>
            <h4>{heading}</h4>
            <ul>
                {items.map(s => (<li>{s}</li>))}
            </ul>
        </div>
    );
}

export default WhatToBring;
