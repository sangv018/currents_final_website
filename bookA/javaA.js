<script>
		var counter = 0; // Initialize the counter variable
		
		function addImage() {
			var img = document.createElement("img");
			img.src = "your_image_source.jpg";
			var grid = document.getElementById("grid");
			grid.appendChild(img);
			counter++;
			img.id = "img" + counter; // Give each image element a unique ID
		}
	</script>