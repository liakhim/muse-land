import Link from 'next/link';
export default function Home() {
  return (
      <div>
        <p>test</p>
        <nav>
          <Link style={{textTransform: 'uppercase'}} href="/">Studio</Link>
          <Link style={{textTransform: 'uppercase', marginLeft: '10px'}} href="/">Community</Link>
        </nav>
      </div>
  );
}
