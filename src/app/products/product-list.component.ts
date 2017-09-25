import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'; 
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
    //add unique css by adding link to the css for that particular component
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Book List';
    imageWidth: number = 50;
    imageMargin: number = 2; 
    showImage: boolean = false;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    
    filteredProducts: IProduct[];

    //below is a reference to the interface we created, which just exists here in development and allows us to get Intellisense and assign strong typing
    products: IProduct[] = [];
    
    constructor(private _productService: ProductService) {
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Book List: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
                product.authorName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
       this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }
}