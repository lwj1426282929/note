<template>
  <Common class="message-wrapper" :sidebar="false">
    <ModuleTransition delay="0.08">
      <section>
        <div class="page-title">
          <h1 class="title">{{$page.title || '留言板'}}</h1>
          <PageInfo :pageInfo="$page" :showAccessNumber="showAccessNumber"></PageInfo>
        </div>
        <!-- 这里使用 v-show，否则影响 SSR -->
        <Content class="theme-reco-content" />
      </section>
    </ModuleTransition>

    <ModuleTransition delay="0.08">
      <div class="custom-block tip">
        <p class="title"></p>
        <p>欢迎大家在此留下你的建议和意见，或者在 
          <a href="https://github.com/lwj1426282929/" target="_blank" rel="noopener noreferrer">GitHub issue
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg> <span class="sr-only">(opens new window)</span></span></a> 提交你的问题。</p></div>
    </ModuleTransition>



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
import PageInfo from '@theme/components/PageInfo'

export default defineComponent({
  name: 'Message',
  mixins: [moduleTransitonMixin],
  components: { Common, ModuleTransition, PageInfo },
  setup (props, ctx) {
    const instance = getCurrentInstance().proxy

    // 是否显示评论
    const shouldShowComments = computed(() => {
      const { isShowComments } = instance.$frontmatter
      const { showComment } = instance.$themeConfig.valineConfig || { showComment: true }
      return (showComment !== false && isShowComments !== false) || (showComment === false && isShowComments === true)
    })

    const showAccessNumber = computed(() => {
      const {
        $themeConfig: { valineConfig },
        $themeLocaleConfig: { valineConfig: valineLocalConfig }
      } = instance || {}

      const vc = valineLocalConfig || valineConfig

      return vc && vc.visitor != false
    })

    return { shouldShowComments, showAccessNumber }
  }
})
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>

.message-wrapper
  max-width: $contentWidth;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;

@media (max-width: $MQMobile)
  .message-wrapper
    padding: 4.6rem 1rem 0;
</style>
