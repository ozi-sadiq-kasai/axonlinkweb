import styles from './Footer.module.css';

const groups = [
  {
    title: 'Product',
    links: ['Features', 'Security', 'Pricing']
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog']
  },
  {
    title: 'Support',
    links: ['Help center', 'Contact', 'Status']
  }
];

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      {groups.map((group) => (
        <div key={group.title}>
          <h4>{group.title}</h4>
          {group.links.map((l) => (
            <a key={l} href="#">
              {l}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
