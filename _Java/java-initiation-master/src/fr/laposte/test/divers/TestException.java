package fr.laposte.test.divers;

import java.util.Scanner;

public class TestException {

	public static float diviserDeuxNombre() throws Exception {
		Scanner sc = null;
		String str1, str2;
		int nb1, nb2;
		float resultat = 0;
		try {
			// lecture des nombres
			sc = new Scanner(System.in);
			System.out.println("dividende :");
			str1 = sc.nextLine();
			System.out.println("diviseur :");
			str2 = sc.nextLine();
			
			// conversion en entier
			nb1 = Integer.parseInt(str1);
			nb2 = Integer.parseInt(str2);
			
			//divison
			resultat = nb1 / nb2;
			
		} catch (NumberFormatException e) { //exception d�clench�e quand la strinf ne contient pas de chiffre
			System.out.println("une des valeurs n'est pas num�rique !");
			throw new Exception("non numérique");
		} catch (ArithmeticException e) { //exception d�clench�e par une division par z�ro
			System.out.println("Division par zéro !");
		} finally { // tout le temps ex�cut�
			sc.close(); // fermeture de l'input stream

		}
		return resultat;

	}

	public static void main(String[] args) {
		float divison ;
		try {
			divison = diviserDeuxNombre();
			System.out.println("le résultat de la divison est : " + divison);
		} catch (Exception e) {
			//e.printStackTrace();
			System.out.println("erreur de calcul");
		}

	}

}
