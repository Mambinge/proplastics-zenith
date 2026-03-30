import { useState } from "react";

export const WHATSAPP_NUMBER = "263771234567"; // ← Replace with your actual WhatsApp number (no + or spaces)
export const WHATSAPP_MESSAGE = "Hello! I'd like to enquire about Proplastics products.";

export const getWhatsAppUrl = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || WHATSAPP_MESSAGE)}`;

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#25D366",
        borderRadius: hovered ? "50px" : "50%",
        padding: hovered ? "12px 20px 12px 16px" : "14px",
        boxShadow: hovered
          ? "0 8px 30px rgba(37,211,102,0.55)"
          : "0 4px 18px rgba(37,211,102,0.40)",
        textDecoration: "none",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: hovered ? "scale(1.06)" : "scale(1)",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="26"
        height="26"
        fill="white"
        style={{ flexShrink: 0 }}
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.437-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.773-1.853l-.485-.287-5.005 1.192 1.237-4.867-.317-.502A13.265 13.265 0 0 1 2.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.261-9.878c-.397-.199-2.352-1.161-2.717-1.293-.364-.133-.63-.199-.896.199-.265.398-1.028 1.293-1.26 1.559-.232.265-.464.298-.861.1-.397-.2-1.676-.618-3.192-1.972-1.18-1.053-1.977-2.353-2.21-2.75-.232-.398-.025-.613.175-.811.18-.178.397-.465.596-.697.199-.232.265-.398.397-.664.133-.265.066-.498-.033-.697-.1-.199-.896-2.16-1.228-2.957-.323-.777-.65-.672-.896-.684l-.763-.013c-.265 0-.696.1-1.061.498-.364.398-1.393 1.36-1.393 3.319 0 1.96 1.426 3.853 1.625 4.119.2.265 2.807 4.285 6.8 6.01.951.41 1.694.655 2.272.838.955.304 1.824.261 2.511.158.766-.114 2.352-.962 2.684-1.89.332-.928.332-1.724.232-1.89-.099-.166-.364-.265-.762-.464z" />
      </svg>

      {/* Label — only visible on hover */}
      <span
        style={{
          color: "white",
          fontWeight: 600,
          fontSize: "14px",
          maxWidth: hovered ? "160px" : "0px",
          opacity: hovered ? 1 : 0,
          transition: "max-width 0.3s ease, opacity 0.25s ease",
          overflow: "hidden",
          fontFamily: "inherit",
          letterSpacing: "0.01em",
        }}
      >
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
