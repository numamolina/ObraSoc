package org.example;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Properties;

@WebServlet("/contacto")
public class ContactoServlet extends HttpServlet {
    private String dbUrl;
    private String dbUsername;
    private String dbPassword;

    @Override
    public void init() throws ServletException {
        Properties properties = new Properties();
        try {
            properties.load(getServletContext().getResourceAsStream("/WEB-INF/db.properties"));
            dbUrl = properties.getProperty("db.url");
            dbUsername = properties.getProperty("db.username");
            dbPassword = properties.getProperty("db.password");
        } catch (IOException e) {
            throw new ServletException("Failed to load database properties", e);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String nombre = request.getParameter("nombre");
        String correo = request.getParameter("correo");
        String mensaje = request.getParameter("mensaje");

        try (Connection connection = DriverManager.getConnection(dbUrl, dbUsername, dbPassword);
             PreparedStatement statement = connection.prepareStatement("INSERT INTO mensajes (nombre, correo, mensaje) VALUES (?, ?, ?)")) {
            statement.setString(1, nombre);
            statement.setString(2, correo);
            statement.setString(3, mensaje);
            statement.executeUpdate();
        } catch (SQLException e) {
            throw new ServletException("Failed to save message", e);
        }

        response.sendRedirect("gracias.html");
    }
}
