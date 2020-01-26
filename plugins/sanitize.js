import Vue from 'vue'
import VueSanitize from 'vue-sanitize'

const defaultOptions = {
  allowedTags: ['b', 'br', 'em', 'i', 'p', 'strong', 's', 'strike', 'mark']
}

Vue.use(VueSanitize, defaultOptions)
