import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('thevindu')
  getThevindu(): string {
    return this.appService.getThevindu();
  }

    @Get('vs-test')
    getVSTest(): string {
        return this.appService.getVSTest();
    }
}
