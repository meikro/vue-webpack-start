<template>
	<div id="app">
<!--		<div class="row">
			<div class="col-xs-offset-2 col-xs-8">
				<div class="page-header">
					<img src="./images/logo.png" alt="logo">
				</div>
			</div>
		</div>-->
		<nav class="navbar navbar-default" role="navigation">
			<div class="container-fluid">
				<div class="navbar-header">
					<a class="navbar-brand" href="#">
						<img alt="Brand" src="...">
					</a>
				</div>
			</div>
		</nav>
		<div class="row">
			<div class="col-xs-2 col-xs-offset-2">
				<div class="list-group">
					<!--使用指令v-link进行导航-->
					<a class="list-group-item" v-link="{ path: '/home'}">Home</a>
					<a class="list-group-item" v-link="{ path: '/about'}">About</a>
				</div>
			</div>
			<div class="col-xs-6">
				<div class="panel">
					<div class="panel-body">
						<!--用于渲染匹配的组件-->
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	@import "css/base.css";
</style>