package fr.laposte.heritage;

public class Animal {
	private String race;
	protected String nom;
	
	public Animal(String race, String nom) {
		this.race = race;
		this.nom = nom;
	}
	
	protected String sAnnoncer() {
		return("je suis le " + this.race + " " + this.nom);
	}

}