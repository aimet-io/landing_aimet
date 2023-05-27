"use client";

import { Comments } from "react-facebook";
import { FacebookProvider } from "react-facebook";

const FbComments = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
        }}
      >
        <FacebookProvider appId="746778063651294">
          <Comments href={location.href} />
        </FacebookProvider>
      </div>
    </div>
  );
};

export default FbComments;