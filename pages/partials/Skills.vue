<template>
  <section id="skills">
    <h2 class="base-h2">SKILLS</h2>
    <div class="tw-mt-5">
      <ol class="base-list base-list--ordered">
        <li v-for="skill in skills">
          <span>{{ skill.name }}</span>
          <ul v-if="skill.types && skill.types.length">
            <li v-for="type in skill.types">
              {{ type }}
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',

  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>
