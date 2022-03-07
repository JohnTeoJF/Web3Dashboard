package ibf.web3dashboard.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf.web3dashboard.models.User;
import ibf.web3dashboard.services.BlockchainService;

import java.util.logging.Level;
import java.util.logging.Logger;

import static ibf.web3dashboard.Constants.*;

//Handles GET and POST from client relating to Blockchain API

//GET user Info
@RestController
@RequestMapping(path = "/api/", produces = MediaType.APPLICATION_JSON_VALUE)
public class blockchainRestController {

	private final Logger logger = Logger.getLogger(blockchainRestController.class.getName());

	@Autowired
	private BlockchainService blockchainSvc;

	
	// Listens to GET requests and return any results , no specific path
	@GetMapping(path="{walletAddress}")
	private ResponseEntity<String> getUserByWallet(@PathVariable String walletAddress) {
		
		logger.info("\nInside getUserByWallet\n");	

		User user = blockchainSvc.getUser(walletAddress);
		
		logger.info("\nUSER IS \n" + user);	
		
		return null;

	}

}
