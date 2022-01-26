function Cart() {
  this.movieTickets = {};
  this.currentId = 0;
  console.log("hello");

}

Cart.prototype.addTicket = function(ticket) {
  //console.log(this.currentId);
  ticket.id = this.assignId();
  this.movieTickets[ticket.id] = ticket;
};

Cart.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Cart.prototype.findTicket = function(id) {
  if (this.movieTickets[id] != undefined) {
    return this.movieTickets[id];
  }
  return false;
};

function Ticket(movieName, time, age) {
  this.movieName = movieName;
  this.time = time;
  this.age = age;

}
Ticket.prototype.price = function() {
  console.log(this.movieName);
  if (this.movieName === "new-release") {
    if (this.time === "evening") {
      this.price = 50;
    } else if (this.time === "afternoon") {
      this.price = 40;
    } else if (this.time === "morning" && this.age === "over-60") {
      this.price = 30;
    } else {
      this.price = 40;
    }
  } else {
    this.price = 25;
  }
  return this.price
};
let cart = new Cart();


function displayTicketList(cartTicketsList) {
  let ticketsList = $("ul#ticketList");
  let htmlForTicketInfo = "";
  Object.keys(cartTicketsList.movieTickets).forEach(function(key) {
    const ticket = cartTicketsList.findTicket(key);
    console.log("ticket", ticket);
    htmlForTicketInfo += "<li id=" + ticket.id + ">" + ticket.movieName + " " + ticket.time + " " + ticket.age + "</li>";

  });

  ticketsList.html(htmlForTicketInfo);
}
function showTicketDetail(ticketId) {
  const ticket = cart.findTicket(ticketId);
  $("#show-ticket").show();
  $(".movie-name").html(ticket.movieName);
  $(".time").html(ticket.time);
  $(".age").html(ticket.age);
  $(".price").html(ticket.price);
}


function attachEventListner()
{
  $("ul#ticketList").on("click", "li", function() {
    showTicketDetail(this.id);
  });
}

$(document).ready(function() {
  attachEventListner();

  $("#userInfo").submit(function() {
    event.preventDefault();

    const inputName = $("#movie-type").val();
    const inputTime = $("#time-of-day").val();
    const inputAge = $("#age").val();

    let newticket = new Ticket(inputName, inputTime, inputAge);

    cart.addTicket(newticket);

    //const moviePrice = ticket.price();
    //console.log("price" +moviePrice);
    displayTicketList(cart);


  })



});
