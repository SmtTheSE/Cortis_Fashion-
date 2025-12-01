<template>
  <div class="blog">
    <section class="hero-section">
      <div class="container">
        <h1>Fashion & K-Pop Blog</h1>
        <p>Insights, tips, and stories from the intersection of fashion and K-pop culture</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="blog-layout">
          <div class="main-content">
            <article class="blog-post featured" v-for="(post, index) in featuredPosts" :key="'featured-' + index">
              <div class="post-image">
                <img :src="post.image" :alt="post.title">
              </div>
              <div class="post-content">
                <div class="post-meta">
                  <span class="category">{{ post.category }}</span>
                  <span class="date">{{ post.date }}</span>
                </div>
                <h2>{{ post.title }}</h2>
                <p>{{ post.excerpt }}</p>
                <router-link :to="'/blog/' + post.id" class="btn btn-outline">Read More</router-link>
              </div>
            </article>

            <div class="posts-grid">
              <article class="blog-post" v-for="(post, index) in regularPosts" :key="'regular-' + index">
                <div class="post-image">
                  <img :src="post.image" :alt="post.title">
                </div>
                <div class="post-content">
                  <div class="post-meta">
                    <span class="category">{{ post.category }}</span>
                    <span class="date">{{ post.date }}</span>
                  </div>
                  <h3>{{ post.title }}</h3>
                  <p>{{ post.excerpt }}</p>
                  <router-link :to="'/blog/' + post.id" class="read-more">Read More</router-link>
                </div>
              </article>
            </div>
          </div>

          <aside class="sidebar">
            <div class="sidebar-widget">
              <h3>Categories</h3>
              <ul>
                <li v-for="(category, index) in categories" :key="index">
                  <a href="#">{{ category }}</a>
                </li>
              </ul>
            </div>

            <div class="sidebar-widget">
              <h3>Popular Posts</h3>
              <div class="popular-post" v-for="(post, index) in popularPosts" :key="index">
                <div class="popular-post-image">
                  <img :src="post.image" :alt="post.title">
                </div>
                <div class="popular-post-content">
                  <h4>{{ post.title }}</h4>
                  <p class="date">{{ post.date }}</p>
                </div>
              </div>
            </div>

            <div class="sidebar-widget newsletter-widget">
              <h3>Stay Informed</h3>
              <p>Subscribe to our newsletter for the latest fashion insights and Cortis updates.</p>
              <form @submit.prevent="subscribeNewsletter">
                <input type="email" placeholder="Your email" v-model="newsletterEmail" required>
                <button type="submit" class="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogView',
  data() {
    return {
      newsletterEmail: '',
      featuredPosts: [
        {
          id: 1,
          title: 'Decoding Cortis Fashion: The Ultimate Style Guide',
          excerpt: 'An in-depth look at the fashion choices of K-pop\'s hottest new group and how to incorporate their style into your wardrobe.',
          date: 'June 15, 2025',
          category: 'Style Guide',
          image: '../assets/blog1.jpg'
        }
      ],
      regularPosts: [
        {
          id: 2,
          title: '5 Easy Ways to Channel Your Inner Cortis',
          excerpt: 'Simple changes you can make today to update your wardrobe with K-fashion influences.',
          date: 'June 10, 2025',
          category: 'Lifestyle',
          image: '../assets/blog2.jpg'
        },
        {
          id: 3,
          title: 'Behind the Scenes: Our Design Process',
          excerpt: 'A transparent look at how we create Cortis-inspired pieces that are wearable for everyday fashion lovers.',
          date: 'June 5, 2025',
          category: 'Behind the Scenes',
          image: '../assets/blog3.jpg'
        },
        {
          id: 4,
          title: 'Fabric Matters: Choosing Quality Pieces',
          excerpt: 'Understanding the importance of fabric quality and what to look for when shopping for statement pieces.',
          date: 'May 28, 2025',
          category: 'Education',
          image: '../assets/blog4.jpg'
        },
        {
          id: 5,
          title: 'How to Build a K-Fashion Wardrobe',
          excerpt: 'Maximize your style while minimizing your shopping with these K-fashion wardrobe tips.',
          date: 'May 20, 2025',
          category: 'Style Tips',
          image: '../assets/blog5.jpg'
        },
        {
          id: 6,
          title: 'The Rise of K-Pop Fashion Influence',
          excerpt: 'Exploring how K-pop groups like Cortis are shaping global fashion trends.',
          date: 'May 12, 2025',
          category: 'Trends',
          image: '../assets/blog6.jpg'
        },
        {
          id: 7,
          title: 'Fashion! Community Spotlight: Lisa\'s Journey',
          excerpt: 'How one customer transformed her style by incorporating K-fashion elements into her wardrobe.',
          date: 'May 5, 2025',
          category: 'Community',
          image: '../assets/blog7.jpg'
        }
      ],
      popularPosts: [
        {
          id: 1,
          title: 'Decoding Cortis Fashion: The Ultimate Style Guide',
          date: 'June 15, 2025',
          image: '../assets/blog1.jpg'
        },
        {
          id: 4,
          title: 'Fabric Matters: Choosing Quality Pieces',
          date: 'May 28, 2025',
          image: '../assets/blog4.jpg'
        },
        {
          id: 2,
          title: '5 Easy Ways to Channel Your Inner Cortis',
          date: 'June 10, 2025',
          image: '../assets/blog2.jpg'
        }
      ],
      categories: [
        'Style Guide',
        'Lifestyle',
        'Behind the Scenes',
        'Education',
        'Style Tips',
        'Trends',
        'Community'
      ]
    }
  },
  methods: {
    subscribeNewsletter() {
      // In a real app, you would submit the email to your backend
      console.log('Newsletter signup:', this.newsletterEmail);
      alert(`Thank you for subscribing with ${this.newsletterEmail}!`);
      this.newsletterEmail = '';
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/blog-hero.jpg');
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
  padding: 3rem 0;
}

.blog-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.featured .post-image {
  height: 400px;
}

.post-image {
  height: 200px;
  overflow: hidden;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.blog-post:hover .post-image img {
  transform: scale(1.05);
}

.post-content {
  padding: 1.5rem;
  background: white;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  box-shadow: var(--box-shadow);
}

.post-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.category {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.date {
  color: var(--gray-600);
  font-size: 0.9rem;
}

.featured .post-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.post-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.read-more {
  color: var(--primary-color);
  font-weight: 600;
  display: inline-block;
  margin-top: 1rem;
}

.read-more:hover {
  color: var(--primary-dark);
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sidebar-widget {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.sidebar-widget h3 {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--gray-200);
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sidebar-widget ul {
  list-style: none;
}

.sidebar-widget ul li {
  margin-bottom: 0.75rem;
}

.sidebar-widget ul li a {
  color: var(--gray-700);
  transition: var(--transition);
}

.sidebar-widget ul li a:hover {
  color: var(--primary-color);
}

.popular-post {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.popular-post:last-child {
  margin-bottom: 0;
}

.popular-post-image {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: var(--border-radius);
  overflow: hidden;
}

.popular-post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.popular-post-content h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.popular-post-content .date {
  font-size: 0.8rem;
  margin: 0;
}

.newsletter-widget p {
  margin-bottom: 1rem;
}

.newsletter-widget form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.newsletter-widget input {
  padding: 0.75rem;
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius);
}

/* Responsive Design */
@media (max-width: 768px) {
  .blog-layout {
    grid-template-columns: 1fr;
  }
  
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style>