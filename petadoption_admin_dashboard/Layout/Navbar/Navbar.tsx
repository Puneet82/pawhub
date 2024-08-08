// Import necessary dependencies
import Link from 'next/link';
import styles from './Navbar.module.css'; // Ensure Navbar.module.css is correctly defined
import Image from 'next/image';

// Define navigation links
const NavLinks = [
  { LinkText: 'Home', LinkTo: '/Home' },
  { LinkText: 'About us', LinkTo: '/About' },
  { LinkText: 'Contact us', LinkTo: '/Contact' },
  { LinkText: 'Blog', LinkTo: '/Blog' },
  { LinkText: 'FAQ', LinkTo: '/FAQ' },
  { LinkText: 'Pets', LinkTo: '/Pets' },
  { LinkText:  'AdoptionProcess', LinkTo:'/AdoptionProcess'}
];

// Define Navbar component
export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      {/* Logo */}
      <Link href="/">
        <div>
        <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />

        </div>
      </Link>

      {/* Navigation Links */}
      <div className={styles.NavLinks}>
        {NavLinks.map((data) => (
          <div key={data.LinkText}>
            <Link href={data.LinkTo}>
              {/* Remove <a> tag here */}
              {data.LinkText}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
