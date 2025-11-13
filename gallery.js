/*Name this external file gallery.js*/

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
   
   /* const imageElement = document.getElementById('preview');
    const imageUrl = imageElement.src;
    const targetElement = document.querySelector('image');


    if (targetElement && imageUrl){

      targetElement.style.backgroundImage = `url('${imageUrl}')`;

    }*/ 

    
    /*const targetPlace = document.getElementById(image);
    const sourceImage = document.getElementById(previewPic); 
    document.getElementById('image').style.backgroundImage
    const classType = sourceImage.classList[0];
    const imageLocation = */ 

   

    /*var transformBackground = document.getElementById(image);
    transformBackground.style.backgroundImage = "url ('+ this + ')";*/
  
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was 
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */

    console.log("If you're reading this, then the event should work to remove the background image and undo the alt text");
    document.getElementById('image').innerHTML = 'Hover over an image below.';
    document.getElementById('image').style.backgroundImage = 'none';
    console.log(image);


    /*let undoImageElement = document.getElementById('preview');
    undoImageElement.style.backgroundColor = '#8e68ff';*/
    

		
	}