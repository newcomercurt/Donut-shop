var Shop = function(shopHours,custMin, custMax, custAvg, shopName){
	this.hours = shopHours;
	this.min = custMin;
	this.max = custMax;
	this.avg = custAvg;
	this.name = shopName;
	this.customersPerHour = [];
	this.donutsPerHour = [];
	this.donutsPerDay = 0;
	for (var i = 0; i < this.hours; i++) {
		var customersThisHour = getRandomInt(custMin, custMax);
		var donutsSoldThishour = custAvg * customersThisHour;
		this.customersPerHour[i] = customersThisHour;
		this.donutsPerHour[i] = donutsSoldThishour;
		this.donutsPerDay += donutsSoldThishour;
	}
	console.log(this);
}
function average(array){
	var length=array.length;
	return array.reduce(function(total, next){
		return total+next
	}, 0)/length;

}

function getRandomInt(custMin, custMax) {
		return Math.floor(Math.random() * (custMax - custMin)) + custMin;
}
var shops =[
	new Shop(8, 8, 43, 4.5, "Downtown"),
	new Shop(24, 4, 37, 2, "Capitol Hill"),
	new Shop(10, 9, 23, 6.33, "South Lake Union"),
	new Shop(7, 2, 28, 1.25, "Wedgewood"),
	new Shop(10, 8, 58, 3.75, "Ballard")
]

for(var i =0; i < shops.length; i++) {
	var shop = shops[i];
	$("#accordion").append(
 		"<h3>"+shop.name+"</h3>" +
 		"<div>" +
	  		"<p>Customer's We Serve Per Hour:  <span>"+average(shop.customersPerHour).toFixed(0)+"</span></p>" +
	  		"<p>Donut's We Sell Per Hour: <span>"+average(shop.donutsPerHour).toFixed(0)+"</span></p>" +
	  		"<p>Donut's We Sell Per Day: <span>"+shop.donutsPerDay.toFixed(0)+"</span></p>" +
  		"</div>"
	);
}
$('#accordion').accordion({
	active:false,
	collapsible: true
});

$("#donut").draggable({
  stop: function(event, ui){
  	console.log (arguments)
  }
});
$("#homer").droppable({
  accept: "#donut",
  drop: function(){
  	$('#donut').remove();
  	alert("Mmm...Donuts!")
  }});

  $("#submit").on("click", function(){
  	var name = $('#name').val();
  	var comment = $('#comments').val();
  	$('#name').val("");
  	$('#comments').val("");
    $(".comments").append("<div class='comment'>"+name+" : <span>"+comment+"</span></div>");
   });

