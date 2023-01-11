//CERCHIO 1
// create svg element:
var svg = d3.select("#cerchio").append("svg").attr("width", "800px").attr("height", "800px")

// Add the path using this helper function
svg.append('circle')
  .attr('cx', 150)
  .attr('cy', 150)
  .attr('r', 100)
  .attr('fill',"url('#myGradient')")

//CERCHIO 2
// create svg element:
var svg = d3.select("#cerchio").append("svg").attr("width", "100%").attr("height", "100%")

// Add the path using this helper function
svg.append('circle')
  .attr('cx', 1300)
  .attr('cy', 300)
  .attr('r', 100)
  .attr('fill',"url('#myGradient')")
  
const delay = 3000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});

function showForm(){
	document.getElementById("form").hidden = false;
	document.getElementById("fakebg").hidden = false;

}
function hideForm(){
	document.getElementById("form").hidden = True;
	document.getElementById("fakebg").hidden = True;

}
