# 🚀 Guide de Déploiement GitHub Pages + Namecheap

## ✅ **STATUT : Repository créé avec succès !**
- **Repository** : https://github.com/Jerome2024-net/nexus
- **Code pushé** : ✅ Terminé
- **Prochaine étape** : Activer GitHub Pages et configurer DNS

## 🎯 **Étapes suivantes**

### **Étape 1 : Activer GitHub Pages**

1. **Allez sur** : https://github.com/Jerome2024-net/nexus
2. **Cliquez** sur **"Settings"** (onglet en haut)
3. **Dans le menu gauche** : cliquez sur **"Pages"**
4. **Source** : Sélectionnez **"Deploy from a branch"**
5. **Branch** : Sélectionnez **"main"**
6. **Folder** : Laissez **"/ (root)"**
7. **Cliquez** sur **"Save"**

### **Étape 2 : Configurer le domaine personnalisé**
1. **Dans la même page** "Pages"
2. **Custom domain** : Tapez `nexusrealty.org`
3. **Cliquez** sur **"Save"**
4. **Attendez** que le fichier CNAME soit créé automatiquement
   - **Description** : `Landing page professionnelle NEXUS - L'expertise immobilière de référence`
   - **Public** ✅ (requis pour GitHub Pages gratuit)
   - **Add README** ❌ (on en a déjà un)
   - **Add .gitignore** ❌ (on en a déjà un)

### 2. 📤 Upload des fichiers

**Option A : Via l'interface GitHub (simple)**
1. Une fois le repo créé, cliquez "uploading an existing file"
2. Glissez-déposez TOUS les fichiers :
   - `index.html`
   - `test-formspree.html`
   - `CNAME`
   - `README_GITHUB.md`
   - `.gitignore`
   - `styles.css` et `script.js` (même si pas utilisés)

**Option B : Via Git (recommandé)**
```bash
# Dans votre dossier de projet
git init
git add .
git commit -m "🎉 Initial commit - NEXUS Realty landing page"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/nexus-realty.git
git push -u origin main
```

### 3. ⚙️ Configurer GitHub Pages

1. **Dans votre repository**, allez dans **Settings**
2. **Scrollez** jusqu'à **Pages** (menu de gauche)
3. **Configurez** :
   - **Source** : Deploy from a branch
   - **Branch** : `main` / `(root)`
   - **Cliquez** Save

### 4. 🌐 Configuration du domaine personnalisé

1. **Dans GitHub Pages Settings**
2. **Custom domain** : Tapez `nexusrealty.org`
3. **Cliquez** Save
4. **Attendez** la vérification DNS

### 5. 🔧 Configuration DNS chez Namecheap

1. **Connectez-vous** à Namecheap
2. **Domain List** → **Manage** pour nexusrealty.org
3. **Advanced DNS**
4. **Ajoutez ces enregistrements** :

```
Type    Host    Value                          TTL
A       @       185.199.108.153               Automatic
A       @       185.199.109.153               Automatic  
A       @       185.199.110.153               Automatic
A       @       185.199.111.153               Automatic
CNAME   www     votre-username.github.io      Automatic
```

> ⚠️ **Important** : Remplacez `votre-username` par votre vrai nom d'utilisateur GitHub

### 6. 🔒 Activer HTTPS

1. **Retournez** dans GitHub Pages Settings
2. **Cochez** "Enforce HTTPS" (peut prendre 24h à apparaître)

## ⏱️ Temps de propagation

- **GitHub Pages** : 5-10 minutes
- **DNS** : 24-48 heures maximum
- **SSL/HTTPS** : 24 heures après la configuration DNS

## 🧪 Test de fonctionnement

1. **URL temporaire** : `https://votre-username.github.io/nexus-realty`
2. **URL finale** : `https://nexusrealty.org`
3. **Test Formspree** : `https://nexusrealty.org/test-formspree.html`

## 🚨 Troubleshooting

### Si le site ne s'affiche pas :
- Vérifiez que le fichier `index.html` est à la racine
- Vérifiez que le repository est public
- Attendez 10-15 minutes après configuration

### Si le domaine ne fonctionne pas :
- Vérifiez la configuration DNS chez Namecheap
- Attendez 24-48h pour la propagation DNS
- Testez avec `dig nexusrealty.org` ou des outils DNS online

### Si HTTPS ne fonctionne pas :
- Attendez que la coche "Enforce HTTPS" soit disponible
- Peut prendre jusqu'à 24h après la configuration DNS

## 📞 Support

- **GitHub Pages** : [Documentation officielle](https://docs.github.com/en/pages)
- **Namecheap DNS** : [Guide DNS](https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/)

Une fois configuré, votre landing page NEXUS sera accessible à l'adresse **https://nexusrealty.org** ! 🎉
