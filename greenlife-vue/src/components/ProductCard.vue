<template>
  <div class="product-card">
    <div class="product-image">
      <!-- Carousel for product images -->
      <div class="carousel">
        <div class="carousel-container" :style="{ transform: `translateX(${currentSlide * -33.333}%)` }">
          <!-- Cortis logo image -->
          <div class="carousel-slide">
            <div class="image-container">
              <img :src="product.image" :alt="`${product.name} - Logo`" class="carousel-image">
            </div>
          </div>
          <!-- Product demo image -->
          <div class="carousel-slide">
            <div class="image-container">
              <img src="../assets/products/product-demo.jpg" :alt="`${product.name} - Product View`" class="carousel-image">
            </div>
          </div>
          <!-- Size chart image -->
          <div class="carousel-slide">
            <div class="image-container">
              <img src="../assets/products/size-chart.png" :alt="`${product.name} - Size Chart`" class="carousel-image">
            </div>
          </div>
        </div>
      </div>
      
      <div class="product-overlay">
        <button class="btn btn-primary" @click="initiatePurchase">
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
    
    <!-- Carousel Navigation Buttons -->
    <div class="carousel-controls">
      <button 
        class="control-btn" 
        :class="{ active: currentSlide === 0 }"
        @click="goToSlide(0)"
      >
        <i class="fas fa-image"></i> Logo
      </button>
      <button 
        class="control-btn" 
        :class="{ active: currentSlide === 1 }"
        @click="goToSlide(1)"
      >
        <i class="fas fa-tshirt"></i> Product
      </button>
      <button 
        class="control-btn" 
        :class="{ active: currentSlide === 2 }"
        @click="goToSlide(2)"
      >
        <i class="fas fa-ruler-combined"></i> Size Chart
      </button>
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

    <!-- Payment Modal -->
    <transition name="fade">
      <div class="modal" v-if="showPaymentModal">
        <div class="modal-content payment-modal">
          <span class="close" @click="closePaymentModal">&times;</span>
          <h2>Complete Your Purchase</h2>
          <div class="product-summary">
            <div class="product-details">
              <h3>{{ product.name }}</h3>
              <p class="price">${{ product.price.toFixed(2) }}</p>
            </div>
          </div>
          
          <form @submit.prevent="processPayment" class="payment-form">
            <div class="form-group">
              <label for="cardNumber">Card Number</label>
              <div class="input-with-icon">
                <i class="fas fa-credit-card"></i>
                <input 
                  type="text" 
                  id="cardNumber" 
                  v-model="paymentInfo.cardNumber" 
                  placeholder="1234 5678 9012 3456"
                  maxlength="19"
                  @input="formatCardNumber"
                  required
                >
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group half-width">
                <label for="expiryDate">Expiry Date</label>
                <div class="input-with-icon">
                  <i class="fas fa-calendar-alt"></i>
                  <input 
                    type="text" 
                    id="expiryDate" 
                    v-model="paymentInfo.expiryDate" 
                    placeholder="MM/YY"
                    maxlength="5"
                    @input="formatExpiryDate"
                    required
                  >
                </div>
              </div>
              
              <div class="form-group half-width">
                <label for="cvv">CVV</label>
                <div class="input-with-icon">
                  <i class="fas fa-lock"></i>
                  <input 
                    type="text" 
                    id="cvv" 
                    v-model="paymentInfo.cvv" 
                    placeholder="123"
                    maxlength="4"
                    required
                  >
                </div>
              </div>
            </div>
            
            <div class="form-group">
              <label for="cardName">Cardholder Name</label>
              <div class="input-with-icon">
                <i class="fas fa-user"></i>
                <input 
                  type="text" 
                  id="cardName" 
                  v-model="paymentInfo.cardName" 
                  placeholder="John Doe"
                  required
                >
              </div>
            </div>
            
            <div class="total-amount">
              <span>Total:</span>
              <span class="amount">${{ product.price.toFixed(2) }}</span>
            </div>
            
            <button type="submit" class="btn btn-primary btn-block" :disabled="isProcessing">
              <span v-if="!isProcessing">Pay Now</span>
              <span v-else><i class="fas fa-spinner fa-spin"></i> Processing...</span>
            </button>
          </form>
        </div>
      </div>
    </transition>
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
  data() {
    return {
      currentSlide: 0, // Start with the first slide (Cortis logo)
      showPaymentModal: false,
      isProcessing: false,
      paymentInfo: {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardName: ''
      }
    }
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index;
    },
    initiatePurchase() {
      this.showPaymentModal = true;
    },
    closePaymentModal() {
      this.showPaymentModal = false;
      this.isProcessing = false;
      // Reset form
      this.paymentInfo = {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardName: ''
      };
    },
    formatCardNumber() {
      // Remove all non-digit characters
      let value = this.paymentInfo.cardNumber.replace(/\D/g, '');
      
      // Add space every 4 digits
      if (value.length > 4) {
        value = value.match(/.{1,4}/g).join(' ');
      }
      
      this.paymentInfo.cardNumber = value;
    },
    formatExpiryDate() {
      // Remove all non-digit characters
      let value = this.paymentInfo.expiryDate.replace(/\D/g, '');
      
      // Add slash after 2 digits
      if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
      }
      
      this.paymentInfo.expiryDate = value;
    },
    processPayment() {
      // Basic validation
      if (!this.paymentInfo.cardNumber || !this.paymentInfo.expiryDate || 
          !this.paymentInfo.cvv || !this.paymentInfo.cardName) {
        alert('Please fill in all fields');
        return;
      }
      
      // Validate card number (simple validation)
      const cardNumber = this.paymentInfo.cardNumber.replace(/\s/g, '');
      if (cardNumber.length < 16) {
        alert('Please enter a valid card number');
        return;
      }
      
      // Validate expiry date
      const [month, year] = this.paymentInfo.expiryDate.split('/');
      if (!month || !year || month > 12) {
        alert('Please enter a valid expiry date');
        return;
      }
      
      // Validate CVV
      if (this.paymentInfo.cvv.length < 3) {
        alert('Please enter a valid CVV');
        return;
      }
      
      // Process payment
      this.isProcessing = true;
      
      // Simulate payment processing
      setTimeout(() => {
        this.isProcessing = false;
        alert(`Payment successful! Thank you for your purchase of ${this.product.name} for $${this.product.price.toFixed(2)}.`);
        this.closePaymentModal();
      }, 2000);
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
  position: relative;
  z-index: 1;
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

/* Carousel Styles */
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  width: 300%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  width: calc(100% / 3);
  height: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: calc(100% / 3);
}

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Carousel Controls */
.carousel-controls {
  display: flex;
  border-top: 1px solid var(--gray-200);
}

.control-btn {
  flex: 1;
  padding: 12px 0;
  background: white;
  border: none;
  border-right: 1px solid var(--gray-200);
  cursor: pointer;
  font-weight: 500;
  color: var(--gray-600);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.control-btn:last-child {
  border-right: none;
}

.control-btn:hover {
  background: var(--gray-100);
}

.control-btn.active {
  background: var(--primary-color);
  color: white;
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
  z-index: 10;
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

/* Payment Modal */
.modal {
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
}

.modal-content {
  background-color: white;
  margin: auto;
  padding: 2rem;
  border-radius: var(--border-radius);
  width: 100%;
  max-width: 500px;
  position: relative;
  animation: slideIn 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  max-height: 90vh;
  overflow-y: auto;
}

.payment-modal h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--dark-color);
  font-size: 1.75rem;
}

.close {
  position: absolute;
  right: 1.5rem;
  top: 1rem;
  font-size: 2rem;
  cursor: pointer;
  color: var(--gray-500);
  z-index: 10;
}

.close:hover {
  color: var(--dark-color);
}

.product-summary {
  border-bottom: 1px solid var(--gray-300);
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
}

.product-details h3 {
  margin-bottom: 0.5rem;
  color: var(--dark-color);
  font-size: 1.25rem;
}

.product-details .price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
}

.payment-form .form-group {
  margin-bottom: 1.5rem;
}

.payment-form .form-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.payment-form .half-width {
  flex: 1;
  min-width: 200px;
}

.payment-form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--dark-color);
}

.input-with-icon {
  position: relative;
}

.input-with-icon i {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray-500);
  z-index: 2;
}

.payment-form input {
  width: 100%;
  padding: 12px 15px 12px 40px;
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: var(--transition);
  box-sizing: border-box;
}

.payment-form input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(255, 0, 110, 0.2);
}

.total-amount {
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 1.5rem 0;
  padding-top: 1rem;
  border-top: 1px solid var(--gray-300);
}

.amount {
  color: var(--primary-color);
}

.btn-block {
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@keyframes slideIn {
  from {
    transform: translateY(-50px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .modal {
    padding: 15px;
  }
  
  .modal-content {
    padding: 1.5rem;
  }
  
  .payment-modal h2 {
    font-size: 1.5rem;
  }
  
  .payment-form .half-width {
    min-width: 100%;
  }
  
  .input-with-icon input {
    padding: 12px 15px 12px 40px;
  }
  
  .product-details .price {
    font-size: 1.25rem;
  }
  
  .total-amount {
    font-size: 1.1rem;
  }
  
  .control-btn {
    padding: 10px 0;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .modal {
    padding: 10px;
  }
  
  .modal-content {
    padding: 1.25rem;
  }
  
  .payment-modal h2 {
    font-size: 1.3rem;
  }
  
  .close {
    right: 1rem;
    top: 0.75rem;
    font-size: 1.5rem;
  }
  
  .product-details h3 {
    font-size: 1.1rem;
  }
  
  .control-btn {
    padding: 8px 0;
    font-size: 0.75rem;
  }
  
  .control-btn i {
    font-size: 0.75rem;
  }
}
</style>