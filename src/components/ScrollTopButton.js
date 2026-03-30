import React, { useEffect, useState } from "react";

export const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const nextVisible = document.documentElement.scrollTop > 300;
      setVisible((prevVisible) =>
        prevVisible === nextVisible ? prevVisible : nextVisible
      );
    };

    window.addEventListener("scroll", toggleVisible, { passive: true });
    toggleVisible();

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
      {visible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="icon-position icon-style"
          aria-label="Scroll back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            fill="currentColor"
            className="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};
