const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const logoPath = path.join(__dirname, '../public/images/logos/logo.png');
  const publicDir = path.join(__dirname, '../public');

  try {
    // Read the original logo
    const logoBuffer = await sharp(logoPath).resize(512, 512).png().toBuffer();

    // Generate different favicon sizes
    const sizes = [
      { name: 'favicon-16x16.png', size: 16 },
      { name: 'favicon-32x32.png', size: 32 },
      { name: 'favicon-192x192.png', size: 192 },
      { name: 'apple-touch-icon.png', size: 180 },
    ];

    for (const { name, size } of sizes) {
      await sharp(logoBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(path.join(publicDir, name));
      
      console.log(`Generated ${name}`);
    }

    // Generate ICO file (16x16 and 32x32 combined)
    const ico16 = await sharp(logoBuffer).resize(16, 16, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    }).png().toBuffer();

    const ico32 = await sharp(logoBuffer).resize(32, 32, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    }).png().toBuffer();

    // For now, just copy the 32x32 as favicon.ico
    await sharp(ico32).toFile(path.join(publicDir, 'favicon.ico'));
    console.log('Generated favicon.ico');

    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
