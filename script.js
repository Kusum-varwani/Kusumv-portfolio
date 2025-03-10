
      
function changeBackgroundColor() {
    // Array of color options
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFD700'];
    
    // Randomly pick a color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
}
