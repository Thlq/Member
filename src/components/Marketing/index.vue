<template>
    <div class="marketing">
        <carousel />
        <mdata></mdata>
        <voucher></voucher>
        <feedback></feedback>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import carousel from './components/carousel.vue'
    import mdata from './components/marketingData.vue'
    import voucher from './components/voucher.vue'
    import feedback from './components/feedback.vue';
    export default {
        components: {
            carousel,
            mdata,
            voucher,
            feedback
        },
        name: 'marketing',
        data(){
            return {

            }
        },
        created(){

        },
        computed:{
            ...mapState({
                authName:state=>state.app.authName
            }),
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .marketing{

    }
</style>
