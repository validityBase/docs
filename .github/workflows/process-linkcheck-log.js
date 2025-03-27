const fs = require('fs');

// Read the log file
const logFile = 'linkcheck.log';
const logContent = fs.readFileSync(logFile, 'utf-8');

// Extract warnings and errors using regex
const warningsMatch = logContent.match(/(\d+)\s+warnings/);
const errorsMatch = logContent.match(/(\d+)\s+errors/);

const warnings = warningsMatch ? parseInt(warningsMatch[1], 10) : 0;
const errors = errorsMatch ? parseInt(errorsMatch[1], 10) : 0;

console.log(`Warnings: ${warnings}`);
console.log(`Errors: ${errors}`);

// Fail the workflow if warnings or errors are non-zero
if (warnings > 0 || errors > 0) {
  console.error(`Logcheck failed with ${warnings} warnings and ${errors} errors.`);
  process.exit(1);
} else {
  console.log('Logcheck passed with no warnings or errors.');
}