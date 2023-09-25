import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './repositories/users.repository';
import { UsersInMemoryRepository } from './repositories/inMemory/users.inMemory';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService,{
    provide: UsersRepository,
    useClass: UsersInMemoryRepository
  }],
})
export class UsersModule {}
