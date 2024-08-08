import React, { useState } from 'react';
import styles from './PricingPage.module.css';
import Link from 'next/link';

const PricingPage = () => {
  const [readMore, setReadMore] = useState({});

  const pricingOptions = [
    {
      id: 'puppy-daycare',
      title: 'Puppy Daycare',
      price: [
        { label: 'Full Day', cost: '$50 ' },
        { label: '5 Full Days', cost: '$245' },
        { label: '10 Full Days', cost: '$480' },
        { label: 'Half Day', cost: '$30 ' },
        { label: 'Weekend Full Day', cost: '$55 ' },
        { label: 'Monthly Package', cost: '$1200' },
      ],
      description: 'Special care for puppies aged 2-6 months',
    },
    {
      id: 'doggy-daycare',
      title: 'Doggy Daycare',
      price: [
        { label: 'Full Day', cost: '$44' },
        { label: 'Half Day', cost: '$34' },
        { label: '5 Full Days', cost: '$210' },
        { label: '10 Full Days', cost: '$400' },
        { label: 'Weekend Full Day', cost: '$48' },
        { label: 'Monthly Package', cost: '$1000' },
      ],
      description: 'All-day fun for your dog',
    },
    {
      id: 'dog-training-packages',
      title: 'Dog Training Packages',
      subheadings: [
        {
          id: 'silver',
          title: 'Silver Package',
          info: 'Basic obedience and group classes.',
          details: 'Ideal for starting obedience training with group socialization sessions.',
          price: '$200 for 6 sessions',
        },
        {
          id: 'gold',
          title: 'Gold Package',
          info: 'Advanced behavioral training with customized plans.',
          details: 'Tailored training sessions focused on advanced commands and behavioral modification.',
          price: '$400 for 10 sessions',
        },
        {
          id: 'bronze',
          title: 'Bronze Package',
          info: 'Entry-level training program.',
          details: 'Basic training sessions tailored to your dog’s needs.',
          price: '$150 for 4 sessions',
        },
      ],
    },
    {
      id: 'grooming-spa',
      title: 'Grooming, Bath and Spa',
      price: [
        { label: 'Bath and Brushing', cost: 'From $40' },
        { label: 'Nail Trimming', cost: '$15' },
        { label: 'Ear Cleaning', cost: '$10' },
        { label: 'Teddy Bear Cut', cost: '$50' },
        { label: 'Kennel Clip', cost: '$40' },
        { label: 'De-shedding Treatment', cost: 'From $60' },
        { label: 'Full Grooming Package', cost: '$100' },
        { label: 'Deluxe Spa Treatment', cost: '$120' },
      ],
      description: 'Pamper your pet',
    },
    {
      id: 'add-ons',
      title: 'Add-Ons',
      price: [
        { label: 'Extra Playtime', cost: '$10' },
        { label: 'Special Treats', cost: '$5' },
        { label: 'Photo Updates', cost: '$15' },
        { label: 'Blueberry Facial', cost: '$20' },
        { label: 'Pawdicure', cost: '$10' },
        { label: 'Teeth Brushing', cost: '$15' },
        { label: 'Pet Massage', cost: '$30' },
        { label: 'Custom Collar', cost: '$25' },
      ],
      description: 'Additional services',
    },
  ];

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleReadMore = (id) => {
    setReadMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className={styles.pricingContainer}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Our Pricing Options</h1>
        <p className={styles.headerSubtitle}>Choose the best option for your furry friend</p>
      </div>

      <nav className={styles.nav}>
        {pricingOptions.map((option) => (
          <a
            key={option.id}
            onClick={() => handleClick(option.id)}
            className={styles.navLink}
          >
            {option.title}
          </a>
        ))}
      </nav>

      <div className={styles.rowContainer}>
        {pricingOptions.map((option) => (
          <div key={option.id} className={styles.section}>
            <h2 className={styles.sectionTitle}>{option.title}</h2>
            <div id={option.id} className={styles.row}>
              <div className={styles.pricingCard}>
                <div className={styles.cardContent}>
                  {Array.isArray(option.price) ? (
                    <div className={styles.daycareContainer}>
                      {option.price.map((priceOption, index) => (
                        <div key={index} className={styles.dayOption}>
                          <span>{priceOption.label}</span>
                          <span>{priceOption.cost}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={styles.price}>{option.price}</div>
                  )}
                  <p className={styles.description}>{option.description}</p>
                  {option.id === 'dog-training-packages' && (
                    <div className={styles.trainingPackages}>
                      <div className={styles.packageRow}>
                        {option.subheadings.map((subheading) => (
                          <div key={subheading.id} className={styles.packageBox}>
                            <h4>{subheading.title}</h4>
                            <p>{subheading.info}</p>
                            <div className={styles.packagePrice}>{subheading.price}</div>
                            <button
                              onClick={() => toggleReadMore(subheading.id)}
                              className={styles.readMoreBtn}
                            >
                              {readMore[subheading.id] ? 'Read Less' : 'Read More'}
                            </button>
                            {readMore[subheading.id] && (
                              <div className={styles.extendedInfo}>
                                <p>{subheading.details}</p>
                                <Link href="/bookuspage">
                                  <button className={styles.bookNowBtn}>Book Now</button>
                                </Link>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bookNow}>
        <Link href="/bookuspage">
          <button className={styles.bookNowBtn}>Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default PricingPage;
