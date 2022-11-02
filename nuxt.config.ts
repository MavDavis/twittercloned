// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
          meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            
          ],
          css: [
            './assets/style/style.css'
          ],
          script:[
            {src:"https://kit.fontawesome.com/87e2f7b4fa.js",
          crossorigin:"anonymous"
          },
          ],
          link: [
            // <link rel="stylesheet" href="https://myawesome-lib.css">
            // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
          ],
         
          // please note that this is an area that is likely to change
          style: [
          ],
          noscript: [
            // <noscript>Javascript is required</noscript>
            { children: 'Javascript is required' }
          ]
        }
      }
      
})
