import utils from './../../utils/utils.js';

const CHANGE_AUTH = 'CHANGE_AUTH'
const GET_ACTIVITYS = 'GET_ACTIVITYS'
const CHANGE_MARKID = 'CHANGE_MARKID'

export default {
   	[CHANGE_AUTH](state,data){
       state.authName=data;
   	},
   	[GET_ACTIVITYS](state,data){
   		var newData = data;
   		if(data.activitys.length>0){
   			var arr = data.activitys;
   			for(var i=0;i<arr.length;i++){
   				newData.activitys[i].fvtype=utils.vtypeF(arr[i].vtype,arr[i].type,);
   				newData.activitys[i].acttime=(arr[i].starttime.slice(0,10)+'-'+arr[i].endtime.slice(0,10));
   				newData.activitys[i].vstatus=utils.vstatusF(arr[i].state);
   				newData.activitys[i].actData='领券：'+arr[i].takencnt+'剩余 : '+(arr[i].budgettotal-arr[i].takencnt);
   			};
   		};
       	state.activitys=newData;
       	state.activitysLoading=false;
   	},
   	[CHANGE_MARKID](state,data){
       state.marketingsid=data;
   	},
}