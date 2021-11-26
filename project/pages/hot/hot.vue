<template>
	<view id="hot">
		<view class="hotMain" v-for="(item,index) in personalizedMV">
			<view class="hotMainCard">
				<view class="hotMainCardP">
					<view class="hotMainCardP1">
						{{item.artists[0].name}}
					</view>
					<view class="hotMainCardP2">
						-{{item.name}}
					</view>
				</view>
				<view class="hotMainCardImg" @click="mvPlay(item.id)">
					<image style="width: 100%;" :src="item.cover" mode="widthFix"></image>
					<image class="hotMainCardImgPlay" src="../../static/img/mvplay.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 推荐MV基础信息
				personalizedMV:[],
			}
		},
		onShow() {
			// 推荐MV
			uni.request({
			    url: this.$Url + '/mv/first?limit=10',
			    dataType: 'json', //默认 json格式
			    method: 'GET', //请求方式
				withCredentials:true,
			    success: (res) => {
					console.log(res)
					this.personalizedMV = res.data.data
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
		},
		methods: {
			mvPlay(id){
				uni.navigateTo({
					url:"../mvDetail/mvDetail?mvid="+id
				})
			}
		}
	}
</script>

<style lang="scss">
	#hot{
		width: 100%;
		background-color: #F2F2F0;
		padding-bottom: 60px;
		.hotMain{
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
</style>
