import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  const [searchComponentSetValue, setSearchComponentSetValue] = useState("");
  const navigate = useNavigate();

  const onHeaderContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeaderContainer2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <b className={styles.exclusive}>Exclusive</b>
          </div>
          <div className={styles.headerParent}>
            <div className={styles.header1} onClick={onHeaderContainerClick}>
              <div className={styles.home}>Home</div>
            </div>
            <div className={styles.header2}>
              <div className={styles.home}>Contact</div>
            </div>
            <div className={styles.header3} onClick={onHeaderContainer2Click}>
              <div className={styles.about1}>About</div>
              <img
                className={styles.underlineIcon}
                alt=""
                src="/underline@2x.png"
              />
            </div>
            <button className={styles.header4}>
              <div className={styles.signUp}>Sign Up</div>
            </button>
          </div>
        </div>
        <div className={styles.wrapperSearchComponentSetParent}>
          <div className={styles.wrapperSearchComponentSet}>
            <input
              className={styles.searchComponentSet}
              placeholder="What are you looking for?"
              type="text"
              value={searchComponentSetValue}
              onChange={(event) =>
                setSearchComponentSetValue(event.target.value)
              }
            />
            <img
              className={styles.component2Icon}
              alt=""
              src="/component-2@2x.png"
            />
          </div>
          <div className={styles.wishlistParent}>
            <button className={styles.wishlist}>
              <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
            </button>
            <button className={styles.cart1WithBuy}>
              <img className={styles.cart1Icon} alt="" src="/cart1@2x.png" />
            </button>
            <button className={styles.wishlist}>
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector1@2x.png"
              />
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector2@2x.png"
              />
            </button>
          </div>
        </div>
      </div>
      <img className={styles.aboutChild} alt="" src="/line-3@2x.png" />
      <div className={styles.roadmap}>
        <div className={styles.account}>Home</div>
        <img className={styles.roadmapChild} alt="" src="/line-131@2x.png" />
        <div className={styles.nothing}>About</div>
        <img className={styles.roadmapItem} alt="" src="/line-13@2x.png" />
        <div className={styles.nothing1}>Nothing</div>
        <img className={styles.roadmapItem} alt="" src="/line-13@2x.png" />
        <div className={styles.nothing1}>Nothing</div>
        <img className={styles.roadmapItem} alt="" src="/line-13@2x.png" />
        <div className={styles.nothing1}>Nothing</div>
      </div>
      <div className={styles.ourStoryParent} data-scroll-to="frameContainer">
        <div className={styles.ourStory}>Our Story</div>
        <div className={styles.launchingIn2024ExclusiveIWrapper}>
          <div
            className={styles.launchingIn2024}
          >{`Launching in 2024, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Sukkur. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 50 sallers and 30 brands and will serving customers across the region. `}</div>
        </div>
      </div>
      <div className={styles.sideImage}>
        <img
          className={styles.portraitTwoAfricanFemalesHIcon}
          alt=""
          src="/portraittwoafricanfemalesholdingshoppingbagswhilereactingsomethingtheirsmartphone-1@2x.png"
        />
      </div>
      <div className={styles.fullServices}>
        <div className={styles.servicesParent}>
          <img className={styles.servicesIcon} alt="" src="/services@2x.png" />
          <div className={styles.freeAndFastDeliveryParent}>
            <div className={styles.freeAndFast}>FREE AND FAST DELIVERY</div>
            <div className={styles.freeDeliveryFor}>
              Free delivery for all orders over $140
            </div>
          </div>
        </div>
        <div className={styles.servicesGroup}>
          <img className={styles.servicesIcon} alt="" src="/services1@2x.png" />
          <div className={styles.customerServiceParent}>
            <div className={styles.freeAndFast}>24/7 CUSTOMER SERVICE</div>
            <div className={styles.friendly247Customer}>
              Friendly 24/7 customer support
            </div>
          </div>
        </div>
        <div className={styles.servicesContainer}>
          <img className={styles.servicesIcon} alt="" src="/services2@2x.png" />
          <div className={styles.freeAndFastDeliveryParent}>
            <div className={styles.freeAndFast}>MONEY BACK GUARANTEE</div>
            <div className={styles.friendly247Customer}>
              We reurn money within 30 days
            </div>
          </div>
        </div>
        <div className={styles.servicesParent}>
          <img className={styles.servicesIcon} alt="" src="/services2@2x.png" />
          <div className={styles.freeAndFastDeliveryParent}>
            <div className={styles.freeAndFast}>MONEY BACK GUARANTEE</div>
            <div className={styles.friendly247Customer}>
              We reurn money within 30 days
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.instanceWrapper}>
          <div className={styles.servicesParent1}>
            <img
              className={styles.servicesIcon}
              alt=""
              src="/services3@2x.png"
            />
            <div className={styles.freeAndFastDeliveryGroup}>
              <b className={styles.freeAndFast1}>515</b>
              <div className={styles.freeDeliveryFor1}>
                Sallers active our site
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceContainer}>
          <div className={styles.servicesParent2}>
            <img
              className={styles.servicesIcon}
              alt=""
              src="/services4@2x.png"
            />
            <div className={styles.freeAndFastDeliveryParent}>
              <b className={styles.freeAndFast1}>30k</b>
              <div className={styles.founderChairman}>
                Mopnthly Produduct Sale
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceWrapper}>
          <div className={styles.servicesParent3}>
            <img
              className={styles.servicesIcon}
              alt=""
              src="/services5@2x.png"
            />
            <div className={styles.customerServiceGroup}>
              <b className={styles.freeAndFast1}>45.5k</b>
              <div className={styles.founderChairman}>
                Customer active in our site
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceWrapper}>
          <div className={styles.servicesParent4}>
            <img
              className={styles.servicesIcon}
              alt=""
              src="/services6@2x.png"
            />
            <div className={styles.freeAndFastDeliveryGroup}>
              <b className={styles.freeAndFast1}>25k</b>
              <div className={styles.founderChairman}>
                Anual gross sale in our site
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.image46Wrapper}>
            <img className={styles.image46Icon} alt="" src="/image-46@2x.png" />
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.timHardyParent}>
              <div className={styles.timHardy}>Tim Hardy</div>
              <div
                className={styles.founderChairman}
              >{`Founder & Chairman`}</div>
            </div>
            <div className={styles.iconTwitterParent}>
              <img
                className={styles.iconTwitter}
                alt=""
                src="/icontwitter@2x.png"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="/iconinstagram@2x.png"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="/iconlinkedin@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.image46Wrapper}>
            <img className={styles.image51Icon} alt="" src="/image-51@2x.png" />
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.lisaLaneParent}>
              <div className={styles.timHardy}>Lisa Lane</div>
              <div className={styles.founderChairman}>Managing Director</div>
            </div>
            <div className={styles.iconTwitterGroup}>
              <img
                className={styles.iconTwitter}
                alt=""
                src="/icontwitter@2x.png"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="/iconinstagram@2x.png"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="/iconlinkedin@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.image46Wrapper}>
            <img className={styles.image47Icon} alt="" src="/image-47@2x.png" />
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.lisaLaneParent}>
              <div className={styles.timHardy}>Morgan Ray</div>
              <div className={styles.founderChairman}>Product Designer</div>
            </div>
            <div className={styles.iconTwitterGroup}>
              <img
                className={styles.iconTwitter}
                alt=""
                src="/icontwitter@2x.png"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="/iconinstagram@2x.png"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="/iconlinkedin@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
        <img
          className={styles.frameInner}
          alt=""
          src="/group-1000005940@2x.png"
        />
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
      </div>
      <img className={styles.aboutItem} alt="" src="/line-17@2x.png" />
      <div className={styles.footer}>
        <div className={styles.topFooter}>
          <div className={styles.footerMenu}>
            <div className={styles.titleMenu}>
              <div className={styles.customerServices}>CUSTOMER SERVICES</div>
            </div>
            <div className={styles.itemMenu}>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>Contact Us</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>Track Your Order</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>{`Product Care & Repair`}</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>Book an Appointment</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>{`Shipping & Returns`}</div>
              </div>
            </div>
          </div>
          <div className={styles.footerMenu1}>
            <div className={styles.titleMenu1}>
              <div className={styles.customerServices}>ABOUT US</div>
            </div>
            <div className={styles.itemMenu}>
              <button className={styles.itemMenu7}>
                <div className={styles.item5}>Our Producers</div>
              </button>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>Sitemap</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>FAQ</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>About Us</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>{`Terms & Conditions`}</div>
              </div>
            </div>
          </div>
          <div className={styles.footerMenu2}>
            <div className={styles.titleMenu2}>
              <div className={styles.customerServices}>CATALOG</div>
            </div>
            <div className={styles.itemMenu}>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>Necklaces</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>hoodies</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>Jewelry Box</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>t-shirt</div>
              </div>
              <div className={styles.itemMenu1}>
                <div className={styles.item}>jacket</div>
              </div>
            </div>
          </div>
          <div className={styles.leftFooter}>
            <div className={styles.logo1}>
              <div className={styles.coral}>CORAL</div>
              <img className={styles.logoChild} alt="" src="/group-97@2x.png" />
              <img className={styles.logoItem} alt="" src="/group-97@2x.png" />
            </div>
            <div className={styles.loremIpsumDolorContainer}>
              <p className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
              <p className={styles.loremIpsumDolor}>
                elit, sed do eiusmod tempor incididunt ut labore et
              </p>
              <p className={styles.doloreMagnaAliqua}>dolore magna aliqua</p>
            </div>
            <div className={styles.social}>
              <div className={styles.v6IconFree}>
                <div className={styles.icon}></div>
              </div>
              <div className={styles.v6IconFree}>
                <div className={styles.icon}></div>
              </div>
              <div className={styles.v6IconFree}>
                <div className={styles.icon}></div>
              </div>
              <div className={styles.v6IconFree}>
                <div className={styles.icon}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <div className={styles.coralInc}>© 2022 Coral , Inc.</div>
          <img
            className={styles.iconsPayment1}
            alt=""
            src="/icons-payment-1@2x.png"
          />
          <div className={styles.button}>
            <div className={styles.coralInc}>Scroll to top</div>
            <div className={styles.v6IconFree4}>
              <div className={styles.icon4}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
