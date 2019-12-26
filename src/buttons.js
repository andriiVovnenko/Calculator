import React, {Component} from 'react'
import './index.css';
export default class Buttons extends Component{

    buttons = [
        {name: 'clear', label: 'AC', value:'ac'},
        {name: 'add', label: '+', value: '+'},
        {name: 'minus', label: '-', value: '-'},
        {name: 'multiply', label: '/', value: '/'},
        {name: 'subtract', label: '*', value: '*'},
        {name: 'result', label: '=', value: '='},
        {name: 'null', label: '0', value: '0'},
        {name: 'one', label: '1', value: '1'},
        {name: 'two', label: '2', value: '2'},
        {name: 'three', label: '3', value: '3'},
        {name: 'four', label: '4', value: '4'},
        {name: 'five', label: '5', value: '5'},
        {name: 'six', label: '6', value: '6'},
        {name: 'seven', label: '7', value: '7'},
        {name: 'eight', label: '8', value: '8'},
        {name: 'nine', label: '9', value: '9'},
        {name: 'decimal', label: '.', value: '.'},
    ];

    onButtonClick =(e) =>{
        this.props.addSymbol(e.target.value);
    };


    render() {
        return(
               <div onClick={this.onButtonClick} className='container_buttons'>
                   {this.buttons.map((el, idx) => {
                       return <button key={idx} id={el.name} name={el.name} value={el.value}>{el.label}</button>
                   })}
               </div>
        )
    }
}