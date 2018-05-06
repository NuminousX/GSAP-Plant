/* Global variable */ 
var dashboard = document.getElementById("dashboard");
var tl = new TimelineMax


//////////////////////////
// Animations //

function animations(){
	var delay = 0

	TweenMax.to("#cloudLarge", 2, {x: 0, autoAlpha: 1});
	TweenMax.to("#cloudSmall", 2, {x: 0, autoAlpha: 1});
	delay += 0.8
	TweenMax.to("#arrowDown", 2, {delay: delay, y: 0, scaleY: 1, autoAlpha: 1});
	delay += 0.2
	TweenMax.staggerTo(SVG6Array, 2.2, {delay: delay, x: 0, autoAlpha:1,  ease: Power2.easeOut}, 0.2);
	TweenMax.staggerTo(SVG7Array, 2.2, {delay: delay, x: 0, autoAlpha:1,  ease: Power2.easeOut}, 0.2);
	delay += 1
	TweenMax.to("#pot", 1.7, {delay: delay, y: 0, autoAlpha: 1, ease: Bounce.easeOut});
	delay += 0.2
	TweenMax.to(".weekTip", 1.2, {delay: delay, x: 0, autoAlpha:1});
	delay += 0.3
	TweenMax.to(".hetVerhaal", 1.2, {delay: delay, x: 0, autoAlpha:1});
	delay += 0.3
	TweenMax.to(".deQuote", 1.2, {delay: delay, x: 0, autoAlpha:1});
	delay += 0.3
	TweenMax.to(".wistJe", 1.2, {delay: delay, x: 0, autoAlpha:1});
	delay += 0.3
	TweenMax.to(".over", 1.2, {delay: delay, x: 0, autoAlpha:1});

	// plant animation //
	delay += 0.2
	TweenMax.to("#stalk-left1", 3, {delay: delay, scale: 1, autoAlpha: 1});
	delay += 1.7
	TweenMax.to("#branch-left1", 3, {delay: delay, scale: 1, autoAlpha: 1})
	delay += 0.5
	TweenMax.to("#stalk-right1", 5, {delay: delay, y: 0, scale: 1, autoAlpha: 1});
	delay += 0.5
	TweenMax.to("#branch-left2", 3, {delay: delay,  scale: 1, autoAlpha: 1});
	delay += 1
	TweenMax.to("#leaf-left1", 3, {delay: delay, x: 0, scale: 1, autoAlpha: 1});
	delay += 0.9
	TweenMax.to("#leaf-left3", 3, {delay: delay, x: 0, scale: 1, autoAlpha: 1});
	TweenMax.to("#branch-right1", 2.5, {delay: delay, scale: 1,  autoAlpha: 1});
	delay += 0.5
	TweenMax.to("#leaf-left2", 3, {delay: delay, x: 0, scale: 1, autoAlpha: 1});
	delay += 1
	TweenMax.to("#leaf-right1", 3, {delay: delay, x: 0, scale: 1, autoAlpha: 1});
	TweenMax.to("#branch-right2", 3, {delay: delay,  scale: 1, autoAlpha: 1});
	delay += 0.5
	TweenMax.to("#branch-right4", 3, {delay: delay, scale: 1, autoAlpha: 1});
	delay += 0.8
	TweenMax.to("#branch-right3", 3, {delay: delay, scale: 1, autoAlpha: 1});
	delay += 0.5
	TweenMax.to("#leaf-right2", 3, {delay: delay, scale: 1, autoAlpha: 1});
	delay += 1
	TweenMax.to("#leaf-right3", 3, {delay: delay, scale: 1, autoAlpha: 1});
	delay -= 0.5
	TweenMax.to("#stalk-right2", 3, {delay: delay, y: 0, scale: 1, autoAlpha: 1} );
	delay += 1.7
	TweenMax.to("#stalk-right3", 3, {delay: delay, scale: 1, autoAlpha: 1});
	delay -= 1
	TweenMax.to("#leaf-right4", 3, {delay: delay, scale: 1, autoAlpha: 1});
	delay += 2.5
	TweenMax.to("#branch-right5", 3, {delay: delay, scale: 1, autoAlpha: 1});
	delay += 1.3
	TweenMax.to("#leaf-right5", 3, {delay: delay, scale: 1, autoAlpha: 1});
	delay -= 0.2
	TweenMax.to("#branch-right6", 3, {delay: delay, scale: 1, autoAlpha: 1});
	delay += 1.5
	TweenMax.to("#leaf-right6", 2.8, {delay: delay, scale: 1, autoAlpha: 1});
	delay += 0.8
	TweenMax.to("#leaf-right7", 3, {delay: delay, scale: 1, autoAlpha: 1});




	// arrow animation + SVG //
	delay += 1
	TweenMax.to("#side-arrow1", 1.5, {delay: delay, x: 0, transformOrigin:"0% 39.57%", autoAlpha: 1, ease: Sine.easeOut});
	TweenMax.staggerTo(SVG8Array, 2.2, {delay: delay, x: 0, autoAlpha:1,  ease: Power2.easeOut}, 0.04);
	delay += 0.2
	TweenMax.staggerTo(SVG1Array, 2.2, {delay: delay, x: 0, autoAlpha:1,  ease: Power2.easeOut}, 0.04);
	delay += 1
	TweenMax.to("#side-arrow2", 1.5, {delay: delay, x: 0, transformOrigin:"0% 49.46%", autoAlpha: 1, ease: Sine.easeOut});
	TweenMax.staggerTo(SVG9Array, 2.2, {delay: delay, x: 0, autoAlpha:1,  ease: Power2.easeOut}, 0.04);
	delay += 0.2
	TweenMax.staggerTo(SVG2Array, 2.2, {delay: delay, x: 0, autoAlpha:1,  ease: Power2.easeOut}, 0.04);
	delay += 1
	TweenMax.to("#side-arrow3", 1.5, {delay: delay, x: 0, transformOrigin:"0% 65.4%", autoAlpha: 1, ease: Sine.easeOut});
	TweenMax.staggerTo(SVG10Array, 2.2, {delay: delay, x: 0, autoAlpha:1,  ease: Power2.easeOut}, 0.1);
	delay += 0.2
	TweenMax.staggerTo(SVG3Array, 2.2, {delay: delay, x: 0, autoAlpha:1,  ease: Power2.easeOut}, 0.04);
	delay += 1
	TweenMax.to("#side-arrow4", 1.5, {delay: delay, x: 0, transformOrigin:"0% 77.3%", autoAlpha: 1, ease: Sine.easeOut});
	TweenMax.staggerTo(SVG11Array, 2.2, {delay: delay, x: 0, autoAlpha:1,  ease: Power2.easeOut}, 0.1);
	delay += 0.2
	TweenMax.staggerTo(SVG4Array, 2.2, {delay: delay, x: 0, autoAlpha:1,  ease: Power2.easeOut}, 0.04);
	delay += 1
	TweenMax.to("#side-arrow5", 1.5, {delay: delay, x: 0, transformOrigin:"0% 85%", autoAlpha: 1, ease: Sine.easeOut});
	TweenMax.staggerTo(SVG12Array, 2.2, {delay: delay, x: 0, autoAlpha:1,  ease: Power2.easeOut}, 0.1);
	delay += 0.2
	TweenMax.staggerTo(SVG5Array, 2.2, {delay: delay, x: 0, autoAlpha:1,  ease: Power2.easeOut}, 0.04);


}

/* in the set I set all the tweens to an opacity or a position
in here I also select all the paths in the svgs to be able to animate the different characters */
function set (){
	var SVG1 = document.getElementById("SVG1");
	SVG1Array = SVG1.querySelectorAll("path");

	var SVG2 = document.getElementById("SVG2");
	SVG2Array = SVG2.querySelectorAll("path");

	var SVG3 = document.getElementById("SVG3");
	SVG3Array = SVG3.querySelectorAll("path");

	var SVG4 = document.getElementById("SVG4");
	SVG4Array = SVG4.querySelectorAll("path");
	
	var SVG5 = document.getElementById("SVG5");
	SVG5Array = SVG5.querySelectorAll("path");

	var SVG6 = document.getElementById("SVG6");
	SVG6Array = shuffle(pushToRegularArray(SVG6.querySelectorAll("path")));

	var SVG7 = document.getElementById("SVG7");
	SVG7Array = shuffle(pushToRegularArray(SVG7.querySelectorAll("path")));

	var SVG8 = document.getElementById("tip");
	SVG8Array = shuffle(pushToRegularArray(SVG8.querySelectorAll("path")));

	var SVG9 = document.getElementById("verhaal");
	SVG9Array = shuffle(pushToRegularArray(SVG9.querySelectorAll("path")));

	var SVG10 = document.getElementById("quote");
	SVG10Array = shuffle(pushToRegularArray(SVG10.querySelectorAll("path")));

	var SVG11 = document.getElementById("wist");
	SVG11Array = shuffle(pushToRegularArray(SVG11.querySelectorAll("path")));

	var SVG12 = document.getElementById("over");
	SVG12Array = shuffle(pushToRegularArray(SVG12.querySelectorAll("path")));
	

	TweenMax.set(SVG1Array, {autoAlpha: 0});
	TweenMax.set(SVG2Array, {autoAlpha: 0});
	TweenMax.set(SVG3Array, {autoAlpha: 0});
	TweenMax.set(SVG4Array, {autoAlpha: 0});
	TweenMax.set(SVG5Array, {autoAlpha: 0});
	TweenMax.set(SVG6Array, {autoAlpha: 0});
	TweenMax.set(SVG7Array, {autoAlpha: 0});
	TweenMax.set(SVG8Array, {autoAlpha: 0});
	TweenMax.set(SVG9Array, {autoAlpha: 0});
	TweenMax.set(SVG10Array, {autoAlpha: 0});
	TweenMax.set(SVG11Array, {autoAlpha: 0});
	TweenMax.set(SVG12Array, {autoAlpha: 0});

	// clouds //
	TweenMax.set("#cloudLarge", {x: 0, autoAlpha:0});
	TweenMax.set("#cloudSmall", {x: -200, autoAlpha:0});


	// plant //

	// left part of the plant //
	TweenMax.set("#branch-left2", {scale: 0,  transformOrigin:"46% 26.4%", autoAlpha:0});
	TweenMax.set("#branch-left1", {scale: 0,  transformOrigin:"45.33% 26.34%", autoAlpha:0});
	TweenMax.set("#leaf-left1", {scale: 0, transformOrigin:"37.7% 25.2%", autoAlpha:0});
	TweenMax.set("#leaf-left2", {scale: 0,  transformOrigin:"42% 24.2%", autoAlpha:0});
	TweenMax.set("#leaf-left3", {scale: 0, transformOrigin:"43.2% 24.5%", autoAlpha:0});
	TweenMax.set("#stalk-left1", {scale: 0, transformOrigin:"52.3% 30.5%", autoAlpha:0});

	// right part of the plant //
	TweenMax.set("#stalk-right1", {scale: 0, y: 20, transformOrigin:"51.4% 27.6%", autoAlpha:0});
	TweenMax.set("#branch-right1", {scale: 0, transformOrigin:"52% 26%", autoAlpha:0});
	TweenMax.set("#leaf-right1", {scale: 0, x: -5,  transformOrigin:"65.1% 25.1%", autoAlpha:0});

	TweenMax.set("#branch-right2", {scale: 0, y: -7, transformOrigin:"52.4% 24.9%", autoAlpha:0});
	TweenMax.set("#leaf-right2", {scale: 0, x: 5, transformOrigin:"41.9% 21.2%", autoAlpha:0});

	TweenMax.set("#branch-right3", {scale: 0, transformOrigin:"53.4% 23.3%", autoAlpha:0});
	TweenMax.set("#leaf-right3", {scale: 0, y: 3, transformOrigin:"62.1% 20.9%", autoAlpha:0});

	TweenMax.set("#branch-right4", {scale: 0, transformOrigin:"54.2% 23.1%", autoAlpha:0});
	TweenMax.set("#leaf-right4", {scale: 0, x: 3, transformOrigin:"49.5% 18.8%", autoAlpha:0});

	TweenMax.set("#branch-right5", {scale: 0, transformOrigin:"53.4% 18.2%", autoAlpha:0});
	TweenMax.set("#leaf-right5", {scale: 0, y:3, x: -3, transformOrigin:"58.5% 16.9%", autoAlpha:0});

	TweenMax.set("#branch-right6", {scale: 0, transformOrigin:"52.2% 16.7%", autoAlpha:0});
	TweenMax.set("#leaf-right6", {scale: 0, y: 3, x: 3, transformOrigin:"46.7% 15.2%", autoAlpha:0});
	TweenMax.set("#leaf-right7", {scale: 0, transformOrigin:"52.3% 15.7%", autoAlpha:0});


	TweenMax.set("#stalk-right2", {scale: 0, transformOrigin:"54.1% 22.8%", autoAlpha:0});
	TweenMax.set("#stalk-right3", {scale: 0, transformOrigin:"54.2% 20.4%", autoAlpha:0});





	TweenMax.set("#pot", {y: -200, transformOrigin:"50.66% 33.18%",  autoAlpha:0});

	// arrows //
	TweenMax.set("#arrowDown", {y: 58, scaleY: 0.1, transformOrigin:"93.6% 0.05%",  autoAlpha:0});
	TweenMax.set("#side-arrow1", {x: -60, autoAlpha:0});
	TweenMax.set("#side-arrow2", {x: -60, autoAlpha:0});
	TweenMax.set("#side-arrow3", {x: -60, autoAlpha:0});
	TweenMax.set("#side-arrow4", {x: -60, autoAlpha:0});
	TweenMax.set("#side-arrow5", {x: -60, autoAlpha:0});

	// set slides //
	TweenMax.set(".weekTip", {x: -400, autoAlpha:0});
	TweenMax.set(".hetVerhaal", {x: -400, autoAlpha:0});
	TweenMax.set(".deQuote", {x: -400, autoAlpha:0});
	TweenMax.set(".wistJe", {x: -400, autoAlpha:0});
	TweenMax.set(".over", {x: -400, autoAlpha:0});

}


function pushToRegularArray(nodelist){
	var array = [];
	for(var i = 0; i < nodelist.length; i++) {
		array.push(nodelist[i]);
	}
	return array;
}

function shuffle(a) {
	var j, x, i;
	for (i = a.length; i; i--) {
		j = Math.floor(Math.random() * i);
		x = a[i - 1];
		a[i - 1] = a[j];
		a[j] = x;
	}
	return a;
}


set();
animations();


