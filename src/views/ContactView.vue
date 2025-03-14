<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue';
import ContactForm from '@/components/ContactForm.vue';

</script>

<template>
  <BaseLayout :backgroundImage="'src/assets/lovely-landing-photo-2.jpeg'" :title="'Contact'">
    <template #hero>
    </template>
    <section>
      <ContactForm />
    </section>


  </BaseLayout>
</template>

<style></style>
