<script setup>
import { onMounted, computed } from 'vue'
import { useApi } from "@/stores";
import { storeToRefs } from "pinia";

const pinia_api = useApi();
const { mcq_question_papers, loading } = storeToRefs(pinia_api);

onMounted(async () => {
    await pinia_api.fetchMcqQuestionPapers();
})

// Education level labels (adjust to match your actual taxonomy/subject names if available from API)
const educationLevelLabels = {
    1: 'HSC',
    2: 'University',
    3: 'Job',
};

const banglaDigits = { '0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯' };
const toBanglaNumber = (num) => String(num).replace(/[0-9]/g, d => banglaDigits[d]);

// A starts_at/ends_at that hasn't actually been set comes back as a
// zero/negative-year timestamp (e.g. "-000001-11-29T..."). Treat that as "not scheduled".
const hasSchedule = (paper) => {
    return paper.starts_at && !String(paper.starts_at).startsWith('-')
        && paper.ends_at && !String(paper.ends_at).startsWith('-');
};

const formatDateTime = (isoString) => {
    const d = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }).format(d);
};

const getExamStatus = (paper) => {
    if (!hasSchedule(paper)) {
        return {
            type: 'practice',
            icon: 'bi-calendar-event',
            iconClass: 'text-danger',
            label: 'সময় উত্তীর্ণ / প্র্যাকটিস মোড',
            labelClass: 'text-danger',
        };
    }

    const now = new Date();
    const start = new Date(paper.starts_at);
    const end = new Date(paper.ends_at);

    if (now < start) {
        return {
            type: 'upcoming',
            icon: 'bi-alarm-fill',
            iconClass: 'text-warning',
            label: `শুরু হবে: ${formatDateTime(paper.starts_at)}`,
            labelClass: 'text-primary',
        };
    }

    if (now >= start && now <= end) {
        return {
            type: 'live',
            icon: 'bi-broadcast',
            iconClass: 'text-success',
            label: 'এখন লাইভ',
            labelClass: 'text-success',
        };
    }

    return {
        type: 'expired',
        icon: 'bi-calendar-event',
        iconClass: 'text-danger',
        label: 'সময় উত্তীর্ণ / প্র্যাকটিস মোড',
        labelClass: 'text-danger',
    };
};

const badgeStyle = (paper) => {
    return paper.education_level_id === 1
        ? { background: 'rgba(192,57,43,.1)', color: 'var(--red)' }
        : { background: 'rgba(217,164,65,.15)', color: 'var(--gold)' };
};

const startButtonLabel = (status) => {
    return status.type === 'upcoming' ? 'বিস্তারিত দেখো' : 'Start Exam (পরীক্ষা শুরু করো)';
};

</script>
<template>

<section class="section" id="exams" style="background: var(--paper); padding: 4.5rem 0;">
  <div class="container">

    <div class="text-center mb-5">
      <div class="eyebrow mb-2" style="font-family: 'Manrope', sans-serif; text-transform: uppercase; letter-spacing: .16em; font-size: .7rem; font-weight: 700; color: var(--red);">অনলাইন মূল্যায়ন</div>
      <h2 class="section-title" style="font-family: 'Fraunces', 'Hind Siliguri', serif; font-size: clamp(1.6rem, 3vw, 2.3rem); font-weight: 700; color: var(--navy-deep);">লাইভ MCQ প্রশ্নপত্রসমূহ</h2>
      <p class="text-muted mx-auto" style="max-width: 600px; font-size: 0.95rem;">তোমার প্রস্তুতি যাচাই করতে নিচের তালিকা থেকে লাইভ বা আপকামিং পরীক্ষায় অংশগ্রহণ করো।</p>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
    </div>

    <!-- Empty state -->
    <div v-else-if="!mcq_question_papers || mcq_question_papers.length === 0" class="text-center py-5 text-muted">
      কোনো প্রশ্নপত্র পাওয়া যায়নি।
    </div>

    <!-- Papers -->
    <div v-else class="row g-4 justify-content-center">

      <div class="col-md-6 col-lg-4" v-for="paper in mcq_question_papers" :key="paper.id">
        <div class="card h-100 exam-paper-card" style="background-color: #ffffff; border: 1px solid #e8e4d9; border-radius: 16px; box-shadow: 0 10px 30px rgba(26,42,94,0.05); transition: transform 0.2s, box-shadow 0.2s; overflow: hidden;">
          <div class="card-body p-4 d-flex flex-column justify-content-between">
            <div>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="badge rounded-pill px-3 py-1"
                      :style="{ ...badgeStyle(paper), fontWeight: 700, fontSize: '.75rem' }">
                  {{ educationLevelLabels[paper.education_level_id] || 'সাধারণ' }}
                </span>
                <span class="text-muted small"><i class="bi bi-bookmark-star-fill text-warning me-1"></i>ID: {{ paper.id }}</span>
              </div>

              <h4 class="card-title fw-bold mb-3" style="font-family: 'Fraunces', 'Hind Siliguri', serif; color: #000000;">
                {{ paper.name }}
              </h4>

              <div class="exam-meta-info mb-4">
                <div class="d-flex align-items-center text-muted small mb-2">
                  <i class="bi bi-clock-history me-2 text-primary"></i>
                  <span>সময়কাল: <strong class="text-dark">{{ toBanglaNumber(paper.duration) }} মিনিট</strong></span>
                </div>
                <div class="d-flex align-items-center text-muted small mb-2">
                  <i class="bi bi-check-circle me-2 text-success"></i>
                  <span>মোট নম্বর: <strong class="text-dark">{{ toBanglaNumber(paper.total_marks) }} নম্বর</strong></span>
                </div>
                <div class="d-flex align-items-center text-muted small">
                  <i :class="['bi', getExamStatus(paper).icon, 'me-2', getExamStatus(paper).iconClass]"></i>
                  <span>স্ট্যাটাস: <strong :class="getExamStatus(paper).labelClass">{{ getExamStatus(paper).label }}</strong></span>
                </div>
              </div>
            </div>

            <div class="mt-3">
              <a href="https://app.milestoneac.com" class="btn w-100 d-flex align-items-center justify-content-center gap-2 fw-bold py-2.5 btn-start-exam"
                 style="background: var(--navy-deep); color: #fff; border-radius: 10px; border: none; font-size: 0.95rem; transition: background 0.2s;">
                <i class="bi bi-play-circle-fill"></i> {{ startButtonLabel(getExamStatus(paper)) }}
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

</template>


<style>
.exam-paper-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 35px rgba(14, 26, 63, 0.12) !important;
    border-color: var(--navy) !important;
  }
  .btn-start-exam:hover {
    background: var(--red) !important;
    color: #fff !important;
  }
</style>