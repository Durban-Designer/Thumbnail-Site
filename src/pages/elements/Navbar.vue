<template>
  <div class="main">
    <div class="navbar">
      <div v-bind:class="nvLogic" v-on:click="navToggle"></div>
      <div v-bind:class="navpaneLogic">
        <button class="home" v-on:click="navToggle(); $router.push('/')">Home</button>
        <button class="cloud" v-on:click="navToggle(); $router.push('/cloud')">Cloud</button>
        <button class="mobile" v-on:click="navToggle(); $router.push('/mobile')">Mobile</button>
        <button class="contact" v-on:click="navToggle(); $router.push('/contact')">Contact</button>
        <button class="blog" v-on:click="navToggle(); $router.push('/blog')">Blog</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  created () {
    let vue = this
    function toggleShow () {
      if (vue.show === 0) {
        vue.show = 1
      } else if (vue.show === 1) {
        vue.show = 2
      } else if (vue.show === 2) {
        vue.show = 3
      } else if (vue.show === 3) {
        vue.show = 4
      } else if (vue.show === 4) {
        vue.show = 5
      } else if (vue.show === 5) {
        vue.show = 0
      }
    }
    setInterval(toggleShow, 4000)
  },
  computed: {
    nvLogic: function () {
      return {
        nv: true,
        navButtonAnimation: this.isToggled,
        navButtonAnimationExit: !this.isToggled && !this.first
      }
    },
    navpaneLogic: function () {
      return {
        navpane: this.first,
        navpaneAnimation: this.isToggled,
        navpaneAnimationExit: !this.isToggled && !this.first
      }
    }
  },
  data () {
    return {
      toggled: false,
      isToggled: false,
      first: true
    }
  },
  methods: {
    navToggle: function () {
      // Nav button functionality
      if (window.innerWidth < 700) {
        if (this.toggled === false) {
          this.toggled = true
          this.isToggled = true
          this.first = false
        } else if (this.toggled === true) {
          this.toggled = false
          this.isToggled = false
        }
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped lang='less'>
  @tnblue: #2D587C;
  @base-font: 'Montserrat', sans-serif;

  .main {
    margin-top: none;
    background-color: #cacaca;
    height: 100%;
    width: 100%;
    font-family: @base-font;
  }

  .navpane {
    display: none;
    position: absolute;
    margin-top: none;
  }

  .navbar {
    margin-top: none;
  }

  .nv {
    position: fixed;
    margin-left: 10%;
    top: 5%;
    width: 80px;
    height: 80px;
    overflow: hidden;
    z-index: 10;
    background-repeat: no-repeat;
    background-image: url("../../assets/navbuttonAnimationColor.svg");
  }

  @keyframes navButtonAnimation {
    100% {background-position: -1440px;}
  }

  @keyframes navButtonAnimationReverse {
    0% {background-position: -1440px;}
    100% {background-position: 0px;}
  }

  @keyframes navpaneAnimation {
    0% { left: -220px; }
    50% { left: 0px;}
    100% { left: -20px;}
  }

  @keyframes navpaneAnimationReverse {
    0% { left: -20px;}
    50% { left: 0px;}
    100% { left: -220px; }
  }

  .navButtonAnimation {
    animation: navButtonAnimation .4s steps(18);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .navButtonAnimationExit {
    animation: navButtonAnimationReverse .4s steps(18);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .navpaneAnimation {
    position: fixed;
    animation: navpaneAnimation .5s steps(9);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    z-index: 9;
    width: 50%;
    height: 100%;
    background:rgba(45,88,124,0.85);
  }

  .navpaneAnimationExit {
    position: fixed;
    animation: navpaneAnimationReverse .5s steps(9);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    z-index: 9;
    width: 50%;
    height: 100%;
    background:rgba(45,88,124,0.85);
  }

  button {
    letter-spacing: 1.3px;
    -webkit-animation-duration: .25s;
    animation-duration: .25s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
    background: none;
    border: none;

  }

  button:hover {
    animation-name: bounce;
    -moz-animation-name: bounce;
  }

  .home {
    margin-left: 5%;
    margin-top: 80%;
    margin-bottom: 30px;
    font-size: 2em;
    text-align: center;
    width: 95%;
    color: #fff;
  }

  .cloud {
    margin-left: 5%;
    margin-bottom: 30px;
    font-size: 2em;
    text-align: center;
    width: 95%;
    color: #fff;
  }

  .mobile {
    margin-left: 5%;
    margin-bottom: 30px;
    font-size: 2em;
    text-align: center;
    width: 95%;
    color: #fff;
  }

  .contact {
    margin-left: 5%;
    font-size: 2em;
    text-align: center;
    margin-bottom: 30px;
    width: 95%;
    color: #fff;
  }

  .blog {
    margin-left: 5%;
    font-size: 2em;
    text-align: center;
    width: 95%;
    color: #fff;
  }

  @media (min-width: 700px) {

    button:hover {
      animation-name: bounce;
      -moz-animation-name: bounce;
    }

    @keyframes bounce {
      0%, 100% {
          -webkit-transform: translateY(0);
          -ms-transform:     translateY(0);
          transform:         translateY(0)
        }

        100% {
          -webkit-transform: translateY(-10px);
          -ms-transform:     translateY(-10px);
          transform:         translateY(-10px)
        }
      }

    .nv {
      display: none;
    }

    .navpane {
      display: inline;
      position: absolute;
      top: 0;
      width: 70%;
      height: 80px;
      z-index: 9;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      font-weight: bold;
    }

    .home {
      margin-left: 0;
      margin-top: 0;
      margin-bottom: 0;
      font-size: 1.5em;
      text-align: center;
      color: #fff;
    }

    .cloud {
      margin-left: 0;
      margin-bottom: 0;
      font-size: 1.5em;
      text-align: center;
      color: #fff;
    }

    .mobile {
      margin-left: 0;
      margin-bottom: 0;
      font-size: 1.5em;
      text-align: center;
      color: #fff;
    }

    .contact {
      margin-left: 0;
      font-size: 1.5em;
      text-align: center;
      margin-bottom: 0;
      color: #fff;
    }

    .blog {
      margin-left: 0;
      font-size: 1.5em;
      text-align: center;
      color: #fff;
    }

  }
  @media (max-width: 330px) {
    .home {
      font-size: 1.5em;
    }
    .cloud {
      font-size: 1.5em;
    }
    .mobile {
      font-size: 1.5em;
    }
    .contact {
      font-size: 1.5em;
    }
    .blog {
      font-size: 1.5em;
    }
    .nv {
      margin-left: 6%;
    }
  }
  @media (min-width: 400px) {
    .nv {
      margin-left: 11%;
    }
  }
</style>
