import React from 'react';
import Layout from '@theme/Layout';


export default function MyReactPage() {
  return (
    <Layout>
      <h1>Get ready for the best party ever!</h1>
    <hr />
    <h2>
      Mark the date on your calender guys. The 31st of Feb. It's my Birthday!!
    </h2>
    <img
      src="https://raw.githubusercontent.com/appbrewery/webdev/main/birthday-cake3.4.jpeg"
      alt="birthday cake"
      height="400px"
      width="400px"
    />
    <h3>What to bring:</h3>
    <ul>
      <li>Balloons</li>
      <li>Streamers</li>
      <li>Andddd Lots of love and blessings.(Also gifts okay)</li>
    </ul>

    
    <h3>A Link to my adress:</h3>
    <a
      href="https://www.google.com/maps/@35.7040744,139.5577317,3a,75y,289.6h,87.01t,0.72r/data=!3m6!1e1!3m4!1sgT28ssf0BB2LxZ63JNcL1w!2e0!7i13312!8i6656"
      >Map link</a
    >
    </Layout>
  );
}