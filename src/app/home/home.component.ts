import { Component, OnInit, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductComponent } from '../shared/product/product.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public _productComponent: ProductComponent,
    public router: Router
  ) { }

  ngOnInit() {
  }

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 500;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  orderNow() {
    this.router.navigate(["/checkout"])
  }


  background = 'background';
  text = 'text-style';
  title = 'horizontal-menu-test';
  link = 'link';
  distance = 30;
  items = [
    { title: "Food Category 1" }, { title: "Food Category 2" }, { title: "Food Category 3" }
  ]

  slidesStore = [
    {
      id: "1",
      title: "Slide 1",
      src: "../../assets/images/Slide-1.png"
    },
    {
      id: "2",
      title: "Slide 2",
      src: "../../assets/images/Slide-1.png"
    }
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    items: 1,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

}
