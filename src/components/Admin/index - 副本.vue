<template>
    <div class="admin">
        <Spin size="large" fix v-if="activitysLoading"></Spin>
        <selectcom></selectcom>
        <tabelcom></tabelcom>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import selectcom from './components/selectcom.vue'
    import tabelcom from './components/tabelcom.vue'

    export default {
        name: 'admin',
        components: {
            selectcom,
            tabelcom
        },
        data () {
            return {

            }
        },
        created(){
            // console.log(this.$route);
        },
        computed:{
            ...mapState({
                activitysLoading:state=>state.app.activitysLoading
            }),
        }
    }
</script>
<style lang='less'>
    .admin{
        position: relative;
    }
</style>
