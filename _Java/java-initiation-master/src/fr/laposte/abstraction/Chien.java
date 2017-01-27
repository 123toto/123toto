package fr.laposte.abstraction;

public class Chien extends Animal {

	public Chien(String nom) {
		super(nom); //appel du constructeur parent
	}

	@Override
	public void parler() {
		System.out.println("je suis le chien " + this.nom + ", et je dis WOUF WOUF");
	}
	
}
