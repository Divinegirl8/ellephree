import ContactFooter from "./components/ContactFooter";
import CoreValues from "./components/CoreValues";
import Culture from "./components/Culture";

import MissionVision from "./components/MissionVision";
import Nav from "./components/Nav";
import Story from "./components/Story";

import WhatWeDo from "./components/WhatWeDo";


export default function App() {
  return (
    <div className="bg-cream font-body text-ink">
      <Nav />
      <div id="top" />
    
      <Story />
      {/* <Hero /> */}
   
      <MissionVision />
      <CoreValues />
      <WhatWeDo />
      <Culture />
      <ContactFooter />
    </div>
  );
}
