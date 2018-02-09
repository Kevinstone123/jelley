<template>
  <div>
    <sticky scrollBox="vux_view_box_body" :check-sticky-support="false" :offset="46">
      <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
    </sticky>
    <swiper id="calculator"  v-model="index" height="1000px" :show-dots="false" :min-moving-distance="80" @on-index-change="gotoTop">
      <swiper-item key="1">
        <!-- 医疗费用开始 -->
        <div class="tab-swiper">
          <group title="医疗费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_ylf_ylf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
              <img slot="label" @click="showtitle(detalTitle.ylf)"  class="input_icon title_icon" src="../../../assets/icon/question_mask.svg" width="18" height="18">
            </x-input>
          </group>
          <group title="住院伙食补助费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_ylf_zyhsbz" @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="营养费 " class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_ylf_yyf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="后续治疗费 " class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_ylf_hxzlf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="整容费 " class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_ylf_zrf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
        </div>
      </swiper-item>
      <swiper-item key="2">
        <!-- 死亡伤残赔偿 开始 -->
        <div class="tab-swiper">
          <group title="护理费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_sc_hlf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
              <img slot="label" @click="showtitle(detalTitle.hlf)"  class="input_icon title_icon" src="../../../assets/icon/question_mask.svg" width="18" height="18">
            </x-input>
          </group>
          <group title="误工费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_sc_wgf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
              <img slot="label" @click="showtitle(detalTitle.wgf)"  class="input_icon title_icon" src="../../../assets/icon/question_mask.svg" width="18" height="18">
            </x-input>
          </group>
          <group title="残疾赔偿金 " class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_sc_cjpc"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
              <img slot="label" @click="showtitle(detalTitle.cjpc)" style="left:100px;"  class="input_icon title_icon" src="../../../assets/icon/question_mask.svg" width="18" height="18">
            </x-input>
          </group>
          <group title="死亡赔偿金" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_sc_swpc"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="丧葬费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_sc_szf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="家属误工费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_sc_jswgf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="家属交通费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_sc_jsjtf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="家属住宿费 " class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_sc_jszsf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="被扶养人生活费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_sc_shf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="精神损害抚慰金" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_sc_jsshf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
              <img slot="label" @click="showtitle(detalTitle.jsshf)" style="left:120px;"  class="input_icon title_icon" src="../../../assets/icon/question_mask.svg" width="18" height="18">
            </x-input>
          </group>
          <group title="残疾辅助器具费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_sc_cjfz"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="交通费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_sc_jtf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
        </div>
      </swiper-item>
      <swiper-item key="3">
        <!-- 财物损失 开始 -->
        <div class="tab-swiper">
          <group title="衣物损失费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_ccss_yws"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
              <img slot="label" @click="showtitle(detalTitle.yws)" style="left:100px;"  class="input_icon title_icon" src="../../../assets/icon/question_mask.svg" width="18" height="18">
            </x-input>
          </group>
          <group title="车辆施救费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_ccss_clsjf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="车辆修理费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_ccss_clxlf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="评估费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_ccss_pgf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="其他财物损失费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_ccss_qtcwf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
        </div>
      </swiper-item>
      <swiper-item key="4">
        <!-- 其他损失开始 -->
        <div class="tab-swiper">
          <group title="鉴定费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_qtss_jdf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
              <img slot="label" @click="showtitle(detalTitle.jdf)" style="left:70px;"  class="input_icon title_icon" src="../../../assets/icon/question_mask.svg" width="18" height="18">
            </x-input>
          </group>
          <group title="住院用品费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_qtss_zyypf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="住宿费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_qtss_zsf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="停运损失费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_qtss_tyssf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="车辆贬损费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_qtss_clbsf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="律师代理费" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_qtss_lsf"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
              <img slot="label" @click="showtitle(detalTitle.lsf)" style="left:100px;"  class="input_icon title_icon" src="../../../assets/icon/question_mask.svg" width="18" height="18">
            </x-input>
          </group>
          <group title="其他" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_pcss0mc"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="其他" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_pcss0mc"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
          <group title="其他" class="width_100">
            <x-input title="必须输入数字" :is-type="isNumber" placeholder="请输入金额" text-align="right" name="LS_pcss0mc"  @on-blur="allPrice">
              <img slot="label" class="input_icon" src="../../../assets/icon/money_grey.svg" width="15" height="15">
            </x-input>
          </group>
        </div>
      </swiper-item>
    </swiper>
    <tabbar style="top: 0;height: 50px;position: fixed;z-index: 9999;">
      <tabbar-item>
        <span slot="label" style="float:left;padding-left:20px;color: #333!important;font-weight: 600;font-size: 16px;">合计:</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label" style="float:right;padding-right:20px;">{{ allTotalMoney }}  元</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, XInput, Group, Cell, Tabbar, TabbarItem, AlertPlugin } from 'vux'
import $ from 'jquery'
const list = () => ['医疗费用', '死亡伤残赔偿', '财物损失', '其他损失']
const titleDetail = {
  'ylf': {
    sign: '医疗费',
    title: '鉴定意见书（营养期)',
    term: '《最高人民法院关于审理人身损害赔偿案件适用法律若干问题的解释》第二十四条',
    des: '20-40 *天数'
  },
  'hlf': {
    sign: '护理费',
    title: '陪护费发票、护理费证明、鉴定意见书',
    term: '《最高人民法院关于审理人身损害赔偿案件适用法律若干问题的解释》第二十一条',
    des: '是否需要护理及护理人数，根据鉴定意见书或医院证明确定；如医院护工护理，参照当地护工从事同等级别护理的劳务报酬标准；如家属护理，审核家属误工证明材料；其他情形，每日酌定金额。'
  },
  'wgf': {
    sign: '误工费',
    title: '劳动合同/劳务合同、工资收入证明、税单、鉴定意见书等',
    term: '《最高人民法院关于审理人身损害赔偿案件适用法律若干问题的解释》第二十条',
    des: '误工费应为实际减少的收入。如能提供收入证明，按其收入状况计算；有工作证明所属行业，可按相同或相近行业上一年度平均工资计算；有劳动能力但不能提供收入证据的，比照下岗人员、失业人员，按最低工资标准计算；如受害人是退休人员，根据受害人在发生交通事故时是否从事劳动工作的实际情况来判断。如果权利人无证据证明其实际有工作或仍参加劳动的，可以不予赔偿。对于有证据证明其仍在从事劳动或工作的则根据证据予以确定。'
  },
  'cjpc': {
    sign: '残疾赔偿金',
    title: '鉴定意见书、户籍证明、居住证明、劳动合同/劳务合同、工资收入证明、税单、派出所出具的农非比例证明、村委会出具的征地比例说明等',
    term: '《最高人民法院关于审理人身损害赔偿案件适用法律若干问题的解释》第二十五条',
    des: '1被侵权人为城镇户籍，适用城镇标准。2被侵权人非城镇户籍，适用城镇居民标准赔偿需要满足两个条件：一是在城镇地区连续居住满一年，二是其主要收入来源为城镇。对于在城镇地区居住满一年的期间计算，截止日期为事故发生时。' +
          '对于居住地为城镇的标准，原则上可以居住地基层组织是村民委员会还是居民委员会为识别标准。 对于收入来源地的认定，劳动合同和工作证明为最主要的证据要求，证据可包括劳动合同、工资签收单、综合保险、工资账户定期收款凭证、税收证明等。' +
          '户籍为学校集体户口的大学生，应适用城镇居民标准。3因交通事故受伤者，在定残后、诉讼期间因非本次交通事故原因死亡的，倾向性意见按照最低标准5年来计算残疾赔偿金。' +
          '4伤残等级具体等级对应的伤残赔偿指数为：一级：100%；二级：90%；三级：80%；四级：70%；五级：60%；六级：50%；七级：40%；八级：30%；九级：20%；十级：10%。' +
          '如有多个伤残等级，先确定等级最高的伤残赔偿指数，其他的伤残等级按附加指数计算，六到十级附加计算2%，二到五级附加计算4%，但累计不超过10%。' +
          '精神损害抚慰金证据指引：死亡证明、鉴定意见书法律指引：《侵权责任法》第22条；《精神损害赔偿司法解释》裁判指引：参考伤残系数确定；在交强险内优先赔付不考虑事故责任。' +
          '财产损失费用衣物损失费证据指引：事故认定书法律指引：《侵权责任法》第十九条裁判指引：按个案情况酌定。交强险外项目其他鉴定费证据指引：委托鉴定书、鉴定费发票等法律指引：裁判指引：原则上保险公司只承担一次鉴定费。' +
          '律师代理费证据指引：聘请代理人合同、律师费发票等法律指引：裁判指引：根据个案在10000元内酌定。责任认定事故责任交警已作事故责任认定机动车V机动车经交警部门认定被告骆颖霖应承担全责;原告种明九应承担无责;被告颜颀俊应承担全责保险情况骆颖霖中国太平洋财产保险股份有限公司上海分公司颜颀俊'
  },
  'jsshf': {
    sign: '精神损害抚慰金',
    title: '死亡证明、鉴定意见书',
    term: '《侵权责任法》第22条；《精神损害赔偿司法解释》',
    des: '参考伤残系数确定；在交强险内优先赔付不考虑事故责任。'
  },
  'yws': {
    sign: '衣物损失费',
    title: '事故认定书',
    term: '《侵权责任法》第十九条',
    des: '按个案情况酌定。'
  },
  'jdf': {
    sign: '鉴定费',
    title: '委托鉴定书、鉴定费发票等',
    term: '',
    des: '原则上保险公司只承担一次鉴定费'
  },
  'lsf': {
    sign: '律师代理费',
    title: '聘请代理人合同、律师费发票等',
    term: '',
    des: '根据个案在10000元内酌定。'
  }
}

export default {
  components: {
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem,
    XInput,
    Group,
    Cell,
    Tabbar,
    TabbarItem,
    AlertPlugin
  },
  data () {
    return {
      index01: 0,
      list2: list(),
      detalTitle: titleDetail,
      demo2: '美食',
      demoDisabled: 'A',
      index: 0,
      allTotalMoney: '0.00',
      getBarWidth: function (index) {
        return (index + 1) * 22 + 'px'
      },
      // input 验证
      isNumber: function (value) {
        let patrn = /^\d{1,10}(\.\d{0,2})?$/
        if (!patrn.exec(value)) {
          if (value.indexOf('.') !== -1) {
            return {valid: true}
          } else {
            return {valid: false, msg: '只支持输入数字'}
          }
        } else {
          return {valid: true}
        }
      }
    }
  },
  methods: {
    // 划动后自动上滚
    gotoTop (currentIndex) {
      $('#vux_view_box_body').animate({scrollTop: 0}, 300)
    },
    // 结算金额
    allPrice (value, $event) {
      let inputs = $('input[name^="LS_"]')
      let count = 0
      for (let i = 0; i < inputs.length; i++) {
        let s = $(inputs[i]).val()
        if (s === '') continue
        count += parseFloat(s)
      }
      this.allTotalMoney = count.toFixed(2)
    },
    // 滑动页事件
    switchTabItem (index) {
      console.log('on-before-index-change', index)
      this.$vux.loading.show({
        text: 'loading'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.index01 = index
      }, 1000)
    },
    onItemClick (index) {
      console.log('on item click:', index)
    },
    addTab () {
      if (this.list2.length < 5) {
        this.list2 = list().slice(0, this.list2.length + 1)
      }
    },
    removeTab () {
      if (this.list2.length > 1) {
        this.list2 = list().slice(0, this.list2.length - 1)
      }
    },
    next () {
      if (this.index === this.list2.length - 1) {
        this.index = 0
      } else {
        ++this.index
      }
    },
    prev () {
      if (this.index === 0) {
        this.index = this.list2.length - 1
      } else {
        --this.index
      }
    },
    showtitle (detailTitle) {
      this.$vux.alert.show({
        title: `${detailTitle.sign}`,
        content: `<div class="title_icon_pos">` +
                 `<span class="title_icon_span">证据指引：</span>` +
                 `<p> ${detailTitle.title} </p></br>` +
                 `<span class="title_icon_span">法律指引：</span>` +
                 `<p> ${detailTitle.term} </p> </br>` +
                 `<span class="title_icon_span">裁判指引：</span>` +
                 `<p> ${detailTitle.des} </p></br>` +
                 `</div>`,
        buttonText: '关闭',
        onShow () {
          // console.log('Plugin: I\'m showing')
        },
        onHide () {
          // console.log('Plugin: I\'m hiding')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';
  .box {
    padding: 15px;
  }
  .active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
  }
  .active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
  }
  .active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
  }
  .tab-swiper {
    // background-color: #fff;
    height: 300px;
  }
  .width_100{
    width:100%!important;
  }
  .weui_title {
    color: #333;
    font-weight: 600;
    font-size: 14px;
  }
  .input_icon{
    padding-right:10px;display:block;
  }
  .title_icon{
    position: absolute;
    top: -24px;
    left: 70px;
  }
</style>
