import { BaseModel } from './base-model';

export class Product extends BaseModel {
    id: number = 0;
    name: string = "";
    description: string = "";
    price: number = 0;
    active: boolean = true;

    validate(): any {
        this.id = typeof this.id !== 'number' ? parseInt(this['id']) : this.id;
        this.price = typeof this.price === 'number' ? this.price : parseInt(this['price']);
        this.active = this.active.toString() === 'true' ? true : false;
    }
}
