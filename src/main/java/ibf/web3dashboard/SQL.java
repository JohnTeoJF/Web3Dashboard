package ibf.web3dashboard;

//Holds the mySQL query strings
public class SQL {
    
public static final String SQL_GET_ALL = 
"select * from userData";

public static final String SQL_GET_WALLET_BY_WALLET_ADDRESS =
"select count(*) wallet_count from walletAddress where walletAddress = ?";

}
