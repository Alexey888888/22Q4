let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let link = document.querySelectorAll('.link-navigation');


burger.addEventListener('click', function(){
	burger.classList.toggle('active');
	menu.classList.toggle('active');
})


link.forEach(function(el) {
    el.addEventListener('click', function(){
		burger.classList.toggle('active');
		menu.classList.toggle('active');
	});
  });


