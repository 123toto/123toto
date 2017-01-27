package fr.laposte.test.divers;

import java.util.Scanner;

public class Divers {
	static final float PI = 3.1416f;

	public static void testTableau() {
		int tableauEntier[] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
		String tableauChaine[] = { "Jean", "Bon", "Beurre", "sncf" };
		int tableauEntier2[] = new int[6];
		int premiersNombres[][] = { { 0, 2, 4, 6, 8 }, { 1, 3, 5, 7, 9 } };

		for (int i = 0; i < tableauChaine.length; i++) {
			System.out.println(tableauChaine[i]);
		}

		for (int i = 0; i < premiersNombres.length; i++) {
			for (int j = 0; j < premiersNombres[i].length; j++) {
				System.out.println(premiersNombres[i][j]);
			}
		}
	}

	public int compter(int nb1, int nb2, int nb3) {
		return nb1 + nb2 + nb3;
	}

	public static void boucle1() {
		int compteur = 10;
		do {
			System.out.print("valeur du compteur : " + compteur);
			compteur++;
			System.out.print("\n");
		} while (compteur < 20);
	}

	public static void boucle2() {
		int compteur = 10;
		while (compteur < 20) {
			System.out.print("valeur du compteur : " + compteur);
			compteur++;
			System.out.print("\n");
		}
	}

	public static void boucle3() {
		int tableauChiffre[] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
		for (int i = 0; i < tableauChiffre.length; i++) {
			System.out.println(tableauChiffre[i]);
		}
	}

	public static String lireClavier() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Veuillez saisir un mot :");
		String str = sc.nextLine();
		sc.close();
		return str;
	}

	public static void main(String[] args) {

//		testTableau();
		boucle3();

//		System.out.println("Vous avez saisi : " + lireClavier());
	}
}
