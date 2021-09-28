import classes from "./Footer.module.css";
import Section from "../../layout/Section";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { buildEtherscanAddressLink } from "../../utils/etherscan";
import { externalURL, ExternalURL } from "../../utils/externalURL";
import config from "../../config";
import Link from "../Link";

const Footer = () => {
  const twitterURL = externalURL(ExternalURL.twitter);
  const discordURL = externalURL(ExternalURL.discord);
  const etherscanURL = buildEtherscanAddressLink(config.tokenAddress);
  const githubURL = externalURL(ExternalURL.github);

  const location = useLocation();
  const useGreyBg = useAppSelector(
    (state) => state.application.useGreyBackground
  );
  const bgColor =
    location.pathname === "/" ? "white" : useGreyBg ? "#d5d7e1" : "#e1d7d5";

  return (
    <Section
      bgColor={bgColor}
      fullWidth={false}
      className={classes.alignBottom}
    >
      <footer className={classes.footerSignature}>
        <Link text="discord" url={discordURL} leavesPage={true} />
        <Link text="twitter" url={twitterURL} leavesPage={true} />
        <Link text="etherscan" url={etherscanURL} leavesPage={true} />
        <Link text="github" url={githubURL} leavesPage={false} />
      </footer>
    </Section>
  );
};
export default Footer;
