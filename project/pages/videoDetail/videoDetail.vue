<template>
	<view id="mvDetail">
		<view class="">
			
		</view>
		<video class="mvDetailVideo" :src="mvVideo" style="width: 100%;" :autoplay="true" :controls="false" @timeupdate="onPlayTime"></video>
		<view class="mvDetailFooter">
			<view class="mvDetailFooterMain">
				<view class="mvDetailFooterMainName">
					<view class="mvDetailFooterMainNameP2">
						{{mvData.title}}
					</view>
				</view>
				<view class="mvDetailFooterMainLike">
					<view class="mvDetailFooterMainLikeOne">
						<view class="mvDetailFooterMainLikeTwo" style="margin-bottom: 10px;">
							<u-icon style="margin: 0 auto;" v-if="mvLikeYesOrNo" @click="onLike(mvLikeYes)" name="thumb-up" color="white" size="65"></u-icon>
							<u-icon style="margin: 0 auto;" v-else @click="onLike(mvLikeNo)" name="thumb-up" color="red" size="65"></u-icon>
							<view class="mvDetailFooterMainLikeTwoP">
								{{mvLike}}
							</view>
						</view>
						<view class="mvDetailFooterMainLikeTwo">
							<u-icon @click="footerShow=true" style="margin: 0 auto;" name="chat" color="white" size="65"></u-icon>
							<view class="mvDetailFooterMainLikeTwoP">
								{{mvComment}}
							</view>
						</view>
					</view>
				</view>
			</view>
			<u-popup v-model="footerShow" mode="bottom" border-radius="14" height="50%" :closeable="true">
				<view class="footerShowTop" style="text-align: center; margin: 15px 0px; font-size: 15px; font-weight: bold;">
					热门评论
				</view>
				<view class="footerShowMain" v-for="(item,index) in userMvComment">
					<view class="footerShowMainItem" style="padding: 15px; display: flex; flex-direction: row;">
						<image class="footerShowMainItemImg" style="margin-right: 10px; width: 10%; height: 40px; border-radius: 100%;" :src="item.user.avatarUrl" mode="heightFix"></image>
						<view class="" style="width: 60%; display: flex; flex-direction: column; justify-content: space-around;">
							<view class="" style="font-size: 13px; font-weight: bold;">
								{{item.user.nickname}}
							</view>
							<view class="" style="width: 100%; height: 16px; overflow: hidden; font-size: 13px;">
								{{item.content}}
							</view>
						</view>
						<view class="" style="flex-grow: 1; display: flex; flex-direction: row; justify-content: flex-end;">
							<view class="" style="margin-right: 5px;">
								{{item.likedCount}}
							</view>
							<u-icon style="display: flex; flex-direction: column; justify-content: flex-start; margin-top: 4px;" name="thumb-up" color="black" size="20"></u-icon>
						</view>
					</view>
				</view>
			</u-popup>
			<u-line-progress class="mvDetailFooterLine" height="10" :show-percent="false" :percent="mvPlayTime" :round="true" active-color="#DC143C"></u-line-progress>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 用户cookie
				userCookie:'',
				// mv的id
				mvid:'',
				// mv的地址
				mvVideo:'',
				// 进度条参数
				mvPlayTime:0,
				// 获取mv数据
				mvData:[],
				// 获取点赞数,评论数
				mvLike:0,
				mvComment:0,
				// 点赞
				mvLikeYes:1,
				// 取消点赞
				mvLikeNo:2,
				// 点赞判断
				mvLikeYesOrNo:true,
				// 底部弹窗
				footerShow:false,
				// 用户评论信息
				userMvComment:[],
			}
		},
		onLoad:function(options){
		  this.mvid = JSON.parse(options.vid)
		  // 获取用户coolie
		  uni.getStorage({
		  	key:"user",
		  	success: (res) => {
		  		this.$store.state.myCookie = res.data.cookie
		  	}
		  })
		  this.userCookie = this.$store.state.myCookie
		  // 获取用户评论信息
		  uni.request({
		      url: this.$Url + '/comment/video?id=' + this.mvid,
		      dataType: 'json', //默认 json格式
		      method: 'GET', //请求方式
		  	withCredentials:true,
		      success: (res) => {
		  		this.userMvComment = res.data.hotComments
		      },
		      fail: (error) => {
		          console.log(error)
		      }
		  })
		},
		onShow(){
			// 获取mv地址
			uni.request({
			    url: this.$Url + '/video/url?id=' + this.mvid,
			    dataType: 'json', //默认 json格式
			    method: 'GET', //请求方式
				withCredentials:true,
			    success: (res) => {
					this.mvVideo = res.data.urls[0].url
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
			// 获取mv数据
			uni.request({
			    url: this.$Url + '/video/detail?id=' + this.mvid,
			    dataType: 'json', //默认 json格式
			    method: 'GET', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					this.mvData = res.data.data
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
			// 获取mv点赞数，评论数
			uni.request({
			    url: this.$Url + '/video/detail/info?vid=' + this.mvid,
			    dataType: 'json', //默认 json格式
			    method: 'GET', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					this.mvLike = res.data.likedCount
					this.mvComment = res.data.commentCount
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
		},
		methods: {
			onPlayTime(event){
				// console.log(event.detail)
				// console.log(event.detail.currentTime/event.detail.duration)
				this.mvPlayTime = (event.detail.currentTime/event.detail.duration)*100
			},
			onLike(like){
				uni.request({
				    url: this.$Url + '/resource/like?t=' + like + '&type=1&id=' + this.mvid + '&cookie=' +this.userCookie,
				    dataType: 'json', //默认 json格式
				    method: 'GET', //请求方式
					withCredentials:true,
				    success: (res) => {
						console.log(res)
						this.mvLikeYesOrNo = !this.mvLikeYesOrNo
						// 获取mv点赞数，评论数
						uni.request({
						    url: this.$Url + '/video/detail/info?vid=' + this.mvid,
						    dataType: 'json', //默认 json格式
						    method: 'GET', //请求方式
							withCredentials:true,
						    success: (res) => {
								console.log(res)
								this.mvLike = res.data.likedCount
								this.mvComment = res.data.commentCount
						    },
						    fail: (error) => {
						        console.log(error)
						    }
						})
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
	#mvDetail{
		width: 100%;
		height: 100%;
		background-color: #333333;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.mvDetailVideo{
			margin-top: 180px;
		}
		.mvDetailFooter{
			flex-grow: 1;
			position: relative;
			.footerShow{
				.footerShowTop{
					padding:100px;
				}
			}
			.mvDetailFooterMain{
				margin-top: 80px;
				display: flex;
				flex-direction: row;
				.mvDetailFooterMainName{
					width: 50%;
					color: white;
					padding-top: 60px;
					padding-left: 15px;
					.mvDetailFooterMainNameP1{
						width: 100%;
						font-size: 13px;
						height: 20px;
						overflow: hidden;
					}
					.mvDetailFooterMainNameP2{
						width: 100%;
						font-size: 15px;
						height: 20px;
						overflow: hidden;
					}
				}
				.mvDetailFooterMainLike{
					padding-right: 20px;
					flex-grow: 1;
					height: 100%;
					color: white;
					display: flex;
					flex-direction: row;
					justify-content: flex-end;
					.mvDetailFooterMainLikeOne{
						.mvDetailFooterMainLikeTwo{
							display: flex;
							flex-direction: column;
							text-align: center;
						}
					}
				}
			}
			.mvDetailFooterLine{
				position: absolute;
				left: 0px;
				bottom: 0px;
			}
		}
	}
</style>
