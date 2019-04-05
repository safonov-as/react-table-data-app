import React, { Component } from 'react';

import './AddTableItem.scss';

export default class AddTableItem extends Component {

    onSubmit = (e) => {
        e.preventDefault();
       const newData = {
            id: document.getElementById('id').value,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            description: document.getElementById('description').value,
            description2: document.getElementById('description2').value
        }
        this.props.addNewData(newData);
        document.querySelectorAll('input').forEach(el => el.value = '');
    }


    render() {
        return(
            <form className='AddData' onSubmit={this.onSubmit}>
                <input id='id' type="text" placeholder='type id'/>
                <input id='firstName' type="text" placeholder='type first name'/>
                <input id='lastName' type="text" placeholder='type last name'/>
                <input id='email' type="email" placeholder='type email'/>
                <input id='phone' type="phone" placeholder='type phone'/>
                <input id='description' type="text" placeholder='type description'/>
                <input id='description2' type="text" placeholder='type other description'/>
                <button className='send-form'>Add data</button>
            </form>
        );
    }
}