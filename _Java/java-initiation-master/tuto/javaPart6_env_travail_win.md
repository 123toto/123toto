<center> <h1>Java - Environnement de travail pour Windows</h1> </center>

# EDI
Pour développer en Java dans bon un environnement, il faut utiliser un EDI.  
Voici 3 EDI qui ont leur lettres de noblesse : 
* [Netbeans](https://netbeans.org/downloads/)
* [Eclipse](https://eclipse.org/)
* [Intellij IDEA](https://www.jetbrains.com/idea/)  

Nous utilisons Eclipse. 

# java 1.8 
* [JDK Oracle Java SE 1.8](http://www.oracle.com/technetwork/java/javaee/downloads/index.html)
* créer variable globale utilisateur JAVA_HOME indiquant le répertoire d'installation du JDK

# java 1.7 EE
[Java EE 7 SDK Web Profile Update 2](http://www.oracle.com/technetwork/java/javaee/downloads/index.html)  

# Eclipse
## Installation
* Installer la dernière version Java EE : [Neon 2 Eclipse IDE for Java EE Developers](https://eclipse.org/downloads/)
* installer dans le dossier de votre choix
* paramétrer le codepage : preference/general/workspace => texte file encoding UTF-8
* déclarer le JRE dans préférence/java/JRE installées

## workspace
Eclipse utilise des workspaces. Vous pouvez avoir plusieurs workspaces.

## Quelques raccourcis
* CTRL + S : enregistrer l'onglet en cours
* CTRL + SHIFT + S : tout sauvegarder
* CTRL + W : fermer l'onglet en cours
* CTRL + SHIFT + W : fermer tous les onglets
* CTRL + C : copier la sélection
* CTRL + X : couper la sélection
* CTRL + V : coller la sélection
* CTRL + A : tout sélectionner
* CTRL + F : chercher / remplacer
* CTRL + ESPACE : l'un des raccourcis les plus utilisés ! taper le début d'un mot (méthode, mot réservé, ...), Eclipse vous affiche une liste de propositions ;
* CTRL + SHIFT + 0 : génère les imports pour votre classe ;
* CTRL + SHIFT + R : rechercher un fichier dans le workspace ;
* CTRL + SHIFT + F : met en forme votre code (indentation)
* CTRL + SHIFT + C : commenter / dé-commenter les lignes sélectionnées ;
* CTRL + SHIFT + P : se déplacer d'une accolade à l'autre (if, while, for etc.)
* ALT + SHIFT + S : revient à faire clic-droit / Source
* ALT + SHIFT + R : renomme un identifiant
* sysout + CTRL + ESPACE : System.out.println()
* CTRL + SHIFT + / : mise en commentaire de la ligne

## Pour plus de raccourcis
* Dans préférence : java editor templates
* Plus de raccourcis sur [developpez.com](http://thierry-leriche-dessirier.developpez.com/tutoriels/eclipse/raccourcis/#LI)

# Eclipse Marketplace - plugin installés
* EGit : installé par défaut
* Eclipse Tomcat Plugin : pour lancer une application Web
* Markdown Text Editor

# Plugin Eclipse hors Marketplace
* langues : http://download.eclipse.org/technology/babel/update-site/R0.14.1/neon

 
# plugin à étudier
* The Spring Tool Suite
* Eclipse Docker Tooling 
* Eclipse UML Generators
* Eclipse Web Developer Tools
* Eclipse XML Editors and Tools
* HTML Editor (WTP)
* SQL Development Tools
* Spring Tool Suite (STS)
* Bravo JSP editor
* ALIAS SCREEN DESIGNER for Eclipse
 
## tuto Eclipse
[petit tuto](http://www.eclipsetotale.com/articles/premierPas.html)  
[plus complet](http://www.enseignement.polytechnique.fr/profs/informatique/Julien.Cervelle/eclipse/)

# git sous Eclipse
Plugin déjà installé EGit.  
De préférence, installer un repository git par projet.  
[Documentation OC](https://openclassrooms.com/courses/egit-quand-git-s-invite-dans-eclipse)

# Tomcat
## installation
* Vérifier l'instanciation de JAVA_HOME
* Télécharger la dernière version de [tomcat Windows Service Installer](http://tomcat.apache.org/download-90.cgi)
* Exécuter le fichier télécharger (apache-tomcat-9.0.0.M15.exe)

## Management de tomcat
* Service : Apache Tomcat 9.0 Tomcat9
    * net start Tomcat9 
    * net stop Tomcat9
    * ou via interface service
* port http : [http://localhost:8080](http://localhost:8080/)
* penser à ne pas lancer le tomcat au démarrage de windows  

## paramétrage Eclipse
* ajouter nouveau serveur (new/other/server)
* ajouter la vue serveur  

[tuto](http://www.objis.com/formation-java/tutoriel-eclipse-wtp-jee-integration-tomcat.html)  


## documentation tomcat
[1](https://www.jmdoudoux.fr/java/dej/chap-tomcat.htm)

