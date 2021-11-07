import { createBot } from './bot/createBot.js';
import { getConfig } from './getConfig.js';
import { WakatimeRepo } from './WakatimeRepo.js';

const config = getConfig();

const db = await new WakatimeRepo(config.dbFilePath).init();
const bot = createBot(config, db);

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));