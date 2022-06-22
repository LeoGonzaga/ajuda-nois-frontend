import { FiTwitter } from 'react-icons/fi';

import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { TwitterShareButton } from 'next-share';

import { ShareIcons } from '../styles';

type Props = {
  url: string;
};

export const TwitterShare = ({ url }: Props): JSX.Element => {
  return (
    <span>
      <TwitterShareButton url={url}>
        <ShareIcons>
          <FiTwitter size={35} title="Share with Telegram" />
        </ShareIcons>
      </TwitterShareButton>
      <Spacing vertical={3} />
      <Text size={14}>Twitter</Text>
    </span>
  );
};
