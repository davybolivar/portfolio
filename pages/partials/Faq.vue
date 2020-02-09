<template>
  <section id="faq" v-scroll-reveal class="faq">
    <h2 v-scroll-reveal class="base-h2">FAQ</h2>
    <div v-scroll-reveal>
      <ol class="base-list base-list--ordered tw-mt-5">
        <li
          v-for="item in faq"
          class="base-list__item base-list__item--purple tw-mt-8 first:tw-mt-0"
        >
          <span>{{ item.question }}</span>
          <div class="faq__answer">
            <i>{{ item.answer }}</i>
          </div>
        </li>
      </ol>
      <a href="#contact" class="faq__more">
        Have any further questions? ↓
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Faq',

  data() {
    const startDate = '2014/01/01'
    const startYear = this.getYear(startDate)
    const yearFromNow = this.getYearDiffFromNow(startDate)

    return {
      faq: [
        {
          question: 'Are you interested doing part-time jobs?',
          answer: 'No, I prefer to focus on my fulltime.'
        },
        {
          question: 'What job positions are you interested in?',
          answer: 'Front-end/Full-stack Javascript Engineer.'
        },
        {
          question: 'How long have you been working as a developer?',
          answer: `I’ve started working since ${startYear} (${yearFromNow} years).`
        }
      ]
    }
  },

  methods: {
    getYearDiffFromNow(from) {
      return new Date().getFullYear() - new Date(from).getFullYear()
    },

    getYear(dt) {
      return new Date(dt).getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.faq {
  &__answer {
    @apply tw-text-gray-200 tw-tracking-wide tw-leading-loose tw-text-base;

    &:before {
      content: '->';
      @apply tw-text-white tw-mr-3;
    }
  }

  &__more {
    @apply tw-text-purple-500 tw-mt-10 tw-inline-block tw-text-base tw-no-underline;
    @screen md {
      &:hover {
        @apply tw-text-purple-400 tw-no-underline;
      }
    }
  }
}
</style>
