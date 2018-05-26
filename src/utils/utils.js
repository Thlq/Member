import md5 from 'js-md5'

export default{
	partner_id:'2088421470247531',
	key:'urzlUkKBB19x6KfSqnqQNiWDbQwVTvK0',
	sign:function(obj){//签名
		var sign = '';
        for(var k in obj){
        	sign = sign+ `&${k}=${obj[k]}`
        };
        return md5(sign).toUpperCase();
	},
	multiple:function(str1,str2){//倍数判断
		if(str1%str2==0){
			return false;
		};
		return true;
	},
	vtypeF:function(str,str2){//券类型
		if(str2=='CONSUME_SEND'){
			return '券包';
		}else{
			if(str=='MONEY'){
				return '全场代金券';
			}else if(str=='RATE'){
				return '全场折扣券';
			}else if(str=='SINGLE_MONEY'){
				return '单品代金券';
			}else if(str=='SINGLE_RATE'){
				return '单品折扣券';
			}else if(str=='REDUCETO'){
				return '单品减至券';
			};
		};
	},
	vstatusF:function(str){//券状态
		if(str==0){
			return '已下架';
		}else if(str==1){
			return '已生效';
		};
	},
	fDate:{
		ymd:function(date){
			var date = new Date();
			var y = date.getFullYear();
			var m = date.getMonth()+1;
			var d = date.getDate();
			return y+''+(m>9?m:'0'+m)+''+(d>9?d:'0'+d);
		}
	},
	regular:{//一些正则判断
		emptyTest:function(str){
			if(str&&str.length>0){
				return true;
			};
			return false;
		},
		removeAllSpace:function(str){
			return str.replace(/\s+/g, "");
		}
	}
}