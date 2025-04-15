import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        registro: resolve(__dirname, 'registro.html'),
        blog: resolve(__dirname, 'blog.html'),
        blog_block_chain: resolve(__dirname, 'blog-block-chain.html'),
        blog_full_stack: resolve(__dirname, 'blog-full-stack.html'),
        blog_inteligencia_arti: resolve(__dirname, 'blog-inteligencia-arti.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        master_block_chain: resolve(__dirname, 'master-block-chain.html'),
        master_full_stack: resolve(__dirname, 'master-full-stack.html'),
        master_inteligencia_arti: resolve(__dirname, 'master-inteligencia-artificial.html'),
        politica_privacidad: resolve(__dirname, 'politica-privacidad.html'),
        quienes_somos: resolve(__dirname, 'quienes-somos.html'),
        terminos_condiciones: resolve(__dirname, 'terminos-condiciones.html'),
      },
    },
  },
})