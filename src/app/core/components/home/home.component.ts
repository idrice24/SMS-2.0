import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private primengConfig: PrimeNGConfig
    ) { }

  public myVar;

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  	this.myVar = setTimeout(this.showPage, 3000);
  }

  showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

}
