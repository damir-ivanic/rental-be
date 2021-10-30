import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';

const config: TypeOrmModuleOptions = {
  name: 'default',
  type: 'sqlite',
  database: 'db.sqlite3',
  entities: [User, Post],
  synchronize: true,
};

@Module({
  imports: [
    UsersModule,
    PostsModule,
    VehiclesModule,
    TypeOrmModule.forRoot(config),
  ],
})
export class AppModule {}
