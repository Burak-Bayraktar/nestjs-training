import { User } from '../interfaces/user.interface';
import { UserCommonProps } from './UserCommonProps';

export class GetUsersDto extends UserCommonProps {
  users: User[];
}
