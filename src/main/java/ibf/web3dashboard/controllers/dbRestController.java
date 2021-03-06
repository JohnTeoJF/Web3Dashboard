package ibf.web3dashboard.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf.web3dashboard.repositories.mySQLRepo;

import java.util.logging.Level;
import java.util.logging.Logger;

//Handles GET and POST from client relating to Database

public class dbRestController {

	private final Logger logger = Logger.getLogger(blockchainRestController.class.getName());

	@Autowired
	private mySQLRepo mSqlRepo;

	
	// Listens to GET requests and return any results , no specific path
	@GetMapping(path="{walletAddress}")
	private ResponseEntity<String> getUserByWallet(@PathVariable String walletAddress) {
		
		logger.info("\nInside getUserByWallet\n");	

		User user = blockchainSvc.getUser(walletAddress);
		
		logger.info("\nUSER IS \n" + user);	
		
		return null;

	}

}
