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
    var user = document.getElementById("fname").value;
    alert("SUBMITTED!!  Thank you "+user+" We have received your message.Thank you for reaching out to us.");
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

$(document).ready(function() {
  $(".jpg1").mouseover(function(){
    $(".img1").fadeIn(500);
  }).mouseout(function(){
    $(".img1").fadeOut(500);
  });
  $(".jpg2").mouseover(function(){
    $(".img2").fadeIn(500);
  }).mouseout(function(){
    $(".img2").fadeOut(500);
  });
  $(".jpg3").mouseover(function(){
    $(".img3").fadeIn(500);
  }).mouseout(function(){
    $(".img3").fadeOut(500);
  });
  $(".jpg4").mouseover(function(){
    $(".img4").fadeIn(500);
  }).mouseout(function(){
    $(".img4").fadeOut(500);
  });
  $(".jpg5").mouseover(function(){
    $(".img5").fadeIn(500);
  }).mouseout(function(){
    $(".img5").fadeOut(500);
  });
  $(".jpg6").mouseover(function(){
    $(".img6").fadeIn(500);
  }).mouseout(function(){
    $(".img6").fadeOut(500);
  });
  $(".jpg7").mouseover(function(){
    $(".img7").fadeIn(500);
  }).mouseout(function(){
    $(".img7").fadeOut(500);
  });
  $(".jpg8").mouseover(function(){
    $(".img8").fadeIn(500);
  }).mouseout(function(){
    $(".img8").fadeOut(500);
  });
});



