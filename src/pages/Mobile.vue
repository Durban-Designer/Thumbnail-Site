<template>
  <div class="main">
    <div class="mbanner"></div>
    <div class="overlay"></div>
    <h1>Mobile<br/>Development</h1>
    <h2>Cutting edge technologies, At your fingertips.</h2>
    <div class="mbody">
      <p class="mbody1"> We can refine that rough idea into a <b>smoothly-polished gem.</b> </p>
      <ul>
        <li class="mbody2"><b>Well Researched and Defined,</b> to ensure your success.</li>
        <li class="mbody2"><b>Unique in Design and Appearance,</b> because no one wants to look like everyone else.</li>
        <li class="mbody2"><b>Robustly Built,</b> utilizing the best and most appropriate technical solutions.</li>
        <li class="mbody2"><b>Of Superior Quality,</b> tested and ensured to work seamlessly from launch.</li>
      </ul>
    </div>
    <h3>Check out our most recent App! Available on the Google Play Store and iOS App Store!</h3>
    <div class="appShowcase">
    <div class="tcscreen1"></div>
    <p class="tx1">Simple and Effective Tools for Increased Productivity</p>
    <div class="tcscreen2"></div>
    <p class="tx2">Mileage Tracking, Clock Functionality, Data and Productivity Analytics</p>
    <div class="tcscreen3"></div>
    <p class="tx3">Time Crunch is the Answer to All Your Mobile Employee Management Needs</p>
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
  margin-top: 15%;
}
h2 {
  position: absolute;
  color: #fff;
  text-align: center;
  z-index: 8;
  font-size: 1.5em;
  right: 0;
  width: 100%;
  margin-top: 240px;
}
h3 {
  margin-top: 500px;
  font-size: 1em;
  width: 90%;
  color: #c22227;
  margin-left: 5%;
}
.mbody {
  position: absolute;
  z-index: 8;
  width: 94%;
  margin-top: 300px;
  margin-left: 3%;
  padding-top: 2%;
}

.mbody1 {
  line-height: 15px;
  font-size: 0.8em;
  font-family: @base-font;
  color: @tnblue;
}

.mbody2 {
  line-height: 15px;
  font-size: 0.75em;
  font-family: @base-font;
  color: @tnblue;
}

.appShowcase {
  margin-top: 0px;
  width: 100%;
  height: 400px;
  background-color: #c22227;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px;

}
.tcscreen1 {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  margin-left: 5%;
  background-image: url('../assets/tcscreen1.png');
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 10%;
}
.tx1 {
  grid-column: 1;
  grid-row: 2;
  color: #fff;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 5%;

  font-size: .8em;
}
.tcscreen2 {
  grid-column: 2;
  grid-row: 2;
  width: 100%;
  height: 100%;
  margin-left: 5%;
  background-image: url('../assets/tcscreen2.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.tx2 {
  grid-column: 2;
  grid-row: 1;
  color: #fff;
  font-size: .8em;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
}
.tcscreen3 {
  grid-column: 3;
  grid-row: 1;
  width: 100%;
  height: 100%;
  margin-left: 5%;
  background-image: url('../assets/tcscreen3.png');
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 10%;
}
.tx3 {
  grid-column: 3;
  grid-row: 2;
  color: #fff;
  font-size: .8em;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 5%;
}
@media (min-width: 400px) {

@media only screen and (min-width: 700px) {
  h1 {
    margin-top: 10%;
    font-size: 2.5em;
  }
  h2 {
    font-size: 1.8em;
    height: 40px;
    margin-top: 240px;
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
    margin-top: 300px;
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 10px;
  }
  .mbody1 {
    line-height: 20px;
    font-size: 1em;
  }
  .mbody2 {
    line-height: 20px;
    font-size: 0.9em;
  }
}

@media only screen and (min-width:1000px) {
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
    width: 73%;
    height: 100%;
    margin-top: 210px;
    margin-left: 2%;
    padding-left: 2%;
    margin-right: 0%;
    margin-bottom: 10px;
  }
  h1 {
    color: #fff;
    text-align: right;
    font-size: 2.5em;
    margin-right: 10px;
  }
  h2 {
    color: #fff;
    text-align: center;
    font-size: 1.75em;
  }
}
@media only screen and (min-width:1000px) {
  .main {
    height: 100%;
    width: 100%;
    font-family: @base-font;
  }
  .mbanner {
    width: 100%;
    height: 500px;
    position: absolute;
    z-index: 7;
    background-color: #989898;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .overlay {
    height: 500px;
  }
  .mbody {
    width: 96%;
    height: 100%;
    margin-top: 520px;
    margin-left: 2%;
    padding-left: 2%;
    margin-right: 0%;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 3.5em;
    margin-right: 10px;
  }
  h2 {
    font-size: 2.5em;
    margin-top: 425px;
  }
  .mbody1 {
    line-height: 40px;
    font-size: 2em;
    padding-top: 25px;
    padding-bottom: 10px;
  }
  .mbody2 {
    line-height: 40px;
    font-size: 1.75em;
    padding-bottom: 10px;
  }

}
@media only screen and (min-width:2000px) {
  .main {
    height: 100%;
    width: 100%;
    font-family: @base-font;
  }
  .mbanner {
    width: 100%;
    height: 1000px;
    position: absolute;
    z-index: 7;
    background-color: #989898;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .overlay {
    height: 1000px;
  }
  .mbody {
    width: 96%;
    height: 100%;
    margin-top: 1050px;
    margin-left: 2%;
    padding-left: 2%;
    margin-right: 0%;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 7em;
    margin-right: 10px;
  }
  h2 {
    font-size: 5em;
    margin-top: 850px;
  }
  .mbody1 {
    line-height: 80px;
    font-size: 5em;
    padding-top: 25px;
    padding-bottom: 30px;
  }
  .mbody2 {
    line-height: 80px;
    font-size: 4.5em;
    padding-bottom: 30px;
  }
}
}
</style>
