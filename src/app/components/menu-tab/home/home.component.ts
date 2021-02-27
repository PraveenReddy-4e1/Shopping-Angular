import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../../../services/rest-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public restService:RestServiceService) { }

  ngOnInit(): void {
  }

}
