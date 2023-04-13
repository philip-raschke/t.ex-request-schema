import { program } from 'commander';
import Controller from './src/Controller.js';

/**
 * Program definition: t.ex-request-schema
 * Version: 1.0.0
 */
program
  .name('t.ex-request-schema')
  .description('A tool to generate the JSON schema of the T.EX request format which relies on the WebExtensions interface of the different browsers.')
  .version('1.0.0');

/**
 * CLI-Command definition: json
 * Description: Generate JSON schema based on input.
 * Arguments: dir
 * Options: none
 */
program.command('json')
  .description('Generate JSON schema from T.EX dump.')
  .argument('<dir>', 'path to JSON files')
  .action(Controller.parse);

program.parse();