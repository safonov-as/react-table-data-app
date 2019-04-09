import React, { Component } from "react";

import "./ItemDetais.scss";

export default class ItemDetails extends Component {
  render() {
    if (this.props.selectedItem.length < 1) {
      return <p>Select an item from table</p>;
    }
    const {
      id,
      firstName,
      lastName,
      email,
      phone,
      description,
      description2,
      streetAddress,
      city,
      state,
      zip
    } = this.props.selectedItem[0];
    return (
      <div className="tbl__wrapper">
        <table
          className="tbl tbl__secondary"
          cellPadding="0"
          cellSpacing="0"
          border="0"
        >
          <colgroup>
            <col className="selected" />
          </colgroup>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{id}</td>
            </tr>
            <tr>
              <td>First Name</td>
              <td>{firstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{lastName}</td>
            </tr>
            <tr>
              <td>Email </td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{phone}</td>
            </tr>
            <tr>
              <td>User field </td>
              <td>{description}</td>
            </tr>
          </tbody>
        </table>
        <table
          className="tbl tbl__secondary"
          cellPadding="0"
          cellSpacing="0"
          border="0"
        >
          <colgroup>
            <col className="selected" />
          </colgroup>
          <tbody>
            <tr>
              <td>Street Address</td>
              <td>
                {streetAddress}
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{state}</td>
            </tr>
            <tr>
              <td>ZIP</td>
              <td>{zip}</td>
            </tr>
            <tr>
              <td>User field 2 </td>
              <td>{description2}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
