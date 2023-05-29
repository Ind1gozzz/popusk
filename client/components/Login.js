app.component('login-form', {
    props:{
        show: {
            required: true,
            type: Boolean,
        }
    },
    template:
    /* HTML */
    `
    <div v-if="this.show"  >
        <form class="login" @submit.prevent="login" id="auth-block">
        <h2>Sign in</h2>
        <label>Email</label>
        <div>
            <input required v-model="email" type="email" placeholder="Name"/>
        </div>
        <label>Password</label>
        <div>
            <input required v-model="password" type="password" placeholder="Password"/>
        </div>
        <button type="submit">Login</button>
        </form>
    </div>
    `,
    data() {
        return {
          email : "",
          password : ""
        }
    },
    methods: {
        login: function () {
            let data = {                
                email: this.email,
                password: this.password,                
            }
            axios.post('http://localhost:5000/authorization', data).then(res => {
                if (res.data.success)
                    this.$emit('authorization')
                else
                    alert('Не удалось авторизироваться')
            });
        }
    }
})