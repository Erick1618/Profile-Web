// src/components/AnalyticsTracker.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

export default function AnalyticsTracker() {
  const location = useLocation();

  
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
    console.log("🔍 Page view:", location.pathname);
  }, [location]);
  

  return null; // No renderiza nada visible
}