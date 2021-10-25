import { Component, OnInit, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductComponent } from '../shared/product/product.component';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ElementRef, Renderer2 } from '@angular/core';
import { ScrollService } from '../service/scroll.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listenFunc: any
  totalPrice: number = 110;
  cart: number = 1;

  constructor(
    private _vps: ViewportScroller,
    public dialog: MatDialog,
    public _productComponent: ProductComponent,
    public router: Router,
    elementRef: ElementRef,
    renderer: Renderer2,
    private scrollService: ScrollService
  ) {
    this.listenFunc = renderer.listen(elementRef.nativeElement, 'click', (event) => {
      event.preventDefault();
      let target = event.target || event.srcElement || event.currentTarget;
      console.log(target);
      if (target.className != "Tabs2" || target.className != "Tabs") {

        if (target.innerText.slice(6, 8) == "On") {
          this.scroll('Category1')
        }
        else if (target.innerText.slice(6, 8) == "Tw") {
          this.scroll('Category2')
        }
        else if (target.innerText.slice(6, 8) == "Th") {
          this.scroll('Category3')
        }
      }

    });

    scrollService.currentSection.subscribe(
      (res) => {
        console.log("current section: ", res)
      }
    )
  }

  ngOnInit() {
  }

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 500;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductComponent, {
      width: '99%',
      maxWidth: '100vw',
      autoFocus: false,
      maxHeight: '90vh', //you can adjust the value as per your view

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  scroll(anchor: string): void {
    this._vps.scrollToAnchor(anchor)
  }


  orderNow() {
    this.router.navigate(["/checkout"])
  }

  addPrice() {
    this.totalPrice = this.totalPrice + 110;
    this.cart = this.cart + 1;
  }


  background = 'background';
  text = 'text-style';
  title = 'horizontal-menu-test';
  link = 'link';
  distance = 30;
  items = [
    { title: "Foody One" }, { title: "Foody Two" }, { title: "Foody Three" }
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
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

}
