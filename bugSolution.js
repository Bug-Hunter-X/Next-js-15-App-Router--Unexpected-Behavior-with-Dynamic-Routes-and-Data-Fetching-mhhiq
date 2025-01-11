```javascript
// pages/products/[id].js

import { getStaticProps } from 'next/server';

export default function ProductPage({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

// This is incorrect, should use getServerSideProps or getStaticProps for data fetching in the app directory.
export async function getStaticProps(context) {
  const id = context.params.id; 
  const res = await fetch(`https://example.com/api/products/${id}`);
  const product = await res.json();
  return {
    props: { product },
  };
}
```