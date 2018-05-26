import zaizai from './../../api/api';

let intState={
   authName:'Thlq',
   activitys:{
         activitys:[],
         current_page:'',
         total_count:'',
         total_page:'',
         marketings:[]
   }
};

export default {//在action中可以进行异步操作。
   	change_auth({commit},params){
      	commit('CHANGE_AUTH',params);
   	},
   	activitys({commit},params){
   		return zaizai.activitys(params).then((res)=>{
   			if(res.code==200){
   				commit('GET_ACTIVITYS',res.data);
               return res.data;
   			}else{
               commit('GET_ACTIVITYS',intState.activitys);
               return 'err';
            };
   		},(data)=>{
   			commit('GET_ACTIVITYS',intState.activitys);
            return 'err';
   		});
   	}
}