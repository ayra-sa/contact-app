import React from 'react';

// stateless
const Props1 = (props) => {
    return (
        <div className="title">
            <h2>Hello gaes</h2>
            <p className="p-title">{props.title}</p>
            <p className="p-nama">{props.name}</p>
            <p className="p-jenis">{props.jenis}</p>
        </div>
    )
}

export default Props1;