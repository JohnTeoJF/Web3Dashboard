import { Injectable } from '@angular/core';
import Moralis from 'moralis';
import { appId, serverUrl } from 'src/app/globalVariable';

@Injectable()
export class LoginService {
  enableButton = false;

  sdkInitialised = false;
  loginCardMsg!: string;

  isLoggedIn = false;
  createdAt!: Date;
  updatedAt!: Date;
  walletAddress!: string;



  startMoralis() {
    //Moralis SDK :Required for connecting via web3
    console.log('SERVER URL ' + serverUrl);
    console.log('APP ID ' + appId);
    Moralis.start({ serverUrl, appId });
    this.sdkInitialised = true;
  }

  checkStatus() {

    console.log('SDK Status',this.sdkInitialised );

    if(!this.sdkInitialised){
    console.log('Initialising SDK connection');

      //SDK getting initialised
      this.startMoralis()
    }else{
      console.log('SDK connection is already active');
     }
      this.walletAddress = Moralis.User.current()?.attributes['ethAddress'];
    //If user logged in
    if (this.walletAddress) {
      this.isLoggedIn = true;
      this.enableButton = true;

      console.log('User logged in \nWallet is ', this.walletAddress);
    }
    //If user is logged out
    else
      console.log('User should be logged out \nWallet is', this.walletAddress);

  }

  //login
  login() {
    this.enableButton = true;

    this.loginCardMsg = 'Connecting';

    console.log('AppComp : User is logging in...');
    const user = Moralis.User.current();

    if (!user) {
      this.loginCardMsg = 'Connecting.. Please sign to approve login';
      Moralis.authenticate()
        .then((u) => {
          this.createdAt = u.createdAt;
          this.updatedAt = u.updatedAt;
          this.walletAddress = u.get('ethAddress');

          console.log('xxxxxxxxxxxxxxxxxxx');
          console.log('USER DATA IS ', u);
          console.log('Created : ', this.createdAt);
          console.log('Updated :', this.updatedAt);
          console.log('WALLET ADDRESS IS :', this.walletAddress);
          console.log('xxxxxxxxxxxxxxxxxxx');

          this.isLoggedIn = true;
        })
        .catch((e) => {
          if ((e.code = 4001)) {
            this.loginCardMsg = e.message;
            this.enableButton = false;
          }
          const errorMsg = e.error;
          console.warn('Error', errorMsg);
        });
    } else {
      this.loginCardMsg = 'You are already logged in';
      this.isLoggedIn = true;
      console.log('logged in user:', user);
    }
  }

  //Logout
  logout() {
    this.enableButton = false;
    console.log('AppComp : User is logging out...');
    const currentUser = Moralis.User.current(); // this will now be null

    console.log('xxxxxxxxxxxxxxxxxxx');
    console.log('Before logout : Current user is ', currentUser);
    Moralis.User.logOut()
      .then(() => {
        console.log('xxxxxxxxxxxxxxxxxxx');
        console.log('After logout', Moralis.User.current());
        console.log('xxxxxxxxxxxxxxxxxxx');

        this.loginCardMsg = 'Logout success';
        this.isLoggedIn = false;
      })
      .catch((error) => {
        const errorMsg = error.error;
        console.warn('Error ', errorMsg);
        this.enableButton = true;
      });
  }
}
