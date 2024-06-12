window.onscroll = function() {scrollFunction()};
         // JavaScript to shrink navbar on scroll
        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("navbar").style.padding = "10px 10px";
                document.getElementById("navbar").style.fontSize = "20px";
            } else {
                document.getElementById("navbar").style.padding = "15px";
                document.getElementById("navbar").style.fontSize = "24px";
            }
        }

