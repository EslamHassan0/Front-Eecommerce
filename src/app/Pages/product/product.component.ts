import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/ProductService';
import { environment } from 'src/environments/environment';
import { BreakpointObserver,Breakpoints, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Path = environment.baseUrl+"ProcductImage/"
  gridColumns = 3;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  Products: any = []
  constructor(private ProductAPi: ProductService , public responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.getProdcuts();
    this.responsive
    .observe([Breakpoints.HandsetPortrait])
    .subscribe((state:BreakpointState)=>{
      if(state.matches){
        console.log(
          'This is the Handset Portrait point at max-width: 599.98 px and portrait orientation.'
          );
      }
    })
  }

 
  getProdcuts() {
    this.ProductAPi.GetProduct().subscribe(res => {
      this.Products = res;
      
      console.log(this.Path)
      console.log(res)
    })
  }

}
