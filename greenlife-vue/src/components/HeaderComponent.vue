<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="../assets/download.png" alt="Logo" class="logo-image">
        <h2>Fashion!</h2>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <div class="auth-buttons">
        <button class="btn btn-outline" @click="openLoginModal">Log In</button>
        <button class="btn btn-primary" @click="openSignupModal">Sign Up</button>
      </div>
    </div>
    
    <!-- Login Modal -->
    <transition name="fade">
      <div class="modal" v-if="showLoginModal">
        <div class="modal-content">
          <span class="close" @click="closeModals">&times;</span>
          <h2>Login to Your Account</h2>
          <form @submit.prevent="handleLogin">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="loginForm.email" required>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="loginForm.password" required>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            <p class="form-footer">Don't have an account? <a href="#" @click.prevent="switchToSignup">Sign Up</a></p>
          </form>
        </div>
      </div>
    </transition>
    
    <!-- Signup Modal -->
    <transition name="fade">
      <div class="modal" v-if="showSignupModal">
        <div class="modal-content">
          <span class="close" @click="closeModals">&times;</span>
          <h2>Create Your Account</h2>
          <form @submit.prevent="handleSignup">
            <div class="form-group">
              <label for="fullname">Full Name</label>
              <input type="text" id="fullname" v-model="signupForm.name" required>
            </div>
            <div class="form-group">
              <label for="signup-email">Email</label>
              <input type="email" id="signup-email" v-model="signupForm.email" required>
            </div>
            <div class="form-group">
              <label for="signup-password">Password</label>
              <input type="password" id="signup-password" v-model="signupForm.password" required>
            </div>
            <div class="form-group">
              <label for="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" v-model="signupForm.confirmPassword" required>
            </div>
            <button type="submit" class="btn btn-primary">Create Account</button>
            <p class="form-footer">Already have an account? <a href="#" @click.prevent="switchToLogin">Log In</a></p>
          </form>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      showLoginModal: false,
      showSignupModal: false,
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    openLoginModal() {
      this.showLoginModal = true;
      this.showSignupModal = false;
    },
    openSignupModal() {
      this.showSignupModal = true;
      this.showLoginModal = false;
    },
    closeModals() {
      this.showLoginModal = false;
      this.showSignupModal = false;
    },
    switchToSignup() {
      this.showLoginModal = false;
      this.showSignupModal = true;
    },
    switchToLogin() {
      this.showSignupModal = false;
      this.showLoginModal = true;
    },
    handleLogin() {
      // In a real app, you would authenticate the user here
      console.log('Login attempt:', this.loginForm);
      this.closeModals();
      this.loginForm = { email: '', password: '' };
    },
    handleSignup() {
      // In a real app, you would create the user account here
      console.log('Signup attempt:', this.signupForm);
      this.closeModals();
      this.signupForm = { name: '', email: '', password: '', confirmPassword: '' };
    }
  }
}
</script>

<style scoped>
header {
  background-color: white;
  box-shadow: var(--box-shadow);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo h2 {
  color: var(--primary-color);
  font-size: 1.8rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.logo-image {
  height: 40px;
  width: auto;
  object-fit: contain;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  color: var(--dark-color);
  font-weight: 500;
  padding: 0.5rem;
  transition: var(--transition);
}

nav ul li a.router-link-exact-active,
nav ul li a:hover {
  color: var(--primary-color);
}

.auth-buttons .btn {
  margin-left: 0.5rem;
}

/* Modals */
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
}

.modal-content {
  background-color: white;
  margin: auto;
  padding: 2rem;
  border-radius: var(--border-radius);
  width: 90%;
  max-width: 500px;
  position: relative;
  animation: slideIn 0.3s ease;
}

.close {
  position: absolute;
  right: 1.5rem;
  top: 1rem;
  font-size: 2rem;
  cursor: pointer;
  color: var(--gray-500);
}

.close:hover {
  color: var(--dark-color);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
}

.form-group input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(255, 0, 110, 0.2);
}

.form-footer {
  text-align: center;
  margin-top: 1.5rem;
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 992px) {
  .logo h2 {
    font-size: 1.5rem;
  }
  
  .logo-image {
    height: 35px;
  }
  
  nav ul li {
    margin: 0 0.75rem;
  }
  
  .auth-buttons .btn {
    padding: 10px 16px;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  header .container {
    flex-wrap: wrap;
  }
  
  nav ul {
    display: none;
  }
  
  .auth-buttons {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
  
  .auth-buttons .btn {
    margin: 0 0.25rem;
    padding: 8px 12px;
    font-size: 0.8rem;
  }
  
  .logo {
    justify-content: center;
    width: 100%;
  }
}

@media (max-width: 576px) {
  header .container {
    padding: 0.75rem 0;
  }
  
  .logo h2 {
    font-size: 1.3rem;
  }
  
  .logo-image {
    height: 30px;
  }
  
  .auth-buttons .btn {
    padding: 6px 10px;
  }
  
  .modal-content {
    padding: 1.5rem 1rem;
  }
}

/* Extra small devices (phones, less than 480px) */
@media (max-width: 480px) {
  .logo h2 {
    font-size: 1.2rem;
  }
  
  .logo-image {
    height: 25px;
  }
  
  .auth-buttons .btn {
    padding: 5px 8px;
    font-size: 0.75rem;
  }
  
  .form-group input {
    padding: 10px 12px;
    font-size: 0.9rem;
  }
}
</style>