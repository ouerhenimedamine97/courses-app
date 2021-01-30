import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FakesessionitemService } from '../fakesessionitem.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FakesessionitemService]
})
export class AdminComponent implements OnInit, AfterContentChecked {

  currentUrl;
  currentDate;
  constructor(private router: Router) {
    this.currentDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  }

  

  ngAfterContentChecked():void{
    console.log("test");
    console.log((this.router.url.split('?')[0]));
    this.currentUrl = (this.router.url.split('?')[0])
        .replace("/admin/","")
        .replace("/add","")
        .replace("/edit","")
        .replace("/list","")
        .replace("/","");
    console.log(this.currentUrl);
  }

  ngOnInit(): void {

  }

}
