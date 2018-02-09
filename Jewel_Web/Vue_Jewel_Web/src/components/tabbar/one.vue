<template>
  <div>
    <keep-alive>
      <class-list></class-list>
    </keep-alive>
  </div>
</template>

<script>
// 直接导入class 下的 页面
import ClassList from '../class/ClassList'

export default {
  components: {
    ClassList
  }
}
</script>