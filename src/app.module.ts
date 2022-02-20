import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatsModule } from './chats/chats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import { Users1Module } from './users1/users1.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ChatsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/micro-chat.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    Users1Module,
    RoomsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
