<template>
  <div class="transformation-card" :style="{ opacity: 0, transform: 'translateY(20px)' }">
    <div class="card-image-container">
      <img v-if="item.imageClass === 'blog-image'" src="../assets/style-blog.jpg" alt="Style Blog" class="card-image">
      <img v-else-if="item.imageClass === 'dashboard-image'" src="../assets/style-dashboard.png" alt="Style Dashboard" class="card-image">
      <img v-else-if="item.imageClass === 'community-image'" src="../assets/fashion-community.png" alt="Fashion Community" class="card-image">
    </div>
    <div class="card-content">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <button class="btn btn-outline">Explore</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransformationCard',
  props: {
    item: {
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
.transformation-card {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  width: calc(33.333% - 1.5rem);
  min-width: 250px;
}

.transformation-card:hover {
  transform: translateY(-5px) !important;
  box-shadow: var(--box-shadow-lg);
}

.card-image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  height: fit-content;
  width: 100%;
}

.card-image {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  padding: 1rem;
  display: block;
}

.card-content {
  padding: 1.5rem;
  background: white;
}

.card-content .btn {
  margin-top: 1rem;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .transformation-card {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .transformation-card {
    min-width: unset;
  }
  
  .card-image {
    padding: 0.5rem;
  }
}
</style>