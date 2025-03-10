import { config } from 'dotenv';
import { BBot } from './types/classes/bbot';

config();

const bot = new BBot();

bot.Init();
