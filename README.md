Web3Dashboard

This app enables users to view their blockchain wallet and currently displays the NFT held in any wallet located on the Ethereum Network.
There is also a search function that allows the user to display any other NFT in a public wallet address.


This project uses the following for its development

Front End
> Angular
> Angular Material

Back End
> Springboot
> Morallis SDK (API to query the blockchain)

Database
> Digital Ocean (mySQL)
> Morallis  Server (MongoDB)

mySQL database ('userData') consist of 2 tables, 'users' and 'NFT'
t

Authentication
>Metamask (via a private key for connecting wallet to Metamask)
Thereafter 0auth signature via message prompt to approve or reject any form of block chain transactions

Deployment
> Heroku (via embedding the built Angular app into the static folder)
