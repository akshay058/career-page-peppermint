import React from "react";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="d-flex justify-content-center align-items-center mt-4">
        Welcome to Our Homepage
      </h1>
      <div className="embed-responsive embed-responsive-16by9 mt-5 d-flex justify-content-center align-items-center">
        <iframe
          className="embed-responsive-item w-50"
          src="https://www.youtube.com/embed/fJzUZ7eA97U"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </Layout>
  );
}
