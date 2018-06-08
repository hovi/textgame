(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'tg-common'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('tg-common'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'textgame-core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'textgame-core'.");
    }
    if (typeof this['tg-common'] === 'undefined') {
      throw new Error("Error loading module 'textgame-core'. Its dependency 'tg-common' was not found. Please, check whether 'tg-common' is loaded prior to 'textgame-core'.");
    }
    root['textgame-core'] = factory(typeof this['textgame-core'] === 'undefined' ? {} : this['textgame-core'], kotlin, this['tg-common']);
  }
}(this, function (_, Kotlin, $module$tg_common) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var throwCCE = Kotlin.throwCCE;
  var itemsEqual = $module$tg_common.eu.karelhovorka.util.itemsEqual_rckbjs$;
  var equals = Kotlin.equals;
  var itemsHashCode = $module$tg_common.eu.karelhovorka.util.itemsHashCode_4b5429$;
  var hashCode = Kotlin.hashCode;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var toString = Kotlin.toString;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var util = $module$tg_common.eu.karelhovorka.util;
  var CharSequence = Kotlin.kotlin.CharSequence;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var fixBOM = $module$tg_common.eu.karelhovorka.util.fixBOM_pdl1vz$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Exception = Kotlin.kotlin.Exception;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_us0mfu$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var getOrThrow = $module$tg_common.eu.karelhovorka.util.getOrThrow_t9ocha$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var contains_0 = Kotlin.kotlin.collections.contains_mjy6jw$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var addUnique = $module$tg_common.eu.karelhovorka.util.addUnique_dwdffb$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  EndType.prototype = Object.create(Enum.prototype);
  EndType.prototype.constructor = EndType;
  FlagType.prototype = Object.create(Enum.prototype);
  FlagType.prototype.constructor = FlagType;
  IncorrectLineException.prototype = Object.create(Exception.prototype);
  IncorrectLineException.prototype.constructor = IncorrectLineException;
  MoveException.prototype = Object.create(Exception.prototype);
  MoveException.prototype.constructor = MoveException;
  StateException.prototype = Object.create(Exception.prototype);
  StateException.prototype.constructor = StateException;
  function Chapter(id, name, categories, theme, flagGroups) {
    if (categories === void 0) {
      categories = [];
    }
    if (theme === void 0)
      theme = null;
    if (flagGroups === void 0) {
      flagGroups = [];
    }
    this.id = id;
    this.name = name;
    this.categories = categories;
    this.theme = theme;
    this.flagGroups = flagGroups;
  }
  Chapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Chapter',
    interfaces: []
  };
  Chapter.prototype.component1 = function () {
    return this.id;
  };
  Chapter.prototype.component2 = function () {
    return this.name;
  };
  Chapter.prototype.component3 = function () {
    return this.categories;
  };
  Chapter.prototype.component4 = function () {
    return this.theme;
  };
  Chapter.prototype.component5 = function () {
    return this.flagGroups;
  };
  Chapter.prototype.copy_n2ltd0$ = function (id, name, categories, theme, flagGroups) {
    return new Chapter(id === void 0 ? this.id : id, name === void 0 ? this.name : name, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme, flagGroups === void 0 ? this.flagGroups : flagGroups);
  };
  Chapter.prototype.toString = function () {
    return 'Chapter(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + (', flagGroups=' + Kotlin.toString(this.flagGroups)) + ')';
  };
  Chapter.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagGroups) | 0;
    return result;
  };
  Chapter.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.flagGroups, other.flagGroups)))));
  };
  function EndType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function EndType_initFields() {
    EndType_initFields = function () {
    };
    EndType$NONE_instance = new EndType('NONE', 0);
    EndType$LOSE_instance = new EndType('LOSE', 1);
    EndType$WIN_instance = new EndType('WIN', 2);
    EndType$UNFINISHED_instance = new EndType('UNFINISHED', 3);
    EndType$MISSING_CHAPTER_instance = new EndType('MISSING_CHAPTER', 4);
  }
  var EndType$NONE_instance;
  function EndType$NONE_getInstance() {
    EndType_initFields();
    return EndType$NONE_instance;
  }
  var EndType$LOSE_instance;
  function EndType$LOSE_getInstance() {
    EndType_initFields();
    return EndType$LOSE_instance;
  }
  var EndType$WIN_instance;
  function EndType$WIN_getInstance() {
    EndType_initFields();
    return EndType$WIN_instance;
  }
  var EndType$UNFINISHED_instance;
  function EndType$UNFINISHED_getInstance() {
    EndType_initFields();
    return EndType$UNFINISHED_instance;
  }
  var EndType$MISSING_CHAPTER_instance;
  function EndType$MISSING_CHAPTER_getInstance() {
    EndType_initFields();
    return EndType$MISSING_CHAPTER_instance;
  }
  EndType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EndType',
    interfaces: [Enum]
  };
  function EndType$values() {
    return [EndType$NONE_getInstance(), EndType$LOSE_getInstance(), EndType$WIN_getInstance(), EndType$UNFINISHED_getInstance(), EndType$MISSING_CHAPTER_getInstance()];
  }
  EndType.values = EndType$values;
  function EndType$valueOf(name) {
    switch (name) {
      case 'NONE':
        return EndType$NONE_getInstance();
      case 'LOSE':
        return EndType$LOSE_getInstance();
      case 'WIN':
        return EndType$WIN_getInstance();
      case 'UNFINISHED':
        return EndType$UNFINISHED_getInstance();
      case 'MISSING_CHAPTER':
        return EndType$MISSING_CHAPTER_getInstance();
      default:throwISE('No enum constant eu.karelhovorka.textgame.core.bo.EndType.' + name);
    }
  }
  EndType.valueOf_61zpoe$ = EndType$valueOf;
  function FlagGroup(name, flags, type) {
    this.name = name;
    this.flags = flags;
    this.type = type;
  }
  FlagGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlagGroup',
    interfaces: []
  };
  FlagGroup.prototype.component1 = function () {
    return this.name;
  };
  FlagGroup.prototype.component2 = function () {
    return this.flags;
  };
  FlagGroup.prototype.component3 = function () {
    return this.type;
  };
  FlagGroup.prototype.copy_j741v2$ = function (name, flags, type) {
    return new FlagGroup(name === void 0 ? this.name : name, flags === void 0 ? this.flags : flags, type === void 0 ? this.type : type);
  };
  FlagGroup.prototype.toString = function () {
    return 'FlagGroup(name=' + Kotlin.toString(this.name) + (', flags=' + Kotlin.toString(this.flags)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  FlagGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  FlagGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.type, other.type)))));
  };
  function FlagType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FlagType_initFields() {
    FlagType_initFields = function () {
    };
    FlagType$AT_LEAST_ONE_instance = new FlagType('AT_LEAST_ONE', 0);
    FlagType$EXACTLY_ONE_instance = new FlagType('EXACTLY_ONE', 1);
  }
  var FlagType$AT_LEAST_ONE_instance;
  function FlagType$AT_LEAST_ONE_getInstance() {
    FlagType_initFields();
    return FlagType$AT_LEAST_ONE_instance;
  }
  var FlagType$EXACTLY_ONE_instance;
  function FlagType$EXACTLY_ONE_getInstance() {
    FlagType_initFields();
    return FlagType$EXACTLY_ONE_instance;
  }
  FlagType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlagType',
    interfaces: [Enum]
  };
  function FlagType$values() {
    return [FlagType$AT_LEAST_ONE_getInstance(), FlagType$EXACTLY_ONE_getInstance()];
  }
  FlagType.values = FlagType$values;
  function FlagType$valueOf(name) {
    switch (name) {
      case 'AT_LEAST_ONE':
        return FlagType$AT_LEAST_ONE_getInstance();
      case 'EXACTLY_ONE':
        return FlagType$EXACTLY_ONE_getInstance();
      default:throwISE('No enum constant eu.karelhovorka.textgame.core.bo.FlagType.' + name);
    }
  }
  FlagType.valueOf_61zpoe$ = FlagType$valueOf;
  function GameCompletion(stateIds, moveIds) {
    if (stateIds === void 0) {
      stateIds = [];
    }
    if (moveIds === void 0) {
      moveIds = [];
    }
    this.stateIds = stateIds;
    this.moveIds = moveIds;
  }
  GameCompletion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameCompletion',
    interfaces: []
  };
  GameCompletion.prototype.component1 = function () {
    return this.stateIds;
  };
  GameCompletion.prototype.component2 = function () {
    return this.moveIds;
  };
  GameCompletion.prototype.copy_7xf64s$ = function (stateIds, moveIds) {
    return new GameCompletion(stateIds === void 0 ? this.stateIds : stateIds, moveIds === void 0 ? this.moveIds : moveIds);
  };
  GameCompletion.prototype.toString = function () {
    return 'GameCompletion(stateIds=' + Kotlin.toString(this.stateIds) + (', moveIds=' + Kotlin.toString(this.moveIds)) + ')';
  };
  GameCompletion.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.stateIds) | 0;
    result = result * 31 + Kotlin.hashCode(this.moveIds) | 0;
    return result;
  };
  GameCompletion.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.stateIds, other.stateIds) && Kotlin.equals(this.moveIds, other.moveIds)))));
  };
  function GameConfig(startId, states, moves, chapters) {
    GameConfig$Companion_getInstance();
    this.startId = startId;
    this.states = states;
    this.moves = moves;
    this.chapters = chapters;
  }
  function GameConfig$Companion() {
    GameConfig$Companion_instance = this;
  }
  GameConfig$Companion.prototype.fromText_61zpoe$ = function (text) {
    return (new GameConverter()).convert(text);
  };
  GameConfig$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameConfig$Companion_instance = null;
  function GameConfig$Companion_getInstance() {
    if (GameConfig$Companion_instance === null) {
      new GameConfig$Companion();
    }
    return GameConfig$Companion_instance;
  }
  GameConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameConfig',
    interfaces: []
  };
  GameConfig.prototype.component1 = function () {
    return this.startId;
  };
  GameConfig.prototype.component2 = function () {
    return this.states;
  };
  GameConfig.prototype.component3 = function () {
    return this.moves;
  };
  GameConfig.prototype.component4 = function () {
    return this.chapters;
  };
  GameConfig.prototype.copy_ay9cdj$ = function (startId, states, moves, chapters) {
    return new GameConfig(startId === void 0 ? this.startId : startId, states === void 0 ? this.states : states, moves === void 0 ? this.moves : moves, chapters === void 0 ? this.chapters : chapters);
  };
  GameConfig.prototype.toString = function () {
    return 'GameConfig(startId=' + Kotlin.toString(this.startId) + (', states=' + Kotlin.toString(this.states)) + (', moves=' + Kotlin.toString(this.moves)) + (', chapters=' + Kotlin.toString(this.chapters)) + ')';
  };
  GameConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.startId) | 0;
    result = result * 31 + Kotlin.hashCode(this.states) | 0;
    result = result * 31 + Kotlin.hashCode(this.moves) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapters) | 0;
    return result;
  };
  GameConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.startId, other.startId) && Kotlin.equals(this.states, other.states) && Kotlin.equals(this.moves, other.moves) && Kotlin.equals(this.chapters, other.chapters)))));
  };
  function GameState(flags, currentStateId, variables, currentTheme) {
    this.flags = flags;
    this.currentStateId = currentStateId;
    this.variables = variables;
    this.currentTheme = currentTheme;
  }
  GameState.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, GameState) ? tmp$_0 : throwCCE();
    if (!itemsEqual(this.flags, other.flags))
      return false;
    if (!equals(this.currentStateId, other.currentStateId))
      return false;
    if (!equals(this.variables, other.variables))
      return false;
    if (!equals(this.currentTheme, other.currentTheme))
      return false;
    return true;
  };
  GameState.prototype.hashCode = function () {
    var tmp$, tmp$_0;
    var result = itemsHashCode(this.flags);
    result = (31 * result | 0) + hashCode(this.currentStateId) | 0;
    result = (31 * result | 0) + hashCode(this.variables) | 0;
    result = (31 * result | 0) + ((tmp$_0 = (tmp$ = this.currentTheme) != null ? hashCode(tmp$) : null) != null ? tmp$_0 : 0) | 0;
    return result;
  };
  GameState.prototype.toString = function () {
    return 'GameState(flags=' + toList(this.flags).toString() + ", currentStateId='" + this.currentStateId + "', variables=" + this.variables + ', currentTheme=' + toString(this.currentTheme) + ')';
  };
  GameState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameState',
    interfaces: []
  };
  GameState.prototype.component1 = function () {
    return this.flags;
  };
  GameState.prototype.component2 = function () {
    return this.currentStateId;
  };
  GameState.prototype.component3 = function () {
    return this.variables;
  };
  GameState.prototype.component4 = function () {
    return this.currentTheme;
  };
  GameState.prototype.copy_smj430$ = function (flags, currentStateId, variables, currentTheme) {
    return new GameState(flags === void 0 ? this.flags : flags, currentStateId === void 0 ? this.currentStateId : currentStateId, variables === void 0 ? this.variables : variables, currentTheme === void 0 ? this.currentTheme : currentTheme);
  };
  var prefix;
  function isInteractive($receiver) {
    if ($receiver.length === 1 && $receiver[0].isAutoMove()) {
      return false;
    }
    if ($receiver.length === 0) {
      return false;
    }
    return true;
  }
  function isInteractive_0($receiver) {
    if ($receiver.size === 1 && $receiver.get_za3lpa$(0).isAutoMove()) {
      return false;
    }
    if ($receiver.isEmpty()) {
      return false;
    }
    return true;
  }
  function removeNotInteractive($receiver) {
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!element.isAutoMove())
        destination.add_11rb$(element);
    }
    return destination;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function checkMultipleNonInteractive($receiver) {
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.isAutoMove())
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(item.id);
    }
    var auto = destination_0;
    var destination_1 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      if (!element_0.isAutoMove())
        destination_1.add_11rb$(element_0);
    }
    var destination_2 = ArrayList_init(collectionSizeOrDefault(destination_1, 10));
    var tmp$_2;
    tmp$_2 = destination_1.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_2.add_11rb$(item_0.id);
    }
    var nonAuto = destination_2;
    if (auto.size > 1 && nonAuto.isEmpty()) {
      throw IllegalStateException_init('V\xEDc neinteraktivn\xEDch tah\u016F najednou ' + auto + ', to je pr\u016Fser');
    }
  }
  function Move(id, caption, image, illustration, text, selfConsuming, targetId, flags, flagsRequired, flagsDisallowing, categories, theme, variables) {
    if (caption === void 0)
      caption = null;
    if (image === void 0)
      image = null;
    if (illustration === void 0)
      illustration = null;
    if (text === void 0)
      text = null;
    if (selfConsuming === void 0)
      selfConsuming = true;
    if (flags === void 0) {
      flags = [];
    }
    if (flagsRequired === void 0) {
      flagsRequired = [];
    }
    if (flagsDisallowing === void 0) {
      flagsDisallowing = [];
    }
    if (categories === void 0) {
      categories = [];
    }
    if (theme === void 0)
      theme = null;
    if (variables === void 0) {
      variables = [];
    }
    this.id = id;
    this.caption = caption;
    this.image = image;
    this.illustration = illustration;
    this.text = text;
    this.selfConsuming = selfConsuming;
    this.targetId = targetId;
    this.flags = flags;
    this.flagsRequired = flagsRequired;
    this.flagsDisallowing = flagsDisallowing;
    this.categories = categories;
    this.theme = theme;
    this.variables = variables;
  }
  Move.prototype.isAutoMove = function () {
    return this.caption == null && this.image == null;
  };
  Move.prototype.hasContent = function () {
    return this.text != null || this.illustration != null;
  };
  Move.prototype.acrossChapters = function () {
    var $receiver = this.id;
    var movePrefix = prefix.replace_x2uqeu$($receiver, '$1');
    var $receiver_0 = this.targetId;
    var targetPrefix = prefix.replace_x2uqeu$($receiver_0, '$1');
    return !equals(movePrefix, targetPrefix);
  };
  Move.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Move',
    interfaces: []
  };
  Move.prototype.component1 = function () {
    return this.id;
  };
  Move.prototype.component2 = function () {
    return this.caption;
  };
  Move.prototype.component3 = function () {
    return this.image;
  };
  Move.prototype.component4 = function () {
    return this.illustration;
  };
  Move.prototype.component5 = function () {
    return this.text;
  };
  Move.prototype.component6 = function () {
    return this.selfConsuming;
  };
  Move.prototype.component7 = function () {
    return this.targetId;
  };
  Move.prototype.component8 = function () {
    return this.flags;
  };
  Move.prototype.component9 = function () {
    return this.flagsRequired;
  };
  Move.prototype.component10 = function () {
    return this.flagsDisallowing;
  };
  Move.prototype.component11 = function () {
    return this.categories;
  };
  Move.prototype.component12 = function () {
    return this.theme;
  };
  Move.prototype.component13 = function () {
    return this.variables;
  };
  Move.prototype.copy_hrwrza$ = function (id, caption, image, illustration, text, selfConsuming, targetId, flags, flagsRequired, flagsDisallowing, categories, theme, variables) {
    return new Move(id === void 0 ? this.id : id, caption === void 0 ? this.caption : caption, image === void 0 ? this.image : image, illustration === void 0 ? this.illustration : illustration, text === void 0 ? this.text : text, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, targetId === void 0 ? this.targetId : targetId, flags === void 0 ? this.flags : flags, flagsRequired === void 0 ? this.flagsRequired : flagsRequired, flagsDisallowing === void 0 ? this.flagsDisallowing : flagsDisallowing, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme, variables === void 0 ? this.variables : variables);
  };
  Move.prototype.toString = function () {
    return 'Move(id=' + Kotlin.toString(this.id) + (', caption=' + Kotlin.toString(this.caption)) + (', image=' + Kotlin.toString(this.image)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', text=' + Kotlin.toString(this.text)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', targetId=' + Kotlin.toString(this.targetId)) + (', flags=' + Kotlin.toString(this.flags)) + (', flagsRequired=' + Kotlin.toString(this.flagsRequired)) + (', flagsDisallowing=' + Kotlin.toString(this.flagsDisallowing)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + (', variables=' + Kotlin.toString(this.variables)) + ')';
  };
  Move.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.caption) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.illustration) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.selfConsuming) | 0;
    result = result * 31 + Kotlin.hashCode(this.targetId) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagsRequired) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagsDisallowing) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    result = result * 31 + Kotlin.hashCode(this.variables) | 0;
    return result;
  };
  Move.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.caption, other.caption) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.targetId, other.targetId) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.flagsRequired, other.flagsRequired) && Kotlin.equals(this.flagsDisallowing, other.flagsDisallowing) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.variables, other.variables)))));
  };
  function MultiString(strings, rnd) {
    if (rnd === void 0)
      rnd = 0;
    this.strings = strings;
    this.rnd = rnd;
  }
  Object.defineProperty(MultiString.prototype, 'length', {
    get: function () {
      return this.value().length;
    }
  });
  MultiString.prototype.charCodeAt = function (index) {
    return this.value().charCodeAt(index);
  };
  MultiString.prototype.subSequence_vux9f0$ = function (startIndex, endIndex) {
    return this.value().substring(startIndex, endIndex);
  };
  MultiString.prototype.value = function () {
    return this.strings[this.rnd];
  };
  MultiString.prototype.next = function () {
    this.rnd = util.RandomUtil.nextInt_za3lpa$(this.strings.length);
  };
  MultiString.prototype.toString = function () {
    this.next();
    return this.value();
  };
  MultiString.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiString',
    interfaces: [CharSequence]
  };
  MultiString.prototype.component1 = function () {
    return this.strings;
  };
  MultiString.prototype.component2 = function () {
    return this.rnd;
  };
  MultiString.prototype.copy_h8ktwi$ = function (strings, rnd) {
    return new MultiString(strings === void 0 ? this.strings : strings, rnd === void 0 ? this.rnd : rnd);
  };
  MultiString.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.strings) | 0;
    result = result * 31 + Kotlin.hashCode(this.rnd) | 0;
    return result;
  };
  MultiString.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.strings, other.strings) && Kotlin.equals(this.rnd, other.rnd)))));
  };
  function State(id, text, illustration, chapterId, flags, moves, categories, endType, theme, background, minigame, variables) {
    if (text === void 0)
      text = null;
    if (illustration === void 0)
      illustration = null;
    if (flags === void 0) {
      flags = [];
    }
    if (moves === void 0) {
      moves = [];
    }
    if (categories === void 0) {
      categories = [];
    }
    if (endType === void 0)
      endType = EndType$NONE_getInstance();
    if (theme === void 0)
      theme = null;
    if (background === void 0) {
      background = [];
    }
    if (minigame === void 0)
      minigame = null;
    if (variables === void 0) {
      variables = [];
    }
    this.id = id;
    this.text = text;
    this.illustration = illustration;
    this.chapterId = chapterId;
    this.flags = flags;
    this.moves = moves;
    this.categories = categories;
    this.endType = endType;
    this.theme = theme;
    this.background = background;
    this.minigame = minigame;
    this.variables = variables;
  }
  State.prototype.hasContent = function () {
    return !this.isAutoMove();
  };
  State.prototype.isAutoMove = function () {
    return this.text == null && this.illustration == null && this.background == null;
  };
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  State.prototype.component1 = function () {
    return this.id;
  };
  State.prototype.component2 = function () {
    return this.text;
  };
  State.prototype.component3 = function () {
    return this.illustration;
  };
  State.prototype.component4 = function () {
    return this.chapterId;
  };
  State.prototype.component5 = function () {
    return this.flags;
  };
  State.prototype.component6 = function () {
    return this.moves;
  };
  State.prototype.component7 = function () {
    return this.categories;
  };
  State.prototype.component8 = function () {
    return this.endType;
  };
  State.prototype.component9 = function () {
    return this.theme;
  };
  State.prototype.component10 = function () {
    return this.background;
  };
  State.prototype.component11 = function () {
    return this.minigame;
  };
  State.prototype.component12 = function () {
    return this.variables;
  };
  State.prototype.copy_dcgo6q$ = function (id, text, illustration, chapterId, flags, moves, categories, endType, theme, background, minigame, variables) {
    return new State(id === void 0 ? this.id : id, text === void 0 ? this.text : text, illustration === void 0 ? this.illustration : illustration, chapterId === void 0 ? this.chapterId : chapterId, flags === void 0 ? this.flags : flags, moves === void 0 ? this.moves : moves, categories === void 0 ? this.categories : categories, endType === void 0 ? this.endType : endType, theme === void 0 ? this.theme : theme, background === void 0 ? this.background : background, minigame === void 0 ? this.minigame : minigame, variables === void 0 ? this.variables : variables);
  };
  State.prototype.toString = function () {
    return 'State(id=' + Kotlin.toString(this.id) + (', text=' + Kotlin.toString(this.text)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', chapterId=' + Kotlin.toString(this.chapterId)) + (', flags=' + Kotlin.toString(this.flags)) + (', moves=' + Kotlin.toString(this.moves)) + (', categories=' + Kotlin.toString(this.categories)) + (', endType=' + Kotlin.toString(this.endType)) + (', theme=' + Kotlin.toString(this.theme)) + (', background=' + Kotlin.toString(this.background)) + (', minigame=' + Kotlin.toString(this.minigame)) + (', variables=' + Kotlin.toString(this.variables)) + ')';
  };
  State.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.illustration) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapterId) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.moves) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.endType) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    result = result * 31 + Kotlin.hashCode(this.background) | 0;
    result = result * 31 + Kotlin.hashCode(this.minigame) | 0;
    result = result * 31 + Kotlin.hashCode(this.variables) | 0;
    return result;
  };
  State.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.moves, other.moves) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.endType, other.endType) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.background, other.background) && Kotlin.equals(this.minigame, other.minigame) && Kotlin.equals(this.variables, other.variables)))));
  };
  function endType(line, index) {
    var tmp$;
    var konec = parameterValue(line);
    switch (konec) {
      case 'prohra':
        tmp$ = EndType$LOSE_getInstance();
        break;
      case 'nedokonceno':
        tmp$ = EndType$UNFINISHED_getInstance();
        break;
      case 'vyhra':
        tmp$ = EndType$WIN_getInstance();
        break;
      default:throw new IncorrectLineException(index, line, 'Invalid endType: ' + konec);
    }
    return tmp$;
  }
  function checkParameter(line) {
    if (!GameConverter$Companion_getInstance().PARAMETER.matches_6bul2c$(line)) {
      throw RuntimeException_init('this is not parameter: ' + line);
    }
  }
  function errorIfParameter(line, index, msg) {
    if (msg === void 0)
      msg = 'Neo\u010Dek\xE1van\xFD parametr';
    if (GameConverter$Companion_getInstance().PARAMETER.matches_6bul2c$(line)) {
      throw new IncorrectLineException(index, line, msg);
    }
  }
  function moveId($receiver) {
    var id = GameConverter$Companion_getInstance().HRANA.replace_x2uqeu$($receiver, '$2');
    if (id == null || isBlank(id)) {
      return null;
    }
    return id;
  }
  function parameterValue($receiver) {
    checkParameter($receiver);
    return GameConverter$Companion_getInstance().PARAMETER.replace_x2uqeu$($receiver, '$2');
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function parameterArray($receiver) {
    checkParameter($receiver);
    var $receiver_0 = split(GameConverter$Companion_getInstance().PARAMETER.replace_x2uqeu$($receiver, '$2'), [',']);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(trim(Kotlin.isCharSequence(tmp$_0 = item) ? tmp$_0 : throwCCE()).toString());
    }
    return copyToArray(destination);
  }
  function ChapterBuilder(id, name, categories, theme, flagGroups) {
    if (id === void 0)
      id = null;
    if (name === void 0)
      name = null;
    if (categories === void 0) {
      categories = [];
    }
    if (theme === void 0)
      theme = null;
    if (flagGroups === void 0) {
      flagGroups = ArrayList_init();
    }
    this.id = id;
    this.name = name;
    this.categories = categories;
    this.theme = theme;
    this.flagGroups = flagGroups;
  }
  ChapterBuilder.prototype.parseLine_bm4lxs$ = function (line, index) {
    var tmp$;
    if (GameConverter$Companion_getInstance().FLAG_GROUP.matches_6bul2c$(line)) {
      var groupName = GameConverter$Companion_getInstance().FLAG_GROUP.replace_x2uqeu$(line, '$1');
      var groupType = GameConverter$Companion_getInstance().FLAG_GROUP.replace_x2uqeu$(line, '$2');
      switch (groupType) {
        case 'prave_jeden':
          tmp$ = FlagType$EXACTLY_ONE_getInstance();
          break;
        case 'aspon_jeden':
          tmp$ = FlagType$AT_LEAST_ONE_getInstance();
          break;
        default:throw new IncorrectLineException(index, line, 'Invalid flag type: ' + groupType);
      }
      var type = tmp$;
      var $receiver = split(GameConverter$Companion_getInstance().FLAG_GROUP.replace_x2uqeu$(line, '$3'), [',']);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1;
        destination.add_11rb$(trim(Kotlin.isCharSequence(tmp$_1 = item) ? tmp$_1 : throwCCE()).toString());
      }
      var flags = copyToArray(destination);
      this.flagGroups.add_11rb$(new FlagGroup(groupName, flags, type));
    }
    errorIfParameter(line, index);
    this.name_61zpoe$(line);
  };
  ChapterBuilder.prototype.build = function () {
    if (this.name != null) {
      return new Chapter(ensureNotNull(this.id), ensureNotNull(this.name), this.categories, this.theme, copyToArray(this.flagGroups));
    }
    throw IllegalArgumentException_init('Name not found for chapter: ' + toString(this.id));
  };
  ChapterBuilder.prototype.name_61zpoe$ = function (value) {
    this.name = value;
  };
  ChapterBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChapterBuilder',
    interfaces: [LineParser]
  };
  ChapterBuilder.prototype.component1 = function () {
    return this.id;
  };
  ChapterBuilder.prototype.component2 = function () {
    return this.name;
  };
  ChapterBuilder.prototype.component3 = function () {
    return this.categories;
  };
  ChapterBuilder.prototype.component4 = function () {
    return this.theme;
  };
  ChapterBuilder.prototype.component5 = function () {
    return this.flagGroups;
  };
  ChapterBuilder.prototype.copy_cj1p9q$ = function (id, name, categories, theme, flagGroups) {
    return new ChapterBuilder(id === void 0 ? this.id : id, name === void 0 ? this.name : name, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme, flagGroups === void 0 ? this.flagGroups : flagGroups);
  };
  ChapterBuilder.prototype.toString = function () {
    return 'ChapterBuilder(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + (', flagGroups=' + Kotlin.toString(this.flagGroups)) + ')';
  };
  ChapterBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagGroups) | 0;
    return result;
  };
  ChapterBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.flagGroups, other.flagGroups)))));
  };
  function CharSequenceBuilder() {
    this.strings = ArrayList_init();
    this.text = null;
  }
  var trimEnd = Kotlin.kotlin.text.trimEnd_gw00vp$;
  CharSequenceBuilder.prototype.build = function () {
    if (this.strings.isEmpty()) {
      return this.text;
    }
    if (this.text != null) {
      var tmp$ = this.strings;
      var $receiver = ensureNotNull(this.text);
      var tmp$_0;
      tmp$.add_11rb$(trimEnd(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString());
    }
    return new MultiString(copyToArray(this.strings));
  };
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  CharSequenceBuilder.prototype.appendFullText_6bul2c$ = function (value) {
    var tmp$;
    tmp$ = Regex_init('\n').split_905azu$(value, 0).iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      this.appendLine_61zpoe$(line);
    }
    return this;
  };
  CharSequenceBuilder.prototype.appendLine_61zpoe$ = function (value) {
    if (equals(value, '@')) {
      var tmp$ = this.strings;
      var $receiver = ensureNotNull(this.text);
      var tmp$_0;
      tmp$.add_11rb$(trimEnd(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString());
      this.text = null;
      return;
    }
    if (this.text == null) {
      this.text = value + '\n';
    }
     else {
      this.text = this.text + (value + '\n');
    }
  };
  CharSequenceBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CharSequenceBuilder',
    interfaces: []
  };
  function GameConfigBuilder(startId, states, moves, chapters) {
    if (startId === void 0)
      startId = null;
    if (states === void 0) {
      states = ArrayList_init();
    }
    if (moves === void 0) {
      moves = ArrayList_init();
    }
    if (chapters === void 0) {
      chapters = ArrayList_init();
    }
    this.startId = startId;
    this.states = states;
    this.moves = moves;
    this.chapters = chapters;
    this.gameConverterContext = new GameConverterContext();
  }
  GameConfigBuilder.prototype.build = function () {
    return new GameConfig(ensureNotNull(this.startId), copyToArray(this.states), copyToArray(this.moves), copyToArray(this.chapters));
  };
  GameConfigBuilder.prototype.addState_ktq7vf$ = function (state) {
    this.states.add_11rb$(state);
    addAll(this.moves, state.moves);
  };
  GameConfigBuilder.prototype.addStates_gnd9sg$ = function (newStates) {
    this.states.addAll_brywnq$(newStates);
    var tmp$;
    tmp$ = newStates.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      addAll(this.moves, element.moves);
    }
  };
  GameConfigBuilder.prototype.state_zhmc9d$ = function (init) {
    var stateBuilder = new StateBuilder(this.gameConverterContext, void 0, void 0, void 0, void 0, void 0, void 0, []);
    init(stateBuilder);
    var state = stateBuilder.build_pdl1vj$();
    this.addState_ktq7vf$(state);
    return state;
  };
  GameConfigBuilder.prototype.move_za6fqz$ = function (init) {
    var moveBuilder = new MoveBuilder(this.gameConverterContext);
    init(moveBuilder);
    var move = moveBuilder.build();
    this.moves.add_11rb$(move);
    return move;
  };
  GameConfigBuilder.prototype.chapter_txf90r$ = function (init) {
    var moveBuilder = new ChapterBuilder();
    init(moveBuilder);
    var move = moveBuilder.build();
    this.chapters.add_11rb$(move);
    return move;
  };
  GameConfigBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameConfigBuilder',
    interfaces: []
  };
  GameConfigBuilder.prototype.component1 = function () {
    return this.startId;
  };
  GameConfigBuilder.prototype.component2 = function () {
    return this.states;
  };
  GameConfigBuilder.prototype.component3 = function () {
    return this.moves;
  };
  GameConfigBuilder.prototype.component4 = function () {
    return this.chapters;
  };
  GameConfigBuilder.prototype.copy_6y0zj8$ = function (startId, states, moves, chapters) {
    return new GameConfigBuilder(startId === void 0 ? this.startId : startId, states === void 0 ? this.states : states, moves === void 0 ? this.moves : moves, chapters === void 0 ? this.chapters : chapters);
  };
  GameConfigBuilder.prototype.toString = function () {
    return 'GameConfigBuilder(startId=' + Kotlin.toString(this.startId) + (', states=' + Kotlin.toString(this.states)) + (', moves=' + Kotlin.toString(this.moves)) + (', chapters=' + Kotlin.toString(this.chapters)) + ')';
  };
  GameConfigBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.startId) | 0;
    result = result * 31 + Kotlin.hashCode(this.states) | 0;
    result = result * 31 + Kotlin.hashCode(this.moves) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapters) | 0;
    return result;
  };
  GameConfigBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.startId, other.startId) && Kotlin.equals(this.states, other.states) && Kotlin.equals(this.moves, other.moves) && Kotlin.equals(this.chapters, other.chapters)))));
  };
  function GameConverter() {
    GameConverter$Companion_getInstance();
    this.converterContext = new GameConverterContext();
    this.currentState_0 = null;
    this.currentMove_0 = null;
    this.currentSuperState_0 = null;
    this.currentChapter_0 = null;
    this.game_0 = new GameConfigBuilder();
    this.lineParser = this;
  }
  GameConverter.prototype.convert = function (text) {
    var tmp$;
    var index = 0;
    tmp$ = split(fixBOM(text), ['\n']).iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      try {
        var tmp$_0;
        this.parseLine_bm4lxs$(replace(trim(Kotlin.isCharSequence(tmp$_0 = line) ? tmp$_0 : throwCCE()).toString(), '-&gt;', '->'), index);
      }
       catch (e) {
        if (Kotlin.isType(e, IncorrectLineException)) {
          throw e;
        }
         else if (Kotlin.isType(e, StateException)) {
          throw new IncorrectLineException(index, line, e.msg, e);
        }
         else if (Kotlin.isType(e, Exception)) {
          throw new IncorrectLineException(index, line, void 0, e);
        }
         else
          throw e;
      }
      index = index + 1 | 0;
    }
    if (this.currentState_0 != null) {
      this.buildState();
    }
    if (this.currentMove_0 != null) {
      this.buildMove();
    }
    if (this.currentSuperState_0 != null) {
      this.buildSuperState();
    }
    this.buildChapter();
    return this.game_0.build();
  };
  GameConverter.prototype.parseLine_bm4lxs$ = function (line, index) {
    if (!startsWith(line, '#'))
      if (!equals(line, '') && !equals(line, GameConverter$Companion_getInstance().SEPARATOR)) {
        if (GameConverter$Companion_getInstance().SUPERUZEL.matches_6bul2c$(line)) {
          this.finishBuild();
          var id = parameterValue(line);
          if (this.game_0.startId == null) {
            this.game_0.startId = id;
          }
          this.converterContext.addStateId_bm4lxs$(id, index);
          this.currentSuperState_0 = new SuperStateBuilder(this.converterContext, id, void 0, void 0, void 0, void 0, ensureNotNull(this.currentChapter_0).id);
          this.lineParser = ensureNotNull(this.currentSuperState_0);
        }
         else {
          if (GameConverter$Companion_getInstance().KAPITOLA.matches_6bul2c$(line)) {
            this.finishBuild();
            var chapterId = parameterValue(line);
            this.currentChapter_0 = new ChapterBuilder(chapterId);
            this.lineParser = ensureNotNull(this.currentChapter_0);
          }
           else {
            if (GameConverter$Companion_getInstance().UZEL.matches_6bul2c$(line)) {
              this.finishBuild();
              var stateId = parameterValue(line);
              if (this.game_0.startId == null) {
                this.game_0.startId = stateId;
              }
              this.converterContext.addStateId_bm4lxs$(stateId, index);
              this.currentState_0 = new StateBuilder(this.converterContext, stateId, void 0, void 0, void 0, void 0, ensureNotNull(this.currentChapter_0).id);
              this.lineParser = ensureNotNull(this.currentState_0);
            }
             else {
              this.lineParser.parseLine_bm4lxs$(line, index);
            }
          }
        }
      }
  };
  GameConverter.prototype.finishBuild = function () {
    if (Kotlin.isType(this.lineParser, StateBuilder)) {
      this.buildState();
    }
    if (Kotlin.isType(this.lineParser, SuperStateBuilder)) {
      this.buildSuperState();
    }
    this.buildChapter();
  };
  GameConverter.prototype.buildMove = function () {
    if (this.currentMove_0 != null) {
      var move = ensureNotNull(this.currentMove_0).build();
      this.game_0.moves.add_11rb$(move);
      this.currentMove_0 = null;
    }
  };
  GameConverter.prototype.buildChapter = function () {
    if (this.currentChapter_0 != null) {
      this.game_0.chapters.add_11rb$(ensureNotNull(this.currentChapter_0).build());
    }
  };
  GameConverter.prototype.buildSuperState = function () {
    if (this.currentSuperState_0 != null) {
      var states = ensureNotNull(this.currentSuperState_0).build();
      println(states);
      this.game_0.addStates_gnd9sg$(states);
      this.currentSuperState_0 = null;
      if (this.game_0.startId == null) {
        this.game_0.startId = states.get_za3lpa$(0).id;
      }
    }
  };
  GameConverter.prototype.buildState = function () {
    if (this.currentState_0 != null) {
      if (this.game_0.startId == null) {
        this.game_0.startId = ensureNotNull(this.currentState_0).id;
      }
      var state = ensureNotNull(this.currentState_0).build_pdl1vj$();
      this.game_0.addState_ktq7vf$(state);
      this.currentState_0 = null;
    }
  };
  GameConverter.prototype.context = function () {
    return this.converterContext;
  };
  function GameConverter$Companion() {
    GameConverter$Companion_instance = this;
    this.UZEL = Regex_init('uzel=(u[0-9A-Za-z_]*)');
    this.PARAMETER = Regex_init('([a-z_]+)=(.*)');
    this.SEPARATOR = '----';
    this.HRANA = Regex_init('(hrana=|->)(h[0-9A-Za-z_]*)?');
    this.KAPITOLA = Regex_init('kapitola=(.*)');
    this.ILUSTRACE = Regex_init('ilustrace=(.*)');
    this.POZADI = Regex_init('pozadi=(.*)');
    this.KATEGORIE = 'kategorie=';
    this.KONEC = Regex_init('konec=(prohra|nedokonceno)');
    this.TEMA = Regex_init('tema=([a-zA-Z\\-0-9_{}]+)');
    this.SUPERUZEL = Regex_init('superuzel=(u[a-zA-Z\\-0-9_]+)');
    this.SUPERUZEL_SEPARATOR = '-';
    this.SUPERUZEL_SWITCH_SEPARATOR = '->';
    this.FLAG_GROUP = Regex_init('skupina\\(([0-9A-Za-z_-]*),(prave_jeden|aspon_jeden)\\)=(.*)');
    this.PRIZNAK = Regex_init('priznak=(.*)');
    this.MINIHRA = Regex_init('minihra=(.*)');
    this.VYLOUCENA = 'vyloucena=';
    this.PODMINENA = 'podminena=';
    this.POPIS = 'popis=';
    this.OBRAZEK = Regex_init('obrazek=(.*)');
    this.POZIRACI = Regex_init('poziraci=(ano|ne)');
    this.CIL = 'cil=';
  }
  GameConverter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameConverter$Companion_instance = null;
  function GameConverter$Companion_getInstance() {
    if (GameConverter$Companion_instance === null) {
      new GameConverter$Companion();
    }
    return GameConverter$Companion_instance;
  }
  GameConverter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameConverter',
    interfaces: [LineParser]
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function GameConverterContext() {
    this.lineOfState = LinkedHashMap_init();
    this.lineOfMove = LinkedHashMap_init();
  }
  GameConverterContext.prototype.addStateId_bm4lxs$ = function (state, index) {
    this.lineOfState.put_xwzc9p$(state, index);
  };
  GameConverterContext.prototype.addMoveId_bm4lxs$ = function (move, index) {
    this.lineOfMove.put_xwzc9p$(move, index);
  };
  GameConverterContext.prototype.stateLine = function (stateId) {
    return this.lineOfState.get_11rb$(stateId);
  };
  GameConverterContext.prototype.moveLine = function (moveId) {
    return this.lineOfMove.get_11rb$(moveId);
  };
  GameConverterContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameConverterContext',
    interfaces: []
  };
  function LineParser() {
  }
  LineParser.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LineParser',
    interfaces: []
  };
  function MoveBuilder(gameConverterContext, id, caption, image, illustration, text, selfConsuming, targetId, flags, flagsRequired, flagsDisallowing, categories, theme, variables) {
    if (id === void 0)
      id = null;
    if (caption === void 0)
      caption = null;
    if (image === void 0)
      image = null;
    if (illustration === void 0)
      illustration = null;
    if (text === void 0)
      text = null;
    if (selfConsuming === void 0)
      selfConsuming = true;
    if (targetId === void 0)
      targetId = null;
    if (flags === void 0)
      flags = ArrayList_init();
    if (flagsRequired === void 0)
      flagsRequired = ArrayList_init();
    if (flagsDisallowing === void 0)
      flagsDisallowing = ArrayList_init();
    if (categories === void 0) {
      categories = [];
    }
    if (theme === void 0)
      theme = null;
    if (variables === void 0) {
      variables = ArrayList_init();
    }
    this.gameConverterContext = gameConverterContext;
    this.id = id;
    this.caption = caption;
    this.image = image;
    this.illustration = illustration;
    this.text = text;
    this.selfConsuming = selfConsuming;
    this.targetId = targetId;
    this.flags = flags;
    this.flagsRequired = flagsRequired;
    this.flagsDisallowing = flagsDisallowing;
    this.categories = categories;
    this.theme = theme;
    this.variables = variables;
  }
  MoveBuilder.prototype.parseLine_bm4lxs$ = function (line, index) {
    if (!equals(line, GameConverter$Companion_getInstance().SEPARATOR)) {
      if (GameConverter$Companion_getInstance().PRIZNAK.matches_6bul2c$(line)) {
        this.flags = toMutableList(parameterArray(line));
      }
       else {
        if (Variable$Companion_getInstance().REGEX.matches_6bul2c$(line)) {
          this.variables.add_11rb$(Variable$Companion_getInstance().parse_61zpoe$(line));
        }
         else {
          if (GameConverter$Companion_getInstance().TEMA.matches_6bul2c$(line)) {
            this.theme = parameterValue(line);
          }
           else {
            if (GameConverter$Companion_getInstance().POZIRACI.matches_6bul2c$(line)) {
              this.selfConsuming = equals(parameterValue(line).toLowerCase(), 'ano');
            }
             else if (startsWith(line, GameConverter$Companion_getInstance().KATEGORIE)) {
              this.categories = parameterArray(line);
            }
             else {
              if (GameConverter$Companion_getInstance().ILUSTRACE.matches_6bul2c$(line)) {
                this.illustration = parameterValue(line);
              }
               else {
                if (GameConverter$Companion_getInstance().OBRAZEK.matches_6bul2c$(line)) {
                  this.image = parameterValue(line);
                }
                 else if (startsWith(line, GameConverter$Companion_getInstance().VYLOUCENA)) {
                  addAll(this.flagsDisallowing, parameterArray(line));
                }
                 else if (startsWith(line, GameConverter$Companion_getInstance().PODMINENA)) {
                  addAll(this.flagsRequired, parameterArray(line));
                }
                 else if (startsWith(line, GameConverter$Companion_getInstance().POPIS)) {
                  this.caption = parameterValue(line);
                }
                 else if (startsWith(line, GameConverter$Companion_getInstance().CIL)) {
                  this.targetId = parameterValue(line);
                }
                 else if (!equals(line, '-')) {
                  errorIfParameter(line, index);
                  this.appendText_61zpoe$(line);
                }
              }
            }
          }
        }
      }
    }
  };
  MoveBuilder.prototype.build = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (this.id == null) {
      throw IllegalArgumentException_init('Id not found for move!');
    }
    if (this.targetId == null) {
      throw IllegalArgumentException_init('Target it not found for move ' + toString(this.id) + '!');
    }
    tmp$ = ensureNotNull(this.id);
    tmp$_0 = this.caption;
    tmp$_1 = this.image;
    tmp$_2 = this.illustration;
    var tmp$_4;
    if ((tmp$_3 = this.text) != null) {
      var tmp$_5;
      tmp$_4 = trim(Kotlin.isCharSequence(tmp$_5 = tmp$_3) ? tmp$_5 : throwCCE()).toString();
    }
     else
      tmp$_4 = null;
    return new Move(tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_4, this.selfConsuming, ensureNotNull(this.targetId), copyToArray(this.flags), copyToArray(this.flagsRequired), copyToArray(this.flagsDisallowing), this.categories, this.theme, copyToArray(this.variables));
  };
  MoveBuilder.prototype.appendText_61zpoe$ = function (value) {
    if (this.text == null) {
      this.text = value + '\n';
    }
     else {
      this.text = this.text + (value + '\n');
    }
  };
  MoveBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveBuilder',
    interfaces: [LineParser]
  };
  MoveBuilder.prototype.component1 = function () {
    return this.gameConverterContext;
  };
  MoveBuilder.prototype.component2 = function () {
    return this.id;
  };
  MoveBuilder.prototype.component3 = function () {
    return this.caption;
  };
  MoveBuilder.prototype.component4 = function () {
    return this.image;
  };
  MoveBuilder.prototype.component5 = function () {
    return this.illustration;
  };
  MoveBuilder.prototype.component6 = function () {
    return this.text;
  };
  MoveBuilder.prototype.component7 = function () {
    return this.selfConsuming;
  };
  MoveBuilder.prototype.component8 = function () {
    return this.targetId;
  };
  MoveBuilder.prototype.component9 = function () {
    return this.flags;
  };
  MoveBuilder.prototype.component10 = function () {
    return this.flagsRequired;
  };
  MoveBuilder.prototype.component11 = function () {
    return this.flagsDisallowing;
  };
  MoveBuilder.prototype.component12 = function () {
    return this.categories;
  };
  MoveBuilder.prototype.component13 = function () {
    return this.theme;
  };
  MoveBuilder.prototype.component14 = function () {
    return this.variables;
  };
  MoveBuilder.prototype.copy_j2t633$ = function (gameConverterContext, id, caption, image, illustration, text, selfConsuming, targetId, flags, flagsRequired, flagsDisallowing, categories, theme, variables) {
    return new MoveBuilder(gameConverterContext === void 0 ? this.gameConverterContext : gameConverterContext, id === void 0 ? this.id : id, caption === void 0 ? this.caption : caption, image === void 0 ? this.image : image, illustration === void 0 ? this.illustration : illustration, text === void 0 ? this.text : text, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, targetId === void 0 ? this.targetId : targetId, flags === void 0 ? this.flags : flags, flagsRequired === void 0 ? this.flagsRequired : flagsRequired, flagsDisallowing === void 0 ? this.flagsDisallowing : flagsDisallowing, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme, variables === void 0 ? this.variables : variables);
  };
  MoveBuilder.prototype.toString = function () {
    return 'MoveBuilder(gameConverterContext=' + Kotlin.toString(this.gameConverterContext) + (', id=' + Kotlin.toString(this.id)) + (', caption=' + Kotlin.toString(this.caption)) + (', image=' + Kotlin.toString(this.image)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', text=' + Kotlin.toString(this.text)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', targetId=' + Kotlin.toString(this.targetId)) + (', flags=' + Kotlin.toString(this.flags)) + (', flagsRequired=' + Kotlin.toString(this.flagsRequired)) + (', flagsDisallowing=' + Kotlin.toString(this.flagsDisallowing)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + (', variables=' + Kotlin.toString(this.variables)) + ')';
  };
  MoveBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gameConverterContext) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.caption) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.illustration) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.selfConsuming) | 0;
    result = result * 31 + Kotlin.hashCode(this.targetId) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagsRequired) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagsDisallowing) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    result = result * 31 + Kotlin.hashCode(this.variables) | 0;
    return result;
  };
  MoveBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gameConverterContext, other.gameConverterContext) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.caption, other.caption) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.targetId, other.targetId) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.flagsRequired, other.flagsRequired) && Kotlin.equals(this.flagsDisallowing, other.flagsDisallowing) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.variables, other.variables)))));
  };
  function StateBuilder(gameConverterContext, id, illustration, text_, flags, moveIds, chapterId, categories, endType, theme, background, minigame, variables, moves) {
    if (id === void 0)
      id = null;
    if (illustration === void 0)
      illustration = null;
    if (text_ === void 0)
      text_ = null;
    if (flags === void 0)
      flags = ArrayList_init();
    if (moveIds === void 0)
      moveIds = ArrayList_init();
    if (chapterId === void 0)
      chapterId = null;
    if (categories === void 0) {
      categories = [];
    }
    if (endType === void 0)
      endType = EndType$NONE_getInstance();
    if (theme === void 0)
      theme = null;
    if (background === void 0) {
      background = [];
    }
    if (minigame === void 0)
      minigame = null;
    if (variables === void 0) {
      variables = ArrayList_init();
    }
    if (moves === void 0) {
      moves = ArrayList_init();
    }
    this.gameConverterContext = gameConverterContext;
    this.id = id;
    this.illustration = illustration;
    this.text__0 = text_;
    this.flags = flags;
    this.moveIds = moveIds;
    this.chapterId = chapterId;
    this.categories = categories;
    this.endType = endType;
    this.theme = theme;
    this.background = background;
    this.minigame = minigame;
    this.variables = variables;
    this.moves = moves;
    this.parsingMoves = false;
    this.stringBuilder = new CharSequenceBuilder();
    this.text_yftq1l$_0 = this.text__0;
  }
  StateBuilder.prototype.parseLine_bm4lxs$ = function (line, index) {
    if (GameConverter$Companion_getInstance().HRANA.matches_6bul2c$(line)) {
      var moveId_0 = moveId(line);
      if (moveId_0 != null) {
        this.gameConverterContext.addMoveId_bm4lxs$(moveId_0, index);
      }
      this.addMove_pdl1vj$(moveId_0);
      this.parsingMoves = true;
    }
     else if (this.parsingMoves) {
      this.currentMoveBuilder().parseLine_bm4lxs$(line, index);
    }
     else {
      this.parseNodeLine_0(line, index);
    }
  };
  StateBuilder.prototype.parseNodeLine_0 = function (line, index) {
    if (GameConverter$Companion_getInstance().ILUSTRACE.matches_6bul2c$(line)) {
      this.illustration = parameterValue(line);
    }
     else {
      if (Variable$Companion_getInstance().REGEX.matches_6bul2c$(line)) {
        this.variables.add_11rb$(Variable$Companion_getInstance().parse_61zpoe$(line));
      }
       else {
        if (GameConverter$Companion_getInstance().PRIZNAK.matches_6bul2c$(line)) {
          this.flags = toMutableList(parameterArray(line));
        }
         else {
          if (GameConverter$Companion_getInstance().MINIHRA.matches_6bul2c$(line)) {
            this.minigame = parameterValue(line);
          }
           else {
            if (GameConverter$Companion_getInstance().POZADI.matches_6bul2c$(line)) {
              this.background = parameterArray(line);
            }
             else {
              if (GameConverter$Companion_getInstance().TEMA.matches_6bul2c$(line)) {
                this.theme = GameConverter$Companion_getInstance().TEMA.replace_x2uqeu$(line, '$1');
              }
               else if (startsWith(line, GameConverter$Companion_getInstance().CIL)) {
                var startIndex = GameConverter$Companion_getInstance().CIL.length;
                var targetId = line.substring(startIndex);
                var moveId = 'h_' + toString(this.id) + '_auto_' + targetId;
                this.gameConverterContext.addMoveId_bm4lxs$(moveId, index);
                this.moves.add_11rb$(new MoveBuilder(this.gameConverterContext, moveId, void 0, void 0, void 0, void 0, SuperStateBuilder$Companion_getInstance().NODE_SELF_CONSUMING, targetId));
              }
               else {
                if (GameConverter$Companion_getInstance().KONEC.matches_6bul2c$(line)) {
                  this.endType = endType(line, index);
                }
                 else if (startsWith(line, GameConverter$Companion_getInstance().KATEGORIE)) {
                  this.categories = parameterArray(line);
                }
                 else {
                  errorIfParameter(line, index);
                  this.appendText_61zpoe$(line);
                }
              }
            }
          }
        }
      }
    }
  };
  StateBuilder.prototype.currentMoveBuilder = function () {
    return last(this.moves);
  };
  StateBuilder.prototype.addMove_pdl1vj$ = function (moveId) {
    if (moveId === void 0)
      moveId = null;
    var moveBuilder = new MoveBuilder(this.gameConverterContext, moveId);
    this.moves.add_11rb$(moveBuilder);
    return moveBuilder;
  };
  Object.defineProperty(StateBuilder.prototype, 'text', {
    get: function () {
      return this.text_yftq1l$_0;
    },
    set: function (value) {
      if (value != null && contains(value, '@')) {
        this.text_yftq1l$_0 = (new CharSequenceBuilder()).appendFullText_6bul2c$(value).build();
      }
       else {
        this.text_yftq1l$_0 = value;
      }
    }
  });
  StateBuilder.prototype.build_pdl1vj$ = function (nextStateId) {
    if (nextStateId === void 0)
      nextStateId = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var finalText = this.stringBuilder.build();
    if (this.text != null) {
      finalText = this.text;
    }
    if (nextStateId != null) {
      var tmp$_4;
      tmp$_4 = this.moves.iterator();
      while (tmp$_4.hasNext()) {
        var element = tmp$_4.next();
        if (element.targetId == null) {
          element.targetId = nextStateId;
        }
      }
    }
    var moveIndex = {v: 0};
    var tmp$_5;
    tmp$_5 = this.moves.iterator();
    while (tmp$_5.hasNext()) {
      var element_0 = tmp$_5.next();
      if (element_0.id == null) {
        var moveId = 'h_' + toString(this.id) + '_m' + moveIndex.v;
        element_0.id = moveId;
      }
      moveIndex.v = moveIndex.v + 1 | 0;
    }
    tmp$ = ensureNotNull(this.id);
    tmp$_0 = this.illustration;
    tmp$_1 = finalText != null ? trim(finalText) : null;
    tmp$_2 = ensureNotNull(this.chapterId);
    tmp$_3 = copyToArray(this.flags);
    var $receiver = this.moves;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_6;
    tmp$_6 = $receiver.iterator();
    while (tmp$_6.hasNext()) {
      var item = tmp$_6.next();
      destination.add_11rb$(item.build());
    }
    return new State(tmp$, tmp$_1, tmp$_0, tmp$_2, tmp$_3, copyToArray(destination), this.categories, this.endType, this.theme, this.background, this.minigame, copyToArray(this.variables));
  };
  StateBuilder.prototype.text_66evf9$ = function (init) {
    this.stringBuilder = new CharSequenceBuilder();
    init(this.stringBuilder);
    return this.stringBuilder;
  };
  StateBuilder.prototype.appendText_61zpoe$ = function (value) {
    this.stringBuilder.appendLine_61zpoe$(value);
  };
  StateBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateBuilder',
    interfaces: [LineParser]
  };
  StateBuilder.prototype.component1 = function () {
    return this.gameConverterContext;
  };
  StateBuilder.prototype.component2 = function () {
    return this.id;
  };
  StateBuilder.prototype.component3 = function () {
    return this.illustration;
  };
  StateBuilder.prototype.component4_0 = function () {
    return this.text__0;
  };
  StateBuilder.prototype.component5 = function () {
    return this.flags;
  };
  StateBuilder.prototype.component6 = function () {
    return this.moveIds;
  };
  StateBuilder.prototype.component7 = function () {
    return this.chapterId;
  };
  StateBuilder.prototype.component8 = function () {
    return this.categories;
  };
  StateBuilder.prototype.component9 = function () {
    return this.endType;
  };
  StateBuilder.prototype.component10 = function () {
    return this.theme;
  };
  StateBuilder.prototype.component11 = function () {
    return this.background;
  };
  StateBuilder.prototype.component12 = function () {
    return this.minigame;
  };
  StateBuilder.prototype.component13 = function () {
    return this.variables;
  };
  StateBuilder.prototype.component14 = function () {
    return this.moves;
  };
  StateBuilder.prototype.copy_ohme1i$ = function (gameConverterContext, id, illustration, text_, flags, moveIds, chapterId, categories, endType, theme, background, minigame, variables, moves) {
    return new StateBuilder(gameConverterContext === void 0 ? this.gameConverterContext : gameConverterContext, id === void 0 ? this.id : id, illustration === void 0 ? this.illustration : illustration, text_ === void 0 ? this.text__0 : text_, flags === void 0 ? this.flags : flags, moveIds === void 0 ? this.moveIds : moveIds, chapterId === void 0 ? this.chapterId : chapterId, categories === void 0 ? this.categories : categories, endType === void 0 ? this.endType : endType, theme === void 0 ? this.theme : theme, background === void 0 ? this.background : background, minigame === void 0 ? this.minigame : minigame, variables === void 0 ? this.variables : variables, moves === void 0 ? this.moves : moves);
  };
  StateBuilder.prototype.toString = function () {
    return 'StateBuilder(gameConverterContext=' + Kotlin.toString(this.gameConverterContext) + (', id=' + Kotlin.toString(this.id)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', text_=' + Kotlin.toString(this.text__0)) + (', flags=' + Kotlin.toString(this.flags)) + (', moveIds=' + Kotlin.toString(this.moveIds)) + (', chapterId=' + Kotlin.toString(this.chapterId)) + (', categories=' + Kotlin.toString(this.categories)) + (', endType=' + Kotlin.toString(this.endType)) + (', theme=' + Kotlin.toString(this.theme)) + (', background=' + Kotlin.toString(this.background)) + (', minigame=' + Kotlin.toString(this.minigame)) + (', variables=' + Kotlin.toString(this.variables)) + (', moves=' + Kotlin.toString(this.moves)) + ')';
  };
  StateBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gameConverterContext) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.illustration) | 0;
    result = result * 31 + Kotlin.hashCode(this.text__0) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.moveIds) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapterId) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.endType) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    result = result * 31 + Kotlin.hashCode(this.background) | 0;
    result = result * 31 + Kotlin.hashCode(this.minigame) | 0;
    result = result * 31 + Kotlin.hashCode(this.variables) | 0;
    result = result * 31 + Kotlin.hashCode(this.moves) | 0;
    return result;
  };
  StateBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gameConverterContext, other.gameConverterContext) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.text__0, other.text__0) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.moveIds, other.moveIds) && Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.endType, other.endType) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.background, other.background) && Kotlin.equals(this.minigame, other.minigame) && Kotlin.equals(this.variables, other.variables) && Kotlin.equals(this.moves, other.moves)))));
  };
  function SuperStateBuilder(gameConverterContext, id, currentTheme, currentBackground, selfConsuming, finalTargetId, chapterId, tmpStates, endType) {
    SuperStateBuilder$Companion_getInstance();
    if (currentTheme === void 0)
      currentTheme = null;
    if (currentBackground === void 0) {
      currentBackground = [];
    }
    if (selfConsuming === void 0)
      selfConsuming = SuperStateBuilder$Companion_getInstance().NODE_SELF_CONSUMING;
    if (finalTargetId === void 0)
      finalTargetId = null;
    if (chapterId === void 0)
      chapterId = null;
    if (tmpStates === void 0) {
      tmpStates = ArrayList_init();
    }
    if (endType === void 0)
      endType = EndType$NONE_getInstance();
    this.gameConverterContext = gameConverterContext;
    this.id = id;
    this.currentTheme = currentTheme;
    this.currentBackground = currentBackground;
    this.selfConsuming = selfConsuming;
    this.finalTargetId = finalTargetId;
    this.chapterId = chapterId;
    this.tmpStates = tmpStates;
    this.endType = endType;
    this.separated = false;
    this.move = false;
    this.addState();
  }
  SuperStateBuilder.prototype.parseLine_bm4lxs$ = function (line, index) {
    if (equals(GameConverter$Companion_getInstance().SUPERUZEL_SEPARATOR, line)) {
      var stateId = this.addState();
      this.gameConverterContext.addStateId_bm4lxs$(stateId, index);
      this.separated = true;
      this.move = false;
    }
     else {
      if (GameConverter$Companion_getInstance().HRANA.matches_6bul2c$(line)) {
        this.move = true;
        this.currentStateBuilder().parseLine_bm4lxs$(line, index);
      }
       else {
        if (GameConverter$Companion_getInstance().KONEC.matches_6bul2c$(line)) {
          this.endType = endType(line, index);
        }
         else if (!this.move && startsWith(line, GameConverter$Companion_getInstance().CIL)) {
          var startIndex = GameConverter$Companion_getInstance().CIL.length;
          var targetId = line.substring(startIndex);
          this.finalTargetId = targetId;
        }
         else {
          var tmp$ = !this.move;
          if (tmp$) {
            tmp$ = GameConverter$Companion_getInstance().TEMA.matches_6bul2c$(line);
          }
          if (tmp$) {
            var tema = GameConverter$Companion_getInstance().TEMA.replace_x2uqeu$(line, '$1');
            this.currentTheme = tema;
            this.currentStateBuilder().parseLine_bm4lxs$(line, index);
          }
           else {
            if (GameConverter$Companion_getInstance().POZADI.matches_6bul2c$(line)) {
              this.currentBackground = parameterArray(line);
              this.currentStateBuilder().parseLine_bm4lxs$(line, index);
            }
             else {
              this.currentStateBuilder().parseLine_bm4lxs$(line, index);
            }
          }
        }
      }
    }
  };
  SuperStateBuilder.prototype.build = function () {
    var tmp$;
    if (this.finalTargetId == null && this.currentStateBuilder().moves.isEmpty() && this.endType === EndType$NONE_getInstance()) {
      throw new StateException(this.id, 'Superuzel pot\u0159ebuje c\xEDl, hrany anebo konec');
    }
    var tmp$_0 = this.finalTargetId != null;
    if (tmp$_0) {
      tmp$_0 = !this.currentStateBuilder().moves.isEmpty();
    }
    if (tmp$_0) {
      throw new StateException(this.id, 'Superuzel m\u016F\u017Ee m\xEDt bu\u010F c\xEDl anebo hrany (ne oboj\xED)');
    }
    var states = ArrayList_init();
    var index = 0;
    tmp$ = this.tmpStates.iterator();
    while (tmp$.hasNext()) {
      var stateBuilder = tmp$.next();
      var nextStateId = this.id + '_sub_' + (index + 1 | 0);
      if (stateBuilder.moves.isEmpty()) {
        var moveId = 'h_' + this.id + '_sub_' + index;
        if (index === (this.tmpStates.size - 1 | 0)) {
          if (this.finalTargetId != null) {
            stateBuilder.moves.add_11rb$(new MoveBuilder(this.gameConverterContext, moveId, void 0, void 0, void 0, void 0, this.selfConsuming, ensureNotNull(this.finalTargetId)));
          }
           else if (this.endType !== EndType$NONE_getInstance()) {
            stateBuilder.endType = this.endType;
          }
        }
         else {
          stateBuilder.moves.add_11rb$(new MoveBuilder(this.gameConverterContext, moveId, void 0, void 0, void 0, void 0, this.selfConsuming, nextStateId));
        }
      }
      var state = stateBuilder.build_pdl1vj$(nextStateId);
      states.add_11rb$(state);
      index = index + 1 | 0;
    }
    return states;
  };
  SuperStateBuilder.prototype.currentStateBuilder = function () {
    return last(this.tmpStates);
  };
  SuperStateBuilder.prototype.addState = function () {
    var stateId = this.id;
    if (!this.tmpStates.isEmpty()) {
      stateId = this.id + '_sub_' + this.tmpStates.size;
    }
    this.tmpStates.add_11rb$(new StateBuilder(this.gameConverterContext, stateId, void 0, void 0, void 0, void 0, this.chapterId, void 0, void 0, this.currentTheme, this.currentBackground));
    return stateId;
  };
  function SuperStateBuilder$Companion() {
    SuperStateBuilder$Companion_instance = this;
    this.NODE_SELF_CONSUMING = false;
  }
  SuperStateBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SuperStateBuilder$Companion_instance = null;
  function SuperStateBuilder$Companion_getInstance() {
    if (SuperStateBuilder$Companion_instance === null) {
      new SuperStateBuilder$Companion();
    }
    return SuperStateBuilder$Companion_instance;
  }
  SuperStateBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SuperStateBuilder',
    interfaces: [LineParser]
  };
  SuperStateBuilder.prototype.component1 = function () {
    return this.gameConverterContext;
  };
  SuperStateBuilder.prototype.component2 = function () {
    return this.id;
  };
  SuperStateBuilder.prototype.component3 = function () {
    return this.currentTheme;
  };
  SuperStateBuilder.prototype.component4 = function () {
    return this.currentBackground;
  };
  SuperStateBuilder.prototype.component5 = function () {
    return this.selfConsuming;
  };
  SuperStateBuilder.prototype.component6 = function () {
    return this.finalTargetId;
  };
  SuperStateBuilder.prototype.component7 = function () {
    return this.chapterId;
  };
  SuperStateBuilder.prototype.component8 = function () {
    return this.tmpStates;
  };
  SuperStateBuilder.prototype.component9 = function () {
    return this.endType;
  };
  SuperStateBuilder.prototype.copy_wongdq$ = function (gameConverterContext, id, currentTheme, currentBackground, selfConsuming, finalTargetId, chapterId, tmpStates, endType) {
    return new SuperStateBuilder(gameConverterContext === void 0 ? this.gameConverterContext : gameConverterContext, id === void 0 ? this.id : id, currentTheme === void 0 ? this.currentTheme : currentTheme, currentBackground === void 0 ? this.currentBackground : currentBackground, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, finalTargetId === void 0 ? this.finalTargetId : finalTargetId, chapterId === void 0 ? this.chapterId : chapterId, tmpStates === void 0 ? this.tmpStates : tmpStates, endType === void 0 ? this.endType : endType);
  };
  SuperStateBuilder.prototype.toString = function () {
    return 'SuperStateBuilder(gameConverterContext=' + Kotlin.toString(this.gameConverterContext) + (', id=' + Kotlin.toString(this.id)) + (', currentTheme=' + Kotlin.toString(this.currentTheme)) + (', currentBackground=' + Kotlin.toString(this.currentBackground)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', finalTargetId=' + Kotlin.toString(this.finalTargetId)) + (', chapterId=' + Kotlin.toString(this.chapterId)) + (', tmpStates=' + Kotlin.toString(this.tmpStates)) + (', endType=' + Kotlin.toString(this.endType)) + ')';
  };
  SuperStateBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gameConverterContext) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentTheme) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentBackground) | 0;
    result = result * 31 + Kotlin.hashCode(this.selfConsuming) | 0;
    result = result * 31 + Kotlin.hashCode(this.finalTargetId) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapterId) | 0;
    result = result * 31 + Kotlin.hashCode(this.tmpStates) | 0;
    result = result * 31 + Kotlin.hashCode(this.endType) | 0;
    return result;
  };
  SuperStateBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gameConverterContext, other.gameConverterContext) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.currentTheme, other.currentTheme) && Kotlin.equals(this.currentBackground, other.currentBackground) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.finalTargetId, other.finalTargetId) && Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.tmpStates, other.tmpStates) && Kotlin.equals(this.endType, other.endType)))));
  };
  function state(init) {
    var stateBuilder = new StateBuilder(new GameConverterContext());
    init(stateBuilder);
    var state = stateBuilder.build_pdl1vj$();
    return state;
  }
  function move(init) {
    var moveBuilder = new MoveBuilder(new GameConverterContext());
    init(moveBuilder);
    var move = moveBuilder.build();
    return move;
  }
  function game(init) {
    var gameconfig = new GameConfigBuilder();
    init(gameconfig);
    return gameconfig.build();
  }
  function IncorrectLineException(index, line, msg, e) {
    if (msg === void 0)
      msg = 'Neo\u010Dekav\xE1n\xFD \u0159\xE1dek';
    if (e === void 0)
      e = null;
    Exception.call(this, msg != null ? msg : line, e);
    this.index = index;
    this.line = line;
    this.msg = msg;
    this.e = e;
    this.name = 'IncorrectLineException';
  }
  IncorrectLineException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IncorrectLineException',
    interfaces: [Exception]
  };
  IncorrectLineException.prototype.component1 = function () {
    return this.index;
  };
  IncorrectLineException.prototype.component2 = function () {
    return this.line;
  };
  IncorrectLineException.prototype.component3 = function () {
    return this.msg;
  };
  IncorrectLineException.prototype.component4 = function () {
    return this.e;
  };
  IncorrectLineException.prototype.copy_e5kxfd$ = function (index, line, msg, e) {
    return new IncorrectLineException(index === void 0 ? this.index : index, line === void 0 ? this.line : line, msg === void 0 ? this.msg : msg, e === void 0 ? this.e : e);
  };
  IncorrectLineException.prototype.toString = function () {
    return 'IncorrectLineException(index=' + Kotlin.toString(this.index) + (', line=' + Kotlin.toString(this.line)) + (', msg=' + Kotlin.toString(this.msg)) + (', e=' + Kotlin.toString(this.e)) + ')';
  };
  IncorrectLineException.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.line) | 0;
    result = result * 31 + Kotlin.hashCode(this.msg) | 0;
    result = result * 31 + Kotlin.hashCode(this.e) | 0;
    return result;
  };
  IncorrectLineException.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.index, other.index) && Kotlin.equals(this.line, other.line) && Kotlin.equals(this.msg, other.msg) && Kotlin.equals(this.e, other.e)))));
  };
  function MoveException(moveId, msg) {
    Exception_init('Prob\xE9m hranou ' + moveId + ' : ' + msg, this);
    this.moveId = moveId;
    this.msg = msg;
    this.name = 'MoveException';
  }
  MoveException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveException',
    interfaces: [Exception]
  };
  function MoveException_init(move, msg, $this) {
    $this = $this || Object.create(MoveException.prototype);
    MoveException.call($this, move.id, msg);
    return $this;
  }
  MoveException.prototype.component1 = function () {
    return this.moveId;
  };
  MoveException.prototype.component2 = function () {
    return this.msg;
  };
  MoveException.prototype.copy_puj7f4$ = function (moveId, msg) {
    return new MoveException(moveId === void 0 ? this.moveId : moveId, msg === void 0 ? this.msg : msg);
  };
  MoveException.prototype.toString = function () {
    return 'MoveException(moveId=' + Kotlin.toString(this.moveId) + (', msg=' + Kotlin.toString(this.msg)) + ')';
  };
  MoveException.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.moveId) | 0;
    result = result * 31 + Kotlin.hashCode(this.msg) | 0;
    return result;
  };
  MoveException.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.moveId, other.moveId) && Kotlin.equals(this.msg, other.msg)))));
  };
  function StateException(stateId, msg) {
    Exception_init('Prob\xE9m se stavem ' + stateId + ' : ' + msg, this);
    this.stateId = stateId;
    this.msg = msg;
    this.name = 'StateException';
  }
  StateException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateException',
    interfaces: [Exception]
  };
  function StateException_init(state, msg, $this) {
    $this = $this || Object.create(StateException.prototype);
    StateException.call($this, state.id, msg);
    return $this;
  }
  StateException.prototype.component1 = function () {
    return this.stateId;
  };
  StateException.prototype.component2 = function () {
    return this.msg;
  };
  StateException.prototype.copy_puj7f4$ = function (stateId, msg) {
    return new StateException(stateId === void 0 ? this.stateId : stateId, msg === void 0 ? this.msg : msg);
  };
  StateException.prototype.toString = function () {
    return 'StateException(stateId=' + Kotlin.toString(this.stateId) + (', msg=' + Kotlin.toString(this.msg)) + ')';
  };
  StateException.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.stateId) | 0;
    result = result * 31 + Kotlin.hashCode(this.msg) | 0;
    return result;
  };
  StateException.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.stateId, other.stateId) && Kotlin.equals(this.msg, other.msg)))));
  };
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$;
  function GameConfigHelper(gameConfig) {
    this.gameConfig = gameConfig;
    var $receiver = this.gameConfig.states;
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var pair = to(element.id, element);
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    this.statesById_0 = destination;
    var $receiver_0 = this.gameConfig.moves;
    var capacity_0 = coerceAtLeast(mapCapacity($receiver_0.length), 16);
    var destination_0 = LinkedHashMap_init_0(capacity_0);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element_0 = $receiver_0[tmp$_0];
      var pair_0 = to(element_0.id, element_0);
      destination_0.put_xwzc9p$(pair_0.first, pair_0.second);
    }
    this.movesById_0 = destination_0;
    var $receiver_1 = this.gameConfig.chapters;
    var capacity_1 = coerceAtLeast(mapCapacity($receiver_1.length), 16);
    var destination_1 = LinkedHashMap_init_0(capacity_1);
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver_1.length; ++tmp$_1) {
      var element_1 = $receiver_1[tmp$_1];
      var pair_1 = to(element_1.id, element_1);
      destination_1.put_xwzc9p$(pair_1.first, pair_1.second);
    }
    this.chaptersById_0 = destination_1;
    this.flagGroupsByStateId_0 = LinkedHashMap_init();
    this.flagGroups = ArrayList_init();
    var tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    var $receiver_2 = this.chaptersById_0;
    var destination_2 = ArrayList_init($receiver_2.size);
    var tmp$_10;
    tmp$_10 = $receiver_2.entries.iterator();
    while (tmp$_10.hasNext()) {
      var item = tmp$_10.next();
      destination_2.add_11rb$(item.value.flagGroups);
    }
    var tmp$_11;
    tmp$_11 = destination_2.iterator();
    while (tmp$_11.hasNext()) {
      var element_2 = tmp$_11.next();
      var tmp$_12;
      for (tmp$_12 = 0; tmp$_12 !== element_2.length; ++tmp$_12) {
        var flagGroup = element_2[tmp$_12];
        this.flagGroups.add_11rb$(flagGroup);
      }
    }
    tmp$_2 = this.gameConfig.states;
    for (tmp$_3 = 0; tmp$_3 !== tmp$_2.length; ++tmp$_3) {
      var state = tmp$_2[tmp$_3];
      if (this.flagGroupsByStateId_0.get_11rb$(state.id) == null) {
        var tmp$_13 = this.flagGroupsByStateId_0;
        var tmp$_14 = state.id;
        var value = ArrayList_init();
        tmp$_13.put_xwzc9p$(tmp$_14, value);
      }
      tmp$_4 = state.moves;
      for (tmp$_5 = 0; tmp$_5 !== tmp$_4.length; ++tmp$_5) {
        var move = tmp$_4[tmp$_5];
        tmp$_6 = move.flagsDisallowing;
        for (tmp$_7 = 0; tmp$_7 !== tmp$_6.length; ++tmp$_7) {
          var flag = tmp$_6[tmp$_7];
          var flagGroup_0 = this.isInGroup_puj7f4$(state.chapterId, flag);
          if (flagGroup_0 != null) {
            ensureNotNull(this.flagGroupsByStateId_0.get_11rb$(state.id)).add_11rb$(flagGroup_0);
          }
        }
        tmp$_8 = move.flagsRequired;
        for (tmp$_9 = 0; tmp$_9 !== tmp$_8.length; ++tmp$_9) {
          var flag_0 = tmp$_8[tmp$_9];
          var flagGroup_1 = this.isInGroup_puj7f4$(state.chapterId, flag_0);
          if (flagGroup_1 != null) {
            ensureNotNull(this.flagGroupsByStateId_0.get_11rb$(state.id)).add_11rb$(flagGroup_1);
          }
        }
      }
    }
  }
  GameConfigHelper.prototype.stateById_61zpoe$ = function (id) {
    return getOrThrow(this.statesById_0, id);
  };
  GameConfigHelper.prototype.start = function () {
    return this.stateById_61zpoe$(this.gameConfig.startId);
  };
  GameConfigHelper.prototype.moveById_61zpoe$ = function (id) {
    return getOrThrow(this.movesById_0, id);
  };
  GameConfigHelper.prototype.movesOf_ktq7vf$ = function (state) {
    return state.moves;
  };
  GameConfigHelper.prototype.containsState_61zpoe$ = function (stateId) {
    var tmp$, tmp$_0;
    tmp$ = this.gameConfig.states;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var state = tmp$[tmp$_0];
      if (equals(state.id, stateId)) {
        return true;
      }
    }
    return false;
  };
  GameConfigHelper.prototype.containsMove_61zpoe$ = function (moveId) {
    var tmp$, tmp$_0;
    tmp$ = this.gameConfig.moves;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var move = tmp$[tmp$_0];
      if (equals(move.id, moveId)) {
        return true;
      }
    }
    return false;
  };
  GameConfigHelper.prototype.moveExists_puj7f4$ = function (from, to) {
    var tmp$, tmp$_0;
    if (!this.statesById_0.containsKey_11rb$(from)) {
      return false;
    }
    var state = getOrThrow(this.statesById_0, from);
    tmp$ = state.moves;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var move = tmp$[tmp$_0];
      if (this.movesById_0.containsKey_11rb$(move.id)) {
        if (equals(move.targetId, to)) {
          return true;
        }
      }
    }
    return false;
  };
  GameConfigHelper.prototype.pathExists_puj7f4$ = function (from, to_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (equals(from, to_0)) {
      return true;
    }
    if (equals(to_0, this.gameConfig.startId)) {
      return false;
    }
    var $receiver = this.gameConfig.moves;
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$_3;
    for (tmp$_3 = 0; tmp$_3 !== $receiver.length; ++tmp$_3) {
      var element = $receiver[tmp$_3];
      var pair = to(element.targetId, element);
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    var movesByTargetId = destination;
    var move = getOrThrow(movesByTargetId, to_0);
    tmp$ = this.gameConfig.states;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var state = tmp$[tmp$_0];
      tmp$_1 = state.moves;
      for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
        var move2 = tmp$_1[tmp$_2];
        if (equals(move2.id, move.id)) {
          return this.pathExists_puj7f4$(from, state.id);
        }
      }
    }
    throw IllegalArgumentException_init('No parent found for move ' + move.id);
  };
  GameConfigHelper.prototype.isInGroup_puj7f4$ = function (chapterId, flag) {
    var tmp$;
    tmp$ = this.flagGroups.iterator();
    while (tmp$.hasNext()) {
      var flagGroup = tmp$.next();
      if (contains_0(flagGroup.flags, flag)) {
        return flagGroup;
      }
    }
    return null;
  };
  GameConfigHelper.prototype.chapterById_61zpoe$ = function (chapterId) {
    return getOrThrow(this.chaptersById_0, chapterId);
  };
  GameConfigHelper.prototype.flagGroupsOf_ktq7vf$ = function (state) {
    return getOrThrow(this.flagGroupsByStateId_0, state.id);
  };
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  GameConfigHelper.prototype.printFlagGroups = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.gameConfig.states;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var state = tmp$[tmp$_0];
      var moves = state.moves;
      var flags = LinkedHashSet_init();
      for (tmp$_1 = 0; tmp$_1 !== moves.length; ++tmp$_1) {
        var move = moves[tmp$_1];
        addAll(flags, move.flagsDisallowing);
        addAll(flags, move.flagsRequired);
      }
      if (flags.size > 1) {
        var flagsStr = joinToString(flags, ',');
        println('skupina(' + state.id + '-skupina,prave_jeden)=' + flagsStr);
      }
    }
  };
  GameConfigHelper.prototype.printImageAssets = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var results = ArrayList_init();
    tmp$ = this.gameConfig.states;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var state = tmp$[tmp$_0];
      if (state.illustration != null) {
        addUnique(results, this.preload_61zpoe$(PathConstants$Companion_getInstance().ILLUSTRATIONS + state.illustration));
      }
      if (state.background != null) {
        addUnique(results, this.preload_61zpoe$(PathConstants$Companion_getInstance().BACKGROUNDS + toString(state.background)));
      }
    }
    tmp$_1 = this.gameConfig.moves;
    for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
      var move = tmp$_1[tmp$_2];
      if (move.illustration != null) {
        addUnique(results, this.preload_61zpoe$(PathConstants$Companion_getInstance().ILLUSTRATIONS + move.illustration));
      }
    }
    tmp$_3 = this.gameConfig.moves;
    for (tmp$_4 = 0; tmp$_4 !== tmp$_3.length; ++tmp$_4) {
      var move_0 = tmp$_3[tmp$_4];
      if (move_0.image != null) {
        addUnique(results, this.preload_61zpoe$(PathConstants$Companion_getInstance().MOVES + move_0.image));
      }
    }
    var tmp$_5;
    tmp$_5 = results.iterator();
    while (tmp$_5.hasNext()) {
      var element = tmp$_5.next();
      println(element);
    }
  };
  GameConfigHelper.prototype.preload_61zpoe$ = function (path) {
    return "preload.loadFile('" + path + "')";
  };
  GameConfigHelper.prototype.printFlags = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    println('Stavy');
    tmp$ = this.gameConfig.states;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var state = tmp$[tmp$_0];
      if (!(state.flags.length === 0)) {
        println(state.id + ' - ' + toList(state.flags));
      }
    }
    println('Hrany');
    tmp$_1 = this.gameConfig.moves;
    for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
      var move = tmp$_1[tmp$_2];
      if (!(move.flags.length === 0)) {
        println(move.id + ' - ' + toList(move.flags));
      }
    }
  };
  GameConfigHelper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameConfigHelper',
    interfaces: []
  };
  function GameConstants() {
    GameConstants$Companion_getInstance();
  }
  function GameConstants$Companion() {
    GameConstants$Companion_instance = this;
    this.THEMES = ['sladka-princezna', 'divoky-pankac', 'drsna-rockerka', 'sportovni-normalka', 'slusna-skolacka', 'tezka-extravagance', 'sexy-baby'];
  }
  GameConstants$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameConstants$Companion_instance = null;
  function GameConstants$Companion_getInstance() {
    if (GameConstants$Companion_instance === null) {
      new GameConstants$Companion();
    }
    return GameConstants$Companion_instance;
  }
  GameConstants.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameConstants',
    interfaces: []
  };
  function PathConstants() {
    PathConstants$Companion_getInstance();
  }
  function PathConstants$Companion() {
    PathConstants$Companion_instance = this;
    this.IMG = '/img/';
    this.ILLUSTRATIONS = this.IMG + 'illustrations/';
    this.MOVES = this.IMG + 'moves/';
    this.BACKGROUNDS = this.IMG + 'backgrounds/';
  }
  PathConstants$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PathConstants$Companion_instance = null;
  function PathConstants$Companion_getInstance() {
    if (PathConstants$Companion_instance === null) {
      new PathConstants$Companion();
    }
    return PathConstants$Companion_instance;
  }
  PathConstants.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathConstants',
    interfaces: []
  };
  var STATE_ID_REGEX;
  var MOVE_ID_REGEX;
  function getFlags(gameConfig) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var flags = ArrayList_init();
    tmp$ = gameConfig.moves;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var move = tmp$[tmp$_0];
      flags.add_11rb$(move.id);
      addAll(flags, move.flags);
    }
    tmp$_1 = gameConfig.states;
    for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
      var state = tmp$_1[tmp$_2];
      flags.add_11rb$(state.id);
      addAll(flags, state.flags);
    }
    var $receiver = gameConfig.chapters;
    var tmp$_3;
    for (tmp$_3 = 0; tmp$_3 !== $receiver.length; ++tmp$_3) {
      var element = $receiver[tmp$_3];
      var $receiver_0 = element.flagGroups;
      var tmp$_4;
      for (tmp$_4 = 0; tmp$_4 !== $receiver_0.length; ++tmp$_4) {
        var element_0 = $receiver_0[tmp$_4];
        addAll(flags, element_0.flags);
      }
    }
    return copyToArray(flags);
  }
  function ValidatorWarning(message, state, move) {
    if (state === void 0)
      state = null;
    if (move === void 0)
      move = null;
    this.message = message;
    this.state = state;
    this.move = move;
  }
  ValidatorWarning.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValidatorWarning',
    interfaces: []
  };
  ValidatorWarning.prototype.component1 = function () {
    return this.message;
  };
  ValidatorWarning.prototype.component2 = function () {
    return this.state;
  };
  ValidatorWarning.prototype.component3 = function () {
    return this.move;
  };
  ValidatorWarning.prototype.copy_3epqxe$ = function (message, state, move) {
    return new ValidatorWarning(message === void 0 ? this.message : message, state === void 0 ? this.state : state, move === void 0 ? this.move : move);
  };
  ValidatorWarning.prototype.toString = function () {
    return 'ValidatorWarning(message=' + Kotlin.toString(this.message) + (', state=' + Kotlin.toString(this.state)) + (', move=' + Kotlin.toString(this.move)) + ')';
  };
  ValidatorWarning.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.move) | 0;
    return result;
  };
  ValidatorWarning.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.message, other.message) && Kotlin.equals(this.state, other.state) && Kotlin.equals(this.move, other.move)))));
  };
  function GameValidator(gameConfig) {
    this.gameConfig = gameConfig;
    this.helper = new GameConfigHelper(this.gameConfig);
    this.warningList = ArrayList_init();
    this.flags = getFlags(this.gameConfig);
  }
  GameValidator.prototype.warn_3epqxe$ = function (message, state, move) {
    if (state === void 0)
      state = null;
    if (move === void 0)
      move = null;
    println(message + ' - ' + toString(state) + ' - ' + toString(move));
    this.warningList.add_11rb$(new ValidatorWarning(message, state, move));
  };
  GameValidator.prototype.validateStates = function () {
    var tmp$, tmp$_0;
    this.validateNotDuplicitStateIds();
    tmp$ = this.gameConfig.states;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var state = tmp$[tmp$_0];
      this.validateState_0(state);
    }
  };
  GameValidator.prototype.validateNotDuplicitStateIds = function () {
    var tmp$, tmp$_0;
    var duplicitIds = ArrayList_init();
    tmp$ = this.gameConfig.states;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var state = tmp$[tmp$_0];
      if (duplicitIds.contains_11rb$(state.id)) {
        this.warn_3epqxe$('Duplicitn\xED stav!\nKIKI to znamen\xE1, \u017Ee je n\u011Bkolikr\xE1t v textu tohle id, nejsp\xED\u0161 copy-paste p\u0159eklep.', state);
      }
      duplicitIds.add_11rb$(state.id);
    }
  };
  GameValidator.prototype.validateState_0 = function (state) {
    if (!STATE_ID_REGEX.matches_6bul2c$(state.id)) {
      this.warn_3epqxe$('Invalid state id: ' + state.id + ' ' + '\n' + "KIKI, m\xE1 p\u0159ece za\u010D\xEDnat na 'u'!", state);
    }
    this.validateMovesNotAmbiguous_0(state);
    this.validateMovesAllHaveImageOrNot_0(state);
  };
  GameValidator.prototype.validateMovesNotAmbiguous_0 = function (state) {
    var moves = this.helper.movesOf_ktq7vf$(state);
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== moves.length; ++tmp$) {
      var element = moves[tmp$];
      var tmp$_0 = element.isAutoMove();
      if (tmp$_0) {
        tmp$_0 = element.flagsDisallowing.length === 0;
      }
      var tmp$_1 = tmp$_0;
      if (tmp$_1) {
        tmp$_1 = element.flagsRequired.length === 0;
      }
      if (tmp$_1)
        destination.add_11rb$(element);
    }
    var autoMoveNoRestrictionMoves = destination;
    if (autoMoveNoRestrictionMoves.size > 1) {
      var destination_0 = ArrayList_init(collectionSizeOrDefault(autoMoveNoRestrictionMoves, 10));
      var tmp$_2;
      tmp$_2 = autoMoveNoRestrictionMoves.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination_0.add_11rb$(item.id);
      }
      var moveIds = toList_0(destination_0);
      this.warn_3epqxe$('Multiple automoves ' + moveIds + ' with no flag restrictions for state ' + '\n' + "To znamen\xE1, \u017Ee je tam v\xEDc tah\u016F, kter\xFD nemaj popisek. Bu\u010F mus\xED m\xEDt v\u0161echny krom 1 popisek, nebo mus\xED bejt po\u0161\xE9fovan\xFD pomoc\xED podminena/vyloucena, aby v\u017Edycky takovej byl maxim\xE1ln\u011B jeden, ten 'automatickej'", state);
    }
  };
  GameValidator.prototype.validateMovesAllHaveImageOrNot_0 = function (state) {
    var moves = this.helper.movesOf_ktq7vf$(state);
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== moves.length; ++tmp$) {
      var element = moves[tmp$];
      if (element.image == null)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(item.id);
    }
    var movesWithoutImages = toList_0(destination_0);
    var destination_1 = ArrayList_init();
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== moves.length; ++tmp$_1) {
      var element_0 = moves[tmp$_1];
      if (element_0.image != null)
        destination_1.add_11rb$(element_0);
    }
    var destination_2 = ArrayList_init(collectionSizeOrDefault(destination_1, 10));
    var tmp$_2;
    tmp$_2 = destination_1.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_2.add_11rb$(item_0.id);
    }
    var movesWithImages = toList_0(destination_2);
    var tmp$_3 = !movesWithImages.isEmpty();
    if (tmp$_3) {
      tmp$_3 = !movesWithoutImages.isEmpty();
    }
    if (tmp$_3) {
      this.warn_3epqxe$('Some moves have images ' + movesWithImages + " and some don't " + movesWithoutImages + '. ' + '\n' + 'KIKI to znamen\xE1, \u017Ee n\u011Bkter\xFD tahy tohodle stavu maj nastavenej obr\xE1zek a n\u011Bkter\xFD nemaj!', state);
    }
  };
  GameValidator.prototype.validateMoves_6taknv$ = function (ignoreAcrossChapters) {
    if (ignoreAcrossChapters === void 0)
      ignoreAcrossChapters = true;
    var tmp$, tmp$_0;
    this.validateNotDuplicitMoveIds();
    tmp$ = this.gameConfig.moves;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var move = tmp$[tmp$_0];
      this.validateMove_0(move, ignoreAcrossChapters);
    }
  };
  GameValidator.prototype.validateNotDuplicitMoveIds = function () {
    var tmp$, tmp$_0;
    var duplicitIds = ArrayList_init();
    tmp$ = this.gameConfig.moves;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var move = tmp$[tmp$_0];
      if (duplicitIds.contains_11rb$(move.id)) {
        this.warn_3epqxe$('Move ' + move.id + ' already in text!' + '\n' + ' KIKI to znamen\xE1, \u017Ee je n\u011Bkolikr\xE1t v textu tohle id hrany, nejsp\xED\u0161 copy-paste p\u0159eklep.', void 0, move);
      }
      duplicitIds.add_11rb$(move.id);
    }
  };
  GameValidator.prototype.validateMove_0 = function (move, ignoreAcrossChapters) {
    if (ignoreAcrossChapters === void 0)
      ignoreAcrossChapters = true;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (!MOVE_ID_REGEX.matches_6bul2c$(move.id)) {
      this.warn_3epqxe$('Invalid move id: ' + move.id + ' ' + '\n' + "KIKI to znamen\xE1, \u017Ee tah mus\xED za\u010D\xEDnat na 'h'", void 0, move);
    }
    try {
      this.helper.stateById_61zpoe$(move.targetId);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        if (!move.acrossChapters() || !ignoreAcrossChapters) {
          this.warn_3epqxe$('Cannot find target ' + move.targetId + ' from move ' + move.id + ' ' + '\n' + "KIKI to znamen\xE1, \u017Ee hrana '" + move.id + "' m\xE1 \u0161patn\u011B nastavenej 'cil'", void 0, move);
        }
      }
       else
        throw e;
    }
    tmp$ = move.flagsDisallowing;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var flag = tmp$[tmp$_0];
      if (!contains_0(this.flags, flag)) {
        this.warn_3epqxe$('Non-existent flagsDisallowing ' + flag + ' for move ' + move.id + ' ' + '\n' + 'KIKI to znamen\xE1, \u017Ee ta vlajka neexistuje - neni nikde nastaven\xE1 pomoc\xED p\u0159\xEDznaku, ani to neni existuj\xEDc\xED tah/uzel. Jo a odd\u011Blujou se \u010D\xE1rkou!', void 0, move);
      }
    }
    tmp$_1 = move.flagsRequired;
    for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
      var flag_0 = tmp$_1[tmp$_2];
      if (!contains_0(this.flags, flag_0)) {
        this.warn_3epqxe$('Non-existent flagsRequired ' + flag_0 + ' for move ' + move.id + ' ' + '\n' + 'KIKI to znamen\xE1, \u017Ee ta vlajka neexistuje - neni nikde nastaven\xE1 pomoc\xED p\u0159\xEDznaku, ani to neni existuj\xEDc\xED tah/uzel. Jo a odd\u011Blujou se \u010D\xE1rkou!', void 0, move);
      }
    }
  };
  GameValidator.prototype.validate = function () {
    this.warningList.clear();
    this.validateMoves_6taknv$();
    this.validateStates();
    if (!this.warningList.isEmpty()) {
      var firstWarning = first(this.warningList);
      if (firstWarning.state != null) {
        throw StateException_init(firstWarning.state, firstWarning.message);
      }
       else if (firstWarning.move != null) {
        throw MoveException_init(firstWarning.move, firstWarning.message);
      }
      throw IllegalArgumentException_init(first(this.warningList).toString());
    }
  };
  GameValidator.prototype.warnings = function () {
    this.warningList.clear();
    this.validateMoves_6taknv$();
    this.validateStates();
    return copyToArray(this.warningList);
  };
  GameValidator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameValidator',
    interfaces: []
  };
  var incorrect2;
  var incorrect2_replacement;
  var incorrect3;
  function MyslenkaFixer() {
    this.incorrect = Regex_init('.*osoba=[^"\'].*');
  }
  MyslenkaFixer.prototype.find = function (content) {
    var tmp$;
    var index = 0;
    var lines = ArrayList_init();
    tmp$ = Regex_init('\n').split_905azu$(content, 0).iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      var newLine = this.findLine_bm4lxs$(line, index);
      lines.add_11rb$(newLine);
      index = index + 1 | 0;
    }
    return copyToArray(lines);
  };
  MyslenkaFixer.prototype.fix_61zpoe$ = function (content) {
    var regex = Regex_init(incorrect2);
    var replacement = incorrect2_replacement;
    var result = regex.replace_x2uqeu$(content, replacement);
    var tmp$ = result;
    var regex_0 = Regex_init('osoba=([a-z]*)>');
    var replacement_0 = incorrect2_replacement;
    result = regex_0.replace_x2uqeu$(tmp$, replacement_0);
    result = replace(result, '<\/primarec osoba=', '<primarec osoba=');
    return result;
  };
  MyslenkaFixer.prototype.findLine_bm4lxs$ = function (line, index) {
    var fixed = this.fix_61zpoe$(line);
    if (this.incorrect.matches_6bul2c$(fixed)) {
      throw new IncorrectLineException(index, line);
    }
    return fixed;
  };
  MyslenkaFixer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MyslenkaFixer',
    interfaces: []
  };
  function Variable(name, value) {
    Variable$Companion_getInstance();
    this.name = name;
    this.value = value;
  }
  function Variable$Companion() {
    Variable$Companion_instance = this;
    this.REGEX = Regex_init('promenna\\(([a-z_\\-]+)\\)([+\\-]?=)(.*)');
  }
  Variable$Companion.prototype.parse_61zpoe$ = function (string) {
    if (this.REGEX.matches_6bul2c$(string)) {
      var variableName = this.REGEX.replace_x2uqeu$(string, '$1');
      var operator = this.REGEX.replace_x2uqeu$(string, '$2');
      var expression = this.REGEX.replace_x2uqeu$(string, '$3');
      if (equals(operator, '+=')) {
        expression = variableName + '+' + expression;
      }
       else if (equals(operator, '-=')) {
        expression = variableName + '-' + expression;
      }
      return new Variable(variableName, expression);
    }
     else {
      throw IllegalArgumentException_init('Does not match ' + string);
    }
  };
  Variable$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Variable$Companion_instance = null;
  function Variable$Companion_getInstance() {
    if (Variable$Companion_instance === null) {
      new Variable$Companion();
    }
    return Variable$Companion_instance;
  }
  Variable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Variable',
    interfaces: []
  };
  Variable.prototype.component1 = function () {
    return this.name;
  };
  Variable.prototype.component2 = function () {
    return this.value;
  };
  Variable.prototype.copy_puj7f4$ = function (name, value) {
    return new Variable(name === void 0 ? this.name : name, value === void 0 ? this.value : value);
  };
  Variable.prototype.toString = function () {
    return 'Variable(name=' + Kotlin.toString(this.name) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  Variable.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Variable.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.value, other.value)))));
  };
  var package$eu = _.eu || (_.eu = {});
  var package$karelhovorka = package$eu.karelhovorka || (package$eu.karelhovorka = {});
  var package$textgame = package$karelhovorka.textgame || (package$karelhovorka.textgame = {});
  var package$core = package$textgame.core || (package$textgame.core = {});
  var package$bo = package$core.bo || (package$core.bo = {});
  package$bo.Chapter = Chapter;
  Object.defineProperty(EndType, 'NONE', {
    get: EndType$NONE_getInstance
  });
  Object.defineProperty(EndType, 'LOSE', {
    get: EndType$LOSE_getInstance
  });
  Object.defineProperty(EndType, 'WIN', {
    get: EndType$WIN_getInstance
  });
  Object.defineProperty(EndType, 'UNFINISHED', {
    get: EndType$UNFINISHED_getInstance
  });
  Object.defineProperty(EndType, 'MISSING_CHAPTER', {
    get: EndType$MISSING_CHAPTER_getInstance
  });
  package$bo.EndType = EndType;
  package$bo.FlagGroup = FlagGroup;
  Object.defineProperty(FlagType, 'AT_LEAST_ONE', {
    get: FlagType$AT_LEAST_ONE_getInstance
  });
  Object.defineProperty(FlagType, 'EXACTLY_ONE', {
    get: FlagType$EXACTLY_ONE_getInstance
  });
  package$bo.FlagType = FlagType;
  package$bo.GameCompletion = GameCompletion;
  Object.defineProperty(GameConfig, 'Companion', {
    get: GameConfig$Companion_getInstance
  });
  package$bo.GameConfig = GameConfig;
  package$bo.GameState = GameState;
  Object.defineProperty(package$bo, 'prefix', {
    get: function () {
      return prefix;
    }
  });
  package$bo.isInteractive_ay6k20$ = isInteractive;
  package$bo.isInteractive_xyj7z9$ = isInteractive_0;
  package$bo.removeNotInteractive_xyj7z9$ = removeNotInteractive;
  package$bo.checkMultipleNonInteractive_xyj7z9$ = checkMultipleNonInteractive;
  package$bo.Move = Move;
  package$bo.MultiString = MultiString;
  package$bo.State = State;
  var package$builder = package$core.builder || (package$core.builder = {});
  package$builder.endType_bm4lxs$ = endType;
  package$builder.errorIfParameter_h6sd2a$ = errorIfParameter;
  package$builder.moveId_pdl1vz$ = moveId;
  package$builder.parameterValue_pdl1vz$ = parameterValue;
  package$builder.parameterArray_pdl1vz$ = parameterArray;
  package$builder.ChapterBuilder = ChapterBuilder;
  package$builder.CharSequenceBuilder = CharSequenceBuilder;
  package$builder.GameConfigBuilder = GameConfigBuilder;
  Object.defineProperty(GameConverter, 'Companion', {
    get: GameConverter$Companion_getInstance
  });
  package$builder.GameConverter = GameConverter;
  package$builder.GameConverterContext = GameConverterContext;
  package$builder.LineParser = LineParser;
  package$builder.MoveBuilder = MoveBuilder;
  package$builder.StateBuilder = StateBuilder;
  Object.defineProperty(SuperStateBuilder, 'Companion', {
    get: SuperStateBuilder$Companion_getInstance
  });
  package$builder.SuperStateBuilder = SuperStateBuilder;
  package$builder.state_zhmc9d$ = state;
  package$builder.move_za6fqz$ = move;
  package$builder.game_shlv14$ = game;
  var package$exception = package$core.exception || (package$core.exception = {});
  package$exception.IncorrectLineException = IncorrectLineException;
  package$exception.MoveException_init_knwv4p$ = MoveException_init;
  package$exception.MoveException = MoveException;
  package$exception.StateException_init_w27nwz$ = StateException_init;
  package$exception.StateException = StateException;
  var package$util = package$core.util || (package$core.util = {});
  package$util.GameConfigHelper = GameConfigHelper;
  Object.defineProperty(GameConstants, 'Companion', {
    get: GameConstants$Companion_getInstance
  });
  package$util.GameConstants = GameConstants;
  Object.defineProperty(PathConstants, 'Companion', {
    get: PathConstants$Companion_getInstance
  });
  package$util.PathConstants = PathConstants;
  var package$validator = package$core.validator || (package$core.validator = {});
  Object.defineProperty(package$validator, 'STATE_ID_REGEX', {
    get: function () {
      return STATE_ID_REGEX;
    }
  });
  Object.defineProperty(package$validator, 'MOVE_ID_REGEX', {
    get: function () {
      return MOVE_ID_REGEX;
    }
  });
  package$validator.getFlags_u5fyh6$ = getFlags;
  package$validator.ValidatorWarning = ValidatorWarning;
  package$validator.GameValidator = GameValidator;
  Object.defineProperty(package$validator, 'incorrect2', {
    get: function () {
      return incorrect2;
    }
  });
  Object.defineProperty(package$validator, 'incorrect2_replacement', {
    get: function () {
      return incorrect2_replacement;
    }
  });
  Object.defineProperty(package$validator, 'incorrect3', {
    get: function () {
      return incorrect3;
    }
  });
  package$validator.MyslenkaFixer = MyslenkaFixer;
  Object.defineProperty(Variable, 'Companion', {
    get: Variable$Companion_getInstance
  });
  var package$variables = package$core.variables || (package$core.variables = {});
  package$variables.Variable = Variable;
  prefix = Regex_init('[hu]([^_]+)_.*');
  STATE_ID_REGEX = Regex_init('u[0-9A-Za-z_]*');
  MOVE_ID_REGEX = Regex_init('h[0-9A-Za-z_]*');
  incorrect2 = 'osoba=\u201C([^\u201C]*)\u201C>';
  incorrect2_replacement = "osoba='$1'>";
  incorrect3 = Regex_init('.*<myslenka [^>]*>[^<]*<myslenka .*');
  Kotlin.defineModule('textgame-core', _);
  return _;
}));

//# sourceMappingURL=textgame-core.js.map
