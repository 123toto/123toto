package fr.laposte.test.divers;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.TreeMap;

public class TestCollection {
	static final float PI = 3.1416f;

	private static void afficherListe(String nomListe, List<String> liste) {
		int i = 0;

		System.out.println("\nListe " + nomListe + " : " + liste.size() + " individus");
		for (String personne : liste) {
			System.out.format("élément %2d %s \n", ++i, personne);
		}
	}

	public static void testListe() {
		ArrayList<String> listePersonne = new ArrayList<>();
		ArrayList<String> listeHomme = new ArrayList<>();
		ArrayList<String> listeFemme = new ArrayList<>();

		// constitution liste de femmes
		listeFemme.add("Marie");
		listeFemme.add("Anne");
		afficherListe("Femme", listeFemme);

		// constitution liste d'hommes
		listeHomme.add("Jean");
		listeHomme.add("Paul");
		listeHomme.add("Pierre");
		afficherListe("Homme", listeHomme);

		// fusion des 2 listes
		listePersonne.addAll(listeHomme);
		listePersonne.addAll(listeFemme);

		// supression d'un �l�ment
		listePersonne.remove("Jean");

		// liste finale
		afficherListe("Tous", listePersonne);
	}

	public static void testTreeMap() {
		TreeMap<String, String> listePersonne = new TreeMap<String, String>();

		// creation liste index�e
		listePersonne.put("Adam", "Cuivr�");
		listePersonne.put("Eve", "Blond");
		listePersonne.put("Paul", "Brun");
		listePersonne.put("Patrick", "Roux");
		listePersonne.put("Jean", "Blond");

		// parcours de la lsite
		HashSet<String> clefs = new HashSet<>(listePersonne.keySet());
		for (String clef : clefs) {
			String valeur = listePersonne.get(clef); // recup de la valeur
			System.out.format("clef=%s,valeur=%s\n", clef, valeur);
		}
	}

	public static void main(String[] args) {

		 testListe();
		 testTreeMap();
	}
}
