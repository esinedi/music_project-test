<template>
	<view id="mine">
		<view class="mineMainTop">
			<image @click="toMainDetail" style="width: 27px; margin-left: 7px;" src="../../static/img/mineimg/meau.png" mode="widthFix"></image>
			<image @click="toSearchDetail" style="width: 27px; margin-right: 7px;" src="../../static/img/mineimg/search.png" mode="widthFix"></image>
		</view>
		<view class="mineTop">
			<image class="mineTopImg" :src="userImg" mode="widthFix"></image>
			<view class="mineTopName">
				<view class="mineTopNameP1">
					{{userName}}
				</view>
				<view class="mineTopNameLevel">
					Lv.{{userGrade}}
				</view>
			</view>
		</view>
		<view class="mineIcons">
			<view class="mineIconsMain">
				<view class="mineIcon">
					<image class="mineIconImg" src="../../static/img/mineimg/play.png" mode="widthFix"></image>
					<view class="mineIconP">
						最近播放
					</view>
				</view>
				<view class="mineIcon">
					<image class="mineIconImg" src="../../static/img/mineimg/down.png" mode="widthFix"></image>
					<view class="mineIconP">
						本地/下载
					</view>
				</view>
				<view class="mineIcon">
					<image class="mineIconImg" src="../../static/img/mineimg/down-two.png" mode="widthFix"></image>
					<view class="mineIconP">
						云盘
					</view>
				</view>
				<view class="mineIcon">
					<image class="mineIconImg" src="../../static/img/mineimg/yes.png" mode="widthFix"></image>
					<view class="mineIconP">
						已购
					</view>
				</view>
				<view class="mineIcon">
					<image class="mineIconImg" src="../../static/img/mineimg/firend.png" mode="widthFix"></image>
					<view class="mineIconP">
						我的好友
					</view>
				</view>
				<view class="mineIcon">
					<image class="mineIconImg" src="../../static/img/mineimg/collect.png" mode="widthFix"></image>
					<view class="mineIconP">
						收藏和赞
					</view>
				</view>
				<view class="mineIcon">
					<image class="mineIconImg" src="../../static/img/mineimg/log.png" mode="widthFix"></image>
					<view class="mineIconP">
						我的播客
					</view>
				</view>
				<view class="mineIcon">
					<image class="mineIconImg" src="../../static/img/mineimg/music.png" mode="widthFix"></image>
					<view class="mineIconP">
						音乐罐头
					</view>
				</view>
			</view>
		</view>
		<view class="mineFaviates">
			<view class="mineFaviatesMain">
				<image class="mineFaviatesMainImg" :src="userBackground" mode="heightFix"></image>
				<view class="mineFaviatesMainP">
					<view class="mineFaviatesMainP1">
						我喜欢的音乐
					</view>
					<view class="mineFaviatesMainP2">
						共{{userFaviatesNum}}首
					</view>
				</view>
			</view>
		</view>
		<view class="mineFaviates">
			<view class="mineFaviatesHeader">
				歌单({{userPlaylist.length}}个)
			</view>
			<view class="mineFaviatesMain" v-for="(item,index) in userPlaylist">
				<image class="mineFaviatesMainImg" :src="item.coverImgUrl" mode="heightFix"></image>
				<view class="mineFaviatesMainP">
					<view class="mineFaviatesMainP1">
						{{item.name}}
					</view>
					<view class="mineFaviatesMainP2">
						共{{item.trackCount}}首
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 用户cookie
				userCookie:'',
				// 用户uil
				uil:'',
				// 用户基础信息
				// 头像
				userImg:'',
				// 名称
				userName:'',
				// 背景
				userBackground:'',
				// 等级
				userGrade:'',
				// 喜欢的音乐id
				userFaviates:[],
				// 喜欢的音乐数量
				userFaviatesNum:0,
				// 用户歌单信息
				userPlaylist:[],
			}
		},
		onLoad() {
			// 获取用户coolie
			uni.getStorage({
				key:"user",
				success: (res) => {
					this.$store.state.myCookie = res.data.cookie
				}
			})
			this.userCookie = this.$store.state.myCookie
			// 获取本地的uil
			uni.getStorage({
				key:"user",
				success: (res) => {
					this.uil = res.data.account.id
				}
			})
			// 获取头像以及名称
			uni.request({
			    url: this.$Url + '/user/detail?uid=' + this.uil,
			    dataType: 'json', //默认 json格式
			    method: 'GET', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					this.userImg = res.data.profile.avatarUrl
					this.userName = res.data.profile.nickname
					this.userGrade = res.data.level
					this.userBackground = res.data.profile.backgroundUrl
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
			// 获取喜欢的音乐
			uni.request({
			    url: this.$Url + '/likelist?uid=' + this.uil + '&cookie=' + this.userCookie,
			    dataType: 'json', //默认 json格式
			    method: 'POST', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					this.userFaviates = res.data.ids
					this.userFaviatesNum = res.data.ids.length
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
			// 获取歌单
			uni.request({
			    url: this.$Url + '/user/playlist?uid=' + this.uil,
			    dataType: 'json', //默认 json格式
			    method: 'GET', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					this.userPlaylist = res.data.playlist
					console.log(this.userPlaylist)
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
		},
		methods: {
			// 前往我的详情页
			toMainDetail(){
				uni.navigateTo({
					url:"../mineDetail/mineDetail"
				})
			},
			// 前往搜索页面
			toSearchDetail(){
				uni.navigateTo({
					url:"../../pages/search/search"
				})
			}
		}
	}
</script>

<style lang="scss">
	#mine{
		width: 100%;
		background-color: #F2F2F0;
		padding-bottom: 70px;
		.mineMainTop{
			width: 100%;
			background-color: #F2F2F0;
			padding: 15px 10px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}
		.mineTop{
			width: 90%;
			height: 50px;
			margin: 0 auto;
			.mineTopImg{
				width: 15%;
				border-radius: 100%;
				float: left;
				margin-right: 7%;
			}
			.mineTopName{
				height: 50px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				.mineTopNameP1{
					font-weight: bold;
				}
				.mineTopNameLevel{
					width: 40px;
					font-size: 10px;
					background-color: white;
					text-align: center;
					border-radius: 8px;
				}
			}
		}
		.mineIcons{
			width: 90%;
			margin: 0 5%;
			background-color: white;
			border-radius: 10px;
			margin-top: 20px;
			padding: 20px;
			padding-bottom: 10px;
			.mineIconsMain{
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				flex-wrap: wrap;
				text-align: center;
				.mineIcon{
					width: 23%;
					margin-bottom: 10px;
					.mineIconImg{
						width: 60%;
					}
					.mineIconP{
						font-size: 13px;
					}
				}
			}
		}
		.mineFaviates{
			width: 90%;
			margin: 0 5%;
			background-color: white;
			border-radius: 10px;
			margin-top: 20px;
			padding: 15px;
			.mineFaviatesHeader{
				font-size: 12px;
				margin-bottom: 10px;
				color: gray;
			}
			.mineFaviatesMain{
				width: 100%;
				height: 50px;
				margin-bottom: 10px;
				.mineFaviatesMainImg{
					height: 50px;
					border-radius: 10px;
					float: left;
					margin-right: 15px;
				}
				.mineFaviatesMainP{
					height: 50px;
					float: left;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.mineFaviatesMainP1{
						font-weight: bold;
					}
					.mineFaviatesMainP2{
						font-size: 13px;
					}
				}
			}
			.mineFaviatesMain:last-child{
				margin-bottom: 0px;
			}
		}
	}
</style>
