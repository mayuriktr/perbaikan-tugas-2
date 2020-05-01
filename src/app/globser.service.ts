import { Injectable } from '@angular/core';

@Injectable()
export class GlobserService {

  public data : String = 'abc';
  public namajurusan=[];
  public penjelasanjurusan=[];
  public jumlahnamajurusan = 0;
  public jumlahpenjelasanjurusan = 0;

  constructor() { }

  public getData(){
    return this.data;
  }

  public setData(databaru){
    this.data = databaru;
  }

  public setnamajurusan(namajurus){
    // this.namajurusan.push(namajurus);
    this.namajurusan = namajurus;
    this.jumlahnamajurusan++;
  }

  public getjumlahpenjelasanjurusan(){
    return this.jumlahpenjelasanjurusan;
  }

  public getjumlahnamajurusan(){
    return this.jumlahnamajurusan;
  }

  public getnamajurusan(){
    return this.namajurusan;
    
  }

  public setpenjelasanjurusan(penjelasjurus){
    // this.penjelasanjurusan.push(penjelasjurus);
    this.penjelasanjurusan = penjelasjurus;
    this.jumlahpenjelasanjurusan++;
  }

  public getpenjelasanjurusan(){
    return this.penjelasanjurusan;
  }

  // public printnamajurusan(){
  //   for(var i = 0; i<this.jumlahnamajurusan; i++){
      
  //   }
  // }
  

}