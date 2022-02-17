import React, { ChangeEvent, useCallback } from 'react';

import Image from '@tiptap/extension-image';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { Button, Container, EditorArea } from './styles';

const MenuBar = ({ editor }: any) => {
  if (!editor) {
    return null;
  }
  const addImage = () => {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const url = event.target.files![0];
    const link = URL.createObjectURL(url);
    editor.chain().focus().setImage({ src: link }).run();
    const html = editor.getHTML();
    console.log('aaaaaaaaaa', html);
  };

  return (
    <>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        B
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        I
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        strike
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        code
      </Button>
      <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
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
        bullet list
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        ordered list
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        blockquote
      </Button>
      <Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </Button>
      <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </Button>
      <Button onClick={addImage}>setImage</Button>

      <input type={'file'} onChange={uploadImage} />
      <Button onClick={() => editor.chain().focus().undo().run()}>undo</Button>
      <Button onClick={() => editor.chain().focus().redo().run()}>redo</Button>
    </>
  );
};

export const EditorContainer = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: `
      <h2>
       Olá! Para começar, basta clicar nessa frase
      </h2>
   
    `,
  });

  if (editor) {
    const html = editor.getHTML();
    console.log(html);
  }

  return (
    <Container>
      <MenuBar editor={editor} />
      <EditorArea>
        <EditorContent editor={editor} />
      </EditorArea>
    </Container>
  );
};
