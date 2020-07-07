<template>
    <div class="container">
        <header>
            这个是header里slot之外的
            <slot name="header">
                原来的header
            </slot>
        </header>
        <main>
            <slot>
                默认的
            </slot>
        </main>
        <footer>
            <slot name="footer">
                原来的footer
            </slot>
        </footer>
    </div>
</template>

<script>
export default{

}
</script>