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
  jum1= 0;
  jum2 = 0;
  constructor(private route : ActivatedRoute, public variabelglobal : GlobserService) {
    this.datanama = this.variabelglobal.getnamajurusan();
    this.datapenjelasan = this.variabelglobal.getpenjelasanjurusan();
    this.jum1 = this.variabelglobal.getjumlahnamajurusan();
    this.jum2 = this.variabelglobal.getjumlahpenjelasanjurusan();

   }

  ngOnInit() {
  }
  
  // list(){
  //   this.jum1 = this.variabelglobal.getjumlahnamajurusan();
  //   this.jum2 = this.variabelglobal.getjumlahpenjelasanjurusan();
  //   for(var i = 0; i < this.jum1; i++){
  //     this.datanama[i] = this.variabelglobal.getnamajurusan2(i);
  //   }

  //   for(var i = 0; i<this.jum2;i++){
  //     this.datapenjelasan[i] = this.variabelglobal.getpenjelasanjurusan2(i);
  //   }

  // }

}