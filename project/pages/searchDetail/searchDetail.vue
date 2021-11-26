<template>
	<view id="searchDetail">
		<view class="searchDetailTop">
			<image @click="searchBack" class="searchDetailTopImg" src="../../static/img/mineimg/arrow.png" mode="heightFix"></image>
			<u-search placeholder="姜云升 最近很火哦" v-model="keyword" :show-action = "false" @search = "searchDetails"></u-search>
		</view>
		<view class="searchDetailMain" style="display: flex; flex-direction: column; min-height: 100%;">
			<view class="">
				<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false" swiperWidth="750" active-color="#DC143C"></u-tabs-swiper>
			</view>
			<swiper style="display: flex; flex-grow: 1;" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item style="display: flex; flex-grow: 1;">
					<scroll-view scroll-y style="width: 100%; flex-grow: 1;" @scrolltolower="onreachBottom" v-if="totalOr">
						<view class="index0Top" v-if="singOr">
							<view class="" style="padding-top: 15px; margin-left: 25px; color: gray;">
								猜你喜欢
							</view>
							<view class="index0TopSinger">
								<image class="index0TopSingerImg" :src="total.artists[0].picUrl" mode=""></image>
								<view class="index0TopSingerP">
									<view class="index0TopSingerP1">
										歌手：{{singer}}
									</view>
									<view class="index0TopSingerP2">
										歌曲：{{singerSing}}
									</view>
								</view>
							</view>
							<view class="index0TopSinger">
								<image class="index0TopSingerImg" style="border-radius: 5px;" :src="singerAlbumImg" mode=""></image>
								<view class="index0TopSingerP">
									<view class="index0TopSingerP1">
										专辑：{{singerAlbum.name}}
									</view>
									<view class="index0TopSingerP2">
										歌手：{{singer}}
									</view>
								</view>
							</view>
						</view>
						<view class="index0Bottom">
							<view class="index0BottomTitle">
								单曲推荐
							</view>
							<view  @click="onSong(item.id)" class="index0BottomSing" v-for="(item,index) in total.songs">
								<view class="index0BottomSingItem">
									<view class="index0BottomSingItemP">
										<view class="index0BottomSingItemP1">
											{{item.name}}
										</view>
										<view class="index0BottomSingItemP2">
											<view class="index0BottomSingItemP2Name">
												{{item.artists[0].name}}-
											</view>
											<view class="index0BottomSingItemP2Album">
												{{item.album.name}}
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
					<scroll-view scroll-y style="width: 100%; flex-grow: 1;" @scrolltolower="onreachBottom" v-else>
						<view class="index0Else">
							找不到您要的歌曲信息
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item style="display: flex; flex-grow: 1;">
					<scroll-view scroll-y style="width: 100%; flex-grow: 1; padding: 10px;" @scrolltolower="onreachBottom" v-if="singerSongsOr">
						<view class="index1">
							<view class="menuIdMainMain" v-for="(item,index) in singerSongs">
								<view @click="onSong(item.id)" class="menuIdMainMainItem">
									<view class="menuIdMainMainItemLeft">
										<view class="menuIdMainMainItemName">
											{{item.name}}
										</view>
										<view class="menuIdMainMainItemArters">
											<view class="menuIdMainMainItemArter" v-for="(item2,index) in item.artists">
												{{item2.name}}
											</view>
										</view>
									</view>
									<image class="menuIdMainMainItemRight" style="height: 50px;" src="../../static/img/point.png" mode="heightFix"></image>
								</view>
							</view>
						</view>
					</scroll-view>
					<scroll-view scroll-y style="width: 100%; flex-grow: 1;" @scrolltolower="onreachBottom" v-else>
						<view class="index0Else">
							找不到您要的单曲信息
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item style="display: flex; flex-grow: 1;">
					<scroll-view scroll-y style="width: 100%; flex-grow: 1; padding: 15px;" @scrolltolower="onreachBottom" v-if="singerAlbumsOr">
						<view class="index2">
							<view @click="onSingMenu(item.id)" class="index0TopSinger" v-for="(item,index) in singerAlbums">
								<view class="index0TopSingerOne">
									<image class="index0TopSingerImg" style="border-radius: 5px;" :src="item.blurPicUrl" mode="widthFix"></image>
								</view>
								<view class="index0TopSingerP">
									<view class="index0TopSingerP1">
										专辑：{{item.name}}
									</view>
									<view class="index0TopSingerP2">
										歌手：{{item.artist.name}}
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
					<scroll-view scroll-y style="width: 100%; flex-grow: 1;" @scrolltolower="onreachBottom" v-else>
						<view class="index0Else">
							找不到您要的歌单信息
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item style="display: flex; flex-grow: 1;">
					<scroll-view scroll-y style="width: 100%; flex-grow: 1;" @scrolltolower="onreachBottom" v-if="singerVideosOr">
						<view class="index3">
							<view class="hotMainCard" v-for="(item,index) in singerVideos">
								<view class="hotMainCardP">
									<view class="hotMainCardP2">
										{{item.title}}
									</view>
								</view>
								<view class="hotMainCardImg" @click="mvPlay(item.vid,item.type)">
									<image style="width: 100%;" :src="item.coverUrl" mode="widthFix"></image>
									<image class="hotMainCardImgPlay" src="../../static/img/mvplay.png" mode="widthFix"></image>
								</view>
							</view>
						</view>
					</scroll-view>
					<scroll-view scroll-y style="width: 100%; flex-grow: 1;" @scrolltolower="onreachBottom" v-else>
						<view class="index0Else">
							找不到您要的视频信息
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 选项卡
				list: [{
					name: '综合'
				}, {
					name: '单曲'
				}, {
					name: '歌单',
				},{
					name: '视频',
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				// 搜索值
				keyword: '',
				// 传入的搜索值
				onkeyword:'',
				// 综合数据获取
				total:[],
				// 获取角色id
				userid:'',
				// 判断是否是歌手
				singOr:false,
				// 歌手信息
				singer:'',
				// 歌手曲子数
				singerSing:0,
				// 第一条专辑
				singerAlbum:{},
				// 专辑图片
				singerAlbumImg:'',
				// 判断综合单曲信息是否有
				totalOr:false,
				// 获取单曲
				singerSongs:[],
				// 判断是否有单曲
				singerSongsOr:false,
				// 获取专辑
				singerAlbums:[],
				// 判断是否有专辑
				singerAlbumsOr:false,
				// 获取视频
				singerVideos:[],
				// 判断是否有视频
				singerVideosOr:false,
			}
		},
		// 获取搜索值
		onLoad:function(options){
		  this.onkeyword = JSON.parse(options.searchOver)
		  console.log(this.onkeyword)
		},
		// 获取初始数据
		onShow(){
			// 获取多重搜索
			uni.request({
			    url: this.$Url + '/search/multimatch?keywords='+this.onkeyword,
			    dataType: 'json', //默认 json格式
			    method: 'GET', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					if(res.data.result.artist){
						if(res.data.result.artist.length != 0){
							this.singOr = true
							// 获取歌手名称
							this.singer = res.data.result.artist[0].name
							uni.request({
							    url: this.$Url + '/artist/detail?id='+res.data.result.artist[0].id,
							    dataType: 'json', //默认 json格式
							    method: 'GET', //请求方式
								withCredentials:true,
							    success: (ress) => {
									this.singerSing = ress.data.data.artist.musicSize
							    },
							    fail: (error) => {
							        console.log(error)
							    }
							})
							// 获取第一条专辑信息
							uni.request({
								url: this.$Url + '/artist/album?id='+res.data.result.artist[0].id,
								dataType: 'json', //默认 json格式
								method: 'GET', //请求方式
								withCredentials:true,
								success: (ress) => {
									this.singerAlbum = ress.data.hotAlbums[0]
									this.singerAlbumImg = ress.data.hotAlbums[0].blurPicUrl
								},
								fail: (error) => {
								    console.log(error)
								}
							})
						}else{
							this.singOr = false
						}
					}else{
						this.singOr = false
					}
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
			// 获取综合初始值
			uni.request({
			    url: this.$Url + '/search/suggest?keywords='+this.onkeyword,
			    dataType: 'json', //默认 json格式
			    method: 'GET', //请求方式
				withCredentials:true,
			    success: (res) => {
					this.total = res.data.result
					let results = JSON.stringify(res.data.result)
					if(results === "{}"){
						this.totalOr = false
					}else{
						this.totalOr = true
					}
					// if(res.data.result.artists) this.userid = res.data.result.artists[0].id
					// if(res.data.result.artists){
					// 	if(res.data.result.artists[0].alias.length == 0){
					// 		this.singOr = false
					// 	}else{
					// 		this.singOr = true
					// 	}
					// }
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
			// 获取单曲
			uni.request({
			    url: this.$Url + '/search?keywords='+this.onkeyword+'&type='+1,
			    dataType: 'json', //默认 json格式
			    method: 'GET', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					if(res.data.result.songCount != 0){
						this.singerSongsOr = true
						this.singerSongs = res.data.result.songs
					}else{
						this.singerSongsOr = false
					}
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
			// 获取专辑
			uni.request({
			    url: this.$Url + '/search?keywords='+this.onkeyword+'&type='+10,
			    dataType: 'json', //默认 json格式
			    method: 'GET', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					if(res.data.result.albumCount != 0){
						this.singerAlbumsOr = true
						this.singerAlbums = res.data.result.albums
					}else{
						this.singerAlbumsOr = false
					}
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
			// 获取视频
			uni.request({
			    url: this.$Url + '/search?keywords='+this.onkeyword+'&type='+1014,
			    dataType: 'json', //默认 json格式
			    method: 'GET', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					if(res.data.result.videoCount != 0){
						this.singerVideosOr = true
						this.singerVideos = res.data.result.videos
						console.log(this.singerVideos)
					}else{
						this.singerVideosOr = false
					}
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
		},
		methods: {
			// 返回主页
			searchBack(){
				uni.switchTab({
					url:"../homePage/homePage"
				})
			},
			// 前往搜索页面
			searchDetails(){
				uni.navigateTo({
					url:`../../pages/searchDetail/searchDetail?searchOver=${JSON.stringify(this.keyword)}`
				})
			},
			
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {
							
			},
			// 去往歌曲页面
			onSong(songId){
				uni.navigateTo({
					url:'../songDetail/songDetail?songId=' + songId
				})
			},
			// 进入歌单页面
			onSingMenu(menuId){
				uni.navigateTo({
					url:"../../pages/menuId/menuId?menuId=" + menuId
				})
			},
			// 进入视频页面
			
			mvPlay(id,type){
				if(type == 0){
					uni.navigateTo({
						url:"../mvDetail/mvDetail?mvid="+id
					})
				}else{
					uni.navigateTo({
						url:"../videoDetail/videoDetail?vid="+JSON.stringify(id)
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	#searchDetail{
		width: 100%;
		height: 100%;
		background-color: #F2F2F0;
		.searchDetailTop{
			width: 100%;
			background-color: white;
			padding: 15px 10px;
			display: flex;
			flex-direction: row;
			border-bottom: 1px solid #F2F2F2;
			.searchDetailTopImg{
				height: 20px;
				margin-top: 6px;
				margin-right: 10px;
			}
		}
		.searchDetailMain{
			background-color: #F2F2F0;
			.index0Top{
				background-color: white;
				margin: 15px 10px;
				border-radius: 10px;
				margin-bottom: 0px;
				.index0TopSinger{
					display: flex;
					flex-direction: row;
					padding: 15px 30px;
					.index0TopSingerImg{
						width: 60px;
						height: 60px;
						border-radius: 100%;
						margin-right: 20px;
					}
					.index0TopSingerP{
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						.index0TopSingerP1{
							font-size: 18px;
							font-weight: bold;
						}
						.index0TopSingerP2{
							font-size: 13px;
							color: gray;
						}
					}
				}
			}
			.index0Bottom{
				padding: 20px 15px;
				background-color: white;
				border-radius: 10px;
				margin: 15px 10px;
				.index0BottomTitle{
					font-size: 18px;
					font-weight: bold;
					margin-bottom: 5px;
					margin-left: 8px;
				}
				.index0BottomSing{
					padding: 0px 5px;
					.index0BottomSingItem{
						padding: 10px;
						display: flex;
						flex-direction: column;
						border-bottom: 1px solid #F2F2F0;
						.index0BottomSingItemP{
							.index0BottomSingItemP1{
								font-size: 18px;
								margin-bottom: 5px;
							}
							.index0BottomSingItemP2{
								font-size: 13px;
								color: gray;
								display: flex;
								flex-direction: row;
							}
						}
					}
				}
			}
			.index0Else{
				font-size: 25px;
				font-weight: bold;
				text-align: center;
				margin-top: 100px;
			}
			.index1{
				padding: 10px;
				background-color: white;
				border-radius: 10px;
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
			.index2{
				.index0TopSinger{
					display: flex;
					flex-direction: row;
					padding: 15px 30px;
					background-color: white;
					border-radius: 10px;
					margin-bottom: 10px;
					.index0TopSingerOne{
						width: 60px;
						height: 60px;
						margin-right: 20px;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						.index0TopSingerImg{
							width: 60px;
							border-radius: 100%;
						}
					}
					.index0TopSingerP{
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						.index0TopSingerP1{
							font-size: 18px;
							font-weight: bold;
						}
						.index0TopSingerP2{
							font-size: 13px;
							color: gray;
						}
					}
				}
			}
			.index3{
				width: 100%;
				.hotMainCard{
					width: 100%;
					margin-bottom: 10px;
					background-color: white;
					.hotMainCardP{
						box-sizing: border-box;
						height: 40px;
						margin-left: 20px;
						display: flex;
						flex-direction: row;
						text-align: center;
						justify-content: flex-start;
						line-height: 40px;
						.hotMainCardP1{
							color: red;
							font-size: 10px;
						}
						.hotMainCardP2{
							font-size: 10px;
						}
					}
					.hotMainCardImg{
						position: relative;
						.hotMainCardImgPlay{
							width: 50px;
							opacity: 0.7;
							z-index: 2;
							position: absolute;
							left: 50%;
							top: 50%;
							margin-left: -25px;
							margin-top: -25px;
						}
					}
				}
			}
		}
	}
</style>
