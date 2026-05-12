"use client";

import { useState } from "react";

const locations = [
  {
    id: 1,
    label: "HQ",
    name: "Headquarters",
    address: "29, TBS West Pavilion, Lagos Island, Nigeria",
    phone: "+234 (909) 428 2668",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126849.48438713668!2d3.302096401808634!3d6.5158131341724665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s29%2C%20TBS%20West%20Pavilion%2C%20Lagos%20Island%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1778586776260!5m2!1sen!2sng",
  },
  {
    id: 2,
    label: "Studio",
    name: "Creative Studio",
    address: "29, TBS West Pavilion, Lagos Island, Nigeria",
    phone: "+234 (909) 428 2668",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126849.48438713668!2d3.302096401808634!3d6.5158131341724665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s29%2C%20TBS%20West%20Pavilion%2C%20Lagos%20Island%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1778586776260!5m2!1sen!2sng",
  },
];

export default function GoogleMapSection() {
  const [active, setActive] = useState(0);
  const loc = locations[active];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Google Font */}
      <style>{`

        .tab-btn {
          background: #fff;
          border: 1px solid #023e8a;
          color: #black;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 10px 22px;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: 2px;
        }
        .tab-btn:hover { border-color: #caf0f8; color: #023e8a; }
        .tab-btn.active {
          background: #023e8a;
          border-color: #023e8a;
          color: #fff;
        }

        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px 0;
          border-bottom: 1px solid #1f1f1f;
        }
        .info-row:last-of-type { border-bottom: none; }
        .info-icon {
          width: 32px; height: 32px;
          background: #023e8a;
          border: 1px solid #2a2a2a;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .info-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: black;
          margin-bottom: 4px;
        }
        .info-value {
          font-size: 14px;
          font-weight: 300;
          color: #555;
          line-height: 1.5;
        }

        .map-iframe {
          width: 100%; height: 100%;
          border: none;
          filter: grayscale(100%) contrast(1.1) brightness(0.8);
          transition: filter 0.4s ease;
        }
        .map-wrapper:hover .map-iframe {
          filter: grayscale(60%) contrast(1.0) brightness(0.9);
        }

        .directions-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1px solid #023e8a;
          color: #023e8a;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 12px 24px;
          cursor: pointer;
          border-radius: 2px;
          text-decoration: none;
          transition: all 0.2s ease;
          margin-top: 28px;
        }
        .directions-btn:hover {
          background: #caf0f8;
          color: #0d0d0d;
        }
        .directions-btn svg { transition: transform 0.2s ease; }
        .directions-btn:hover svg { transform: translateX(3px); }
      `}</style>

      {/* Header */}
      <div
        style={{
          padding: "64px 60px 48px",
          borderBottom: "1px solid #1f1f1f",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "black",
              marginBottom: 14,
            }}
          >
            Our Locations
          </p>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "black",
              fontStyle: "italic",
            }}
          >
            Find Us
          </h2>
        </div>

        {/* Location Tabs */}
        <div style={{ display: "flex", gap: 8 }}>
          {locations.map((l, i) => (
            <button
              key={l.id}
              className={`tab-btn ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "340px 1fr",
          flex: 1,
          minHeight: 480,
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            padding: "48px 40px",
            borderRight: "1px solid #1f1f1f",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 22,
              fontWeight: 400,
              color: "black",
              marginBottom: 32,
              lineHeight: 1.3,
            }}
          >
            {loc.name}
          </h3>

          {/* Address */}
          <div className="info-row">
            <div className="info-icon">
              <svg
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <div>
              <p className="info-label">Address</p>
              <p className="info-value">{loc.address}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="info-row">
            <div className="info-icon">
              <svg
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <div>
              <p className="info-label">Phone</p>
              <p className="info-value">{loc.phone}</p>
            </div>
          </div>

          {/* Directions CTA */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="directions-btn"
          >
            Get Directions
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        {/* Map */}
        <div
          className="map-wrapper"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <iframe
            key={loc.id}
            className="map-iframe"
            src={loc.mapSrc}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${loc.name}`}
          />

          {/* Corner Tag */}
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "rgba(13,13,13,0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid #023e8a",
              borderRadius: 2,
              padding: "8px 14px",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            {loc.label}
          </div>
        </div>
      </div>
    </section>
  );
}
