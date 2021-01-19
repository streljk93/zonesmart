<template lang="pug">
    .zs-input(:class="{'zs-input_focused': value_state}")
        .zs-input--wrap
            input(
                :id="`zs-input-${_uid}`"
                v-model="value_state"
                :type="type_field"
                class="zs-input--input"
                :class="{'zs-input--input_invalid': error_message, 'zs-input--input_valid': value_state}"
                autocomplete="off"
            )
            label.zs-input--label(:for="`zs-input-${_uid}`")
                .zs-input--label-wrap {{label}}
            .zs-input--error-message {{error_message}}
            .zs-input--append(v-show="$slots.append || type === 'password'")
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
    padding: 5px 0 16px
    overflow: hidden
    &_focused &--label
        @include mix--typography-caption
        transform: translateY(-26px)

    &--wrap
        position: relative
        width: 100%
        height: 52px

    &--input
        @include mix--typography-body1
        border-radius: $--border-lg
        border: 1px solid $--color-gray
        padding: 0 15px
        height: 100%
        width: 100%
        color: $--color-typo
        background: $--color-white
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active
            -webkit-box-shadow: 0 0 0 30px white inset !important

        &_valid
            border-color: $--color-accent
        &_invalid
            border-color: $--color-error !important
        &:focus
            border-color: $--color-accent
            + .zs-input--label
                @include mix--typography-caption
                transform: translateY(-26px)
    &--label
        @include mix--typography-body1
        margin: 0 13px
        color: $--color-typo-label
        position: absolute
        top: 14px
        left: 0
        right: 0
        cursor: text
        transition: .2s
        &-wrap
            display: inline-block
            background: $--color-white
            padding: 0 2px
            cursor: text

    &--error-message
        @include mix--typography-caption
        color: $--color-error
        padding-top: 5px

    &--label, &--error-message
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis

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
