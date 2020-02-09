<template>
  <section id="skills">
    <div v-scroll-reveal class="tw-flex tw-justify-between tw-items-center">
      <div class="tw-block md:tw-flex md:tw-items-center">
        <h2 class="base-h2">SKILLS</h2>
        <v-switcher
          v-model="category"
          :options="categoryList"
          class="tw-mt-6 md:tw-ml-10 md:tw-mt-0"
        />
      </div>
      <div class="tw-hidden md:tw-block tw-w-64">
        <v-input
          v-model.trim="filter"
          type="text"
          placeholder="Filter skills..."
        >
          <template slot="prefix">
            <i class="icon icon-filter tw-text-purple-500"></i>
          </template>
        </v-input>
      </div>
    </div>
    <div v-scroll-reveal class="tw-mt-6">
      <transition name="fade-up" mode="out-in">
        <div :key="category">
          <ol
            v-if="filterList.length"
            class="base-list base-list--ordered tw--m-2"
          >
            <li
              v-for="skill in filterList"
              class="base-list__item base-list__item--numbered tw-p-2 tw-w-full md:tw-w-1/2 lg:tw-w-auto lg:tw-mr-12"
            >
              <span v-html="highlightText(skill.name, filter)"></span>
              <ul
                v-if="skill.types && skill.types.length"
                class="base-list--small tw--mx-3 tw-mt-3 "
              >
                <li
                  v-for="type in skill.types"
                  v-html="highlightText(type, filter)"
                  class="base-list__item-arrow"
                ></li>
              </ul>
            </li>
          </ol>
          <div v-else>
            <span class="tw-text-base tw-text-gray-400 tw-py-10 tw-block">
              Hmm, I don't seem to know
              <i class="tw-text-purple-500">"{{ filter }}"</i>...
            </span>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import Input from '~/components/input'
import Switcher from '~/components/switcher'

export default {
  name: 'Skills',

  components: {
    'v-input': Input,
    'v-switcher': Switcher
  },

  props: {
    skills: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      filter: '',
      category: '',
      categoryList: []
    }
  },

  computed: {
    filterList() {
      const sanitizedFilter = this.$sanitize(this.filter).replace(
        /[+<>*()?]/g,
        '\\$&'
      )
      const selectedCategory =
        this.skills && this.category ? this.skills[this.category] : []
      const filter = new RegExp(sanitizedFilter, 'i')
      return sanitizedFilter
        ? selectedCategory.filter((s) => {
            return (
              s.name.match(filter) ||
              this.$sanitize(s.types.join('')).match(filter)
            )
          })
        : selectedCategory
    }
  },

  watch: {
    category() {
      // Reset the filter on switching category
      this.filter = ''
    }
  },

  created() {
    this.categoryList = Object.keys(this.skills || {})
    this.category = this.categoryList[0]
  },

  methods: {
    highlightText(str, filter) {
      const sanitizedFilter = this.$sanitize(filter).replace(
        /[+<>*()?]/g,
        '\\$&'
      )
      const sanitizedString = this.$sanitize(str)
      return sanitizedFilter.length
        ? sanitizedString.replace(
            new RegExp(`(${sanitizedFilter})`, 'is'),
            '<mark>$1</mark>'
          )
        : sanitizedString
    }
  }
}
</script>
