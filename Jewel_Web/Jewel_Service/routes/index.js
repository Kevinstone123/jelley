const router = require('koa-router')()
const CommonJs = require("../library/common.js");
const fs = require('fs')
const path = require('path')
const mobileUrl = path.resolve(__dirname, '..');   //获取上一次的目录

// PC版首页
router.get('/', async (ctx, next) => {

  /**
   * 通用方法-指派重定向
  */
  let url = CommonJs.isMobile(ctx,'Pc');
  if (url !== '') {
    ctx.redirect(url);
  }
  /*** END ***/

  let model = {
    "title" : "首页"
  };

  await ctx.render('pc/home/home', model )
})

// Mobile首页-所有
router.get('/mobile/*',async(ctx, next) => {

  /**
   * 通用方法-指派重定向
  */
  let url = CommonJs.isMobile(ctx,'Mobile');
  if (url !== '') {
    ctx.redirect(url);
  }
  /*** END ***/

  ctx.type = 'html';
  ctx.body = fs.createReadStream(mobileUrl + '/public/mobile/dist/index.html');
})

module.exports = router
