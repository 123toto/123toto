<center> <h1>Java - Concepts globaux</h1> </center>

# Problématique de la compilation
Ils existent plusieurs types de langage : compilé, script, interprété.  
Cette notion est historique et est devenue impropre.  
Certains langages comme le C# sont aujourd'hui compilés ou interprétés.

Mais de quoi parle t'on ?  
Un langage est composé d'une suite d'instructions écrites en format texte.  
Une machine ne comprend qu'une suite de codes binaires (0 et 1).  

Pour exécuter un programme, l'homme a 2 solutions :
* soit il fournit le code binaire à la machine. Celle-ci éxécute le code sans se poser de question.
* soit il installe un programme intermédiaire à la machine qui traduit au fur et à mesure les instructions en binaire.  

## La compilation
Un code compilé est spécifique à un processeur et un système d'exploitation. 
Il n'est donc pas transportable. Il faut dans ce cas fournir un exécutable spécifique.  
Sous Windows, l'exécutable a pour extension .exe.  
Sous linux, l'exécutable a pour extension .bin.  

### Construction d'un exécutable
* Le développeur écrit son code sous son système d'exploitation et son edi préférés,
* Le développeur compile le code et l'exécute dans son environnement de développement,
* L'installeur récupère le code du développeur, et le compile dans l'environnement de production
    * soit sur la machine de production
    * soit par une compilation croisée  

C'est ainsi que nous trouvons plusieurs versions compilées d'une même application.  
Linux est un monde très vaste, il est impossible de proposer toutes les versions compilées d'une application.  
Aussi, les linuxiens connaissent bien les commandes gcc et make.  

### Quelques exemples de langages compilés
* C, C++
* C#
* Pascal

## L'interprétation
Un code interprété (ou script) demande l'installation d'un moteur ou d'une machine virtuelle.  
Il existe un moteur par type de machine (processeur/système). 
Le processus est plus lourd et plus lent que la compilation.  
Le déploiement d'une application sur de multiples sites est plus simple.  
Il existe des problèmes de lenteur qui tendent à disparaître avec l'évolution du matériel.  
Ces problèmes perdurent essentiellement à cause de 2 facteurs :
* une mauvaise gestion de la mémoire et en particulier de la libération des objets non utilisés
* un langage non typé ralentit le processeur, puisqu'il doit décider au dernier moment du type de variables.  

### Construction d'un exécutable
* Le développeur installe un moteur sur son environnement de développement.
Par exemple Nodejs qui utilise le moteur V8 de google.
* Le développeur écrit son code sous son système d'exploitation et son edi,
* Le développeur exécute le code via le moteur,
* L'installeur installe lui aussi le moteur sur chaque environnement de production,
* L'installateur récupère le code, et paramètre l'environnement de production pour que ce dernier soit interprété.  

### Quelques exemple de langages script
* javascript
* PHP
* Ruby
* Python

# Et Java ...
Java est un langage qui a pour mission d'être multiplateforme. C'est donc un langage interprété.  
Et compilé ...   
Les concepteurs de java ont développé un concept qui est un mélange de ces deux possibilités.  
Ils ont créé un compilateur qui génère du binaire et limite le risque d'erreur.  
Ils ont créé une machine virtuelle pour rendre le code compilé multiplateforme.  

Donc pour java, nous avons
* 2 types de fichier
    * des fichiers *.java* qui contiennent le code java (texte), 
    * des fichiers *.class* qui contiennent du code compilé qui sera interprété,
* un compilateur,
* une machine virtuelle (moteur) pour exécuter le code compilé.  

Programmer en java suppose donc que l'on dispose d'un compilateur et d'un interpréteur java.  
Ceux-ci sont fournis par le JDK (Java Developpement Kit).  
Attention: le multiplateforme impose un JDK suivant le système d'exploitation : Windows, linux, OS X, ...

# La machine virtuelle

## Version
Java est actuellement à la version 8, mais dans sa notation des numéros de version c'est 1.8.  

## JVM 
Java Virtual Machine : c'est la machine virtuelle.  
C'est un exécutable écrit en grande partie en C qui définit l'environnement d'exécution des programmes Java. 
Elle peut être comparée à un ordinateur abstrait.  
Lorsque l'on lance une JVM, l'utilisateur indique 4 choses :
* le nom de l'exécutable (java, javac, javaw)
* la taille de la mémoire à allouer
* les fichiers contenants le code java  
* le point d'entrée  

La JVM est responsable de l'exécution des fonctions suivantes :
* Allocation de mémoire aux objets créés
* Récupération des données périmées (garbage collection)
* Gestion du recensement et des piles (stack)
* exécution des instructions
* Appel du système hôte pour certaines fonctions, comme l'accès aux périphériques
* Suivi de la sécurité des applications Java  

### un exemple de lancement d'une JVM
``` sh
java -Xms 256M -Xmx 1G -jar monappli.jar monPackage.MaClasse
```

### gestion de la mémoire
[résumé de la gestion de la mémoire](http://www.zem.fr/java-gestion-de-memoire-des-java-virtual-machine-jvm/)  
[Informations plus complète](https://www.jmdoudoux.fr/java/dej/chap-jvm.htm)  
[doc Oracle](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html)  

## JRE
Java Runtime Environment : c'est le kit destiné au client pour pouvoir exécuter un programme Java.  
Il se compose essentiellement d'une machine virtuelle Java (JVM) capable d'exécuter le byte-code et 
les bibliothèques standard de Java.  
Il ne peut pas compiler le code.  

## JDK : 
(Java Developpement Kit) c'est le kit destiné au développeur.  
Ce kit est composé
* d'un JRE,
* d'un compilateur 
* de nombreux programmes utiles,
* des exemples de programmes Java,
* les sources de toutes les classes de I'api.   
Pour les applications client/serveur et applet, seul le JRE est nécessaire.  
Pour les applications Web, le JDK est nécessaire.  
C'est la version du JDK utilisé par l'application qui donne le niveau de fonctionnalité/de compatibilité Java.  
Les applications disposent d'environnements différents selon la cible visée :
* Java SE : Standard Edition. Comme son nom l'indique,
* Java EE : Entreprise Edition. Contient des librairies supplémentaires pour un site web en particulier.
* Java ME : Micro Edition. Pour système embarqué, Android. Plus léger.  

Nous utiliserons Java SE 1.8, auquel nous ajouterons des frameworks comme Spring.  

# classpath
> jmdoudoux :  
> Le classpath permet de préciser au compilateur et à la JVM où ils peuvent trouver les classes dont ils ont besoin pour la compilation et l'exécution d'une application. C'est un ensemble de chemins vers des répertoires ou des fichiers .jar dans lequel l'environnement d'exécution Java recherche les > classes (celles de l'application mais aussi celles de tiers) et éventuellement des fichiers de ressources utiles à l'exécution de l'application. Ces classes ne concernent pas celles fournies par l'environnement d'exécution incluses dans le fichier rt.jar qui est implicitement utilisé par 
> l'environnement.

## Grammaire
Comme tout langage, java est basé sur une grammaire. L'écriture du code est très proche du C et C++.  
Toutefois, l'écriture du code est simplifié.  
Voici les grands principes :  
* c'est un langage objet et tout est basé sur la notion de classe,
* il est impossible d'écrire du code en dehors d'une classe,
* il existe une classe qui contient une méthode main(). Cette classe est le point d'entrée lors de l'exécution du code.
* les notions complexes du C comme les pointeurs ont été supprimées,
* Un fichier .java contient une classe.
* Une classe est décrite dans un seul fichier (pas de fichier .h, ni .cpp)  
* la déclaration des méthodes (fonction en objet) est mieux encadrée
* l'appel à d'autres classes est fait l'instruction import.  

##  Formats de fichiers présents dans un projet Java
* .java : fichier source
* .class : fichier binaire java (bytecode)
* .jar : Java Archive - bibliothèque
* .war : Web Archive - Application Web (contient des JAR)
* .properties : fichier de paramètres écrit sous le format (clef,valeur)
* .xml : fichier xml. Sert pour le paramétrage. Par exemple Spring, Maven.
* .yaml : fichier de paramétrage similaire au xml en moins verbeux.

## bibliothèque
Une bibliothèque est un ensemble de fonctions simplifiant l'écriture du code.  
Lorsque le développeur écrit du code, son premier réflexe est de rechercher si le code n'a pas déjà été écrit.  
Pour cela, il recherche la fonctionnalité dans les bibliothèques.  
Si la fonctionnalité n'existe pas (ou n'est pas trouvée), il écrit son code.  
Si ce code est générique, il peut être mis dans une bibliothèque pour un futur usage.  

Le développement java est basé sur l'écriture de nouveau code java, et l'utilisation de code déjà écrit.  
Le code déjà écrit peut être ajouté à une bibliothèque si celui-ci est générique.  
Ce sont les bibliothèques. Vous pouvez aussi écrire votre propre bibliothèque.  
La licence java (Sun Community Sourced License - SCSL) permet une acquisition et une redistribution libre de la JRE. 
Ce n'est donc pas une technologie libre. 
Cependant ce genre de distribution a permis le partage de bibliothèques par la communauté java.  
Un organisme indépendant (Java Community Process) permet d'unifier et de normaliser ces différents développements.  
Ceci évite une dispersion des efforts et une redondance de bibliothèques.  
Lorsque ces bibliothèques sont matures, elles sont intégrées à la future version de java. 
Ainsi à chaque version Java s'est enrichie du travail de la communauté.  
Aujourd'hui, java est un langage mature qui a peu d'évolution.  

## outil
Un outil est un ensemble de bibliothèque répondant un besoin.  
Un IDE est un outil.   

Une multitude d'outils sont très vite apparus.
Comme dans tout domaine, certains outils se sont imposés comme des standard de développement.
Par exemple :
* Maven est un moteur de production de logiciel écrit en java 
* Tomcat est un outil qui s'additionne au serveur HTTP Apache et permet de gérer les servlet

## framework
Un framework est un ensemble d'outils guidant et simplifiant le développement d'applications.  
C'est en quelque sorte une boite à outils avec un mode d'emploi obligatoire.  
Beaucoup de logiciels répondent au même besoin, par exemple gérer des pages web. 
Grâce à un cadre de travail bien défini, le travail du développeur est simplifié.  
Ce dernier perd en autonomie, mais gagne en productivité.  
Par exemple :
* Spring est un conteneur léger facilitant le développement d'application
* JUnit permet d'automatiser des tests.  

# Documentation
[Pensez en java V2](http://bruce-eckel.developpez.com/livres/java/traduction/tij2/)  
[Développons en java](https://www.jmdoudoux.fr/java/dej/index.htm)  
[developpez.com](http://java.developpez.com/)  
[eclipse](http://jmdoudoux.developpez.com/cours/developpons/eclipse/)
[notions et techniques de base en Java](https://www.jmdoudoux.fr/java/dej/chap-techniques-base.htm)

