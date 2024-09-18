import lazySizes from 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

export default defineNuxtPlugin(() => {
    lazySizes.init()
})