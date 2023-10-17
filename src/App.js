import React, { useState, setState } from 'react';
import './style.css';
import Header from './component/header/Header';
import Form from './component/form/Form';
import TicketList from './component/ticket/TicketList';
import { data } from './DataModule/Data';
import { generateTicketNumber, generateTicketId } from './Util/util';

export default function App () {
  const [page, setPage] = useState('TicketList');
  const [tickets, setTickets] = useState(data.tickets);
  const [currentTicket, setCurrentTicket] = useState();
  const [state, setState] = useState();

  const updateTicket = (ticketList) => {
    setTickets(ticketList);
  };

  const updateTicketOperation = (updatedTicket) => {
    let newTicketList = [];
    tickets.forEach((ticket, idx) => {
      if(ticket.id == updatedTicket.id) {
        newTicketList[idx] = updatedTicket;
       } else {
        newTicketList[idx] = ticket;
       }
    });
    updateTicket(newTicketList);
    onPageChange('TicketList');
  };

  const getTicket = (ticketId) => {
    let getTicket;
    tickets.forEach((ticket) => {
      if(ticket.id == ticketId) {
        getTicket = ticket;
      }
    });
    // setState({currentTicket: getTicket, page:"TicketDetail"});
    setCurrentTicket(getTicket);
    setPage('TicketDetail');
  }

  const createTicket = (ticket) => {
    ticket.ticketNumber = generateTicketNumber(tickets);
    ticket.id = generateTicketId(tickets);
    tickets[tickets.length] = ticket;
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
          updateTicket={updateTicket}
          createTicket={createTicket}
          isAdd={true}
          onPageChange={onPageChange}
          updateTicketOperation={updateTicketOperation}
        />
      );
    } else if (page === 'TicketList') {
      return <TicketList tickets={tickets} updateTicket={updateTicket} onPageChange={onPageChange} getTicket={getTicket} contacts={data.contacts} agents={data.agents}></TicketList>
    } else if (page === 'TicketDetail') {
      return <Form
      agents={data.agents}
      contacts={data.contacts}
      createTicket={createTicket}
      updateTicket={updateTicket}
      ticketsInfo={currentTicket}
      isAdd={false}
      onPageChange={onPageChange}
      updateTicketOperation={updateTicketOperation}
    />
    }
  };

  return (
    <div>
      <Header moduleList={data.module} onPageChange={onPageChange}></Header>
      {renderPages()}
    </div>
  );
}
