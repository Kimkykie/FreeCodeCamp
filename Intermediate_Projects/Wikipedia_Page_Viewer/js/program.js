$(document).ready(function () {
	//Function to search for value entered in text input
	function searchWiki() {
	var searchTerm = $("#searchItem").val();
	//API url containing Json data for a search term
	var apiUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchTerm + "&prop=info&inprop=url&utf8=&format=json";
	//AJAX call to fetch JSON data
	$.ajax({
		type: "GET",
		url: apiUrl,
		async: false,
		dataType: "jsonp",
	//Function that executes when ajax call is succesful
		success: function(data) {

			$("#results").html('');

			for (var i = 0; i < data.query.search.length; i++) {
			//Titles for search results
			var title = data.query.search[i].title;
			//Replace any spaces in the title with underscore for url
			var url = title.replace(/ /g, "_");
			$("#results").append("<li><a href=https://en.wikipedia.org/wiki/" + url + ">" + data.query.search[i].title + "</a><p>" + data.query.search[i].snippet + "</p></li>");
			}
			//Clear search area when results are displayed
			$("#searchItem").val('');
		},
	//Fallback function when ajax call is unsuccesful
		error: function(errorMessage) {
			$("#results").html("<h2 class='text-center'>Error retrieving search results </h2>")
		}

	   });
	}
	//Run Search function when Search button is pressed
	$("#searchBtn").on("click",function() {
		searchWiki();

	});
	//Run Search function when Enter key is pressed
	$("#searchItem").on("keypress",function(e) {
		if (e.which == 13) {
        e.preventDefault();
		searchWiki();
		}
	});
});