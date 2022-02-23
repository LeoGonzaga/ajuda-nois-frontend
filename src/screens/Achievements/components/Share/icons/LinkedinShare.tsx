import { FiLinkedin } from 'react-icons/fi';

import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { LinkedinShareButton } from 'next-share';

import { ShareIcons } from '../styles';

type Props = {
  url: string;
};

export const LinkedinShare = ({ url }: Props) => {
  return (
    <span>
      <LinkedinShareButton url={url}>
        <ShareIcons>
          <FiLinkedin size={20} title="Share with Telegram" />
        </ShareIcons>
      </LinkedinShareButton>
      <Spacing vertical={3} />
      <Text size={12}>LinkedIn</Text>
    </span>
  );
};
