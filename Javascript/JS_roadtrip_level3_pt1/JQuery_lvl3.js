var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
$(".usa").append(message);
$("button").remove();

var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
$('button').on('click', function(){
  $(".usa").append(message);
  $("button").remove();
});

$(document).ready(function(){
  $("button").on("click", function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(".usa").append(message);
    $("button").remove();
  });
});

$(document).ready(function(){
  $("button").on("click", function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(this).after(message);
    $(this).remove();
  });
});

$(document).ready(function(){
  $('button').on('click', function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(this).closest(".tour").append(message);
    $(this).remove();
  });
});

$(document).ready(function(){
  $(".tour").on("click", function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(this).append(message);
    $(this).find("button").remove();
  });
});

$(document).ready(function(){
  $('button').on('click', function(){
    var discount = $(this).closest(".tour").data("discount");
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(this).closest(".tour").append(message);
    $(this).remove();
  });
});

