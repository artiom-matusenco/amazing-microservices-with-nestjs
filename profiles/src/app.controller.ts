import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

import { Account, Profile } from './app.interface';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_profiles' })
  getProfiles(): Profile[] {
    return this.appService.getProfiles();
  }

  @EventPattern({ cmd: 'create_account' })
  createProfile(account: Account): Profile {
    const { id, name } = account;
    return this.appService.createProfile({ id, name });
  }
}
