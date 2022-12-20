#!/usr/bin/env node
import welcomeUser from '../src/cli.js';
import { evenGame } from '../src/utils.js';

const name = welcomeUser();
evenGame(name);
