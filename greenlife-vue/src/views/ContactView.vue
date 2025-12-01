<template>
  <div class="contact">
    <section class="hero-section">
      <div class="container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Get In Touch</h2>
            <p>Have questions about our Cortis-inspired collections or need help with your order? Our fashion experts are here to assist you.</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Visit Us</h3>
                  <p>123 Fashion Street<br>K-Pop District<br>Seoul, South Korea</p>
                </div>
              </div>
              
              <div class="contact-method">
                <i class="fas fa-phone"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+82 2 1234 5678</p>
                </div>
              </div>
              
              <div class="contact-method">
                <i class="fas fa-envelope"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>hello@fashion-example.com</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <h3>Follow Our K-Fashion Journey</h3>
              <div class="social-icons">
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <h2>Send a Message</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="form.name" required>
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required>
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" v-model="form.subject" required>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" rows="5" v-model="form.message" required></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to common questions</p>
        </div>
        
        <div class="faq-grid">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <h3>{{ faq.question }}</h3>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      faqs: [
        {
          question: 'How long does shipping take?',
          answer: 'Domestic orders typically arrive within 3-5 business days. International shipping takes 7-14 business days depending on your location.'
        },
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy on all unworn items with original tags attached. Items must be in resalable condition.'
        },
        {
          question: 'How should I care for my Fashion! garments?',
          answer: 'Always follow the care instructions on the garment label. Most of our pieces are machine washable in cold water and should be tumble dried on low heat.'
        },
        {
          question: 'Do you offer international shipping?',
          answer: 'Yes, we ship worldwide! International shipping costs are calculated at checkout based on your location and order weight.'
        },
        {
          question: 'Are your products authentic Cortis merchandise?',
          answer: 'While our designs are inspired by the K-pop group Cortis, we are an independent fashion brand. Our pieces are not official Cortis merchandise.'
        },
        {
          question: 'How can I stay updated on new collections?',
          answer: 'Subscribe to our newsletter at the bottom of any page, or follow us on social media for real-time updates on new drops and styling tips.'
        }
      ]
    }
  },
  methods: {
    submitForm() {
      // In a real app, you would submit the form to your backend
      console.log('Form submitted:', this.form);
      alert('Thank you for your message! We will get back to you soon.');
      this.form = { name: '', email: '', subject: '', message: '' };
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/contact-hero.jpg');
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

.content-section {
  padding: 5rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-info h2,
.contact-form h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-methods {
  margin: 2rem 0;
}

.contact-method {
  display: flex;
  margin-bottom: 1.5rem;
}

.contact-method i {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-right: 1rem;
  min-width: 30px;
}

.contact-method h3 {
  margin-bottom: 0.5rem;
}

.social-links {
  margin-top: 2rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
  transition: var(--transition);
}

.social-icon:hover {
  transform: translateY(-3px);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(255, 0, 110, 0.2);
}

.faq-section {
  background-color: var(--gray-100);
  padding: 5rem 0;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.faq-item h3 {
  margin-bottom: 1rem;
  color: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .faq-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-info {
    order: 2;
  }
  
  .contact-form {
    order: 1;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .content-section {
    padding: 3rem 0;
  }
  
  .faq-section {
    padding: 3rem 0;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .faq-item {
    padding: 1rem;
  }
  
  .contact-info h2,
  .contact-form h2 {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .hero-section {
    height: 50vh;
  }
  
  .hero-section h1 {
    font-size: 1.8rem;
  }
  
  .contact-method {
    flex-direction: column;
  }
  
  .contact-method i {
    margin-bottom: 0.5rem;
  }
  
  .social-icons {
    flex-wrap: wrap;
  }
  
  .content-section,
  .faq-section {
    padding: 2rem 0;
  }
}

/* Extra small devices (phones, less than 480px) */
@media (max-width: 480px) {
  .hero-section {
    height: 40vh;
  }
  
  .hero-section h1 {
    font-size: 1.5rem;
  }
  
  .faq-item {
    padding: 0.8rem;
  }
  
  .social-icon {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
}
</style>