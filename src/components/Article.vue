<template>
  <div>
  <div class="nav">
  <ul>
        <li class="l-btn" onclick="window.history.go(-1)"></li>
      </ul>
  </div>
  <div class="content">
    <div class="header clear">
      <h2>
      <img :src="articleData.author_face" alt=""/>
      </h2>
      <p>sfs</p>
    </div>
        <div class="cont">
          <h3>{{articleData.title}}</h3>
            <div class="time"><p>{{articleData.time | normalTime}} <span><img src="/static/img/zan.png" alt=""/></span></p></div>
            <div class="text-box" v-html="articleData.content"></div>
        </div>
    </div>
    <div class="foot-btn">
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
      this.get({
        url: '/static/data/article.data',
        params: 'id=1'
      }).then(({data}) => {
        console.log(data)
      })
    }
  }
}
</script>
