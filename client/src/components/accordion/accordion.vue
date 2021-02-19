<template>
  <div class="accordion">
    <accordion-tab
      v-for="(tab, index) in tabsData"
      :key="index"
      :index="index"
      v-bind="tab"
      :opened="activeTabs.includes(index)"
      @toggled="tabToggled(index)"
    />
  </div>
</template>

<script>
import accordionTab from './accordionTab.vue'
export default {
  props: {
    tabsData: {
      type: Array,
      required: true
    },
    oneTabToOpen: {
      type: Boolean,
      default: false
    },
    initialTabIndex: {
      type: Number,
      default: -1
    }
  },
  components: { accordionTab },
  data() {
    return {
      activeTabs: []
    }
  },
  methods: {
    tabToggled(tabIndex) {
      if (this.oneTabToOpen) {
        this.activeTabs = this.activeTabs[0] == tabIndex ? [] : [tabIndex]
      } else {
        if (this.activeTabs.includes(tabIndex)) {
          this.activeTabs = this.activeTabs.filter(tab => tab !== tabIndex)
        } else {
          this.activeTabs.push(tabIndex)
        }
      }
    }
  },
  created() {
    if (this.initialTabIndex !== -1) {
      this.activeTabs = [this.initialTabIndex]
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  width: 100%;
  min-width: 400px;
}
</style>
