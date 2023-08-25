package com.example.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="ebooks")

public class Ebook {
	@Id
	@Column(name="book_name")
	private String bookId;
	
	@Email
	private String authorId;
	
	private String authorName;
	
	private String description;
	
	private String genre;
	
	@Column(columnDefinition = "TEXT")
	private String content;
	
	
}


