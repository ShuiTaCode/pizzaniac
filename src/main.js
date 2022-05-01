
import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
const app = createApp(App)
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Card from "primevue/card";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
/* eslint-disable */
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/saga-blue/theme.css'

app.use(PrimeVue);



app.component('TabView',TabView)
app.component('TabPanel',TabPanel)
app.component('Card',Card)
app.component('InputNumber',InputNumber)
app.component('Button',Button)














app.mount('#app')
