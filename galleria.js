/*Name this external file gallery.js*/

  const imageSources = ["images/clement-proust-bqiJ_99BBMQ-unsplash copy.jpg",
  "images/fikri-rasyid-3ba59K57wE4-unsplash copy.jpg",
  "images/j-lbxLlgi_8_w-unsplash copy.jpg",
  "images/jezael-melgoza-alY6_OpdwRQ-unsplash copy.jpg",
  "images/monika-mg-YkMC1mqegTw-unsplash copy.jpg",
  "images/nathan-feyssat-tKhphNkxK00-unsplash copy.jpg",
  "images/paris-5397889_1280 copy.jpg",
  "images/pexels-atypeek-5781917 copy.jpg",
  "images/pexels-chaitaastic-1796725 copy.jpg",
  "images/pexels-huy-phan-316220-1422384 copy.jpg",
  "images/pexels-iwaria-76107965-8655016 copy.jpg",
  "images/pexels-satoshi-7526821 copy.jpg",
  "images/pexels-tranmautritam-922978 copy.jpg"];
  const imageAlts = ["Rue des Carrières, Québec, QC, Canada",
  "A Shinkansen train",
  "A noodle bowl",
  "Shibuya Crossing, Tokyo",
  "Holiday in Iririki, Vanuatu",
  "An aerial view of a large building with a clock tower",
  "Paris Museum, France",
  "French flag on a pole",
  "Louvre",
  "Person holding sushi on a black plate",
  "Houses in African Venice in Birds Eye View",
  "A Concrete Walkway Between Brown Wooden Houses",
  "Brown House Under Blue Skies Photography"];

  imageObjects = imageSources.map((src, index) => ({
    src: src,
    alt: imageAlts[index], 
  }));

function setPictures(){

  console.log(imageObjects);
  
  currentImages = document.querySelectorAll(".flex img");
  for (var i = 0; i < currentImages.length; i++){
    
    console.log("Image " + (i + 1));
    randomImg = imageObjects[Math.floor(Math.random() * imageObjects.length)];
    currentImages[i].setAttribute("src",randomImg.src);
    currentImages[i].setAttribute("alt",randomImg.alt);
    currentImages[i].setAttribute("tabindex","0");
    console.log(randomImg.src);
    console.log(randomImg.alt);
  }

}
  function upDate(previewPic){ 
    /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */

    console.log("If you're reading this, then the event should work to change the background image and alt text");
    console.log(previewPic);
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
    console.log(previewPic);
    console.log(image);
  
	}

  function upGrade(previewPic){ 
   

    console.log("If you're reading this, then the event should work to change the background image and alt text");
    console.log(previewPic);
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
    console.log(previewPic);
    console.log(image);
  
	}


	function unDo(){
    /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was 
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */

    console.log("If you're reading this, then the event should work to remove the background image and undo the alt text");
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
    document.getElementById('image').style.backgroundImage = 'none';
    console.log(image);

	}

  function unMake(){

    console.log("If you're reading this, then the event should work to remove the background image and undo the alt text");
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
    document.getElementById('image').style.backgroundImage = 'none';
    console.log(image);

  }