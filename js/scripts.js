$(document).ready(function () {
  $("form#favoritefoods").submit(function (event) {
    event.preventDefault();
    const breakfastInput = $("#breakfast").val();
    const lunchInput = $("#lunch").val(); // sandwich
    const dinnerInput = $("#dinner").val();
    const array =[breakfastInput,lunchInput /* sandwich */, dinnerInput]; 
    const lunch = array[1]; // sandwich
    const breakfast = array[0];
    const dinner = array[2];
    console.log (array);
    
    let newArray = []; // need newArray in order of [breakfast, lunch, dinner] using push() 3 times
    
    newArray.push(breakfast);
    newArray.push(lunch);
    newArray.push(dinner);
    console.log(newArray);

    $("#newarray").append(`<li>Your fav breakfast food: ${newArray[0]}</li>`);
    $("#newarray").append(`<li>${newArray[1]}</li>`);
    $("#newarray").append(`<li>${newArray[2]}</li>`);

  });
}); 
