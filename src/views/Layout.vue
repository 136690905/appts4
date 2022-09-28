<template>
    <div>
        <router-view/>
        <tab-bar></tab-bar>
    </div>
</template>
<script lang="ts" setup>
import TabBar from "@/components/tabBar/tabBar.vue"
</script>