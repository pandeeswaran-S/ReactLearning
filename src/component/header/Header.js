import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { moduleList } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {moduleList.map((moduleObject) => {
              return (
                <button
                  type="button"
                  className="btn btn-primary moduleNameAllignment"
                  key={moduleObject.id}
                  onClick={() => this.props.onPageChange('TicketList')}
                >
                  {moduleObject.displayLabel}
                </button>
              );
            })}
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary addButtonAllignment"
          onClick={() => this.props.onPageChange('TicketForm')}
        >
          Add Ticket
        </button>
      </nav>
    );
  }
}
