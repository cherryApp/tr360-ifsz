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

    getObjectKeys(keyName?: string, titleName?: string): any[] {
        let mClass = new this.mainClass();
        let columns = [];
        for (let k in mClass) {
            let row = {};
            row[keyName || 'key'] = k;
            row[titleName || 'title'] = k;
            columns.push(row);
        }
        return columns;
    }

    onCreate(row: any): void {
        let validated = new this.mainClass().fromObject(row);
        validated.validate();
        this.mainService.create(validated);
    }

    onUpdate(row: any): void {
        let validated = new this.mainClass().fromObject(row);
        validated.validate();
        this.mainService.update(row.id, validated); 
    }
}
