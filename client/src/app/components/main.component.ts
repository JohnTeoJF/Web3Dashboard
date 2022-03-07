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

  userData!: UserData;

  form!: FormGroup;

  count: number | undefined

  tx:
    | {
      hash: string;
      nonce: string;
      transaction_index: string;
      from_address: string;
      to_address: string;
      value: string;
      gas: string;
      gas_price: string;
      input: string;
      receipt_cumulative_gas_used: string;
      receipt_gas_used: string;
      receipt_contract_address: string;
      receipt_root: string;
      receipt_status: string;
      block_timestamp: string;
      block_number: string;
      block_hash: string;
    }[]
    | undefined;
  nft:
    | {
      token_address: string;
      token_id: string;
      contract_type: string;
      owner_of: string;
      block_number: string;
      block_number_minted: string;
      token_uri?: string | undefined;
      metadata?: string | undefined;
      synced_at?: string | undefined;
      amount?: string | undefined;
      name: string;
      symbol: string;
    }[]
    | undefined;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private bcService: BlockchainService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {}



}
