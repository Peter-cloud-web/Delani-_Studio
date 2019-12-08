$(document).ready(function(){
  $('img#img2-hide').click(function(){
    $("p#p2-show").show();
    $("img#img2-hide").hide();
  });
  $('p#p2-show').click(function(){
    $("p#p2-show").hide();
    $("img#img2-hide").show();
  });
  $('img#img1-hide').click(function(){
    $("p#p1-show").show();
    $("img#img1-hide").hide();
  });
  $('p#p1-show').click(function(){
    $("p#p1-show").hide();
    $("img#img1-hide").show();
  });
  $('img#img3-hide').click(function(){
    $("p#p3-show").show();
    $("img#img3-hide").hide();
  });
  $('p#p3-show').click(function(){
    $("p#p3-show").hide();
    $("img#img3-hide").show();
  });
});
$(document).ready(function(){
  $('#submit').click(function(){
    $("p#pop-up").show();
    event.preventDefault();
  });
});
$(document).ready(function() {
    $(".textbox form").submit(function(event) {
        var NameInput = $("input#fname").val();
        var emailInput = $("input#email").val();
        $(".fname").append(NameInput);
        $(".email").append(emailInput);
        $("#pop-up").show();

        event.preventDefault();
    });
});