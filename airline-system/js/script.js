$(function () {
    $('[data-toggle="popover"]').popover({ 
        html : true, 
        content: function() {
          return $('#popover_content_wrapper').html();
        }
      });
    });


var responsiveSlider = function() {

      var slider = document.getElementById("slider");
      var sliderWidth = slider.offsetWidth;
      var slideList = document.getElementById("slideWrap");
      var count = 1;
      var items = slideList.querySelectorAll("li").length;
      var prev = document.getElementById("prev");
      var next = document.getElementById("next");
      
      window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
      });
      
      var prevSlide = function() {
        if(count > 1) {
          count = count - 2;
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
        else if(count = 1) {
          count = items - 1;
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
      };
      
      var nextSlide = function() {
        if(count < items) {
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
        else if(count = items) {
          slideList.style.left = "0px";
          count = 1;
        }
      };
      
      next.addEventListener("click", function() {
        nextSlide();
      });
      
      prev.addEventListener("click", function() {
        prevSlide();
      });
      
      setInterval(function() {
        nextSlide()
      }, 7000);
      
      };

var navpopup = function(id,value) {
    var popup = document.getElementById(id);

      // Get the button that opens the popup
    var btn = document.getElementById("button-"+value);
    
    var index = parseInt(value) - 1;
    var span = document.getElementsByClassName("close")[index];
    
          // When the user clicks on the button, open the popup
    btn.onclick = function() {
        popup.style.display = "block";
    }
          
          // When the user clicks on <span> (x), close the popup
      span.onclick = function() {
        popup.style.display = "none";
      }
            
          // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
      if (event.target == popup) {
            popup.style.display = "none";
          }
      }

}
      
      window.onload = function() {
      responsiveSlider(); 
      
      }
    
