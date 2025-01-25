import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <html>
      <body>
        <h1>Bem-vindo à API!</h1>
        <p>Para acessar a documentação, vá para <a href="/api">Swagger</a>.</p>
      </body>
    </html>
  `;
  }
}
