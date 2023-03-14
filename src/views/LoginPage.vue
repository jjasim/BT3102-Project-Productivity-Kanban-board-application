<template>
    <div id="screenfiller">
        <div class="login-container">
            <h2 id="login-statement">Log into your WorkWise account</h2>
            <form>
            <input 
                class="form-control" 
                type="email" 
                v-model="email" required placeholder="Email">
            <br><br>
            <input class="form-control" type="password" v-model="password" required placeholder="Password">
            <br><br>
            <button class="btn btn-primary" type="submit">Log In</button>
            </form>
            <div class="login-bottom">
                Forgot your password?
            </div>
            <div class="login-bottom">
                Dont have an account? Sign up today!
            </div>
        </div>        
    </div>

  </template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      // TODO: implement login logic
    },
  },
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

html, body {
    margin: 0;
    padding: 0;
}
#screenfiller {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    background-color: #130D6F;
    background-image: url("src/assets/ellipsis.png");
    background-size: 100% 100%;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    
}
.login-container {
    display: block;
    width: 345px;
    height: 438px;
    text-align:center;
    background: #FFFFFF;
    mix-blend-mode: normal;
    border-radius: 12px;
}
#login-statement {
    font-family: 'Yeseva One', cursive;
    color: #FF9190;
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 49px;
    text-align: center;
}
.form-control {
    width: 301px;
    height: 43px;
    border: 1px solid #9D9D9D;
    border-radius: 50px;
    line-height: normal;
}

input {
    text-indent: 10px;
}

::placeholder {
    font-family: 'Josefin Sans', sans-serif;
}

.btn {
    font-family: 'Josefin Sans', sans-serif;
    font-size: large;
    color: white;
    width: 136px;
    height: 43px;
    left: 652px;
    top: 640px;
    background: #5E72EB;
    border: #130D6F;
    border-radius: 49px;
}

.btn:hover {
    cursor: pointer;
}

.login-bottom {
    font-family: 'Josefin Sans', sans-serif;
    font-size: small;
    color: #FF9190;
    padding-top: 0.4rem;
}
</style>