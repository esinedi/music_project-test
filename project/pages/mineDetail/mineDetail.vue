<template>
	<view id="mineDetail">
		<view class="mineDetailTop">
			<view class="mineDetailTopUser">
				<image class="mineDetailTopUserImg" :src="userImg" mode="widthFix"></image>
				<view class="mineDetailTopUserName">
					{{userName}}
				</view>
			</view>
			<view class="mineDetailTopMach">
				<view class="mineDetailTopMachItem">
					<image class="mineDetailTopMachItemImg" src="../../static/img/minedetailimg/message.png" mode="widthFix"></image>
					<view class="mineDetailTopMachItemP">
						我的消息
					</view>
				</view>
				<view class="mineDetailTopMachItem">
					<image class="mineDetailTopMachItemImg" src="../../static/img/minedetailimg/friend.png" mode="widthFix"></image>
					<view class="mineDetailTopMachItemP">
						我的好友
					</view>
				</view>
				<view class="mineDetailTopMachItem">
					<image class="mineDetailTopMachItemImg" src="../../static/img/minedetailimg/home.png" mode="widthFix"></image>
					<view class="mineDetailTopMachItemP">
						个人主页
					</view>
				</view>
				<view class="mineDetailTopMachItem">
					<image class="mineDetailTopMachItemImg" src="../../static/img/minedetailimg/shopping.png" mode="widthFix"></image>
					<view class="mineDetailTopMachItemP">
						个性装扮
					</view>
				</view>
			</view>
		</view>
		<view class="mineDetailTopTwo">
			<image class="mineDetailTopTwoImg" src="../../static/img/minedetailimg/edit.png" mode="heightFix"></image>
			<view class="mineDetailTopTwoP">
				创作者中心
			</view>
		</view>
		<view class="mineDetailMain">
			<view class="mineDetailMainItem">
				<image class="mineDetailMainItemImg" src="../../static/img/minedetailimg/play.png" mode="heightFix"></image>
				<view class="mineDetailMainItemP">
					听歌识曲
				</view>
			</view>
			<view class="mineDetailMainItem">
				<image class="mineDetailMainItemImg" src="../../static/img/minedetailimg/performance.png" mode="heightFix"></image>
				<view class="mineDetailMainItemP">
					演出
				</view>
			</view>
			<view class="mineDetailMainItem">
				<image class="mineDetailMainItemImg" src="../../static/img/minedetailimg/cart.png" mode="heightFix"></image>
				<view class="mineDetailMainItemP">
					商城
				</view>
			</view>
			<view class="mineDetailMainItem">
				<image class="mineDetailMainItemImg" src="../../static/img/minedetailimg/gram.png" mode="heightFix"></image>
				<view class="mineDetailMainItemP">
					游戏推荐
				</view>
			</view>
			<view class="mineDetailMainItem">
				<image class="mineDetailMainItemImg" src="../../static/img/minedetailimg/positioning.png" mode="heightFix"></image>
				<view class="mineDetailMainItemP">
					附近的人
				</view>
			</view>
			<view class="mineDetailMainItem">
				<image class="mineDetailMainItemImg" src="../../static/img/minedetailimg/bell.png" mode="heightFix"></image>
				<view class="mineDetailMainItemP">
					口袋彩铃
				</view>
			</view>
		</view>
		<view class="mineDetailMainTwo">
			<image class="mineDetailMainTwoImg" src="../../static/img/minedetailimg/order.png" mode="heightFix"></image>
			<view class="mineDetailMainTwoP">
				我的订单
			</view>
		</view>
		<view class="mineDetailFooter">
			<view class="mineDetailFooterItem">
				<view class="mineDetailFooterItemMain">
					<image class="mineDetailFooterItemMainImg" src="../../static/img/minedetailimg/night.png" mode="heightFix"></image>
					<view class="mineDetailFooterItemMainP">
						夜间模式
					</view>
				</view>
			</view>
			<view class="mineDetailFooterItem">
				<view class="mineDetailFooterItemMain">
					<image class="mineDetailFooterItemMainImg" src="../../static/img/minedetailimg/set.png" mode="heightFix"></image>
					<view class="mineDetailFooterItemMainP">
						设置
					</view>
				</view>
			</view>
			<view class="mineDetailFooterItem">
				<view class="mineDetailFooterItemMain" @click="exEnter">
					<image class="mineDetailFooterItemMainImg" src="../../static/img/minedetailimg/error.png" mode="heightFix"></image>
					<view class="mineDetailFooterItemMainP">
						退出
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
				// 用户uil
				uil:'',
				// 用户基础信息
				// 头像
				userImg:'',
				// 名称
				userName:'',
			}
		},
		onLoad() {
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
			    },
			    fail: (error) => {
			        console.log(error)
			    }
			})
		},
		methods: {
			exEnter(){
				uni.request({
					url: this.$Url + '/logout',
				    dataType: 'json', //默认 json格式
				    method: 'POST', //请求方式
					withCredentials:true,
				    success: (res) => {
						if(res.data.code == 200){
							uni.removeStorage({
								key:"user",
								success: () => {
									// 退出成功后返回登录界面
									uni.navigateTo({
										url:"../enter/enter"
									})
								}
							})
						}else{
							window.location.reload();
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
	#mineDetail{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.mineDetailTop{
			width: 100%;
			border-top: 1px solid #F2F2F0;
			border-bottom: 1px solid #F2F2F0;
			padding: 20px;
			.mineDetailTopUser{
				display: flex;
				flex-direction: row;
				margin-bottom: 25px;
				.mineDetailTopUserImg{
					width: 30px;
					border-radius: 100%;
					margin-right: 20px;
				}
				.mineDetailTopUserName{
					height: 30px;
					line-height: 30px;
					text-align: center;
				}
			}
			.mineDetailTopMach{
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.mineDetailTopMachItem{
					width: 25%;
					.mineDetailTopMachItemImg{
						width: 50%;
						display: inline-block;
						margin-left: 25%;
					}
					.mineDetailTopMachItemP{
						text-align: center;
					}
				}
			}
		}
		.mineDetailTopTwo{
			width: 100%;
			border-bottom: 1px solid #F2F2F0;
			padding: 15px;
			display: flex;
			flex-direction: row;
			.mineDetailTopTwoImg{
				height: 20px;
				margin-right: 10px;
			}
			.mineDetailTopTwoP{
			}
		}
		.mineDetailMain{
			width: 100%;
			border-bottom: 1px solid #F2F2F0;
			padding: 15px;
			.mineDetailMainItem{
				display: flex;
				flex-direction: row;
				padding: 15px 0px;
				.mineDetailMainItemImg{
					height: 20px;
					margin-right: 10px;
				}
				.mineDetailMainItemP{
				}
			}
			.mineDetailMainItem:first-child{
				padding-top: 0px;
			}
			.mineDetailMainItem:last-child{
				padding-bottom: 0px;
			}
		}
		.mineDetailMainTwo{
			width: 100%;
			border-bottom: 1px solid #F2F2F0;
			padding: 15px;
			display: flex;
			flex-direction: row;
			.mineDetailMainTwoImg{
				height: 20px;
				margin-right: 10px;
			}
			.mineDetailMainTwoP{
			}
		}
		.mineDetailFooter{
			flex-grow: 1;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.mineDetailFooterItem{
				box-sizing: border-box;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				border-right: 1px solid #F2F2F0;
				.mineDetailFooterItemMain{
					width: 100%;
					display: flex;
					flex-direction: row;
					justify-content: center;
					.mineDetailFooterItemMainImg{
						height: 20px;
					}
					.mineDetailFooterItemMainP{
						
					}
				}
			}
			.mineDetailFooterItem:last-child{
				border-right: 0px;
			}
		}
	}
</style>
