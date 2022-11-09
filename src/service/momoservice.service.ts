import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MomoserviceService {
  configUrl = 'assets/config.json';

  constructor(public http: HttpClient) { }
  
}
