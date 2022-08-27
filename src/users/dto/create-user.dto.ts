import { User } from '../interfaces/user.interface';
import { UserCommonProps } from './UserCommonProps';

export class CreateUserDto extends UserCommonProps {
  user: User;
}
