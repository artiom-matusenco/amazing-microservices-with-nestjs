import { Injectable } from '@nestjs/common';

import { Profile } from './app.interface';

@Injectable()
export class AppService {
  profiles = [
    { id: '1', name: 'Bob' },
    { id: '2', name: 'John' },
  ];

  getProfiles(): Profile[] {
    return this.profiles;
  }

  createProfile(profile: Profile): Profile {
    this.profiles.push(profile);
    return profile;
  }
}
