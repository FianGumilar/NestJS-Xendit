import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { map, lastValueFrom } from "rxjs";
import Xendit from 'xendit-node';

@Injectable()
export class XenditService {
    private apiKey: string;
    private apiUrl = 'https://api.xendit.co';
    private appUrl: string

    constructor(
        private configService: ConfigService,
        private httpService: HttpService
    ) {
        this.apiKey = this.configService.get<string>('XENDIT_KEY')
        this.apiUrl = this.configService.get<string>('APP_URL')
    }

    async createQR(
        id: string, 
        amount: number,
        status: string,
        ): Promise<any>{
        return lastValueFrom(this.httpService.post(this.apiUrl + '/qr_codes',
        {
            external_id: id,
            type: 'DYNAMIC',
            amount: amount,
            status: status,
            callback_url: `${this.appUrl}/payment/${id}/callback`,

        },
        {
            auth: {
                username: this.apiKey,
                password: ''
            }
        }
        ).pipe(
            map(response => response.data)
        )
    )}

    async transsactionStatus(id: string): Promise<any> {
        return lastValueFrom(this.httpService.get(`${this.apiUrl}/qr_codes/${id}`,
        {
            auth: {
                username: this.apiKey,
                password: ''
            }
        }
        ).pipe(
            map(response => response.data)
        )
    )}

    async findAll(): Promise<any> {

        const x = new Xendit({ secretKey:this.configService.get<string>('XENDIT_KEY') });

        const { Balance } = x;
        const balanceSpecificOptions = {};
        const b = new Balance(balanceSpecificOptions);

        const resp = await b.getBalance()
        console.log(resp);
    }
}

