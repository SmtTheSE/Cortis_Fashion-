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
}
</style>