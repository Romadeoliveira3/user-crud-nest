import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getHello', () => {
    it('should return the welcome HTML message', () => {
      const expectedHtml = `
    <html>
      <body>
        <h1>Bem-vindo à API!</h1>
        <p>Para acessar a documentação, vá para <a href="/api">Swagger</a>.</p>
      </body>
    </html>
  `;
      expect(appController.getHello()).toBe(expectedHtml);
    });
  });
});