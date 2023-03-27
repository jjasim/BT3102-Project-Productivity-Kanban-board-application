<template>
    <button class="signup-btn" type="button" @click="signup">Sign Up</button>
</template>

<script>
export default {
    methods: {
        signup() {
            this.$router.push("/signup");
        }
    }

}
</script>

<style scoped>
.signup-btn {
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
