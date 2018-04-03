import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';
// import { ProductService } from './product.service';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    _listFilter: string;
    constructor(private _productService: ProductService) {
    }

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;

    }
    errorMessage: string;

    filteredProducts: IProduct[];
    products: IProduct[] = [];



    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts().subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products; },
            error => this.errorMessage = <any>error);

    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((prodoct: IProduct) => prodoct.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
