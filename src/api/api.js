import thlq from './../axios/axios';

export default {
    banner:function(data){
    	return thlq('/Member/Activity/banner',data);
    },
    memMarket:function(data){
    	return thlq('/Member/MarketReprot/memMarket',data);
    },
    marketings:function(data){
    	return thlq('/Member/Activity/marketings',data);
    },
    feedback:function(data){
    	return thlq('/Member/Activity/feedback',data);
    },
    activitys:function(data){
    	return thlq('/Member/Activity/activitys',data);
    }
}