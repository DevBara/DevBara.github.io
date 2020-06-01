package com.example.PreciousMetalsApp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "metalusers")
public class Users {



@Column(name = "id")
private long id;


@Column(name = "userName")
private String userName;

@Column(name = "email")
private String email;

@Column(name = "password")
private String password;

public Users() {
	super();
}

public Users(String userName, String email, String password) {
	this.userName= userName;
	this.email=email;
	this.password=password;
}

@Id
@GeneratedValue

public long getId() {
	return id;
}

public void setId(long id) {
	this.id=id;
}

@Column(name="username")
	public String getuserName() {
	return userName;
}

public void setuserName(String userName) {
	this.userName= userName;
}

@Column(name="email")
public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email=email;
}

@Column(name="password")
	public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password=password;
}

@Override
public String toString() {
	return "Users[id="+id+",userName="+ userName + ",email="+ email + ",password="+ password+"]";
}








}