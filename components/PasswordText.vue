<template>
  <div
    ref="main"
    class="password-text"
  >
    <div
      :class="classObject"
      @click="doCopy"
    >
      {{ passwordText }}
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import passwordGenerator from 'generate-password'

export default {

  props: {
    length: {
      type: Number,
      default: 8
    },
    useUuid: {
      type: Boolean,
      default: false
    },
    symbols: {
      type: Boolean,
      default: false
    },
    numbers: {
      type: Boolean,
      default: false
    },
    lowercase: {
      type: Boolean,
      default: true
    },
    uppercase: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      passwordText: ''
    }
  },

  computed: {
    classObject () {
      if (this.useUuid) {
        return 'length-36'
      } else {
        return 'length-' + this.length
      }
    }
  },

  mounted () {
    this.applyNewPassword()
  },

  methods: {
    doCopy () {
      this.$copyText(this.passwordText).then((e) => {
        const el = this.$refs.main
        window.TweenMax.set(el, { y: 0, rotation: 0 })
        window.TweenMax.to(el, 0.1, { yoyo: true, y: 5, repeat: 1 })
      }, function (e) {
        alert('can not copy.')
      })
    },

    applyNewPassword () {
      if (this.useUuid) {
        this.passwordText = uuidv4()
      } else {
        this.passwordText = passwordGenerator.generate({
          length: this.length,
          symbols: this.symbols,
          numbers: this.numbers,
          lowercase: this.lowercase,
          uppercase: this.uppercase,
          exclude: ['.', ':', '+', '?', "'", '"']
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.password-text {
  display: inline-block;
}

.password-text > div {
  outline: none;
  display: inline-block !important;

  padding: 0.25em 0.5em;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  font-size: 18px;
  font-weight: bold;

  color: #212121;
  background-color: #EEE;
  border: none;

  &:hover {
    color: white;
    background-color: darken(#e91e63, 10%);
  }

  &.length-6 { width: 5.5em; }
  &.length-8 { width: 6.5em; }
  &.length-12 { width: 9em; }
  &.length-16 { width: 12em; }
  &.length-24 { width: 16em; }
  &.length-32 { width: 22em; }
  &.length-36 { width: 24em; }
}
</style>
