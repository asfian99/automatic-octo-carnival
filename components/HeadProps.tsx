import React from "react";

function HeadProps() {
  return (
    <>
      <meta
        name="description"
        content="Create and browse snippets that people use every day!"
      />
      <meta property="og:title" content="snippet.bin" />
      <meta
        property="og:description"
        content="Create and browse snippets that people use every day."
      />
      <meta property="og:url" content="https://snippetbin.vercel.app" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="fb:app_id" content="snippetbin" />
      <meta name="twitter:site" content="@snippet-bin"></meta>
      <meta name="robots" content="index, follow" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </>
  );
}

export default HeadProps;
