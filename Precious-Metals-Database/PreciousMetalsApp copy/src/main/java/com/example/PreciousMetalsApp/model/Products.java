package com.example.PreciousMetalsApp.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="metals")

public class Products {
	
	private long id;
	private String name;
	private double price;
	private long quantity;
	
	public Products() {
		super();
		
	}
	
	
	public Products(String name, double price, long quantity) {
		this.name=name;
		this.price=price;
		this.quantity=quantity;
	}
	
	@Id
	@GeneratedValue
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id= id;
	}
	
	@Column(name = "name")
		public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name= name;
	}
	
	@Column(name="price")
		public double getPrice() {
		return price;
	}
	
	public void setPrice(double price) {
		this.price=price;
	}
	
	@Column(name="quantity")
		public long getQuantity() {
		return quantity;
	}
	
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	
	
	@Override
	public String toString() {
		return "Products[id="+id+",name="+ name + ",price="+ price + ",quantity="+ quantity+"]";
	}

}
