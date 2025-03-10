import { Client, GatewayIntentBits, Partials } from 'discord.js';
import logger from '../../utilities/logger';

export class BBot extends Client {
  constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.DirectMessagePolls
      ],
      partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.GuildScheduledEvent,
        Partials.User,
        Partials.Reaction,
        Partials.ThreadMember,
        Partials.Message
      ]
    });
  }

  async Init() {
    const token = process.env.BOT_TOKEN;
    if (!token) return logger.error('Invalid token provided.');
    await this.login(token);

    logger.info(`Logged in as ${this.user?.tag}`);
  }
}
