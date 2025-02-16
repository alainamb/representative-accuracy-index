import Link from '@docusaurus/Link';
import styles from '../../css/modules/footer.module.css';

export default function CustomFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <nav className={styles.footerNav}>
          <Link to="https://github.com/alainamb/representative-accuracy-index">
            GitHub
          </Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </nav>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Alaina Brandt. Representative Accuracy Index. Built with Docusaurus.
        </p>
      </div>
    </footer>
  );
}