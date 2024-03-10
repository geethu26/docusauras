import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import movieRankImage from '../../static/img/movie_rank.png';
import birthdayInviteImage from '../../static/img/birthday_invite.png';

export default function MyReactPage() {
  return (
    <Layout>
       <h1>Gee's Portfolio</h1>
    <h2>Here are a few basic projects.</h2>
    <hr />
    
    <Link
            className="button button--secondary button--md"
            to="/movielist">
            <h3>Movie List Project</h3>
    </Link>  
      <img
        src={movieRankImage}
        alt="Movie rank"
        height="200"
        width="200"
        align="center"
      /> 
    <br />
    <Link
            className="button button--secondary button--md"
            to="/bdayinvite">
            <h3>Birthday Invite</h3>
    </Link>  
   
      <img
        src={birthdayInviteImage}
        alt="Birthday invite"
        height="200"
        width="200"
        align="center"
      />
    
    <hr />
    <Link
            className="button button--secondary button--md"
            to="/about">
            About me
    </Link>
    <Link
            className="button button--secondary button--md"
            to="/contact">
            Contact me
    </Link>
    </Layout>
  );
}