# 📋 NEXUS Landing Page - Informations Complètes

## 🎯 Objectif
Landing page professionnelle pour NEXUS - Estimation immobilière tous biens confondus

## 🌐 URL de test local
http://localhost:8001

## 📧 Configuration Email (Formspree)

### ID Formspree configuré ✅
```
https://formspree.io/f/xwpqevav
```

### Statut
✅ **CONFIGURÉ** - Prêt à recevoir les leads !

## 📊 Données collectées par le formulaire

### 👤 Informations personnelles
- `firstName` : Prénom du client
- `lastName` : Nom du client  
- `email` : Email du client
- `phone` : Téléphone du client

### 🏠 Détails du bien
- `propertyAddress` : Adresse complète du bien
- `propertyType` : Type de bien (résidentiel, commercial, terrain, etc.)
- `propertySize` : Surface en m²
- `rooms` : Configuration du bien
- `propertyCondition` : État du bien

### 🎯 Informations projet
- `sellingReason` : Motivation pour l'estimation
- `estimatedValue` : Estimation personnelle du client
- `additionalInfo` : Informations complémentaires
- `consent` : Acceptation du contact

### 📈 Métadonnées automatiques
- `source` : "nexus-landing-page"
- `timestamp` : Date/heure de soumission
- `page_url` : URL de la page
- `user_agent` : Navigateur du client
- `referrer` : Source du trafic

## 🚀 Commandes pour lancer le serveur

### Windows (PowerShell)
```powershell
cd "c:\Users\jerom\OneDrive\Desktop\Nouveau dossier (18)"
python -m http.server 8001
```

### Arrêter et relancer
```powershell
Get-Process -Name python -ErrorAction SilentlyContinue | Stop-Process -Force
python -m http.server 8001
```

## 🧪 Test du formulaire

1. **Page principale** : http://localhost:8001
2. **Page de test** : http://localhost:8001/test-formspree.html

## 📱 Fonctionnalités implémentées

### ✅ Design & UX
- [x] Design quartz avec couleurs immobilières (dorées)
- [x] Glassmorphism et effets visuels modernes
- [x] Formulaire multi-étapes (3 étapes)
- [x] Validation en temps réel
- [x] Animations fluides et transitions
- [x] Trust indicators et éléments de réassurance

### ✅ Responsive Mobile
- [x] Parfaitement responsive sur tous écrans
- [x] Touch-friendly pour mobile
- [x] Orientations portrait/paysage
- [x] Optimisations spécifiques petits écrans

### ✅ Carte Interactive
- [x] Carte mondiale Leaflet (OpenStreetMap)
- [x] 20+ marqueurs villes NEXUS
- [x] Géolocalisation utilisateur automatique
- [x] Panneau d'information responsive
- [x] Marqueurs tactiles optimisés mobile

### ✅ Collecte de Leads
- [x] Intégration Formspree fonctionnelle
- [x] Envoi email automatique
- [x] Métadonnées de tracking complètes
- [x] Gestion d'erreurs robuste
- [x] Analytics prêt pour Google Analytics

### ✅ Performance
- [x] Optimisations mobile
- [x] Chargement rapide
- [x] Animations performantes
- [x] Gestion des erreurs réseau

## 🎨 Couleurs utilisées

```css
--immobilier-gold: #d4af37
--immobilier-dark-gold: #b8941f
--quartz-bg: #f7f2f0
--text-primary: #2c2c2c
--text-secondary: #666666
```

## 📞 Contact & Support

Toutes les demandes d'estimation arrivent directement dans votre email configuré sur Formspree avec un template HTML professionnel.

---
💡 **Prochaines étapes** : Configurez votre compte Formspree et remplacez l'ID temporaire par le vôtre !
