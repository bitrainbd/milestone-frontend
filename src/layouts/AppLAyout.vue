<script setup>
import {Navbar,Footer} from "@/components";
</script>

<template>
  <div>
      <Navbar />
      <slot />
      <Footer />
  </div>
</template>

<style scoped></style>
