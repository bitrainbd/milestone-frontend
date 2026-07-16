<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
      <!-- FOOTER -->
  <footer>
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <div class="footer-logo">
            <span class="brand-mark">M</span>
            <span style="color:#fff;font-family:'Fraunces',serif;font-weight:700;font-size:1.2rem;">Milestone</span>
          </div>
          <p class="small mb-3" style="color:rgba(255,255,255,.55);">
            ভর্তি পরীক্ষার প্রস্তুতি মানেই মাইলস্টোনের আধিপত্য। শিক্ষার্থীদের সর্বোচ্চ ভালো ফলাফল অর্জনের বাতিঘর মাইলস্টোন।
          </p>
          <div class="d-flex gap-2">
            <a href="#" class="btn btn-sm btn-outline-light rounded-circle"><i class="bi bi-facebook"></i></a>
            <a href="#" class="btn btn-sm btn-outline-light rounded-circle"><i class="bi bi-youtube"></i></a>
            <a href="mailto:milestone.uac@gmail.com" class="btn btn-sm btn-outline-light rounded-circle"><i class="bi bi-envelope-fill"></i></a>
          </div>
        </div>
        <div class="col-lg-2 col-6">
          <h6 class="mb-3">গুরুত্বপূর্ণ লিঙ্ক</h6>
          <ul>
            <li><a href="#about">আমাদের সম্পর্কে</a></li>
            <li><a href="#units">সকল ইউনিট</a></li>
            <li><a href="#materials">বইসমূহ</a></li>
            <li><a href="#contact">যোগাযোগ</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-6">
          <h6 class="mb-3">সহযোগিতা</h6>
          <ul>
            <li><a href="#">প্রাইভেসি পলিসি</a></li>
            <li><a href="#">শর্তাবলী</a></li>
            <li><a href="#">রিফান্ড পলিসি</a></li>
          </ul>
        </div>
        <div class="col-lg-4">
          <h6 class="mb-3">সাধারণ জিজ্ঞাসা</h6>
          <div class="faq-banner">
            <p class="small mb-2" style="color:rgba(255,255,255,.75);">আমাদের курс সম্পর্কে শিক্ষার্থীদের সাধারণ প্রশ্নগুলোর উত্তর জানতে ক্লিক করো।</p>
            <a href="#" class="fw-bold" style="color:var(--gold);">FAQ (জিজ্ঞাসা) <i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; {{ currentYear }} Milestone University Admission Coaching. সর্বস্বত্ব সংরক্ষিত। — Chakbazar, Chattogram.
      </div>
    </div>
  </footer>

  <!-- Floating chat buttons -->
  <a href="https://wa.me/8801816252663" target="_blank" class="chat-fab whatsapp" title="WhatsApp"><i class="bi bi-whatsapp"></i></a>
  <a href="#" target="_blank" class="chat-fab messenger" title="Messenger"><i class="bi bi-messenger"></i></a>



</template>