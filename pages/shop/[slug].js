export default function ProductDetails({ product }) {
  return <div>{product}</div>;
}

export function getServerSideProps(ctx) {
  console.log('getServerSideProps', ctx.params.slug);

  return {
    props: {
      product: ctx.params.slug,
    },
  };
}

// export function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: 'first' } },
//       { params: { slug: 'second' } },
//       { params: { slug: 'third' } },
//     ],
//     fallback: true,
//   };
// }

// export async function getStaticProps(ctx) {
//   console.log('getStaticProps', ctx);

//   return {
//     props: {
//       product: ctx.params.slug,
//     },
//   };
// }
