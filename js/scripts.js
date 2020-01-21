$(document).ready(function(){
  $("#form").submit(function(event){
    var list = $("#groceries").val();
    var listArray = list.split(" ");
    var upperCase = listArray.map(function(item){
      return item.toUpperCase();
    });
    upperCase.sort();
    upperCase.forEach(function(item){
      $("#list").append("<li>" + item + "</li>");
    })
    $("#form").hide();

    event.preventDefault();
  })
});