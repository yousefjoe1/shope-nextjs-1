'use client'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function AosAnimations() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return <div></div>;
}
export default AosAnimations;
