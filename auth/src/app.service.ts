import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '1',
     stripeUserid:'45676'
    },
    {
      userId: '2',
      stripeUserId:'623565326'
    },
    {
      userId: '3',
      stripeUserId:'623565'
    }
  ]
  getHello(): string {
    return 'Hello World!';
  }
  getuser(getuserRequest: GetUserRequest) {
    return this.users.find((user) => user.userId === getuserRequest.userId)
  }
}
