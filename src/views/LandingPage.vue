<template>
    <div class="header">
        <h1 class="logo">WorkWise</h1>
        <div class="buttons">
            <div class="login">
                <button class="login-btn" type="button" @click.prevent="goToLogin">Log In</button>
            </div>
            <div class ="signup">
                <button class="signup-btn" type="button" @click.prevent="goToSignUp">Sign Up</button>
            </div>
        </div>

    </div>
    <v-carousel cycle :show-arrows="false" hide-delimiters interval="3000" height="680px">
        <v-carousel-item 
            v-for="(image, i) in images" 
            :key="i"
            eager
            >
            <v-img :src="image.src" cover eager/>
        </v-carousel-item>
    </v-carousel>
    
    <div class="words">
        <p class="typed">Work well, Work wise.</p>
    </div>

    <div class="text">
        <span>Join over 1000 teams worldwide using WorkWise</span>
    </div>
    

    <div class="logos">
        <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8f656c72-64a4-4323-8f4f-324c3d4c8e18/70b0da49-6b16-4d21-a585-f5919d6cdd0e?org_if_sml=16743"
            alt="GoogleLogo1281"
            class="google"
            id="brand"
            />
            <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8f656c72-64a4-4323-8f4f-324c3d4c8e18/fa0924b3-3a3f-4b86-930f-60f021510220?org_if_sml=14579"
            alt="NotionLogo1281"
            class="notion"
            id="brand"
            />
            <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8f656c72-64a4-4323-8f4f-324c3d4c8e18/c55d2b0b-7d64-4b46-875e-8056b367f989?org_if_sml=110425"
            alt="AirbnbLogo1281"
            class="airbnb"
            id="brand"
            />
            <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8f656c72-64a4-4323-8f4f-324c3d4c8e18/c06d3cc8-2bae-4ecf-8bb3-1cdb92ca3530?org_if_sml=15047"
            alt="MetaLogo1282"
            class="meta"
            id="brand"
            />
            <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8f656c72-64a4-4323-8f4f-324c3d4c8e18/b732f872-ff6c-4739-a136-f8309b153dce?org_if_sml=16681"
            alt="TiktokLogo1282"
            class="tiktok"
            id="brand"
            />
    </div>

    <div class="bottom">
        <div class="description">
        <p> We provide a solution to your productivity woes by incorporating useful features such as a Kanban Board, Collaborative Calendar, Analytics Dashboard and a Reward System all into one simple application.</p>
        <div class="signup2">
            <SignUpBtn/>
        </div>
        </div>
        
        <div class="productive">
            <img src="@/assets/LP/Picture4.jpg" id="image"/>
        </div>
    </div>
        

</template>

<script>
import SignUpBtn from "../components/LandingPage/SignUpBtn.vue"

export default {
    components : {
        SignUpBtn
    },

    data () {
      return {
        images: [
          {
            src: '../src/assets/LP/Picture1.jpg',
          },
          {
            src: '../src/assets/LP/Picture2.jpg',
          },
          {
            src: '../src/assets/LP/Picture3.jpg',
          }
        ]
      }
    },
    methods: {
        goToLogin() {
            this.$router.push('/login')
        },
        goToSignUp() {
            this.$router.push('/signup')
        }
    }
}

</script>


<style type="text/css">
body { 
    margin: 0;
    padding: 0;
}
</style>

<style scoped>
/* Header */
.header {
    background-color: rgba(19, 13, 111, 1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
}

.buttons {
    display: flex;
    padding-top: 40px;
    gap: 10px;
    margin-right: 10px;
}
.logo {
    color: rgba(254,193,149,1);
    font-size: 50px;
    font-style: Regular;
    font-family: Yeseva One;
    font-weight: 400;
    padding: 0px 0px 0px 40px;
}
button {
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

button:hover {
    background-color: #000d59;;
}

/* Carousel Component */
.words {
    display: grid;
    font-style: Regular;
    font-family: Josefin Sans;
    font-size: 70px;
    place-items: center;
    width: 670px;
    position: absolute;
    top: 450px;
    left: 100px;
    color: white;
}

.typed {
    overflow: hidden;
    white-space: nowrap;
    width: 0;
    animation: typing 1.5s steps(30, end) forwards, blinking 1s infinite;
    border-right: 2px solid;
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

@keyframes blinking {
    0% {border-right-color: transparent}
    50% {border-right-color: white}
    100% {border-right-color: transparent}
}

/* Brand Logos */
.logos {
    text-align: center;
    background-color: rgba(19, 13, 111, 1);
    padding-bottom: 50px;
}

#brand {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    padding: 15px;
}
    .text {
        color: rgb(254,193,149,1);
        font-size: 50px;
        font-style: Regular;
        font-family: Josefin Sans;
        font-weight: 900;
        text-align: center;
        padding: 50px 0px 10px 0px;
        background-color: rgba(19, 13, 111, 1);
    }

/* Description */

.bottom {
    height: 420px;
}
.description {
    color: black;
    font-size: 30px;
    font-style: Regular;
    font-family: Josefin Sans;
    font-weight: 400px;
    text-align: left;
    float: left;
    width: 47%;
    padding: 70px 20px 0px 30px;
}

.productive {
    float: left;
    width: 49%;
    height: 100%;
}

#image {
    width: 100%;
    height: 100%;
}

.signup2 {
    padding: 40px 0px 50px 250px;
}
</style>
