import { Injectable } from '@angular/core';
import { Participant } from './Schema/participant.model';
import { PARTICIPANTITEMS } from './Schema/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {



  participants: Participant[];
  participantItems: Participant;

  constructor() {
  }

  getAllParticipant() {
    return PARTICIPANTITEMS;
  }

  addParticipant(participant) {

    participant.id = PARTICIPANTITEMS.length + 1;
    PARTICIPANTITEMS.push(participant);
  }


  delete(participantItems) {

    let index;
    index = PARTICIPANTITEMS.indexOf(participantItems);
    console.log(index);
    if (index > -1) {

      PARTICIPANTITEMS.splice(index, 1);
    }

  }

  getParticipant(id: number) {

    return PARTICIPANTITEMS[id - 1];
  }
}
