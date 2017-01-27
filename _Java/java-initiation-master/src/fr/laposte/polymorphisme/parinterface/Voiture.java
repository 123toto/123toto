package fr.laposte.polymorphisme.parinterface;

public class Voiture implements IMouvement{

	public Voiture() {
		super(); //appel du constructeur parent
	}

	@Override
	public void bouger() {
		System.out.println("Je suis une voiture et je roule");
	}
	
}
