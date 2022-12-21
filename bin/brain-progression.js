#!/usr/bin/env node
import welcomeUser from '../src/cli.js';
import game from '../src/index.js';

const name = welcomeUser();
game(name, 'progressionType');
