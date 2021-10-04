import React from 'react';

type Props= {
    title: string;
    info: string;
};

function Dropdown(props: Props){
    
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.info}</p>
        </div>
    )
}

export default Dropdown;