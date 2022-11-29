import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent {

  constructor(private api:ApiService)
  {
    api.fetchuserdata().subscribe(
      (response)=>
      {
        this.data4=response;
      }
    )
  }

data4:any={}
}
