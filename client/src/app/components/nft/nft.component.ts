import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/services/loginService.service';
import Moralis from 'moralis';
import { BlockchainService } from 'src/services/blockchain.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NFTComponent implements OnInit {
  nft: { token_address: string;
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
      symbol: string; }[] | undefined;

  constructor(private loginSvc:LoginService,
    private router: Router,
    private bcService: BlockchainService,
    private fb: FormBuilder ) { }

  walletAddress!: string;

  form!: FormGroup;

  ngOnInit(): void {
    this.walletAddress = this.loginSvc.walletAddress

   this.form = this.fb.group({
    walletAddress: this.fb.control(
      '0x35097a0b07ea886a962f094e05788c40822c2ff9',
      [
        Validators.required,
        Validators.minLength(42),
        Validators.maxLength(42),
      ]
    ),
  });

  }

  async getNFT() {

    console.log('User input was \nWallet is ', this.form.value.walletAddress);
    await Moralis.Web3API.account
    .getNFTs({
        chain: 'eth',
        address: this.form.value.walletAddress,
      })
      .then((t) => {
        this.nft = t.result
      })
      .catch((error) => {
        const errorMsg = error.error;
        console.warn('Error ', errorMsg)
      });
    console.log('FINAL RESULT ', this.nft)

  }





}
