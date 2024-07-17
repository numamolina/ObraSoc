package com.obrasocial;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Properties;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        try {
            // Load the properties file
            Properties props = new Properties();
            props.load(getServletContext().getResourceAsStream("/WEB-INF/db.properties"));

            // Establish the connection
            Class.forName(props.getProperty("jdbc.driverClassName"));
            Connection conn = DriverManager.getConnection(props.getProperty("jdbc.url"), props.getProperty("jdbc.username"), props.getProperty("jdbc.password"));

            // Query to check the user's credentials
            String sql = "SELECT * FROM usuarios WHERE email = ? AND password = ?";
            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setString(1, email);
            statement.setString(2, password);

            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                // User found, redirect to success page
                response.sendRedirect("success.html");
            } else {
                // User not found, redirect back to login with error message
                response.sendRedirect("inicioSesion.html?error=true");
            }

            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("inicioSesion.html?error=true");
        }
    }
}
