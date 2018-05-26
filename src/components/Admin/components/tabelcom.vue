<template>
	<div class="tabelWrapper">
		<Table border :columns="columns" :data="activitys.activitys"></Table>
        <div class="fyWrapper">
            <Page :total="100" show-elevator @on-change='pageChange'></Page>
        </div>
	</div>
</template>
<script>
	import {mapState} from 'vuex'

	import zai from './../../../api/api.js'
	import utils from './../../../utils/utils.js'

	export default {
		name:'tabelcon',
		data () {
			return {
				columns: [
                    {
                        title: '券名称',
                        key: 'vname',
                        width:279
                    },
                    {
                        title: '营销场景',
                        key: 'mname',
                        width:100
                    },
                    {
                        title: '类型',
                        key: 'fvtype',
                        width:100
                    },
                    {
                        title: '活动时间',
                        key: 'acttime',
                        width:105
                    },
                    {
                        title: '状态',
                        key: 'vstatus',
                        width:80
                    },
                    {
                        title: '活动数据',
                        key: 'actData',
                        width:90
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.view(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.off(params.index)
                                        }
                                    }
                                }, '下架')
                            ]);
                        }
                    }
                ]
			}
		},
		created(){
			
		},
		methods: {
            pageChange(pageNum){
                this.getData(this.getRed(pageNum));
            },
			view:function(){

            },
            off:function(){

            },
            getRed(pageNum){
                return {
                    partner_id:'2088421470247531',
                    sign:utils.sign({
                        partner_id:'2088421470247531',
                        marketing_id:this.marketingsid,
                        key:'urzlUkKBB19x6KfSqnqQNiWDbQwVTvK0'
                    }),
                    marketing_id:this.marketingsid,
                    page:pageNum,
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
                marketingsid:state=>state.app.marketingsid,
            }),
        }
	}
</script>
<style lang='less'>
	.fl{
		float: left;
	}
	.tabelWrapper{
		width: 966px;
		padding: 0 30px;
        margin-top: 30px;
        .ivu-table td, .ivu-table th{
            height: 60px;
        }
        .fyWrapper{
            margin: 20px 0 50px;
            text-align: right;
        }
	}
</style>
