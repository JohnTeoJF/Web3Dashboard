package ibf.web3dashboard.repositories;

import java.util.LinkedList;
import java.util.List;

import java.sql.ResultSet;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import ibf.web3dashboard.models.User;

import static ibf.web3dashboard.SQL.*;

import java.util.logging.Level;
import java.util.logging.Logger;

@Repository
public class mySQLRepo {
    private final Logger logger = Logger.getLogger(mySQLRepo.class.getName());

    @Autowired
    private JdbcTemplate template;

    public List<User> getAllBooks() {

        final List<User> users = new LinkedList<>();

        // return all Users
        final SqlRowSet rs = template.queryForRowSet(SQL_GET_ALL);
        // loop thru row set 
        while (rs.next()) {
            // Process a row
            final User user = User.populate(rs);
            user.add(user);
        }
        return users;
    }

}
