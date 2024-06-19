import { echoTest } from '@pangshu/utils';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return echoTest();
    }
}
