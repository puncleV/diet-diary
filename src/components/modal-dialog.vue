<template>
    <transition>
        <div class="background">
            <div class="content">
                <div>
                    <slot name="header"></slot>
                </div>
                <div>
                    <slot name="body"></slot>
                </div>
                <div>
                    <slot name="footer">
                        <button class="default-button" @click="$emit('close')">
                            OK
                        </button>
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
  name: 'ModalDialog'
}

</script>

<style scoped>
    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content {
        padding: 10px;
        background: white;
        width: 40%;
        height: 50%;
    }
</style>
