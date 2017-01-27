package fr.laposte.polymorphisme.paroverload;

public class Appel {
	public static void main(String[] args) {
        Oiseau oiseau = new Oiseau();
        oiseau.voler("vite");
        oiseau.voler();
        oiseau.voler(3);
    }
}
