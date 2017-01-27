package fr.laposte.polymorphisme.parinterface;

public class Oie extends Oiseau implements IMouvement{

	public Oie(String nom) {
		super(nom); //appel du constructeur parent
	}

	@Override
	public void bouger() {
		System.out.println("Je suis l'oie "+this.nom+" et je vole");
	}
	
}
