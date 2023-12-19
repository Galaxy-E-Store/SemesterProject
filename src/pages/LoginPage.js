import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onButtonSocialInactiveGoogleClick = useCallback(() => {
    window.open("google.com");
  }, []);

  const onButtonSocialInactiveFacebooClick = useCallback(() => {
    window.open("facebook.com");
  }, []);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
      <img
        className={styles.homeIndicatorOnLight}
        alt=""
        src="/home-indicator-on-light@2x.png"
      />
      <TextField
        className={styles.textFieldordinaryactivated}
        color="primary"
        label="muffin.sweet@gmail.com"
        sx={{ width: 343 }}
        variant="outlined"
        type="email"
      />
      <TextField
        className={styles.textFieldordinaryinactive}
        color="primary"
        label="Password"
        sx={{ width: 343 }}
        variant="outlined"
        type="password"
      />
      <button className={styles.buttonprimaryinactivebig}>
        <div className={styles.rectangle} />
        <div className={styles.login}>LOGIN</div>
      </button>
      <div className={styles.wrapperButtonsocialinactive}>
        <img
          className={styles.buttonsocialinactivegoogleIcon}
          alt=""
          src="/buttonsocialinactivegoogle1.svg"
          onClick={onButtonSocialInactiveGoogleClick}
        />
      </div>
      <div className={styles.orLoginWith}>Or login with social account</div>
      <div className={styles.forgotYourPassword}>Forgot your password?</div>
      <button
        className={styles.buttonsocialinactivefaceboo}
        onClick={onButtonSocialInactiveFacebooClick}
      >
        <div className={styles.buttonsocialinactivefacebooChild} />
        <img
          className={styles.iconfinderSquareFacebook317}
          alt=""
          src="/iconfinder-squarefacebook-317727@2x.png"
        />
      </button>
      <img
        className={styles.roundArrowRightAlt24pxIcon}
        alt=""
        src="/roundarrow-right-alt24px@2x.png"
      />
      <div className={styles.navigationBarbigHeadline}>
        <b className={styles.headline}>Login</b>
        <div className={styles.navigationBar}>
          <div className={styles.statusBarOnLight}>
            <img className={styles.batteryIcon} alt="" src="/battery@2x.png" />
            <img className={styles.wifiIcon} alt="" src="/wifi@2x.png" />
            <img
              className={styles.mobileSignalIcon}
              alt=""
              src="/mobile-signal@2x.png"
            />
            <div className={styles.timeStyle}>
              <div className={styles.div}>9:41</div>
            </div>
          </div>
          <img
            className={styles.leftActionIcon}
            alt=""
            src="/left-action@2x.png"
          />
        </div>
      </div>
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
    </div>
  );
};

export default LoginPage;
