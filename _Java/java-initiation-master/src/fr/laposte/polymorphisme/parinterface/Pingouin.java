package fr.laposte.polymorphisme.parinterface;

public class Pingouin extends Oiseau implements IMouvement{

	public Pingouin(String nom) {
		super(nom); //appel du constructeur parent
	}

	@Override
	public void bouger() {
		System.out.println("Je suis le pinguoin "+this.nom+" et je marche");
	}

}
