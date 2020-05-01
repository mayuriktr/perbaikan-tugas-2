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
  datanama = [];
  datapenjelasan = [];
  jum = 0;
  constructor(private route : ActivatedRoute, public variabelglobal : GlobserService) {
    this.datanama = this.variabelglobal.getnamajurusan();
    this.datapenjelasan = this.variabelglobal.getpenjelasanjurusan();
    this.jum = this.variabelglobal.getjumlahnamajurusan();


   }

  ngOnInit() {
  }

}