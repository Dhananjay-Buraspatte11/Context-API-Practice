import React, { Component } from 'react';

class MountingPhase extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            count:0
        }
        // console.log(props);
        console.log("constructor is called");
    }
    static getDerivedFromProps(props,state){
        // console.log(props);
        console.log("SGDFP is called");
        return{
            count:props.name
        }
    }
    render() {
        console.log("Constructor is render on the UI");
        return (
            <div>
                Hello CBC
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

export default MountingPhase;