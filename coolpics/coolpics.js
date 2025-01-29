function showMenu() {
    var element = document.getElementById("nav");
    element.classList.toggle("show");
}
function viewerTemplate(fileName, altText){
    let viewerTemplate = `<div id="viewerspecial" class="viewer">
        <button id="close-button" class="close-viewer">X</button>
        <img src="${fileName}" alt="${altText}">
      </div>`;

    return viewerTemplate;
}


function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const image = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    let imageSource = image.src;

    let stringPieces = imageSource.split("-")
    let fileName = stringPieces[0];

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

    fileName = fileName + "-full.jpeg"

	// insert the viewerTemplate into the top of the body element
    let viewerHtml = viewerTemplate(fileName, image.alt);

	document.body.insertAdjacentHTML("afterbegin", viewerHtml)

	// add a listener to the close button (X) that calls a function called closeViewer when clicked

    const closeButton = document.getElementById("close-button");
    closeButton.addEventListener("click", closeViewer);

}

function closeViewer(){
    const viewer = document.getElementById("viewerspecial");
    viewer.remove();
}


const gallery = document.getElementById("gallerytoo");
gallery.addEventListener("click", viewHandler);


const button = document.getElementById("menu-button");
button.addEventListener("click", showMenu);

