import Vue from 'vue'
import App from './App'
import Rq from './util/Rq.js'
import Api from './api.js'
import coloruiStar from './components/colorui-star.vue'
import radioCheckbox from './components/radio-checkbox.vue'
import coloruiSpeaker from './components/colorui-speaker.vue'
import coloruiUpImg from './components/colorui-upimg.vue'
Vue.component('colorui-upimg', coloruiUpImg)
Vue.component('radio-checkbox', radioCheckbox)
Vue.component('colorui-star', coloruiStar);
Vue.component('colorui-speaker', coloruiSpeaker);


Vue.config.productionTip = false
Vue.prototype.$Rq = Rq.Rq;
Vue.prototype.$Api = Api.api;
App.mpType = 'app'

const app = new Vue({
	...App,
	ColorList: [{
			title: '嫣红',
			name: 'red',
			color: '#e54d42'
		},
		{
			title: '桔橙',
			name: 'orange',
			color: '#f37b1d'
		},
		{
			title: '明黄',
			name: 'yellow',
			color: '#fbbd08'
		},
		{
			title: '橄榄',
			name: 'olive',
			color: '#8dc63f'
		},
		{
			title: '森绿',
			name: 'green',
			color: '#39b54a'
		},
		{
			title: '天青',
			name: 'cyan',
			color: '#1cbbb4'
		},
		{
			title: '海蓝',
			name: 'blue',
			color: '#0081ff'
		},
		{
			title: '姹紫',
			name: 'purple',
			color: '#6739b6'
		},
		{
			title: '木槿',
			name: 'mauve',
			color: '#9c26b0'
		},
		{
			title: '桃粉',
			name: 'pink',
			color: '#e03997'
		},
		{
			title: '棕褐',
			name: 'brown',
			color: '#a5673f'
		},
		{
			title: '玄灰',
			name: 'grey',
			color: '#8799a3'
		},
		{
			title: '草灰',
			name: 'gray',
			color: '#aaaaaa'
		},
		{
			title: '墨黑',
			name: 'black',
			color: '#333333'
		},
		{
			title: '雅白',
			name: 'white',
			color: '#ffffff'
		},
	]
})
app.$mount()
