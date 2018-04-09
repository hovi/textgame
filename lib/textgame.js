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
      'textgame:toggle': () => this.toggle(),
      'textgame:validate': () => this.validate()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.textgameView.destroy();
  },

  serialize() {
    return {
      textgameViewState: this.textgameView.serialize()
    };
  },

  toggle() {
    let editor
     if (editor = atom.workspace.getActiveTextEditor()) {
       let selection = editor.getSelectedText()
       let reversed = selection.split('').reverse().join('')
       editor.insertText(reversed)
       this.clearMarkers();
     }

  },

  validate() {
    let editor
     if (editor = atom.workspace.getActiveTextEditor()) {
       //this.markLine(77, "error")
       let converter = new GameConverter();
       try {
         converter.convert(editor.getText());
         alert("Vše ok :)");
       } catch (e) {
         console.log(e);
         if (e.index || e.index === 0) {
           this.markLine(e.index, e.line, e.message);
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
