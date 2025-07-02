const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages(directory) {
  try {
    const files = await fs.readdir(directory, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(directory, file.name);
      
      if (file.isDirectory()) {
        await optimizeImages(fullPath);
        continue;
      }
      
      const ext = path.extname(file.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const outputPath = fullPath.replace(ext, '.webp');
        console.log(`Optimizing: ${file.name}`);
        
        await sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
      }
    }
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

// Start optimization from the public/images directory
optimizeImages(path.join(process.cwd(), 'public', 'images'))
  .then(() => console.log('Image optimization complete!'))
  .catch(console.error); 