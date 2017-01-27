package fr.laposte.polymorphisme.parinterface;

public class Chat extends Animal {

	public Chat(String nom) {
		super(nom); //appel du constructeur parent
	}
	
	@Override
	public void parler() {
		super.parler(); //appel de la methode du parent
		System.out.println("je suis le chat " + this.nom + ", et je dis MIAOU");
	}

}
