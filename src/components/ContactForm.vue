<template>
  <FormKit type="form" @submit="handleSubmit" #default="{ value }">
    <div class="form-type-selector">
      <FormKit type="radio" :options="formTypes" v-model="formType" :value="formType" name="formType" />
    </div>

    <div class="field-container">
      <h2>{{ formType }}</h2>
      <div v-if="submitStatus.message" :class="['status-message', submitStatus.type]">
        {{ submitStatus.message }}
      </div>

      <!-- Common Fields -->
      <FormKit type="text" name="name" label="Name" validation="required" />

      <FormKit type="email" name="email" label="Email" validation="required|email" />

      <!-- Studio Fields -->
      <template v-if="formType === 'Studio'">
        <FormKit type="checkbox" name="services" label="What do you need?" :options="studioServices"
          validation="required" />

        <FormKit v-if="(value?.services as any)?.includes('Other')" type="textarea" name="otherServiceDetails"
          label="Please specify other services" validation="required" />

        <FormKit type="tel" name="phone" label="Phone" validation="required" />

        <FormKit type="date" name="date" label="Request Date" validation="required" suffix-icon-class="date-icon" />

        <FormKit type="textarea" name="message" label="Message" />
      </template>

      <!-- Booking Fields -->
      <template v-if="formType === 'Booking'">
        <FormKit type="text" name="venue" label="Venue" validation="required" />

        <FormKit type="tel" name="phone" label="Phone" validation="required" />

        <FormKit type="date" name="date" label="Performance Date" validation="required" />

        <FormKit type="textarea" name="message" label="Message" />
      </template>

      <!-- Something Else Fields -->
      <template v-if="formType === 'Something Else'">
        <FormKit type="tel" name="phone" />

        <FormKit type="textarea" name="message" label="Message" />
      </template>

      <!-- Newsletter Opt-in -->
      <FormKit type="checkbox" name="newsletter" label="Subscribe to our newsletter for updates" />
    </div>
  </FormKit>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface FormData {
  formType: string;
  name: string;
  email: string;
  services?: string[];
  otherServiceDetails?: string;
  phone?: string;
  date?: string;
  message?: string;
  venue?: string;
  newsletter: boolean;
}

interface SubmitStatus {
  message: string;
  type: 'success' | 'error' | '';
}

export default defineComponent({
  name: 'ContactForm',
  data() {
    return {
      formTypes: ['Booking', 'Studio', 'Something Else'],
      formType: 'Studio',
      studioServices: ['Guitar', 'Vocal', 'Mixing', 'Mastering', 'Gear Rental', 'Other'],
      submitStatus: {
        message: '',
        type: '' as 'success' | 'error' | ''
      } as SubmitStatus
    }
  },
  methods: {
    async handleSubmit(formData: FormData) {
      this.submitStatus = { message: '', type: '' };

      try {
        const response = await fetch('https://formspree.io/f/mqapakbg', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Submission failed');
        }

        this.submitStatus = {
          message: 'Thank you! Your message has been sent.',
          type: 'success'
        };
      } catch (error) {
        console.error('Submission error:', error);
        this.submitStatus = {
          message: 'Sorry, there was an error sending your message. Please try again.',
          type: 'error'
        };
      }
    }
  }
});
</script>

<style scoped>
.date-icon {
  color: white;
}

.field-container {
  border-radius: 0.5em;
  background-color: #1c1c1ca6;
  padding: 2em;
}

.form-type-selector {
  display: flex;
  gap: 0.5em;
  justify-content: center;
  margin-bottom: 1em;
}

/* You may want to customize FormKit's default styles */
::v-deep(.formkit-outer) {
  margin-bottom: 1em;
}

::v-deep(.formkit-input) {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: white;
}

::v-deep(.formkit-label) {
  display: block;
  margin-bottom: 5px;
}

::v-deep(.formkit-submit) {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

::v-deep(.formkit-submit:hover) {
  background-color: #45a049;
}
</style>
