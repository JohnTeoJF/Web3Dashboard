import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Moralis from 'moralis';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlockchainService } from 'src/services/blockchain.services';
import * as internal from 'stream';
import { UserData } from '../models';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  form!: FormGroup
  userData: UserData[] = []

  constructor(
    private router: Router,private bcService: BlockchainService, private fb: FormBuilder) { }

  ngOnInit(): void {  }

  updateUser(t: Partial<UserData> = {}) {
    console.log('Add userData')

    this.form = this.fb.group({
			emailAddress: this.fb.control(t.emailAddress || '', [ Validators.required, Validators.minLength(3) ]),
			comments: this.fb.control(t.comments || '', [ Validators.required, Validators.minLength(3) ]),
		})

    const userInfo = this.form.value as UserData

    console.info(userInfo)

  }


}
