<center> <h1>Java - syntaxe </h1> </center>

# La grammaire
Le langage java est un langage proche du C.  
On dit souvent que c'est un C++ épuré des concepts subtils comme les pointeurs.  
Comme dans beaucoup de langages, il y a 
* des mots clefs
* des variables, des collections.  
* des instructions
* des instructions conditionnelles
* des itérations
* des fonctions
* des exceptions.

# La norme d'écriture 
* On écrit en camelCase
* une méthode est verbe à l'infinitif
* une propriété est un mot commun
* on utilise l'indentation pour la lisibilité des blocs
* on met des commentaires

# Les mots réservés, les opérateurs
[Voici une liste de mots réservés](http://jmdoudoux.developpez.com/cours/developpons/java/chap-syntaxe.php#syntaxe-2) 
[et une autre documentation](http://thierry-leriche-dessirier.developpez.com/tutoriels/java/mots-cles-java/)

# les commentaires
Les commentaires sont primordiaux pour documenter du code.
* `//` commente une fin de ligne
* `/* */` commente un paragraphe
* `/** */` commente une méthode et sert à générer le javadoc.  

# La méthode (fonction)
Comme pour la propriété, la fonction n'existe plus en objet.  
En Java, on n'utilise donc pas la mot `function`.  
Le principe de la méthode est le même que celui de la fonction, sauf qu'elle est attachée à un objet ou une classe.
```java
	public int compter(int nb1, int nb2, int nb3) {
		return nb1 + nb2 + nb3;
	}
```
Note : une méthode requiert notre attention `main`. C'est le point d'entrée d'un programme. 
Nous en reparlerons en abordant l'objet.  

# Les paramètres d'une méthode
Les paramètres passés lors d'un appel de méthode sont passés par valeur.  
C'est à dire que le paramètre est dupliqué dans une nouvelle zone mémoire.  
La valeur de ce paramètre peut être modifiée, mais la méthode appelante ne prendra jamais connaissance de cette nouvelle valeur.  

Par contre si ce paramètre est un objet, c'est le pointeur qui est dupliqué et non la valeur de l'objet. 
Donc la modification d'un objet sera visible par la méthode appelante. On peut assimiler cela par un passage par référence.  
Attention toutefois, l'objet doit être instancié avant l'appel (ceci n'est valable pour la valeur de retour).  

# La propriété (variable)
Il n'existe pas à proprement parlé de variable en java.  
Comme tout est objet, il faut parler de propriété.  
Une propriété est une variable attachée à un objet ou une classe.  

# Les types de données
## Les types primitifs
Les types primitifs sont les seuls représentations de données qui ne sont pas des objets.  
Donc il n'y a pas d'instanciation (new) à faire.  

### Les entiers
* `byte` : de -128 à 127, soit 1 octet
* `short` : -32 768 32 767.2, soit 2 octets
* `int` : de -2 147 483 648 à 2 147 483 647, soit 4 octets
* `long` : de -9 223 372 036 854 775 808 à 9 223 372 036 854 775 807, soit 8 octets.  

La RAM étant conséquente aujourd'hui byte et short sont peu utilisés.  
Note : Lors d'un calcul, si la capacité est dépassée, l'entier redémarre au début de la plage sans indiquer d'erreur.  

### Les décimaux
Appelé aussi  nombres flottants à cause du déplacement de la virgule. 
* `float` : de -1.40239846E-45 à 3.40282347E38 , soit 4 octets
* `double` : de 4.9406564584124654E-324 à 1.797693134862316E308, soit 8 octets

### le caractère
Le caractère est représenté par un seul caractère sur 2 octets.  
Représenté par le mot clef `char`.  
Note : une chaîne de caractères n'est pas un primitif.  

### le booléen
Il a 2 valeurs uniquement : `true` et `false`.  
Représenté par le mot clef `boolean`.  

### le type vide
`void` est utilisé pour informer qu'une méthode ne renvoie pas de résultat.  

### documentation
[doc détaillée](http://anisfrikha.developpez.com/tutoriel/java/types-primitifs/)

## La constante
La constante est une propriété qui ne change pas de valeur.  
Il n'y a pas de constante en Java.  
Pour contourner le problème on utilise `static final`.  
``` java
private static final float PI = 3.1416f;
```

## L'énumération
Une autre façon de déclarer des constantes les énumérations. Il s'agit du n-uplet contenant des identifiants.  
Les énumérations sont très pratiques pour ajouter une valeur au sémantique au code.  
Mot clef : `enum`.  
``` java
private static final enum Note{DO, RE, MI, FA, SOL, LA, SI};
```

## La chaîne de caractères
Une chaîne de caractères est une suite de caractères. Il faut utiliser un objet pour stocker la chaîne.  
Deux structures sont particulièrement bien adaptée : `String` et `StringBuffer`.

### String
`String` sert à stocker une chaîne de caractères non modifiable.  
La taille de la chaîne est déterminée lors de sa première affectation et donc la JVM alloue une place en mémoire.  
Si la valeur de la chaîne change, en fait la JVM affecte une nouvelle zone en mémoire. Ce qui est coûteux.  
La `String` est donc plus appropriée pour stocker une valeur qui ne change pas.  

### StringBuffer
Si le contenu de la chaîne évolue, il faut utiliser le `StringBuffer`.  
Il alloue dynamiquement la mémoire.

### StringTokenizer
Le `StringTokenizer` est utilisé pour stocker une phrase, c'est à dire une suite de mots.  
Le délimitateur peut être spécifié ou par défaut (espace, return, tab).  

### documentation
[doc détaillée](http://jca.developpez.com/tutoriel/java/string/#LI)

## Les tableaux
Un tableau est une structure de données contenant un groupe d'éléments, tous du même type.  
Un tableau est de longueur finie.
Pour définir une tableau, nous utilisons les crochets `[]`.  
Les tableaux peuvent être de une ou plusieurs dimensions. Au delà de 2, il est préférable d'utiliser une autre structure.   
Pour accéder à un élément du tableau, nous utilisons l'indice. Le premier indice commence à 0.   
Si nous tentons d'accéder en dehors de ses limites, la JVM lève l'exception `ArrayIndexOutOfBoundsException`.  
Pour cette raison de taille finie le tableau est souvent délaissé au profit d'autrse structures.  

```java
	public static void testTableau() {
		int tableauEntier[] = {0,1,2,3,4,5,6,7,8,9};
		String tableauChaine[] = {"Jean", "Bon", "Beurre", "sncf"};
		int tableauEntier2[] = new int[6];
		int premiersNombres[][] = { {0,2,4,6,8},{1,3,5,7,9} };
		
		for (int i = 0; i < tableauChaine.length; i++) {
			System.out.println(tableauChaine[i]);
		}
		
		for (int i = 0; i < premiersNombres.length; i++) {
			for (int j = 0; j < premiersNombres[i].length; j++) {
				System.out.println(premiersNombres[i] [j]);
			}
		}
	}
```
# Les instructions
Une instruction est une ligne de code qui est composé d'une suite de mots et se termine par un `;`.  
Elle permet une affection, un appel de méthode.

Deux jeux d' instructions intéressantes pour débuter la programmation :
### sortie sur la console
```java 
System.out.println("hello world"); //sortie sur la console
``` 
### lecture de l'entrée clavier
``` java 
Scanner sc = new Scanner(System.in);
System.out.println("Veuillez saisir un mot :");
String str = sc.nextLine();
System.out.println("Vous avez saisi : " + str);
``` 

# Les blocs de code
Les blocs de codes sont un regroupement d'instructions. On peut comparer cela à un paragraphe.  
Un bloc est délimité par des accolades `{ }`.  

# Les structures de contrôle
Nous faisons ici un rapide tour d'horizon des structures de contrôle.  

## Condition (if else)  
Pour faire des conditions complexe, utilisez `&&`, `||` et le `()`.  
```java
if (nombre < 0) {
  System.out.println("le nombre est négatif");
}
else {
  System.out.println("le nombre est positif")
}
```

## Condition multiple (switch)
```java
int note = 10; //On imagine que la note maximale est 20

switch (note)
{
  case 0:
    System.out.println("Ouch !");
    break;
  case 10:
    System.out.println("Vous avez juste la moyenne.");
    break;
  case 20:
    System.out.println("Parfait !");
    break;
  default:
    System.out.println("Il faut davantage travailler.");
}
```
### La condition ternaire
```java
int max = (x < y) ? y : x ; 
```
# Les boucles
## Tant que (while)
```java
	public static void boucle2() {
		int compteur = 10;
		while (compteur < 20) {
			System.out.print("valeur du compteur : " + compteur);
			compteur++;
			System.out.print("\n");
		} 
	}
```

## répéter jusqu'à (do while)
```java
	public static void boucle1() {
		int compteur = 10;
		do {
			System.out.print("valeur du compteur : " + compteur);
			compteur++;
			System.out.print("\n");
		} while (compteur < 20);
	}
```

## pour (for)
```java
	public static void boucle3() {
		int tableauChiffre[] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
		for (int i = 0; i < tableauChiffre.length; i++) {
			System.out.println(tableauChiffre[i]);
		}
	}
```

## parcours d'une collection (foreach)
```java
		List<String> liste;
		for (String personne : liste) {
			System.out.format("élément %2d %s \n", ++i, personne);
		}
```

## les débranchements
A utiliser avec parcimonie.  
* break : permet de quitter immédiatement une boucle ou un branchement.
* continue : s'utilise dans une boucle pour passer directement à l'itération suivante.
* return : sort de la méthode.

# Les exceptions
Une exception est une erreur qui se produit durant l'exécution du code.  
Une exception conduit le plus souvent à l'arrêt du programme.  
Heureusement il est possible de capturer une exception dès qu'elle se produit et de définir le comportement adéquate.  
On capture une exception par l'instruction `try catch`.  
On remonte une exception à la méthode appelante par l'instruction `throw`.  
```java
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
			
		} catch (NumberFormatException e) { //exception déclenchée quand la strinf ne contient pas de chiffre
			System.out.println("une des valeurs n'est pas numérique !");
			throw new Exception("non numérique");
		} catch (ArithmeticException e) { //exception déclenchée par une division par zéro
			System.out.println("Division par zéro !");
		} finally { // tout le temps exécuté
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
```

# Les thread
Un thread est une unité d'exécution qui fonctionne en autonomie en parallèle d'autres thread.  
Les thread permettent de faire du parallélisme. Une application Java Web est multi-thread.  
Un thread peut lancer un autre thread. Les thread peuvent communiquer entre eux via des structures synchronisées.  
Un thread peut attendre la fin d'exécution thread enfant.  
[Une doc simple](http://blog.paumard.org/cours/java-api/chap05-concurrent-premier-thread.html)  
[Une doc très complète](https://www.jmdoudoux.fr/java/dej/chap-threads.htm).  

# le null
Tout objet instancié (créé avec `new`) contient une adresse pointant sur une zone mémoire.  
Mais qu'en est-il d'un objet non instancié ? Il a pour valeur `null`.  
Un objet qui a pour valeur nulle n'a pas de vie, donc on ne peut pas lui appliquer une méthode.  
Dans ce cas nous aurons la célèbre erreur `NullPointerException `.  
Quelques solutions pour éviter l'erreur :
* tester si objet est `null` avant de l'utiliser (`monObj == null`)
* catcher l'exception par un `try catch`
* utiliser les annotations `@NotNull` et `@Nullable`.  

# Les collections
## Définition
Tous les programmes Java ont une chose en commun. Ils vont tous utiliser les collections.  
Ils sont fondamentaux car ils servent à stocker les données en mémoire.  
Il existe une multitude de collections. Voici les actions que nous pouvons effectuer :
* parcourir les éléments
* ajouter un(des) élément(s)
* supprimer un élément
* accéder à un élément 

Il existe 2 grandes familles de collections 
* java.util.Collection : constitue un ensemble d'objets,
* java.util.Map : stocke un ensemble d'objets en ajoutant la notion de couple clef/valeur.  

Ensuite vient la notion d'acccès concurrent ou synchronized.  
Une collection synchronized est utilisée en multi-thread (traitement en parallèle). 
Elle est donc plus lente en exécution donc à éviter (sauf pour multi-thread).  

## Pour débuter
Nous allons étudier ici les collections basiques appartenant à l'API Collections.  

### les listes
Il s'agit de tableaux dynamiques, c'est à dire un array sans limite de capacité.  
Nom de code : `ArrayList` et son équivalent synchronized `Vector`.  
``` java
public class TestCollection {

	private static void  afficherListe(String nomListe, List<String> liste) {
		int i = 0;
		
		System.out.println("\nListe " + nomListe + " : " + liste.size() + " individus");
		for (String personne : liste) {
			System.out.format("élément %2d %s \n", ++i, personne);
		}
	}
	
	public static void testListe () {
		ArrayList<String> listePersonne = new ArrayList<>();
		ArrayList<String> listeHomme = new ArrayList<>();
		ArrayList<String> listeFemme = new ArrayList<>();

		//constitution liste de femmes
		listeFemme.add("Marie");
		listeFemme.add("Anne");
		afficherListe("Femme",listeFemme);

		//constitution liste d'hommes
		listeHomme.add("Jean");
		listeHomme.add("Paul");
		listeHomme.add("Pierre");
		afficherListe("Homme",listeHomme);

		//fusion des 2 listes
		listePersonne.addAll(listeHomme);
		listePersonne.addAll(listeFemme);
		
		//supression d'un élément
		listePersonne.remove("Jean");
		
		//liste finale
		afficherListe("Tous",listePersonne);
	}
	
	public static void main(String[] args) {
		testListe();
	}
}
```
### Les Set
Il s'agit de listes qui ont une particularité supplémentaire : ils n'acceptent pas les doublons.  
* HashSet : utilise la table de hashage
* TreeSet : collection triée

### Les Map
C'est une collection qui gère stocke les données sous le format (clef,valeur).  
* HashMap : stocke clef et valeur
* LinkedHashMap : HashMap amélioré puisqu'il q'il conserve l'ordre d'insersion
* TreeMap : HashMap trié sur la clef
* EnumMap : la clef est une énumération
```java
public static void testTreeMap() {
		TreeMap<String, String> listePersonne = new TreeMap<String, String>();
		
		//creation liste indexée
		listePersonne.put("Adam", "Cuivré");
		listePersonne.put("Eve", "Blond");
		listePersonne.put("Paul", "Brun");
		listePersonne.put("Patrick", "Roux");
		listePersonne.put("Jean", "Blond");
		
		//parcours de la lsite
		HashSet<String> clefs = new HashSet<>(listePersonne.keySet());
		for (String clef : clefs) {
			String valeur = listePersonne.get(clef); //recup de la valeur
			System.out.format("clef=%s,valeur=%s\n", clef,valeur);
		}
	}
```

### Les Queue
S'agit d'une collection qui gère les files d'attente.  
Très utile en multi thread. Non étudié dans un premier temps.  
Quelques exemples :
* PriorityQueue : les éléments ne sont pas triés au sein de la collection mais que ceux-ci sont dépilés par ordre croissant. pour planifier des tâches, gérer des priorités
* ConcurrentLinkedQueue : pour la FILO
* ArrayBlockingQueue : pour la FIFO

## Avancé
Tout développeur avancé se pose la question du choix de la collection à utiliser dans un contexte donné.  
Il s'agit d'un défi difficile, car il y a beaucoup de choses à connaître :
* sur la structure des collections, 
* les détails d'implémentation, 
* les cas d'utilisation corrects, 
* la façon de choisir le type de collection approprié, 
* que peuvent-ils faire
* quand se tourner vers les bibliothèques tierces 
* quand utiliser les collections l'API Collections.  

[documentation cheat sheet](http://files.zeroturnaround.com/pdf/zt_java_collections_cheat_sheet.pdf)  
[documentation OC](https://openclassrooms.com/courses/java-et-les-collections)

# La portée (scope)
Toute variable, objet, méthode ont un identifiant unique.  
La portée de l'identifiant est limité par son périmètre.  
Je m'explique :  
Une variable définie dans une méthode a une portée limitée à la méthode.  
Il est impossible de faire appel à cet identifiant en dehors de la méthode.  
Et l'identifiant est par définition unique.  
Si l'on veut agrandir la portée de la variable, il faut déclarer la variable sur un niveau supérieur.  
Les principales portées sont :
* le bloc
* la méthode
* la classe

Dans une classe, pour faire référence à l'instance en cours (objet), on utilise le mot clef `this`.  
Si on veut faire appel à des propriétés ou méthodes du parent, on utilise le mot clef `super`.  
Pour faire appel à une méthode dans une classe distincte, on précède l'identifiant du nom de la classe.   
Par exemple `Math.random(); `

# Les annotations
Les annotations Java sont utilisées pour fournir des méta-données pour votre code Java.  
Étant des méta-données, les annotations Java n'influent pas directement sur l'exécution de votre code.  
Elles sont une alternative aux fichiers de configuration XML (notion qui sera abordée avec Spring).  
On repère une annotation par le symbole `@`.  
Une annotation s'applique à une classe, propriété ou méthode.  
Une annotation est un objet (tout est objet en java).  Elle se déclare comme suit :
```java
public @interface Contrainte {
	int minLength;
	int maxLength;
}
```
```java
@Contrainte(minLength=3, maxlength=5)
public void setName(){
//...
}
```
Quelques annotations standards :  
@Overrides  
@Deprecated  
@Documented  
@Inhereted  
@Retention  
@Target  
@SuppressWarning  

Dans un premier temps, utiliser peu les annotations, car cela ajoute un niveau de complexité 
qui n'est pas nécessaire pour l'apprentissage du langage.  

Pour plus d'infos :  
[OC](https://openclassrooms.com/courses/java-et-les-annotations)  
[condensé](http://adiguba.developpez.com/tutoriels/java/tiger/annotations/)  
[doc complète](https://www.jmdoudoux.fr/java/dej/chap-annotations.htm)   

# La généricité
Vous avez sûrement aperçu du code contenant `< >` lors de la déclaration d'un objet.  
Ceci est surtout présent lorsqu'on utilise une collection.  
Prenons l'exemple d'une ArrayList qu'on a typé en String.  
```java
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
```
Et voilà le code si on n'utilise pas la généricité.  
```java
	public static void testerNonGenerique() {
		ArrayList liste = new ArrayList();
		StringBuffer phrase = new StringBuffer();
		liste.add("Il");
		liste.add("pleut");
		liste.add("en");
		liste.add("Bretagne");
		for (Object elem : liste) {
			String mot = (String)elem + " "; //cast
			phrase.append(mot);
		}
		System.out.println(phrase);
	}
```
Dès que l'on utilise un élément de la liste, il faut le typer car c'est un objet générique. On parle de caster.  
Avec la généricité, on indique le type des éléments de la liste.
Ceci permet d'avoir une collection homogène et évite un cast dès qu'on utilise un élément.

Il faut savoir qu'on peut créer ses propres classes en indiquant ses paramètres génériques. 
Je vous incite à lire la 
[documentation d'OC](https://openclassrooms.com/courses/apprenez-a-programmer-en-java/la-genericite-en-java).   

Dans un premier temps, je ne vous conseille pas de créer vos propres classes génériques, 
mais je vous incite fortement à utiliser la généricité déjà implimentée dans les librairies.  

# Le javadoc
Le javadoc sert à construire une documentation technique de son code.  
Il est basé sur les annotations.  
Pour être efficace les commentaires doivent être écrit au fur et à mesure.  

[présentation](https://openclassrooms.com/courses/presentation-de-la-javadoc)  

# Les expressions lambda
Les expressions lambda introduisent la programmation fonctionnelle en java.  
Ceci permet de réduire la quantité de code. Elle est souvent utilisée dans l'écriture des événements.  
Comment la repérer ? avec la flèche ->.  
Voici la syntaxe : `(paramètre) -> {instructions}`   
```java
helloButton.setOnAction(actionEvent -> System.out.println("Bonjour le monde !"));
```
Attention, cette notation a été introduite en java 8.  
Voici un très bon [tuto](https://www.jmdoudoux.fr/java/dej/chap-lambdas.htm) explicatif.  

# Documentation
[officiel java 8](http://docs.oracle.com/javase/8/)  
[norme de nommage](https://www.jmdoudoux.fr/java/dej/chap-normes-dev.htm)  
[Google Java Style Guide](https://google.github.io/styleguide/javaguide.html#s5.1-identifier-names)

# Quelques nouveautés de java 8
[expression lambda](http://soat.developpez.com/tutoriels/java/projet-lambda-java8/)  
[datetime](http://soat.developpez.com/tutoriels/java/time-date-java8/)  
[nouvelles annotations](http://soat.developpez.com/tutoriels/java/type-annotations-nashorn-java8/)  
