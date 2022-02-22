import { FaWhatsapp } from 'react-icons/fa';

import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { WhatsappShareButton } from 'next-share';

import { ShareIcons } from '../styles';

type Props = {
  url: string;
};

export const WhatsappShare = ({ url }: Props) => {
  return (
    <span>
      <WhatsappShareButton url={url}>
        <ShareIcons>
          <FaWhatsapp size={20} title="Share with Telegram" />
        </ShareIcons>
      </WhatsappShareButton>
      <Spacing vertical={3} />
      <Text size={12}>Whatsapp</Text>
    </span>
  );
};
