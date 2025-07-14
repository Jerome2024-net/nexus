# 📧 Configuration Formspree pour NEXUS

## 🚀 Étapes de Configuration

### 1. Créer un compte Formspree
1. Allez sur [formspree.io](https://formspree.io)
2. Cliquez sur "Get Started" 
3. Créez un compte gratuit avec votre email NEXUS

### 2. Créer votre formulaire
1. Dans le dashboard, cliquez sur "New Form"
2. Donnez un nom : "NEXUS - Estimations Immobilières"
3. Copiez l'URL de votre formulaire (format: `https://formspree.io/f/VOTRE_ID`)

### 3. Modifier le code
Dans `index.html`, ligne ~1946, remplacez :
```html
<form id="estimationForm" action="https://formspree.io/f/xdkonpqr" method="POST" novalidate>
```

Par :
```html
<form id="estimationForm" action="https://formspree.io/f/VOTRE_VRAIE_ID" method="POST" novalidate>
```

### 4. Configuration avancée dans Formspree

#### A. Notifications Email
- **Email de réception** : Votre email professionnel NEXUS
- **Sujet personnalisé** : "🏡 Nouvelle demande d'estimation NEXUS"
- **Template HTML** : Activé pour un rendu professionnel

#### B. Anti-spam
- **reCAPTCHA** : Activé (recommandé)
- **Honeypot** : Activé
- **Rate limiting** : 5 soumissions/minute

#### C. Redirections
- **Success URL** : Laissez vide (géré par JavaScript)
- **Error URL** : Laissez vide (géré par JavaScript)

## 📊 Données collectées

### Informations personnelles
- `firstName` : Prénom
- `lastName` : Nom
- `email` : Email
- `phone` : Téléphone

### Détails du bien
- `propertyAddress` : Adresse du bien
- `propertyType` : Type de bien
- `propertySize` : Surface
- `rooms` : Configuration
- `propertyCondition` : État du bien

### Projet et motivations
- `sellingReason` : Raison de l'estimation
- `estimatedValue` : Estimation personnelle
- `additionalInfo` : Informations complémentaires

### Métadonnées de suivi
- `source` : "nexus-landing-page"
- `timestamp` : Date/heure de soumission
- `page_url` : URL de la page
- `user_agent` : Navigateur utilisé
- `referrer` : Source du trafic

## 🎯 Template Email Recommandé

Dans Formspree, configurez ce template HTML :

```html
<h2 style="color: #d4af37;">🏡 Nouvelle demande d'estimation NEXUS</h2>

<h3>👤 Informations du client</h3>
<p><strong>Nom :</strong> {{lastName}} {{firstName}}</p>
<p><strong>Email :</strong> {{email}}</p>
<p><strong>Téléphone :</strong> {{phone}}</p>

<h3>🏠 Détails du bien</h3>
<p><strong>Adresse :</strong> {{propertyAddress}}</p>
<p><strong>Type :</strong> {{propertyType}}</p>
<p><strong>Surface :</strong> {{propertySize}} m²</p>
<p><strong>Configuration :</strong> {{rooms}}</p>
<p><strong>État :</strong> {{propertyCondition}}</p>

<h3>🎯 Projet</h3>
<p><strong>Motivation :</strong> {{sellingReason}}</p>
<p><strong>Estimation perso :</strong> {{estimatedValue}} XOF</p>
<p><strong>Informations complémentaires :</strong></p>
<p>{{additionalInfo}}</p>

<h3>📊 Données de suivi</h3>
<p><strong>Source :</strong> {{source}}</p>
<p><strong>Date :</strong> {{timestamp}}</p>
<p><strong>Page :</strong> {{page_url}}</p>

<hr>
<p style="color: #666; font-size: 12px;">Contactez ce prospect sous 24h pour maximiser la conversion ! 🚀</p>
```

## 💰 Tarification Formspree

- **Gratuit** : 50 soumissions/mois
- **Basic** : 10€/mois - 1000 soumissions
- **Pro** : 20€/mois - Illimité + fonctionnalités avancées

## 🔧 Test de fonctionnement

1. Ouvrez votre landing page
2. Remplissez le formulaire avec de vraies données
3. Soumettez le formulaire
4. Vérifiez la réception dans votre email

## 🚨 Important

- Remplacez `xdkonpqr` par votre vrai ID Formspree
- Testez avec des données réelles
- Configurez les notifications email
- Activez les protections anti-spam

Une fois configuré, vous recevrez chaque lead directement par email avec toutes les informations détaillées ! 📧✨
