<template>
  <div class="products">
    <section class="hero-section">
      <div class="container">
        <h1>Cortis-Inspired Collection</h1>
        <p>Edgy streetwear meets high fashion</p>
      </div>
    </section>

    <section class="filters-section">
      <div class="container">
        <div class="filters">
          <div class="filter-group">
            <label>Category:</label>
            <select v-model="selectedCategory">
              <option value="all">All Products</option>
              <option value="mens">Men's</option>
              <option value="womens">Women's</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Price Range:</label>
            <select v-model="selectedPrice">
              <option value="all">Any Price</option>
              <option value="0-50">$0 - $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100+">$100+</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Sort By:</label>
            <select v-model="sortBy">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <section class="products-section">
      <div class="container">
        <div class="products-grid">
          <ProductCard 
            v-for="(product, index) in filteredProducts" 
            :key="index"
            :product="product"
            :index="index"
          />
        </div>
      </div>
    </section>

    <section class="sustainability-section">
      <div class="container">
        <div class="content">
          <h2>Our Fashion Promise</h2>
          <p>Every product in our Cortis-inspired collection meets our rigorous quality standards. From premium fabrics to cutting-edge designs, we source materials that maximize style while ensuring durability and comfort.</p>
          <div class="certifications">
            <div class="certification" v-for="(cert, index) in certifications" :key="index">
              <i :class="['cert-icon', cert.icon]"></i>
              <h3>{{ cert.title }}</h3>
              <p>{{ cert.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Subscription Section -->
    <section class="subscription-section">
      <div class="container">
        <div class="subscription-content">
          <h2>Get Premium Access</h2>
          <p>Subscribe to our premium plan and get early access to new products, stock notifications, and exclusive decision-making power!</p>
          
          <div class="subscription-plan">
            <div class="plan-header">
              <h3>Premium Plan</h3>
              <div class="plan-price">$9.99<span>/month</span></div>
            </div>
            
            <ul class="plan-features">
              <li><i class="fas fa-bell"></i> Early access to new products</li>
              <li><i class="fas fa-bell"></i> Stock notifications</li>
              <li><i class="fas fa-bell"></i> Exclusive decision-making power</li>
              <li><i class="fas fa-bell"></i> Priority customer support</li>
            </ul>
            
            <button class="btn btn-primary" @click="subscribeToPlan">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Subscription Modal -->
    <transition name="fade">
      <div class="modal" v-if="showSubscriptionModal">
        <div class="modal-content subscription-modal">
          <span class="close" @click="closeSubscriptionModal">&times;</span>
          <h2>Premium Subscription</h2>
          <div class="subscription-summary">
            <div class="subscription-details">
              <h3>Premium Plan</h3>
              <p class="price">$9.99<span>/month</span></p>
            </div>
          </div>
          
          <form @submit.prevent="processSubscription" class="payment-form">
            <div class="form-group">
              <label for="subCardNumber">Card Number</label>
              <div class="input-with-icon">
                <i class="fas fa-credit-card"></i>
                <input 
                  type="text" 
                  id="subCardNumber" 
                  v-model="subscriptionInfo.cardNumber" 
                  placeholder="1234 5678 9012 3456"
                  maxlength="19"
                  @input="formatCardNumberSub"
                  required
                >
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group half-width">
                <label for="subExpiryDate">Expiry Date</label>
                <div class="input-with-icon">
                  <i class="fas fa-calendar-alt"></i>
                  <input 
                    type="text" 
                    id="subExpiryDate" 
                    v-model="subscriptionInfo.expiryDate" 
                    placeholder="MM/YY"
                    maxlength="5"
                    @input="formatExpiryDateSub"
                    required
                  >
                </div>
              </div>
              
              <div class="form-group half-width">
                <label for="subCvv">CVV</label>
                <div class="input-with-icon">
                  <i class="fas fa-lock"></i>
                  <input 
                    type="text" 
                    id="subCvv" 
                    v-model="subscriptionInfo.cvv" 
                    placeholder="123"
                    maxlength="4"
                    required
                  >
                </div>
              </div>
            </div>
            
            <div class="form-group">
              <label for="subCardName">Cardholder Name</label>
              <div class="input-with-icon">
                <i class="fas fa-user"></i>
                <input 
                  type="text" 
                  id="subCardName" 
                  v-model="subscriptionInfo.cardName" 
                  placeholder="John Doe"
                  required
                >
              </div>
            </div>
            
            <div class="total-amount">
              <span>Total:</span>
              <span class="amount">$9.99</span>
            </div>
            
            <button type="submit" class="btn btn-primary btn-block" :disabled="isProcessingSubscription">
              <span v-if="!isProcessingSubscription">Subscribe Now</span>
              <span v-else><i class="fas fa-spinner fa-spin"></i> Processing...</span>
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import cortisImage from '../assets/products/Cortis.png'

export default {
  name: 'ProductsView',
  components: {
    ProductCard
  },
  data() {
    return {
      cortisImage,
      selectedCategory: 'all',
      selectedPrice: 'all',
      sortBy: 'featured',
      showSubscriptionModal: false,
      isProcessingSubscription: false,
      subscriptionInfo: {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardName: ''
      },
      products: [
        {
          id: '1',
          name: 'ABRA Puppy T-Shirt',
          price: 285.00,
          category: 'mens',
          image: cortisImage,
          member: 'Martin',
          description: 'Featured in Martin\'s outfit, this set includes the ABRA Puppy T-Shirt.',
          sustainability: 'Made with sustainable materials and eco-friendly processes.',
          instagramLink: 'https://www.instagram.com/reel/DOb_LN6CfSx/'
        },
        {
          id: '2',
          name: 'LADO BOKUCHAVA Okinawa Belt',
          price: 365.00,
          category: 'accessories',
          image: cortisImage,
          member: 'Martin',
          description: 'Stylish belt from LADO BOKUCHAVA collection, featured in Martin\'s outfit.',
          sustainability: 'Crafted with sustainable materials for longevity.',
          instagramLink: 'https://www.instagram.com/reel/DOb_LN6CfSx/'
        },
        {
          id: '3',
          name: 'KODY PHILLIPS Rip Van Kody Waxed Black',
          price: 398.00,
          category: 'mens',
          image: cortisImage,
          member: 'Martin',
          description: 'Waxed black piece from KODY PHILLIPS Rip Van Kody collection, part of Martin\'s featured outfit.',
          sustainability: 'Made with sustainable materials and eco-friendly processes.',
          instagramLink: 'https://www.instagram.com/reel/DOb_LN6CfSx/'
        },
        {
          id: '4',
          name: 'CONNER IVES Grey Reconstituted Floral Swarovski Hoodie',
          price: 293,
          category: 'mens',
          image: cortisImage,
          member: 'Seonghyeon',
          description: 'Stylish hoodie from CONNER IVES collection, featured in Seonghyeon\'s outfit.',
          sustainability: 'Crafted with sustainable materials for a more sustainable future.',
          instagramLink: 'https://www.instagram.com/reel/DOOl5JsiaN0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D'
        },
        {
          id: '5',
          name: 'PDF CHANNEL The Boy TShirt',
          price: 376,
          category: 'mens',
          image: cortisImage,
          member: 'James',
          description: 'Comfortable oversized t-shirt for casual days.',
          sustainability: 'Made from sustainable cotton blend with reduced environmental impact.',
          instagramLink: 'https://www.instagram.com/reel/DOOmGUxCbQu/'
        },
        {
          id: '6',
          name: 'MAISON SPECIAL Multi Way Button Polo Shirt',
          price: 114,
          category: 'mens',
          image: cortisImage,
          member: 'Juhoon',
          description: 'Polo shirt with multiple ways to button up for a versatile look.',
          sustainability: 'Designed with sustainable materials and timeless style for longevity.',
          instagramLink: 'https://www.instagram.com/reel/DOOl9viCUbx/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ%3D%3D'
        }
        , {
          id: '7',
          name: 'MAISON SPECIAL Multi Way Button Polo Shirt',
          price: 36,
          category: 'mens',
          image: cortisImage,
          member: 'Keonho',
          description: 'STUSSY Vintage White Shirt',
          sustainability: 'Made with sustainable materials and timeless style for longevity.',
          instagramLink: 'https://www.instagram.com/reel/DOOmCXeCQl_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D'
        }
      ],
      certifications: [
        {
          icon: 'fas fa-certificate',
          title: 'Quality Assured',
          description: 'All products undergo strict quality control processes.'
        },
        {
          icon: 'fas fa-recycle',
          title: 'Eco-Conscious',
          description: 'We prioritize sustainable materials and production methods.'
        },
        {
          icon: 'fas fa-award',
          title: 'Trend Verified',
          description: 'All designs verified by our K-fashion trend experts.'
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
      let filtered = this.products;
      
      // Filter by category
      if (this.selectedCategory !== 'all') {
        filtered = filtered.filter(product => product.category === this.selectedCategory);
      }
      
      // Filter by price
      if (this.selectedPrice !== 'all') {
        switch (this.selectedPrice) {
          case '0-50':
            filtered = filtered.filter(product => product.price <= 50);
            break;
          case '50-100':
            filtered = filtered.filter(product => product.price > 50 && product.price <= 100);
            break;
          case '100+':
            filtered = filtered.filter(product => product.price > 100);
            break;
        }
      }
      
      // Sort products
      switch (this.sortBy) {
        case 'price-low':
          filtered = filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered = filtered.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          // In a real app, you would sort by date
          break;
      }
      
      return filtered;
    }
  },
  methods: {
    subscribeToPlan() {
      this.showSubscriptionModal = true;
    },
    closeSubscriptionModal() {
      this.showSubscriptionModal = false;
      this.isProcessingSubscription = false;
      // Reset form
      this.subscriptionInfo = {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardName: ''
      };
    },
    formatCardNumberSub() {
      // Remove all non-digit characters
      let value = this.subscriptionInfo.cardNumber.replace(/\D/g, '');
      
      // Add space every 4 digits
      if (value.length > 4) {
        value = value.match(/.{1,4}/g).join(' ');
      }
      
      this.subscriptionInfo.cardNumber = value;
    },
    formatExpiryDateSub() {
      // Remove all non-digit characters
      let value = this.subscriptionInfo.expiryDate.replace(/\D/g, '');
      
      // Add slash after 2 digits
      if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
      }
      
      this.subscriptionInfo.expiryDate = value;
    },
    processSubscription() {
      // Basic validation
      if (!this.subscriptionInfo.cardNumber || !this.subscriptionInfo.expiryDate || 
          !this.subscriptionInfo.cvv || !this.subscriptionInfo.cardName) {
        alert('Please fill in all fields');
        return;
      }
      
      // Validate card number (simple validation)
      const cardNumber = this.subscriptionInfo.cardNumber.replace(/\s/g, '');
      if (cardNumber.length < 16) {
        alert('Please enter a valid card number');
        return;
      }
      
      // Validate expiry date
      const [month, year] = this.subscriptionInfo.expiryDate.split('/');
      if (!month || !year || month > 12) {
        alert('Please enter a valid expiry date');
        return;
      }
      
      // Validate CVV
      if (this.subscriptionInfo.cvv.length < 3) {
        alert('Please enter a valid CVV');
        return;
      }
      
      // Process subscription
      this.isProcessingSubscription = true;
      
      // Simulate subscription processing
      setTimeout(() => {
        this.isProcessingSubscription = false;
        alert('Subscription successful! You now have premium access to early product notifications and exclusive features.');
        this.closeSubscriptionModal();
      }, 2000);
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/products-hero.jpg');
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
}

.hero-section h1 {
  font-size: 3rem;
  color: white;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.filters-section {
  padding: 2rem 0;
  background-color: var(--gray-100);
}

.filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-group label {
  font-weight: 600;
}

.filter-group select {
  padding: 0.5rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--gray-300);
  background-color: white;
}

.products-section {
  padding: 3rem 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.sustainability-section {
  padding: 5rem 0;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
}

.sustainability-section h2,
.sustainability-section p {
  color: white;
  text-align: center;
}

.content {
  max-width: 800px;
  margin: 0 auto;
}

.certifications {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.certification {
  text-align: center;
}

.cert-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
}

.certification h3 {
  color: white;
  margin-bottom: 0.5rem;
}

/* Subscription Section */
.subscription-section {
  padding: 5rem 0;
  background-color: var(--gray-50);
  text-align: center;
}

.subscription-content {
  max-width: 800px;
  margin: 0 auto;
}

.subscription-content h2 {
  margin-bottom: 1rem;
}

.subscription-content p {
  margin-bottom: 2rem;
  color: var(--gray-700);
}

.subscription-plan {
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius);
  padding: 2rem;
  background: white;
  box-shadow: var(--box-shadow);
  max-width: 500px;
  margin: 0 auto;
}

.plan-header {
  margin-bottom: 1.5rem;
}

.plan-header h3 {
  margin: 0 0 0.5rem 0;
  color: var(--dark-color);
  font-size: 1.5rem;
}

.plan-price {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.plan-price span {
  font-size: 1rem;
  color: var(--gray-600);
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  text-align: left;
}

.plan-features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--gray-200);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.plan-features li:last-child {
  border-bottom: none;
}

.plan-features li i {
  color: var(--primary-color);
}

/* Modal Styles */
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

.subscription-modal h2 {
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

.subscription-summary {
  border-bottom: 1px solid var(--gray-300);
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
}

.subscription-details h3 {
  margin-bottom: 0.5rem;
  color: var(--dark-color);
  font-size: 1.25rem;
}

.subscription-details .price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
}

.subscription-details .price span {
  font-size: 1rem;
  color: var(--gray-600);
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
@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .certifications {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 992px) {
  .filters {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .hero-section h1 {
    font-size: 2.5rem;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }
  
  .sustainability-section {
    padding: 4rem 0;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 50vh;
  }
  
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .filters-section {
    padding: 1.5rem 0;
  }
  
  .products-section {
    padding: 2rem 0;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .certifications {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .sustainability-section {
    padding: 3rem 0;
  }
  
  .certification {
    padding: 1rem;
  }
  
  .subscription-section {
    padding: 3rem 0;
  }
  
  .subscription-plan {
    padding: 1.5rem;
  }
  
  .plan-price {
    font-size: 2rem;
  }
  
  .modal {
    padding: 15px;
  }
  
  .modal-content {
    padding: 1.5rem;
  }
  
  .subscription-modal h2 {
    font-size: 1.5rem;
  }
  
  .payment-form .half-width {
    min-width: 100%;
  }
  
  .input-with-icon input {
    padding: 12px 15px 12px 40px;
  }
  
  .subscription-details .price {
    font-size: 1.25rem;
  }
  
  .total-amount {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .hero-section {
    height: 40vh;
  }
  
  .hero-section h1 {
    font-size: 1.8rem;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .filter-group {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .filter-group select {
    width: 100%;
  }
  
  .subscription-content {
    padding: 0 1rem;
  }
  
  .subscription-plan {
    padding: 1rem;
  }
}

/* Extra small devices (phones, less than 480px) */
@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 1.5rem;
  }
  
  .products-section {
    padding: 1.5rem 0;
  }
  
  .cert-icon {
    font-size: 2rem;
  }
  
  .modal {
    padding: 10px;
  }
  
  .modal-content {
    padding: 1.25rem;
  }
  
  .subscription-modal h2 {
    font-size: 1.3rem;
  }
  
  .close {
    right: 1rem;
    top: 0.75rem;
    font-size: 1.5rem;
  }
  
  .subscription-details h3 {
    font-size: 1.1rem;
  }
  
  .plan-price {
    font-size: 1.5rem;
  }
}
</style>
```
