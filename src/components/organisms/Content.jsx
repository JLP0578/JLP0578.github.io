import React from "react";

import Icons from "../atoms/Icons";

import './../../assets/styles/organismes/Content.css';

export default class Content extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <main> 
                <hr id="APorpos"/>
                <section class="ContenuAPropos">
                <h2>A Propos de moi<span class="console_cursor">_</span></h2>
                    <div>
                        <p>Bonjour, je m'appelle Julie je suis actuellement en license MIW (Multimedia Internet Webmaster).</p>
                        <p>J'ai effectué un <b>Bac Pro SEN</b> (Système Électronique Numérique) option EIE (Électronique Industrielle Embarquée) en 2016 avec une <span class="Haute">mention Bien</span></p>
                        <p>Puis un <b>BTS SIO</b> (Services informatiques aux organisations) option SLAM (Solutions Logicielles et Applications Métiers) en 2018</p>

                        <p><Icons template="high"/> Je suis à 100% dans mon travail et je cherche toujours à réussir même si cela doit prendre du temps.</p>
                        <p><Icons /> Je suis dyslexique, c'est une qualité comme une faiblesse.</p>
                        <p><Icons template="low"/> Je suis très réservée.</p>
                        <ul>
                            <li class="titleLi"><hr/><h3>Experience</h3><hr/></li>
                            <p><span class="Haute">[+]</span> j'ai quelques connaissances dans les réseaux (filaires et hertziens), l'électronique et la juridiction web.</p>

                            <br/>
                            <li class="titleLi"><h4 class="Haute">Haute utilisation</h4></li>
                            <li><p>HTML5, CSS3, SCSS, JS6, PHP7, Mysql/Mariadb, Phpmyadmin</p></li>
                                    <br/>
                            <li class="titleLi"><h4>Moyenne utilisation</h4></li>
                            <li><p>Linux, Raspberry, Leaflet, Bootstrap, Tailwindcss, Git, C++, QtCreator</p></li>
                                    <br/>
                            <li class="titleLi"><h4 class="Bas">Basse utilisation</h4></li>
                            <li><p>Laravel, React, Vue.js, Node, Python, Gulp, Bash, CMD</p></li>
                            <li><p>Wordpress, Drupal, Prestashop</p></li>
                                    <br/>
                            <li class="titleLi"><hr/><h3>Centre<br/>d'intérets</h3><hr/></li>
                                    <br/>
                            <li><p>Informatique Rétro, Nature, Moto, Dessin, Véhicule RC, Gitare, Jeu Vidéo, Musique, Cybersécurité</p></li>
                                    <br/>
                            <li class="titleLi"><hr/><h3>Projet</h3><hr/></li>
                                    <br/>
                            <li><p><span class="Bas">NewWorld</span>: Site de commerce qui permet de faire des achats chez différentent agriculteurs. (projet de BTS)</p></li>
                            <li><p><span class="Haute">Ground Status</span>: WebApp qui répertorie les routes dangereuses que les utilisateurs signalent. (projet de MIW) en cours de maquettage</p></li>
                            <li><p><span class="Haute">Ramène Ta Fraise</span>: Site de click & drive qui regroupe des vendeurs et mettent en avant leurs produits. (projet de MIW) en cours de developpement</p></li>

                        </ul>
                    </div>
                </section>
            </main>
        );
    }
}