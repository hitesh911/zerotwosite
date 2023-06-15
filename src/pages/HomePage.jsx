import React from "react";
import SectionWithImage from "../components/SectionWithImage";
import content from "../assets/content/home.json"

 /*---------------------data generator functions for resuable componenets-------------------- 
 Note: all generator functions starts with get */


function getSectionWithImageFirst(){
  const firstSection = content.homePage.SectionWithImageFirst
  // modifications in content 
  const heading = (
    <>
      {firstSection.headingInBlack}
      <span className="text-primary"> {firstSection.headingInBlue} </span>
    </>
  );
  const paragraph = (
    <>
     {firstSection.paragraph.beforeBreakPoint}
     <br/> <br/>
     {firstSection.paragraph.afterBreakPoint}
    </>
  );
  const buttons = [
    { text: firstSection.button1.text, href: firstSection.button1.redirection },
    { text: firstSection.button2.text, href: firstSection.button2.redirection },
  ];
  const data = {
    "imageSrc":firstSection.imageSrc,
    "imageAlt":firstSection.imageAlt,
    "heading":heading,
    "paragraph": paragraph,
    "buttons":buttons,
    "imageOnLeft":firstSection.imageOnLeft


  }
  return data
}
// -----------------------specific componenets to homepage ----------------
// function Services(){
//   return (
//     <h1>Here are your services </h1>
//   )
// }
// ---------------------main home componenet ------------------------
function HomePage() {
  // generating data for reusable components 
  const FirstSecImgData =  getSectionWithImageFirst()
  return (
    <div className="home-div">
      <section className="pt-5 pb-5">
      <SectionWithImage
        imageSrc={FirstSecImgData.imageSrc}
        imageAlt={FirstSecImgData.imageAlt}
        heading={FirstSecImgData.heading}
        paragraph={FirstSecImgData.paragraph}
        buttons={FirstSecImgData.buttons}
        imageOnLeft={FirstSecImgData.imageOnLeft}
      />
      {/* <Services /> */}
      </section>
    </div>
    
  );
}

export default HomePage;
