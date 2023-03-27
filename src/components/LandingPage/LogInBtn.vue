<template>
    <button class="login-btn" type="button" @click.native="login">Log In</button>
</template>

<script>
export default {
    methods: {
        login() {
            this.$router.push('/login');
        }
    }
}

</script>

<style scoped>

.login-btn {
    width: 161px;
    height: 50px;
    color: white;
    font-size: 25px;
    font-style: Regular;
    font-family: Josefin Sans;
    font-weight: 400;
    background-color: #5e72eb;
    border-radius: 49px;
    border: 0;
    cursor: pointer;
}
</style>
