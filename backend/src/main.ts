import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 이 설정을 추가해야 프론트엔드(3000번)에서 백엔드(4000번) API 호출이 가능합니다!
  app.enableCors({
    origin: '*', // 모든 도메인 허용 (개발 단계에서는 편리함)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT || 10000, '0.0.0.0');
}
bootstrap();