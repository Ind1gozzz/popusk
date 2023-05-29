import Axios from 'axios'

export function config() {
    Vue.prototype.$http = Axios;
    const token = localStorage.getItem('token')
    if (token) {
        Vue.prototype.$http.defaults.headers.common['Authorization'] = token
    }
    console.log('config')    
}

