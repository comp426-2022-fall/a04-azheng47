

import {roll} from "lib/roll.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

const port = args.port || 5000
