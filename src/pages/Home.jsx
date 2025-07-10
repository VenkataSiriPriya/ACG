// File: src/pages/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h2>Empowering Accessibility in Every Corner</h2>
          <p>Discover inclusive places, share your experiences, and be part of a movement that ensures no one is left behind. Whether you're planning a trip or helping a loved one, accessibility matters everywhere.</p>
          <a href="#features" className="explore-button">Explore Now</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h3>Key Features</h3>
        <div className="feature-list">
          <div className="feature-card card-blue">
            <div className="icon">📍</div>
            <h4>Accessible Restaurants</h4>
            <p>Explore eateries equipped with wheelchair ramps, braille menus, low-noise zones, and spacious seating. Filter by dietary needs or special assistance availability for a hassle-free experience.</p>
          </div>
          <div className="feature-card card-green">
            <div className="icon">🌳</div>
            <h4>Public Spaces</h4>
            <p>Locate parks, museums, metro stations, and government offices that meet accessibility standards like tactile paths, lifts, and auditory signals for the visually impaired.</p>
          </div>
          <div className="feature-card card-orange">
            <div className="icon">📅</div>
            <h4>Inclusive Events</h4>
            <p>Attend events and workshops designed with sign language interpreters, accessible venues, priority seating, and facilities for people with mobility or sensory challenges.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h3>How It Works</h3>
        <div className="steps">
          <div className="step">
            <h4>1. Browse</h4>
            <p>Use our filters to search places by accessibility features such as wheelchair access, quiet spaces, or hearing assistance. Find locations near you or plan ahead for your travels.</p>
          </div>
          <div className="step">
            <h4>2. Share</h4>
            <p>Submit new locations you’ve found or review places you’ve visited. Help others in your community discover safe, welcoming, and accessible environments through your feedback.</p>
          </div>
          <div className="step">
            <h4>3. Connect</h4>
            <p>Engage with a supportive community, participate in discussions, suggest improvements, and contribute to real change. Because accessibility is a shared responsibility.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h3>What Our Users Say</h3>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>“This platform helped me find accessible restaurants for my parents during our trip. It made our vacation stress-free and enjoyable.”</p>
            <span>- Aditi R., Bangalore</span>
          </div>
          <div className="testimonial">
            <p>“Finally a place where accessibility is prioritized. I’ve even submitted my favorite local café — and it now has more visitors who need those services.”</p>
            <span>- Mohan K., Chennai</span>
          </div>
          <div className="testimonial">
            <p>“I use a wheelchair, and this app has completely changed how I explore the city. I feel empowered to go out and enjoy life independently.”</p>
            <span>- Sarah T., Hyderabad</span>
          </div>
          <div className="testimonial">
            <p>“I use a wheelchair, and this app has completely changed how I explore the city. I feel empowered to go out and enjoy life independently.”</p>
            <span>- Sarah T., Hyderabad</span>
          </div>
        </div>
      </section>

      {/* Accessibility Tips Section */}
      <section className="tips">
        <h3>Accessibility Tips</h3>
        <div className="tips-list">
          <div className="tip">
            <h4>Use Contrast Wisely</h4>
            <p>Ensure text stands out clearly against the background. High-contrast color schemes improve readability for users with low vision or color blindness.</p>
          </div>
          <div className="tip">
            <h4>Alt Text on Images</h4>
            <p>Include meaningful alt descriptions for every image. Screen readers use this information to convey image content to users who cannot see them.</p>
          </div>
          <div className="tip">
            <h4>Keyboard Navigation</h4>
            <p>Make sure users can navigate your entire interface using only the keyboard. Avoid traps and ensure focus indicators are clearly visible.</p>
          </div>
          <div className="tip">
            <h4>Descriptive Links</h4>
            <p>Use text that clearly explains where a link goes (e.g., “View Accessibility Tips” instead of “Click here”). This is essential for assistive technology.</p>
          </div>
        </div>
      </section>

      {/* Explore Categories Section */}
      <section className="categories">
        <h3>Explore Categories</h3>
        <div className="category-list">
          <div className="category">Restaurants</div>
          <div className="category">Cafés</div>
          <div className="category">Hospitals</div>
          <div className="category">Libraries</div>
          <div className="category">Public Transport</div>
          <div className="category">Parks</div>
          <div className="category">Events & Exhibitions</div>
          <div className="category">Hotels & Stays</div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h3>Join the Accessibility Movement</h3>
        <p>Be the change. Whether you're a business, a caregiver, or someone who cares — your voice matters. Help us build a world where everyone belongs and thrives.</p>
        <a href="/register" className="cta-button">Get Started</a>
      </section>
    </div>
  );
};

export default Home;
