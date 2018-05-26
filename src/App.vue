<template>
    <div id="app">
        <div class="header">会员营销</div>
        <Menu mode="horizontal" :active-name="activeItem" @on-select='selectItem'>
            <MenuItem name="marketing">
                米雅营销
            </MenuItem>
            <MenuItem name="admin">
                营销管理
            </MenuItem>
            <MenuItem name="analysis">
                数据分析
            </MenuItem>
        </Menu>
        <div class="copy">
            <img src="http://h5cspm.miyapay.com/h5/vip_images/miya_logo.png">
            <p>0571-86077510</p>
        </div>
        <div class="routerWrapper">
            <router-view/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
        return {
            activeItem: 'marketing'
        }
    },
    created(){
        this.activeItem = this.$route.name;
    },
    methods:{
        selectItem:function(name){
            this.activeItem = name;
            this.$router.push({name: name});
        },
        calibration:function(route){
            this.activeItem = route.name;
        }
    },
    watch: {
        "$route": 'calibration'
    }
  }
</script>

<style lang='less'>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 998px;
        position: relative;
    }
    .header{
        padding-bottom: 15px;
        border-bottom: none;
        padding: 21px 0 5px 16px;
        font-size: 20px;
        font-weight: 400;
        color: #666;
    }
    .copy{
        position: absolute;
        left: 820px;
        top: 72px;
        z-index: 999;
        p{
            display: inline-block;
            vertical-align: middle;
            font-size: 12px;
            color: #666;
        }
        img{
            display: inline-block;
            vertical-align: middle;
            width: 55px;
            margin-right: 10px;
        }
    }
    .routerWrapper{
        width: 998px;
        padding: 24px 16px 0;
    }
    .ivu-menu-horizontal{
        height: 46px;
        line-height: 46px;
    }
    .ivu-menu-item{
        margin: 0 10px;
    }
</style>
