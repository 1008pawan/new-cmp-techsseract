"use client";

import React, { useEffect, useState } from "react";

const SmartHomeLink = () => {
  const [href, setHref] = useState("/");

  useEffect(() => {
    if (window.location.pathname === "/") {
      setHref("#heroSection");
    }
  }, []);

  return (
    <a href={href} className="hover:text-blue-500">
      Home
    </a>
  );
};

export default SmartHomeLink;
