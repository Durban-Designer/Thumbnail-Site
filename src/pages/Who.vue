<template>
  <div class="main">
    <div class="banner"></div>
    <div class="overlay"></div>
    <h1>Thumbnail<br/>Blog</h1>
    <div class="articleBody">
      <h2>Who is Thumbnail?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
        amet justo justo. Praesent dignissim sem dui, sed semper purus ullamcorper
        eu. Nulla dignissim tellus fermentum sem efficitur pellentesque. Sed dictum
        dui a vulputate posuere. Suspendisse at hendrerit lacus, at rhoncus dui. Duis
        ac ante mauris. In dictum nisl sed metus pretium fermentum. Nam mollis pharetra
        convallis. Ut in tortor pretium, pretium lorem non, molestie enim. Maecenas cursus
        viverra libero at rutrum. Curabitur mattis sapien purus, nec vehicula felis tempus
        ut. Maecenas pretium, metus vitae interdum pellentesque, leo turpis ultricies eros,
        id viverra mauris magna vitae velit. Nulla ornare eros velit, id luctus massa mattis ut.
      </p>
      <p>
        In et neque non sapien pulvinar mollis quis ut dolor. Quisque pharetra neque at
        justo pharetra porta. Ut ultricies sed ex pellentesque egestas. Phasellus vehicula
        nunc nunc, id imperdiet quam mattis sit amet. Cras interdum urna eu nisl posuere,
        accumsan dictum sem rutrum. Duis iaculis nec nulla id hendrerit. Morbi a elit ornare,
        bibendum lacus et, cursus massa. Nullam sit amet odio sapien. Maecenas sed lectus lorem.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Etiam iaculis vitae tellus sit amet tempus. Nullam congue, arcu vitae posuere
        facilisis, est dolor tempus velit, pellentesque congue nulla mi eget ante. Vestibulum euismod,
        lacus eu vehicula porttitor, libero ante ullamcorper ante, quis ultricies leo metus et mauris.
        Suspendisse potenti. Aliquam erat volutpat. Vestibulum nec lorem lobortis, ultrices nulla nec,
        molestie diam.
      </p>
    </div>
    <div class="about">
      <h5>{{authorName}}</h5>
      <h5>{{authorText}}</h5>
    </div>
    <comments class="comments" :article="article"></comments>
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
      article: 'who',
      authorName: 'Konnor',
      authorText: 'Lorem ipsum dolor est'
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

.articleBody {
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
