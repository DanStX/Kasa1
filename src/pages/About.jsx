import React from 'react';
import Collapse from '../components/Collapse';

const About = () => {
    return (
        <main className='about'>

            <Collapse title="Fiabilité" content="Les annoces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont vérifiées par nos équipes." />

            <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />

            <Collapse title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />

            <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien nos hotes que pour les voyageurs, chaque logement correspondend aux critères de sécurité établis pzr nos services. En laissant une note aussi bien à l'hote qu'au loctaire, cela permet ànoséquipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />

        </main>
    );
};

export default About;