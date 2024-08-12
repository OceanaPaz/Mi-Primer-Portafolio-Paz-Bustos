
console.log('hola')

const image1 = document.getElementById('foto1');
const image2 = document.getElementById('foto2');

image1.addEventListener('mouseover', () => {
  image1.style.transform = 'scale(1.1)'; 
});

image1.addEventListener('mouseout', () => {
  image1.style.transform = 'scale(1)'; 
});

image2.addEventListener('mouseover', () => {
    image2.style.transform = 'scale(1.1)'; 
  });
  
  image2.addEventListener('mouseout', () => {
    image2.style.transform = 'scale(1)'; 
  });

