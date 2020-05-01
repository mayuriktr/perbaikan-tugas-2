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
    this.namajurusan.push(namajurus);
    this.jumlahnamajurusan++;
  }

  public getnamajurusan(){
    
  }

  public setpenjelasanjurusan(penjelasjurus){
    this.penjelasanjurusan.push(penjelasjurus);
    this.jumlahpenjelasanjurusan++;
  }

  public getpenjelasanjurusan(){

  }

}