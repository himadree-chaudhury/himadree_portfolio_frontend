"use client";

import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  ArrowLeft,
  ArrowRight,
  Baseline,
  Bold,
  Code2,
  Columns,
  Grid,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  History,
  Italic,
  List,
  ListOrdered,
  Merge,
  Minus,
  Pilcrow,
  Quote,
  Redo,
  Rows,
  Strikethrough,
  Table,
  Trash2,
  Undo,
} from "lucide-react";
import { JSX } from "react";
import { Button } from "@/components/ui/button";

// tool definition
type Tool = {
  name: string;
  icon: JSX.Element;
  onClick: () => boolean;
  isActive?: boolean;
  disabled?: boolean;
};

// group definitions
const groups = (editor: Editor) => [
  {
    name: "Text",
    icon: <Pilcrow />,
    tools: [
      {
        name: "Heading 1",
        icon: <Heading1 />,
        onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: editor.isActive("heading", { level: 1 }),
      },
      {
        name: "Heading 2",
        icon: <Heading2 />,
        onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: editor.isActive("heading", { level: 2 }),
      },
      {
        name: "Heading 3",
        icon: <Heading3 />,
        onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
        isActive: editor.isActive("heading", { level: 3 }),
      },
      {
        name: "Paragraph",
        icon: <Pilcrow />,
        onClick: () => editor.chain().focus().setParagraph().run(),
        isActive: editor.isActive("paragraph"),
      },
      {
        name: "Blockquote",
        icon: <Quote />,
        onClick: () => editor.chain().focus().toggleBlockquote().run(),
        isActive: editor.isActive("blockquote"),
      },
      {
        name: "Code Block",
        icon: <Code2 />,
        onClick: () => editor.chain().focus().toggleCodeBlock().run(),
        isActive: editor.isActive("codeBlock"),
      },
    ] as Tool[],
  },
  {
    name: "Format",
    icon: <Baseline />,
    tools: [
      {
        name: "Bold",
        icon: <Bold />,
        onClick: () => editor.chain().focus().toggleBold().run(),
        isActive: editor.isActive("bold"),
      },
      {
        name: "Italic",
        icon: <Italic />,
        onClick: () => editor.chain().focus().toggleItalic().run(),
        isActive: editor.isActive("italic"),
      },
      {
        name: "Strikethrough",
        icon: <Strikethrough />,
        onClick: () => editor.chain().focus().toggleStrike().run(),
        isActive: editor.isActive("strike"),
      },
      {
        name: "Highlight",
        icon: <Highlighter />,
        onClick: () => editor.chain().focus().toggleHighlight().run(),
        isActive: editor.isActive("highlight"),
      },
      {
        name: "Horizontal Rule",
        icon: <Minus />,
        onClick: () => editor.chain().focus().setHorizontalRule().run(),
        isActive: editor.isActive("horizontalRule"),
      },
    ] as Tool[],
  },
  {
    name: "Lists",
    icon: <List />,
    tools: [
      {
        name: "Ordered List",
        icon: <ListOrdered />,
        onClick: () => editor.chain().focus().toggleOrderedList().run(),
        isActive: editor.isActive("orderedList"),
      },
      {
        name: "Bullet List",
        icon: <List />,
        onClick: () => editor.chain().focus().toggleBulletList().run(),
        isActive: editor.isActive("bulletList"),
      },
    ] as Tool[],
  },
  {
    name: "Align",
    icon: <AlignLeft />,
    tools: [
      {
        name: "Align Left",
        icon: <AlignLeft />,
        onClick: () => editor.chain().focus().setTextAlign("left").run(),
        isActive: editor.isActive({ textAlign: "left" }),
      },
      {
        name: "Align Center",
        icon: <AlignCenter />,
        onClick: () => editor.chain().focus().setTextAlign("center").run(),
        isActive: editor.isActive({ textAlign: "center" }),
      },
      {
        name: "Align Right",
        icon: <AlignRight />,
        onClick: () => editor.chain().focus().setTextAlign("right").run(),
        isActive: editor.isActive({ textAlign: "right" }),
      },
      {
        name: "Align Justify",
        icon: <AlignJustify />,
        onClick: () => editor.chain().focus().setTextAlign("justify").run(),
        isActive: editor.isActive({ textAlign: "justify" }),
      },
    ] as Tool[],
  },
  {
    name: "Table",
    icon: <Table />,
    tools: [
      {
        name: "Insert table",
        icon: <Table />,
        onClick: () =>
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run(),
      },
      {
        name: "Add column before",
        icon: <Columns />,
        onClick: () => editor.chain().focus().addColumnBefore().run(),
        disabled: !editor.can().addColumnBefore(),
      },
      {
        name: "Add column after",
        icon: <Columns />,
        onClick: () => editor.chain().focus().addColumnAfter().run(),
        disabled: !editor.can().addColumnAfter(),
      },
      {
        name: "Delete column",
        icon: <Trash2 />,
        onClick: () => editor.chain().focus().deleteColumn().run(),
        disabled: !editor.can().deleteColumn(),
      },
      {
        name: "Add row before",
        icon: <Rows />,
        onClick: () => editor.chain().focus().addRowBefore().run(),
        disabled: !editor.can().addRowBefore(),
      },
      {
        name: "Add row after",
        icon: <Rows />,
        onClick: () => editor.chain().focus().addRowAfter().run(),
        disabled: !editor.can().addRowAfter(),
      },
      {
        name: "Delete row",
        icon: <Trash2 />,
        onClick: () => editor.chain().focus().deleteRow().run(),
        disabled: !editor.can().deleteRow(),
      },
      {
        name: "Delete table",
        icon: <Trash2 />,
        onClick: () => editor.chain().focus().deleteTable().run(),
        disabled: !editor.can().deleteTable(),
      },
      {
        name: "Toggle header column",
        icon: <Columns />,
        onClick: () => editor.chain().focus().toggleHeaderColumn().run(),
        disabled: !editor.can().toggleHeaderColumn(),
      },
      {
        name: "Toggle header row",
        icon: <Rows />,
        onClick: () => editor.chain().focus().toggleHeaderRow().run(),
        disabled: !editor.can().toggleHeaderRow(),
      },
      {
        name: "Toggle header cell",
        icon: <Grid />,
        onClick: () => editor.chain().focus().toggleHeaderCell().run(),
        disabled: !editor.can().toggleHeaderCell(),
      },
      {
        name: "Merge or split",
        icon: <Merge />,
        onClick: () => editor.chain().focus().mergeOrSplit().run(),
        disabled: !editor.can().mergeOrSplit(),
      },
      {
        name: "Go to next cell",
        icon: <ArrowRight />,
        onClick: () => editor.chain().focus().goToNextCell().run(),
        disabled: !editor.can().goToNextCell(),
      },
      {
        name: "Go to previous cell",
        icon: <ArrowLeft />,
        onClick: () => editor.chain().focus().goToPreviousCell().run(),
        disabled: !editor.can().goToPreviousCell(),
      },
    ] as Tool[],
  },
  {
    name: "History",
    icon: <History />,
    tools: [
      {
        name: "Undo",
        icon: <Undo />,
        onClick: () => editor.chain().focus().undo().run(),
      },
      {
        name: "Redo",
        icon: <Redo />,
        onClick: () => editor.chain().focus().redo().run(),
      },
    ] as Tool[],
  },
];

const TiptapToolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  return (
    <div className="border rounded-t-md border-b-0 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2 py-2 flex gap-3">
      {groups(editor).map((group, i) => (
        <HoverCard key={i} openDelay={50} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button type="button" variant="outline" size="sm">
              {group.icon}
              <span className="text-sm">{group.name}</span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent side="bottom" className="flex flex-wrap gap-1 p-2">
            {group.tools.map((tool, j) => (
              <Tooltip key={j}>
                <TooltipTrigger asChild>
                  <Toggle
                    onClick={tool.onClick}
                    disabled={tool?.disabled}
                    className={tool?.isActive ? "is-active" : ""}
                  >
                    {tool.icon}
                  </Toggle>
                </TooltipTrigger>
                <TooltipContent>{tool.name}</TooltipContent>
              </Tooltip>
            ))}
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};

export default TiptapToolbar;
