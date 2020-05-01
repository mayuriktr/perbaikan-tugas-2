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
  j = 0;
  datanama = [];
  datap = [];
  constructor(private route : ActivatedRoute, public variabelglobal : GlobserService) { this.datanama = this.variabelglobal.getnamajurusan();
    this.datap = this.variabelglobal.getpenjelasanjurusan();
    this.j = this.variabelglobal.getjumlahnamajurusan();
  }

  ngOnInit() {
  }

  Masukan2(a,b){
    for(var i = 0; i < this.j; i++){
      if(this.datanama[i] = this.a){
        this.datap[i] = this.b;
        this.variabelglobal.setpenjelasanjurusan(this.b);
      }
    }
  }
}