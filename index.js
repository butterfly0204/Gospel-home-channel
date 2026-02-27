
const text = "Advancing God's Kingdom in the digital space through powerful media, sermon excerpts, and transformational faith stories.";
const typingSpan = document.querySelector(".typing");
let index = 0;

function typeEffect() {
  if(index < text.length){
    typingSpan.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50); // adjust speed (ms)
  } else {
    setTimeout(() => {
      typingSpan.innerHTML = "";
      index = 0;
      typeEffect();
    }, 4000); // repeat after 4 seconds
  }
}

typeEffect();
