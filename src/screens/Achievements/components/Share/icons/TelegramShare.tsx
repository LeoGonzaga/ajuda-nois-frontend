import { FaRegPaperPlane } from 'react-icons/fa';

import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { TelegramShareButton } from 'next-share';

import { ShareIcons } from '../styles';

type Props = {
  url: string;
};

export const TelegramShare = ({ url }: Props): JSX.Element => {
  return (
    <span>
      <TelegramShareButton url={url}>
        <ShareIcons>
          <FaRegPaperPlane size={20} title="Share with Telegram" />
        </ShareIcons>
      </TelegramShareButton>
      <Spacing vertical={3} />
      <Text size={12}>Telegram</Text>
    </span>
  );
};
