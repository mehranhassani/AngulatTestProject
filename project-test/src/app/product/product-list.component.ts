import { Component } from '@angular/core';

// import { IProduct } from '../product';
// import { ProductService } from './product.service';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    listFilter = 'cart';
    errorMessage: string;

    products: any[] = [{
        'productId': 1,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Leaf rake with 48-inch wooden handle.',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    },
    {
        'productId': 2,
        'productName': 'Garden Cart',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2016',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    }];

    // constructor(private _productService: ProductService) {

    // }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    // ngOnInit(): void {
    //     this._productService.getProducts()
    //             .subscribe(products => this.products = products,
    //                        error => this.errorMessage = <any>error);
    // }

    // onRatingClicked(message: string): void {
    //     this.pageTitle = 'Product List: ' + message;
    // }
}
