import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/services/blockchain.services';
import { LoginService } from 'src/services/loginService.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

  loginCardMsg = this.loginSvc.loginCardMsg
  isLoggedIn = this.loginSvc.isLoggedIn
  enableButton = this.loginSvc.enableButton
  walletAddress!: string;

  constructor(private loginSvc: LoginService,
    private bcService: BlockchainService,) { }

  ngOnInit(): void {


    console.log('wallet after init is ', this.walletAddress);
    this.loginSvc.checkStatus()
    this.loginCardMsg = this.loginSvc.loginCardMsg
    this.isLoggedIn = this.loginSvc.isLoggedIn
    this.enableButton = this.loginSvc.enableButton
  }

  login() {
    this.loginSvc.login()
    this.isLoggedIn = true;
    this.loginCardMsg = 'You are already logged in';
    this.isLoggedIn = true;
    this.enableButton = true;
  }


  logout() {
    this.loginSvc.logout()
    this.enableButton = false;
    this.loginCardMsg = 'Logout success';
    this.isLoggedIn = false;

  }


  checkStatus() {

    this.walletAddress = this.loginSvc.walletAddress
    console.log('xxxxxxxxxxxxxxxxxxx');
    console.log('Preparing to get NFT data via springboot to Morallis API');
    console.log('wallet address from user is ', this.walletAddress);
    this.bcService.getNFT(this.walletAddress);

    console.log(this.bcService.getNFT(this.walletAddress));
  }

  saveData() {

    this.walletAddress = this.loginSvc.walletAddress
    console.log('xxxxxxxxxxxxxxxxxxx');
    console.log('Preparing to upload to Digital Oean');
    console.log('wallet address from user is ', this.walletAddress);

  }
}
