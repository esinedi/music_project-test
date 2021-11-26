<template>
	<view id="homePage">
		<view class="homePageSearch">
			<u-search style="width: 65%;" placeholder="姜云升 最近很火哦" v-model="keyword" :show-action = "false" @focus = "searchFocus"></u-search>
		</view>
		<u-swiper :list="imgList"></u-swiper>
		<view class="hHotSing">
			<view class="hHotSingP1" style="font-size: 13px; margin-left: 10px;">
				推荐
			</view>
			<view class="hHotSingP2" style="font-size: 18px; font-weight: bold; margin-left: 10px;margin-bottom: 5px;">
				每日推荐歌单
			</view>
			<scroll-view class="hotScrollX" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view @click="onSingMenu(item.id)" class="hotScrollXView" v-for="(item,index) in recommendResource">
					<view class="resourceCard">
						<image style="width: 100%;" :src="item.picUrl" mode="widthFix"></image>
						<view class="resourceCardP">
							{{item.name}}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="hHotSing">
			<view class="hHotSingP1" style="font-size: 13px; margin-left: 10px;">
				热门
			</view>
			<view class="hHotSingP2" style="font-size: 18px; font-weight: bold; margin-left: 10px;margin-bottom: 5px;">
				推荐歌单
			</view>
			<scroll-view class="hotScrollX" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view @click="onSingMenu(item.id)" class="hotScrollXView" v-for="(item,index) in personalized">
					<view class="resourceCard">
						<image style="width: 100%;" :src="item.picUrl" mode="widthFix"></image>
						<view class="resourceCardP">
							{{item.name}}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 用户cookie
				userCookie:'',
				// 轮播图
				imgList:[],
				// 推荐歌单
				recommendResource:[],
				// 飙升歌单
				personalized:[],
				scrollTop: 0,
				old: {
				    scrollTop: 0
				},
				// 搜索框
				keyword: ''
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
			// this.userCookie = this.$store.state.myCookie
			// 每日推荐歌单
			uni.request({
			    url: this.$Url + '/recommend/resource?cookie='+this.userCookie,
			    dataType: 'json', //默认 json格式
			    method: 'POST', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					this.recommendResource = res.data.recommend
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
			// // 刷新登录状态
			// uni.request({
			//     url: this.$Url + '/login/refresh',
			//     dataType: 'json', //默认 json格式
			//     method: 'GET', //请求方式
			// 	withCredentials:true,
			//     success: (res) => {
			// 		console.log(res)
			//     },
			//     fail: (error) => {
			//         console.log(error)
			//     }
			// })
			// uni.getStorage({
			// 	key:'user',
			// 	success(res) {
			// 		this.cookies = res.data.cookie
			// 	}
			// })
		},
		onShow(){
			// 轮播图
			uni.request({
			    url: this.$Url + '/banner',
			    dataType: 'json', //默认 json格式
			    method: 'GET', //请求方式
			    success: (res) => {
					this.imgList = []
					console.log(res.data.banners)
					for(let i = 0; i < res.data.banners.length; i++){
						this.imgList.push(res.data.banners[i].imageUrl)
					}
					// console.log(this.$store.state.myCookie)
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
			// 飙升歌单
			uni.request({
			    url: this.$Url + '/personalized',
			    dataType: 'json', //默认 json格式
			    method: 'GET', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					this.personalized = res.data.result
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
		},
		methods: {
			scroll: function(e) {
			    this.old.scrollTop = e.detail.scrollTop
			},
			// 搜索框获取焦点时候触发事件
			searchFocus(){
				uni.navigateTo({
					url:"../../pages/search/search"
				})
			},
			// 进入歌单页面
			onSingMenu(menuId){
				uni.navigateTo({
					url:"../../pages/menuId/menuId?menuId=" + menuId
				})
			}
		}
	}
</script>

<style lang="scss">
 #homePage{
	 background-color: #F2F2F0;
	 .homePageSearch{
		 width: 100%;
		 background-color: white;
		 padding: 15px 10px;
	 }
	 .hHotSing{
		 background-color: white;
		 padding: 10px 5px;
		 margin-top: 10px;
		 border-radius: 5px;
		 margin-bottom: 10px;
		 .hotScrollX{
			white-space: nowrap;
			width: 100%;
			.uni-scroll-view{
				width: 100%;
				height: 100%;
				.hotScrollXView{
					// 这个不知道啥意思
					display: inline-block;
					width: 28%;
					height: 150px;
					margin-left: 10px;
					margin-right: 10px;
					.resourceCard{
						width: 100%;
						height: 100%;
						.resourceCardP{
							width: 100%;
							height: 35px;
							font-size: 13px;
							overflow: hidden;
							white-space: normal;
						}
					}
				}
			}
		 }
	 }
 }
</style>
