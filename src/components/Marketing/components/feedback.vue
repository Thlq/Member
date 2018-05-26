<template>
	<div class="feedbackWrapper">
		<div class="feedbackTitle">
			<div class="block"></div>
			<div class="text">用户反馈</div>
			<div class="line"></div>
		</div>
		<div class="feedback">
			<Button class='feedbackBtn' @click='feebackShow'>我要反馈</Button>
		</div>
		<Modal
        	v-model="modal"
        	title="反馈"
        	:loading='loadingStatue'
        	@on-ok="feedback"
        	@on-cancel="cancel">
        	<Input
        	 	v-model="feedbackValue"
        	 	type="textarea"
        	 	:rows="4"
        	 	placeholder="请输入反馈内容"
        	 ></Input>
    	</Modal>
	</div>
</template>
<script>
	import zai from './../../../api/api.js'
	import utils from './../../../utils/utils.js'

	export default {
		name:'feedback',
		data () {
			return {
				modal:false,
				clearableStatue:false,
				loadingStatue:true,
				feedbackValue:''
			}
		},
		created(){

		},
		methods:{
			feebackShow(){
	      		this.modal = true;
	      	},
	      	feedback(){
	        	let _this = this;
	        	if(utils.regular.emptyTest(this.feedbackValue)){
	        		let feedbackRed = {
						partner_id:'2088421470247531',
						sign:utils.sign({
							partner_id:utils.partner_id,
							key:utils.key
						}),
						content:utils.regular.removeAllSpace(_this.feedbackValue),
						type:1,
						phone:''
					};
					zai.feedback(feedbackRed).then((data)=>{
						if(data.code==200){
							_this.modal = false;
							_this.feedbackValue = '';
							_this.$Notice.success({
			                    title: '反馈成功',
			                    desc: '已成功接收到您的反馈,感谢您的宝贵意见'
			                });
						};
					},(data)=>{
						_this.$Notice.error({
				            title: '系统繁忙',
				            desc: 'feedback'
				        });
					});
	        	}else{
	        		_this.loadingStatue = false;
	        		setTimeout(() => {
	                    _this.loadingStatue = true;
	                }, 10);
	        		_this.$Message.warning('反馈内容不能为空');
	        	};
	      	},
	      	cancel(){}
  		}
	}
</script>
<style lang='less'>
	.fl{
		float: left;
	}
	.feedbackWrapper{
		width: 966px;
		position: relative;
		padding-top: 10px;
		padding-bottom: 50px;
		.feedbackTitle{
			position: relative;
			height: 40px;
			.block{
				position: absolute;
				left: 0;
				top: 10px;
				width: 6px;
				height: 14px;
				background: #0ae;
			}
			.text{
				position: absolute;
				left: 20px;
				top: 7px;
				font-size: 14px;
				color: #999;
			}
			.line{
				position: absolute;
				top: 8px;
				right: 180px;
				width:700px;
				height:10px;
				border-bottom: 1px dashed #ccc;
			}
		}
		.feedback{
			position: absolute;
			top: 10px;
			height: 50px;
			width: 100px;
			right: 10px;
			.feedbackBtn{
				width: 100px;
			}
		}
	}
</style>
