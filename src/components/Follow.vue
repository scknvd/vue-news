<template>
	<div class="content mt40">
	  <div class="newsList">
	    <ul>
		    <li v-for="(item, index) in dataList">
		    	<a href="javascript:;">
		        <h2>{{index+1}} .{{item.title}}</h2>
		        <p>{{item.detail}}</p>
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
      dataList: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get('/static/data/follow.data').then(({data}) => {
        this.dataList.push(...data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
	.mt40{
		margin-top:40px;
	}
</style>
