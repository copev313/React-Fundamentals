import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'tachyons';
import { robots } from './robots';

import Card from './Card.js';


ReactDOM.render(
  <React.StrictMode>
    { robots.map(robot => 
        (<Card  key={robot.id}
                id={robot.id}
                name={robot.name}
                email={robot.email}  />)
      )
    }
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
