import React, {Component} from 'react';

class Time extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: 0,
            time2: 5,
            time3: 10,
        }
        // this.state.time = 5

        setInterval(() => {

            this.setState((state,props) => {
                return {
                    time: state.time + 1
                }
            })
        },1000)

    }

    render(){
        const { state } = this;
        return <div>{state.time}</div>
    
    }

    

}

export default Time;