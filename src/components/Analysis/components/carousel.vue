<template>
	<div class="selectWrapper">
		<Spin size="large" fix v-if="spinShow"></Spin>
		<Carousel autoplay loop :autoplay-speed=speed >
			<CarouselItem v-for="banner in banners" :key="'banner'+banner.id">
				<div class="demo-carousel">
					<img :src="banner.img_url">
				</div>
			</CarouselItem>
		</Carousel>
	</div>
</template>
<script>
	import zai from './../../../api/api.js'
	import utils from './../../../utils/utils.js'
	export default {
		name:'carousel',
		data () {
			return {
				banners:[],
				speed:2500,
				spinShow:true
			}
		},
		created(){
			var _this = this;
			let bannerRed = {
				partner_id:'2088421470247531',
				sign:utils.sign('2088421470247531')
			};
			zai.banner(bannerRed).then(function(data){
				if(data.code==200){
					_this.banners = data.data.banners;
					_this.spinShow = false;
				};
			},function(data){
				_this.spinShow = false;
				_this.$Notice.error({
            title: '系统繁忙',
            desc: 'banner'
        });
			});
		}
	}
</script>
<style lang='less'>
	.carouselWrapper{
		width: 966px;
		height: 260px;
		position: relative;
	}
  .demo-carousel{
  	height: 260px;
  }
</style>
