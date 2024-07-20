/*
document.getElementById("drkBtn").addEventListener("click", darkMode);
document.getElementById("lghtBtn").addEventListener("click", lightMode);

function darkMode() {
	document.getElementsByTagName("body")[0].style.backgroundColor = "DarkGray";
	document.getElementsByTagName("body")[0].style.color = "white";
}

function lightMode() {
	document.getElementsByTagName("body")[0].style.backgroundColor = "white";
	document.getElementsByTagName("body")[0].style.color = "black";
} 
*/
const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeIcon.src = 'https://img.icons8.com/ios-filled/50/000000/sun.png';
  } else {
    themeIcon.src = 'https://img.icons8.com/ios-filled/50/000000/moon-symbol.png';
  }
});

//destinations page
 function toggleDetails(id) {
            var details = document.getElementById('details-' + id);
            var isExpanded = details.classList.contains('expanded');
            // Hide all details
            document.querySelectorAll('.details').forEach(function(detail) {
                detail.classList.remove('expanded');
            });
            // Update button text if needed
            document.querySelectorAll('.expand-btn').forEach(function(btn) {
                btn.textContent = btn.textContent.replace('Hide Details', 'Show Details');
            });
            // Show the clicked details
            if (!isExpanded) {
                details.classList.add('expanded');
                details.previousElementSibling.textContent = details.previousElementSibling.textContent.replace('Show Details', 'Hide Details');
            }
        }
	


//gallery page

document.getElementById("img1").addEventListener("click", function() {
	resetImg("img2");
    enlargeImg("img1"); 
});

document.getElementById("img2").addEventListener("click", function() {
    resetImg("img1");
    enlargeImg("img2");
});


function enlargeImg (imgID) {
	var img = document.getElementById(imgID);
	img.style.width = "400px";
}

function enlargeImg(imgID) {
    var img = document.getElementById(imgID);
    originalWidth[imgID] = img.style.width; // Store original width
    img.style.width = "400px";
}

function resetImg(imgID) {
    var img = document.getElementById(imgID);
    img.style.width = "200px"; // Restore original width, or default to auto
}