<style scoped lang='scss'>
footer {
    height:200px;
    line-height: 1.5;
    background-color: #242933;
}
footer.ng-home-bg {
    background-color: #242936;
}

footer.ng-home-bg {
    background-color: #242936;
}
footer .home-footer {
    box-sizing: border-box;
    padding: 40px 0 0;
    color: #a5adb8;
    max-width: 1360px;
    margin: 0 auto;
}
footer .footer-min-width {
    margin: 0 auto;
}

footer .footer-logo {
    width: 118px;
    height: auto;
}
img {
    border-style: none;
}
.mg-r32 {
    margin-right: 32px!important;
}
.footer-qrcode {
    color: #d3d9e6;
}
.footer-qrcode a {
    text-decoration: none;
    color: #d3d9e6;
}
.footer-line {
    display: inline-block;
}
.flex-box.space-between {
    justify-content: space-between;
}
.flex-box.align-items_start, .flex-box.flex-default {
    align-items: flex-start;
}

.text-d-none {
    text-decoration: none;
}
.cursor-pointer {
    cursor: pointer;
}

.box-tooltips-main {
    display: inline-flex;
    position: relative;
}


.box-line_Light {
    background-color: #fff;
    opacity: .1;
}
.box-line {
    width: 1px;
    height: 1.5em;
    margin: 0 24px;
}

.flex-box {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
}
footer .home-footer {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 0 0;
    color: #a5adb8;
    max-width: 1360px;
    margin: 0 auto;
}
.ts-14 {
    font-size: 14px;
}
.mg-b24 {
    margin-bottom: 24px!important;
}
.ts-14 {
    font-size: 14px;
}
.pd-b24 {
    padding-bottom: 24px!important;
}
.pd-t32 {
    padding-top: 32px!important;
}
footer .footer-nav_item:not(:last-of-type) {
    margin-right: 32px;
}
footer .footer-nav_item a {
    text-decoration: none;
    color: #9aa6b8;
}
.flex-box.justify-center {
    justify-content: center;
}
</style>

<script>
	export default{
		name:"E_footer"
	}
</script>

<template>
	<footer data-v-2fe2b4f1="" data-v-23fcec65="" class="min-w ng-home-bg"><div data-v-2fe2b4f1="" class="home-footer ts-14 max-w pd-t32 pd-b24 footer-min-width"><div data-v-2fe2b4f1="" class="flex-box space-between align-items_start"><div data-v-2fe2b4f1=""><img data-v-2fe2b4f1="" src="data:image/png;base64,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" class="footer-logo"> <div data-v-2fe2b4f1="" class="mg-t16 ts-12 copy-right">
          Copyright 2018 CoinPark
        </div></div> <div data-v-2fe2b4f1="" class="footer-content flex-content"><div data-v-2fe2b4f1="" class="mg-b24 flex-box"><a data-v-2fe2b4f1="" href="https://t.me/CoinPark_CN" target="_blank" rel="noopener noreferrer nofollow" class="cursor-pointer mg-r32 text-d-none footer-qrcode">Telegram-中文</a> <a data-v-2fe2b4f1="" href="https://t.me/CoinPark_global" target="_blank" rel="noopener noreferrer nofollow" class="cursor-pointer text-d-none mg-r32 footer-qrcode">Telegram-English</a> <div data-v-2286c2a8="" data-v-2fe2b4f1="" class="box-tooltips-main tooltips"><!---->  <span data-v-2fe2b4f1="" data-v-2286c2a8="" class="cursor-pointer footer-qrcode">微信客服: CoinPark-01</span></div> <div data-v-2fe2b4f1="" class="box-line footer-line box-line_Light" style="margin-left: 24px; margin-right: 24px;"></div> <span data-v-2fe2b4f1="" class="footer-qrcode"><a data-v-2fe2b4f1="" href="mailto:service@coinpark.zendesk.com?subject=Hi CoinPark 我有一个很妙的主意想要告诉你。&amp;body=这里是我的好主意" target="_self" rel="" class="email-link" style="display: inline;">官方邮箱   service@coinpark.zendesk.com</a></span></div> <div data-v-2fe2b4f1="" class="flex-box justify-center"><span data-v-2fe2b4f1="" class="footer-nav_item"><a data-v-2fe2b4f1="" href="/user_agreement" class=""><span data-v-2fe2b4f1="" class="mg-r8">
                    用户协议
                  </span></a></span><span data-v-2fe2b4f1="" class="footer-nav_item"><a data-v-2fe2b4f1="" href="https://github.com/coinparkcc/API_Docs" target="_blank" rel="noopener noreferrer nofollow">
                API接入
              </a></span><span data-v-2fe2b4f1="" class="footer-nav_item"><a data-v-2fe2b4f1="" href="https://coinpark.zendesk.com/hc/zh-cn/articles/360005916634" target="_blank" rel="noopener noreferrer nofollow">
                挖矿细则
              </a></span><span data-v-2fe2b4f1="" class="footer-nav_item"><a data-v-2fe2b4f1="" href="https://coinpark.zendesk.com/hc/zh-cn/articles/360006003413" target="_blank" rel="noopener noreferrer nofollow">
                费率标准
              </a></span></div></div> <div data-v-2fe2b4f1="" class="footer-content flex-box"><span data-v-2fe2b4f1="" class="footer-nav_item"><a data-v-2fe2b4f1="" href="https://www.facebook.com/CoinPark2018" target="_blank" rel="noopener noreferrer nofollow"><i data-v-2fe2b4f1="" class="mg-r0 icon-my-facebook"></i></a></span><span data-v-2fe2b4f1="" class="footer-nav_item"><a data-v-2fe2b4f1="" href="https://twitter.com/CoinPark2018" target="_blank" rel="noopener noreferrer nofollow"><i data-v-2fe2b4f1="" class="mg-r0 icon-my-twitter"></i></a></span></div></div></div></footer>
</template>

