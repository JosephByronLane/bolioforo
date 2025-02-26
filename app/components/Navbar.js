'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import forumData from '../../data/forumData';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav style={{ 
      backgroundColor: 'var(--element-color)', 
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <Link href="/" style={{ 
          fontWeight: 'bold', 
          fontSize: '1.2rem',
          marginRight: '2rem'
        }}>
          El BolioForo
        </Link>

      </div>
    </nav>
  );
}