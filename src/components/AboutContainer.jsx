import { useTranslation } from "react-i18next";

const AboutContainer = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <section className="about-container">
      <h2>{t("labels.sobre")}</h2>
      <p>
        {t("about.texto1")}
      </p>
      <p>
        {t("about.texto2")}
      </p>
      <p>
        {t("about.texto3")}
      </p>
    </section>
  );
};

export default AboutContainer;
