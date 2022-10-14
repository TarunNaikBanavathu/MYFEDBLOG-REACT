import React from "react";
import Sidebar from "./Sidebar";
import image1 from "./image1.png";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";


const Main = () => {
    return (

      
    <div>
      <div className="article">
      <table className="tab">
      <tr><h1 align="left"> CSS Box Model-Padding & Margin </h1></tr>
      <tr><h2 align="left" id="sample1">  CSS Box Model</h2>
      <p>In CSS, the term "box model" is used when talking about design and layout.

      The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:
      </p>
      <img src={image1} alt="image1" id="sample1" align="center"/></tr>
      <tr>
        <p align ="left"> Explanation of the different parts:<br/>

          Content - The content of the box, where text and images appear<br/>
          Padding - Clears an area around the content. The padding is transparent<br/>
          Border - A border that goes around the padding and content<br/>
          Margin - Clears an area outside the border. The margin is transparent<br/>
          The box model allows us to add a border around elements, and to define space between elements. 
        </p>
      </tr>
      <tr align ="left">
           <h3> Example</h3>
           Demonstration of the box model:
           <img src={image2} alt="image2" id="sample1" align="center"/>
      </tr>
      <tr align ="left">
        <h2 align ="left" id="sample2">CSS Padding:</h2>
        <p>The CSS padding properties are used to generate space around an element's content, inside of any defined borders.
         With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).</p>
      </tr>
      <tr align="left">
        <p>CSS has properties for specifying the padding for each side of an element:</p>
        <ul>
          <li>padding-top</li>
          <li>padding-bottom</li>
          <li>padding-right</li>
          <li>padding-left</li>
        </ul>
      </tr>
      <tr align ="left">
        <h3>Example:</h3>
        <p>Set different padding for all four sides of a div  element:  </p>
        <img src={image3} alt="image3" id="sample2" align="center"/>
      </tr>
      <tr align="left">
      <h2 align ="left" id="sample3">CSS Margin:</h2>
      <p>The CSS margin properties are used to create space around elements, outside of any defined borders.
         With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).
       </p>
       <h3>Margin - Individual Sides</h3>
       <p>CSS has properties for specifying the margin for each side of an element:</p>
       <ul>
        <li>margin-top</li>
        <li>margin-bottom</li>
        <li>margin-right</li>
        <li>margin-left</li>
       </ul>
       <p>All the margin properties can have the following values:</p>
       <ul>
        <li>auto - the browser calculates the margin</li>
        <li>length - specifies a margin in px, pt, cm, etc.</li>
        <li>% - specifies a margin in % of the width of the containing element</li>
       </ul>
      </tr>
      <tr align="left">
        <h3>Example</h3>
        <p>Set different margins for all four sides of a p element:</p>
        <img src={image4} alt="image4" id="sample3" align="center"/>

      </tr>
      <tr align="center">
        <p>
        Finally, note that for non-replaced inline elements, the amount of space taken up 
        (the contribution to the height of the line) is determined by the line-height property, 
        even though the borders and padding are still displayed around the content.
        </p>
      </tr>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </table>

    </div>
    <Sidebar />
    </div>
    )
};

export default Main;
