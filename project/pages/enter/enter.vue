<template>
	<view id="enter">
		<view class="enter_Main">
			<u-input v-model="phone" :type="type1" :border="border" placeholder="请输入手机号"/>
			<u-input v-model="password" :type="type2" :border="border" placeholder="请输入密码"/>
			<u-button type="success" style="width: 50%;" @click="enterHtml">登录</u-button>
		</view>
		<template>
			<u-popup v-model="show" mode="top">
				<view>
					您的账号或者密码错误！
				</view>
			</u-popup>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				password:'',
				type1: 'text',
				type2: 'password',
				border: true,
				show:false
			}
		},
		methods: {
			enterHtml(){
				var getTimestamp=new Date().getTime();
				console.log('/login/cellphone?phone='+this.phone+'&password='+this.password+'&timestamp='+getTimestamp)
				let that = this
				// console.log(that.phone)
				uni.request({
					// url:this.$Url + 'http://localhost:3000/login/cellphone?phone=13656053690&password=jyc6882712.',
				    url: this.$Url + '/login/cellphone?phone='+that.phone+'&password='+that.password+'&timestamp='+getTimestamp,
				    dataType: 'json', //默认 json格式
				    method: 'POST', //请求方式
				    success: (res) => {
						console.log(res)
						console.log(res.data)
				        console.log(res.data.code)
						if(res.data.code == 200){
							uni.setStorage({
								key:"user",
								data:res.data,
								success: () => {
									this.$store.commit('myCookies',res.data.cookie)
									// 添加成功后跳转页面
									uni.switchTab({
										url:"../homePage/homePage"
									})
								}
							})
						}else{
							// window.location.reload();
						}
				    },
				    fail: (error) => {
				        console.log(error)
				    }
				})
			}
		}
	}
</script>

<style lang="scss">
	#enter{
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		background:url("../../static/img/enter-background.jpg")  no-repeat center center;   /*加载背景图*/   /* 背景图不平铺 */
		background-size:cover;  /* 让背景图基于容器大小伸缩 */
		background-attachment:fixed;        /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */    //此条属性必须设置否则可能无效/
		background-color:#CCCCCC;   /* 设置背景颜色，背景图加载过程中会显示背景色 */
		border: 1px solid red;
		.enter_Main{
			width: 70%;
			height: 25%;
			margin: 0 auto;
			margin-top: 105%;
			.u-input{
				margin-bottom: 10px;
				color: while;
			}
		}
	}
</style>
