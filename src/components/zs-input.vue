<template lang="pug">
    div.zs-input(:class="{'zs-input_focused': value_state}")
        input(
            :id="`zs-input-${_uid}`"
            v-model="value_state"
            :type="type_field"
            class="zs-input--input"
            :class="{'zs-input--input_invalid': error_message, 'zs-input--input_valid': value_state}"
        )
        label.zs-input--label(:for="`zs-input-${_uid}`") {{label}}
        div.zs-input--error-message {{error_message}}
        div.zs-input--append(v-show="$slots.append || type === 'password'")
            slot(name="append")
                span.zs-input--append_password(@click="password_visibility = !password_visibility")
                    i(:class="password_visibility ? 'icon-eye-off-copy-1' : 'icon-eye-copy-1'")
</template>

<script>
export default {
    name: 'ZsInput',
    props: {
        value: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
        error_message: {
            type: String,
            default: '',
        },
    },

    data() {
       return {
           password_visibility: false,
       }
    },
    computed: {
        value_state: {
            get() {
                return this.value
            },
            set(v) {
                this.$emit('input', v)
            },
        },
        type_field() {
            if (this.type === 'password') {
                return this.password_visibility ? 'text' : 'password'
            }

            return this.type
        }
    },
}
</script>

<style lang="sass" scoped>
.zs-input
    position: relative
    display: inline-block
    width: 184px
    height: 52px
    &_focused &--label
        @include mix--typography-caption
        transform: translateY(-24px)

    &--input
        @include mix--typography-body1
        border-radius: $--border-lg
        border: 1px solid $--color-gray
        padding: 0 15px
        height: 100%
        width: 100%
        color: $--color-typo
        &_valid
            border-color: $--color-accent
        &_invalid
            border-color: $--color-error !important
        &:focus
            border-color: $--color-accent
            + .zs-input--label
                @include mix--typography-caption
                transform: translateY(-24px)
    &--label
        @include mix--typography-body1
        background: $--color-white
        padding: 0 2px
        color: $--color-typo-label
        position: absolute
        top: 12px
        left: 13px
        cursor: text
        transition: .2s
    &--error-message
        @include mix--typography-caption
        color: $--color-error
        padding-top: 5px
    &--append
        position: absolute
        top: 14px
        right: 15px
        background: $--color-white
        &_password
            cursor: pointer
            color: $--color-gray
        i
            font-size: 24px

</style>
