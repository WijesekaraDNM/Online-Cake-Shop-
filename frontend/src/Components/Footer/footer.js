import React from 'react';
import classes from './footer.module.css';

export default function Footer() {
  const [activeLink, setActiveLink] = React.useState(null);

  const handleLinkHover = (index) => {
    setActiveLink(index);
  };

  const handleLinkLeave = () => {
    setActiveLink(null);
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        {/* Main Footer Content */}
        <div className={classes.footerMain}>
          {/* Brand Column */}
          <div className={classes.brandColumn}>
            <div className={classes.brandLogo}>
              <img className={classes.logoImage} src={'/foods/CakeLogo.png'} alt="MD Cakes"/>
              <span className={classes.brandName}>
                <span className={classes.brandPrefix}>MD</span>Cakes
              </span>
            </div>
            <p className={classes.brandDescription}>
              Sri Lanka's number 1 quality cake designers with mesmerizing arts & mouth watering taste.
            </p>
            <div className={classes.socialIcons}>
              {['facebook', 'whatsapp', 'twitter', 'instagram'].map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className={`${classes.socialIcon} ${classes[social]}`}
                  onMouseEnter={() => handleLinkHover(`social-${index}`)}
                  onMouseLeave={handleLinkLeave}
                  aria-label={social}
                >
                  <img 
                    src={`/${social}.png`} 
                    alt={social} 
                    className={`${classes.iconImage} ${activeLink === `social-${index}` ? classes.active : ''}`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className={classes.contactColumn}>
            <h3 className={classes.columnTitle}>Contact Us</h3>
            <ul className={classes.contactList}>
              {[
                { icon: 'phone', text: '011-234-5667 / 076-8978908' },
                { icon: 'location', text: '230/9, MDCakes, Wattala Road, Colombo' },
                { icon: 'email', text: 'mdcakes@gmail.com' },
                { icon: 'fax', text: '2345671890' }
              ].map((item, index) => (
                <li 
                  key={index} 
                  className={classes.contactItem}
                  onMouseEnter={() => handleLinkHover(`contact-${index}`)}
                  onMouseLeave={handleLinkLeave}
                >
                  <div className={classes.contactIconWrapper}>
                    <img 
                      src={`/${item.icon}.png`} 
                      alt={item.icon} 
                      className={`${classes.contactIcon} ${activeLink === `contact-${index}` ? classes.active : ''}`}
                    />
                  </div>
                  <span className={classes.contactText}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Column */}
          <div className={classes.featuresColumn}>
            <h3 className={classes.columnTitle}>Why Choose Us</h3>
            <div className={classes.featuresGrid}>
              {[
                { icon: 'qualityverified', title: '100% Best Quality', description: 'We always try to keep the value of your money' },
                { icon: 'delivery', title: 'Fast Delivery', description: 'On-time delivery guaranteed' },
                { icon: 'ingredients', title: 'Premium Ingredients', description: 'Only the finest ingredients used' },
                { icon: 'custom', title: 'Custom Designs', description: 'Personalized cakes for every occasion' }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className={classes.featureCard}
                  onMouseEnter={() => handleLinkHover(`feature-${index}`)}
                  onMouseLeave={handleLinkLeave}
                >
                  <div className={classes.featureIconWrapper}>
                    <img 
                      src={`/${feature.icon}.png`} 
                      alt={feature.title} 
                      className={`${classes.featureIcon} ${activeLink === `feature-${index}` ? classes.active : ''}`}
                    />
                  </div>
                  <div className={classes.featureContent}>
                    <h4 className={classes.featureTitle}>{feature.title}</h4>
                    <p className={classes.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className={classes.linksColumn}>
            <div className={classes.linksGroup}>
              <h3 className={classes.columnTitle}>Useful Links</h3>
              <ul className={classes.linksList}>
                {['FAQ', 'Delivery', 'Contact', 'About Us'].map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className={`${classes.footerLink} ${activeLink === `useful-${index}` ? classes.active : ''}`}
                      onMouseEnter={() => handleLinkHover(`useful-${index}`)}
                      onMouseLeave={handleLinkLeave}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.linksGroup}>
              <h3 className={classes.columnTitle}>My Account</h3>
              <ul className={classes.linksList}>
                {['My Account', 'Order History', 'Discounts', 'Returns'].map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className={`${classes.footerLink} ${activeLink === `account-${index}` ? classes.active : ''}`}
                      onMouseEnter={() => handleLinkHover(`account-${index}`)}
                      onMouseLeave={handleLinkLeave}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className={classes.footerBottom}>
          <div className={classes.paymentMethods}>
            {['visa', 'PayPal', 'MasterCard', 'amex'].map((method, index) => (
              <img 
                key={index} 
                src={`/${method}.png`} 
                alt={method} 
                className={classes.paymentIcon}
              />
            ))}
          </div>
          <div className={classes.copyright}>
            &copy; {new Date().getFullYear()} MD Cakes. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}