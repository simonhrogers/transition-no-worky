# Nuxt 3 Layout Transitions do not work – minimal reproduction

Layout transitions are not retaining correct scroll position. Page transitions do.

Navigate from the about page to the home page here, the home page is already partially scrolled:

https://layout-transition-no-worky-nuxt3.netlify.app/about

It was suggested that router.options.ts would work, unfortunately it doesn’t which I think relates to this issue:

https://github.com/nuxt/nuxt/issues/29004
