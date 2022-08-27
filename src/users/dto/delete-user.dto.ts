import { User } from '../interfaces/user.interface';
import { UserCommonProps } from './UserCommonProps';

export class DeleteUserDto extends UserCommonProps {
  user: User;
}
