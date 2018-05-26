export default{
	marketingDataBd:{
		modals:{
			item1:[
		      	{
		        	name: '昨日新增会员',
		        	explain: '首次来店消费会员数'
		      	},
		      	{
		        	name: '总会员数',
		        	explain: '累计会员数'
		      	},
		      	{
		        	name: '二次以上会员数',
		        	explain: '来店两次及两次以上会员数阿萨德法师法'
		      	}
		    ],
		    item2:[
		      	{
		        	name: '昨日收益金额',
		        	explain: '昨日实收金额'
		      	},
		      	{
		        	name: '累计收益金额',
		        	explain: '累计实收金额'
		      	},
		      	{
		        	name: '笔单价',
		        	explain: '累计实收金额/累计成交笔数'
		      	}
		    ],
		    item3:[
		      	{
		        	name: '昨日活动收益金额',
		        	explain: '昨日参加活动交易的实收金额(含营销活动，口碑活动，优惠券)'
		      	},
		      	{
		        	name: '昨日领券量',
		        	explain: '昨日券领取份数'
		      	},
		      	{
		        	name: '当前活动数',
		        	explain: '昨日商家的有效活动数(含营销活动，口碑活动，优惠券)'
		      	}
		    ]
		},
		mdata:[
			{
				item:'1',
				name1:'新增会员数(人)',
				num1:'--',
				name2:'总会员数(人)',
				num2:'--',
				name3:'交易二次以上会员数(人)',
				num3:'--'
			},
			{
				item:'2',
				name1:'收益额(元)',
				num1:'--',
				name2:'总收益额(元)',
				num2:'--',
				name3:'平均每单消费额(元)',
				num3:'--'
			},
			{
				item:'3',
				name1:'新增活动收益(元)',
				num1:'--',
				name2:'昨日领券数(张)',
				num2:'--',
				name3:'当前活动数(个)',
				num3:'--'
			}
		]
	}
}