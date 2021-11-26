<template>
	<view id="search">
		<view class="searchTop">
			<image @click="searchBack" class="searchTopImg" src="../../static/img/mineimg/arrow.png" mode="heightFix"></image>
			<u-search placeholder="姜云升 最近很火哦" v-model="keyword" :show-action = "false" @search = "searchDetails"></u-search>
		</view>
		<view class="searchTitle">
			热搜榜
		</view>
		<view class="searchLists">
			<view class="searchListSingle" v-for="(item,index) in searchList" @click="hotSearch(item.searchWord)">
				<view class="searchListSingleP1">
					{{index+1}}
				</view>
				<view class="searchListSingleP2">
					{{item.searchWord}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				searchList:[],
			}
		},
		onShow(){
			// 热搜歌单
			uni.request({
			    url: this.$Url + '/search/hot/detail',
			    dataType: 'json', //默认 json格式
			    method: 'GET', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					this.searchList = res.data.data
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
			// 搜索热搜榜
			hotSearch(searchWord){
				uni.navigateTo({
					url:`../../pages/searchDetail/searchDetail?searchOver=${JSON.stringify(searchWord)}`
				})
			}
		}
	}
</script>

<style lang="scss">
	#search{
		width: 100%;
		height: 100%;
		background-color: #F2F2F0;
		.searchTop{
			width: 100%;
			background-color: white;
			padding: 15px 10px;
			display: flex;
			flex-direction: row;
			border-bottom: 1px solid #F2F2F2;
			.searchTopImg{
				height: 20px;
				margin-top: 6px;
				margin-right: 10px;
			}
		}
		.searchTitle{
			font-size: 18px;
			font-weight: bold;
			padding: 15px 10px;
			border-bottom: 1px solid #F2F2F2;
			background-color: white;
		}
		.searchLists{
			width: 100%;
			padding: 10px 10px;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			background-color: white;
			.searchListSingle{
				width: 50%;
				display: flex;
				flex-direction: row;
				margin-bottom: 15px;
				.searchListSingleP1{
					margin-right: 10px;
				}
			}
			.searchListSingle:nth-child(-n+3) .searchListSingleP1{
				color: red;
				font-weight: bold;
			}
			.searchListSingle:nth-child(-n+3) .searchListSingleP2{
				font-weight: bold;
			}
		}
	}
</style>
