<template>
  <div>
  <div class="nav">
  <ul>
        <li class="l-btn" onclick="window.history.go(-1)"></li>
      </ul>
  </div>
  <div class="content mt60">
    <div class="header clear">
      <h2>
        <img :src="articleData.author_face" alt=""/>
      </h2>
      <p>sfs</p>
    </div>
        <div class="cont">
          <h3>{{articleData.title}}</h3>
            <div class="time"><p>{{articleData.time | normalTime}} </p></div>
            <div class="text-box" v-html="articleData.content"></div>
        </div>
    </div>
    <div class="foot-sidebar">
      <ul>
        <li class="say">
          <a href="javascript:;">
            <i></i>
            <span>0</span>
          </a>
        </li>
        <li class="zan">
          <a href="javascript:;">
            <i></i>
            <span>0</span>
          </a>
        </li>
        <li class="xing">
          <a href="javascript:;">
            <i>
              <img src="/static/img/xing.png" alt=""/>
            </i>
          </a>
        </li>
        <li class="fx">
          <a href="javascript:;">
            <i>
              <img src="/static/img/fx.png" alt=""/>
            </i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      articleData: {}
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get('/static/data/article.data').then(({data}) => {
        this.articleData = data[this.$route.params.id - 1]
        console.log(this.articleData)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
	@import '/static/css/mydoc.css'
</style>
