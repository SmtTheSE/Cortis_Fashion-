<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.name">
      <div class="product-overlay">
        <button class="btn btn-primary" @click="buyNow">
          <i class="fas fa-credit-card"></i> Buy Now
        </button>
        <button class="btn btn-outline" @click="addToCart">
          <i class="fab fa-npm"></i> Add to Cart
        </button>
        <button class="btn btn-outline" @click="viewDetails">
          <i class="fas fa-link"></i> View Details
        </button>
      </div>
    </div>
    <div class="product-info">
      <h3>
        <i class="fab fa-npm"></i> {{ product.name }}
      </h3>
      <p class="brand" v-if="getBrand(product.name)">
        <i class="fas fa-tag"></i> {{ getBrand(product.name) }}
      </p>
      <p class="price">
        <i class="fas fa-dollar-sign"></i> {{ product.price.toFixed(2) }}
      </p>
      <p class="member" v-if="product.member">
        <i class="fas fa-user"></i> {{ product.member }}
      </p>
      <p class="description">
        <i class="fas fa-info-circle"></i> {{ product.description }}
      </p>
      <p class="sustainability" v-if="product.sustainability">
        <i class="fas fa-leaf"></i> {{ product.sustainability }}
      </p>
      <p class="instagram-link" v-if="product.instagramLink">
        <i class="fab fa-instagram"></i> 
        <a :href="product.instagramLink" target="_blank">View on Instagram</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    buyNow() {
      // In a real app, you would process the payment
      console.log('Buying product:', this.product);
      alert(`Proceeding to checkout for ${this.product.name} - $${this.product.price.toFixed(2)}\n\nPlease enter your credit card details to complete the purchase.`);
    },
    addToCart() {
      // In a real app, you would add the product to cart
      console.log('Added to cart:', this.product);
      alert(`${this.product.name} added to cart!`);
    },
    viewDetails() {
      // Navigate to product detail page or Instagram link if available
      if (this.product.instagramLink) {
        // Open Instagram link in a new tab
        window.open(this.product.instagramLink, '_blank');
      } else {
        this.$router.push(`/product/${this.product.id}`);
      }
    },
    getBrand(name) {
      // Check if this is one of the new products without a traditional brand
      if (name.includes('ABRA') || name.includes('LADO BOKUCHAVA') || name.includes('KODY PHILLIPS')) {
        return '';
      }
      
      const brands = ['Vivienne Westwood', 'KARMUEL YOUNG', 'Raf Simons', 'Rick Owens'];
      for (const brand of brands) {
        if (name.includes(brand)) {
          return brand;
        }
      }
      return '';
    }
  }
}
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow-lg);
}

.product-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  transition: var(--transition);
}

.product-card:hover .product-overlay {
  opacity: 1;
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  margin-bottom: 0.25rem;
}

.brand {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.member, .description, .sustainability, .instagram-link {
  margin-bottom: 0.5rem;
}

.instagram-link a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
}

.instagram-link a:hover {
  text-decoration: underline;
}

.product-overlay .btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
</style>