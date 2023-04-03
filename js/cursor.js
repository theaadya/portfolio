let container = document.querySelector('.container_cursor');
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  container = document.querySelector('.container_cursor');
  const x = e.clientX - container.offsetLeft;
  const y = e.clientY - container.offsetTop;

  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';

  if (x < 0 || x > container.clientWidth || y < 0 || y > container.clientHeight) {
    cursor.style.display = 'none';
  } else {
    cursor.style.display = 'block';

    const element = document.elementFromPoint(e.clientX, e.clientY);
    const color = getComputedStyle(element).color;

    const complementaryColor = tinycolor(color).complement().toHexString();

    cursor.style.backgroundColor = complementaryColor;
    cursor.style.borderColor = complementaryColor;
  }
});


document.addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'a' || event.target.hasAttribute('onclick') || event.target.type === 'checkbox') {
    return;
  }
  var paw = document.createElement('div');
  paw.classList.add('paw');
  paw.style.top = (event.pageY - 25) + 'px';
  paw.style.left = (event.pageX - 25) + 'px';
  document.getElementById('paws-container').appendChild(paw);
  setTimeout(function() {
    paw.style.opacity = '0';
    setTimeout(function() {
      paw.remove(); 
    }, 500); 
  }, 1000);
});
