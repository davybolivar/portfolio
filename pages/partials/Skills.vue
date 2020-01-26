<template>
  <section id="skills">
    <div class="tw-flex tw-justify-between tw-items-center">
      <div class="tw-block md:tw-flex md:tw-items-center">
        <h2 class="base-h2">SKILLS</h2>
        <v-switcher
          v-model="category"
          :options="categoryList"
          class="tw-mt-3 md:tw-ml-5 md:tw-mt-0"
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
    <div class="tw-mt-5">
      <ol v-if="filterList.length" class="base-list base-list--ordered">
        <li v-for="skill in filterList">
          <span v-html="highlightText(skill.name, filter)"></span>
          <ul v-if="skill.types && skill.types.length">
            <li
              v-for="type in skill.types"
              v-html="highlightText(type, filter)"
            ></li>
          </ul>
        </li>
      </ol>
      <div v-else>
        <span class="tw-text-lg tw-text-gray-400">
          Oopsie, I don't seem to know
          <i class="tw-text-red-500">"{{ filter }}"</i>...
        </span>
      </div>
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
      const sanitizedFilter = this.$sanitize(this.filter)
      const selectedCategory = this.skills[this.category]
      return sanitizedFilter
        ? selectedCategory.filter((s) => {
            const filter = new RegExp(sanitizedFilter, 'i')
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
    this.categoryList = Object.keys(this.skills)
    this.category = this.categoryList[0]
  },

  methods: {
    highlightText(str, filter) {
      const sanitizedFilter = this.$sanitize(filter)
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
