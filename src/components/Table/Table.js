import React, { Component } from 'react';

import './Table.scss';
import DataService from '../../services/DataService';
import Loader from '../Loader/Loader';

export default class Table extends Component {

dataService = new DataService();

state = {
    loading: false,
    sortArr:'fas fa-sort' 
}

sliceText = (field) => {
 return field.slice(0, 40) + '...';
 }
renderItems = (arr) => {
    return arr.map(({id, firstName, lastName, email, phone, description, description2=''}) => {
        return(
           <tr key={phone}>
          <td>{id}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{this.sliceText(description)}</td>
          <td>{this.sliceText(description2)}</td>
        </tr>
        );
    });
}
onFormToggle = () => {
    this.props.toggleForm();
}

onSort = (col) => {
    this.props.sortColumn(col)
}

    render() {
        const items = this.renderItems(this.props.itemList);
       
        return(
            <React.Fragment>
            <div className="tbl-header">
            <button className='addField'
                    onClick={this.onFormToggle}><img src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/2x/btw_ic_speeddial_white_24dp_2x.png" alt="+" /></button>
    <table cellPadding="0" cellSpacing="0" border="0">
      <thead>
        <tr>
          <th>ID<i onClick={() => this.onSort('id')} class={this.state.sortArr}></i></th>
          <th>firstName<i onClick={() => this.onSort('firstName')} class={this.state.sortArr}></i></th>
          <th>lastname<i onClick={() => this.onSort('lastName')} class={this.state.sortArr}></i></th>
          <th>email<i onClick={() => this.onSort('emeil')} class={this.state.sortArr}></i></th>
          <th>phone<i onClick={() => this.onSort('phone')} class={this.state.sortArr}></i></th>
          <th>user field 1<i onClick={() => this.onSort('description')} class={this.state.sortArr}></i></th>
          <th>user field 2<i onClick={() => this.onSort('description2')} class={this.state.sortArr}></i></th>
        </tr>
      </thead>
    </table>
  </div>
  <div className="tbl-content">
    <table cellPadding="0" cellSpacing="0" border="0">
      <tbody>
      {this.props.itemList ? items : <Loader />}
      </tbody>
    </table>
  </div>
  </React.Fragment>
        );
    }
}