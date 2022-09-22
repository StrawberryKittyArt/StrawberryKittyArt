//Get modal and get images
let modal = document.getElementById("myModal");
let images = document.getElementById(",images");

//Get Image Box
let imagebox = document.getElementById("modalImg");

for(let 1=0; 1 < images.length; i++) {
    //Iterate through each of the images
    let img = images [i];
    img.onclick = function (e) {
      modal.style.display = 'block';
      imagebox.src = this.src;
    }
};

// Close out Modal
let exit = document.getElementById("close");

exit.oneclick = function() {
  modal.style.display = "none"
}
  
