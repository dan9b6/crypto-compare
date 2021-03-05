// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";
import Link from "next/link";
//
import { useState, useEffect } from "react";
import axios from "axios";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = (props) => {
  const [coin, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const {
    // POST PROPS
    amount,
    body = [],
    cryptoName,
    cryptoImage,
    currency,
    name = "Missing name",
    title = "Missing title",
  } = props;

  let bitcoin = coin[0];
  // console.log(bitcoin.id);

  return (
    <article>
      <Link href="/">Click</Link>
      <h1>{title}</h1>
      <span>By {name}</span>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: "max" }}
        {...client.config()}
      />
      <div>
        {cryptoImage && (
          <div>
            <img src={urlFor(cryptoImage).width(50).url()} />
          </div>
        )}
        <h1>{cryptoName}</h1>
        <h1>
          {currency}
          {amount}
        </h1>
        {/* <h1>{coin.symbol}</h1> */}
        {/* <h1>{coin.bitcoin.gbp}</h1> */}
      </div>
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  currency,
  amount,
  "cryptoName": crypto->name,
  "cryptoImage": crypto->image,
}`;

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;
