<template>
  <div class="testimonial-card" :style="{ opacity: 0, transform: 'translateY(20px)' }">
    <div class="rating">
      <i v-for="n in 5" :key="n" :class="n <= Math.floor(testimonial.rating) ? 'fas fa-star' : (n - 0.5 <= testimonial.rating ? 'fas fa-star-half-alt' : 'far fa-star')"></i>
    </div>
    <p>"{{ testimonial.text }}"</p>
    <div class="customer">
      <div class="customer-avatar"></div>
      <div class="customer-info">
        <h4>{{ testimonial.customer.name }}</h4>
        <p>{{ testimonial.customer.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    testimonial: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.rating {
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.customer {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
}

.customer-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--gray-300);
  margin-right: 1rem;
}

.customer-info h4 {
  margin-bottom: 0.25rem;
}
</style>