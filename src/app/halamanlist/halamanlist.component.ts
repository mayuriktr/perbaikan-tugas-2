import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import appComponentHtml from '../app.component.html';
import { GlobserService } from '../globser.service';

@Component({
  selector: 'app-halamanlist',
  templateUrl: './halamanlist.component.html',
  styleUrls: ['./halamanlist.component.css']
})
export class HalamanlistComponent implements OnInit {

  constructor(private route : ActivatedRoute, public variabelglobal : GlobserService) { }

  ngOnInit() {
  }

}