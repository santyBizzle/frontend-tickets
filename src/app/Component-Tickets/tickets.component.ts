import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Tickets } from './Tickets';

@Component({
  selector: 'tickets-start',
  templateUrl: './tickets.component.html'  
})
export class Staring {
  tickets:Tickets[] = [];
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
        console.log("datos>>",data);    
      this.tickets = data;
    });
  }
}
