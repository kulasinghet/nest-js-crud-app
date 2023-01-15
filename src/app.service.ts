import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    
    getVSTest(): string {
        return 'Hello from Visual Studio';
  }
    
  getHello(): string {
    return 'Hello World!';
  }

  getThevindu() {
    return 'Thevindu Kulasinghe';
  }
}
