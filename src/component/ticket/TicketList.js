import React, { Component } from 'react';
import PropTypes from 'prop-types';


const TicketList = (props) => {
  let { tickets, updateTicket, onPageChange } = props;

  const deleteTicketAPI = (ticketId) => {
    let newTicketList = [];
    tickets.array.forEach((ticket) => {
      if(ticket.id != ticketId) {
        newTicketList[newTicketList.length] = ticket;
      }
    });
    updateTicket(newTicketList);
  };

  return (
    <div>
      <div className="container mt-5">
        <h2>Ticket List</h2>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Ticket</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Description</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  tickets.map(
                    (ticket) => {
                      return <tr>
                        <th scope="row">{ticket.ticketNumber}</th>
                        <td>{ticket.subject}</td>
                        <td>{ticket.description}</td>
                        <td>{ticket.ownerId}</td>
                        <td>{ticket.contactId}</td>
                        <td>{ticket.status}</td>
                        <td><div className="dropdown">
                          <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            &#8942;
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item" onClick={()=>{deleteTicketAPI(ticket.id)}}>Edit</div>
                            <div className="dropdown-item" onClick={()=>{deleteTicketAPI(ticket.id)}}>Delete</div>
                          </div>
                        </div></td>
                      </tr>
                    }
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

}

export default TicketList;