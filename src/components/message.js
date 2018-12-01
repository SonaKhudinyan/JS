import React, { Component } from 'react'

const Message = (props)=>(
    <div>
        hello {props.text}
        <ul>
            {props.phrases.map((el, ind)=>(
                <li key= {ind}>{el}</li>
            ))}
        </ul>
    </div>
);

export default Message