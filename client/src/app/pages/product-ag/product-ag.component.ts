import { Component, OnInit } from '@angular/core';
import { Base } from '../base';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-product-ag',
    templateUrl: './product-ag.component.html',
    styleUrls: ['./product-ag.component.css']
})
export class ProductAgComponent extends Base implements OnInit {

    productList: Product[] = null;
    columnDefs = this.getObjectKeys('field', 'headerName');

    constructor(
        productService: ProductService
    ) {
        super(productService, Product);
    }

    ngOnInit() {
        this.columnDefs = this.columnDefs.map(def => {
            def.sortable = true;
            def.filter = true;
            def.editable = def.field !== 'id';
            def.onCellValueChanged = (ev) => this.onUpdate(ev.data);

            if (def.field == 'active') {
                def.cellEditor = 'agSelectCellEditor';
                def.cellEditorParams = {
                    values: ['true', 'false']
                };
            }
            return def;
        });

        this.list.subscribe(
            list => this.productList = list
        );
    }

}
