<template>
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <h3>Fashion!</h3>
          <p>Cortis-inspired fashion for the modern generation.</p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-tiktok"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-pinterest"></i></a>
          </div>
        </div>
        <div class="footer-column">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Sale</a></li>
            <li><a href="#">Collections</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Company</h4>
          <ul>
            <li><router-link to="/about">About Us</router-link></li>
            <li><a href="#">Cortis Collection</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Support</h4>
          <ul>
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Fashion!. All rights reserved. | Inspired by <i class="fas fa-heart"></i> Cortis</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
footer {
  background-color: var(--dark-color);
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-column h3, .footer-column h4 {
  color: white;
  margin-bottom: 1.5rem;
}

.footer-column ul {
  list-style: none;
}

.footer-column ul li {
  margin-bottom: 0.75rem;
}

.footer-column ul li a {
  color: var(--gray-400);
  transition: var(--transition);
}

.footer-column ul li a:hover,
.footer-column ul li a.router-link-exact-active {
  color: var(--primary-color);
}

.social-icons {
  display: flex;
  margin-top: 1rem;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  margin-right: 0.75rem;
  color: white;
  transition: var(--transition);
}

.social-icons a:hover {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  transform: translateY(-3px);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--gray-500);
}

.footer-bottom i {
  color: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
  }
  
  .social-icons a {
    width: 35px;
    height: 35px;
    margin-right: 0.5rem;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  footer {
    padding: 2rem 0 1rem;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .footer-column {
    text-align: center;
  }
  
  .social-icons {
    justify-content: center;
  }
  
  .footer-bottom {
    padding-top: 1rem;
    font-size: 0.9rem;
  }
}

/* Extra small devices (phones, less than 480px) */
@media (max-width: 480px) {
  .social-icons a {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
  
  .footer-column h3, .footer-column h4 {
    font-size: 1.2rem;
  }
}
</style>