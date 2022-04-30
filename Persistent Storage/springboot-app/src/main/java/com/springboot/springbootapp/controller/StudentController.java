package com.springboot.springbootapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.springbootapp.model.Student;
import com.springboot.springbootapp.repository.StudentRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/")
public class StudentController {
	
	@Autowired
	private StudentRepository studentRepository;
	
	//get all student Surveys
	@GetMapping("/studentSurveys")
	public List<Student> getllStudents(){
		return studentRepository.findAll();
	}
	
	//create a student survey entry
	@PostMapping("/studentSurveys")
	public Student createSurveyEntry(@RequestBody Student student) {
		return studentRepository.save(student);
	}
}
