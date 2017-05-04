<template>
  <div class="content">
    <Banner></Banner>
    <div class="newsList">
      <ul>
        <li v-for="(item,index) in dataList">
          <router-link :to="'/article/'+item.id">
            <h2>{{index+1}} . {{item.title}}</h2>
            <p>{{item.detail}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Slider from './Slider.vue'

export default {
  data () {
    return {
      dataList: []
    }
  },
  methods: {

  },
  components: {
    Banner: Slider
  },
  mounted () {
    this.$http.get('/static/data/index.data').then(({data}) => {
      this.dataList.push(...data)
    }).catch((err) => {
      console.log(err)
    })
  }
}

</script>

<style scoped>
  @import '/static/css/index.css'
</style>
