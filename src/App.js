import React, { useState } from 'react';
import './style.css';
import Header from './component/header/Header';
import Form from './component/form/Form';
import { data } from './DataModule/Data';
import { generateTicketNumber, generateTicketId } from './Util/util';

export default function App() {
  const [page, setPage] = useState('TicketForm');
  const [tickets, setTickets] = useState(data.tickets);

  const updateTicket = (ticketList) => {
    setTickets(ticketList);
  };

  const createTicket = (ticket) => {
    ticket.ticketNumber = generateTicketNumber(tickets);
    ticket.id = generateTicketId(tickets);
    tickets[tickets.length] = ticket;
    console.log(ticket, tickets);
    updateTicket(tickets);
    onPageChange('TicketList');
  };

  const onPageChange = (pageType) => {
    setPage(pageType);
  };

  const renderPages = () => {
    if (page === 'TicketForm') {
      return (
        <Form
          agents={data.agents}
          contacts={data.contacts}
          createTicket={createTicket}
        />
      );
    } else if (page === 'TicketList') {
      return (
        <div>
          {' '}
          {tickets.map((ticket) => {
            return (
              <span>
                {' '}
                {ticket.ticketNumber} {ticket.subject} {ticket.status}{' '}
              </span>
            );
          })}{' '}
        </div>
      );
    }
  };

  return (
    <div>
      <Header moduleList={data.module} onPageChange={onPageChange}></Header>
      {renderPages()}
    </div>
  );
}
