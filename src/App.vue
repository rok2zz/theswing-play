<template>
	<div :class="$style.container">
		<div :class="$style.header">
			<div :class="$style.logo">
				<img src="./assets/images/logo.png">
			</div>
			<div :class="$style.menu">
				<img @click="openMenu" src="./assets/images/ic_menu.png">
			</div>
		</div>
		<div :class="$style.router">
			<router-view />
			<div v-if="isMenuOpen" :class="$style.modal"  @click="closeMenu">
				<div :class="$style.alert" @click.stop>
					<div :class="$style.header">
						<div :class="$style.blank"></div>
						<div :class="$style.btnX" @click="closeMenu">
							<img src="./assets/images/btn_x.png">
						</div>
					</div>
					<div :class="$style.contents">
						<span>서비스 준비중입니다.</span>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<style lang="scss">
</style>

<style lang="scss" module scoped>
@import "@/assets/scss/utils.scss";

.container {
	height: 100%;
	min-height: 100vh;

	@include mobile {
		width: 100%;
		min-height: initial;
	}
	
	> .header {
		width: 100%;
		min-width: 1200px;

		display: flex;
		align-items: center;

		padding: 70px 85px 0px 85px;

		color: white;

		position: absolute;
		top: 0;
		left: 0;

		z-index: 1;

		@include mobile {
			width: 100%;
			min-width: initial;

			padding: 40px 30px 0px 30px
		}

		> .logo {
			width: 100%;

			> img {
				width: 290px;
				height: 55px;

				@include mobile {
					width: 150px;
					height: auto;
				}
			}
		}

		> .menu {
			width: 100%;

			text-align: right;


			> img {
				width: 50px;
				height: 35px;

				cursor: pointer;

				@include mobile {
					width: 30px;
					height: auto;
				}
			}
		}
	}
	
	> .router {
		width: 100%;

		position: relative;
		z-index: 0;

		> .modal {
			display: flex;
			justify-content: center;
			align-items: center;

			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.8);

			z-index: 2;

			.alert {
				width: 500px;
				height: 300px;

				align-items: center;

				padding: 20px;
				
				box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
				border-radius: 8px;

				background-color: white;

				@include mobile {
					width: 300px;
					height: 180px;
				}

				> .header {
					width: 100%;
					display: flex;

					> .blank {
						width: 100%
					}

					> .btnX {
						width: 44px;
						height: 44px;

						cursor: pointer;

						> img {
							width: 24px;
							height: 24px;

							margin-left: 20px;
						}
					}
				}

				> .contents {
					height: 100%;
			
					align-items: center;
					text-align: center;

					padding-top: 70px;

					@include mobile {
						padding-top: 20px;
					}

					> span {
						font-size: 24px;
						font-weight: bold;

						@include mobile {
							font-size: 16px;
						}
					}
				}
			}
			
		}
	}
}
</style>

<script setup lang="ts">
const isMenuOpen = ref(false)

const openMenu = (): void => {
	isMenuOpen.value = true
}

const closeMenu = (): void => {
	isMenuOpen.value = false
}

</script>