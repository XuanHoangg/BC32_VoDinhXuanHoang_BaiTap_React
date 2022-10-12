import React, { Component } from 'react';
import data from './dataGlasses.json';
import Model from './Model';
import Glasses from './Glasses';
export default class TryGlasses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            glasses: [],
        }
    }
    glassesById = (glassesById) => {
        const glasses = data.filter((item) => item.id === glassesById)
        this.setState({ glasses: glasses })
        console.log(glasses);
    }
    render() {
        return (
            <div >
                <h2 className='text'>TRY GLASSES APP ONLINE</h2>
                <Model glasses={this.state.glasses} />
                <Glasses glasses={data} onSelect={this.glassesById} />
            </div>
        )
    }
}
