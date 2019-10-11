import { BaseModel } from './base-model';

export class Product extends BaseModel {
    id: number = 0;
    name: string = "";
    description: string = "";
    price: number = 0;
    active: boolean = true;
}
