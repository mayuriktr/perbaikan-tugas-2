import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import appComponentHtml from '../app.component.html';
import { GlobserService } from '../globser.service';

@Component({
  selector: 'app-halamanedit',
  templateUrl: './halamanedit.component.html',
  styleUrls: ['./halamanedit.component.css']
})
export class HalamaneditComponent implements OnInit {

  constructor(private route : ActivatedRoute, public variabelglobal : GlobserService) { }

  ngOnInit() {
  }

}