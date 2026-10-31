
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaShoppingBag,
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaPlus,
  FaMinus,
  FaHeart,
  FaQuoteLeft,
  FaCouch,
  FaChair,
  FaBed,
  FaTable,
} from "react-icons/fa";

// HERO AND SECTION IMAGES
import heroImage from "./assets/hero-furniture.jpg";
import aboutImage from "./assets/about-furniture.jpg";
import contactImage from "./assets/contact-room.jpg";
import offerImage from "./assets/offer-furniture.jpg";
import collectionImage from "./assets/collection-room.jpg";

// CATEGORY IMAGES
import sofaImage from "./assets/sofa.jpg";
import diningImage from "./assets/dining-room.jpg";
import bedroomImage from "./assets/bedroom.jpg";
import officeImage from "./assets/office-desk.jpg";
import storageImage from "./assets/wardrobe.jpg";
import decorImage from "./assets/home-decor.jpg";

// PRODUCT IMAGES
import bookshelfImage from "./assets/bookshelf.jpg";
import tvUnitImage from "./assets/tv-unit.jpg";
import accentChairImage from "./assets/accent-chair.jpg";
import coffeeTableImage from "./assets/coffee-table.jpg";
import bedImage from "./assets/bed.jpg";
import sideTableImage from "./assets/side-table.jpg";
import loungeChairImage from "./assets/lounge-chair.jpg";
import diningChairImage from "./assets/dining-chair.jpg";
import consoleImage from "./assets/console-table.jpg";
import cabinetImage from "./assets/cabinet.jpg";
import studyTableImage from "./assets/study-table.jpg";
import wardrobeImage from "./assets/wardrobe.jpg";

// NEW ARRIVAL IMAGES
import newSofaImage from "./assets/new-sofa.jpg";
import newBedImage from "./assets/new-bed.jpg";
import newTableImage from "./assets/new-table.jpg";
import newChairImage from "./assets/new-chair.jpg";

// REVIEW IMAGES
import reviewOneImage from "./assets/customer-1.jpg";
import reviewTwoImage from "./assets/customer-2.jpg";
import reviewThreeImage from "./assets/customer-3.jpg";

const categories = [
  { id: 1, name: "Living Room", image: sofaImage, icon: <FaCouch /> },
  { id: 2, name: "Dining Room", image: diningImage, icon: <FaTable /> },
  { id: 3, name: "Bedroom", image: bedroomImage, icon: <FaBed /> },
  { id: 4, name: "Office", image: officeImage, icon: <FaChair /> },
  { id: 5, name: "Storage", image: storageImage, icon: <FaCouch /> },
  { id: 6, name: "Home Decor", image: decorImage, icon: <FaChair /> },
];

const products = [
  {
    id: 1,
    name: "Modern Luxury Sofa",
    category: "Living Room",
    price: 24999,
    oldPrice: 29999,
    rating: 4.9,
    image: sofaImage,
    tag: "BEST SELLER",
  },
  {
    id: 2,
    name: "Classic Dining Table",
    category: "Dining Room",
    price: 18999,
    oldPrice: 22999,
    rating: 4.8,
    image: diningImage,
    tag: "POPULAR",
  },
  {
    id: 3,
    name: "Premium Wooden Wardrobe",
    category: "Storage",
    price: 32999,
    oldPrice: 36999,
    rating: 4.9,
    image: wardrobeImage,
    tag: "NEW",
  },
  {
    id: 4,
    name: "Minimal Bookshelf",
    category: "Storage",
    price: 8999,
    oldPrice: 10999,
    rating: 4.7,
    image: bookshelfImage,
    tag: "TRENDING",
  },
  {
    id: 5,
    name: "Elegant TV Unit",
    category: "Living Room",
    price: 12999,
    oldPrice: 15999,
    rating: 4.8,
    image: tvUnitImage,
    tag: "POPULAR",
  },
  {
    id: 6,
    name: "Modern Office Desk",
    category: "Office",
    price: 10999,
    oldPrice: 13999,
    rating: 4.7,
    image: studyTableImage,
    tag: "NEW",
  },
  {
    id: 7,
    name: "Designer Accent Chair",
    category: "Living Room",
    price: 7999,
    oldPrice: 9999,
    rating: 4.6,
    image: accentChairImage,
    tag: "SPECIAL",
  },
  {
    id: 8,
    name: "Premium Coffee Table",
    category: "Living Room",
    price: 6999,
    oldPrice: 8999,
    rating: 4.8,
    image: coffeeTableImage,
    tag: "BEST SELLER",
  },
  {
    id: 9,
    name: "Luxury King Size Bed",
    category: "Bedroom",
    price: 28999,
    oldPrice: 33999,
    rating: 4.9,
    image: bedImage,
    tag: "NEW",
  },
  {
    id: 10,
    name: "Modern Side Table",
    category: "Living Room",
    price: 4999,
    oldPrice: 5999,
    rating: 4.6,
    image: sideTableImage,
    tag: "POPULAR",
  },
  {
    id: 11,
    name: "Comfort Lounge Chair",
    category: "Living Room",
    price: 11999,
    oldPrice: 14999,
    rating: 4.8,
    image: loungeChairImage,
    tag: "TRENDING",
  },
  {
    id: 12,
    name: "Wooden Dining Chair",
    category: "Dining Room",
    price: 3999,
    oldPrice: 4999,
    rating: 4.7,
    image: diningChairImage,
    tag: "SPECIAL",
  },
  {
    id: 13,
    name: "Modern Console Table",
    category: "Storage",
    price: 8499,
    oldPrice: 9999,
    rating: 4.6,
    image: consoleImage,
    tag: "NEW",
  },
  {
    id: 14,
    name: "Classic Storage Cabinet",
    category: "Storage",
    price: 13999,
    oldPrice: 16999,
    rating: 4.8,
    image: cabinetImage,
    tag: "POPULAR",
  },
];

const newArrivals = [
  {
    id: 1,
    name: "Cloud Comfort Sofa",
    price: 27999,
    image: newSofaImage,
  },
  {
    id: 2,
    name: "Nordic Wooden Bed",
    price: 31999,
    image: newBedImage,
  },
  {
    id: 3,
    name: "Minimal Work Table",
    price: 11999,
    image: newTableImage,
  },
  {
    id: 4,
    name: "Modern Accent Chair",
    price: 8999,
    image: newChairImage,
  },
];

const reviews = [
  {
    id: 1,
    name: "Uday",
    location: "Chennai",
    image: reviewOneImage,
    rating: 5,
    review:
      "Beautiful furniture with excellent finishing. The sofa looks amazing in our living room.",
  },
  {
    id: 2,
    name: "Hari",
    location: "Bengaluru",
    image: reviewTwoImage,
    rating: 5,
    review:
      "Great quality and comfortable design. The delivery experience was also smooth.",
  },
  {
    id: 3,
    name: "Sri",
    location: "Coimbatore",
    image: reviewThreeImage,
    rating: 5,
    review:
      "Loved the modern designs and premium quality. Definitely a wonderful shopping experience.",
  },
];

const faqs = [
  {
    question: "What types of furniture do you offer?",
    answer:
      "We offer furniture for living rooms, bedrooms, dining rooms, home offices and storage spaces, along with selected home decor products.",
  },
  {
    question: "Do you provide home delivery?",
    answer:
      "Yes. We provide home delivery for eligible orders. Delivery availability and charges may depend on your location and order value.",
  },
  {
    question: "Can I customize furniture?",
    answer:
      "Customization options may be available for selected furniture models. Contact our team to discuss your preferred size, material and finish.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once an order is confirmed, you can contact our customer support team with your order details to get an update.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Return eligibility depends on the product condition and purchase terms. Please contact our support team before requesting a return.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us using the contact form, phone number or email address listed on this website.",
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeFaq, setActiveFaq] = useState(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  const handleContactChange = (event) => {
    const { name, value } = event.target;

    setContactForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setContactSubmitted(true);

    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const closeMenu = () => setMenuOpen(false);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader-content">
          <div className="loader-icon">
            <FaCouch />
          </div>
          <h1>WOODORA</h1>
          <p>FURNITURE FOR BETTER LIVING</p>
          <div className="loader-line">
            <span></span>
          </div>
          <small>CREATING YOUR COMFORT...</small>
        </div>
      </div>
    );
  }

  return (
    <div className="furniture-website">

      {/* NAVBAR */}
      <header className="site-header">
        <nav className="navbar container">
          <a href="#home" className="brand-logo" onClick={closeMenu}>
            WOOD<span>ORA</span>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#categories" onClick={closeMenu}>Categories</a>
            <a href="#products" onClick={closeMenu}>Shop</a>
            <a href="#arrivals" onClick={closeMenu}>New Arrivals</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <div className="nav-actions">
            <a href="#products" className="cart-button">
              <FaShoppingBag />
              <span>Cart ({cartCount})</span>
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero-section" id="home">
        <div className="hero-background">
          <img src={heroImage} alt="Modern furniture interior" />
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content">
          <div className="hero-text" data-aos="fade-up">
            <span className="hero-subtitle">
              COMFORT MEETS ELEGANCE
            </span>

            <h1>
              Make Your Home
              <br />
              <span>Beautifully Yours.</span>
            </h1>

            <p>
              Discover thoughtfully designed furniture that brings
              comfort, style and personality into every corner of
              your home.
            </p>

            <div className="hero-buttons">
              <a href="#products" className="button-primary">
                Explore Collection <FaArrowRight />
              </a>
              <a href="#about" className="button-outline">
                Discover More
              </a>
            </div>

            <div className="hero-rating">
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>
              <span>Trusted by happy furniture lovers</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-strip">
        <div className="container features-grid">
          <div className="feature-item" data-aos="fade-up">
            <FaTruck />
            <div>
              <h4>Free Delivery</h4>
              <p>On eligible orders</p>
            </div>
          </div>

          <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
            <FaShieldAlt />
            <div>
              <h4>Quality Assured</h4>
              <p>Premium materials</p>
            </div>
          </div>

          <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
            <FaHeadset />
            <div>
              <h4>Expert Support</h4>
              <p>Here when you need us</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-section section-padding" id="categories">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span>EXPLORE OUR COLLECTION</span>
            <h2>Shop by Category</h2>
            <p>
              Find the perfect pieces to make every room feel like home.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category, index) => (
              <a
                href="#products"
                className="category-card"
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                  <div className="category-overlay">
                    <span>Explore <FaArrowRight /></span>
                  </div>
                </div>
                <div className="category-title">
                  <span>{category.icon}</span>
                  <h3>{category.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section section-padding" id="products">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span>MADE FOR YOUR SPACE</span>
            <h2>Our Furniture Collection</h2>
            <p>
              Explore furniture designed for everyday comfort and style.
            </p>
          </div>

          <div className="product-filters" data-aos="fade-up">
            {[
              "All",
              "Living Room",
              "Dining Room",
              "Bedroom",
              "Office",
              "Storage",
            ].map((category) => (
              <button
                key={category}
                className={
                  selectedCategory === category ? "filter active" : "filter"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <article
                className="product-card"
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 80}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-tag">{product.tag}</span>
                  <button
                    className="wishlist-button"
                    aria-label={`Add ${product.name} to wishlist`}
                  >
                    <FaHeart />
                  </button>
                </div>

                <div className="product-info">
                  <span className="product-category">
                    {product.category}
                  </span>
                  <h3>{product.name}</h3>

                  <div className="product-rating">
                    <FaStar /> {product.rating}
                  </div>

                  <div className="product-price">
                    <strong>
                      ₹{product.price.toLocaleString("en-IN")}
                    </strong>
                    <del>
                      ₹{product.oldPrice.toLocaleString("en-IN")}
                    </del>
                  </div>

                  <button
                    className="add-cart-button"
                    onClick={() => setCartCount((count) => count + 1)}
                  >
                    <FaShoppingBag /> Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="empty-products">
              No products found in this category.
            </p>
          )}
        </div>
      </section>

      {/* OFFER BANNER */}
      <section className="offer-section">
        <div className="container offer-grid">
          <div className="offer-content" data-aos="fade-right">
            <span>LIMITED TIME OFFER</span>
            <h2>Bring Home a New Look</h2>
            <p>
              Refresh your favourite spaces with beautiful furniture
              and special collection offers.
            </p>
            <a href="#products" className="button-primary">
              Explore Offers <FaArrowRight />
            </a>
          </div>

          <div className="offer-image" data-aos="fade-left">
            <img src={offerImage} alt="Furniture collection offer" />
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="arrivals-section section-padding" id="arrivals">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span>FRESH FROM OUR COLLECTION</span>
            <h2>New Arrivals</h2>
            <p>
              Discover our latest furniture pieces for modern living.
            </p>
          </div>

          <div className="arrivals-grid">
            {newArrivals.map((item, index) => (
              <div
                className="arrival-card"
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="arrival-image">
                  <img src={item.image} alt={item.name} />
                  <span>NEW ARRIVAL</span>
                </div>
                <div className="arrival-info">
                  <h3>{item.name}</h3>
                  <strong>
                    ₹{item.price.toLocaleString("en-IN")}
                  </strong>
                  <button
                    onClick={() => setCartCount((count) => count + 1)}
                    className="arrival-add-button"
                  >
                    Add to Cart <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="collection-section">
        <div className="container collection-grid">
          <div className="collection-image" data-aos="fade-right">
            <img src={collectionImage} alt="Featured furniture collection" />
          </div>

          <div className="collection-content" data-aos="fade-left">
            <span>THE ART OF LIVING</span>
            <h2>Thoughtful Design. Timeless Comfort.</h2>
            <p>
              Create a home that reflects your personality with
              furniture that balances elegant design and everyday
              functionality.
            </p>
            <a href="#categories" className="button-primary">
              View Collections <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section section-padding" id="about">
        <div className="container about-grid">
          <div className="about-image" data-aos="fade-right">
            <img src={aboutImage} alt="Woodora furniture interior" />
            <div className="about-image-label">
              <strong>DESIGNED</strong>
              <span>For Everyday Living</span>
            </div>
          </div>

          <div className="about-content" data-aos="fade-left">
            <span className="section-label">OUR STORY</span>
            <h2>
              Furniture That Makes
              <span> Every Moment Special.</span>
            </h2>

            <p>
              At Woodora, we believe furniture is more than just
              something you place in a room. It is part of the
              memories, comfort and everyday moments that make
              a house feel like home.
            </p>

            <p>
              Our collection brings together thoughtful design,
              practical functionality and timeless style to help
              you create spaces you love.
            </p>

            <a href="#contact" className="button-primary">
              Get in Touch <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section section-padding">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span>THE WOODORA DIFFERENCE</span>
            <h2>Why Choose Us?</h2>
            <p>
              We focus on the details that make furniture worth bringing home.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card" data-aos="fade-up">
              <FaShieldAlt />
              <h3>Quality Materials</h3>
              <p>
                Carefully selected materials for dependable everyday use.
              </p>
            </div>

            <div className="why-card" data-aos="fade-up" data-aos-delay="100">
              <FaCouch />
              <h3>Thoughtful Design</h3>
              <p>
                Furniture designed to complement different lifestyles and spaces.
              </p>
            </div>

            <div className="why-card" data-aos="fade-up" data-aos-delay="200">
              <FaTruck />
              <h3>Careful Delivery</h3>
              <p>
                Attention to your order from selection to delivery.
              </p>
            </div>

            <div className="why-card" data-aos="fade-up" data-aos-delay="300">
              <FaHeadset />
              <h3>Friendly Support</h3>
              <p>
                Helpful assistance whenever you need product information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="reviews-section section-padding">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span>HAPPY HOMES, HAPPY CUSTOMERS</span>
            <h2>What Our Customers Say</h2>
            <p>
              A few words from people who have made our furniture part
              of their homes.
            </p>
          </div>

          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <article
                className="review-card"
                key={review.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                
                <div className="review-stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p>{review.review}</p>

                <div className="review-user">
                  <img src={review.image} alt={review.name} />
                  <div>
                    <h4>{review.name}</h4>
                    <span>{review.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="faq-section section-padding" id="faq">
        <div className="container faq-container">
          <div className="section-heading" data-aos="fade-up">
            <span>NEED SOME HELP?</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Find answers to common questions about our furniture
              and services.
            </p>
          </div>

          <div className="faq-list" data-aos="fade-up">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${activeFaq === index ? "active" : ""}`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? -1 : index)
                  }
                  aria-expanded={activeFaq === index}
                >
                  <span>{faq.question}</span>
                  {activeFaq === index ? <FaMinus /> : <FaPlus />}
                </button>

                {activeFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-page section-padding" id="contact">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span>WE WOULD LOVE TO HEAR FROM YOU</span>
            <h2>Let's Talk About Your Space</h2>
            <p>
              Have a question or need help choosing furniture?
              Send us a message.
            </p>
          </div>

          <div className="contact-hero-image" data-aos="zoom-in">
            <img src={contactImage} alt="Furniture showroom interior" />
          </div>

          <div className="contact-grid">
            <div className="contact-details" data-aos="fade-right">
              <h3>Get in Touch</h3>
              <p>
                Our team is ready to help you find the right furniture
                for your home.
              </p>

              <div className="contact-info-item">
                <span><FaMapMarkerAlt /></span>
                <div>
                  <h4>Our Location</h4>
                  <p>Puliyampatti, Krishnagiri, Tamil Nadu</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span><FaPhoneAlt /></span>
                <div>
                  <h4>Phone Number</h4>
                  <p>+91 93425 68375</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span><FaEnvelope /></span>
                <div>
                  <h4>Email Address</h4>
                  <p>uday@woodora.com</p>
                </div>
              </div>

              <div className="contact-socials">
                <a href="https://facebook.com" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://pinterest.com" aria-label="Pinterest">
                  <FaPinterestP />
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={handleContactSubmit}
              data-aos="fade-left"
            >
              <h3>Send Us a Message</h3>

              {contactSubmitted && (
                <div className="contact-success">
                  <FaCheckCircle />
                  Thank you! Your message has been received.
                </div>
              )}

              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={contactForm.subject}
                onChange={handleContactChange}
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={contactForm.message}
                onChange={handleContactChange}
                required
              />

              <button type="submit" className="button-primary">
                Send Message <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section">
        <div className="container newsletter-content" data-aos="fade-up">
          <span>STAY INSPIRED</span>
          <h2>Get the Latest from Woodora</h2>
          <p>
            Discover new collections, design ideas and furniture updates.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />
            <button type="submit">
              Subscribe <FaArrowRight />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a href="#home" className="brand-logo">
              WOOD<span>ORA</span>
            </a>
            <p>
              Thoughtfully designed furniture for beautiful,
              comfortable and meaningful living.
            </p>

            <div className="contact-socials">
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://pinterest.com" aria-label="Pinterest">
                <FaPinterestP />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#products">Shop</a>
            <a href="#arrivals">New Arrivals</a>
            <a href="#about">About Us</a>
          </div>

          <div className="footer-links">
            <h4>Customer Care</h4>
            <a href="#contact">Contact Us</a>
            <a href="#faq">FAQs</a>
            <a href="#contact">Shipping Information</a>
            <a href="#contact">Returns</a>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <p><FaMapMarkerAlt /> Puliyampatti, Krishnagiri, Tamil Nadu</p>
            <p><FaPhoneAlt /> +91 93425 68375</p>
            <p><FaEnvelope /> uday@woodora.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Woodora. All Rights Reserved.
          </p>
          <a href="#home">Back to Top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
