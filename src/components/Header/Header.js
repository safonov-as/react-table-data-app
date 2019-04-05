import React, {Component} from 'react';

import './Header.scss';

export default class Header extends Component {

    getTableData = () => {
        this.props.getData();
    }

    render() {
        return(
            <div className="header">
                <h1 className='header__title'>Table title</h1> 
                <button onClick={this.getTableData} className='get-data'>Get data</button>
            </div>
            
        )
    }
}