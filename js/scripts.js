function Ticket(movieName,time,age){
  this.movieName = movieName;
  this.time = time;
  this.age = age;

}
Ticket.prototype.price=function(){
  if (this.movie === newRealease) {
    if (this.time === evening) {
      this.price = 50;
    } else if (this.time === afternoon) {
      this.price = 40;
    } else if (this.time === morning || this.age > 60) {
      this.price = 30;
    } else {
      this.price = 40;
    }
  } else {
    this.price = 25;
  }
  return this.price
}




$(document).ready(function() {
  
  $("#userInfo").submit( function() {
    event.preventDefault();
  const
})



});