<script setup>
import card from "./card.vue"
</script>

<template>
	<h2>
		系统：操作系统相关
	</h2>
	<card title="Windows相关" link="/Windows/">
		<template #description>
			Windows是Microsoft开发和销售的专有图形操作系统，
			适用于消费者、企业、工作站、服务器和嵌入式系统
		</template>
	</card>
	<card title="Ubuntu相关" link="/Ubuntu/">
		<template #description>
			最新版本的Ubuntu桌面版为开发人员、
			创作者、游戏玩家和系统管理员提供了新工具和增强功能
		</template>
	</card>
	<card title="DNS加密" link="/DNSEncryption/">
		<template #description>
			加密DNS通过对查询和响应进行加密，确保数据在传输过程中不被窃听或篡改
		</template>
	</card>
	<h2>
		服务器：使用服务器完成操作
	</h2>
	<card title="Docker系列" link="/DockerSeries/">
		<template #description>
			Docker Compose是容器编排的得力助手，
			用简洁YAML文件管理多容器应用
		</template>
	</card>
	<card title="搭建内网穿透服务" link="/FrpClientAndServer/">
		<template #description>
			使用fatedier/frp在Windows客户端和Ubuntu服务端上搭建frp内网穿透服务
		</template>
	</card>
	<card title="Nginx相关" link="/Nginx/">
		<template #description>
			Nginx是一款HTTP Web服务器
		</template>
	</card>
	<h2>
		更多内容
	</h2>
	<card title="原生安卓" link="/Android/">
		<template #description>
			原生安卓是指由谷歌公司开发的、
			未经过手机制造商或移动运营商深度定制的安卓操作系统版本
		</template>
	</card>
	<card title="Nodejs相关" link="/Nodejs/">
		<template #description>
			Node.js®是一个免费、开源、跨平台的JavaScript运行时环境
		</template>
	</card>
	<card title="Docker相关" link="/Docker/">
		<template #description>
			Docker帮助开发人员在任何地方构建、共享、
			运行和验证应用程序
		</template>
	</card>
	<card title="Git相关" link="/git/">
		<template #description>
			Git是一个免费的开源分布式版本控制系统，
			旨在快速高效地处理从小到大的所有项目
		</template>
	</card>
	<card title="CMake相关" link="/CMake/">
		<template #description>
			CMake是构建C++代码的事实上的标准，
			它是管理软件构建过程的强大、全面的解决方案
		</template>
	</card>
	<card title="VitePress建站教程" link="/VitePress/">
		<template #description>
			通过VitePress和GitHub Pages生成静态站点的教程
		</template>
	</card>
	<card title="部署网站至服务器" link="/WebsiteToServer/">
		<template #description>
			将VitePress建成的网站通过GitHub部署到Ubuntu服务器上
		</template>
	</card>
	<h2>
		关于
	</h2>
	<card title="更新日志" link="/CHANGELOG/">
		<template #description>
			本网站的更新日志
		</template>
	</card>
	<card title="关于本站" link="/about">
		<template #description>
			本网站的更多信息
		</template>
	</card>
	<card title="网站状态" link="https://blazesnow.statuspage.io/">
		<template #description>
			查看本网站的运行状态及可用域名
		</template>
	</card>
</template>