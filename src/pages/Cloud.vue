<template>
  <div class="main">
    <div class="bannera"></div>
    <div class="overlay"></div>
    <div class="top">
      <h1>Cloud<br/>Services</h1>
      <h2>All of the benefits,<br/> None of the hassle.</h2>
    </div>
    <div class="professionals">
      <h3>While cloud platforms streamline a whole host of expenses and hassle,<br/> they also create a few issues best handled by professionals.</h3>
    </div>
    <div class="icons">
      <div class="salesforce"></div>
      <div class="amazon"></div>
    </div>
      <div class="infobox">
        <p class="cola">Need an application or custom engine that isn’t available on the App Exchange? <b>We can create it.</b></p>
        <p class="colb"><b>Optimization</b> for organizations who are trying to make Salesforce work better for their business processes.</p>
        <p class="colc">New setup, security, training, reports, and professional <b>guidance on best practices.</b></p>
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
  width: 100%;
  height: 100%;
  font-family: @base-font;
  position: absolute;
}

.bannera {
  background-image: url('../assets/cloud.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 7;
  width: 100%;
  height: 300px;
  position: absolute;
}

.overlay {
  background-color: #6998bf;
  opacity: 0.5;
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
  font-size: 2.5em;
  right: 0;
  margin-right: 3%;
}

h2 {
  position: absolute;
  color: #fff;
  text-align: right;
  z-index: 8;
  font-size: 1.8em;
  right: 0;
  margin-right: 10px;
  width: 100%;
  margin-top: 200px;
}

h3 {
  font-size: 1em;
  margin-top: 300px;
  width: 100%;
  height: 100px;
  background-color: @tnblue;
  color: #fff;
  line-height: 25px;
  padding-left: 10px;
  padding-right: 10px;
  border-top: solid 1px #194365;
}

.icons {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;

}

.salesforce {
  background-image: url('../assets/sf.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 200px;
}

.amazon {
  background-image: url('../assets/aws.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 200px;
}

p {
  margin-left: 5%;
  width: 90%;
  text-align: center;
}

.infobox {
  position: absolute;
  width: 100%;
  height: 300px;
  color: @tnblue;
  column-rule: 1px solid @tnblue;
  text-align: center;
  font-size: .2em;
  border-top: 1px solid @tnblue;
  padding-top: 5%;
}

@media (min-width: 700px) {
  .salesforce {
    background-size: contain;
    width: 35%;
    transform: scale(1.3, 1.3);
    margin-left: 7%;
  }

  .amazon {
    background-size: contain;
    width: 50%;
    height: 200px;
    margin-left: 50%;
    margin-top: -200px;
  }

  h3 {
    font-size: 1.5em;
  }

  p {
    font-size: 6em;
  }

  .colb {
    height: 60px;
  }

  h1 {
    margin-top: 100px;
  }
}
@media (min-width: 1000px) {
  .salesforce {
  }

  p {
    font-size: 8em;
    padding-top: 20px;
  }

  h3 {
    font-size: 2em;
  }

  h1 {
    margin-top: 10%;
  }
}
@media (min-width: 1400px) {
  .salesforce {
  }

  h1 {
    margin-top: 100px;
  }

  h3 {
    line-height: 40px;
  }

  p {
    font-size: 9em;
    line-height: 60px;
  }

  .colc {
    margin-top: 80px;
  }
}
</style>
