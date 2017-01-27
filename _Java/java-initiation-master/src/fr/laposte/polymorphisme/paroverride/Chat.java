package fr.laposte.polymorphisme.paroverride;

public class Chat extends Animal {

	public Chat(String nom) {
		super(nom); //appel du constructeur parent
	}

	@Override
	public void parler() {
		super.parler();
		System.out.println("je suis le chat " + this.nom + ", et je dis MIAOU");
	}

}
