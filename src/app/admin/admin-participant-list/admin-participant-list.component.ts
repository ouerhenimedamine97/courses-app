import {Component, Input, OnInit} from '@angular/core';
import {Participant} from '../Schema/participant.model';
import {ParticipantService} from '../participant.service';

@Component({
  selector: 'app-admin-participant-list',
  templateUrl: './admin-participant-list.component.html',
  styleUrls: ['./admin-participant-list.component.css']
})
export class AdminParticipantListComponent implements OnInit {

  @Input()
  participant: any;
  participantItems: Participant[];

  constructor(private participantService: ParticipantService) {
    
    this.participantItems = this.participantService.getAllParticipant();

  }


  onDelete(participantItems: Participant) {
    if (confirm('êtes-vous sûr ?'))  this.participantService.delete(participantItems);
  }

  ngOnInit(): void {
  }
}
