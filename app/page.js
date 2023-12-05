import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  // const enhanced = id => {
  //   const element = document.getElementById(id), 
  //   text = element.innerText.split("");
  //   element.innerText = "";
  //   text.forEach(letter => {
  //     const span = document.createElement("span");
  //     span.className += "letter";
  //     if(id == "channel-link1"){
  //         span.className += " letter1";
  //     }
  //     if(id == "channel-link2"){
  //         span.className += " letter2";
  //     }
  //     span.innerText = letter;
  //     element.appendChild(span);
  //     /* console.log(letter); */
  //   });
  // }
  // enhanced("channel-link1");
  // enhanced("channel-link2");

  // var fancy = Array.from(document.getElementsByClassName("fancy"));
  // fancy.forEach(element => {
  //     element.addEventListener("mouseover", e => {
  //         var intro = Array.from(document.getElementsByClassName("intro"));
  //         intro.forEach(x =>{
  //             x.style.opacity = "0.15";
  //         });
  //     });
  //     element.addEventListener("mouseout", e => {
  //         var intro = Array.from(document.getElementsByClassName("intro"));
  //         intro.forEach(x =>{
  //             x.style.opacity = "1.0";
  //         });
  //     });
  // });

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





