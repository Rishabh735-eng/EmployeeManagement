package com.rishabh.employeemanagement.model;

import jakarta.persistence.*;
import lombok.*;

@Entity //This class should be stored in the database
@Data
@NoArgsConstructor //Creates an empty constructor automatically.
@AllArgsConstructor //Creates a constructor with all fields
@Table(name = "employees") //Specifies the database table name.
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String department;
    private Double salary;
}