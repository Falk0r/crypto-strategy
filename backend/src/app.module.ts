import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './models/users/entities/user.entity';
import { UsersModule } from './models/users/users.module';
import { AuthModule } from './authentication/auth.module';
import { AuthGuard } from './authentication/auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'develop',
      password: 'password',
      database: 'develop',
      entities: [User],
      synchronize: true, // Not in production
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
