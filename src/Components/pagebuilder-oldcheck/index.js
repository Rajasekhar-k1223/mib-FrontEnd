import { GrapesjsReact } from "grapesjs-react";
//import "grapesjs-preset-newsletter";
import "grapesjs-preset-webpage";
import "grapesjs-plugin-forms";
import thePlugin from "grapesjs-plugin-export";
import pluginTooltip from "grapesjs-tooltip";

export const Primary = () => {
  return (
    <GrapesjsReact
      id="grapesjs-react"
      styleManager={[]}
      plugins={[
        "gjs-preset-webpage",
        "gjs-blocks-basic",
        "grapesjs-plugin-export",
        (editor) => thePlugin(editor, {}),

        (editor) =>
          pluginTooltip(editor, {
            /* options */
          }),
      ]}
      onInit={(editor) => {
        // console.log(editor.getProjectData());
        editor.Panels.getButton("options", "sw-visibility").set("active", true);
        localStorage.clear();
        window.editor = editor;
      }}
      // onDestroy={(editor) => {
      //   window.editor = editor;
      // }}
    />
  );
};
