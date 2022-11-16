import Header from '../component/Header';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

type LayoutProps = {
  children: React.ReactNode;
};



export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}
