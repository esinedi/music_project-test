<template>
	<view id="songDetail">
		<view class="songDetailTop">
			<u-icon style="" @click="menuBack" name="arrow-left" color="#FFFFFF" size="40"></u-icon>
			<view class="songDetailTopName">
				{{songName}}
			</view>
			<view class="">
			</view>
		</view>
		<view class="songDetailMain">
			<image class="songDetailMainImg" :src="songImg" mode=""></image>
		</view>
		<view class="songDetailFooter">
			<view class="songDetailFooterOne">
				<u-icon name="heart" color="#FFFFFF" size="60"></u-icon>
				<u-icon name="download" color="#FFFFFF" size="60"></u-icon>
				<u-icon name="chat" color="#FFFFFF" size="60"></u-icon>
			</view>
			<audio style="margin-top: 20px; width: 70%;" :src="songUrl" :poster="songImg" :name="songName" :author="songAuthor" controls></audio>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userCookie:'',
				// 获取歌曲id,name,img,名称
				songId:'',
				songName:'',
				songImg:'',
				songAuthor:'',
				// 获取歌曲url
				songUrl:'',
			}
		},
		onLoad:function(options){
		  this.songId = JSON.parse(options.songId)
		  // 获取用户coolie
		  uni.getStorage({
		  	key:"user",
		  	success: (res) => {
		  		this.$store.state.myCookie = res.data.cookie
		  	}
		  })
		  this.userCookie = this.$store.state.myCookie
		},
		onShow(){
			// 获取歌曲信息
			uni.request({
			    url: this.$Url + '/song/detail?ids='+this.songId,
			    dataType: 'json', //默认 json格式
			    method: 'POST', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					this.songName = res.data.songs[0].name
					this.songImg = res.data.songs[0].al.picUrl
					this.songAuthor = res.data.songs[0].al.name
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
			// 获取歌曲url
			uni.request({
			    url: this.$Url + '/song/url?id='+this.songId + '&cookie=' + this.userCookie,
			    dataType: 'json', //默认 json格式
			    method: 'POST', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					this.songUrl = res.data.data[0].url
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
		},
		methods: {
			menuBack(){
				uni.switchTab({
					url:'../homePage/homePage'
				})
			}
		}
	}
</script>

<style lang="scss">
	#songDetail{
		width: 100%;
		height: 100%;
		background-color: #333333;
		padding: 15px;
		.songDetailTop{
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			color: white;
		}
		.songDetailMain{
			width: 100%;
			height: 55%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: flex-end;
			.songDetailMainImg{
				width: 250px;
				height: 250px;
				border-radius: 100%;
			}
		}
		.songDetailFooter{
			flex-grow: 1;
			padding: 20px;
			.songDetailFooterOne{
				padding: 20px;
				margin-top: 50px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
		}
	}
</style>
