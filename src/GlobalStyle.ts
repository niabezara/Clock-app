import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
}
#root{
  height: 100%;
}
  body {
    background-image: ${(props: { isDaytime: boolean }) =>
      props.isDaytime
        ? `url(/mobile-daytime.jpg)`
        : `url(/mobile-nighttime.jpg)`};
        @media  (min-width:768px){

           background-image: ${(props: { isDaytime: boolean }) =>
             props.isDaytime
               ? `url(/tablet-daytime.jpg)`
               : `url(/tablet-nighttime.jpg)`};
        }
        @media (min-width:1024px) {
          background-image: ${(props: { isDaytime: boolean }) =>
            props.isDaytime
              ? `url(/dsk-daytime.jpg)`
              : `url(/dsk-nighttime.jpg)`};
          
        }
    background-repeat:no-repeat;
   background-size:cover;
    font-family: 'Inter', sans-serif;
        color: white;
    height: 100%;
    min-height: 100%;
    position: relative;
    overflow: hidden;
    background-position: center;
    background-attachment: fixed;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;

  }`;
