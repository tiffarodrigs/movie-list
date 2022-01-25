function Ticket(movieName,time,age){
  this.movieName = movieName;
  this.time = time;
  this.age = age;

}
Ticket.prototype.price=function(){
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
}

function displayTicket( movieName,movieTime,movieAge,moviePrice)
{
$("#show-ticket").show();
$(".movie-name").html(movieName);
$(".time").html(movieTime)
$(".age").html(movieAge)
$(".price").html(moviePrice)

}


$(document).ready(function() {
  
  $("#userInfo").submit( function() {
    event.preventDefault();
  
  const inputName=$("#movie-type").val();
  const inputTime=$("#time-of-day").val();
  const inputAge=$("#age").val();

  let ticket=new Ticket(inputName,inputTime,inputAge);
  const moviePrice = ticket.price();
  //console.log("price" +moviePrice);
  displayTicket(inputName,inputTime,inputAge,moviePrice);


})



});