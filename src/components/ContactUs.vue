<script setup>
import { ref } from 'vue'

const isValidated = ref(false)
const showSuccessMsg = ref(false)

const handleFormSubmit = (e) => {
  const form = e.target
  showSuccessMsg.value = false
  
  if (!form.checkValidity()) {
    isValidated.value = true
    return
  }
  
  showSuccessMsg.value = true
  isValidated.value = false
  form.reset()
}

</script>

<template>
    <section class="section contact-section" id="contact">
        <div class="container">
        <div class="row g-5">
            <div class="col-lg-5">
            <div class="eyebrow mb-2" style="color:var(--gold);">যোগাযোগ করো</div>
            <h2 class="display-font mb-3" style="font-weight:700;">Let's Take the Next Step</h2>
            <p style="color:rgba(255,255,255,.7);" class="mb-4">
                ভর্তি সংক্রান্ত যেকোনো তথ্যের জন্য আমাদের সাথে যোগাযোগ করো — আমরা প্রস্তুত তোমার পরবর্তী মাইলফলকে সাহায্য করতে।
            </p>
            <div class="d-flex flex-column gap-3">
                <div class="contact-card d-flex align-items-center gap-3">
                <i class="bi bi-telephone-fill"></i>
                <div><div class="fw-bold">01816-252663 | 01837-644644</div><div class="small" style="color:rgba(255,255,255,.55);">Call or WhatsApp</div></div>
                </div>
                <div class="contact-card d-flex align-items-center gap-3">
                <i class="bi bi-envelope-fill"></i>
                <div><div class="fw-bold">milestone.uac@gmail.com</div><div class="small" style="color:rgba(255,255,255,.55);">Email us anytime</div></div>
                </div>
                <div class="contact-card d-flex align-items-center gap-3">
                <i class="bi bi-geo-alt-fill"></i>
                <div><div class="fw-bold">Chakbazar, Chattogram</div><div class="small" style="color:rgba(255,255,255,.55);">Bangladesh</div></div>
                </div>
            </div>
            </div>
            <div class="col-lg-7">
            <!-- ভিউ ইভেন্ট মডিফায়ার এবং ক্লাস বাইন্ডিং যুক্ত করা হয়েছে -->
            <form @submit.prevent="handleFormSubmit" :class="{ 'was-validated': isValidated }" class="row g-3" novalidate>
                <div class="col-md-6">
                <label class="form-label form-label-milestone">নাম / Name</label>
                <input type="text" class="form-control form-control-milestone" placeholder="তোমার নাম লেখো" required>
                <div class="invalid-feedback">নাম আবশ্যক</div>
                </div>
                <div class="col-md-6">
                <label class="form-label form-label-milestone">মোবাইল নম্বর</label>
                <input type="tel" class="form-control form-control-milestone" placeholder="01XXXXXXXXX" required>
                <div class="invalid-feedback">মোবাইল নম্বর আবশ্যক</div>
                </div>
                <div class="col-12">
                <label class="form-label form-label-milestone">আগ্রহের ইউনিট</label>
                <select class="form-select form-control-milestone" required>
                    <option value="" selected disabled>একটি ইউনিট বেছে নাও</option>
                    <option>Engineering Unit</option>
                    <option>Medical Unit</option>
                    <option>University A/B/C/D Unit</option>
                    <option>Group Change / Only GK / Only Math</option>
                </select>
                <div class="invalid-feedback">ইউনিট নির্বাচন করো</div>
                </div>
                <div class="col-12">
                <label class="form-label form-label-milestone">বার্তা (ঐচ্ছিক)</label>
                <textarea class="form-control form-control-milestone" rows="3" placeholder="তোমার প্রশ্ন বা মন্তব্য লেখো..."></textarea>
                </div>
                <div class="col-12">
                <button type="submit" class="btn btn-enroll w-100 w-md-auto">বার্তা পাঠাও</button>
                </div>
                <!-- v-if ডিরেক্টিভ ব্যবহার করে সাকসেস মেসেজ কন্ডিশনাল করা হয়েছে -->
                <div class="col-12" v-if="showSuccessMsg">
                <div class="alert mb-0" style="background:rgba(217,164,65,.15); border:1px solid var(--gold); color:var(--gold);">
                    <i class="bi bi-check-circle-fill me-2"></i>ধন্যবাদ! আমরা শীঘ্রই তোমার সাথে যোগাযোগ করব।
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    </section>

</template>