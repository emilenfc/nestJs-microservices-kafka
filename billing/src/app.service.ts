import { Inject, Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './order-created.event';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    console.log(orderCreatedEvent.userId)
    this.authClient.send('get_user',new GetUserRequest(orderCreatedEvent.userId)).subscribe((user) => { console.log(`Billing user with stripe Id ${user.stripeUserId} a price of ${orderCreatedEvent.price}`)
      })
  }
}
