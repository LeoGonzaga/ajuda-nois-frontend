import { FaWhatsapp, FaRegPaperPlane } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { IoMdCopy } from 'react-icons/io';
import { MdAlternateEmail } from 'react-icons/md';

import Flex from '@components/Flex';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from 'next-share';
import { useRouter } from 'next/router';

import { Container, ShareIcons } from './styles';

export const Share = () => {
  const { pathname } = useRouter();

  return (
    <Container>
      <Text size={14} bold color={COLORS.TEXT}>
        Compartilhar com
      </Text>

      {/* Ícones */}
      <span>
        <Flex direction="row" justify="space-between">
          {/* Facebook */}
          <span>
            <FacebookShareButton url={`http://localhost:3000${pathname}`}>
              <ShareIcons>
                <FiFacebook
                  size={20}
                  title="Share with Facebook"
                  className="active"
                />
              </ShareIcons>
            </FacebookShareButton>
            <Text size={12}>Facebook</Text>
          </span>

          {/* Telegram */}
          <span>
            <TelegramShareButton url={`http://localhost:3000${pathname}`}>
              <ShareIcons>
                <FaRegPaperPlane
                  size={20}
                  title="Share with Telegram"
                  className="active"
                />
              </ShareIcons>
            </TelegramShareButton>
            <Text size={12}>Telegram</Text>
          </span>

          {/* Twitter */}
          <span>
            <TwitterShareButton url={`http://localhost:3000${pathname}`}>
              <ShareIcons>
                <FiTwitter
                  size={20}
                  title="Share with Telegram"
                  className="active"
                />
              </ShareIcons>
            </TwitterShareButton>
            <Text size={12}>Twitter</Text>
          </span>

          {/* Whatsapp */}
          <span>
            <WhatsappShareButton url={`http://localhost:3000${pathname}`}>
              <ShareIcons>
                <FaWhatsapp
                  size={20}
                  title="Share with Telegram"
                  className="active"
                />
              </ShareIcons>
            </WhatsappShareButton>
            <Text size={12}>Whatsapp</Text>
          </span>

          {/* Linkedin */}
          <span>
            <LinkedinShareButton url={`http://localhost:3000${pathname}`}>
              <ShareIcons>
                <FiLinkedin
                  size={20}
                  title="Share with Telegram"
                  className="active"
                />
              </ShareIcons>
            </LinkedinShareButton>
            <Text size={12}>LinkedIn</Text>
          </span>

          {/* Email */}
          <span>
            <EmailShareButton url={`http://localhost:3000${pathname}`}>
              <ShareIcons>
                <MdAlternateEmail
                  size={20}
                  title="Share with Telegram"
                  className="active"
                />
              </ShareIcons>
            </EmailShareButton>
            <Text size={12}>Email</Text>
          </span>
        </Flex>
      </span>

      <Text size={12} color={COLORS.TEXT} center>
        Or share with link
      </Text>

      <button
        onClick={() =>
          navigator.clipboard.writeText(`http://localhost:3000${pathname}`)
        }
      >
        <Text size={14} color={COLORS.TEXT}>
          http://localhost:3000{pathname}
        </Text>
        <IoMdCopy size={22} className="active" />
      </button>
    </Container>
  );
};
