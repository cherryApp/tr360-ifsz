import { Observable } from 'rxjs';
import { Weather } from '../models/weather';
import { BaseService } from '../services/base.service';

export class Base {

    list: Observable<any> = this.mainService.read();
    columns: {key: string, title: string}[] = this.getObjectKeys();

    constructor(
        protected mainService: BaseService,
        protected mainClass: any
    ) { }

    getObjectKeys(): { key: string, title: string }[] {
        let mClass = new this.mainClass();
        let columns = [];
        for (let k in mClass) {
            columns.push({ key: k, title: k });
        }
        return columns;
    }

    onCreate(row: any): void {
        row.price = parseInt(row.price);
        this.mainService.create(row);
    }

    onUpdate(row: any): void {
        // 
    }
}
