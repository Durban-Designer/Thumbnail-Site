<template>
  <div class="main">
    <div class="bannera">
      <div class="overlay"></div>
      <h1>Thumbnail<br/>Consulting</h1>
      <h2>Your Optimal Project<br/> Management Solution</h2>
    </div>
    <div class="iconbox">
      <div class="icona"></div>
      <p class="dev">Development</p>
      <div class="iconb"></div>
      <p class="opt">Optimization</p>
      <div class="iconc"></div>
      <p class="dep">Deployment</p>
    </div>
  <p>How can we help you today?</p>
  <div class="buttonBox">
  <button class="jumpToCloud" v-on:click="$router.push('/cloud')">"I need Cloud help!"</button>
  <button class="jumpToMobile" v-on:click="$router.push('/mobile')">"I need Mobile help!"</button>
</div>
    <div class="infobox">
      <p class="cola">Salesforce and CRM Experts are here to find the soultion that <b>best fits your company's model.</b></p>
      <p class="colb">We can help with your cloud storage issue, with <b>Amazon Web Services, MarkLogic, and a host of other technologies.</b></p>
      <p class="colc">Our uniquely talented dev teams can bring <b>ANY hybrid web application</b> you may need into reality.</p>
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

  h1 {
    position: absolute;
    color: #fff;
    text-align: right;
    z-index: 8;
    font-size: 2.3em;
    right: 0;
    margin-right: 10px;
    margin-top: 100px;
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
  .buttonBox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
  button {
    margin-left: 5%;
    text-align: center;
    width: 90%;
    height: 45px;
    background: @tnblue;
    border-radius: 7px;
    color: #fff;
    font-size: 1em;
}
.jumpToCloud {
  grid-column: 1;
}
.jumpToMobile {
  grid-column: 2;
}
  .bannera {
    background-image: url('../assets/bannera.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 7;
    width: 100%;
    height: 300px;
    position: absolute;
  }

  .overlay {
    background-color: #6998bf;
    opacity: 0.7;
    z-index: 8;
    width: 100%;
    height: 300px;
    position: absolute;
  }

  .infobox {
    width: 100%;
    height: 200px;
    color: @tnblue;
    margin-top: 0px;
    text-align: center;
    font-size: .5em;
  }

  .iconbox {
    width: 100%;
    height: 200px;
    display: grid;
    margin-top: 300px;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 100px 100px;
    margin-left: 0;
    background-color: @tnblue;

  }

  .dev {
    grid-row: 1;
    grid-column: 1;
    font-size: .8em;
    color: white;
    line-height: 150px;
  }

  .opt {
    grid-row: 2;
    grid-column: 2;
    font-size: .8em;
    color: white;
    line-height: 50px;
  }

  .dep {
    grid-row: 1;
    grid-column: 3;
    font-size: .8em;
    color: white;
    line-height: 150px;
  }

  .icona {
    background-image: url('../assets/development_Icon.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 100%;
    height: 100%;
    z-index: 4;
    grid-column: 1;
    grid-row: 2;
  }

  .iconb {
    background-image: url('../assets/optimization_Icon.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 100%;
    height: 100%;
    z-index: 4;
    grid-column: 2;

  }

  .iconc {
    background-image: url('../assets/Deployment_Icon.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
    z-index: 4;
    grid-column: 3;
    grid-row: 2;
  }

  p {
    text-align: center;
    color: @tnblue;
  }
  .cola {
    margin-top: 35px;
  }

  @media (min-width: 400px) {
    .dev {
      font-size: 1em;
    }
    .opt {
      font-size: 1em;
    }
    .dep {
      font-size: 1em;
    }
  }

  .infobox {
    position: absolute;
    width: 100%;
    height: 200px;
    color: @tnblue;
    text-align: center;
    font-size: 1em;
  }
  @media (min-width: 1000px) {
    p {
      font-size: 1.5em;
    }
  }
</style>
