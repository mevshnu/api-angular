import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quotesapp',
  templateUrl: './quotesapp.component.html',
  styleUrls: ['./quotesapp.component.css']
})
export class QuotesappComponent {
  constructor(private api:ApiService)
  {
    api.fetchquotes().subscribe(
      (response)=>
      {
        this.data8=response;
      }
    )
  }
data8:any={}
}
