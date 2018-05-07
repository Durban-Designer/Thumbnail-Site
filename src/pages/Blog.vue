<template>
  <div class="main">
    <div class="banner"></div>
    <div class="overlay"></div>
    <h1>Thumbnail<br/>Blog</h1>
    <div class="articles" v-for="article in articles" v-bind:key="article.id">
      <div class="articleLink" v-on:click="viewArticle(article)">
        <h3>{{article.name}}</h3>
      </div>
    </div>
    <comments class="comments" :article="comments"></comments>
  </div>
</template>

<script>
import Comments from './elements/Comments'

export default {
  name: 'blog',
  components: {
    'comments': Comments
  },
  data () {
    return {
      comments: 'blogHome',
      authorName: '',
      authorText: '',
      articles: [{name: 'Who is Thumbnail', endpoint: 'who', authorName: 'Konnor', authorText: ''}]
    }
  },
  methods: {
    viewArticle (article) {
      let vue = this
      vue.$router.push('/' + article.endpoint)
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
  background-image: url('../assets/blog2.jpg');
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

.articles {
  margin-top: 300px;
}

.comments {
  margin-top: 100px;
  text-align: left;
  width: 100%;

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

h3 {
  margin-top: 300px;
  height: 10px;
  text-align: center;
}
@media only screen and (min-width:700px) {

  h1 {
    margin-top: 100px;
    font-size: 3em;
  }

  h2 {
    margin-top: 220px;
  }
}
</style>
