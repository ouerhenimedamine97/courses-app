import {Component, Input, OnInit} from '@angular/core';
import { Formateur } from '../Schema/formateur.model';
import { FormateurService } from '../formateur.service';

@Component({
  selector: 'app-admin-formateur-list',
  templateUrl: './admin-formateur-list.component.html',
  styleUrls: ['./admin-formateur-list.component.css']
})
export class AdminFormateurListComponent implements OnInit {

  @Input()
  formateur: any;
  formateurItems: Formateur[];

  constructor(private formateurService: FormateurService) {
    this.formateurItems = this.formateurService.get();
  }

  onDelete(formateurItems: Formateur) {
    if (confirm("êtes-vous sûr ?")) this.formateurService.delete(formateurItems);
  }

  ngOnInit(): void {
  }
}
