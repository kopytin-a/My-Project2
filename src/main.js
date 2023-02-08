import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import { useAccordion } from 'vue3-rich-accordion'
import 'vue3-rich-accordion/accordion-library-styles.css'
import Paginate from "vuejs-paginate-next"
import router from '@/router/router'
import directives from '@/directives'
import store from '@/store'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(useAccordion)
    .use(Paginate)
    .use(router)
    .use(store)
    .mount('#app')