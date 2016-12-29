function ajaxCall() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () { // Function to obtain the image URL and caption of all the images.
		if(this.readyState == 4 && this.status == "200") {
			var images = this.responseText;
			images = JSON.parse(images); // Convert response text to object.
			for(var i = 0; i < images.data.length; i++) { // Loop until all elements from data array is retrieved.
				var image = "<div class = 'image'><img src = '"+images.data[i].imageUrl+"'><div class = 'caption'>"+images.data[i].caption+"</div></div>"; //Form html code to insert image and caption.
				document.getElementById("gallery").innerHTML += image; // Append image and caption on each iteration to the contents of gallery div.
			}
		}
	}
	xhttp.open("GET", "https://exptest.herokuapp.com/api/imageGallery", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
}