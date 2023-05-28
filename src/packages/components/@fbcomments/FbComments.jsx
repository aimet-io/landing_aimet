import { useEffect, useState } from "react";
import { Comments } from "react-facebook";
import { FacebookProvider } from "react-facebook";

const FbComments = ({ style = {}, ...props }) => {
  const [state, setState] = useState({
    url: "",
    width: 500,
  });
  useEffect(() => {
    const width = window.innerWidth < 700 ? 400 : 500;
    setState({
      url: window.location.href,
      width,
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          background: "white",
        }}
      >
        {state.url && (
          <FacebookProvider appId="746778063651294">
            <Comments href={state.url} width={state.width} />
          </FacebookProvider>
        )}
      </div>
    </div>
  );
};

export default FbComments;
