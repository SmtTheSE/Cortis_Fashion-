<template>
  <div class="about">
    <section class="hero-section">
      <div class="container">
        <h1>About Fashion!</h1>
        <p>Bringing K-pop fashion to the world</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="content-grid">
          <div class="content-text">
            <h2>Our Story</h2>
            <p>Fashion! was founded in 2025 with a mission to bring the bold, boundary-breaking style of K-pop sensations like Cortis to fashion enthusiasts worldwide. We believe that fashion should be an expression of individuality and creativity, just like music.</p>
            <p>Our team of designers, stylists, and K-fashion experts work together to create collections that capture the essence of modern K-pop aesthetics while remaining wearable and accessible for everyday fashion lovers.</p>
          </div>
          <div class="content-image">
            <img src="../assets/about-image.jpg" alt="Fashion! Team">
          </div>
        </div>
      </div>
    </section>

    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Core Values</h2>
          <p>What drives us forward</p>
        </div>
        <div class="values-grid">
          <div class="value-card" v-for="(value, index) in values" :key="index">
            <i :class="['value-icon', value.icon]"></i>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <h2>Meet Our Team</h2>
          <p>The passionate people behind Fashion!</p>
        </div>
        <div class="team-grid">
          <div class="team-member" v-for="(member, index) in team" :key="index">
            <div class="member-image">
              <img :src="member.image" :alt="member.name">
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p class="role">{{ member.role }}</p>
              <p class="bio">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      values: [
        {
          icon: 'fas fa-infinity',
          title: 'Authenticity',
          description: 'We stay true to the bold and innovative spirit of K-pop culture in everything we create.'
        },
        {
          icon: 'fas fa-leaf',
          title: 'Sustainability',
          description: 'We believe in responsible fashion that respects both people and the planet.'
        },
        {
          icon: 'fas fa-users',
          title: 'Community',
          description: 'We foster connections between fashion lovers and K-pop fans around the world.'
        },
        {
          icon: 'fas fa-star',
          title: 'Excellence',
          description: 'We strive for perfection in design, quality, and customer experience.'
        }
      ],
      team: [
        {
          image: '../assets/team1.jpg',
          name: 'Sitt Min Thar',
          role: 'Founder & CEO',
          bio: 'Fashion visionary and K-pop enthusiast with a passion for bringing Cortis-inspired style to fashion lovers worldwide.'
        },
        {
          image: '../assets/team2.jpg',
          name: 'Honey Thet Htar Zin',
          role: 'Head of Design',
          bio: 'Creative designer specializing in translating K-pop aesthetics into wearable fashion pieces.'
        },
        {
          image: '../assets/team3.jpg',
          name: 'Phone Myat Min',
          role: 'Community Manager',
          bio: 'K-pop superfan dedicated to building our amazing community of fashion lovers.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/about-hero.jpg');
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

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.content-text h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.content-image img {
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-lg);
}

.values-section {
  background-color: var(--gray-100);
  padding: 5rem 0;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  text-align: center;
  transition: var(--transition);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow-lg);
}

.value-icon {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.team-section {
  padding: 5rem 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.team-member {
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow-lg);
}

.member-image {
  height: 250px;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-info {
  padding: 1.5rem;
}

.member-info h3 {
  margin-bottom: 0.5rem;
}

.role {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 1rem;
}

.bio {
  color: var(--gray-700);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .member-image {
    height: 220px;
  }
  
  .values-grid,
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
}

@media (max-width: 992px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .content-image {
    order: -1;
  }
  
  .member-image {
    height: 200px;
  }
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .content-section {
    padding: 3rem 0;
  }
  
  .values-section,
  .team-section {
    padding: 3rem 0;
  }
  
  .values-grid,
  .team-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .value-card,
  .team-member {
    padding: 1.5rem;
  }
  
  .content-text h2 {
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
  
  .member-image {
    height: 200px;
  }
  
  .value-icon {
    font-size: 2rem;
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
  
  .content-section,
  .values-section,
  .team-section {
    padding: 2rem 0;
  }
  
  .value-card,
  .team-member {
    padding: 1rem;
  }
  
  .member-image {
    height: 180px;
  }
}
</style>