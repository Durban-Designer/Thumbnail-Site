<template>
  <div class="main">
    <div class="banner"></div>
    <div class="overlay"></div>
    <h1>Contact<br/>Us</h1>
    <h2>We Look Forward To Hearing from You!</h2>
      <div class="contactBox">
        <input class="name" v-model="name" placeholder="Name">
        <input class="email" v-model="email" placeholder="Email">
        <input class="phone" v-model="phone" placeholder="Phone">
        <textarea class="message" v-model="message" placeholder="Message"></textarea>
        <button v-on:click="send" class="send">SEND</button>
      </div>
    <br/>
    <p class="number">(480)-734-9637</p>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    send () {
    }
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

.banner {
  width: 100%;
  height: 300px;
  position: absolute;
  z-index: 7;
  background-image: url('../assets/contact.jpg');
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
  font-size: 2.5em;
  right: 0;
  margin-right: 10px;
}

h2 {
  position: absolute;
  color: #fff;
  text-align: right;
  z-index: 8;
  font-size: 1.9em;
  right: 0;
  margin-right: 10px;
  width: 100%;
  margin-top: 200px;
}

.contactBox {
  margin-top: 350px;
  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(7, 30px);
}

.name {
  grid-column-start: 2;
  grid-column-end: 10;
  grid-row-start: 1;
  grid-row-end: 1;
  border: solid 2px @tnblue;
  margin-bottom: 1px;
  padding-left: 5px;
}

.email {
  grid-column-start: 2;
  grid-column-end: 10;
  grid-row-start: 2;
  grid-row-end: 2;
  border: solid 2px @tnblue;
  margin-bottom: 1px;
  padding-left: 5px;
}

.phone {
  grid-column-start: 2;
  grid-column-end: 10;
  grid-row-start: 3;
  grid-row-end: 3;
  border: solid 2px @tnblue;
  margin-bottom: 1px;
  padding-left: 5px;
}

.message {
  grid-column-start: 2;
  grid-column-end: 10;
  grid-row-start: 4;
  grid-row-end: 6;
  border: solid 2px @tnblue;
  padding-left: 5px;
  resize: none;
}

.send {
  grid-column-start: 3;
  grid-column-end: 9;
  grid-row-start: 7;
  grid-row-end: 7;
  border: solid 2px @tnblue;
  background-color: @tnblue;
  color: #fff;
  line-height: 25px;
  text-align: center;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: @tnblue;
}

.text1 {
  text-align: center;
  color: @tnblue;
  font-size: 2em;
}

.text2 {
  text-align: center;
  color: @tnblue;
  font-size: 1.25em;
}

.number {
  text-align: center;
  color: @tnblue;
  font-size: 1.75em;
}

@media only screen and (min-width:500px) {

  .contactBox {

    display: grid;
    grid-template-columns: repeat(20, 5%);
    grid-template-rows: repeat(7, 30px);
  }

  .name {
    grid-column-start: 5;
    grid-column-end: 17;
    grid-row-start: 1;
    grid-row-end: 1;
    border: solid 2px @tnblue;
    margin-bottom: 1px;
    padding-left: 5px;
  }

  .email {
    grid-column-start: 5;
    grid-column-end: 17;
    grid-row-start: 2;
    grid-row-end: 2;
    border: solid 2px @tnblue;
    margin-bottom: 1px;
    padding-left: 5px;
  }

  .phone {
    grid-column-start: 5;
    grid-column-end: 17;
    grid-row-start: 3;
    grid-row-end: 3;
    border: solid 2px @tnblue;
    margin-bottom: 1px;
    padding-left: 5px;
  }

  .message {
    grid-column-start: 5;
    grid-column-end: 17;
    grid-row-start: 4;
    grid-row-end: 6;
    border: solid 2px @tnblue;
    padding-left: 5px;
    resize: none;
  }

  .send {
    grid-column-start: 7;
    grid-column-end: 15;
    grid-row-start: 7;
    grid-row-end: 7;
    border: solid 2px @tnblue;
    background-color: @tnblue;
    color: #fff;
    line-height: 25px;
    text-align: center;
  }
  .text1 {
    text-align: center;
    color: @tnblue;
    font-size: 2.5em;
  }

  .text2 {
    text-align: center;
    color: @tnblue;
    font-size: 1.5em;
  }

  .number {
    text-align: center;
    color: @tnblue;
    font-size: 2em;
  }
}

@media only screen and (min-width:700px) {

  h1 {
    margin-top: 100px;
    font-size: 3em;
  }

  h2 {
    margin-top: 220px;
  }
  .contactBox {
    margin-top: 350px;
    display: grid;
    grid-template-columns: repeat(50, 2%);
    grid-template-rows: repeat(7, 30px);
  }

  .name {
    grid-column-start: 14;
    grid-column-end: 38;
    grid-row-start: 1;
    grid-row-end: 1;
    border: solid 2px @tnblue;
    margin-bottom: 1px;
    padding-left: 5px;
  }

  .email {
    grid-column-start: 14;
    grid-column-end: 38;
    grid-row-start: 2;
    grid-row-end: 2;
    border: solid 2px @tnblue;
    margin-bottom: 1px;
    padding-left: 5px;
  }

  .phone {
    grid-column-start: 14;
    grid-column-end: 38;
    grid-row-start: 3;
    grid-row-end: 3;
    border: solid 2px @tnblue;
    margin-bottom: 1px;
    padding-left: 5px;
  }

  .message {
    grid-column-start: 14;
    grid-column-end: 38;
    grid-row-start: 4;
    grid-row-end: 6;
    border: solid 2px @tnblue;
    padding-left: 5px;
    resize: none;
  }

  .send {
    grid-column-start: 17;
    grid-column-end: 35;
    grid-row-start: 7;
    grid-row-end: 7;
    border: solid 2px @tnblue;
    background-color: @tnblue;
    color: #fff;
    line-height: 25px;
    text-align: center;
  }
  .text1 {
    text-align: center;
    color: @tnblue;
    font-size: 3.25em;
  }

  .text2 {
    text-align: center;
    color: @tnblue;
    font-size: 1.75em;
  }

  .number {
    text-align: center;
    color: @tnblue;
    font-size: 2em;
  }
}
</style>
