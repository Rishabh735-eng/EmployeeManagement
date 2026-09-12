package com.rishabh.employeemanagement.controller;

import com.rishabh.employeemanagement.dto.AuthRequest;
import com.rishabh.employeemanagement.security.JwtUtil;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public String login(@RequestBody AuthRequest request) {

        // demo username/password
        if ("admin".equals(request.getUsername())
                && "admin123".equals(request.getPassword())) {

            return jwtUtil.generateToken(request.getUsername());
        }

        throw new RuntimeException("Invalid credentials");
    }
}