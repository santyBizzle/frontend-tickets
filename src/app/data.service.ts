import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import {Tickets} from './Component-Tickets/Tickets'
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {
    console.log('esta funcionando');
  }
  getData() {
    return this.httpClient.get<Tickets[]>('http://localhost:9092/getTickets');
  }
}
