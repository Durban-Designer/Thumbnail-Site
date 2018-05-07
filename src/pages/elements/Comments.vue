<template>
  <div class="commentMain">
    <div class="commentList" v-for="comment in comments" v-bind:key="comment.id">
      <h5 class="comment">{{comment.message}}</h5>
      <p class="nameShow">{{comment.name}}</p>
      <p class="timeShow">{{comment.time.month}}/{{comment.time.day}} {{comment.time.hour}}:{{comment.time.minute}}</p>
    </div>
    <div class="commentBox" v-if="commentBox">
      <input class="name" placeholder="name" v-model="name">
      <input class="email" placeholder="email" v-model="email">
      <textarea class="message" placeholder="Message" v-model="message"></textarea>
      <button class="submit" v-on:click="submit(); commentBox=false">Submit</button>
      <button class="cancel" v-on:click="commentBox=false">Cancel</button>
    </div>
    <div class="commentButton" v-on:click="commentBox=true" v-else>Leave a comment</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'comments',
  props: ['article'],
  data () {
    return {
      commentBox: false,
      comments: [],
      name: '',
      email: '',
      message: '',
      time: {
        month: '',
        day: '',
        hour: '',
        minute: ''
      }
    }
  },
  created () {
    let vue = this
    vue.populateComments()
  },
  methods: {
    populateComments () {
      let vue = this
      axios.get('http://13.57.14.36:81/messages/' + vue.article)
        .then(function (response) {
          vue.comments = response.data
          if (vue.comments.length === 8) {
            vue.nextPage = true
          } else {
            vue.nextPage = false
          }
          if (vue.page > 1) {
            vue.previousPage = true
          } else {
            vue.previousPage = false
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    clearComments () {
      this.comments = [{}]
    },
    submit () {
      let vue = this
      vue.submitMessage()
      vue.findTime()
    },
    submitMessage () {
      let vue = this
      axios.post('http://13.57.14.36:81/messages', {
        name: vue.name.toLowerCase(),
        email: vue.email,
        message: vue.message,
        time: vue.time,
        article: vue.article
      })
        .then(function (message) {
          vue.success = true
          vue.populateComments()
          vue.name = ''
          vue.email = ''
          vue.message = ''
          console.log(message)
        })
        .catch(function (error) {
          console.log(error)
          vue.error = true
        })
    },
    findTime () {
      let vue = this
      let time = new Date()
      vue.time.hour = time.getHours()
      vue.time.minute = time.getMinutes()
      vue.time.day = time.getDate()
      vue.time.month = time.getMonth()
      vue.clockTime = vue.time.hours + ':' + vue.time.minute + '  ' + vue.time.day + '/' + vue.time.month
    }
  }
}
</script>

<style scoped lang="less">
@tnblue: #2D587C;
@base-font: 'Montserrat', sans-serif;

  .commentMain {
    width: 100%;
    position: absolute;
  }

  .commentList {
    width: 90%;
    margin: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 20px 40px;
    padding: 1%;
    border: 1px solid @tnblue;
  }
  .commentButton {
     margin-left: 5%;
     line-height: 0;
     color: green;
  }

  .commentBox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 25px 40px 25px;
    width: 90%;
  }

  .name {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    border: 1px solid @tnblue;
  }

  .email {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    border: 1px solid @tnblue;
  }

  .message {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 5;
    border-left: 1px solid @tnblue;
    resize: none;
  }

  .submit {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 5;
    border: 1px solid @tnblue;
    background-color: @tnblue;
    color: #fff;
    font-weight: bold;
  }

  .cancel {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 5;
    border: 1px solid red;
    background-color: red;
    color: #fff;
    font-weight: bold;
  }

  h5 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 2;
  }

  .nameShow {
    grid-column: 1;
    grid-row: 1;
    color: @tnblue;
  }

  .timeShow {
    grid-column: 2;
    grid-row: 1;
    color: @tnblue;
    text-align: right;
  }

  @media only screen and (min-width:700px) {
    .commentBox {
      margin-left: 5%;
    }
  }
</style>
