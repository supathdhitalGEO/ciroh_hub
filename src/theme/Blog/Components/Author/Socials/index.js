import React from 'react';
import Socials from '@theme-original/Blog/Components/Author/Socials';
import styles from './styles.module.css';

// Substitution to allow for a second line of blog attribution.
// To reintroduce a third line for socials, add the following:
// <Socials {...props} />

// This function is borrowed from the parent class
function AuthorTitle({title}) {
  return (
    <small className={styles.authorTitle} title={title}>
      {title}
    </small>
  );
}

export default function SocialsWrapper(props) {
  const {author} = props;
  const {title2} = author;
  return (
    <>
      {!!title2 && <AuthorTitle title={title2} />}
    </>
  );
}
