<template>
  <main>
    <section class="section flex flex-col items-center gap-3">
      <small>Current click</small>
      <h1 class="text-5xl font-medium">{{ count.count }}</h1>
      <div class="flex gap-4 mt-3">
        <button @click="count.click()" class="btn-count">Click++</button>
        <button @click="count.doubleClick()" class="btn-count">
          Click * 2
        </button>
      </div>
      <router-link class="nav-link" :to="'/' + langCode + '/About'">
        Trainings
      </router-link>
    </section>

    <section class="mb-6">
      <h1 class="text-xl mb-3">
        <i class="fa fa-chevron-right"></i>
        Routes
      </h1>
      <div class="flex gap-4">
        <template v-for="(route, i) in routes" :key="i">
          <a
            @click="movePage(route.to)"
            class="text-green-500 text-lg hover:text-green-200 duration-300"
            >{{ route.name }}</a
          >
        </template>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script setup>
import { useCount } from "@/stores/counter";
import { useRouter } from "vue-router";
import Pill from "@/components/Pill.vue";
import Footer from "@/components/Footer.vue";

const count = useCount();
const router = useRouter();

const movePage = (to) => router.push({ name: to });

const dependencies = [
  "Vue v.3.2.25",
  "Tailwindcss v.3.0.18",
  "Vue router v.4.0.12",
  "Pinia v.2.0.10",
  "Vite v.2.7.2",
  "Postcss v.8.4.5",
  "Autoprefixer v.10.4.2",
];

const routes = [
  {
    name: "About",
    to: "About",
  },
  {
    name: "Blank screen",
    to: "Blank",
  },
];
</script>

<style scoped>
.section {
  @apply w-full bg-gray-50 py-8 px-5 rounded mb-8;
}

.btn-count {
  @apply px-3 py-1 bg-indigo-400 text-gray-50 rounded;
}
</style>
