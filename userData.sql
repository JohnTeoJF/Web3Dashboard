-- drop database if exists
drop database if exists userData;

create database userData;

use userData;

create table users (
    walletAddress varchar(42) not null,
    email varchar(64) not null,
    blockchainID char(6) not null,
    primary key(walletAddress)
);

create table NFT (
	smartContractAddress varchar(42) not null,
    walletAddress varchar(42) not null,
    blockchainID char(6) not null,
    token_id char(6) not null,
    name varchar(64) not null,
    symbol varchar(20) not null,
    
      primary key(smartContractAddress),
    constraint fk_smartContractAddress
        foreign key(walletAddress)
        references users(walletAddress)
);