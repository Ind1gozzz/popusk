app.component('nav-bar', {
    props:{
        authorized: {
            type: Boolean,
            required: true
        },
    },
    template:
    /* HTML */
    `
    <div class="nav-bar">
        <button v-if="this.authorized" class="nav-button" > Личный кабинет </button>
        <template v-else>
            <button class="nav-button" @click="this.login()"> Войти </button>
            <button class="nav-button" @click="this.registration()"> Зарегистрироваться </button>
        </template>
    </div>
    `,
    data() {
        return {
            log: false,
            reg: true,
        }
    },
    methods: {
        login() {
            this.$emit('show-log');           
        },
        registration() {
            this.$emit('show-reg');           
        },
    }
})