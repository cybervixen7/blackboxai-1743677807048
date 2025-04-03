const { createCanvas } = require('canvas');
const fs = require('fs');
const canvas = createCanvas(512, 512);
const ctx = canvas.getContext('2d');

// Fondo circular azul
ctx.beginPath();
ctx.arc(256, 256, 256, 0, Math.PI * 2);
ctx.fillStyle = '#3b82f6';
ctx.fill();

// Texto MB blanco
ctx.font = 'bold 100px Arial';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('MB', 256, 256);

// Guardar como PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('assets/logo.png', buffer);
console.log('Logo temporal generado en assets/logo.png');