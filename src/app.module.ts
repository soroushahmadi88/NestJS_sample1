import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { RolesModule } from './roles/roles.module';



@Module({
  imports: [RolesModule],
  //controllers Array: which controllers use in this module
  controllers: [AppController, UsersController],
  //providers Array: which providers use in this module
  providers: [AppService],
})
export class AppModule {}
