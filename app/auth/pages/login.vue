<template>
    <form class="login-page">
        <h1 class="h3 mb-3">Giriş Yap</h1>
        <p class="mb-4">Giriş bilgilerini doldurarak Bakım Takip Sistemine giriş yapabilirsiniz.</p>

        <!--Email-->
        <label for="username" class="sr-only">E-posta</label>
        <input v-model="username" type="email" id="username" class="form-control" placeholder="Kullanıcı adı" required>

        <!--Password-->
        <label for="password" class="sr-only">Şifre</label>
        <input v-model="password" type="password" id="password" class="form-control" placeholder="Şifre" required>

        <!--Beni Hatırla-->
        <div class="form-group d-flex justify-content-between mb-4">
            <b-form-checkbox v-model="remember">Beni Hatırla</b-form-checkbox>
            <a href="#" @click="go('auth.forgot')">Şifremi Unuttum</a>
        </div>

        <!--Login Button-->
        <b-overlay
            :show="this.$store.state.loading"
            opacity="0.6"
            spinner-small
            spinner-variant="primary"
            class="d-inline-block btn-block"
            @hidden="this.$store.state.loading">
            <b-button variant="primary" class="btn-block" @click="login()">Giriş Yap</b-button>
        </b-overlay>
    </form>
</template>
<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
                remember: false
            }
        },
        methods: {
            login() {
                const {username, password, remember} = this
                this.$store.dispatch('attemptLogin', {username, password, remember})
            }
        },
        created() {
           /* this.$http.get('/auth/login')
                .then((response) => {

                })*/

            this.$store.dispatch('setHead', {
                title: {
                    text: 'Giriş'
                }
            })
        }
    }
</script>
<style scoped>
    input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>
