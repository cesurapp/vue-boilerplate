<template>
    <transition
        name="custom-classes-transitions"
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft absolute">
        <div class="auth-page">
            <img class="mb-4" src="/tedas-logo-siyah.png" height="56" alt="Tedaş Bakım">
            <router-view></router-view>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'Auth'
    }
</script>
<style lang="scss">
    .auth-page {
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        -ms-flex-align: center;
        align-items: center;
        justify-content: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;

        width: 100%;
        height: 100%;
        margin: auto;

        .checkbox {
            font-weight: 400;
        }

        .form-control {
            position: relative;
            box-sizing: border-box;
            height: auto;
            padding: 10px 14px;

            &:focus {
                z-index: 2;
            }
        }

        form {
            background: #FFF;
            border: 1px solid rgba(0, 0, 0, .1);
            padding: 30px;
            border-radius: 5px;
            min-width: 310px;
            max-width: 380px;
        }
    }
</style>
