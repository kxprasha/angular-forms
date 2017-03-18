"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const product_service_1 = require('./product.service');
let ProductListComponent = class ProductListComponent {
    constructor(productService) {
        this.productService = productService;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    toggleImage() {
        this.showImage = !this.showImage;
    }
    ngOnInit() {
        this.productService.getProducts()
            .subscribe(products => this.products = products, error => this.errorMessage = error);
    }
    onRatingClicked(message) {
        this.pageTitle = 'Product List: ' + message;
    }
};
ProductListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-list.component.html',
        styleUrls: ['app/products/product-list.component.css']
    }), 
    __metadata('design:paramtypes', [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map