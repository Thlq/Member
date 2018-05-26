<template>
	<div class="selectWrapper">
		<span class="title">营销场景 : </span>
		<p class="con">
			<Select
				v-model="model"
				filterable
				@on-change='change'
				placeholder='请选择营销场景'>
	            <Option
	            	v-for="item in activitys.marketings"
	            	:value="item.id"
	            	:key="item.id">
	            	{{item.keyName}}
	        	</Option>
	        </Select>
		</p>
	</div>
</template>
<script>
	import {mapState} from 'vuex'

	import zai from './../../../api/api.js'
	import utils from './../../../utils/utils.js'

	export default {
		name:'selectcom',
		data () {
			return {
				model:''
			}
		},
		created(){
			this.getData(this.getRed(0));
		},
		methods: {
			change(id){
				this.getData(this.getRed(id));
				this.$store.commit('CHANGE_MARKID', id);
			},
			getRed(id){
				return {
					partner_id:'2088421470247531',
					sign:utils.sign({
						partner_id:'2088421470247531',
						marketing_id:id,
						key:'urzlUkKBB19x6KfSqnqQNiWDbQwVTvK0'
					}),
					marketing_id:id,
					page:1,
					pageSize:10
				};
			},
			getData(dataRed){
				return this.$store.dispatch('activitys',dataRed);
			}
  		},
  		computed:{
            ...mapState({
                activitys:state=>state.app.activitys,
            })
        }
	}
</script>
<style lang='less' scoped>
	.fl{
		float: left;
	}
	.selectWrapper{
		width: 966px;
		padding: 0 30px;
		.title{
			display: inline-block;
		}
		.con{
			display: inline-block;
			width: 200px;
			text-align: left;
		}
	}
</style>
