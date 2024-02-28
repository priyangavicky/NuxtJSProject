// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title:"Form Modules",
      meta:[
        {charset: 'utf-8'},
        {name:'viewport',content:'width=device-width, initial-scale=1'},
        {hid:'description', name:'description',content:'Form Modules'},
        {name:'format-detection', content:'telephone-no'}
         ],
         link:[
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          },
          {
            rel:'stylesheet', 
            href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
            integrity:'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==',
            crossorigin:'anonymous',
             referrerpolicy:'no-referrer' 
          },
          {
            rel:'icon',
            type:'image/x-icon',
            href:'/favicon.ico'
          },
          {
            rel:'stylesheet',
            href:'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
            integrity:'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
            crossorigin:'anonymous'
          }
         ],
         script:[
          {
            src:'https://code.jquery.com/jquery-3.7.1.min.js',
            type:'text/javascript'
          },
            {
              src:'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
              type:'text/javascript'
            }
         ]
    
    }
  }
})
