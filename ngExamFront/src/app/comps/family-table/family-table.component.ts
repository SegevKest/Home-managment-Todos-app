import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/Home.service';

@Component({
  selector: 'app-family-table',
  templateUrl: './family-table.component.html',
  styleUrls: ['./family-table.component.css']
})
export class FamilyTableComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

}
