import { Injectable, Controller, Get, Req, Res, HttpStatus } from "@nestjs/common";
import { XenditService } from "./xendit.service";

@Controller('xendits')
export class XenditController {
    constructor(
        private xenditsService: XenditService
    ) {}

    @Get()
    async findAll(@Req() req, @Res() res) {
        const transaction = await this.xenditsService.findAll();

        return res.status(HttpStatus.OK).json({
            statusCode: HttpStatus.OK,
            message: 'Xendit successfully',
            total: transaction.length,
            data: transaction
        })
    }
}