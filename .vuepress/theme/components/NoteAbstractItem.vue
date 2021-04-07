<template>
  <div
    :class="['abstract-item', className]"
    @click="$router.push(item.path)">
    <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
    <div v-if="item.frontmatter.bgImage" class="abstract-cover">
      <img :src="item.frontmatter.bgImage">
    </div>
    <div class="abstract-wrap">
      <div class="title">
        <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
      <div class="abstract" v-html="item.excerpt"></div>
      <PageInfo :pageInfo="item" :currentTag="currentTag"></PageInfo>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, toRefs } from 'vue-demi'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import PageInfo from './PageInfo'
export default defineComponent({
  components: { PageInfo, RecoIcon },
  props: ['item', 'currentPage', 'currentTag'],
  setup (props, ctx) {
    const classList = ['draw', 'draw meet', 'center']
    const className = classList[Math.floor(Math.random() * 3)]
    const { item } = toRefs(props)

    onMounted(() => {
      console.log(item)
    })

    return { className }
  }
})
</script>

<style lang="stylus" scoped>
.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-wrap wrap
  &:hover {
    .abstract-cover img {
      transform: scale(1.5);
    }
  }
  &::before, &::after {
    box-sizing: inherit;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }
  > * {
    pointer-events: auto;
  }
  .abstract-cover {
    width: 40%;
    margin-right: 1rem;
    border-radius: .5rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      transform: scale(1);
      transition: transform .5s;
    }
  }
  .abstract-wrap {
    flex: 1;
  }
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;

  .abstract-item 
    .abstract-cover
      width 100%
      margin-right 0 
    .abstract-wrap
      width 100%
</style>

<style lang="stylus" scoped>
/* 单向渐变 */
.draw::before {
  top: 0;
  left: 0;
}
.draw::after {
  bottom: 0;
  right: 0;
}
.draw:hover {
  // color: $accentColor;
}
.draw:hover::before, .draw:hover::after {
  width: 100%;
  height: 100%;
}
.draw:hover::before {
  border-top-color: $accentColor;
  border-right-color: $accentColor;
  transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
}
.draw:hover::after {
  border-bottom-color: $accentColor;
  border-left-color: $accentColor;
  transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
}

/* 双向渐变 */
.meet:hover {
  // color: $accentColor;
}
.meet::after {
  top: 0;
  left: 0;
}
.meet:hover::before {
  border-top-color: $accentColor;
  border-right-color: $accentColor;
}
.meet:hover::after {
  border-bottom-color: $accentColor;
  border-left-color: $accentColor;
  transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
}

/* 中心展开渐变 */
.center:hover {
  // color: $accentColor;
}
.center::before, .center::after {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  -webkit-transform-origin: center;
          transform-origin: center;
}
.center::before {
  border-top: 2px solid $accentColor;
  border-bottom: 2px solid $accentColor;
  -webkit-transform: scale3d(0, 1, 1);
          transform: scale3d(0, 1, 1);
}
.center::after {
  border-left: 2px solid $accentColor;
  border-right: 2px solid $accentColor;
  -webkit-transform: scale3d(1, 0, 1);
          transform: scale3d(1, 0, 1);
}
.center:hover::before, .center:hover::after {
  -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
  transition: transform 0.5s, -webkit-transform 0.5s;
}
</style>