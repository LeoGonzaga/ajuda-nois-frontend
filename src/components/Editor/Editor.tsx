import React, { ChangeEvent, useEffect } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { BiParagraph } from 'react-icons/bi';
import { CgArrowsBreakeV } from 'react-icons/cg';
import {
  FaBold,
  FaImages,
  FaItalic,
  FaRedoAlt,
  FaStrikethrough,
  FaUndoAlt,
} from 'react-icons/fa';
import { GoListOrdered } from 'react-icons/go';
import { GrBlockQuote } from 'react-icons/gr';
import { MdFormatListBulleted } from 'react-icons/md';

import Spacing from '@components/Spacing';
import { COLORS } from '@themes/colors';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import {
  Button,
  Container,
  EditorArea,
  UploadImageContainer,
  Header,
} from './styles';

type Props = {
  showControls: boolean;
  data?: string;
};

const MenuBar = ({ editor }: any) => {
  if (!editor) {
    return null;
  }
  const addImage = () => {
    const url = window.prompt('URL');

    if (url) {
      editor.commands.setLink({
        href: url,
        target: '_blank',
      });
    } else {
      editor.commands.unsetLink();
    }
  };

  const uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const url = event.target.files![0];
    const link = URL.createObjectURL(url);
    editor.chain().focus().setImage({ src: link }).run();
  };

  return (
    <Header>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <FaBold />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <FaItalic />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <FaStrikethrough />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <BiParagraph />
      </Button>
      <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        Limpar marcadores
      </Button>

      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        h5
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        h6
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <MdFormatListBulleted />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <GoListOrdered />
      </Button>

      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <GrBlockQuote />
      </Button>

      <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
        <CgArrowsBreakeV />
      </Button>
      <Button onClick={addImage}>
        <AiOutlineLink />
      </Button>
      <Button>
        <UploadImageContainer>
          <label htmlFor="file-input">
            <FaImages />
          </label>
          <input type={'file'} id="file-input" onChange={uploadImage} />
        </UploadImageContainer>
      </Button>
      <Button onClick={() => editor.chain().focus().undo().run()}>
        <FaUndoAlt />
      </Button>
      <Button onClick={() => editor.chain().focus().redo().run()}>
        <FaRedoAlt />
      </Button>
    </Header>
  );
};

export const EditorContainer = ({ showControls, data }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit, Image, Link, Paragraph, Text],
    content: data
      ? data
      : `
      <p>
      Digite aqui...
      </p>
   
    `,
  });

  useEffect(() => {
    if (editor) {
      editor.setOptions({ editable: showControls });
    }
  }, [editor, showControls]);

  const handleSaveContent = () => {
    if (editor) {
      const html = editor.getHTML();
      console.log(html);
    }
  };

  return (
    <Container>
      {showControls && <MenuBar editor={editor} />}
      <EditorArea>
        <EditorContent editor={editor} />
      </EditorArea>
      <Spacing vertical={10} />
    </Container>
  );
};
