import { useState } from 'react';
import React from 'react';
import classes from './homePage.module.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const testimonials = [
    { id: 1, name: 'Sarah J.', comment: 'The most delicious cake I\'ve ever had!', rating: 5 },
    { id: 2, name: 'Michael T.', comment: 'Beautiful designs and amazing taste.', rating: 5 },
    { id: 3, name: 'Emma L.', comment: 'Perfect for our wedding! Everyone loved it.', rating: 4 },
  ];

  return (
    <div className={classes.homePage}>
      {/* Hero Section */}
      <section className={classes.hero}>
        <div className={classes.heroContent}>
          <h1 className={classes.heroTitle}>
            <span className={classes.highlight}>Marvelous & Delicious</span><br />
            Cakes for Every Occasion
          </h1>
          <p className={classes.heroSubtitle}>
            Handcrafted with love using the finest ingredients
          </p>
          <div className={classes.heroButtons}>
            <button className={classes.primaryButton}>Order Now</button>
            <button className={classes.secondaryButton}>View Designs</button>
          </div>
        </div>
        <div className={classes.heroImage}>
          <img src="/foods/Piece.png" alt="Featured Cake" />
        </div>
      </section>

      {/* About Section */}
      <section className={classes.aboutSection}>
        <div className={classes.aboutContent}>
          <h2 className={classes.sectionTitle}>Our Story</h2>
          <div className={classes.aboutText}>
            <p>
              At MD Cakes, it's our mission to bring you the largest selection of quality cakes on the market. 
              Along with a vast wealth of knowledge in the products we sell, MD Cakes carries everything 
              you could possibly imagine and more.
            </p>
            {showMore && (
              <>
                <p>
                  Founded in 1985, MD Cakes has been serving our proud customers for decades, 
                  becoming the most popular cake shop in Colombo. We are a proud member of the 
                  local merchant community, and love every opportunity to interact with our customers 
                  as we provide them with the freshest and most delicious ingredients.
                </p>
                <p>
                  We have a wide selection of quality products that we're sure you'll love. 
                  Stop by to have a taste of our award-winning creations!
                </p>
              </>
            )}
            <button 
              className={classes.readMoreButton} 
              onClick={toggleShowMore}
              aria-expanded={showMore}
            >
              {showMore ? 'Read Less' : 'Read More...'}
            </button>
          </div>
        </div>
        <div className={classes.aboutImage}>
          <img src="/foods/cakeShop.jpg" alt="Our Bakery" />
        </div>
      </section>

      {/* Special Offers */}
      <section className={classes.offersSection}>
        <h2 className={classes.sectionTitle}>Special Offers</h2>
        <div className={classes.offerCards}>
          <div className={classes.offerCard}>
            <div className={classes.offerBadge}>-20%</div>
            <img src="/foods/cake27.jpg" alt="Wedding Cake Special" />
            <div className={classes.offerContent}>
              <h3>Wedding Cake Package</h3>
              <p>Book your wedding cake 3 months in advance and get 20% off</p>
              <button className={classes.offerButton}>Claim Offer</button>
            </div>
          </div>
          <div className={classes.offerCard}>
            <div className={classes.offerBadge}>Free</div>
            <img src="/foods/cake-13.jpg" alt="Birthday Cake Special" />
            <div className={classes.offerContent}>
              <h3>Birthday Freebie</h3>
              <p>Get free cupcakes with any birthday cake order during your birthday month</p>
              <button className={classes.offerButton}>Claim Offer</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={classes.testimonialsSection}>
        <h2 className={classes.sectionTitle}>What Our Customers Say</h2>
        <div className={classes.testimonialsGrid}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={classes.testimonialCard}>
              <div className={classes.testimonialRating}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < testimonial.rating ? classes.starFilled : classes.starEmpty}>★</span>
                ))}
              </div>
              <p className={classes.testimonialText}>"{testimonial.comment}"</p>
              <p className={classes.testimonialAuthor}>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={classes.ctaSection}>
        <div className={classes.ctaContent}>
          <h2>Ready to Order Your Perfect Cake?</h2>
          <p>Contact us today to discuss your custom cake design or place an order from our collection</p>
          <div className={classes.ctaButtons}>
            <button onClick={()=>navigate('/ContactsPage')} className={classes.ctaPrimary}>Call Now</button>
            <button onClick={()=>navigate('/ContactsPage')} className={classes.ctaSecondary}>Email Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;