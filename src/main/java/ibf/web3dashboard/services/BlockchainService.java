package ibf.web3dashboard.services;

import java.util.Objects;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import ibf.web3dashboard.models.User;

import java.util.logging.Level;
import java.util.logging.Logger;

import static ibf.web3dashboard.Constants.*;

@Service
public class BlockchainService {

	private final Logger logger = Logger.getLogger(BlockchainService.class.getName());

	private final String key;

	public BlockchainService() {
		key = System.getenv(ENV_BLOCKCHAIN_API_KEY);

		if (Objects.isNull(key))
			logger.warning("%s key is not set".formatted(ENV_BLOCKCHAIN_API_KEY));
	}

	public User getUser(String walletAddress) {

		final String url = UriComponentsBuilder
				.fromUriString(ENV_BLOCKCHAIN_API_URL + walletAddress + "/nft")
				.queryParam("chain=eth")
				.queryParam("format=decimal")
				.queryParam("limit=5")
				// .queryParam("q", walletAddress.replaceAll(" ", "\\+"))
				.toUriString();

		logger.info("QUERY string >>> %s".formatted(url));

		final RequestEntity<Void> req = RequestEntity.get(url)
				.header("x-api-key", ENV_BLOCKCHAIN_API_KEY).build();
		final RestTemplate template = new RestTemplate();
		final ResponseEntity<String> resp = template.exchange(req, String.class);

		logger.info("\n\n\nRESP string >>> %s".formatted(resp.getBody()));
		return User.toUser(resp.getBody());
		/*
		 * logger.info("AFTER HEADER>>> %s".formatted(url));
		 * 
		 * 
		 * logger.log(Level.INFO, resp.getStatusCode().toString());
		 * logger.log(Level.INFO, resp.getHeaders().toString());
		 * 
		 * if (resp.getStatusCode() != HttpStatus.OK)
		 * throw new IllegalArgumentException(
		 * "Error: status code %s".formatted(resp.getStatusCode().toString())
		 * );
		 * 
		 * final String body = resp.getBody();
		 * 
		 * 
		 * logger.info("\nRESPONSE IS >>> %s".formatted(body));
		 */
	}

}
