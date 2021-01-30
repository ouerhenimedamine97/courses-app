import {Injectable} from '@angular/core';
import {Formateur} from './Schema/formateur.model';
import {FORMATEURITEMS} from './Schema/formateur';


@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  message: string;
  formateurs: Formateur[];
  formateurItems: Formateur;

  constructor() {
  }

  get() {
    return FORMATEURITEMS;
  }

  add(formateurItem) {
    
    if(FORMATEURITEMS.length==0){
      formateurItem.id =  1;
      FORMATEURITEMS.push(formateurItem);
    }

    else{
    formateurItem.id = FORMATEURITEMS.slice(-1)[0].id + 1;
    FORMATEURITEMS.push(formateurItem);
  }

  }

  delete(formateurItem) {
    let index;
    index = FORMATEURITEMS.indexOf(formateurItem);
    if (index > -1) {
      FORMATEURITEMS.splice(index, 1);
    }
  }

  getFormateur(id: number) {
    return FORMATEURITEMS[id - 1];
  }

}
