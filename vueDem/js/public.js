//全局组件
Vue.component('todo-item', {
	props : ['parm'],
	data : function(){
		return {
			num : this.parm
		}
	},
	template : '<div @click="handleClick">{{num}}</div>',
	methods : {
		handleClick : function (){
			this.num ++ ;
		}
	}
})