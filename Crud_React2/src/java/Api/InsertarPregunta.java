package Api;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author axel_
 */
public class InsertarPregunta extends HttpServlet {
    private PrintWriter out;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        out = response.getWriter();
        response.setContentType("application/json");
        response.addHeader("Access-Control-Allow-Origin", "*");
            StringBuilder json = new StringBuilder();  
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            Connection db = DriverManager.getConnection("jdbc:mysql://localhost/crudjson","root", "1234");
            Statement s = db.createStatement();
            ResultSet rs=s.executeQuery("SELECT MAX(id) AS id from tablajson;");
            while(rs.next())          
            {
                String cadena=rs.getString("id");
                json.append(cadena);
            }
            System.out.println(json);
        }
        catch(Exception e)
        {
        e.printStackTrace();
        }
        out.write(json.toString());
        }
        
    }

    
    
    
