import {Component, OnInit} from '@angular/core';
import {FormateurService} from '../formateur.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-formateur-edit-form',
  templateUrl: './admin-formateur-edit-form.component.html',
  styleUrls: ['./admin-formateur-edit-form.component.css']
})

export class AdminFormateurEditFormComponent implements OnInit {

  id;
  private sub: any;
  formateur: any;

  constructor(private route: ActivatedRoute, private router: Router, private formateurItemService: FormateurService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.formateur = this.formateurItemService.getFormateur(this.id);
  }

  editSession(formateurItem) {
    
    this.router.navigate(['admin/formateur/list']);
  }

}
