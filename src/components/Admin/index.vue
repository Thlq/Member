<template>
    <div class="admin">
        <Spin size="large" fix v-if="loading"></Spin>
        <div class="selectWrapper">
            <span class="title">营销场景 : </span>
            <p class="con">
                <Select
                    v-model="model"
                    filterable
                    @on-change='itemChange'
                    :label='mla'
                    :placeholder='mpl'>
                    <Option
                        v-for="item in marketings"
                        :value="item.id"
                        :key="item.id">
                        {{item.keyName}}
                    </Option>
                </Select>
            </p>
        </div>
        <div class="tabelWrapper">
            <Table border :columns="columns" :data="activitys"></Table>
            <div class="fyWrapper">
                <Page
                    :total="total_count"
                    :current='current_page'
                    show-elevator
                    @on-change='pageChange'>
                </Page>
            </div>
        </div>
    </div>
</template>

<script>
    import zai from './../../api/api.js'
    import utils from './../../utils/utils.js'

    export default {
        name: 'admin',
        data () {
            return {
                loading:true,
                model:'',
                mpl:'',
                mla:'',
                marketingId:0,
                marketings:[],
                activitys:[],
                current_page:1,
                total_count:0,
                total_page:0,
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
                        width:105,
                        render: (h, params) => {
                            return h('div', [
                                h('p', `${params.row.acttime.starttime}`),
                                h('p', `至`),
                                h('p', `${params.row.acttime.endtime}`)
                            ]);
                        }
                    },
                    {
                        title: '状态',
                        key: 'vstatus',
                        width:80
                    },
                    {
                        title: '活动数据',
                        key: 'actData',
                        width:100,
                        render: (h, params) => {
                            return h('div', [
                                h('p', `领券 : ${params.row.actData.takencnt}`),
                                h('p', `剩余 : ${params.row.actData.surplus}`)
                            ]);
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 140,
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
            this.getData(this.getRed(this.marketingId,this.current_page)).then((res)=>{
                if(res){
                    this.mpl = this.marketings[0].keyName;
                };
            });
        },
        methods:{
            itemChange(marketingId){//换场景
                this.loading = true;
                this.marketingId = marketingId;
                this.current_page = 1;
                this.getData(this.getRed(marketingId,this.current_page));
            },
            pageChange(goPage){//分页
                this.loading = true;
                this.current_page = goPage;
                this.getData(this.getRed(this.marketingId,goPage));
            },
            getData(dataRed){//获取数据
                return zai.activitys(dataRed).then((res)=>{
                    this.loading = false;
                    if(res.code==200){
                        this.marketings = res.data.marketings;
                        var arr = res.data.activitys;
                        if(arr.length>0){
                            for(var i=0;i<arr.length;i++){
                                arr[i].fvtype=utils.vtypeF(arr[i].vtype,arr[i].type,);
                                arr[i].acttime={
                                    starttime:arr[i].starttime.slice(0,10),
                                    endtime:arr[i].endtime.slice(0,10)
                                };
                                arr[i].vstatus=utils.vstatusF(arr[i].state);
                                arr[i].actData={
                                    surplus:arr[i].budgettotal-arr[i].takencnt,
                                    takencnt:arr[i].takencnt
                                };
                            };
                            this.activitys = arr;
                            this.current_page = res.data.current_page;
                            this.total_count = res.data.total_count;
                            this.total_page = res.data.total_page;
                        };
                        return true;
                    }else{
                        this.restData();
                    };
                },(res)=>{
                    this.restData();
                });
            },
            getRed(marketingId,page){//获取请求参数
                return {
                    partner_id:'2088421470247531',
                    sign:utils.sign({
                        partner_id:'2088421470247531',
                        marketing_id:this.marketingId,
                        key:'urzlUkKBB19x6KfSqnqQNiWDbQwVTvK0'
                    }),
                    marketing_id:marketingId,
                    page:page,
                    pageSize:10
                };
            },
            restData(){//重置数据
                this.loading = false;
                this.marketings = [];
                this.activitys = [];
                this.current_page = 1;
                this.total_count = 0;
                this.total_page = 0;
            }
        },
        computed:{

        }
    }
</script>
<style lang='less'>
    .admin{
        position: relative;
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
    }
</style>
