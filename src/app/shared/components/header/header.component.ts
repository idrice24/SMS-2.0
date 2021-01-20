import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	items: MenuItem[];
	activeItem: MenuItem; // by default item that matches the active route is highlighted

  constructor() { }

  ngOnInit(): void {
  	this.items = [{}];
  	this.activeItem = this.items[0];
  }

}
