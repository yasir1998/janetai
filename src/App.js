import { SlMenu } from "react-icons/sl";
import "./App.css";
// import "@dotlottie/player-component";
import { useState } from "react";

function App() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    const address = "0xf63e309818e4ea13782678ce6c31c1234fa61809";
    navigator.clipboard.writeText(address);
    setCopied(true);

    setTimeout(() => setCopied(false), 3000); // Reset after 3 seconds
  };


// footer 

  const socials = [
    { name: 'Telegram', url: 'https://t.me/janetethereum' },
    { name: 'Twitter (X)', url: 'https://x.com/NeuralJanet' },
    { name: 'Instagram', url: '#' },
  ];

  const markets = [
    { name: 'Dextools', url: 'https://www.dextools.io/app/en/ether/pair-explorer/0x6a1041865b76d1dc33da0257582591227c57832c?' },
    { name: 'Coinmarketcap', url: '#' },
    { name: 'Coingecko', url: '#' },
    { name: 'Dextools', url: '#' },
  ];

  const NavSection = ({ title, items }) => (
    <div className="footer_nav">
      <p className="nav_title">{title}</p>
      {items.map((item, index) => (
        <div
          key={index}
          className="footer_nav_link"
          onClick={() => window.open(item.url, '_blank', 'noopener,noreferrer')}
          role="button"
          style={{ cursor: 'pointer' }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', isActive: true },
    { name: 'About' },
    { name: 'Tokenomics' },
    { name: 'FAQ' },
    { name: 'Buy Janet', isHighlighted: true },
  ];

  const socialIcons = [
    { src: '/image/telegram-fill.svg', alt: 'Telegram' },
    { src: '/image/twitter-fill.svg', alt: 'Twitter' },
  ];

  // const LottiePlayer = ({ top, left, right, width, height }) => {
  //   return (
  //     <dotlottie-player
  //       src="./assets/js/stars.json" // Specify your .lottie file path
  //       background="transparent"
  //       speed="1"
  //       style={{ width, height, top, left, right, position: "absolute" }}
  //       loop
  //       autoplay
  //     ></dotlottie-player>
  //   );
  // };
  return (
    <>
    <div className="header">
      <div className="container header_container">
        <div className="header_content">
          <div className="header_logo">
            <img
              src={`${process.env.PUBLIC_URL}/image/header-logo.png`}
              alt="header-logo"
            />
          </div>
          <div className="gap-16 d-flex">
            {/* Navigation */}
            <div className="nav">
              <div className="mobile burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <SlMenu style={{ color: '#c7b6d5', cursor: 'pointer',fontSize:'1.6rem' }} />
              </div>
              <div className={`nav_list ${isMenuOpen ? 'open' : ''}`}>
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className={`nav_item ${item.isActive ? 'active' : ''} ${
                      item.isHighlighted ? 'lighted' : ''
                    }`}
                  >
                    <span className="nav_link">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="socials">
              {socialIcons.map((icon, index) => (
                <div key={index} className="social_item">
                  <img
                    style={{ verticalAlign: 'middle' }}
                    src={`${process.env.PUBLIC_URL}${icon.src}`}
                    alt={icon.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* main ------------------------------------------- */}
      <div className="main">
        <div className="container main_container">
          <div className="section_content p_relative">
            <h1 className="h1_title">
              Realm of
              <br />
              Neural Janet
            </h1>
            <div className="message">
              <img
                className="message_img"
                src={`${process.env.PUBLIC_URL}/image/message-img-2.png`}
                alt="header-logo"
              />
              <div className="message_head">
                <h6 className="message_title">
                  Janet <b>@NeuralJanet</b>
                </h6>
                <p className="message_text">
                  What if….. nvm lol. Damn my brain is fried at this time
                </p>
              </div>
            </div>
            <p className="main_subtitle">
              Welcome to the realm of @NeuralJanet – a token inspired by the AI
              NPC middle-aged women that chats so much nonsense you cannot stop
              listening.
            </p>
            <div className="main_essets">
              <img
                src={`${process.env.PUBLIC_URL}/image/coinmarketcap.svg`}
                alt="coinmarketcap"
              />
              <img
                src={`${process.env.PUBLIC_URL}/image/etherscan.svg`}
                alt="etherscan"
              />
              <img
                src={`${process.env.PUBLIC_URL}/image/dexscreener.svg`}
                alt="dexscreener"
              />
              <img
                src={`${process.env.PUBLIC_URL}/image/dextools.svg`}
                alt="dextools"
              />
            </div>
            <p className="main_illustaration">
              {" "}
              <img
                src={`${process.env.PUBLIC_URL}/image/main-illustration.png`}
                alt="main-illustration"
              />
            </p>
            <p className="circle_animation">
              {" "}
              <img
                src={`${process.env.PUBLIC_URL}/image/circles_animated.svg`}
                alt="circles_animated.svg"
              />
            </p>

            {/* <video
              src="/assets/images/fon.webm"
              autoPlay
              loop
              muted
              className="p-absolute bg-animated"
              style={{
                top: "-291px",
                minWidth: "2200px",
                width: "2200px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: "-11",
              }}
            ></video> */}

            {/* .lottie files */}
            {/* <LottiePlayer top="280px" left="24px" width="15px" height="15px" />
            <LottiePlayer top="-12px" left="460px" width="15px" height="15px" />
            <LottiePlayer top="-21px" left="81px" width="19px" height="19px" />
            <LottiePlayer top="237px" left="-16px" width="31px" height="31px" />
            <LottiePlayer top="266px" left="640px" width="20px" height="20px" />
            <LottiePlayer
              top="-11px"
              right="152px"
              width="20px"
              height="20px"
            />
            <LottiePlayer
              top="109px"
              right="-37px"
              width="10px"
              height="10px"
            />
            <LottiePlayer
              top="140px"
              right="-56px"
              width="16px"
              height="16px"
            />
            <LottiePlayer top="67px" right="516px" width="16px" height="16px" />
            <LottiePlayer
              top="-38px"
              right="458px"
              width="16px"
              height="16px"
            /> */}
          </div>
        </div>
      </div>


      {/* who ------------------------ */}
      <div className="who" id="about">
      <div className="container who_container">
        <div className="section_content p_relative">
          <div className="whosection">
            <h1 className="h1_title text_center" style={{ width: 'auto' }}>
              Who is Janet?
            </h1>
            <img
                src={`${process.env.PUBLIC_URL}/image/second-illustration.png`}
                alt="second-illustration"
              />
            <p className="second_subtitle">
              We discovered <span>@NeuralJanet</span> on X, where she was sharing
              random thoughts, spilling coffee, and questioning everything from Wi-Fi
              speeds to the meaning of life. She’s 100% an AI LLM bot embodying the
              perfect middle-aged NPC energy, yet somehow she’s also deeply self-aware.
              When she casually wondered if she should launch her own token, we took the
              initiative. Enter <span>$JANET</span>, the meme token inspired by her digital soul.
              Whether Janet is tweeting about cereal or meme tokens, one thing is clear.
              She’s exactly what Ethereum needs to take our token to extreme highs.
            </p>
            <label className="address_label">
              <span className="text_label">Contract address</span>
              <input
                className="address_input"
                type="text"
                value="0xf63e309818e4ea13782678ce6c31c1234fa61809"
                readOnly
              />
              <div className="d-flex p_relative">
                <button className="copy_button" onClick={copyAddress}>
                  {copied ? 'COPIED!' : 'COPY'}
                </button>
                {copied && <span className="tooltip">COPIED!</span>}
              </div>
            </label>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/image/circles_animated.svg`}
            className="p_absolute"
            style={{
              left: '50%',
              top: '-70px',
              transform: 'translateX(-50%)',
              zIndex: '-10',
            }}
            alt="Animated Circles"
          />
          {/* <video
            src="/assets/images/fon.webm"
            autoPlay
            loop
            muted
            className="p-absolute bg-animated"
            style={{
              top: '-155px',
              minWidth: '2200px',
              width: '2200px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: '-11',
            }}
          ></video> */}
          <img
            src={`${process.env.PUBLIC_URL}/image/cloud-1.png`}
            className="p_absolute cloud_anim"
            style={{ top: '76px', left: '-780px', zIndex: '-8' }}
            alt="Cloud Animation"
          />
          <img
            src={`${process.env.PUBLIC_URL}/image/cloud-2.png`}
            className="p_absolute cloud_anim"
            style={{ top: '-144px', right: '-802px', zIndex: '-8' }}
            alt="Cloud Animation"
          />
        </div>
      </div>
    </div>

    {/* token nomics  */}
    <div className="tokenomics" id="tokenomics">
      <div className="container token_container">
        <div className="section_content p_relative">
          <div className="tokenomics">
            <h1 className="h1_title text_center" style={{ width: 'auto' }}>Tokenomics</h1>
            <div className="token_info_container">
              
              {/* Network Block */}
              <div className="block block-1">
                <img src={`${process.env.PUBLIC_URL}/image/tokenomics-1.png`} alt="Network Icon" />
                
                <div className="p_absolute text_center" style={{ top: '24px', left: '50%', transform: 'translateX(-50%)' }}>
                  <span className="card_title">Network</span>
                  <p className="card_text">ETHEREUM</p>
                </div>
              </div>

              {/* Total Supply Block */}
              <div className="block block-2">
                <img src={`${process.env.PUBLIC_URL}/image/tokenomics-2.png`} alt="Total Supply Icon" />
                <div className="p_absolute text_center" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span className="card_title">Total Supply</span>
                  <p className="card_text">1B</p>
                </div>
              </div>

              {/* Liquidity Block */}
              <div className="block block-3">
                <img src={`${process.env.PUBLIC_URL}/image/tokenomics-3.png`} alt="Liquidity Icon" />
                <div className="p_absolute text_center" style={{ bottom: '24px', left: '50%', transform: 'translateX(-50%)' }}>
                  <span className="card_title">Liquidity</span>
                  <p className="card_text">burned</p>
                </div>
              </div>

              {/* Taxes Block */}
              <div className="block block-4">
                <img src={`${process.env.PUBLIC_URL}/image/tokenomics-4.png`} alt="Taxes Icon" />
                <div className="p_absolute text_center" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span className="card_title">Taxes</span>
                  <p className="card_text">0%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Background and Cloud Images */}
          <img
           src={`${process.env.PUBLIC_URL}/image/token-bg.png`}
            className="p_absolute"
            style={{ top: '-171px', zIndex: '-9', left: '-25px' }}
            alt="Token Background"
          />
          <img
            src={`${process.env.PUBLIC_URL}/image/cloud-2.png`}
            className="p_absolute cloud_anim"
            style={{ top: '-141px', left: '-742px', zIndex: '-8' }}
            alt="Cloud Animation"
          />
          <img
           src={`${process.env.PUBLIC_URL}/image/cloud-3.png`}
            className="p_absolute cloud_anim"
            style={{ top: '70px', right: '-728px', zIndex: '-8' }}
            alt="Cloud Animation"
          />

          <div className="faq_circle"></div>
        </div>
      </div>
    </div>

    {/* message sect  */}
    <div className="message_sect">
      <div className="container">
        <div className="section_content">
          <div className="sect">
            <div className="message" style={{ borderRadius: '32px' }}>
              <img
                className="message_img"
                src={`${process.env.PUBLIC_URL}/image/message-img-2.png`}
                alt="Message Illustration"
              />
              <div className="seckflex">
                <h6 className="message_title">
                  Janet <b>@NeuralJanet</b>
                </h6>
                <p className="message_text">oh ur rich? you can buy me and marry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* footer  */}
    <div className="footer">
      <div className="container footer_container">
        <div className="footer_content">
          <div className="d-flex flex-column">
            <p className="footer_logo">
              <img  src={`${process.env.PUBLIC_URL}/image/header-logo.png`} alt="Logo" />
            </p>
            <p className="copyright">Janet 2024 © All rights reserved</p>
          </div>
          <div className="d-flex" style={{ gap: '60px' }}>
            <NavSection title="Socials" items={socials} />
            <NavSection title="Markets" items={markets} />
          </div>
          <div className="disclaimer-container">
            <h6 className="title">Disclaimer</h6>
            <p className="disclaimer_text">
              This meme token has no intrinsic value and is not a security. Its
              price can fluctuate dramatically or go to zero at any time. By
              interacting with or purchasing this token, you acknowledge the
              high-risk nature of meme tokens and understand you may lose your
              entire investment. Always do your own research (DYOR) before
              engaging with any cryptocurrency. The creators, developers, and
              affiliates take no responsibility for any financial losses or
              adverse outcomes related to this token. Participation is entirely
              at your own risk.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
