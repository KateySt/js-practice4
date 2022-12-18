import './App.css';
import RunningCat from "./components/runningCat";
import React, {Component} from 'react';

const arr = [...Array(Math.floor(Math.random() * (11 - 1)) + 1)].map(el => el = Math.floor(Math.random() * (51 - 1)) + 1);

class App extends Component {

    render() {
        return (
            <div className="App">
                {
                    arr.map(el => <RunningCat data={el}/>)
                }
            </div>
        );
    }
}

export default App;
