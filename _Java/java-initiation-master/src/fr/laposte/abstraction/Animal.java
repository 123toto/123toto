package fr.laposte.abstraction;

public abstract class Animal {
	
	//propriétés de l'objet
	protected String nom; 
	
	//constructeur
	public Animal(String nom) {
		super(); //appel du constructeur parent
		this.nom = nom;
	}
	
	//une methode de l'objet
	protected String formulerMonNom() {
		return "Je m'appelle " + this.nom; //appel de la propriété nom
	}

	//une methode abstraite
	public abstract void parler();
}
