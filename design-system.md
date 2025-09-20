# Design System - Visual Guide

Cette documentation reprend les informations graphiques des images de référence contenues dans le dossier `ui/base`. Elle constitue la description graphique complète du site web de librairie en ligne.

## Palette de Couleurs

### Couleurs Principales
Basées sur les informations de `colors.png` et la configuration TailwindCSS:

- **Primary (Violet)**: `#6366f1` - Couleur principale pour les éléments interactifs importants
- **Secondary (Rose)**: `#ec4899` - Couleur secondaire pour les accents et highlights  
- **Accent (Turquoise)**: `#14b8a6` - Couleur d'accent pour les détails et notifications

### Couleurs Neutres
- **Neutral (Gris foncé)**: `#374151` - Texte principal et éléments de navigation
- **Base-100 (Blanc)**: `#ffffff` - Arrière-plan principal

### Couleurs d'État
- **Info**: `#3abff8` - Messages informatifs
- **Success**: `#36d399` - Confirmations et succès
- **Warning**: `#fbbd23` - Avertissements
- **Error**: `#f87272` - Erreurs et alertes

## Typographie

### Hiérarchie Typographique
Basée sur les exemples des images `typo-1.png`, `typo-2.png`, et `Typo-3.png`:

#### Titres Principaux (H1)
- **Usage**: Titres de pages principales, bannières
- **Style**: Grande taille, poids bold
- **Couleur**: Primary (`#6366f1`) ou Neutral (`#374151`)
- **Applications**: Page d'accueil, en-têtes de sections importantes

#### Titres Secondaires (H2)
- **Usage**: Sections importantes, catégories
- **Style**: Taille moyenne-grande, poids semi-bold
- **Couleur**: Neutral (`#374151`)
- **Applications**: Titres de catégories de livres, sections de dashboard

#### Titres Tertiaires (H3)
- **Usage**: Sous-sections, titres de cartes
- **Style**: Taille moyenne, poids medium
- **Couleur**: Neutral (`#374151`)
- **Applications**: Noms de livres, titres d'articles de blog

#### Texte Corporel
- **Usage**: Contenu principal, descriptions
- **Style**: Taille normale, poids regular
- **Couleur**: Neutral (`#374151`)
- **Applications**: Descriptions de livres, contenu d'articles

#### Texte Secondaire
- **Usage**: Métadonnées, informations complémentaires
- **Style**: Taille réduite, poids light
- **Couleur**: Neutral avec opacité réduite
- **Applications**: Prix, dates, auteurs, informations techniques

### Police de Caractères
- **Famille principale**: Inter (sans-serif moderne et lisible)
- **Fallback**: ui-sans-serif, system-ui (polices système)

## Composants Visuels

### Boutons
- **Primaire**: Fond Primary (`#6366f1`), texte blanc
- **Secondaire**: Contour Primary, texte Primary
- **Accent**: Fond Secondary (`#ec4899`), texte blanc
- **États**: Hover avec opacité réduite, focus avec outline

### Cartes de Livres
- **Arrière-plan**: Base-100 (`#ffffff`)
- **Bordure**: Subtile, couleur neutre claire
- **Ombre**: Douce pour élévation
- **Contenu**: Image de couverture, titre, auteur, prix

### Navigation
- **Couleur de base**: Neutral (`#374151`)
- **Élément actif**: Primary (`#6366f1`)
- **Hover**: Secondary (`#ec4899`)

### Bannières
- **Arrière-plan**: Dégradé ou image avec overlay
- **Texte**: Blanc ou contrasté
- **Boutons**: Accent (`#14b8a6`) pour se démarquer

## Guidelines d'Utilisation

### Contraste et Accessibilité
- Assurer un contraste minimum de 4.5:1 pour le texte normal
- Contraste minimum de 3:1 pour les textes de grande taille
- Utiliser les couleurs d'état de manière cohérente

### Espacement
- Système d'espacement basé sur TailwindCSS (multiples de 0.25rem)
- Espacement vertical cohérent entre les éléments
- Marges et padding proportionnels à la taille des éléments

### Responsive Design
- Mobile-first approach
- Points de rupture standards TailwindCSS
- Adaptation de la typographie selon la taille d'écran

## Applications dans le Contexte Librairie

### Page d'Accueil
- Bannière principale avec Primary/Secondary
- Sections de livres avec cartes standardisées
- Navigation claire avec hiérarchie visuelle

### Catalogue de Livres
- Grid responsive pour les couvertures
- Filtres avec couleurs d'accent
- Prix en évidence avec couleur Secondary

### Dashboard Boutique
- Interface admin avec couleurs neutres
- Boutons d'action avec Primary
- Indicateurs de statut avec couleurs d'état

### Blog et Articles
- Typographie optimisée pour la lecture
- Images avec cadres cohérents
- Liens avec couleurs d'accent