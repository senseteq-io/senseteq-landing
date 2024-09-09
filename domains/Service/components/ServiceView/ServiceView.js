import { Text, Title } from "../../../../components";

import Image from "next/image";
import { useTranslation } from "next-i18next";

const ServiceView = (props) => {
  const { src, title, subtitle } = props;

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation("landing");

  return (
    <div
      className="service-item"
      itemProp="orderedItem"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="service-icon-wrapper">
        <Image src={src} alt={t(title)} layout="fill" />
      </div>
      <Title as="h6" itemProp="title" className="mb-2">
        {t(title)}
      </Title>
      <Text size="description" center itemProp="description">
        {t(subtitle)}
      </Text>
    </div>
  );
};

export default ServiceView;
