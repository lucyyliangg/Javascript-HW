const month = Number(prompt("Enter a number month of the year (1-12)"));

switch(month){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("This month has 31 days");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("This month has 30 days");
    break;
  case 2:
    alert("This month has 28 days");
    break;
  default:
    alert("Invalid month");
}
