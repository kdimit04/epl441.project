package resources;
import java.sql.Connection;
import java.sql.DriverManager;
 
public class AccessConnect {
 
    public static void main(String[] args) {
      
          try{
              Class.forName("net.ucanaccess.jdbc.UcanaccessDriver");//Loading Driver
              Connection connection= DriverManager.getConnection("jdbc:ucanaccess://C:\\Users\\doulg\\Desktop\\Database11.accdb");//Establishing Connection
              System.out.println("Connected Successfully");
 
          }catch(Exception e){
              System.out.println("Error in connection");
 
          }
    }
    
}

