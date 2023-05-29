app.component('registration-form', {
    props:{
        show: {
            required: true,
            type: Boolean,
        }
    },
    template:
    /* HTML */
    `
    <div v-if="this.show" id="auth-block">
        <h2>Register</h2>
        <form @submit.prevent="register">
            <label for="name">Name</label>
            <div>
                <input id="name" type="text" v-model="name" required autofocus>
            </div>
            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" type="email" v-model="email" required>
            </div>
            <label for="password">Password</label>
            <div>
                <input id="password" type="password" v-model="password" required>
            </div>
            <label for="password-confirm">Confirm Password</label>
            <div>
                <input id="password-confirm" type="password" v-model="password_confirmation" required>
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
  </div>
    `,
    data() {
        return {
            name : "",
            email : "",
            password : "",
            password_confirmation : "",
            is_admin : null
        }
    },
    methods: {
        register() {
            let data = {
              name: this.name,
              email: this.email,
              password: this.password,
              is_admin: this.is_admin
            }
            axios.post('http://localhost:5000/registration', data).then(res => {                
                if (res.data.success)
                    this.$emit('registration')
                else
                    alert('Не удалось зарегистрироваться')
            });
        }        
    }
})