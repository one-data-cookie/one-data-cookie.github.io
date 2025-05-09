const SVG_SIZE = 11;
const MAX_BYTES = Math.floor((SVG_SIZE * SVG_SIZE) / 8);

function createGrid() {
  return Array(SVG_SIZE)
    .fill()
    .map(() => Array(SVG_SIZE).fill(0));
}

function getNeighbors(grid, x, y) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      const newX = (x + i + SVG_SIZE) % SVG_SIZE;
      const newY = (y + j + SVG_SIZE) % SVG_SIZE;
      count += grid[newY][newX];
    }
  }
  return count;
}

function evolveGrid(grid) {
  const newGrid = createGrid();
  for (let y = 0; y < SVG_SIZE; y++) {
    for (let x = 0; x < SVG_SIZE; x++) {
      const neighbors = getNeighbors(grid, x, y);
      if (grid[y][x]) {
        newGrid[y][x] = neighbors === 2 || neighbors === 3 ? 1 : 0;
      } else {
        newGrid[y][x] = neighbors === 3 ? 1 : 0;
      }
    }
  }
  return newGrid;
}

function gridToSvg(grid) {
  let svg = `<svg viewBox="0 0 ${SVG_SIZE} ${SVG_SIZE}">`;
  for (let y = 0; y < SVG_SIZE; y++) {
    for (let x = 0; x < SVG_SIZE; x++) {
      if (grid[y][x]) {
        
        const fillValue = grid[y][x] ? 'hsl(0deg 0% 0%)' : 'hsl(0deg 0% 100%)';
        svg += `<rect x="${x}" y="${y}" width="1.1" height="1.1" fill="${fillValue}"></rect>`;
      }
    }
  }
  return svg + "</svg>";
}

function generateSvgArt(input, steps = 5) {
  const grid = createGrid();
  const bytes = new TextEncoder().encode(input);

  for (let i = 0; i < MAX_BYTES; i++) {
    const byte = bytes[i] || 0;
    for (let j = 7; j >= 0; j--) {
      const bit = (byte >> j) & 0b00000001;
      const bitIndex = i * 8 + (7 - j);
      const x = bitIndex % SVG_SIZE;
      const y = Math.floor(bitIndex / SVG_SIZE);
      grid[y][x] = bit;
    }
  }

  let currentGrid = grid;
  for (let i = 0; i < steps; i++) {
    currentGrid = evolveGrid(currentGrid);
  }

  return gridToSvg(currentGrid);
}

// Get current date in YYYYMMDD format and sum its digits
const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
const steps = today.split("").reduce((sum, digit) => sum + parseInt(digit), 0);

// Generate SVG using Jekyll author variable and calculated steps
const author = "Michal Kolacek";
document.querySelector(".hash-art").innerHTML = generateSvgArt(author, steps);
