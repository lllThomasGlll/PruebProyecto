import React, { useEffect, useRef } from "react";

import "../../styles/AppletStyle.css";

const params = {
  id: "ggbApplet",
  appName: "graphing",
  width: 1000,
  height: 800,
  showToolBar: false,
  showAlgebraInput: false,
  showMenuBar: false,
  enableLabelDrags: false,
  showToolBarHelp: false,
};

const GeoGebraApplet = ({ onLoad }) => {
  const ggbApplet = useRef(null);
  const isInjected = useRef(false);

  useEffect(() => {
    if (!isInjected.current) {
      ggbApplet.current = new window.GGBApplet(params, true);
      ggbApplet.current.inject("ggb-element");
      isInjected.current = true;

      if (ggbApplet.current) {
        onLoad(ggbApplet.current);
      } else {
        console.error("GeoGebra applet not initialized");
      }
    }
  }, [onLoad]);

  return <div id="ggb-element" className="ggb-container"></div>;
};

export default GeoGebraApplet;
