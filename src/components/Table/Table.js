import React, { Component } from 'react';

import './Table.scss';
import DataService from '../../services/DataService';
import Loader from '../Loader/Loader';

export default class Table extends Component {

dataService = new DataService();

state = {
    loader: false,
    sortArr:'fas fa-sort' 
}

toggleDirectionArrow = (e) => {
  if(this.props.sortDirection === 'desc') {
    e.className = 'fas fa-sort-down';
  } else if(this.props.sortDirection === 'acs') {
      e.className = 'fas fa-sort-up';
  } else {
    e.className = 'fas fa-sort';
  }
  e.parentNode.parentNode.childNodes.forEach(el => {
    console.log(el.lastChild);
    if(el.lastChild !== e ) {
     return el.lastChild.className = 'fas fa-sort';
    }
  })
}

selectTableItem(e, id) {
  this.props.selectedId(id);
  document.querySelectorAll('tr').forEach(el => {
    return el.className = '';
  });
    e.target.parentNode.className = 'selected';
}

sliceText = (field) => {
        return field.length > 50 ? `${field.slice(0, 50)}...` : field;
 }
renderItems = (arr) => {
    return arr.map(({id, firstName, lastName, email, phone, description, description2=''}) => {
        return(
          <tr onClick={(e) => {this.selectTableItem(e, id)}} key={phone} >
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

onSort = (e, col) => {
    this.props.sortColumn(col);
    this.toggleDirectionArrow(e.target);

}


    render() {
        const items = this.renderItems(this.props.itemList);
       
        return(
            <React.Fragment>
            <div className="tbl__header">
            <button className='addField'
                    onClick={this.onFormToggle}><img src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/2x/btw_ic_speeddial_white_24dp_2x.png" alt="+" /></button>
    <table className="tbl tbl__primary" cellPadding="0" cellSpacing="0" border="0">
      <thead>
        <tr>
          <th>ID<i onClick={(e) => this.onSort(e, 'id')} className='fas fa-sort'></i></th>
          <th>First name<i onClick={(e) => this.onSort(e, 'firstName')} className='fas fa-sort'></i></th>
          <th>Last name<i onClick={(e) => this.onSort(e, 'lastName')} className='fas fa-sort'></i></th>
          <th>email<i onClick={(e) => this.onSort(e, 'emeil')} className='fas fa-sort'></i></th>
          <th>phone<i onClick={(e) => this.onSort(e, 'phone')} className='fas fa-sort'></i></th>
          <th>user field 1<i onClick={(e) => this.onSort(e, 'description')} className='fas fa-sort'></i></th>
          <th>user field 2<i onClick={(e) => this.onSort(e, 'description2')} className='fas fa-sort'></i></th>
        </tr>
      </thead>
    </table>
  </div>
  <div className="tbl__content_primary">
    <table className='tbl tbl__primary' cellPadding="0" cellSpacing="0" border="0">
      <tbody>
      {
        !this.props.itemList[0] ? (!this.props.loader ? items: <Loader />) : items 
      }
      </tbody>
    </table>
  </div>
  </React.Fragment>
        );
    }
}