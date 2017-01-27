package fr.laposte.test.divers;

import java.util.ArrayList;

public class genericite {
	
	public static void testerGenerique() {
		ArrayList<String> listeGenerique = new ArrayList<>();
		StringBuffer phrase = new StringBuffer();
		listeGenerique.add("Il");
		listeGenerique.add("neige");
		listeGenerique.add("dans");
		listeGenerique.add("les");
		listeGenerique.add("Alpes");
		for (String elem : listeGenerique) {
			phrase.append(elem);
			phrase.append(" ");
		}
		System.out.println(phrase);
	}

	public static void testerNonGenerique() {
		ArrayList liste = new ArrayList();
		StringBuffer phrase = new StringBuffer();
		liste.add("Il");
		liste.add("pleut");
		liste.add("en");
		liste.add("Bretagne");
		for (Object elem : liste) {
			String mot = (String)elem + " "; ///cast
			phrase.append(mot);
		}
		System.out.println(phrase);
	}

	public static void main(String[] args) {
		testerNonGenerique();
		testerGenerique();
	}

}
