import { MdAlternateEmail } from 'react-icons/md';

import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { EmailShareButton } from 'next-share';

import { ShareIcons } from '../styles';

type Props = {
  url: string;
};

export const EmailShare = ({ url }: Props) => {
  return (
    <span>
      <EmailShareButton url={url}>
        <ShareIcons>
          <MdAlternateEmail size={20} title="Share with Telegram" />
        </ShareIcons>
      </EmailShareButton>
      <Spacing vertical={3} />
      <Text size={12}>Email</Text>
    </span>
  );
};
