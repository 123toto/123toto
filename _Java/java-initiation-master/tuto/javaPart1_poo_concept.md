<center> <h1>Java - Concept de la Programmation Orienté Objet</h1> </center>

# La programmation orienté objet
La programmation orienté objet (POO) est une autre manière de programmer.  
C’est un paradigme de programmation.  
Jusqu'à présent nous avons étudié la programmation procédurale, avec les notions suivantes :
* les variables
* les instructions et les blocs d'instructions
* les structures conditionnelles : if, while, for.
* les fonctions.  

Avec la programmation objet, nous accédons à un niveau supérieur de raisonnement, plus abstrait que la programmation procédurale.  
Lorsque que l'on code en objet, on ne pense pas machine, on pense tout simplement objet.  
**Pour coder objet, il faut penser objet.**  

Dans cette première partie, nous allons définir cette notion d'objet.  

# Définition 
Comment définir la Programmation orientée objet ?
* un objet est une brique logicielle,
* un objet représente une idée, un concept, une entité,
* pour représenter un objet, on utilise un modèle,
* un objet possède une structure :
    * ce sont ses propriétés, ou attributs,
    * les propriétés décrivent ses caractéristiques, ce qui le compose, 
    * les propriétés sont des variables propres à un objet,
    * les propriétés ont une valeur (comme une variable),
    * cette valeur peut être :
        * nulle, 
        * un booléen
        * un numérique
        * une chaîne de caractères
        * un objet
    * les valeurs sont propres à un objet
* un objet a un comportement :
    * ce sont ses méthodes,
    * les méthodes décrivent une action, un état, donc un verbe,
    * les méthodes ont pour équivalence les fonctions dans la programmation procédurale,
    * le comportement est le même pour tous les objets regroupés dans le même modèle,
* On utilise les objets :
    * dès qu'on a un besoin,
    * sans limite de nombre (si ce n'est la capacité de la mémoire),
    * à partir d'un modèle,
    * pour une durée limitée,
* les objets interagissent entre eux,
* un objet peut hériter des caractéristiques d'un parent,
* un objet a une vie :
    * il naît,
    * il meurt,
* pour concevoir des objets, on utilise un langage de modélisation : UML, et tout particulièrement le diagramme des classes,
* Il existe 2 façons de coder en objet :
    * Description par prototypage ,
    * Description par classe.

# Le prototypage
Dans la programmation objet par prototypage, on commence par créer un objet.  
On décrit sa structure et de son comportement. C'est le prototype.  
Pour créer des objets similaires, on utilise la technique du clonage.  
C'est le principe de la POO en javascript jusqu’à ES5.  
Un objet peut muter, c'est à dire évoluer par rapport à son prototype.  

Les avantages de ce paradigme sont :
* liberté et rapidité d'écriture du code
* facilité d'évolution des objets
* rapide si peu d'objets  

Les inconvénients :
* pas de cadre
* difficile de savoir ce que fait un objet s'il a muté
* pas très adapté si beaucoup d'objets ont les mêmes caractéristiques

# La classe
Une classe définit un ensemble d'entités, d'objets.  
C'est un modèle, une description.  
Elle définit la structure et le comportement.  
La classe est statique, elle ne peut pas muter, donc changer de comportement.  
Pour muter, il faudra créer une nouvelle classe héritant de la première.   
Une classe contient des objets qu'on appelle des instances. Elle contient de 0 à n objets.  
La création d’un objet se fait à partir d'une classe.

Les avantages de ce paradigme sont :
* langage structuré
* la facilité de lecture du code
* convient très bien s'il y a de nombreux objets  

Les inconvénients :
* perte de liberté
* lourdeur d'écriture
* l'évolution d'un objet passe forcément par la création d'une nouvelle classe (pas de mutation)
* très verbeux

# Les trois fondamentaux de la programmation objet
## L'héritage
Une classe est décrite par des propriétés et des méthodes. Chaque classe a ses spécificités.  
Le but de l'héritage est de regrouper les propriétés et les méthodes communes à plusieurs classes dans une nouvelle classe (la classe parente) 
puis d'hériter de cette classe.  
On parle aussi de généralisation.   

## L'encapsulation
L'idée d'encapsulation est apparue dès de début de la POO. 
Le but est de protéger l'objet en ne montrant que les méthodes de manipulation.  
On cache les propriétés et les méthodes internes au fonctionnement de l'objet.  
On rend visible uniquement les méthodes qui doivent être vues de l'extérieur.  
On parle de **visibilité**.  

## Le polymorphisme
**poly** comme plusieurs et **morphisme** comme forme.  
Le polymorphisme traite de la capacité de l'objet à posséder plusieurs formes.  
Cette notion intervient sur le comportement de l'objet, donc les méthodes.  
Le comportement de l'objet devient donc modifiable.

# Et java ...
Java est un langage de programmation orienté objet (POO) par classe.  
Et uniquement par classe.  
Il existe une classe de départ : Object.  
Toutes les autres classes héritent de la classe Object.  
Il est impossible d'écrire du code sans passer par une classe.  
A une classe correspond un fichier de code.  
Les classes sont regroupées dans des packages (dossier).
