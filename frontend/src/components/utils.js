import { Editor, Transforms, Text } from "slate";
export const toggleBoldMark = (editor) => {
    const isActive = isBoldActive(editor);
    Transforms.setNodes(
      editor,
      { bold: !isActive },
      { match: (n) => Text.isText(n), split: true }
    );
  };
  
  export const isBoldActive = (editor) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.bold === true,
      universal: true,
    });
    return !!match;
  };
  