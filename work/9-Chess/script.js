const grid = document.getElementById('grid');

for (let y = 0; y < 10; y++) {          
  for (let x = 0; x < 10; x++) {        
    const cell = document.createElement('div');

   
    if ((x + y) % 2 === 0) {
      cell.classList.add('cell1');    
    } else {
      cell.classList.add('cell2');    
    }

    
    cell.addEventListener('click', () => {
      cell.classList.toggle('active');
    });

    grid.appendChild(cell);
  }
}
