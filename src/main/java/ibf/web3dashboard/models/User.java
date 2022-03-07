package ibf.web3dashboard.models;

import java.sql.ResultSet;
import java.sql.SQLException;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

//Model for user object
public class User {

    private String walletAddress;
    private String email;
    private String blockchainId;

	public String getWalletAddress() { return walletAddress; }
	public void setWalletAddress(String walletAddress) { this.walletAddress = walletAddress; }


	public String getEmailAddress() { return email; }
	public void setEmailAddress(String email) { this.email = email; }

	public String getBlockchainId() { return blockchainId; }
	public void setBlockchainId(String blockchainId) { this.blockchainId = blockchainId; }



    public static User populate(ResultSet rs) throws SQLException {
        final User user = new User();
        user.setWalletAddress(rs.getString("walletAddress"));
        user.setEmailAddress(rs.getString("email"));
        user.setBlockchainId(rs.getString("blockchainID"));
        return user;
    }

	
    public JsonObject toJsonSQL() {
        return Json.createObjectBuilder()
		.add("walletAddress", walletAddress)
		.add("email", email)
		.add("blockchainID", blockchainId)
            .build();
    }

	
    // FOR EXTERNAL QUERIES to Morallis ' Mongo DB'

	public static User toUser(String s) {	
		try (InputStream is = new ByteArrayInputStream(s.getBytes())) {
		JsonReader reader = Json.createReader(is);
		return toUser(reader.readObject());
	} catch (Exception ex) {
		ex.printStackTrace();
		return null;
	}
}

	public static User toUser(JsonObject o) {
		User u = new User();
		u.setWalletAddress(o.getString("ethAddress"));
		return (u);
	}
    
	public JsonObject toJsonBlockChain() {
		return Json.createObjectBuilder()
			.add("ethAddress", walletAddress)
			.build();
	}

}
