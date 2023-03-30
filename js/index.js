
// $(document).ready(function() {
// 	// document.querySelector ("form").addEventListener("submit", function(e){
// 	// 	alert("Submited!");
// 	// 	e.preventDefault();
// 	  })

		
	  if( window.innerWidth >= 968 ) {
	$('#pagepiling').pagepiling( { 	 
		onLeave: function(asd, index, direction){
			if(index == 2){
				document.querySelector(".header") .classList.add("header__section2");
			}

			if(index == 1){
				document.querySelector(".header") .classList.remove("header__section2");
			}

			if(index == 3){
				document.querySelector(".header") .classList.remove("header__section2");
			}
			
		     if(index == 4){
				document.querySelector(".header") .classList.add("header__section2");
			}

			if(index == 5){
				document.querySelector(".header") .classList.remove("header__section2");
    			}

			if(index == 6){
				document.querySelector(".header") .classList.add("header__section2");
			}
		

// if(index == 1 && direction =='down'){
// 	document.querySelector(".header") .classList.add("header__section2")
// 	console.log("сработало")

// }

// if(index == 2 && direction =='up'){
// 	document.querySelector(".header") .classList.remove("header__section2")
// 	console.log("сработало")
// }

// if(index == 2 && direction =='down'){
// 	document.querySelector(".header") .classList.remove("header__section2")
// 	console.log("сработало")

// }

// if(index == 3 && direction =='up'){
// 	document.querySelector(".header") .classList.add("header__section2")
// 	console.log("сработало")

// }


// if(index == 3 && direction =='down'){
// 	document.querySelector(".header") .classList.add("header__section2")
// 	console.log("сработало")

// }

// if(index == 4 && direction =='up'){
// 	document.querySelector(".header") .classList.remove("header__section2")
// 	console.log("сработало")

// }

// if(index == 4 && direction =='down'){
// 	document.querySelector(".header") .classList.remove("header__section2")
// 	console.log("сработало")


// }

// if(index == 5 && direction =='up'){
// 	document.querySelector(".header") .classList.add("header__section2")
// 	console.log("сработало")


// }
		
			
	}});
	  
	//if(window.location.hash == "#slide-six") {
	//	six()
	//  }
	//if(window.location.hash == "#slide-five") {
	//	five()
	// }

	if(window.location.hash == "#slide-four") {
		four()
	}

	if(window.location.hash == "#slide-three") {
		three()
	}

	if(window.location.hash == "#slide-two") {
		two()
	}
	
	if(window.location.hash == "#slide-one") {
		one()
	}
	
	  }

// });






function one() {$.fn.pagepiling.moveTo(1);}
function two() {$.fn.pagepiling.moveTo(2);}
function three() {$.fn.pagepiling.moveTo(3);}
function four() {$.fn.pagepiling.moveTo(4);}
function five() {$.fn.pagepiling.moveTo(5);}
function six() {$.fn.pagepiling.moveTo(6);}



