<template>
    <navigation-header />
    <div class="content container">
        <router-view />
    </div>
</template>

<script>
import NavigationHeader from './components/NavigationHeader.vue';

export default {
    components: { NavigationHeader}
};
</script>
