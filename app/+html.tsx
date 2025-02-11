import { ScrollViewStyleReset } from "expo-router/html";
import { type PropsWithChildren } from "react";

// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Pina Bakery</title>
        <meta
          name="description"
          content="Pina Bakery, setiap produk dibuat demi kepuasaan konsumen"
        />
        <meta
          name="keywords"
          content="bakery, toko roti dan kue, toko kue, toko roti, toko kue tasikmalaya, toko roti tasikmalaya, toko roti sindangjaya, toko kue sindangjaya"
        />
        <link rel="canonical" href="https://pinabakery.com" />
        <meta
          property="og:title"
          content="Pina Bakery - Enak tidak harus mahal"
        />
        <meta
          property="og:description"
          content="Toko Roti dan Kue Sindangjaya, Kota Tasikmalaya"
        />
        <meta property="og:url" content="https://pinabakery.com" />
        <meta property="og:type" content="website"></meta>
        {/*
          Disable body scrolling on web. This makes ScrollView components work closer to how they do on native.
          However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
        */}
        <ScrollViewStyleReset />

        {/* Add any additional <head> elements that you want globally available on web... */}
      </head>
      <body>{children}</body>
    </html>
  );
}
