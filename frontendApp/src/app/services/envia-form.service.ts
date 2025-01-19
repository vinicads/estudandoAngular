import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormService {

  constructor() { }
  enviaInformacao(data: object){
    console.table(data)
  }
}
