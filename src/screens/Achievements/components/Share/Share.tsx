import { FaWhatsapp } from 'react-icons/fa';
import { FiTwitter, FiLinkedin } from 'react-icons/fi';
import { IoMdCopy } from 'react-icons/io';
import { MdAlternateEmail } from 'react-icons/md';

import Flex from '@components/Flex';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import {
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from 'next-share';
import { useRouter } from 'next/router';

import { EmailShare } from './icons/EmailShare';
import { FacebookShare } from './icons/FacebookShare';
import { LinkedinShare } from './icons/LinkedinShare';
import { TelegramShare } from './icons/TelegramShare';
import { TwitterShare } from './icons/TwitterShare';
import { WhatsappShare } from './icons/WhatsappShare';
import { Container, ShareIcons } from './styles';

export const Share = () => {
  const { pathname } = useRouter();
  const url = `http://localhost:3000${pathname}`;

  return (
    <Container>
      <Text size={14} bold color={COLORS.TEXT}>
        Compartilhar com
      </Text>

      {/* Ícones */}
      <span>
        <Flex direction="row" justify="space-around">
          <FacebookShare url={url} />
          <TelegramShare url={url} />
          <TwitterShare url={url} />
          <WhatsappShare url={url} />
          <LinkedinShare url={url} />
          <EmailShare url={url} />
        </Flex>
      </span>

      <Text size={12} color={COLORS.TEXT} center>
        Ou compartilhe com um link
      </Text>

      <button onClick={() => navigator.clipboard.writeText(url)}>
        <Text size={14} color={COLORS.TEXT}>
          {url}
        </Text>
        <IoMdCopy size={22} className="active" />
      </button>
    </Container>
  );
};
