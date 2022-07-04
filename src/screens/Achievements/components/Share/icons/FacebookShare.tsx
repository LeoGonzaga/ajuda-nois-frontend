import { FiFacebook } from 'react-icons/fi';

import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { FacebookShareButton } from 'next-share';

import { ShareIcons } from '../styles';

type Props = {
  url: string;
};

export const FacebookShare = ({ url }: Props): JSX.Element => {
  return (
    <span>
      <FacebookShareButton url={url}>
        <ShareIcons>
          <FiFacebook size={35} title="Share with Facebook" />
        </ShareIcons>
      </FacebookShareButton>
      <Spacing vertical={3} />
      <Text size={14}>Facebook</Text>
    </span>
  );
};
