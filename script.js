const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const imageContainer = document.getElementById('imageContainer');
const container = document.querySelector('.container');

let isFirstClick = true; // Flag to track the first click

yesButton.addEventListener('click', () => {
  // Clear everything in the container
  container.innerHTML = '';

  // Create a new div for the grid and message
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('image-grid');

  const newLocal = 'https://images.fineartamerica.com/images/artworkimages/medium/3/snoopy-joe-cool-grace-a-waldo-transparent.png';
  // Add images to the grid
  const images = [
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTdhMWIyZzByM3l4ZTdsa2NjdHhod2d4eDlvdzdldThscTB2a2M4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif',
    'https://i.pinimg.com/736x/68/e2/4b/68e24b8f94b55d9b82d5b30133ca8f9e.jpg',
    'https://i.pinimg.com/736x/ad/e8/fd/ade8fd614f6ff61e558011493330ef07.jpg',
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXZzaXk4Z3djZjdrZ3A1cnRiM2V3NGVoYW15ODBieGlubmY3Y3dsayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WcxwFCwA9Zlc0SdcB2/giphy.gif',
    'https://i.pinimg.com/736x/eb/eb/5b/ebeb5bc26ff4bbc9881a91c532d68c7b.jpg',
    'https://i.pinimg.com/736x/aa/1c/10/aa1c102b5ea3e19c0d3d75682c8bcca5.jpg'
   
  ];

  images.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Cute Snoopy Image';
    gridContainer.appendChild(img);
  });

  // Add the grid to the container
  container.appendChild(gridContainer);

  // Add the response message
  const message = document.createElement('p');
  message.id = 'response';
  message.textContent = "Mi turroncita mivida hermosa me haces la persona mas feliz del mundo! 💖";
  container.appendChild(message);
});

function moveNoButton() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  // Calculate random positions within the visible screen area
  const maxX = screenWidth - buttonWidth;
  const maxY = screenHeight - buttonHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Set the new position
  noButton.style.position = 'fixed'; // Use fixed positioning to stay within the viewport
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Show image and move button when "No" is clicked or hovered
noButton.addEventListener('click', () => {
  if (isFirstClick) {
    // Apply a transition effect on the first click
    noButton.style.transition = 'transform 0.5s ease';
    noButton.style.transform = 'scale(1.2)'; // Example: Scale up the button
    setTimeout(() => {
      noButton.style.transform = 'scale(1)'; // Reset the scale
      isFirstClick = false; // Mark the first click as done
    }, 500); // Duration of the transition
  }
  mouseoverNoButton()
  moveNoButton();
  
});
function mouseoverNoButton() {
  noButton.addEventListener('mouseover', () => {
    imageContainer.innerHTML = '<img src="https://i.pinimg.com/564x/dd/7f/6c/dd7f6ca2bce302e27f51b579ef732aeb.jpg" alt="Laughing Snoopy">';
    response.textContent = "Jaja, no puedes tocar el botón 🤣🫢";
    moveNoButton();
  });
};