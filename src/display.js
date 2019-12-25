import React, {Component} from 'react';

export default class Display extends Component{

    render() {

        const {toShow, string} = this.props;

        return (
            <div>
                <div className='display-one'>{string}</div>
                <div className='display-two'>{toShow}</div>
            </div>
        )
    }
}