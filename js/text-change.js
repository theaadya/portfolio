const hoverText = document.querySelector('.text-home');

hoverText.addEventListener('mouseenter', () => {
  hoverText.textContent = "(but Mostly Just Good at Googling)";
});

hoverText.addEventListener('mouseleave', () => {
  hoverText.textContent = "Artistic Computer Scientist";
});


const hoverText2 = document.querySelector('.card-display .text');

hoverText2.addEventListener('mouseenter', () => {
  hoverText2.textContent = "less is more, except when more is more";
});

hoverText2.addEventListener('mouseleave', () => {
  hoverText2.innerHTML = "Good design is as little design as possible, but not no design.";
});


const hoverText3 = document.querySelector('.story');

hoverText2.addEventListener('mouseenter', () => {
  hoverText3.textContent = "???";
});

hoverText2.addEventListener('mouseleave', () => {
  hoverText3.textContent = "Dieter Rams";
});
