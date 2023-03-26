<template>
  <div class="home-container">
    <div class="home-landing-page">
      <div class="home-bg">
        <img
          src="src/assets/landingpage/ellipse1"
          alt="Ellipse1"
          class="home-ellipse1"
        />
        <img
          src="src/assets/landingpage/ellipse2"
          alt="Ellipse2"
          class="home-ellipse2"
        />
      </div>
      <div class="home-header">
        <!-- <img
          src='../assets/ellipsis'
          alt="loginbtn"
          class="home-loginbg"
        /> -->
        <span class="home-text"><span>Workwise</span></span>
        <button class="signup-btn" type="button" @click="signup">Sign Up</button>
        <button class="home-text04" type="button" @click="login">Log In</button>
      </div>
      <div class="home-big">
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8f656c72-64a4-4323-8f4f-324c3d4c8e18/88254ae9-d4df-4942-a2fb-be13053077cc?org_if_sml=1195325"
          alt="IMAGE2004i305008Pm005c2026719"
          class="home-image2004i30500-pm005c202"
        />
        <span class="home-text06">
          <span class="home-text07">
            Stay on task with
            <span v-html="raw3jle"></span>
          </span>
          <span>WorkWise</span>
        </span>
        <span class="home-text09">
          <span class="home-text10">
            Work in a
            <!-- <span v-html="raw4ewr"></span> -->
          </span>
          <span class="home-text11">team?</span>
        </span>
        <button class="signup-btn2" type="button" @click="signup">Sign Up</button>
      </div>
      <div class="home-frame2nd-big">
        <span class="home-text14">
          <span class="home-text15">
            What is
            <span v-html="rawj2fl"></span>
          </span>
          <span>WorkWise?</span>
        </span>
        <span class="home-text17">
          <span>
            We are a platform that breaks down your team projects into simple task
            boards to increase your productivity and get rid of redundant tasks!
          </span>
        </span>
        <button class="signup-btn3" type="button" @click="signup">Sign Up</button>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8f656c72-64a4-4323-8f4f-324c3d4c8e18/17b8e500-725f-4214-9305-380cf007bd36?org_if_sml=185045"
          alt="IMAGE2004i305008Pm005c2021284"
          class="home-image2004i30500-pm005c2021"
        />
      </div>
      <div class="home-logos">
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8f656c72-64a4-4323-8f4f-324c3d4c8e18/70b0da49-6b16-4d21-a585-f5919d6cdd0e?org_if_sml=16743"
          alt="GoogleLogo1281"
          class="home-google-logo"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8f656c72-64a4-4323-8f4f-324c3d4c8e18/fa0924b3-3a3f-4b86-930f-60f021510220?org_if_sml=14579"
          alt="NotionLogo1281"
          class="home-notion-logo"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8f656c72-64a4-4323-8f4f-324c3d4c8e18/c55d2b0b-7d64-4b46-875e-8056b367f989?org_if_sml=110425"
          alt="AirbnbLogo1281"
          class="home-airbnb-logo"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8f656c72-64a4-4323-8f4f-324c3d4c8e18/c06d3cc8-2bae-4ecf-8bb3-1cdb92ca3530?org_if_sml=15047"
          alt="MetaLogo1282"
          class="home-meta-logo"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8f656c72-64a4-4323-8f4f-324c3d4c8e18/b732f872-ff6c-4739-a136-f8309b153dce?org_if_sml=16681"
          alt="TiktokLogo1282"
          class="home-tiktok-logo"
        />
        <span class="home-text21">
          <span>Join over 1000 teams worldwide using WorkWise</span>
        </span>
      </div>
      <div class="home-bg1">
        <div class="home-frame12">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8f656c72-64a4-4323-8f4f-324c3d4c8e18/00954f45-5175-4556-9a38-fdb2b8ca95ee?org_if_sml=1321357"
            alt="Ellipse11286"
            class="home-ellipse12"
          />
        </div>
        <div class="home-frame11">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8f656c72-64a4-4323-8f4f-324c3d4c8e18/0f44dea3-928e-4485-a2ac-7b5def2d5792?org_if_sml=1187766"
            alt="Ellipse11286"
            class="home-ellipse13"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {},
  data() {
    return {
      raw3jle: ' ',
      raw4ewr: ' ',
      rawj2fl: ' ',
    }
  },
  methods: {
    login() {
      this.$router.push('/login');
    },

    signup() {
      this.$router.push('/signup');
    }
  }
}
</script>

<style scoped>
html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
}

/* .home-container {
  width: auto;
  display: flex;
  overflow-x: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;

} */
.home-landing-page {
  width: 100%;
  height: 1800px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  background-color: rgba(19, 13, 111, 1);
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}
.home-bg {
  top: 0px;
  left: 0x;
  width: 100%;
  height: auto;
  display: flex;
  padding: 0;
  margin: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
/* .home-ellipse1 {
  top: 1621.5916748046875px;
  left: 0px;
  width: 732px;
  height: 751px;
  position: absolute;
  border-color: transparent;
} */
/* .home-ellipse2 {
  top: -2.2737367544323206e-13px;
  left: 1489.901123046875px;
  width: 992px;
  height: 970px;
  position: absolute;
  border-color: transparent;
} */
.home-header {
  top: 0px;
  left: 0px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 0;
  margin: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
/* .home-loginbg {
  top: 13px;
  left: 1293.381103515625px;
  width: 129px;
  height: 38px;
  position: absolute;
  border-color: transparent;
  border-radius: 49px;
} */
.home-text {
  top: 25px;
  color: rgba(254, 193, 149, 1);
  width: 367px;
  height: auto;
  position: absolute;
  font-size: 50px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Yeseva One;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.signup-btn{
  top: 25px;
  left: 1390px;
  color: rgba(255, 255, 255, 1);
  width: 161px;
  height: 50px;
  position: absolute;
  font-size: 25px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
  background-color: #5e72eb;
  border-radius: 49px;
  border: 0;
  padding-left: 30px;
  padding-right: 30px;
  padding: 0px;
  min-height: 40px;
  box-sizing: border-box;
}

.home-text04 {
  top: 25px;
  left: 1200px;
  color: rgba(255, 255, 255, 1);
  width: 161px;
  height: 50px;
  position: absolute;
  font-size: 25px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
  background-color: #5e72eb;
  border-radius: 49px;
  border: 0;
  padding-left: 30px;
  padding-right: 30px;
  padding: 0px;
  min-height: 40px;
  box-sizing: border-box;
}
.home-big {
  top: 92px;
  left: 0px;
  width: 100%;
  height: 708px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 1);
}
.home-image2004i30500-pm005c202 {
  top: 108px;
  left: 250px;
  width: 1000px;
  height: 600px;
  position: absolute;
  border-color: transparent;
}
.home-text06 {
  top: 226px;
  left: 1350px;
  color: rgba(0, 0, 0, 1);
  width: 296px;
  height: auto;
  position: absolute;
  font-size: 65px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
/* .home-text07 {
  color: rgba(0, 0, 0, 1);
} */
.home-text09 {
  top: 74px;
  left: 300px;
  color: rgba(0, 0, 0, 1);
  width: 740px;
  height: auto;
  position: absolute;
  font-size: 80px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
/* .home-text10 {
  color: rgba(0, 0, 0, 1);
} */
.home-text11 {
  color: rgba(255, 145, 144, 1);
}
.home-loginbg1 {
  top: 435px;
  left: 1400px;
  width: 161px;
  height: 50px;
  position: absolute;
  border-color: transparent;
  border-radius: 49px;
}
.signup-btn2 {
  top: 448px;
  left: 1395px;
  color: rgba(255, 255, 255, 1);
  width: 161px;
  height: 50px;
  position: absolute;
  font-size: 25px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
  background-color: #5e72eb;
  border-radius: 49px;
  border: 0;
  padding-left: 30px;
  padding-right: 30px;
  padding: 0px;
  min-height: 40px;
  box-sizing: border-box;
}
.home-frame2nd-big {
  top: 1148px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 1);
}
.home-text14 {
  top: 147.43661499023438px;
  left: 350px;
  color: rgba(0, 0, 0, 1);
  width: 740px;
  height: auto;
  position: absolute;
  font-size: 80px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
/* .home-text15 {
  color: rgba(0, 0, 0, 1);
} */
.home-text17 {
  top: 255px;
  left: 400px;
  color: rgba(0, 0, 0, 1);
  width: 609px;
  height: auto;
  position: absolute;
  font-size: 40px;
  align-self: auto;
  font-style: Light;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 300;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
/* .home-loginbg2 {
  top: 496px;
  left: 600px;
  width: 188px;
  height: 52px;
  position: absolute;
  border-color: transparent;
  border-radius: 49px;
} */
.signup-btn3 {
  top: 30%;
  left: 50%;
  color: rgba(255, 255, 255, 1);
  width: 161px;
  height: 50px;
  position: relative;
  font-size: 25px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
  background-color: #5e72eb;
  border-radius: 49px;
  border: 0;
  padding-left: 30px;
  padding-right: 30px;
  padding: 0px;
  min-height: 40px;
  box-sizing: border-box;
}
.home-image2004i30500-pm005c2021 {
  top: 106px;
  left: 1200px;
  width: 621px;
  height: 390px;
  position: absolute;
  border-color: transparent;
}
.home-logos {
  top: 854px;
  left: 9px;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
  pointer-events: none;
}
.home-google-logo {
  top: 93px;
  left: 450px;
  width: 125px;
  height: 125px;
  position: absolute;
  border-color: transparent;
}
.home-notion-logo {
  top: 93px;
  left: 650px;
  width: 125px;
  height: 125px;
  position: absolute;
  border-color: transparent;
}
.home-airbnb-logo {
  top: 93px;
  left: 850px;
  width: 130px;
  height: 147px;
  position: absolute;
  border-color: transparent;
}
.home-meta-logo {
  top: 113px;
  left: 1050px;
  width: 150px;
  height: 84px;
  position: absolute;
  border-color: transparent;
}
.home-tiktok-logo {
  top: 82px;
  left: 1250px;
  width: 125px;
  height: 146px;
  position: absolute;
  border-color: transparent;
}
.home-text21 {
  text-align: center;
  color: rgba(255, 255, 255, 1);
  width: 100%;
  height: auto;
  position: absolute;
  font-size: 55px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
/* .home-bg1 { */
  /* top: 1478px;
  left: 1300px; */
  /* width: 100%;
  height: 100%; */
  /* display: flex; */
  /* padding: 0; */
  /* position: absolute; */
  /* align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1; */
  /* border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px; */
  /* margin-bottom: 0; */
  /* flex-direction: row; */
  /* justify-content: flex-start; */
  /* background-color: transparent; */
/* } */
/* .home-frame12 {
  top: -550px;
  left: -520px;
  display: flex;
  padding: 0px;
  margin: 0px;
  position: absolute;
  align-items: flex-start;
  border-color: transparent; 
  flex-direction: column;
} */
.home-ellipse12 {
  top: 800px;
  left: 1408px;
  position: absolute;
  padding: 0;
  margin: 0;
  /* width: 150px;
  height: 1200px; */
  /* position: relative; */
  /* border-color: transparent; */
}
/* .home-frame11 {
  top: -108px;
  left: -1500px;
  display: flex;
  padding: 10px;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
} */
.home-ellipse13 {
  top: 1500px;
  left: 0px;
  position: absolute;
  width: 500px;
  margin: 0;
  padding: 0;
  /* height: 445px; */
  /* position: relative;
  border-color: transparent; */
}
</style>