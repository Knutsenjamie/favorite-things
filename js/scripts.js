$(document).ready(function () {
  $("form#favoritefoods").submit(function (event) {
    event.preventDefault();
    const breakfastInput = $("#breakfast").val();
    const lunchInput = $("#lunch").val();
    const dinnerInput = $("#dinner").val();
    let array =[breakfastInput,lunchInput, dinnerInput]; // array = [0, 1, 2];
    const lunch = array[1];
    const breakfast = array[0];
    const dinner = array[2];
    array.push(1,0,2);
    console.log (lunch,breakfast,dinner);

  });
}); 
