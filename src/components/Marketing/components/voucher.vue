<template>
	<div class="voucherWrapper">
		<div class="voucherTitle">
			<div class="block"></div>
			<div class="text">会员精准发券</div>
			<div class="line"></div>
		</div>
		<div class="box">
			<div class="mideline" :class="{ midbodder: voucherData.length>2 }"></div>
			<Row :gutter="16">
				<Col span="6" v-for='item in voucherData' :key='item.id'>
		          	<div class="item">
			          	<div class="rightline" :class="{ rightborder: multiple(item.id,4) }"></div>
			          	<p class="name">{{item.keyName!=null?item.keyName:'自定义营销'}}</p>
			          	<p class="num">适用人群 : {{item.total!=null?item.total:'所有'}}人</p>
			          	<p class="detail">{{item.keyDesc!=null?item.keyDesc:'简单，方便，快捷，更多的发券选择'}}</p>
			          	<p class="vbotton">
			          		<Button type="primary">去发券</Button>
			          	</p>
			          	<p class="actnum" :class="{ isAct: item.ids.length>0 }">
			          		<span class="sz" :class="{ szAct: item.ids.length>0 }">{{item.ids.length}}</span>
			          		个活动正在进行
			          		<span class="view">
			          			<router-link :to="{name:'admin',query:{id:item.crowdGroupId!=null?item.crowdGroupId:'000000'}}">查看</router-link>
			          		</span>
			          	</p>
		          	</div>
        		</Col>
      		</Row>
		</div>
	</div>
</template>
<script>
	import zai from './../../../api/api.js'
	import utils from './../../../utils/utils.js'

	export default {
		name:'voucher',
		data(){
			return{
				voucherData:[]
			}
		},
		created(){
			let _this = this;
			let marketingsRed = {
				partner_id:utils.partner_id,
				sign:utils.sign({
					partner_id:utils.partner_id,
					key:utils.key
				})
			};
			zai.marketings(marketingsRed).then(function(data){
				if(data.code==200){
					_this.voucherData = data.data;
				};
			},function(data){
				_this.$Notice.error({
		            title: '系统繁忙',
		            desc: 'marketings'
		        });
			});
		},
		methods:{
			multiple:utils.multiple
		}
	}
</script>
<style lang='less' scoped>
	.fl{
		float: left;
	}
	.voucherWrapper{
		width: 966px;
		position: relative;
		padding-top: 10px;
		padding-bottom: 50px;
		.voucherTitle{
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
				right: 0;
				width:850px;
				height:10px;
				border-bottom: 1px dashed #ccc;
			}
		}
		.box{
			width: 966px;
			border: 1px solid #ccc;
			border-radius: 4px;
			position: relative;
			.mideline{
				width: 966px;
				height: 1px;
				position: absolute;
				top: 270px;
			}
			.midbodder{
				border-bottom: 1px dashed #ccc;
			}
			.item{
				width: 80%;
				margin: 0 auto;
				padding: 20px 0 30px;
				position: relative;
				.rightline{
					position: absolute;
					right: -30px;
					top: 40px;
					width: 1px;
					height: 150px;
				}
				.rightborder{
					border-right: 1px dashed #ccc;
				}
				.name{
					width: 100%;
					height: 50px;
					line-height: 50px;
					text-align: center;
					font-size: 20px;
				}
				.num{
					color: #999;
					text-align: center;
					line-height: 30px;
					font-size: 14px;
				}
				.detail{
					color: #ccc;
					text-align: center;
					line-height: 20px;
					font-size: 14px;
					margin-top: 10px;
				}
				.vbotton{
					width: 100%;
					text-align: center;
					margin-top: 20px;
				}
				.actnum{
					width: 100%;
					text-align: center;
					margin-top: 15px;
					color: #555;
					.sz{
						color: #555;
					}
					.szAct{
						color: #0ae;
					}
					.view{
						display: none;
						color: #0ae;
						cursor: pointer;
					}
				}
				.isAct{
					.view{
						display: inline-block;
					};
				}
			}
		}
	}
	.ivu-card-body{
		padding:8px;
	}
	.ivu-btn{
		padding: 6px 50px;
		background: #2db7f5;
		border-color: #2db7f5;
	}
</style>
