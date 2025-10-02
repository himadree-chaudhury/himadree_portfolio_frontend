import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Highlight from "@tiptap/extension-highlight";
import { TableKit } from "@tiptap/extension-table";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { CharacterCount } from "@tiptap/extensions";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { all, createLowlight } from "lowlight";
import TiptapToolbar from "./TiptapToolbar";

const lowlight = createLowlight(all);

const Tiptap = ({
  description,
  onChange,
}: {
  description: string;
  onChange: (description: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        blockquote: {
          HTMLAttributes: {
            class: "border-l-4 border-slate-300 pl-4 italic text-slate-600",
          },
        },
        strike: {
          HTMLAttributes: {
            class: "line-through",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-6",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-6",
          },
        },
        horizontalRule: {
          HTMLAttributes: {
            class: "border-slate-900 dark:border-slate-100",
          },
        },
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Highlight,
      Typography,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TableKit.configure({
        table: { resizable: true },
      }),
      CharacterCount,
    ],
    content: description,
    editorProps: {
      attributes: {
        class:
          "rounded-b-md border border-slate-200 p-4 focus:outline-none focus:ring-2 focus:ring-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 min-h-[200px] ",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
    immediatelyRender: false,
  });

  const characterCountState = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        characterCount: ctx.editor?.storage.characterCount.characters(),
      };
    },
  });
  const characterCount = characterCountState?.characterCount;

  return (
    <div className="relative">
      <TiptapToolbar editor={editor} />
      <EditorContent
        editor={editor}
        className="tiptap prose dark:prose-invert"
      />
      <p className="absolute bottom-2 right-2 text-sm text-slate-500">
        {characterCount} Characters
      </p>
    </div>
  );
};

export default Tiptap;
