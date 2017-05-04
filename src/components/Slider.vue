<template>
	<div class="banner">
		<transition name="sliderMove">
		  <ul class="clearfix">
		  	<li v-for="(item,index) in sliderList">
		  		<img :src="item.url" alt=""/>
		  	  <div class="text-box">
		  	    <h2>{{item.title}}</h2>
		  	    <p>{{item.auth}}</p>
		  	  </div>
		  	</li>
		</ul>
		</transition>
		<ol>
		    <li v-for="(item,index) in sliderList" :class="currentSlider==index?'active':null"></li>
		</ol>
	</div>
</template>
<script>

export default {
  data () {
    return {
      sliderList: [],
      currentSlider: 0
    }
  },
  methods: {
    getData () {
      this.get({
        url: '/static/data/slider.data'
      }).then(({data}) => {
        this.sliderList.push(...data)
        setTimeout(() => {
          this.slideMove()
        }, 16)
      })
    },
    slideMove () {
      let clientWidth = document.documentElement.clientWidth
      let oContainer = document.querySelectorAll('.banner ul')[0]
      let len = this.sliderList.length
      console.log(len)
      oContainer.style.width = clientWidth * (len + 1) + 'px'
      let li = document.querySelectorAll('.banner ul li')[0].cloneNode(true)
      oContainer.appendChild(li)
      setInterval(() => {
        oContainer.style.transition = `500ms all ease`
        this.currentSlider++
        if (this.currentSlider === len) {
          oContainer.addEventListener('transitionend', fnMove, false)
        }
        oContainer.style.transform = `translateX(${-clientWidth * this.currentSlider}px)`
        if (this.currentSlider === len) {
          this.currentSlider = 0
        }
      }, 6000)
      function fnMove () {
        oContainer.style.transition = `0ms all ease`
        oContainer.style.transform = `translateX(0px)`
        oContainer.removeEventListener('transitionend', fnMove, false)
      }
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
