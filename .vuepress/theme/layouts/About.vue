<template>
  <Common class="about-wrapper" :sidebar="false">
    <ModuleTransition delay="0.32">
      <Comments :isShowComments="shouldShowComments"/>
    </ModuleTransition>
  </Common>
</template>

<script>
import { defineComponent, getCurrentInstance, computed } from 'vue-demi'
import Common from '@theme/components/Common'
import { ModuleTransition } from '@vuepress-reco/core/lib/components'
import moduleTransitonMixin from '@theme/mixins/moduleTransiton'

export default defineComponent({
  name: 'About',
  mixins: [moduleTransitonMixin],
  components: { Common, ModuleTransition },
  setup (props, ctx) {
    const instance = getCurrentInstance().proxy

    // 是否显示评论
    const shouldShowComments = computed(() => {
      const { isShowComments } = instance.$frontmatter
      const { showComment } = instance.$themeConfig.valineConfig || { showComment: true }
      return (showComment !== false && isShowComments !== false) || (showComment === false && isShowComments === true)
    })

    return { shouldShowComments }
  }
})
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>

.about-wrapper
  max-width: $contentWidth;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;

@media (max-width: $MQMobile)
  .about-wrapper
    padding: 4.6rem 1rem 0;
</style>
