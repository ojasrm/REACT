import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo() {
    return (
        <div>
            <h1>Tall Rob</h1>
            <p>This is about me</p>
            <ul>
                <li>USA</li>
                <li>London</li>
                <li>Singapore</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))