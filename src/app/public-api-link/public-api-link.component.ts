import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-api-link',
  templateUrl: './public-api-link.component.html',
  styleUrls: ['./public-api-link.component.css']
})
export class PublicApiLinkComponent {
  constructor(private api:ApiService)
  {
    api.fetchpublic().subscribe(
      (response)=>
      {
        this.public=response;
      }
    )
  }
public:any={}
}
