<template>
  <div class="mobile-view">
    <h2>
        Sorry, this app is not supported on Mobile Devices
    </h2>
    <p>
        To use this app, please use a computer :>
    </p>
    <p>
        I wish you the bestest of days
    </p>
    <p>
        Hi Prof!
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
* {
    font-family: 'Josefin Sans', sans-serif;
    color: #FFFFFF;
}
html, body {
    margin: 0;
    padding: 0;
}
.mobile-view {
    display: flex;
    flex-direction: column;
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


</style>