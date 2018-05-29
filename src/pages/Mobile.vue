<template>
  <div class="main">
    <div class="mbanner"></div>
    <div class="overlay"></div>
    <h1>Mobile<br/>Development</h1>
    <h2>Cutting edge technologies,<br/> At your fingertips.</h2>
    <div class="mbody">
      <p class="mbody1"> We can refine that rough idea into a <b>smoothly-polished gem.</b> </p>
      <ul>
        <li class="mbody2"><b>Well Researched and Defined,</b> to ensure your success.</li>
        <li class="mbody2"><b>Unique in Design and Appearance,</b> because no one wants to look like everyone else.</li>
        <li class="mbody2"><b>Robustly Built,</b> utilizing the best and most appropriate technical solutions.</li>
        <li class="mbody2"><b>Of Superior Quality,</b> tested and ensured to work seamlessly from launch.</li>
      </ul>
    </div>
    <h3>Check out our new App <span>Trip Clock Mobile</span>! Available on the Google Play Store and iOS App Store!</h3>
    <div class="appShowcase">
    <a href='https://play.google.com/store/apps/details?id=tripclockmobile.thumbnail.com&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' class="playbutton"></a>
    <a href="https://itunes.apple.com/us/app/trip-clock-mobile/id1387377488?mt=8" class="apple"></a>
    <div class="tcscreen1"></div>
    <div class="tcscreen2"></div>
    <p>Simple and Effective Tools for Increased Productivity:
      Mileage Tracking, Clock Functionality, Data Analytics.
      Trip Clock Mobile is the Answer to All Your Mobile Employee Management Needs.</p>
  </div>
  </div>

</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'>
@tnblue: #2D587C;
@base-font: 'Montserrat', sans-serif;
.main {
  position: absolute;
  height: 100%;
  width: 100%;
  font-family: @base-font;
}
.mbanner {
  width: 100%;
  height: 300px;
  position: absolute;
  z-index: 7;
  background-image: url('../assets/mobile.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
.overlay {
  background-color: #6998bf;
  opacity: 0.6;
  z-index: 8;
  width: 100%;
  height: 300px;
  position: absolute;
}
h1 {
  position: absolute;
  color: #fff;
  text-align: right;
  z-index: 8;
  font-size: 2.4em;
  right: 0;
  margin-right: 3%;
  margin-top: 90px;
}
h2 {
  position: absolute;
  color: #fff;
  text-align: right;
  z-index: 8;
  font-size: 1.5em;
  right: 0;
  width: 100%;
  margin-top: 220px;
  margin-right: 3%;
}
h3 {
  margin-top: 650px;
  font-size: 1em;
  width: 100%;
  color: black;
  line-height: normal;
  text-align: center;
}
.mbody {
  text-align: center;
  position: absolute;
  z-index: 8;
  width: 100%;
  margin-top: 250px;
}

.mbody1 {
  font-size: 1.4em;
  font-family: @base-font;
  color: @tnblue;
}

.mbody2 {
  line-height: 30px;
  font-size: 0.75em;
  font-family: @base-font;
  color: @tnblue;
  list-style: none;
}

.appShowcase {
  margin-top: 0px;
  width: 100%;
  height: 700px;
  background-color: #751d1d;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 300px 300px;
}
.playbutton {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  background-image: url('../assets/playbutton.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 10%;
}
.apple {
  grid-column: 2;
  grid-row: 1;
  width: 80%;
  height: 100%;
  background-image: url('../assets/apple.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 10%;
  margin-left: 5%;
}
.tcscreen1 {
  grid-column: 1;
  grid-row: 2;
  width: 100%;
  height: 100%;
  background-image: url('../assets/tcscreen1.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 10%;
}
.tcscreen2 {
  grid-column: 2;
  grid-row: 2;
  width: 100%;
  height: 100%;
  background-image: url('../assets/tcscreen2.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 10%;
}
p {
  font-size: 1.4em;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 3;
  margin-top: 100px;
  color: white;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
}
span {
  color: red;
}
@media only screen and (min-width: 700px) {
  h1 {
    margin-top: 100px;
    font-size: 2.5em;
  }
  h2 {
    font-size: 1.8em;
    height: 40px;
    margin-top: 200px;
  }
  .mbanner {
    background-image: url('../assets/mobile2.jpg');
  }
  .main {
    height: 100%;
    width: 100%;
    font-family: @base-font;
  }
  .mbanner {
    width: 100%;
    height: 300px;
    position: absolute;
    z-index: 7;
    background-color: #989898;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .mbody {
    position: absolute;
    width: 94%;
    height: 100%;
    margin-top: 250px;
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 10px;
  }
  .mbody1 {
    line-height: 1em;
    font-size: 1.7em;
  }
  .mbody2 {
    line-height: 2em;
    font-size: 1em;
  }
  .apple {
    height: 70%;
    margin-top: 50px;
  }
}

@media only screen and (min-width:1000px) {
  .main {
    height: 100%;
    width: 100%;
    font-family: @base-font;
  }
  .mbody {
    position: absolute;
    width: 90%;
    height: 100%;
    margin-top: 250px;
    margin-left: 2%;
    padding-left: 2%;
    margin-right: 0%;
    margin-bottom: 20px;
  }
  h2 {
    color: #fff;
    font-size: 1.75em;
  }
  .mbody2 {
    font-size: 1em;
  }
  .appShowcase {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .tcscreen1 {
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .tcscreen2 {
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .apple {
    grid-column: 3;
    grid-row: 1;
    height: 100%;
    width: 90%;
  }
  .playbutton {
    grid-column: 3;
    grid-row: 2;
  }
}
</style>
