import { Injectable } from '@angular/core';

@Injectable()
export class GlobserService {

  public data : String = 'abc';
  public namajurusan=[];
  public penjelasanjurusan=[];

  constructor() { }

  public getData(){
    return this.data;
  }

  public setData(databaru){
    this.data = databaru;
  }

  public setnamajurusan(namajurus){
    this.namajurusan.push(namajurus);
  }

  public getnamajurusan(){
    
  }

}