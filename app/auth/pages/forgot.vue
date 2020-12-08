<template>
    <form class="forgot-page">
        <h1 class="h3 mb-3">Şifremi Unuttum</h1>
        <p class="mb-4">E-posta adresinizi girerek şifre sıfırlama talebinde bulunabilirsiniz.</p>

        <!--Email-->
        <div class="form-group">
            <label for="username" class="sr-only">E-posta</label>
            <input v-model="username" type="email" id="username" class="form-control" placeholder="Kullanıcı adı" required>
        </div>

        <div class="form-group">
            <a href="#!" @click="go('auth.login')">Giriş Yap</a>
        </div>

        <!--Login Button-->
        <b-overlay
            :show="this.$store.state.loading"
            opacity="0.6"
            spinner-small
            spinner-variant="primary"
            class="d-inline-block btn-block"
            @hidden="this.$store.state.loading">
            <b-button variant="primary" class="btn-block" @click="sendPassword()">Şifremi Sıfırla</b-button>
        </b-overlay>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                username: ''
            }
        },
        methods: {
            sendPassword() {
                const {username, password, remember} = this
                this.$store.dispatch('attemptLogin', {username, password, remember})
            }
        }
    }
</script>
