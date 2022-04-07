import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
// import '@/styles/index.css'
// import '@/styles/app.css'
import axios from 'axios'
const corsOptions = {
    origin: 'http://baladiweb.bteamwebs.com',
    credentials: true,
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(cookieParser());
const csrfProtection = csurf({ cookie: true });
app.use(csrfProtection);

app.use(function (req, res, next) {
    res.cookie('XSRF-TOKEN', req.csrfToken());     
    res.locals._csrf = req.csrfToken();
    next();
});
createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
