package Api;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Preguntas extends HttpServlet {

    private PrintWriter out;


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        out = response.getWriter();
        response.setContentType("application/json");
        response.addHeader("Access-Control-Allow-Origin", "*");
            StringBuilder json = new StringBuilder();
            json.append("[");    
    try
    {
        int contador=0;
        Class.forName("com.mysql.jdbc.Driver");
        Connection db = DriverManager.getConnection("jdbc:mysql://localhost/crudjson","miguel", "1234");
        Statement s = db.createStatement();
        ResultSet rs=s.executeQuery("select * from tablajson;");
        while(rs.next())
        {
        if(contador!=0)
        json.append(","); 
        String cadena=rs.getString("columnajson");
        json.append(cadena);
        contador++;}
    }
    catch(Exception e)
    {
    e.printStackTrace();
    }
    json.append("]");
    out.write(json.toString());
    }

}
