import React, {Component} from 'react';
import './RunningCat.css';
import cat from '../../img/icons/9.svg'

class RunningCat extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        x: Math.floor(Math.random() * (1000 - 1)) + 1,
        y: Math.floor(Math.random() * (1000 - 1)) + 1,
    }


    componentDidMount() {
        document.addEventListener("mousemove",
            (event) =>
                this.setCoordinate(event.pageX, event.pageY));
    }

    setCoordinate = (x, y) => {
        this.setState(
            {x: x, y: y}
        )
    }

    render() {  console.log(this.props.data)
        return (
            <div>
                <img
                    className="img-cat"
                    src={cat}
                    style={{
                        left: `${this.state.x}px`,
                        top: `${this.state.y}px`,
                        transition: `${this.props.data*100}ms`,
                    }}
                />

            </div>
        );
    }
}

export default RunningCat;