import { User } from '../interfaces/user.interface';
import { UserCommonProps } from './UserCommonProps';

export class UpdateUserDto extends UserCommonProps {
  user: User;
}
