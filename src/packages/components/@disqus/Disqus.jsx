import { DiscussionEmbed } from "disqus-react";
import { useEffect, useState } from "react";

const Disqus = () => {
  const [href, setHref] = useState("");

  useEffect(() => {
    setHref(window.location.href);
  }, []);

  return (
    <div className="mt-4 mx-[3rem]">
      {href ? (
        <DiscussionEmbed
          shortname="darwinva"
          config={{
            url: href,
            identifier: "1",
            title: "Aimet Clients",
          }}
        />
      ) : null}
    </div>
  );
};

export default Disqus;
