
package Api;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author miguel
 */

public class EditarPregunta extends HttpServlet {
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        BufferedReader reader = request.getReader();
        reader.read();

        
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection db = DriverManager.getConnection("jdbc:mysql://localhost/crudjson","miguel", "1234");
            Statement s = db.createStatement();
            
        } catch (Exception ex) {
            System.out.println("No se pudo editar el registro");
            ex.printStackTrace();
        }         
        
        
    }

}
