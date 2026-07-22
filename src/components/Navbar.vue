<script setup>

import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('top')

const handleScroll = () => {
  const sections = document.querySelectorAll('section[id], header[id]')
  let current = 'top'
  
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 150) {
      current = sec.getAttribute('id')
    }
  })
  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
<nav class="navbar navbar-expand-lg navbar-milestone sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#top">
        <span class="brand-mark">M</span>
        <span style="color:#fff;font-family:'Fraunces',serif;font-weight:700;">Milestone</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navMain">
        <ul class="navbar-nav align-items-lg-center gap-lg-1">
          <!-- :class বাইন্ডিং যোগ করা হয়েছে প্রতিটি লিঙ্কের স্ক্রল স্পাই অ্যাক্টিভ করার জন্য -->
          <li class="nav-item"><a class="nav-link" :class="{ active: activeSection === 'top' }" href="#top">হোম</a></li>
          <li class="nav-item"><a class="nav-link" :class="{ active: activeSection === 'units' }" href="#units">সকল ইউনিট</a></li>
          <li class="nav-item"><a class="nav-link" :class="{ active: activeSection === 'materials' }" href="#materials">স্টাডি ম্যাটেরিয়াল</a></li>
          <li class="nav-item"><a class="nav-link" :class="{ active: activeSection === 'success' }" href="#success">সফল শিক্ষার্থীরা</a></li>
          <li class="nav-item"><a class="nav-link" :class="{ active: activeSection === 'about' }" href="#about">আমাদের সম্পর্কে</a></li>
          <li class="nav-item"><a class="nav-link" :class="{ active: activeSection === 'contact' }" href="#contact">যোগাযোগ</a></li>
          <li class="nav-item ms-lg-3"><a class="btn btn-login" href="https://app.milestoneac.com" target="_blank">Login</a></li>
        </ul>
      </div>
    </div>
</nav>

</template>


<style scoped>
.navbar-toggler-icon {
  filter: invert(1) grayscale(100%) brightness(200%);
}
.navbar-toggler {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}


</style>