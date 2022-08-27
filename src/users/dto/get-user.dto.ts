import { User } from '../interfaces/user.interface';
import { UserCommonProps } from './UserCommonProps';

export class GetUserDto extends UserCommonProps {
  user: User;
}
