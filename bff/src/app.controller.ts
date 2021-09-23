import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { Account, Profile, User } from './app.interface';

@Controller()
export class AppController {
  constructor(
    @Inject('PUBSUB')
    private readonly client: ClientProxy,
  ) {}

  @Get('accounts')
  async getAccounts(): Promise<Account[]> {
    const users = await this.client
      .send<User[]>({ cmd: 'get_users' }, { page: 1, items: 10 })
      .toPromise();
    const profiles = await this.client
      .send<Profile[]>({ cmd: 'get_profiles' }, { ids: users.map((u) => u.id) })
      .toPromise();

    return users.map<Account>((u) => ({
      ...u,
      ...profiles.find((p) => p.id === u.id),
    }));
  }

  @Post('accounts')
  async createAccount(@Body() account: Account): Promise<void> {
    await this.client.emit({ cmd: 'create_account' }, account);
  }
}
