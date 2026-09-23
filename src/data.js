// Tout le contenu du site se modifie ici. Remplace les "à ajouter" par les vraies informations.

import projet1 from './assets/projet1.jpeg'

export const site = {
  name: 'Enactus EST Tétouan',
  email: 'enactus.estt@gmail.com',
  tagline: "Le club d'entrepreneuriat social de l'EST Tétouan, membre du réseau Enactus Morocco.",
  socials: {
    instagram: 'https://www.instagram.com/enactusestt/',
    linkedin: 'https://www.linkedin.com/company/enactus-est-t%C3%A9touan/',
    facebook: 'https://www.facebook.com/share/1F7fXQtZSL/',
  },
}

// Ajoute ici les vrais projets quand ils existent (la page d'accueil en affiche 3 dans sa grille).
// Modèle : { id: 1, title: '...', summary: '...', problem: '...', solution: '...', impact: '...', image: monImport },
// Tant que la liste est vide, le site affiche le bloc "premier projet en préparation".
export const projects = []

export const upcoming = {
  title: 'Notre premier projet se prépare',
  text: "Le club prépare son premier projet, choisi à partir d'un besoin réel de notre région. Tu connais un besoin autour de toi ? Écris-nous.",
  image: projet1,
}

// Le bureau du club. Ajoute le nom de chaque membre dans "name" (et une photo dans "image" si tu en as une).
// Tant que "name" est vide, seul le poste s'affiche. Adapte les intitulés si besoin (ex. "Présidente").
export const team = [
  { role: 'Président', name: 'Abdennour BAKRI', gender: 'homme', image: null },
  { role: 'Vice-président', name: 'Oumaima LIMOUR', gender: 'femme', image: null },
  { role: 'Secrétaire général', name: 'Hind EL LAGHMICHE', gender: 'femme', image: null },
  { role: 'Trésorerie', name: 'Aymane KHIAR', gender: 'homme', image: null },
  { role: 'Chef de projet', name: 'Ayoub ZARKOUNI', gender: 'homme', image: null },
  { role: 'Responsable Ressources humaines', name: '', image: null },
  { role: 'Responsable Communication', name: '', image: null },
  { role: 'Responsable Événementiel', name: '', image: null },
  { role: 'Responsable Social Média', name: '', image: null },
  { role: 'Responsable Design', name: '', image: null },
  { role: 'éditeur vidéo', name: '', image: null }
]

export const news = [
  { date: '3 décembre 2025', title: 'Premier événement du club' },
  { date: '12 novembre 2025', title: 'Assemblée générale du club' },
  { date: '7 novembre 2025', title: 'Création du club Enactus EST Tétouan' },
]

export const steps = [
  { title: 'Repérer un besoin', text: "L'équipe identifie un problème réel autour d'elle." },
  { title: 'Lancer le projet', text: 'Elle construit une solution durable avec ses bénéficiaires.' },
  { title: 'Présenter les résultats', text: "Elle défend son impact devant un jury de professionnels." },
]

// Formulaires (page /formulaires liste, puis /formulaires/:slug pour chacun).
// La liste peut grandir avec le temps : ajoute simplement un objet par nouveau formulaire.
// slug : identifiant dans l'URL (unique, sans espace, sans accent).
// kind : type de formulaire à afficher. Pour l'instant, seul 'integration' existe
//        (voir src/components/IntegrationForm.jsx et src/pages/FormDetail.jsx).
// open : false ferme les inscriptions (affiche un message à la place du formulaire).
// deadline : date limite affichée (ex. '15 octobre 2026'), ou ''.
// endpoint : adresse qui reçoit les réponses (ex. https://formspree.io/f/xxxxxx). Vide = ouvre le mail du visiteur.
// googleFormUrl : si tu préfères un Google Form pour ce formulaire, colle ici son lien d'intégration ;
//                 il remplace le formulaire du site pour cette carte-là.
export const forms = [
  {
    slug: 'integration',
    kind: 'integration',
    title: 'Postuler pour le bureau exécutif',
    summary: "Candidater pour intégrer le club Enactus EST Tétouan.",
    open: true,
    deadline: '',
    endpoint: 'https://formspree.io/f/mqpaqblq',
    googleFormUrl: '',
  },
  {
    slug: 'membres',
    kind: 'integration',
    title: 'Devenir membre',
    summary: "Rejoindre le club Enactus EST Tétouan en tant que membre.",
    open: false,
    deadline: '',
    endpoint: '',
    googleFormUrl: '',
  },
]