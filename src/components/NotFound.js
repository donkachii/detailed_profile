import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    });
  }, [navigate]);
  return (
    <div className="flex justify-center items-center">
      <h1>Not Found</h1>
    </div>
  );
};

export default NotFound;
