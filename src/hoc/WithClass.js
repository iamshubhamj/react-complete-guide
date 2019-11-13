import React from 'react';

const withClass = (props) =>  (
    
        <div className={props.classes}>
            {props.childern}
        </div>
    );



export default withClass;