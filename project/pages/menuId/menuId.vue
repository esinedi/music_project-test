<template>
	<view id="menuId">
		<view class="menuIdTop">
			<image class="menuIdTopBack" :src="imageURL" mode=""></image>
			<view class="menuIdTopOver">
			</view>
			<u-icon style="position: absolute; left: 15px; top: 15px;" @click="homeBack" name="arrow-left" color="#000000" size="40"></u-icon>
			<view class="menuIdTopMain">
				<image class="menuIdTopMainImg" :src="imageURL" mode="heightFix"></image>
				<view class="menuIdTopMainName">
					{{menuName.name}}
				</view>
			</view>
		</view>
		<view class="menuIdTwo">
			<view class="menuIdTwoMain">
				<view class="menuIdTwoMainOne">
					<view style="margin-right: 5px;" class="menuIdTwoMainOneImg">
						<u-icon name="more-circle" color="#000000" size="40"></u-icon>
					</view>
					<view class="menuIdTwoMainOneNum">
						{{menuName.commentCount}}
					</view>
				</view>
				<view class="menuIdTwoMainOne">
					<view style="margin-right: 5px;" class="menuIdTwoMainOneImg">
						<u-icon name="share" color="#000000" size="40"></u-icon>
					</view>
					<view class="menuIdTwoMainOneNum">
						{{menuName.shareCount}}
					</view>
				</view>
			</view>
		</view>
		<view class="menuIdMain">
			<view class="menuIdMainMain" v-for="(item,index) in meunDetails">
				<view @click="onSong(item.id)" class="menuIdMainMainItem">
					<view class="menuIdMainMainItemLeft">
						<view class="menuIdMainMainItemName">
							{{item.name}}
						</view>
						<view class="menuIdMainMainItemArters">
							<view class="menuIdMainMainItemArter" v-for="(item2,index) in item.ar">
								{{item2.name}}
							</view>
						</view>
					</view>
					<image class="menuIdMainMainItemRight" style="height: 50px;" src="../../static/img/point.png" mode="heightFix"></image>
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
				// 歌单id
				menuId:'',
				// 歌单内容
				meunDetails:[],
				// 背景图片
				imageURL:'',
				// 歌单简介
				menuName:'',
				// 歌单简介
				// menuIntroduction:'',
			}
		},
		onLoad:function(options){
		  this.menuId = JSON.parse(options.menuId)
		  // 获取用户coolie
		  uni.getStorage({
		  	key:"user",
		  	success: (res) => {
		  		this.$store.state.myCookie = res.data.cookie
		  	}
		  })
		  this.userCookie = this.$store.state.myCookie
		},
		onShow() {
			// 歌单内容
			uni.request({
			    url: this.$Url + '/playlist/detail?id='+this.menuId + '&cookie=' + this.userCookie,
			    dataType: 'json', //默认 json格式
			    method: 'POST', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					this.meunDetails = res.data.playlist.tracks
					this.imageURL = res.data.playlist.coverImgUrl
					this.menuName = res.data.playlist
					// this.menuIntroduction = res.data.playlist.description
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
		},
		methods: {
			homeBack(){
				uni.switchTab({
					url:'../homePage/homePage'
				})
			},
			onSong(songId){
				uni.navigateTo({
					url:'../songDetail/songDetail?songId=' + songId
				})
			}
		}
	}
</script>

<style lang="scss">
	#menuId{
		.menuIdTop{
			width: 100%;
			height: 220px;
			position: relative;
			box-sizing:border-box;
			overflow: hidden;
			// z-index:1;
			.menuIdTopBack{
				box-sizing: border-box;
				overflow: hidden;
				width: 100%;
				height: 220px;
				position: absolute;
				left: 0;
				bottom: 0;
				z-index:-1;
				-webkit-filter: blur(5rpx);
				filter: blur(15rpx) brightness(100%); // 模糊半径和变暗
				transform: scale(1.2); // 控制边缘是否模糊，小于1的话边缘会模糊
			}
			.menuIdTopOver{
				position: absolute;
				height: 100%;
				width: 220%;
				top: 0;
				background: rgba(0, 0, 0, .1);
				z-index: -1;
				opacity: 0.5;
			}
			.menuIdTopMain{
				position: absolute;
				left: 20px;
				top: 60px;
				padding: 5px;
				display: flex;
				flex-direction: row;
				.menuIdTopMainImg{
					height: 100px;
					margin-right: 25px;
				}
				.menuIdTopMainName{
					width: 50%;
					color: white;
					font-size: 18px;
					font-weight: bold;
					margin-top: 15px;
				}
			}
		}
		.menuIdTwo{
			width: 100%;
			height: 50px;
			display: flex;
			flex-direction: row;
			justify-content: center;
			.menuIdTwoMain{
				width: 80%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.menuIdTwoMainOne{
					height: 100%;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					flex-grow: 1;
				}
			}
		}
		.menuIdMain{
			margin: 15px;
			.menuIdMainMain{
				display: flex;
				flex-direction: column;
				.menuIdMainMainItem{
					width: 100%;
					padding: 10px 5px;
					display: flex;
					flex-direction: row;
					.menuIdMainMainItemLeft{
						width: 80%;
						.menuIdMainMainItemName{
							font-size: 16px;
							font-weight: bold;
							margin-bottom: 5px;
						}
						.menuIdMainMainItemArters{
							font-size: 12px;
							color: gray;
							display: flex;
							flex-direction: row;
							.menuIdMainMainItemArter:after{
								content: "&";
							}
							.menuIdMainMainItemArter:last-child:after{
								content: "";
							}
						}
					}
					.menuIdMainMainItemRight{
						margin-left: 20px;
						flex-grow: 1;
						flex-direction: column;
						justify-content: flex-end;
						align-items: flex-end;
					}
				}
			}
		}
	}
</style>
