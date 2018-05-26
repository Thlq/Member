<template>
	<div class="mDataWrapper">
		<div class="mDataTitle">
			<div class="block"></div>
			<div class="text">会员营销数据</div>
			<div class="line"></div>
		</div>
		<div class="mDataCon">
			<Row :gutter="16">
		        <Col span="8" v-for='item in mdata' :key='item.item'>
		          <Card class='card'>
		          	<div class="info" @click='hint(item.item)'>
		          		<Icon type="information" size=2 color='#fff'></Icon>
		          	</div>
		            <p class="title">
		            	<span class="date">昨日</span>
		            	<span class="detail">{{item.name1}}</span>
		            </p>
		            <p class="content">{{item.num1}}</p>
		            <div class="con">
		            	<div class="left fl">
		            		<p class="leftTop">{{item.name2}}</p>
		            		<p class="leftBot">{{item.num2}}</p>
		            	</div>
		            	<div class="mid fl"></div>
		            	<div class="right fl">
		            		<p class="rightTop">{{item.name3}}</p>
		            		<p class="rightBot">{{item.num3}}</p>
		            	</div>
		            </div>
		          </Card>
		        </Col>
		      </Row>
			</div>
		<Modal
        	v-model="modalData.modal"
        	:title="modalData.title"
        	@on-cancel="cancel">
	        <Table
	        	border
	        	:disabled-hover='modalData.disabledHover'
	        	:show-header='modalData.showHeader'
	        	:columns="modalData.columns"
	        	:data="modalData.data">
	        </Table>
	        <div slot="footer"></div>
    </Modal>
	</div>
</template>
<script>
	import zai from './../../../api/api.js'
	import utils from './../../../utils/utils.js'
	import bd from './../../../utils/bd.js'

	var modals = bd.marketingDataBd.modals;
	var mdata = bd.marketingDataBd.mdata;
	export default {
		name:'mdata',
		data () {
			return {
				mdata:mdata,
				modalData:{
					modal: false,
					showHeader:false,
	        		disabledHover:true,
					title:'首次来店消费会员数',
					columns: [
			            {
			              title: 'Name',
			              key: 'name',
			              className: 'demo-table-info-column'
			            },
			            {
			              title: 'Explain',
			              key: 'explain'
			            }
	        		],
	        		data: modals.item1
				}
			}
		},
		created(){
			let memMarketRed = {
				saasid:utils.partner_id,
				sign:utils.sign({
					partner_id:utils.partner_id,
					key:utils.key
				}),
				date:utils.fDate.ymd()
			};
			let _this = this;
			zai.memMarket(memMarketRed).then(function(data){
				if(data.code==200){
					_this.mdata[0].num1 = data.data.user.tcnt;
					_this.mdata[0].num2 = data.data.user.cnt;
					_this.mdata[0].num3 = data.data.user.vcnt;
					_this.mdata[1].num1 = data.data.bill.tamt;
					_this.mdata[1].num2 = data.data.bill.amt;
					_this.mdata[1].num3 = data.data.bill.avgamt;
					_this.mdata[2].num1 = data.data.camp.campamt;
					_this.mdata[2].num2 = data.data.camp.camptamt;
					_this.mdata[2].num3 = data.data.camp.campnum;
				}else{
					_this.$Notice.error({
			            title: '系统繁忙',
			            desc: 'memMarket'
			        });
				};
			},function(data){
				_this.$Notice.error({
		            title: '系统繁忙',
		            desc: 'memMarket'
		        });
			});
		},
		methods:{
			hint:function(e){
				if(e==2){
					this.modalData.data = modals.item2;
				}else if(e==3){
					this.modalData.data = modals.item3;
				}else{
					this.modalData.data = modals.item1;
				};
				this.modalData.modal = true;
			},
      		cancel(){}
		}
	}
</script>
<style lang='less'>
	.fl{
		float: left;
	}
	.mDataWrapper{
		width: 966px;
		position: relative;
		padding-top: 10px;
		padding-bottom: 20px;
		.mDataTitle{
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
		.mDataCon{
			width: 966px;
			height: 230px;
			.card{
				height: 230px;
				padding-top: 10px;
				position: relative;
				.title{
					text-align: center;
					.date{
						font-size: 14px;
						color: #333;
						margin-right: 10px;
					}
					.detail{
						color: #999;
					}
				}
				.content{
					width: 100%;
					height: 100px;
					line-height: 100px;
					text-align: center;
					font-size: 32px;
					color: #ff944d;
				}
				.con{
					margin-top: 10px;
					.left{
						width: 110px;
						text-align: center;
						.leftTop{
							font-size: 14px;
							color: #999;
						}
						.leftBot{
							font-size: 14px;
							color: #000;
							margin-top: 10px;
						}
					}
					.mid{
						width: 1px;
						height: 60px;
						border-right: 1px dashed #ccc;
					}
					.right{
						width: 180px;
						text-align: center;
						.rightTop{
							font-size: 14px;
							color: #999;
						}
						.rightBot{
							font-size: 14px;
							color: #000;
							margin-top: 10px;
						}
					}
				}
				.info{
					position: absolute;
					right: 20px;
					top: 10px;
					width: 15px;
					height: 15px;
					background: #0ae;
					border-radius: 50%;
					text-align: center;
					line-height: 15px;
					cursor: pointer;
				}
			}
		}
	}
	.ivu-table td.demo-table-info-column{
      	background-color: #f7f7f7;
      	color: #000;
  	}
	.ivu-card-body{
		padding: 8px;
	}
</style>
