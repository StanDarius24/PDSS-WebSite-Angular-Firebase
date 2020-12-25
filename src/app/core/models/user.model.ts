import {UserProfile} from './user-profile.model';
import {UserSecurity} from './user-security.model';

export interface User {
  profile: UserProfile;
  security: UserSecurity;
}
