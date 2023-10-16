export function generateTicketNumber(ticketList) {
  let ticketNumerList = ticketList.map((ticket) => {
    return ticket.ticketNumber;
  });
  ticketNumerList.sort();
  return ticketNumerList[ticketNumerList.length - 1] + 1;
}

export function generateTicketId(ticketList) {
  let ticketIdList = ticketList.map((ticket) => {
    return ticket.id;
  });
  ticketIdList.sort();
  return ticketIdList[ticketIdList.length - 1] + 1;
}
