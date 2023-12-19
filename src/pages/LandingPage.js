import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onSalesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onClothingShoesClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='gridProductsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onBestSellersTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='bestSellersContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div className={styles.landingPage}>
      <div className={styles.frame}>
        <div className={styles.frame1} data-scroll-to="frameContainer1">
          <div className={styles.topMain}>
            <div className={styles.frame2}>
              <div className={styles.galaxyStore}>{`Galaxy Store `}</div>
            </div>
            <div className={styles.frame3}>
              <div className={styles.frame4}>
                <div className={styles.frame5}>
                  <div className={styles.navigationMenuParent}>
                    <div className={styles.navigationMenu}>
                      <div className={styles.links}>
                        <div className={styles.home} onClick={onHomeTextClick}>
                          Home
                        </div>
                        <div className={styles.home} onClick={onSalesTextClick}>
                          Sales
                        </div>
                        <div
                          className={styles.home}
                          onClick={onClothingShoesClick}
                        >{`Clothing & Shoes`}</div>
                        <div
                          className={styles.home}
                          onClick={onBestSellersTextClick}
                        >
                          Best Sellers
                        </div>
                        <div className={styles.home} onClick={onAboutTextClick}>
                          About
                        </div>
                        <img
                          className={styles.hamburgerIcon}
                          alt=""
                          src="/hamburger@2x.png"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.looginWrapper}
                      onClick={onFrameContainer3Click}
                    >
                      <b className={styles.loogin}>Login</b>
                    </div>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.frame6}>
                  <div className={styles.flowerPattern}>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame@2x.png"
                    />
                    <img
                      className={styles.frameIcon1}
                      alt=""
                      src="/frame1@2x.png"
                    />
                  </div>
                  <div className={styles.frame7}>
                    <div className={styles.product}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frame8}>
                          <div className={styles.content}>
                            <div className={styles.frame9}>
                              <div
                                className={styles.collectionsYouCanContainer}
                              >
                                <p className={styles.collections}>
                                  <b className={styles.collections1}>
                                    Collections
                                  </b>
                                  <span>:</span>
                                </p>
                                <p className={styles.collections}>
                                  you can explore and shop many differnt
                                  collection
                                </p>
                                <p className={styles.fromVariousBarands}>
                                  from various barands here.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.imageProduct}>
                        <div className={styles.frame10}>
                          <div className={styles.img19}>
                            <img
                              className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                              alt=""
                              src="/enginakyurtjazoffxg1ycunsplash-1@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frame11}>
            <div className={styles.header}>
              <div className={styles.topHeader}>
                <div className={styles.topHeaderChild} />
                <div className={styles.account}>
                  <div className={styles.button}>
                    <div className={styles.v6IconFree}>
                      <div className={styles.icon}></div>
                    </div>
                    <div className={styles.shopNow}>Account</div>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.v6IconFree}>
                      <div className={styles.icon}></div>
                    </div>
                    <div className={styles.shopNow}>Shoping</div>
                  </div>
                </div>
                <div className={styles.logo}>
                  <div className={styles.coral}>CORAL</div>
                  <img
                    className={styles.logoChild}
                    alt=""
                    src="/group-97@2x.png"
                  />
                  <img
                    className={styles.logoItem}
                    alt=""
                    src="/group-97@2x.png"
                  />
                </div>
                <div className={styles.v6IconFree2}>
                  <div className={styles.icon2}></div>
                </div>
              </div>
              <div className={styles.menu}>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>{`Jewelry & Accessories`}</div>
                </div>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>{`Clothing & Shoes`}</div>
                </div>
                <div className={styles.itemMenu2}>
                  <div className={styles.item}>{`Home & Living`}</div>
                </div>
                <div className={styles.itemMenu2}>
                  <div className={styles.item}>{`Wedding & Party`}</div>
                </div>
                <div className={styles.itemMenu}>
                  <div className={styles.item4}>{`Toys & Entertainment`}</div>
                </div>
                <div className={styles.itemMenu2}>
                  <div className={styles.item}>{`Art & Collectibles`}</div>
                </div>
                <div className={styles.itemMenu2}>
                  <div className={styles.item}>{`Craft Supplies & Tools`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.salesWrapper}
        data-scroll-to="frameContainer"
        onClick={onFrameContainerClick}
      >
        <div className={styles.sales1}>
          <div className={styles.salesDiscountParent}>
            <div className={styles.salesDiscount}>{`Sales & discount`}</div>
            <div className={styles.hotCategoryWrapper}>
              <div className={styles.hotCategory}>
                <div className={styles.card}>
                  <div className={styles.img03}>
                    <img
                      className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                      alt=""
                      src="/itemcategory1@2x.png"
                    />
                  </div>
                  <div className={styles.ribbon}>
                    <div className={styles.background} />
                    <div className={styles.sale}>sale</div>
                  </div>
                  <div className={styles.bottomCategory}>
                    <div className={styles.jacket}>coat</div>
                    <div className={styles.product1}>520 product</div>
                  </div>
                </div>
                <div className={styles.card1}>
                  <div className={styles.img03}>
                    <img
                      className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                      alt=""
                      src="/itemcategory@2x.png"
                    />
                  </div>
                  <div className={styles.ribbon1}>
                    <div className={styles.background1} />
                    <div className={styles.hot}>hot</div>
                  </div>
                  <div className={styles.bottomCategory1}>
                    <div className={styles.jacket}>Pants</div>
                    <div className={styles.product1}>200 product</div>
                  </div>
                </div>
                <div className={styles.card1}>
                  <div className={styles.img03}>
                    <img
                      className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                      alt=""
                      src="/itemcategoryhover-1@2x.png"
                    />
                  </div>
                  <div className={styles.ribbon1}>
                    <div className={styles.background1} />
                    <div className={styles.hot}>hot</div>
                  </div>
                  <div className={styles.bottomCategory1}>
                    <div className={styles.jacket}>jacket</div>
                    <div className={styles.product1}>103 product</div>
                  </div>
                </div>
                <div className={styles.card1}>
                  <div className={styles.img03}>
                    <img
                      className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                      alt=""
                      src="/itemcategory2@2x.png"
                    />
                  </div>
                  <div className={styles.ribbon1}>
                    <div className={styles.background1} />
                    <div className={styles.hot}>hot</div>
                  </div>
                  <div className={styles.bottomCategory1}>
                    <div className={styles.jacket}>Shirt</div>
                    <div className={styles.product1}>320 product</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.gridProducts}
        data-scroll-to="gridProductsContainer"
      >
        <div className={styles.clothingAndShoesParent}>
          <div className={styles.clothingAndShoes}>{`Clothing and Shoes `}</div>
          <div className={styles.products}>
            <div className={styles.frameParent}>
              <div className={styles.frameContainer}>
                <div className={styles.cardWrapper}>
                  <div className={styles.card4}>
                    <div className={styles.topProduct}>
                      <div className={styles.img04}>
                        <img
                          className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                          alt=""
                          src="/imageproduct@2x.png"
                        />
                      </div>
                      <div className={styles.ribbon}>
                        <div className={styles.background} />
                        <div className={styles.sale}>sale</div>
                      </div>
                    </div>
                    <div className={styles.bottomProduct}>
                      <div className={styles.bag}>Dress</div>
                      <div className={styles.div}>$155.00</div>
                      <div className={styles.div1}>$364.00</div>
                      <div className={styles.titleProduct}>
                        <div className={styles.nikeSportswearFutura}>
                          Yellow Reserved Hoodie
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.cardWrapper}>
                  <div className={styles.card4}>
                    <div className={styles.topProduct}>
                      <div className={styles.img04}>
                        <img
                          className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                          alt=""
                          src="/imageproduct@2x.png"
                        />
                      </div>
                      <div className={styles.ribbon}>
                        <div className={styles.background} />
                        <div className={styles.sale}>sale</div>
                      </div>
                    </div>
                    <div className={styles.bottomProduct}>
                      <div className={styles.bag}>Dress</div>
                      <div className={styles.div}>$155.00</div>
                      <div className={styles.div1}>$364.00</div>
                      <div className={styles.titleProduct}>
                        <div className={styles.nikeSportswearFutura}>
                          Yellow Reserved Hoodie
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.cardFrame}>
                  <div className={styles.card4}>
                    <div className={styles.topProduct}>
                      <div className={styles.img04}>
                        <img
                          className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                          alt=""
                          src="/imageproduct5@2x.png"
                        />
                      </div>
                      <div className={styles.ribbon1}>
                        <div className={styles.background1} />
                        <div className={styles.hot}>hot</div>
                      </div>
                    </div>
                    <div className={styles.bottomProduct2}>
                      <div className={styles.bag2}>scarf</div>
                      <div className={styles.div4}>$53.00</div>
                      <div className={styles.titleProduct2}>
                        <div className={styles.nikeSportswearFutura}>
                          Geometric print Scarf
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardWrapper1}>
                <div className={styles.card7}>
                  <div className={styles.topProduct}>
                    <div className={styles.img04}>
                      <img
                        className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                        alt=""
                        src="/imageproduct1@2x.png"
                      />
                    </div>
                    <div className={styles.ribbon1}>
                      <div className={styles.background1} />
                      <div className={styles.hot}>hot</div>
                    </div>
                  </div>
                  <div className={styles.bottomProduct2}>
                    <div className={styles.bag2}>Dress</div>
                    <div className={styles.div5}>$120.50</div>
                    <div className={styles.titleProduct3}>
                      <div className={styles.nikeSportswearFutura}>
                        Nike Repel Miler
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.bestSellers1}
        data-scroll-to="bestSellersContainer"
      >
        <div className={styles.sliderProducts}>
          <div className={styles.sectionTitle}>
            <div className={styles.clothingAndShoes}>Best sellers</div>
          </div>
          <div className={styles.slider}>
            <div className={styles.products1}>
              <div className={styles.cardWrapper2}>
                <div className={styles.card8}>
                  <div className={styles.topProduct}>
                    <div className={styles.img04}>
                      <img
                        className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                        alt=""
                        src="/imageproduct7@2x.png"
                      />
                    </div>
                    <div className={styles.ribbon}>
                      <div className={styles.background1} />
                      <div className={styles.hot}>hot</div>
                    </div>
                  </div>
                  <div className={styles.bottomProduct2}>
                    <div className={styles.bag2}>Dress</div>
                    <div className={styles.div5}>$236.00</div>
                    <div className={styles.titleProduct4}>
                      <div className={styles.nikeSportswearFutura}>
                        Basic Dress Green
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardWrapper2}>
                <div className={styles.card8}>
                  <div className={styles.topProduct}>
                    <div className={styles.img04}>
                      <img
                        className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                        alt=""
                        src="/imageproduct4@2x.png"
                      />
                    </div>
                    <div className={styles.ribbon1}>
                      <div className={styles.background1} />
                      <div className={styles.hot}>hot</div>
                    </div>
                  </div>
                  <div className={styles.bottomProduct2}>
                    <div className={styles.bag2}>Bag</div>
                    <div className={styles.div5}>$130.00</div>
                    <div className={styles.titleProduct5}>
                      <div className={styles.nikeSportswearFutura}>
                        Nike Sportswear Futura Luxe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardWrapper4}>
                <div className={styles.card8}>
                  <div className={styles.topProduct}>
                    <div className={styles.img04}>
                      <img
                        className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                        alt=""
                        src="/imageproduct2@2x.png"
                      />
                    </div>
                    <div className={styles.ribbon}>
                      <div className={styles.background} />
                      <div className={styles.sale}>sale</div>
                    </div>
                  </div>
                  <div className={styles.bottomProduct}>
                    <div className={styles.bag}>Dress</div>
                    <div className={styles.div}>$155.00</div>
                    <div className={styles.div1}>$364.00</div>
                    <div className={styles.titleProduct}>
                      <div className={styles.nikeSportswearFutura}>
                        Yellow Reserved Hoodie
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardWrapper4}>
                <div className={styles.card8}>
                  <div className={styles.topProduct}>
                    <div className={styles.img04}>
                      <img
                        className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                        alt=""
                        src="/imageproduct6@2x.png"
                      />
                    </div>
                    <div className={styles.ribbon}>
                      <div className={styles.background} />
                      <div className={styles.sale}>sale</div>
                    </div>
                  </div>
                  <div className={styles.bottomProduct}>
                    <div className={styles.bag}>shoe</div>
                    <div className={styles.div}>$198.00</div>
                    <div className={styles.div1}>$220.00</div>
                    <div className={styles.titleProduct7}>
                      <div className={styles.nikeSportswearFutura}>
                        Nike Air Zoom Pegasus
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.newsletterInstagram}>
        <div className={styles.instagram}>
          <div className={styles.sectionTitle}>
            <div className={styles.clothingAndShoes}>
              Follow products and discounts on Instagram
            </div>
          </div>
          <div className={styles.instagram1}>
            <div className={styles.cardParent}>
              <div className={styles.card12}>
                <div className={styles.card12}>
                  <img
                    className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                    alt=""
                    src="/imageproduct12@2x.png"
                  />
                </div>
                <div className={styles.shodowLayer}>
                  <div className={styles.v6IconFree3}>
                    <div className={styles.icon3}></div>
                  </div>
                </div>
              </div>
              <div className={styles.card13}>
                <div className={styles.card12}>
                  <img
                    className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                    alt=""
                    src="/imageproduct11@2x.png"
                  />
                </div>
                <div className={styles.shodowLayer}>
                  <div className={styles.v6IconFree3}>
                    <div className={styles.icon3}></div>
                  </div>
                </div>
              </div>
              <div className={styles.card14}>
                <div className={styles.card12}>
                  <img
                    className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                    alt=""
                    src="/imageproduct9@2x.png"
                  />
                </div>
                <div className={styles.shodowLayer}>
                  <div className={styles.v6IconFree3}>
                    <div className={styles.icon3}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardParent}>
              <div className={styles.card12}>
                <div className={styles.card12}>
                  <img
                    className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                    alt=""
                    src="/imageproduct13@2x.png"
                  />
                </div>
                <div className={styles.shodowLayer}>
                  <div className={styles.v6IconFree3}>
                    <div className={styles.icon3}></div>
                  </div>
                </div>
              </div>
              <div className={styles.card13}>
                <div className={styles.card12}>
                  <img
                    className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                    alt=""
                    src="/imageproduct10@2x.png"
                  />
                </div>
                <div className={styles.shodowLayer}>
                  <div className={styles.v6IconFree3}>
                    <div className={styles.icon3}></div>
                  </div>
                </div>
              </div>
              <div className={styles.card14}>
                <div className={styles.card12}>
                  <img
                    className={styles.enginAkyurtJazoffxg1ycUnsplIcon}
                    alt=""
                    src="/imageproduct8@2x.png"
                  />
                </div>
                <div className={styles.shodowLayer}>
                  <div className={styles.v6IconFree3}>
                    <div className={styles.icon3}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsletter}>
          <div className={styles.newsletterForm}>
            <div className={styles.inputWrapper}>
              <TextField
                className={styles.input}
                color="primary"
                label="Email address..."
                sx={{ width: 643 }}
                variant="outlined"
              />
            </div>
            <button className={styles.button2}>
              <div className={styles.v6IconFreeParent}>
                <div className={styles.v6IconFree9}>
                  <div className={styles.icon9}></div>
                </div>
                <div className={styles.submit}>SUBMIT</div>
              </div>
              <div className={styles.buttonChild} />
            </button>
            <div className={styles.sectionTitle2}>
              <div className={styles.clothingAndShoes}>Contact Us</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerWrapper}>
        <div className={styles.footer}>
          <div className={styles.topFooter}>
            <div className={styles.footerMenu}>
              <div className={styles.titleMenu}>
                <div className={styles.nikeSportswearFutura}>
                  CUSTOMER SERVICES
                </div>
              </div>
              <div className={styles.itemMenu7}>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>Contact Us</div>
                </div>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>Track Your Order</div>
                </div>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>{`Product Care & Repair`}</div>
                </div>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>Book an Appointment</div>
                </div>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>{`Shipping & Returns`}</div>
                </div>
              </div>
            </div>
            <div className={styles.footerMenu1}>
              <div className={styles.titleMenu1}>
                <div className={styles.nikeSportswearFutura}>ABOUT US</div>
              </div>
              <div className={styles.itemMenu7}>
                <button className={styles.itemMenu14}>
                  <div className={styles.item12}>Our Producers</div>
                </button>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>Sitemap</div>
                </div>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>FAQ</div>
                </div>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>About Us</div>
                </div>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>{`Terms & Conditions`}</div>
                </div>
              </div>
            </div>
            <div className={styles.footerMenu2}>
              <div className={styles.titleMenu2}>
                <div className={styles.nikeSportswearFutura}>CATALOG</div>
              </div>
              <div className={styles.itemMenu7}>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>Necklaces</div>
                </div>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>hoodies</div>
                </div>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>Jewelry Box</div>
                </div>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>t-shirt</div>
                </div>
                <div className={styles.itemMenu}>
                  <div className={styles.item}>jacket</div>
                </div>
              </div>
            </div>
            <div className={styles.leftFooter}>
              <div className={styles.logo1}>
                <div className={styles.coral}>CORAL</div>
                <img
                  className={styles.logoChild}
                  alt=""
                  src="/group-97@2x.png"
                />
                <img
                  className={styles.logoItem}
                  alt=""
                  src="/group-97@2x.png"
                />
              </div>
              <div className={styles.loremIpsumDolorContainer}>
                <p className={styles.collections}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <p className={styles.collections}>
                  elit, sed do eiusmod tempor incididunt ut labore et
                </p>
                <p className={styles.fromVariousBarands}>dolore magna aliqua</p>
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
            <div className={styles.button3}>
              <div className={styles.coralInc}>Scroll to top</div>
              <div className={styles.v6IconFree14}>
                <div className={styles.icon14}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
