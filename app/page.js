import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <>
      <div className="section">
        <div className="name-area">
          <div className="name-content">
            <div className="line">
                <p className="word intro active">Hi, my name is</p>
            </div>
            <div className="line">
                <p className="word fancy" id="channel-link1">Daniel</p>
                <p className="word fancy" id="channel-link2">Chiquete</p>
            </div>
            <div className="line">
                <p className="word intro active sub-intro">I am a front-end</p>
            </div>
            <div className="line">
                <p className="word intro active sub-intro">web developer</p>
            </div>
          </div>
        </div>
      </div> 
      <div className="auto-section">
        <div className="des-contain">
          <div id="w-section">
            <p>Born and raised in Arizona, I have been exposed to various arts and technologies throughout my life. These experiences led to my interest in learning how to code various projects and in multiple languages. I currently work with front-end web developing, however, my main interest lies within back-end web development and software/game development.</p>
          </div>
        </div>
      </div>
    </>
  //   <div classNameName={styles.container}>
  //   <div classNameName={styles.item}>
  //     <h1 classNameName={styles.title}>
  //       Better design for your digital products.
  //     </h1>
  //     <p classNameName={styles.desc}>
  //       Turning your Idea into Reality. We bring together the teams from the
  //       global tech industry.
  //     </p>
  //     {/* <Button url="/portfolio" text="See Our Works"/> */}
  //   </div>
  //   <div classNameName={styles.item}>
  //     <Image src={Hero} alt="" classNameName={styles.img} />
  //   </div>
  // </div>
  )
}





