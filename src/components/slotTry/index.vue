<template>
    <div class="">
        <baseLayout>
            <div slot="header">
                这个是重写之后的header
            </div>
        </baseLayout>
    </div>
</template>

<script>
import baseLayout from './baseLayout.vue'

export default{
    components:{
        baseLayout
    }
}
</script>