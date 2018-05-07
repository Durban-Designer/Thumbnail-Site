<template>
  <div class="main">
    <div class="bannera">
      <div class="overlay"></div>
      <h1>Thumbnail<br/>Consulting</h1>
      <h2>Your Optimal Project<br/> Management Solution</h2>
    </div>
    <div class="iconbox">
      <div class="icona"></div>
      <div class="iconb"></div>
      <div class="iconc"></div>
    </div>
    <div class="label">
    <p class="dev">Development</p>
    <p class="opt">Optimization</p>
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
    position: absolute;
    width: 100%;
    height: 200px;
    color: @tnblue;
    margin-top: 0px;
    text-align: center;
    font-size: .5em;
  }

  .iconbox {
    position: absolute;
    width: 100%;
    height: 100px;
    display: grid;
    margin-top: 300px;
    grid-template-columns: 1fr 100px 1fr 100px 1fr 100px 1fr;
    margin-left: 0;
    background-color: @tnblue;

  }
  .label {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    font-weight: bold;
  }

  .dev {
    margin-top: 400px;
    font-size: .8em;
  }

  .opt {
    margin-top: 400px;
    font-size: .8em;
  }

  .dep {
    margin-top: 400px;
    font-size: .8em;
  }

  .icona {
    background-image: url('../assets/development_Icon.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
    z-index: 4;
    grid-column: 2;
  }

  .iconb {
    background-image: url('../assets/optimization_Icon.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
    z-index: 4;
    grid-column: 4;

  }

  .iconc {
    background-image: url('../assets/Deployment_Icon.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
    z-index: 4;
    grid-column: 6;
  }

  p {
    text-align: center;
    color: @tnblue;
  }
  .cola {
    margin-top: 35px;
  }

  @media (min-width: 400px) {
    .icona {
      margin-left: 10%;
    }
    .iconb {
      margin-left: 10%;
    }
    .iconc {
      margin-left: 10%;
    }
    .icona {
      margin-left: 10%;
    }
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
    margin-top: 450px;
    text-align: center;
    font-size: 1em;
  }
</style>
