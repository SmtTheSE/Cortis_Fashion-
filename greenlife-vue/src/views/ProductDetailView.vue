<template>
  <div class="product-detail">
    <div class="container">
      <div class="back-button">
        <router-link to="/products" class="btn btn-outline">
          <i class="fas fa-arrow-left"></i> Back to Products
        </router-link>
      </div>
      
      <div class="product-content">
        <div class="product-images">
          <div class="product-image-main">
            <img :src="product.image" :alt="product.name">
          </div>
          <div class="member-image" v-if="product.memberImage">
            <h3>Worn by {{ product.member }}</h3>
            <img :src="product.memberImage" :alt="`${product.member} wearing ${product.name}`">
          </div>
        </div>
        
        <div class="product-info">
          <h1>{{ product.name }}</h1>
          <p class="brand" v-if="getBrand(product.name)">{{ getBrand(product.name) }}</p>
          <p class="price">${{ product.price.toFixed(2) }}</p>
          <p class="description">{{ product.description }}</p>
          <p class="sustainability">{{ product.sustainability }}</p>
          
          <div class="product-actions">
            <div class="quantity-selector">
              <label for="quantity">Quantity:</label>
              <select id="quantity" v-model="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            
            <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
          </div>
          
          <div class="product-details">
            <h3>Product Details</h3>
            <ul>
              <li v-for="(detail, index) in product.details" :key="index">
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailView',
  data() {
    return {
      quantity: 1,
      productId: this.$route.params.id,
      products: [
        {
          id: '1',
          name: 'Vivienne Westwood Saturn T-Shirt',
          price: 129.99,
          category: 'mens',
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          imageWebP: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80&fm=webp',
          member: 'Martin',
          memberImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          memberImageWebP: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80&fm=webp',
          description: 'Authentic Vivienne Westwood t-shirt with signature Saturn logo, worn by Martin in Vogue Korea photoshoot.',
          sustainability: 'Made with sustainable cotton blend and eco-friendly dyes.',
          details: [
            '100% organic cotton',
            'Signature Saturn logo print',
            'Regular fit',
            'Machine washable',
            'Made in EU'
          ]
        },
        {
          id: '2',
          name: 'KARMUEL YOUNG Distressed Jeans',
          price: 189.99,
          category: 'mens',
          image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          member: 'James & Keonho',
          memberImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          description: 'Hong Kong designer brand jeans worn by James and Keonho in the "GO!" music video.',
          sustainability: 'Crafted with sustainable denim techniques that reduce water consumption.',
          details: [
            'Premium denim fabric',
            'Distressed detailing',
            'Button closure',
            'Five-pocket design',
            'Made in China'
          ]
        },
        {
          id: '3',
          name: 'Raf Simons Tank Top',
          price: 249.99,
          category: 'mens',
          image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          member: 'Martin',
          memberImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          description: 'Minimalist tank top by Raf Simons, a favorite of Martin for casual looks.',
          sustainability: 'Made from organic cotton with low-impact dyeing process.',
          details: [
            '100% organic cotton',
            'Minimalist design',
            'Ribbed neck and armholes',
            'Regular fit',
            'Made in Portugal'
          ]
        },
        {
          id: '4',
          name: 'Rick Owens Leather Pants',
          price: 899.99,
          category: 'mens',
          image: 'https://images.unsplash.com/photo-1589471900399-ef63d9eb0b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          member: 'James',
          memberImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          description: 'Sleek leather pants worn by James for edgy street style looks.',
          sustainability: 'Constructed with vegan leather alternatives and durable construction.',
          details: [
            'Vegan leather material',
            'Slim fit',
            'Elastic waistband',
            'Side pockets',
            'Made in Italy'
          ]
        },
        {
          id: '5',
          name: 'Oversized Hoodie with Contrast Stitching',
          price: 99.99,
          category: 'mens',
          image: 'https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          member: 'Juhoon',
          memberImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          description: 'Comfortable oversized hoodie inspired by Juhoon\'s casual style.',
          sustainability: 'Made from sustainable cotton blend with reduced environmental impact.',
          details: [
            'Cotton blend fabric',
            'Oversized fit',
            'Contrast stitching details',
            'Kangaroo pocket',
            'Machine washable'
          ]
        },
        {
          id: '6',
          name: 'KARMUEL YOUNG Decorative Belt',
          price: 159.99,
          category: 'accessories',
          image: 'https://images.unsplash.com/photo-1622565202452-8cbdda90f3d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          member: 'Multiple Members',
          memberImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          description: 'Statement belt with unique hardware, part of the KARMUEL YOUNG collection worn by multiple members.',
          sustainability: 'Designed with sustainable materials and timeless style for longevity.',
          details: [
            'Genuine leather',
            'Decorative buckle',
            'Adjustable sizing',
            'Made in Hong Kong',
            'One size fits most'
          ]
        }
      ]
    }
  },
  computed: {
    product() {
      return this.products.find(p => p.id === this.productId) || this.products[0];
    }
  },
  methods: {
    addToCart() {
      // In a real app, you would add the product to cart
      console.log('Added to cart:', this.product, 'Quantity:', this.quantity);
      alert(`${this.quantity} x ${this.product.name} added to cart!`);
    },
    getBrand(name) {
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
.product-detail {
  padding: 2rem 0;
}

.back-button {
  margin-bottom: 2rem;
}

.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.product-images {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.product-image-main {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
}

.product-image-main img {
  width: 100%;
  display: block;
}

.member-image {
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
}

.member-image h3 {
  padding: 1rem;
  background: var(--gray-100);
  margin: 0;
}

.member-image img {
  width: 100%;
  display: block;
  height: 300px;
  object-fit: cover;
}

.product-info h1 {
  margin-bottom: 0.25rem;
}

.brand {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.price {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.description {
  color: var(--gray-700);
  margin-bottom: 1rem;
}

.sustainability {
  font-style: italic;
  color: var(--primary-dark);
  margin-bottom: 2rem;
}

.product-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-selector select {
  padding: 0.5rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--gray-300);
}

.product-details {
  background: var(--gray-100);
  padding: 1.5rem;
  border-radius: var(--border-radius);
}

.product-details h3 {
  margin-bottom: 1rem;
}

.product-details ul {
  list-style: none;
}

.product-details ul li {
  padding: 0.25rem 0;
  border-bottom: 1px solid var(--gray-300);
}

.product-details ul li:last-child {
  border-bottom: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .product-content {
    grid-template-columns: 1fr;
  }
  
  .product-actions {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>