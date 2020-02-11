import { extend } from 'vee-validate'
import { required, min, max, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('min', {
  ...min,
  message: 'Too short'
})

extend('max', {
  ...max,
  message: 'Too long'
})

extend('email', {
  ...email,
  message: 'Invalid email'
})
