/**
 * first-project - Entry Point
 *
 * Autonomous development powered by Miyabi framework
 */

import { generateMiyabiDemoDocument, generateWordDocument } from './wordGenerator.js';

console.log('🌸 Welcome to first-project!');
console.log('Powered by Miyabi - Autonomous AI Development Framework');
console.log('');
console.log('This project includes:');
console.log('  ✓ 7 AI agents ready to work');
console.log('  ✓ Automatic Issue → PR pipeline');
console.log('  ✓ 53-label state machine');
console.log('  ✓ CI/CD automation');
console.log('  ✓ Word document generation');
console.log('');
console.log('Next steps:');
console.log('  1. Create an issue: gh issue create --title "Your task"');
console.log('  2. Watch agents work: npx miyabi status --watch');
console.log('  3. Review the PR when ready');
console.log('  4. Generate documents: npm run dev -- --generate-doc');
console.log('');
console.log('Documentation: See CLAUDE.md and README.md');

export function hello(): string {
  return 'Hello from first-project!';
}

// Export Word generation functions
export { generateWordDocument, generateMiyabiDemoDocument };

// Example async function
export async function main(): Promise<void> {
  console.log('Starting application...');

  // Check if document generation is requested
  const args = process.argv.slice(2);
  if (args.includes('--generate-doc')) {
    console.log('\n📄 Generating Miyabi demo document...\n');
    await generateMiyabiDemoDocument();
    console.log('\n✓ Document generation complete!\n');
    return;
  }

  // Your application logic here

  console.log('Application started successfully');
}

// Run main if this is the entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
}
