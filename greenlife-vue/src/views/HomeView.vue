<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Cortis-Inspired Fashion for the Modern Generation</h1>
          <p class="hero-subtitle">Discover cutting-edge streetwear and high-fashion pieces that embody the bold spirit of K-pop's hottest sensation.</p>
          <div class="cta-buttons">
            <button class="btn btn-primary" @click="goToProducts">Shop Now</button>
            <button class="btn btn-outline" @click="scrollToMission">Learn More</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Transactional Components -->
    <section class="transactional-components" id="products">
      <div class="container">
        <div class="section-header">
          <h2>Seamless Shopping Experience</h2>
          <p>Everything you need for immediate action</p>
        </div>
        <div class="features-grid">
          <FeatureCard 
            v-for="(feature, index) in transactionalFeatures" 
            :key="index"
            :feature="feature"
            :index="index"
          />
        </div>
      </div>
    </section>

    <!-- Transformational Components -->
    <section class="transformational-components">
      <div class="container">
        <div class="section-header">
          <h2>Transform Your Style</h2>
          <p>Building habits for conscious fashion choices</p>
        </div>
        <div class="transformation-grid">
          <TransformationCard 
            v-for="(item, index) in transformationalItems" 
            :key="index"
            :item="item"
            :index="index"
          />
        </div>
      </div>
    </section>

    <!-- Transcendent Components -->
    <section class="transcendent-components" id="mission">
      <div class="container">
        <div class="vision-content">
          <h2>Our Vision: Fashion Beyond Boundaries</h2>
          <p>At Fashion!, we believe in breaking the mold and expressing yourself freely through fashion. Just like Cortis, we're about coloring outside the lines and redefining what modern fashion means.</p>
          <div class="stats">
            <div class="stat-item" v-for="(stat, index) in stats" :key="index">
              <h3>{{ stat.value }}</h3>
              <p>{{ stat.label }}</p>
            </div>
          </div>
          <button class="btn btn-primary">Join Our Fashion Revolution</button>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>What Our Fashion Community Says</h2>
          <p>Real stories from style enthusiasts</p>
        </div>
        <div class="testimonial-grid">
          <TestimonialCard 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            :testimonial="testimonial"
            :index="index"
          />
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="newsletter">
      <div class="container">
        <div class="newsletter-content">
          <h2>Join Our Fashion Movement</h2>
          <p>Subscribe to receive updates on new Cortis-inspired collections, style tips, and exclusive offers.</p>
          <form class="newsletter-form" @submit.prevent="handleNewsletter">
            <input type="email" placeholder="Enter your email" v-model="newsletterEmail" required>
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FeatureCard from '../components/FeatureCard.vue'
import TransformationCard from '../components/TransformationCard.vue'
import TestimonialCard from '../components/TestimonialCard.vue'
import { gsap } from 'gsap'
import heroImage from '../assets/gp.png'

export default {
  name: 'HomeView',
  components: {
    FeatureCard,
    TransformationCard,
    TestimonialCard
  },
  data() {
    return {
      heroImage
    }
  },
  data() {
    return {
      newsletterEmail: '',
      transactionalFeatures: [
        {
          icon: 'fas fa-user-plus',
          title: 'Easy Registration',
          description: 'Create an account in seconds to track orders and save favorites'
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Secure Checkout',
          description: 'Industry-leading security protocols protect your information'
        },
        {
          icon: 'fas fa-sync',
          title: 'Fast Integration',
          description: 'Seamlessly connect with your favorite social platforms'
        }
      ],
      transformationalItems: [
        {
          imageClass: 'blog-image',
          title: 'Style Blog',
          description: 'Learn about the latest trends inspired by Cortis and K-fashion'
        },
        {
          imageClass: 'dashboard-image',
          title: 'Style Dashboard',
          description: 'Track your personal fashion journey and style evolution'
        },
        {
          imageClass: 'community-image',
          title: 'Fashion Community',
          description: 'Connect with like-minded fashion enthusiasts'
        }
      ],
      stats: [
        { value: '10K+', label: 'Fashion Lovers' },
        { value: '50+', label: 'Cortis-Inspired Collections' },
        { value: '100%', label: 'Authentic Style' }
      ],
      testimonials: [
        {
          rating: 5,
          text: "Fashion! completely transformed my wardrobe. Their Cortis-inspired pieces are unmatched in quality and style.",
          customer: {
            name: 'Sarah Johnson',
            title: 'Style Influencer'
          }
        },
        {
          rating: 4.5,
          text: "As a huge Cortis fan, I love how Fashion! captures their edgy aesthetic in wearable fashion pieces.",
          customer: {
            name: 'Michael Chen',
            title: 'K-Pop Enthusiast'
          }
        }
      ]
    }
  },
  mounted() {
    // Animate elements on scroll
    this.animateOnScroll();
    window.addEventListener('scroll', this.animateOnScroll);
  },
  methods: {
    goToProducts() {
      this.$router.push('/products');
    },
    scrollToMission() {
      const element = document.getElementById('mission');
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    },
    handleNewsletter() {
      // In a real app, you would submit the email to your backend
      console.log('Newsletter signup:', this.newsletterEmail);
      alert(`Thank you for subscribing with ${this.newsletterEmail}!`);
      this.newsletterEmail = '';
    },
    animateOnScroll() {
      // Animate elements when they come into view
      const elements = document.querySelectorAll('.feature-card, .transformation-card, .testimonial-card');
      
      elements.forEach((element, index) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1
          });
        }
      });
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
  margin-top: 0;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/gp.png');
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.cta-buttons .btn {
  margin: 0 0.5rem;
}

/* Transactional Components */
.transactional-components {
  background-color: var(--gray-100);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Transformational Components */
.transformation-grid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

/* Transcendent Components */
.transcendent-components {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-align: center;
}

.vision-content h2, .vision-content p {
  color: white;
}

.stats {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 3rem 0;
}

.stat-item {
  margin: 0 2rem;
}

.stat-item h3 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: white;
}

.stat-item p {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

/* Testimonials */
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Newsletter */
.newsletter {
  background-color: var(--gray-100);
}

.newsletter-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-form {
  display: flex;
  margin-top: 2rem;
}

.newsletter-form input {
  flex: 1;
  padding: 12px 15px;
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  font-size: 1rem;
}

.newsletter-form .btn {
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .transformation-grid {
    flex-direction: column;
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .stats {
    flex-direction: column;
  }
  
  .stat-item {
    margin: 1rem 0;
  }
  
  .features-grid,
  .testimonial-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    height: 80vh;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .cta-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .cta-buttons .btn {
    margin: 0.5rem 0;
    width: 80%;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-form input {
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
  }
  
  .newsletter-form .btn {
    border-radius: var(--border-radius);
  }
  
  section {
    padding: 3rem 0;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .section-header p {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .hero {
    height: 70vh;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .stat-item h3 {
    font-size: 2rem;
  }
  
  .features-grid,
  .testimonial-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .newsletter-content {
    padding: 0 1rem;
  }
}

/* Extra small devices (phones, less than 480px) */
@media (max-width: 480px) {
  .hero {
    height: 60vh;
  }
  
  .hero-title {
    font-size: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: 0.9rem;
  }
  
  .stat-item h3 {
    font-size: 1.8rem;
  }
  
  .cta-buttons .btn {
    width: 100%;
  }
  
  section {
    padding: 2rem 0;
  }
}
</style>