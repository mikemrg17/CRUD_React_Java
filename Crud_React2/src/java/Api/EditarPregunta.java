
package Api;

import com.mysql.jdbc.StringUtils;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
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
        
        String payloadRequest = getBody(request);
        System.out.println(payloadRequest);
        //Partimos 1 vez
        String[] partida = payloadRequest.split(",");
        String part1 = partida[0];
        System.out.println(part1);
        //Partimos 2 veces
        String partida2[]= part1.split(":");
        String part2 = partida2[1];
        System.out.println(part2);
        //Obtenemos el id
        int longitud = part2.length();
        part2 = part2.substring(1, longitud-1);
        System.out.println("id:"+part2);
        int row;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection db = DriverManager.getConnection("jdbc:mysql://localhost/crudjson","root", "1234");
            PreparedStatement statement = db.prepareStatement("UPDATE tablajson SET columnajson=? WHERE id=?");
            statement.setString(1, payloadRequest);
            statement.setString(2,  part2);
            row = statement.executeUpdate();

            
        } catch (Exception ex) {
            System.out.println("No se pudo editar el registro");
            ex.printStackTrace();
        }
        
        
    }
    
    public static String getBody(HttpServletRequest request) throws IOException {

    String body = null;
    StringBuilder stringBuilder = new StringBuilder();
    BufferedReader bufferedReader = null;

    try {
        InputStream inputStream = request.getInputStream();
        if (inputStream != null) {
            bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
            char[] charBuffer = new char[128];
            int bytesRead = -1;
            while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
                stringBuilder.append(charBuffer, 0, bytesRead);
            }
        } else {
            stringBuilder.append("");
        }
    } catch (IOException ex) {
        throw ex;
    } finally {
        if (bufferedReader != null) {
            try {
                bufferedReader.close();
            } catch (IOException ex) {
                throw ex;
            }
        }
    }

    body = stringBuilder.toString();
    return body;
}

}
