import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
  const { contacts, agents, createTicket, ticketsInfo, isAdd, updateTicketOperation } = props;

  const [subject, setSubject] = useState(isAdd ? '' : ticketsInfo.subject);
  const [description, setDescription] = useState(isAdd ? '' : ticketsInfo.description);
  const [owner, setOwner] = useState(isAdd ? '' : ticketsInfo.ownerId);
  const [contact, setContact] = useState(isAdd ? '' : ticketsInfo.contactId);
  const [statusVal, setStatusVal] = useState(isAdd ? 'open' : ticketsInfo.status);

  const renderUserComponent = function (userList) {
    return userList.map((user) => {
      return <option value={user.id}>{user.name}</option>;
    });
  };

  const updateTicketAPI = (ticketId, event) => {
    event.preventDefault();
    const ticket = {
      subject: subject,
      description: description,
      owner: owner,
      status: statusVal,
      contact: contact,
      id:ticketId
    };
    console.log(ticket);
    updateTicketOperation(ticket);
  };

  const createTicketAPI = (event) => {
    event.preventDefault();
    const ticket = {
      subject: subject,
      description: description,
      owner: owner,
      status: statusVal,
      contact: contact,
    };
    console.log(ticket);
    createTicket(ticket);
  };

  const onSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onOwnerChange = (event) => {
    setOwner(event.target.value);
  };

  const onContactChange = (event) => {
    setContact(event.target.value);
  };

  const onStatusChange = (event) => {
    console.log(event.target.value);
    setStatusVal(event.target.value);
  };

  const getButton = (ticketId) => {
    if(!ticketId) {
      return <button
    type="submit"
    className="btn btn-primary"
    onClick={createTicketAPI}
  >
    Create Ticket
  </button>;
    }  else {
      return <button
    type="submit"
    className="btn btn-primary"
    onClick={(event)=>{updateTicketAPI(ticketId, event)}}
  >
    Update Ticket
  </button>;
    }
  }

  return (
    <div className="container mt-5">
      <form>
        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Enter subject"
            value={subject}
            onChange={onSubjectChange}
          />
        </div>
        <div className="form-group">
          <label for="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter description"
            value={description}
            onChange={onDescriptionChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label for="ticketOwner">Ticket Owner:</label>
          <select
            className="form-control"
            id="agentSelect"
            value={owner}
            onChange={onOwnerChange}
          >
            <option selected>Select an agent</option>
            {renderUserComponent(agents)}
          </select>
        </div>
        <div className="form-group">
          <label for="ticketOwner">Contact:</label>
          <select
            className="form-control"
            id="agentSelect"
            value={contact}
            onChange={onContactChange}
          >
            <option selected>Select a Contact</option>
            {renderUserComponent(contacts)}
          </select>
        </div>
        <div className="form-group">
          <label for="status">Status:</label>
          <select
            className="form-control"
            id="statusVal"
            value={statusVal}
            onChange={onStatusChange}
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        {
          getButton(isAdd ? undefined : ticketsInfo.id)
        }
        <button type="submit" className="btn btn-danger cancleBtn" onClick={()=>{onPageChange("TicketList")}}>
          Cancel
        </button>
      </form>
    </div>
  );
};
export default Form;
