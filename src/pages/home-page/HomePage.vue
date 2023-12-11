<script setup>
import SkeletonCardMenu from "components/skeletons/SkeletonCardMenu.vue";
</script>

<template>
  <div class="page-my-diary-food">
    <main>
      <h2>{{ $t("label_your_current_menu") }}</h2>
      <SkeletonCardMenu :number-repeat="3" />
    </main>
  </div>
</template>
