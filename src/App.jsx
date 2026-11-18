
import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [burstKey, setBurstKey] = useState(0);

  const audioRef = useRef(null);

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Countdown to 03 December 2026
    const targetDate = new Date(2026, 11, 3, 0, 0, 0).getTime();

    const updateCountdown = () => {
      const difference = Math.max(0, targetDate - Date.now());

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  // Open invitation
  const openInvitation = async () => {
    setIsOpened(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.6;

      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Music playback failed:", error);
      }
    }
  };

  // Music controls
  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Music playback failed:", error);
      }
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Flower blessing animation
  const sendBlessings = () => {
    setBurstKey(prev => prev + 1);
  };

  // WhatsApp sharing - Updated
  const shareInvitation = () => {

    const websiteUrl = window.location.origin;

    const message =
      "🙏 Om Namah Shivaya 🙏\n\n" +
      "You are cordially invited to the first hair-cutting ceremony of our little princess Dhathri Bugga. ❤️\n\n" +
      "📅 Date: 03 December 2026\n\n" +
      "📍 Venue: Sri Mahanandiswara Swamy Temple, Mahanandi.\n\n" +
      "Please join us and bless our little one. ❤️\n\n" +
      "View the complete invitation here:\n" +
      websiteUrl +
      "\n\n" +
      "🙏 We warmly welcome you and your family!";

    const whatsappURL =
      "https://wa.me/?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const flowers = Array.from({ length: 22 });

  return (
    <div className="app">

      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/Gaaju%20Bomma.mp3"
        loop
      />

      {!isOpened ? (

        /* 01 - GRAND WELCOME CARD */

        <section className="welcome-screen">

          <div className="welcome-card">

            <div className="temple-top">✧ 🪷 ✧</div>

            <p className="welcome-small">
              శ్రీ గణేశాయ నమః
            </p>

            <div className="shiva-symbol">
              🕉️
            </div>

            <div className="trishul">🔱</div>

            <h2>శ్రీ మహానందీశ్వర స్వామి</h2>

            <p className="blessing-text">
              వారి దివ్య ఆశీస్సులతో
            </p>

            <div className="ornament-line">
              ❀ ━━━━━ ✧ ━━━━━ ❀
            </div>

            <p className="welcome-label">
              మా ఇంటి చిన్నారి
            </p>

            <h1>ధాత్రి బుగ్గ</h1>

            <h2 className="ceremony-title">
              తొలి కేశఖండన వేడుక
            </h2>

            <div className="ornament-line">
              ✨ ❀ ✨ ❀ ✨
            </div>

            <p className="welcome-date">
              03 డిసెంబర్ 2026
            </p>

            <p className="welcome-venue">
              శ్రీ మహానందీశ్వర స్వామి దేవస్థానం
              <br />
              మహానంది
            </p>

            <button
              className="open-card-button"
              onClick={openInvitation}
            >
              ఆహ్వాన పత్రికను తెరవండి
              <span> ✨</span>
            </button>

            <p className="welcome-footer">
              మీ రాకే మాకు ఆనందం
            </p>

            <div className="temple-bottom">
              🪷 ❀ 🪷
            </div>

          </div>

        </section>

      ) : (

        /* MAIN WEBSITE */

        <div className="full-website">

          {/* Navigation */}

          <nav className="navbar">

            <a href="#home" className="nav-logo">
              🪷 ధాత్రి
            </a>

            <div className="nav-links">
              <a href="#baby">Our Princess</a>
              <a href="#invitation">Invitation</a>
              <a href="#details">Details</a>
              <a href="#gallery">Gallery</a>
              <a href="#location">Location</a>
            </div>

            <button
              className="music-button"
              onClick={toggleMusic}
            >
              {isPlaying ? "🔊" : "🎵"}
            </button>

          </nav>

          {/* 02 - HERO */}

          <section className="hero-section" id="home">

            <div className="hero-decoration">
              ❀ ✨ 🪷 ✨ ❀
            </div>

            <p className="hero-subtitle">
              శ్రీ మహానందీశ్వర స్వామి వారి ఆశీస్సులతో
            </p>

            <div className="hero-om">🕉️</div>

            <h1>ధాత్రి బుగ్గ</h1>

            <h2>తొలి కేశఖండన వేడుకకు ఆహ్వానం</h2>

            <div className="hero-line"></div>

            <p>
              మా చిన్నారి జీవితంలోని ఈ ప్రత్యేకమైన
              వేడుకలో మీ అందరి ఆశీస్సులు కోరుకుంటున్నాము.
            </p>

            <a href="#baby" className="discover-button">
              Discover Invitation ↓
            </a>

            <div className="hero-decoration">
              ❀ 🪷 ❀
            </div>

          </section>

          {/* 03 - OUR LITTLE PRINCESS */}

          <section className="section baby-section" id="baby">

            <div className="section-heading">
              <span>02</span>
              <h2>Our Little Princess</h2>
              <p>మా ఇంటి ముద్దుల చిన్నారి</p>
            </div>

            <div className="baby-card">

              <div className="baby-photo-wrap">

                <img
                  src="/D1.jpeg"
                  alt="Dhathri Baby"
                  className="baby-main-photo"
                />

                {burstKey > 0 && (
                  <div className="flower-container">
                    {flowers.map((_, index) => (
                      <span
                        key={`${burstKey}-${index}`}
                        className="falling-flower"
                        style={{
                          left: `${(index * 37 + 9) % 100}%`,
                          animationDelay: `${(index % 7) * 0.13}s`,
                          fontSize: `${20 + (index % 4) * 5}px`
                        }}
                      >
                        {["🌸", "🌼", "🌺", "🪷"][index % 4]}
                      </span>
                    ))}
                  </div>
                )}

              </div>

              <h1>ధాత్రి బుగ్గ</h1>

              <p className="baby-caption">
                మా జీవితాల్లో వెలుగులు నింపిన
                చిన్నారి యువరాణి ❤️
              </p>

              <button
                className="blessing-button"
                onClick={sendBlessings}
              >
                🌸 Send Blessings 🌸
              </button>

              <p className="blessing-note">
                Tap here to shower flowers and blessings
              </p>

            </div>

          </section>

          {/* 04 - INVITATION MESSAGE */}

          <section className="section invitation-section" id="invitation">

            <div className="section-heading">
              <span>03</span>
              <h2>Invitation Message</h2>
              <p>ఆహ్వానం</p>
            </div>

            <div className="message-card">

              <div className="message-decoration">🪷</div>

              <h2>ప్రియమైన బంధుమిత్రులకు</h2>

              <p>
                శ్రీ మహానందీశ్వర స్వామి వారి
                దివ్య ఆశీస్సులతో మా చిన్నారి
                ధాత్రి బుగ్గ తొలి కేశఖండన
                వేడుకను నిర్వహించనున్నాము.
              </p>

              <p>
                ఈ శుభ సందర్భానికి మీరందరూ
                విచ్చేసి మా చిన్నారిని
                ఆశీర్వదించి, వేడుకను మరింత
                ఆనందంగా జరిపించాలని
                మనస్ఫూర్తిగా ఆహ్వానిస్తున్నాము.
              </p>

              <div className="message-decoration">❀ ✨ ❀</div>

              <h3>ఇట్లు</h3>

              <p className="family-text">
                ప్రేమతో మీ కుటుంబ సభ్యులు
              </p>

            </div>

          </section>

          {/* 05 - CEREMONY DETAILS */}

          <section className="section details-section" id="details">

            <div className="section-heading">
              <span>04</span>
              <h2>Ceremony Details</h2>
              <p>వేడుక వివరాలు</p>
            </div>

            <div className="details-grid">

              <div className="detail-card">
                <div>📅</div>
                <h3>Date</h3>
                <p>03 డిసెంబర్ 2026</p>
              </div>

              <div className="detail-card">
                <div>🕰️</div>
                <h3>Time</h3>
                <p>వేడుక సమయం త్వరలో తెలియజేయబడుతుంది</p>
              </div>

              <div className="detail-card">
                <div>🛕</div>
                <h3>Venue</h3>
                <p>
                  శ్రీ మహానందీశ్వర స్వామి దేవస్థానం
                  <br />
                  మహానంది
                </p>
              </div>

              <div className="detail-card">
                <div>🙏</div>
                <h3>Occasion</h3>
                <p>తొలి కేశఖండన వేడుక</p>
              </div>

            </div>

          </section>

          {/* 06 - COUNTDOWN */}

          <section className="countdown-section">

            <div className="section-heading">
              <span>05</span>
              <h2>Countdown to Celebration</h2>
              <p>మన వేడుకకు ఇంకా</p>
            </div>

            <div className="countdown-grid">

              <div className="count-box">
                <strong>{timeLeft.days}</strong>
                <span>Days</span>
              </div>

              <div className="count-box">
                <strong>{timeLeft.hours}</strong>
                <span>Hours</span>
              </div>

              <div className="count-box">
                <strong>{timeLeft.minutes}</strong>
                <span>Minutes</span>
              </div>

              <div className="count-box">
                <strong>{timeLeft.seconds}</strong>
                <span>Seconds</span>
              </div>

            </div>

            <p className="countdown-footer">
              A beautiful day filled with love and blessings ❤️
            </p>

          </section>

          {/* 07 - PHOTO GALLERY */}

          <section className="section gallery-section" id="gallery">

            <div className="section-heading">
              <span>06</span>
              <h2>Little Princess Gallery</h2>
              <p>మా చిన్నారి మధుర జ్ఞాపకాలు</p>
            </div>

            <div className="gallery-grid">

              <div className="gallery-item gallery-large">
                <img src="/D1.jpeg" alt="Dhathri photo 1" />
              </div>

              <div className="gallery-item">
                <img src="/D2.jpeg" alt="Dhathri photo 2" />
              </div>

              <div className="gallery-item">
                <img src="/D3.jpeg" alt="Dhathri photo 3" />
              </div>

            </div>

          </section>

          {/* 08 - LOCATION */}

          <section className="section location-section" id="location">

            <div className="section-heading">
              <span>07</span>
              <h2>Location</h2>
              <p>వేడుక జరిగే ప్రదేశం</p>
            </div>

            <div className="location-card">

              <div className="temple-icon">🛕</div>

              <h2>శ్రీ మహానందీశ్వర స్వామి దేవస్థానం</h2>

              <p>మహానంది, ఆంధ్రప్రదేశ్</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Mahanandiswara+Swamy+Temple+Mahanandi+Andhra+Pradesh"
                target="_blank"
                rel="noreferrer"
                className="map-button"
              >
                📍 Get Google Maps Directions
              </a>

            </div>

          </section>

          {/* 09 - SHARE */}

          <section className="share-section" id="share">

            <div className="section-heading">
              <span>08</span>
              <h2>Share the Happiness</h2>
              <p>మీ ఆత్మీయులకు ఆహ్వానాన్ని పంపండి</p>
            </div>

            <div className="share-card">

              <div className="share-flower">🌸</div>

              <h2>మీ రాకే మాకు ఆనందం</h2>

              <p>
                మా చిన్నారి ధాత్రిని ఆశీర్వదించడానికి
                తప్పక విచ్చేయండి.
              </p>

              <button
                className="whatsapp-button"
                onClick={shareInvitation}
              >
                <span>💬</span> Share on WhatsApp
              </button>

            </div>

          </section>

          {/* FOOTER */}

          <footer className="footer">

            <div>🪷 ❀ 🪷</div>

            <h2>ధాత్రి బుగ్గ</h2>

            <p>శ్రీ మహానందీశ్వర స్వామి వారి ఆశీస్సులతో</p>

            <p>03 December 2026</p>

            <p className="footer-blessing">
              Om Namah Shivaya 🙏
            </p>

            <div>✨ ❀ ✨</div>

          </footer>

        </div>

      )}

    </div>
  );
}

export default App;
