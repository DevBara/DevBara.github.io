package com.example.PreciousMetalsApp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="reviews")

public class Reviews {
	
	private long id;
//	private String userName;
	private String comments;
	private double rating;
//	private String url;
	
	public Reviews() {
		super();
	}
	
	
	
	
	public Reviews ( String comments, double rating) {
//		this.userName=userName;
		this.comments=comments;
		this.rating=rating;
//		this.url= url;
	}
	
	@Id
	@GeneratedValue
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id=id;
	}
	
//	@Column(name="userName")
//		public String getUserName() {
//		return userName;
//	}
//	
//	public void setUserName(String userName) {
//		this.userName=userName;
//	}
	
	@Column(name="comments")
		public String getComments() {
		return comments;
	}
	
	public void setComments(String comments) {
		this.comments=comments;
	}
	
	@Column(name="rating")
		public double getRating() {
		return rating;
	}
	
	public void setRating(double rating) {
		this.rating=rating;
	}
	
//	public String getUrl() {
//		return url;
//	}
//
//
//	public void setUrl(String url) {
//		this.url=url;
//	}
	
	
	
	@Override
	public String toString() {
		return "Reviews[id="+id+",comments="+ comments + ",rating="+ rating+"]";
	}

}
