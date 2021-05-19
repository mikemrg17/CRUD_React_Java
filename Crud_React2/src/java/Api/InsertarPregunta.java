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

/**
 *
 * @author axel_
 */
public class InsertarPregunta extends HttpServlet {

    private PrintWriter out;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { 
        
        String nombre =request.getParameter("nombre");
        String pregunta =request.getParameter("pregunta");
        String respuesta =request.getParameter("respuesta");
        String drag1 =request.getParameter("drag1");
        String drag2 =request.getParameter("drag2");
        String drag3 =request.getParameter("drag3");
        String drag4 =request.getParameter("drag4");
        String tar1 =request.getParameter("tar1");
        String tar2 =request.getParameter("tar2");
        String tar3 =request.getParameter("tar3");
        String tar4 =request.getParameter("tar4");
        
        out = response.getWriter();
        response.setContentType("application/json");
        response.addHeader("Access-Control-Allow-Origin", "*");
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection db = DriverManager.getConnection("jdbc:mysql://localhost/crudjson","root", "1234");
            Statement s = db.createStatement();
            //ResultSet rs=s.executeQuery("INSERT INTO tablajson(columnjson) VALUES()");
        }
        catch (Exception e) {
            System.out.println("No se pudo insertar la pregunta");
            e.printStackTrace();
        }
    }
    
}
