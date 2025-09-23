import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        // Pages d'authentification
        connexion: './pages/auth/connexion.html',
        inscription: './pages/auth/inscription.html',
        motDePasseOublie: './pages/auth/mot-de-passe-oublie.html',
        reinitialisation: './pages/auth/reinitialisation-mot-de-passe.html',
        // Pages client
        accueil: './pages/client/accueil.html',
        blog: './pages/client/blog.html',
        blogArticle: './pages/client/blog-article.html',
        favoris: './pages/client/favoris.html',
        livreDetail: './pages/client/livre-detail.html',
        livres: './pages/client/livres.html',
        panier: './pages/client/panier.html',
        profilBoutique: './pages/client/profil-boutique.html',
        profilClient: './pages/client/profil-client.html'
      }
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
})