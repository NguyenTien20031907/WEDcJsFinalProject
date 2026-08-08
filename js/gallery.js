/*Name this external file gallery.js*/

var idImageElement = document.getElementById("image");

function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
    idImageElement.innerHTML = previewPic.alt;
    idImageElement.style.backgroundImage = "url(" + previewPic.src + ")";
}

function unDo() {
    /* In this function you should 
   1) Update the url for the background image of the div with the id = "image" 
   back to the orginal-image.  You can use the css code to see what that original URL was
   
   2) Change the text  of the div with the id = "image" 
   back to the original text.  You can use the html code to see what that original text was
   */
    idImageElement.innerHTML = "Hover over or tab focus an image below to display here.";
    idImageElement.style.backgroundImage = "";
}

function bodyTagOnLoadListener() {
    addTabOnImages('preview');
    alert('Gallery of 5 Platonic Solids and a Sphere');
}

function addTabOnImages(classNameOfImages) {
    var arrayOfImages = document.getElementsByClassName(classNameOfImages);
    for (var i = 0; i < arrayOfImages.length; i++) {
        arrayOfImages[i].setAttribute("tabindex", 0);
        console.log("Set tabindex = 0 to image " + i + " in the " + classNameOfImages + " class.");
    }
}