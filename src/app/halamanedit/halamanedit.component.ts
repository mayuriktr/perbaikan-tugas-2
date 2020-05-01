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

  a  = "";
  b = "";
  j1 = 0;
  j2 = 0;
  datanama = [];
  datap = [];
  constructor(private route : ActivatedRoute, public variabelglobal : GlobserService) { this.datanama = this.variabelglobal.getnamajurusan();
    this.datap = this.variabelglobal.getpenjelasanjurusan();
    this.j1 = this.variabelglobal.getjumlahnamajurusan();
    this.j2 = this.variabelglobal.getjumlahpenjelasanjurusan();
  }

  ngOnInit() {
  }

  Masukan2(a,b){
    for(var i = 0; i < this.j1; i++){
      if(this.datanama[i] == a){
        this.datap[i] = b;
        this.variabelglobal.setpenjelasanjurusan2(b,i);
      }
    }
  }
}