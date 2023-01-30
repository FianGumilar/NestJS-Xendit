import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule, HttpService } from '@nestjs/axios';
import { XenditModule } from './xendit/xendit.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    // MongooseModule.forRootAsync({
    //   useFactory: 
    //     async (configService: ConfigService) => ({
    //       uri: configService.get<String>('MONGODB_URI'),
    //       useNewUrlParser: true,
    //       useUnifiedTopology: true,
    //       useCreateIndex: true
    //     }),
    //     inject: [ConfigService]
    // }),
    UserModule,
    HttpModule,
    XenditModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
