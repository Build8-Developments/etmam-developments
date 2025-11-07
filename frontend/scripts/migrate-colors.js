#!/usr/bin/env node

/**
 * Color Migration Script
 * Replaces old brand colors with new brand identity colors across the project
 */

const fs = require('fs');
const path = require('path');

// Color mapping configuration
const COLOR_MAPPINGS = {
  // Hex colors
  '#90C054': '#026838',
  '#90c054': '#026838',
  '#11613A': '#026838',
  '#11613a': '#026838',
  '#155a03': '#014d29',
  '#104502': '#014228',
  '#0b2e02': '#012f20',
  '#16a34a': '#026838', // Tailwind green-600
  
  // SVG strokes
  'stroke="#90C054"': 'stroke="#026838"',
  'stroke="#11613A"': 'stroke="#026838"',
  
  // CSS variable references (example)
  '--color-primary: #90C054': '--color-primary: #026838',
};

// Gradient replacements (more complex patterns)
const GRADIENT_PATTERNS = [
  {
    old: /linear-gradient\(90deg,\s*#90C054\s+0%,\s*#11613A\s+100%\)/gi,
    new: 'linear-gradient(90deg, #aad83a 0%, #026838 100%)'
  },
  {
    old: /linear-gradient\(164\.42deg,\s*#11613A\s+-88\.26%,\s*#90C054\s+425\.49%\)/gi,
    new: 'linear-gradient(164.42deg, #026838 -88.26%, #aad83a 425.49%)'
  },
  {
    old: /background:\s*'#16a34a'/gi,
    new: "background: '#026838'"
  },
  {
    old: /borderColor:\s*'#16a34a'/gi,
    new: "borderColor: '#026838'"
  },
];

// Files and directories to process
const INCLUDE_PATTERNS = [
  'src/**/*.tsx',
  'src/**/*.ts',
  'src/**/*.jsx',
  'src/**/*.js',
  'src/**/*.css',
];

const EXCLUDE_PATTERNS = [
  'node_modules',
  '.next',
  'build',
  'dist',
  '*.min.js',
  '*.min.css',
];

function shouldProcessFile(filePath) {
  const relativePath = path.relative(process.cwd(), filePath);
  
  // Check exclusions
  for (const pattern of EXCLUDE_PATTERNS) {
    if (relativePath.includes(pattern)) {
      return false;
    }
  }
  
  // Check inclusions
  const ext = path.extname(filePath);
  return ['.tsx', '.ts', '.jsx', '.js', '.css'].includes(ext);
}

function replaceColorsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const originalContent = content;
    
    // Replace simple hex colors
    for (const [oldColor, newColor] of Object.entries(COLOR_MAPPINGS)) {
      if (content.includes(oldColor)) {
        content = content.replace(new RegExp(oldColor, 'g'), newColor);
        modified = true;
      }
    }
    
    // Replace gradient patterns
    for (const { old, new: newPattern } of GRADIENT_PATTERNS) {
      if (old.test(content)) {
        content = content.replace(old, newPattern);
        modified = true;
      }
    }
    
    if (modified && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir, callback) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!EXCLUDE_PATTERNS.some(pattern => filePath.includes(pattern))) {
        walkDirectory(filePath, callback);
      }
    } else if (shouldProcessFile(filePath)) {
      callback(filePath);
    }
  }
}

function main() {
  console.log('🎨 Starting brand color migration...\n');
  
  const srcDir = path.join(process.cwd(), 'src');
  let filesProcessed = 0;
  let filesModified = 0;
  
  if (!fs.existsSync(srcDir)) {
    console.error('❌ src directory not found!');
    process.exit(1);
  }
  
  walkDirectory(srcDir, (filePath) => {
    filesProcessed++;
    const modified = replaceColorsInFile(filePath);
    
    if (modified) {
      filesModified++;
      console.log(`✅ Updated: ${path.relative(process.cwd(), filePath)}`);
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Files modified: ${filesModified}`);
  console.log(`\n✨ Migration complete!`);
  
  if (filesModified > 0) {
    console.log('\n⚠️  Please review the changes and test your application.');
    console.log('   Run: npm run dev');
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { replaceColorsInFile, COLOR_MAPPINGS };
