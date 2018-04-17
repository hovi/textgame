'use babel';

import TextgameView from './textgame-view';
import { CompositeDisposable } from 'atom';
import tg from "./txt/textgame";

let GameValidator = tg.eu.karelhovorka.textgame.core.util.GameValidator;
let GameConverter = tg.eu.karelhovorka.textgame.core.util.GameConverter;

export default {

  textgameView: null,
  modalPanel: null,
  subscriptions: null,
  markers: [],

  activate(state) {
    this.textgameView = new TextgameView(state.textgameViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.textgameView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'textgame:primarec': () => this.primarec(),
      'textgame:myslenka': () => this.myslenka(),
      'textgame:validate': () => this.validate(),
    }));
    this.subscriptions.add(atom.workspace.observeTextEditors(textEditor => {
      this.subscriptions.add(textEditor.onDidSave(this.handleDidSave.bind(this)));
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.textgameView.destroy();
  },

  handleDidSave(event) {
    this.validate();
  },

  serialize() {
    return {
      textgameViewState: this.textgameView.serialize()
    };
  },

  primarec() {
    this.quote("primarec")
  },

  myslenka() {
    this.quote("myslenka")
  },

  quote(elementName) {
    const person = "kiki";
    let editor
     if (editor = atom.workspace.getActiveTextEditor()) {
       let selection = editor.getSelectedText()
       let index = selection.search(/["'„“]/) + 17;
       let quoted = selection.replace(/["'„“]/, "<" + elementName +" osoba='" + person + "'>");
       quoted = quoted.replace(/["„“]/, "</"+ elementName +">");
       if (quoted === selection) {
         return;
       }
       let ranges = editor.getSelectedScreenRanges()[0];
       let selectionBegin = ranges.start;
       if (ranges.start.row >= ranges.end.row && ranges.start.column > ranges.end.column) {
         selectionBegin = ranges.end;
       }
       editor.insertText(quoted);
       editor.setCursorScreenPosition([selectionBegin.row, selectionBegin.column + index]);
       editor.selectRight(person.length);
     }

  },

  validate() {
    console.log("validate")
    this.clearMarkers();
    let editor
     if (editor = atom.workspace.getActiveTextEditor()) {
       if (!editor.getPath().endsWith("txt")) {
         console.log("not txt")
         return
       }
       let converter = new GameConverter
       try {
         let gameConfig = converter.convert(editor.getText());
          let validator = new GameValidator(gameConfig);
          validator.validate();
         console.log("Vše ok :)");
       } catch (e) {
         console.log(e);
         if (e.index || e.index === 0) {
           this.markLine(e.index, e.line, e.message);
         } else {
           alert(e.message)
         }
       }
     }
  },

  markLine(index, line, message) {
    console.log("Marking line " + index + " with message: " + message);
    let editor
     if (editor = atom.workspace.getActiveTextEditor()) {
      var marker = editor.markScreenPosition([index, 0])
      editor.decorateMarker(marker, {type: "line", class: "txt-error", line: index, overlay: message})
      editor.setCursorScreenPosition([index, 0]);
      this.markers.push(marker);
      const editorView = atom.views.getView(editor);
      const lineNumberEl = editorView.querySelector('body /deep/ .line-number.cursor-line');
      atom.tooltips.add(lineNumberEl, {title: message});
      //alert(message);
    }
  },

  clearMarkers() {
    for (markerIndex in this.markers) {
      let marker = this.markers[markerIndex];
      marker.destroy();
    }
  }

};
