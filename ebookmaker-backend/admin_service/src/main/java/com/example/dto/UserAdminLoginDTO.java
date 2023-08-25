package com.example.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserAdminLoginDTO {
	@Email(message = "Invalid email format")
	private String email;

	@Size(max = 10, min = 4, message = "username must be min of 4 character")
	private String password;

}
