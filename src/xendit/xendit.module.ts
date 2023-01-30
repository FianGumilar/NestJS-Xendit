import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { XenditService } from "./xendit.service";
// import { XenditController } from "./xendit.controller";

@Module({
    imports: [HttpModule],
    providers: [XenditService],
    // controllers: [XenditController],
    exports: [XenditService]
})

export class XenditModule {}
