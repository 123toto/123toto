package fr.laposte.polymorphisme.paroverride;

public class Animal {
	protected String nom;
	
	public Animal(String nom) {
		super(); //appel du constructeur parent Object
		this.nom = nom;
	}

	public void parler() {
		System.out.println("Je suis un animal");
	}

}