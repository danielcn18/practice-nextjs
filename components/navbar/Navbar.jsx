"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Blog App",
    url: "/blogapp",
  },
  {
    id: 3,
    title: "Lorem",
    url: "/",
  },
  {
    id: 4,
    title: "Lorem",
    url: "/",
  },
  {
    id: 5,
    title: "Lorem",
    url: "/",
  },
];

const Navbar = () => {
  
  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {/* Daniel Chiquete */}
        </Link>
        <div className={styles.links}>
        
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    
    
      {/* <div className={styles.container}>
        <Link href="/" className={styles.logo}>
      West-MEC Coding
        </Link>
        <div className={styles.links}>
        
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
        
        
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
