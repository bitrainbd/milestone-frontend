<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
</script>

<template>
  <div>
    <AppLayout>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </AppLayout>
  </div>

</template>