import { Exclude, Expose, } from 'class-transformer'
export class User {

    // @Expose({ name: '_id', toClassOnly: true, toPlainOnly: false })
    // @Transform(id => id.toString())
    // id: string;
    @Exclude({ toPlainOnly: true })
    _id: string;

    @Expose()
    get id() {
        return this._id.toString()
    }

    @Expose()
    name: string;
    @Expose()
    email: string;
    @Expose()
    username: string;
    @Expose({ name: 'created_at', toPlainOnly: true })
    createdAt: Date;
    @Exclude({ toPlainOnly: true })
    password: string

    @Exclude()
    tokens: []

    // get getPassword(): string {
    //     return this.password
    // }
}