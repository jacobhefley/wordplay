$(function(event){
	$("#submit").click(function(event){
		event.preventDefault();
		var para = $("#sentance").val();
		var arrayOfStrings = para.split(" ");		
		var newArrayOfStrings = [];

		arrayOfStrings.forEach(function(strn){
			if(strn.length >= 3){
				newArrayOfStrings.push(strn.toUpperCase());				

			}
		});

		var newString = newArrayOfStrings.reverse().join(" ");
		alert(newString);
		
		});
		

});