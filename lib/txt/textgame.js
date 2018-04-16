(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'textgame'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'textgame'.");
    }
    root.textgame = factory(typeof textgame === 'undefined' ? {} : textgame, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var equals = Kotlin.equals;
  var CharSequence = Kotlin.kotlin.CharSequence;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var Unit = Kotlin.kotlin.Unit;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var dropLast = Kotlin.kotlin.collections.dropLast_8ujjk8$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var throwUPAE = Kotlin.throwUPAE;
  var toString = Kotlin.toString;
  var throwCCE = Kotlin.throwCCE;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Pair = Kotlin.kotlin.Pair;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var Exception = Kotlin.kotlin.Exception;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var contains_0 = Kotlin.kotlin.text.contains_li3zpu$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var toMutableList_0 = Kotlin.kotlin.collections.toMutableList_us0mfu$;
  var numberToInt = Kotlin.numberToInt;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var getCallableRef = Kotlin.getCallableRef;
  var Annotation = Kotlin.kotlin.Annotation;
  EndType.prototype = Object.create(Enum.prototype);
  EndType.prototype.constructor = EndType;
  AutosaveListener.prototype = Object.create(AbstractGameListener.prototype);
  AutosaveListener.prototype.constructor = AutosaveListener;
  CompletedGameListener.prototype = Object.create(AbstractGameListener.prototype);
  CompletedGameListener.prototype.constructor = CompletedGameListener;
  MemoryGameSaver.prototype = Object.create(GameSaver.prototype);
  MemoryGameSaver.prototype.constructor = MemoryGameSaver;
  GameConverter$ConvertState.prototype = Object.create(Enum.prototype);
  GameConverter$ConvertState.prototype.constructor = GameConverter$ConvertState;
  IncorrectLineException.prototype = Object.create(Exception.prototype);
  IncorrectLineException.prototype.constructor = IncorrectLineException;
  GameLoopMinigame.prototype = Object.create(Minigame.prototype);
  GameLoopMinigame.prototype.constructor = GameLoopMinigame;
  MinigameState.prototype = Object.create(Enum.prototype);
  MinigameState.prototype.constructor = MinigameState;
  UnlockMiniGame.prototype = Object.create(GameLoopMinigame.prototype);
  UnlockMiniGame.prototype.constructor = UnlockMiniGame;
  LocalStorageGameSaver.prototype = Object.create(GameSaver.prototype);
  LocalStorageGameSaver.prototype.constructor = LocalStorageGameSaver;
  GameLoopBeat.prototype = Object.create(AbstractGameLoopBeat.prototype);
  GameLoopBeat.prototype.constructor = GameLoopBeat;
  JsGameLoopBeat.prototype = Object.create(AbstractGameLoopBeat.prototype);
  JsGameLoopBeat.prototype.constructor = JsGameLoopBeat;
  function Game(flags, gameConfig, listener, initialStateId, usePause, saver) {
    if (flags === void 0) {
      flags = ArrayList_init();
    }
    if (initialStateId === void 0)
      initialStateId = null;
    if (usePause === void 0)
      usePause = true;
    if (saver === void 0)
      saver = new MemoryGameSaver();
    this.flags = flags;
    this.gameConfig = gameConfig;
    this.initialStateId = initialStateId;
    this.usePause = usePause;
    this.saver = saver;
    this.gameConfigHelper = new GameConfigHelper(this.gameConfig);
    this.currentState = null;
    this.TESTING = new Game$TestingGame(this);
    this.listener = null;
    if (this.usePause) {
      this.listener = new GameListenerDelegate(listener);
    }
     else {
      this.listener = listener;
    }
    this.currentState = this.initState_0();
  }
  Game.prototype.initState_0 = function () {
    var tmp$;
    if (this.initialStateId == null) {
      tmp$ = this.gameConfigHelper.stateById_61zpoe$(this.gameConfig.startId);
    }
     else {
      tmp$ = this.gameConfigHelper.stateById_61zpoe$(ensureNotNull(this.initialStateId));
    }
    return tmp$;
  };
  Game.prototype.start = function () {
    this.listener.onStart_794nkt$(this);
    this.visitState_0(this.initState_0());
  };
  Game.prototype.restart = function () {
    this.flags.clear();
    this.listener.onRestart_794nkt$(this);
    this.start();
  };
  Game.prototype.save = function () {
    var gameState = this.state();
    this.saver.save(gameState);
    return gameState;
  };
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  Game.prototype.state = function () {
    return new GameState(copyToArray(this.flags), this.currentState.id);
  };
  Game.prototype.load = function () {
    var gameState = this.saver.load();
    this.initialStateId = gameState.currentStateId;
    this.currentState = this.gameConfigHelper.stateById_61zpoe$(gameState.currentStateId);
    this.flags.clear();
    addAll(this.flags, gameState.flags);
    println('loaded');
    return this;
  };
  Game.prototype.visitState_0 = function (state) {
    this.currentState = state;
    this.flags.add_11rb$(this.currentState.id);
    addAll(this.flags, this.currentState.flags);
    var moves = this.filterMoves_15v58o$(this.currentState);
    this.listener.onState_8v5zxy$(this.currentState, moves);
    if (moves.length === 0) {
      if (state.endType === EndType$NONE_getInstance()) {
        throw IllegalStateException_init("Just about to end with state '" + state.id + "' and no explicit endingType");
      }
      this.listener.onFinish_vi5hg2$(this, state.endType);
    }
     else {
      if (state.endType !== EndType$NONE_getInstance()) {
        throw IllegalStateException_init("State has explicit ending type, but moves out: '" + state.id + "'");
      }
    }
    if (moves.length === 1 && moves[0].isAutoMove()) {
      var move = moves[0];
      this.move(move.id);
    }
  };
  Game.prototype.move = function (moveId) {
    if (!contains(this.currentState.moveIds, moveId)) {
      throw IllegalStateException_init('Move ' + moveId + ' not found in state: ' + this.currentState.id);
    }
    this.move_8hvgvt$(this.gameConfigHelper.moveById_61zpoe$(moveId));
  };
  Game.prototype.continueMove = function () {
    if (Kotlin.isType(this.listener, GameListenerDelegate)) {
      this.listener.nextEvent();
    }
     else {
      throw IllegalStateException_init('Cannot continue when pausing is disabled');
    }
  };
  Game.prototype.move_8hvgvt$ = function (move) {
    this.flags.add_11rb$(move.id);
    addAll(this.flags, move.flags);
    this.listener.onMove_8hvgvt$(move);
    if (!this.gameConfigHelper.containsState_61zpoe$(move.targetId) && move.acrossChapters()) {
      this.listener.onFinish_vi5hg2$(this, EndType$UNFINISHED_getInstance());
      return;
    }
    var newState = this.gameConfigHelper.stateById_61zpoe$(move.targetId);
    this.visitState_0(newState);
  };
  Game.prototype.filterMoves_15v58o$ = function (state) {
    var tmp$, tmp$_0;
    var moves = ArrayList_init();
    tmp$ = state.moveIds;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var moveId = tmp$[tmp$_0];
      var move = this.gameConfigHelper.moveById_61zpoe$(moveId);
      if (this.canMove_8hvgvt$(move)) {
        moves.add_11rb$(move);
      }
    }
    checkMultipleNonInteractive(moves);
    if (isInteractive_0(moves)) {
      return copyToArray(removeNotInteractive(moves));
    }
    return copyToArray(moves);
  };
  Game.prototype.canMove_8hvgvt$ = function (move) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (move.selfConsuming && this.flags.contains_11rb$(move.id)) {
      return false;
    }
    var foundFlags = 0;
    tmp$ = move.flagsDisallowing;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var flag = tmp$[tmp$_0];
      if (this.flags.contains_11rb$(flag)) {
        foundFlags = foundFlags + 1 | 0;
      }
    }
    if (!(move.flagsDisallowing.length === 0) && foundFlags === move.flagsDisallowing.length) {
      return false;
    }
    tmp$_1 = move.flagsRequired;
    for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
      var flag_0 = tmp$_1[tmp$_2];
      if (!this.flags.contains_11rb$(flag_0)) {
        return false;
      }
    }
    return true;
  };
  Game.prototype.completed = function () {
    return gameCompleted(this.saver.loadCompletion(), this.gameConfig);
  };
  function Game$TestingGame($outer) {
    this.$outer = $outer;
  }
  Game$TestingGame.prototype.loadState = function (stateId) {
    this.$outer.visitState_0(this.$outer.gameConfigHelper.stateById_61zpoe$(stateId));
  };
  Game$TestingGame.prototype.clearFlags = function () {
    this.$outer.flags.clear();
  };
  Game$TestingGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TestingGame',
    interfaces: []
  };
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  function gameCompleted(gameCompletion, config) {
    return (gameCompletion.moveIds.length + gameCompletion.stateIds.length | 0) / (config.states.length + config.moves.length | 0);
  }
  function GameListener() {
  }
  GameListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GameListener',
    interfaces: []
  };
  function Chapter(id, name, categories, theme) {
    if (categories === void 0) {
      categories = [];
    }
    if (theme === void 0)
      theme = null;
    this.id = id;
    this.name = name;
    this.categories = categories;
    this.theme = theme;
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
  Chapter.prototype.copy_grh7s7$ = function (id, name, categories, theme) {
    return new Chapter(id === void 0 ? this.id : id, name === void 0 ? this.name : name, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme);
  };
  Chapter.prototype.toString = function () {
    return 'Chapter(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + ')';
  };
  Chapter.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    return result;
  };
  Chapter.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme)))));
  };
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
    this.startId = startId;
    this.states = states;
    this.moves = moves;
    this.chapters = chapters;
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
  function GameState(flags, currentStateId) {
    this.flags = flags;
    this.currentStateId = currentStateId;
  }
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
  GameState.prototype.copy_c879xe$ = function (flags, currentStateId) {
    return new GameState(flags === void 0 ? this.flags : flags, currentStateId === void 0 ? this.currentStateId : currentStateId);
  };
  GameState.prototype.toString = function () {
    return 'GameState(flags=' + Kotlin.toString(this.flags) + (', currentStateId=' + Kotlin.toString(this.currentStateId)) + ')';
  };
  GameState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentStateId) | 0;
    return result;
  };
  GameState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.currentStateId, other.currentStateId)))));
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
      throw IllegalStateException_init('V\xEDc neinteraktivn\xEDch tah\u016F najednou, to je pr\u016Fser');
    }
  }
  function Move(id, caption, image, illustration, text, selfConsuming, targetId, flags, flagsRequired, flagsDisallowing, categories, theme) {
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
  }
  Move.prototype.isAutoMove = function () {
    return this.caption == null && this.image == null;
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
  Move.prototype.copy_9h1efy$ = function (id, caption, image, illustration, text, selfConsuming, targetId, flags, flagsRequired, flagsDisallowing, categories, theme) {
    return new Move(id === void 0 ? this.id : id, caption === void 0 ? this.caption : caption, image === void 0 ? this.image : image, illustration === void 0 ? this.illustration : illustration, text === void 0 ? this.text : text, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, targetId === void 0 ? this.targetId : targetId, flags === void 0 ? this.flags : flags, flagsRequired === void 0 ? this.flagsRequired : flagsRequired, flagsDisallowing === void 0 ? this.flagsDisallowing : flagsDisallowing, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme);
  };
  Move.prototype.toString = function () {
    return 'Move(id=' + Kotlin.toString(this.id) + (', caption=' + Kotlin.toString(this.caption)) + (', image=' + Kotlin.toString(this.image)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', text=' + Kotlin.toString(this.text)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', targetId=' + Kotlin.toString(this.targetId)) + (', flags=' + Kotlin.toString(this.flags)) + (', flagsRequired=' + Kotlin.toString(this.flagsRequired)) + (', flagsDisallowing=' + Kotlin.toString(this.flagsDisallowing)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + ')';
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
    return result;
  };
  Move.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.caption, other.caption) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.targetId, other.targetId) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.flagsRequired, other.flagsRequired) && Kotlin.equals(this.flagsDisallowing, other.flagsDisallowing) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme)))));
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
    this.rnd = RandomUtil_getInstance().nextInt_za3lpa$(this.strings.length);
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
  EndType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EndType',
    interfaces: [Enum]
  };
  function EndType$values() {
    return [EndType$NONE_getInstance(), EndType$LOSE_getInstance(), EndType$WIN_getInstance(), EndType$UNFINISHED_getInstance()];
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
      default:throwISE('No enum constant eu.karelhovorka.textgame.core.bo.EndType.' + name);
    }
  }
  EndType.valueOf_61zpoe$ = EndType$valueOf;
  function State(id, text, illustration, chapterId, flags, moveIds, categories, endType, theme, background) {
    if (illustration === void 0)
      illustration = null;
    if (flags === void 0) {
      flags = [];
    }
    if (moveIds === void 0) {
      moveIds = [];
    }
    if (categories === void 0) {
      categories = [];
    }
    if (endType === void 0)
      endType = EndType$NONE_getInstance();
    if (theme === void 0)
      theme = null;
    if (background === void 0)
      background = null;
    this.id = id;
    this.text = text;
    this.illustration = illustration;
    this.chapterId = chapterId;
    this.flags = flags;
    this.moveIds = moveIds;
    this.categories = categories;
    this.endType = endType;
    this.theme = theme;
    this.background = background;
  }
  State.prototype.isAutoMove = function () {
    return this.text == null && this.illustration == null;
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
    return this.moveIds;
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
  State.prototype.copy_xz83tj$ = function (id, text, illustration, chapterId, flags, moveIds, categories, endType, theme, background) {
    return new State(id === void 0 ? this.id : id, text === void 0 ? this.text : text, illustration === void 0 ? this.illustration : illustration, chapterId === void 0 ? this.chapterId : chapterId, flags === void 0 ? this.flags : flags, moveIds === void 0 ? this.moveIds : moveIds, categories === void 0 ? this.categories : categories, endType === void 0 ? this.endType : endType, theme === void 0 ? this.theme : theme, background === void 0 ? this.background : background);
  };
  State.prototype.toString = function () {
    return 'State(id=' + Kotlin.toString(this.id) + (', text=' + Kotlin.toString(this.text)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', chapterId=' + Kotlin.toString(this.chapterId)) + (', flags=' + Kotlin.toString(this.flags)) + (', moveIds=' + Kotlin.toString(this.moveIds)) + (', categories=' + Kotlin.toString(this.categories)) + (', endType=' + Kotlin.toString(this.endType)) + (', theme=' + Kotlin.toString(this.theme)) + (', background=' + Kotlin.toString(this.background)) + ')';
  };
  State.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.illustration) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapterId) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.moveIds) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.endType) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    result = result * 31 + Kotlin.hashCode(this.background) | 0;
    return result;
  };
  State.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.moveIds, other.moveIds) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.endType, other.endType) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.background, other.background)))));
  };
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function GameBot(initialGame) {
    this.initialGame = initialGame;
    this.crawlers = ArrayList_init();
    this.conditionFlags = null;
    this.visitedStates = LinkedHashSet_init();
    this.visitedMoves = LinkedHashSet_init();
    var tmp$, tmp$_0;
    var conditionList = ArrayList_init();
    tmp$ = this.initialGame.gameConfig.moves;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var move = tmp$[tmp$_0];
      addAll(conditionList, move.flagsDisallowing);
      addAll(conditionList, move.flagsRequired);
    }
    this.conditionFlags = copyToArray(conditionList);
    this.crawlersCount = 0;
  }
  GameBot.prototype.start = function () {
    var firstCrawler = new GameCrawlContext(this, this.initialGame);
    this.addCrawler_0(firstCrawler);
    this.next();
    return this.crawlersCount;
  };
  GameBot.prototype.next = function () {
    if (!this.crawlers.isEmpty()) {
      println('remaining: ' + this.crawlers.size + '/' + this.crawlersCount);
      var crawler = random(this.crawlers);
      this.crawlers.remove_11rb$(crawler);
      crawler.start();
    }
     else {
      println('crawling done, game played: ' + this.crawlersCount);
      this.checkVisitedAll_0();
    }
  };
  GameBot.prototype.checkVisitedAll_0 = function () {
    var $receiver = this.initialGame.gameConfig.states;
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      if (!this.visitedStates.contains_11rb$(element.id))
        destination.add_11rb$(element);
    }
    var $receiver_0 = this.initialGame.gameConfig.moves;
    var destination_0 = ArrayList_init();
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element_0 = $receiver_0[tmp$_0];
      if (!this.visitedMoves.contains_11rb$(element_0.id))
        destination_0.add_11rb$(element_0);
    }
  };
  GameBot.prototype.affectsConditions_8hvgvt$ = function (move) {
    var tmp$, tmp$_0;
    tmp$ = move.flags;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var flag = tmp$[tmp$_0];
      if (contains(this.conditionFlags, flag)) {
        return true;
      }
    }
    return contains(this.conditionFlags, move.id);
  };
  GameBot.prototype.addCrawler_0 = function (crawler) {
    this.crawlers.add_11rb$(crawler);
    this.crawlersCount = this.crawlersCount + 1 | 0;
  };
  GameBot.prototype.cloneFromMove_fcuf89$ = function (parentContext, move) {
    var crawler = new GameCrawlContext(this, parentContext.game, move);
    this.addCrawler_0(crawler);
  };
  GameBot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameBot',
    interfaces: []
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function GameCrawlContext(gameBot, originalGame, move) {
    if (move === void 0)
      move = null;
    this.gameBot = gameBot;
    this.move = move;
    this.game = null;
    this.visitedStateIds = LinkedHashMap_init();
    this.STATE_LIMIT = 2;
    this.game = this.copyGame_794nkt$(originalGame);
  }
  GameCrawlContext.prototype.onRestart_794nkt$ = function (game) {
    throw IllegalStateException_init('bot does not support restarts');
  };
  GameCrawlContext.prototype.copyGame_794nkt$ = function (originalGame) {
    return new Game(toMutableList(originalGame.flags), originalGame.gameConfig, this, originalGame.currentState.id, false);
  };
  GameCrawlContext.prototype.onMove_8hvgvt$ = function (move) {
    println(move.id);
    this.gameBot.visitedMoves.add_11rb$(move.id);
  };
  GameCrawlContext.prototype.onStart_794nkt$ = function (game) {
  };
  GameCrawlContext.prototype.onFinish_vi5hg2$ = function (game, endType) {
    if (endType === EndType$NONE_getInstance()) {
      throw IllegalStateException_init('Illegal end ' + endType);
    }
    println('finished');
    this.gameBot.next();
  };
  GameCrawlContext.prototype.onState_8v5zxy$ = function (state, moves) {
    var tmp$;
    print(state.id + ' -> ');
    this.gameBot.visitedStates.add_11rb$(state.id);
    var $receiver = this.visitedStateIds;
    var key = state.id;
    var tmp$_0;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var answer = 0;
      $receiver.put_xwzc9p$(key, answer);
      tmp$_0 = answer;
    }
     else {
      tmp$_0 = value;
    }
    var visitCount = tmp$_0;
    if (visitCount > this.STATE_LIMIT) {
      throw IllegalStateException_init('Too many visits of a state: ' + state.id);
    }
    if (isInteractive(moves)) {
      tmp$ = dropLast(this.filterUnimportantMoves_tfme49$(moves), 1).iterator();
      while (tmp$.hasNext()) {
        var move = tmp$.next();
        if (this.game.flags.contains_11rb$(move.id)) {
          throw IllegalStateException_init('WTF');
        }
        this.gameBot.cloneFromMove_fcuf89$(this, move);
      }
      this.game.move_8hvgvt$(random_0(moves));
    }
  };
  GameCrawlContext.prototype.onPause = function () {
    throw IllegalStateException_init('Bot should not be used with pause');
  };
  GameCrawlContext.prototype.filterUnimportantMoves_tfme49$ = function (moves) {
    var tmp$;
    if (moves.length === 1) {
      return moves;
    }
    var result = ArrayList_init();
    var destination = LinkedHashMap_init();
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== moves.length; ++tmp$_0) {
      var element = moves[tmp$_0];
      var key = element.targetId;
      var tmp$_0_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element);
    }
    var movesByTarget = destination;
    tmp$ = movesByTarget.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var targetId = tmp$_1.key;
      var movesInTarget = tmp$_1.value;
      var destination_0 = ArrayList_init();
      var tmp$_2;
      tmp$_2 = movesInTarget.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        if (!this.gameBot.affectsConditions_8hvgvt$(element_0))
          destination_0.add_11rb$(element_0);
      }
      var unAffectedByConditions = destination_0;
      var destination_1 = ArrayList_init();
      var tmp$_3;
      tmp$_3 = movesInTarget.iterator();
      while (tmp$_3.hasNext()) {
        var element_1 = tmp$_3.next();
        if (this.gameBot.affectsConditions_8hvgvt$(element_1))
          destination_1.add_11rb$(element_1);
      }
      var affectdByConditions = destination_1;
      if (movesInTarget.size === 1 || unAffectedByConditions.isEmpty()) {
        result.addAll_brywnq$(movesInTarget);
      }
       else {
        if (!affectdByConditions.isEmpty()) {
          result.addAll_brywnq$(affectdByConditions);
        }
        if (!unAffectedByConditions.isEmpty()) {
          result.add_11rb$(first(unAffectedByConditions));
        }
      }
    }
    return copyToArray(result);
  };
  GameCrawlContext.prototype.start = function () {
    if (this.move != null) {
      this.game.move(ensureNotNull(this.move).id);
    }
     else {
      this.game.start();
    }
  };
  GameCrawlContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameCrawlContext',
    interfaces: [GameListener]
  };
  function AbstractGameListener() {
  }
  AbstractGameListener.prototype.onMove_8hvgvt$ = function (move) {
  };
  AbstractGameListener.prototype.onRestart_794nkt$ = function (game) {
  };
  AbstractGameListener.prototype.onStart_794nkt$ = function (game) {
  };
  AbstractGameListener.prototype.onFinish_vi5hg2$ = function (game, endType) {
  };
  AbstractGameListener.prototype.onState_8v5zxy$ = function (state, moves) {
  };
  AbstractGameListener.prototype.onPause = function () {
  };
  AbstractGameListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractGameListener',
    interfaces: [GameListener]
  };
  function AutosaveListener(saver) {
    AbstractGameListener.call(this);
    this.saver = saver;
    this.game_2p4rnt$_0 = this.game_2p4rnt$_0;
  }
  Object.defineProperty(AutosaveListener.prototype, 'game', {
    get: function () {
      if (this.game_2p4rnt$_0 == null)
        return throwUPAE('game');
      return this.game_2p4rnt$_0;
    },
    set: function (game) {
      this.game_2p4rnt$_0 = game;
    }
  });
  AutosaveListener.prototype.onMove_8hvgvt$ = function (move) {
    this.saver.autosave(this.game.state());
  };
  AutosaveListener.prototype.onState_8v5zxy$ = function (state, moves) {
    this.saver.autosave(this.game.state());
  };
  AutosaveListener.prototype.onRestart_794nkt$ = function (game) {
    this.game = game;
  };
  AutosaveListener.prototype.onStart_794nkt$ = function (game) {
    this.game = game;
  };
  AutosaveListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AutosaveListener',
    interfaces: [AbstractGameListener]
  };
  function CompletedGameListener(saver, stateIds, moveIds) {
    if (stateIds === void 0) {
      stateIds = LinkedHashSet_init();
    }
    if (moveIds === void 0) {
      moveIds = LinkedHashSet_init();
    }
    AbstractGameListener.call(this);
    this.saver = saver;
    this.stateIds = stateIds;
    this.moveIds = moveIds;
    var completion = this.saver.loadCompletion();
    addAll(this.stateIds, completion.stateIds);
    addAll(this.moveIds, completion.moveIds);
  }
  CompletedGameListener.prototype.onMove_8hvgvt$ = function (move) {
    if (!this.moveIds.contains_11rb$(move.id)) {
      this.moveIds.add_11rb$(move.id);
      this.saver.save_6d5tlo$(new GameCompletion(copyToArray(this.stateIds), copyToArray(this.moveIds)));
    }
  };
  CompletedGameListener.prototype.onState_8v5zxy$ = function (state, moves) {
    if (!this.stateIds.contains_11rb$(state.id)) {
      this.stateIds.add_11rb$(state.id);
      this.saver.save_6d5tlo$(new GameCompletion(copyToArray(this.stateIds), copyToArray(this.moveIds)));
    }
  };
  CompletedGameListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompletedGameListener',
    interfaces: [AbstractGameListener]
  };
  function ConsoleGameListener() {
    this.game_otrcmw$_0 = this.game_otrcmw$_0;
  }
  ConsoleGameListener.prototype.onRestart_794nkt$ = function (game) {
    println('restart');
  };
  ConsoleGameListener.prototype.onPause = function () {
    println('PAUSE');
  };
  Object.defineProperty(ConsoleGameListener.prototype, 'game', {
    get: function () {
      if (this.game_otrcmw$_0 == null)
        return throwUPAE('game');
      return this.game_otrcmw$_0;
    },
    set: function (game) {
      this.game_otrcmw$_0 = game;
    }
  });
  ConsoleGameListener.prototype.onState_8v5zxy$ = function (state, moves) {
    if (state.text != null) {
      println('----');
      println(state.text);
    }
    if (isInteractive(moves)) {
      println('----');
      for (var index = 0; index !== moves.length; ++index) {
        var move = moves[index];
        println(index.toString() + ' - ' + move.id + ' - ' + toString(move.caption));
      }
      this.expectAnswer_8v5zxy$(state, moves);
    }
     else {
      this.requireKey();
    }
    println('----');
  };
  ConsoleGameListener.prototype.requireKey = function () {
  };
  ConsoleGameListener.prototype.expectAnswer_8v5zxy$ = function (state, moves) {
  };
  ConsoleGameListener.prototype.onMove_8hvgvt$ = function (move) {
    if (move.caption != null) {
      println(move.id + ' ' + toString(move.caption));
    }
    if (move.text != null) {
      println(toString(move.text));
    }
    if (move.caption == null && move.text == null) {
      println('Invisible move: ' + move.id);
    }
  };
  ConsoleGameListener.prototype.onStart_794nkt$ = function (game) {
    println('--START--');
    this.game = game;
  };
  ConsoleGameListener.prototype.onFinish_vi5hg2$ = function (game, endType) {
    println('--KONEC--');
  };
  ConsoleGameListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConsoleGameListener',
    interfaces: [GameListener]
  };
  function CountingGameListener(onState, onMove, onStart, onFinish) {
    if (onState === void 0)
      onState = 0;
    if (onMove === void 0)
      onMove = 0;
    if (onStart === void 0)
      onStart = 0;
    if (onFinish === void 0)
      onFinish = 0;
    this.onState = onState;
    this.onMove = onMove;
    this.onStart = onStart;
    this.onFinish = onFinish;
  }
  CountingGameListener.prototype.onRestart_794nkt$ = function (game) {
  };
  CountingGameListener.prototype.onPause = function () {
  };
  CountingGameListener.prototype.onState_8v5zxy$ = function (state, moves) {
    this.onState = this.onState + 1 | 0;
  };
  CountingGameListener.prototype.onMove_8hvgvt$ = function (move) {
    this.onMove = this.onMove + 1 | 0;
  };
  CountingGameListener.prototype.onStart_794nkt$ = function (game) {
    this.onStart = this.onStart + 1 | 0;
  };
  CountingGameListener.prototype.onFinish_vi5hg2$ = function (game, endType) {
    this.onFinish = this.onFinish + 1 | 0;
  };
  CountingGameListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CountingGameListener',
    interfaces: [GameListener]
  };
  CountingGameListener.prototype.component1 = function () {
    return this.onState;
  };
  CountingGameListener.prototype.component2 = function () {
    return this.onMove;
  };
  CountingGameListener.prototype.component3 = function () {
    return this.onStart;
  };
  CountingGameListener.prototype.component4 = function () {
    return this.onFinish;
  };
  CountingGameListener.prototype.copy_tjonv8$ = function (onState, onMove, onStart, onFinish) {
    return new CountingGameListener(onState === void 0 ? this.onState : onState, onMove === void 0 ? this.onMove : onMove, onStart === void 0 ? this.onStart : onStart, onFinish === void 0 ? this.onFinish : onFinish);
  };
  CountingGameListener.prototype.toString = function () {
    return 'CountingGameListener(onState=' + Kotlin.toString(this.onState) + (', onMove=' + Kotlin.toString(this.onMove)) + (', onStart=' + Kotlin.toString(this.onStart)) + (', onFinish=' + Kotlin.toString(this.onFinish)) + ')';
  };
  CountingGameListener.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.onState) | 0;
    result = result * 31 + Kotlin.hashCode(this.onMove) | 0;
    result = result * 31 + Kotlin.hashCode(this.onStart) | 0;
    result = result * 31 + Kotlin.hashCode(this.onFinish) | 0;
    return result;
  };
  CountingGameListener.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.onState, other.onState) && Kotlin.equals(this.onMove, other.onMove) && Kotlin.equals(this.onStart, other.onStart) && Kotlin.equals(this.onFinish, other.onFinish)))));
  };
  function EmptyListener() {
  }
  EmptyListener.prototype.onRestart_794nkt$ = function (game) {
  };
  EmptyListener.prototype.onPause = function () {
  };
  EmptyListener.prototype.onMove_8hvgvt$ = function (move) {
  };
  EmptyListener.prototype.onStart_794nkt$ = function (game) {
  };
  EmptyListener.prototype.onFinish_vi5hg2$ = function (game, endType) {
  };
  EmptyListener.prototype.onState_8v5zxy$ = function (state, moves) {
  };
  EmptyListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmptyListener',
    interfaces: [GameListener]
  };
  function ListGameListener(gameListeners) {
    this.gameListeners = gameListeners;
  }
  ListGameListener.prototype.onRestart_794nkt$ = function (game) {
    var tmp$, tmp$_0;
    tmp$ = this.gameListeners;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var listener = tmp$[tmp$_0];
      listener.onRestart_794nkt$(game);
    }
  };
  ListGameListener.prototype.onPause = function () {
    var tmp$, tmp$_0;
    tmp$ = this.gameListeners;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var listener = tmp$[tmp$_0];
      listener.onPause();
    }
  };
  ListGameListener.prototype.onState_8v5zxy$ = function (state, moves) {
    var tmp$, tmp$_0;
    tmp$ = this.gameListeners;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var listener = tmp$[tmp$_0];
      listener.onState_8v5zxy$(state, moves);
    }
  };
  ListGameListener.prototype.onMove_8hvgvt$ = function (move) {
    var tmp$, tmp$_0;
    tmp$ = this.gameListeners;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var listener = tmp$[tmp$_0];
      listener.onMove_8hvgvt$(move);
    }
  };
  ListGameListener.prototype.onStart_794nkt$ = function (game) {
    var tmp$, tmp$_0;
    tmp$ = this.gameListeners;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var listener = tmp$[tmp$_0];
      listener.onStart_794nkt$(game);
    }
  };
  ListGameListener.prototype.onFinish_vi5hg2$ = function (game, endType) {
    var tmp$, tmp$_0;
    tmp$ = this.gameListeners;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var listener = tmp$[tmp$_0];
      listener.onFinish_vi5hg2$(game, endType);
    }
  };
  ListGameListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListGameListener',
    interfaces: [GameListener]
  };
  ListGameListener.prototype.component1 = function () {
    return this.gameListeners;
  };
  ListGameListener.prototype.copy_rcx6kj$ = function (gameListeners) {
    return new ListGameListener(gameListeners === void 0 ? this.gameListeners : gameListeners);
  };
  ListGameListener.prototype.toString = function () {
    return 'ListGameListener(gameListeners=' + Kotlin.toString(this.gameListeners) + ')';
  };
  ListGameListener.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gameListeners) | 0;
    return result;
  };
  ListGameListener.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.gameListeners, other.gameListeners))));
  };
  function Event(name, data, data2) {
    if (data2 === void 0)
      data2 = null;
    this.name = name;
    this.data = data;
    this.data2 = data2;
  }
  Event.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Event',
    interfaces: []
  };
  Event.prototype.component1 = function () {
    return this.name;
  };
  Event.prototype.component2 = function () {
    return this.data;
  };
  Event.prototype.component3 = function () {
    return this.data2;
  };
  Event.prototype.copy_uekhwh$ = function (name, data, data2) {
    return new Event(name === void 0 ? this.name : name, data === void 0 ? this.data : data, data2 === void 0 ? this.data2 : data2);
  };
  Event.prototype.toString = function () {
    return 'Event(name=' + Kotlin.toString(this.name) + (', data=' + Kotlin.toString(this.data)) + (', data2=' + Kotlin.toString(this.data2)) + ')';
  };
  Event.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    result = result * 31 + Kotlin.hashCode(this.data2) | 0;
    return result;
  };
  Event.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.data, other.data) && Kotlin.equals(this.data2, other.data2)))));
  };
  function GameListenerDelegate(listener) {
    this.listener = listener;
    this.paused = false;
    this.eventStack = ArrayList_init();
  }
  GameListenerDelegate.prototype.onPause = function () {
    throw IllegalStateException_init('Should not be called directly');
  };
  GameListenerDelegate.prototype.onRestart_794nkt$ = function (game) {
    this.eventStack.clear();
    this.paused = false;
    this.listener.onRestart_794nkt$(game);
  };
  GameListenerDelegate.prototype.onState_8v5zxy$ = function (state, moves) {
    if (this.eventStack.isEmpty() && !this.paused) {
      this.listener.onState_8v5zxy$(state, moves);
    }
     else {
      this.eventStack.add_11rb$(new Event('onState', state, moves));
    }
    if (!state.isAutoMove() && !isInteractive(moves)) {
      this.pauseIfNotPaused_0();
    }
  };
  GameListenerDelegate.prototype.onMove_8hvgvt$ = function (move) {
    if (this.eventStack.isEmpty() && !this.paused) {
      this.listener.onMove_8hvgvt$(move);
      if (move.text != null) {
        this.pauseIfNotPaused_0();
      }
    }
     else {
      if (!move.isAutoMove()) {
        this.eventStack.add_11rb$(new Event('onMove', move));
        this.pauseIfNotPaused_0();
      }
    }
  };
  GameListenerDelegate.prototype.pauseIfNotPaused_0 = function () {
    if (!this.paused) {
      this.paused = true;
      this.listener.onPause();
    }
  };
  GameListenerDelegate.prototype.onStart_794nkt$ = function (game) {
    this.listener.onStart_794nkt$(game);
  };
  GameListenerDelegate.prototype.onFinish_vi5hg2$ = function (game, endType) {
    if (this.eventStack.isEmpty()) {
      this.paused = false;
      this.listener.onFinish_vi5hg2$(game, endType);
    }
     else {
      this.eventStack.add_11rb$(new Event('onFinish', game, endType));
      this.pauseIfNotPaused_0();
    }
  };
  GameListenerDelegate.prototype.nextEvent = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    if (this.eventStack.isEmpty()) {
      throw IllegalStateException_init('EventStack is empty!');
    }
    var first_0 = this.eventStack.removeAt_za3lpa$(0);
    if (equals(first_0.name, 'onState')) {
      var state = Kotlin.isType(tmp$ = first_0.data, State) ? tmp$ : throwCCE();
      var moves = ensureNotNull((tmp$_0 = first_0.data2) == null || Kotlin.isArray(tmp$_0) ? tmp$_0 : throwCCE());
      this.listener.onState_8v5zxy$(state, moves);
    }
     else if (equals(first_0.name, 'onMove')) {
      this.listener.onMove_8hvgvt$(Kotlin.isType(tmp$_1 = first_0.data, Move) ? tmp$_1 : throwCCE());
    }
     else if (equals(first_0.name, 'onFinish')) {
      var endType = Kotlin.isType(tmp$_2 = first_0.data2, EndType) ? tmp$_2 : throwCCE();
      this.listener.onFinish_vi5hg2$(Kotlin.isType(tmp$_3 = first_0.data, Game) ? tmp$_3 : throwCCE(), endType);
    }
     else if (equals(first_0.name, 'onStart')) {
      this.listener.onStart_794nkt$(Kotlin.isType(tmp$_4 = first_0.data, Game) ? tmp$_4 : throwCCE());
    }
     else {
      throw IllegalArgumentException_init('Invalid name: ' + first_0.name);
    }
    this.paused = false;
    if (this.eventStack.size === 1 && equals(first(this.eventStack).name, 'onFinish')) {
      var second = this.eventStack.removeAt_za3lpa$(0);
      var endType_0 = Kotlin.isType(tmp$_5 = second.data2, EndType) ? tmp$_5 : throwCCE();
      var game = Kotlin.isType(tmp$_6 = second.data, Game) ? tmp$_6 : throwCCE();
      this.listener.onFinish_vi5hg2$(game, endType_0);
    }
    if (!this.eventStack.isEmpty()) {
      this.pauseIfNotPaused_0();
    }
  };
  GameListenerDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameListenerDelegate',
    interfaces: [GameListener]
  };
  function GameSaver() {
    GameSaver$Companion_getInstance();
  }
  GameSaver.prototype.save = function (game) {
    this.save_nigx55$(GameSaver$Companion_getInstance().MAIN_SAVE, game);
  };
  GameSaver.prototype.load = function () {
    return this.load_61zpoe$(GameSaver$Companion_getInstance().MAIN_SAVE);
  };
  GameSaver.prototype.hasSave = function () {
    return this.has_61zpoe$(GameSaver$Companion_getInstance().MAIN_SAVE);
  };
  GameSaver.prototype.autosave = function (game) {
    this.save_nigx55$(GameSaver$Companion_getInstance().AUTOSAVE, game);
  };
  GameSaver.prototype.autoload = function () {
    return this.load_61zpoe$(GameSaver$Companion_getInstance().AUTOSAVE);
  };
  GameSaver.prototype.hasAutoSave = function () {
    return this.has_61zpoe$(GameSaver$Companion_getInstance().AUTOSAVE);
  };
  function GameSaver$Companion() {
    GameSaver$Companion_instance = this;
    this.VISITED = 'VISITED';
    this.AUTOSAVE = 'AUTOSAVE';
    this.MAIN_SAVE = 'SAVE';
  }
  GameSaver$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameSaver$Companion_instance = null;
  function GameSaver$Companion_getInstance() {
    if (GameSaver$Companion_instance === null) {
      new GameSaver$Companion();
    }
    return GameSaver$Companion_instance;
  }
  GameSaver.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameSaver',
    interfaces: []
  };
  function MemoryGameSaver() {
    GameSaver.call(this);
    this.gameCompletion_0 = new GameCompletion();
    this.map_0 = LinkedHashMap_init();
  }
  MemoryGameSaver.prototype.save_6d5tlo$ = function (gameCompletion) {
    this.gameCompletion_0 = gameCompletion;
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  MemoryGameSaver.prototype.loadCompletion = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  MemoryGameSaver.prototype.save_nigx55$ = function (name, game) {
    this.map_0.put_xwzc9p$(name, game);
  };
  MemoryGameSaver.prototype.load_61zpoe$ = function (name) {
    return getOrThrow(this.map_0, name);
  };
  var Map = Kotlin.kotlin.collections.Map;
  MemoryGameSaver.prototype.has_61zpoe$ = function (name) {
    var $receiver = this.map_0;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(name);
  };
  MemoryGameSaver.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemoryGameSaver',
    interfaces: [GameSaver]
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
    var tmp$, tmp$_0;
    var moves = ArrayList_init();
    tmp$ = state.moveIds;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var moveId = tmp$[tmp$_0];
      var move = getOrThrow(this.movesById_0, moveId);
      moves.add_11rb$(move);
    }
    return copyToArray(moves);
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
  GameConfigHelper.prototype.moveExists_puj7f4$ = function (from, to) {
    var tmp$, tmp$_0;
    if (!this.statesById_0.containsKey_11rb$(from)) {
      return false;
    }
    var state = getOrThrow(this.statesById_0, from);
    tmp$ = state.moveIds;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var moveId = tmp$[tmp$_0];
      if (this.movesById_0.containsKey_11rb$(moveId)) {
        var move = getOrThrow(this.movesById_0, moveId);
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
      tmp$_1 = state.moveIds;
      for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
        var moveId = tmp$_1[tmp$_2];
        if (equals(moveId, move.id)) {
          return this.pathExists_puj7f4$(from, state.id);
        }
      }
    }
    throw IllegalArgumentException_init('No parent found for move ' + move.id);
  };
  GameConfigHelper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameConfigHelper',
    interfaces: []
  };
  function SmartRandom() {
    SmartRandom_instance = this;
    this.lastRandomMap = LinkedHashMap_init();
  }
  SmartRandom.prototype.nextInt_za3lpa$ = function (max) {
    var value = RandomUtil_getInstance().nextInt_za3lpa$(max);
    var lastValue = this.lastRandomMap.get_11rb$(max);
    if (lastValue != null && lastValue === value) {
      value = RandomUtil_getInstance().nextInt_za3lpa$(max);
    }
    this.lastRandomMap.put_xwzc9p$(max, value);
    return value;
  };
  SmartRandom.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SmartRandom',
    interfaces: []
  };
  var SmartRandom_instance = null;
  function SmartRandom_getInstance() {
    if (SmartRandom_instance === null) {
      new SmartRandom();
    }
    return SmartRandom_instance;
  }
  var NODE_SELF_CONSUMING;
  function SuperStateBuilder(id, currentTheme, selfConsuming, finalTargetId, chapterId, tmpStates) {
    if (currentTheme === void 0)
      currentTheme = null;
    if (selfConsuming === void 0)
      selfConsuming = NODE_SELF_CONSUMING;
    if (finalTargetId === void 0)
      finalTargetId = null;
    if (chapterId === void 0)
      chapterId = null;
    if (tmpStates === void 0) {
      tmpStates = ArrayList_init();
    }
    this.id = id;
    this.currentTheme = currentTheme;
    this.selfConsuming = selfConsuming;
    this.finalTargetId = finalTargetId;
    this.chapterId = chapterId;
    this.tmpStates = tmpStates;
    this.addState();
  }
  SuperStateBuilder.prototype.build = function () {
    var tmp$;
    if (this.finalTargetId == null && this.currentStateBuilder().moveIds.isEmpty()) {
      throw IllegalStateException_init('Superuzel pot\u0159ebuje c\xEDl anebo hrany');
    }
    var tmp$_0 = this.finalTargetId != null;
    if (tmp$_0) {
      tmp$_0 = !this.currentStateBuilder().moveIds.isEmpty();
    }
    if (tmp$_0) {
      throw IllegalStateException_init('Superuzel m\u016F\u017Ee m\xEDt bu\u010F c\xEDl anebo hrany (ne oboj\xED)');
    }
    var states = ArrayList_init();
    var moves = ArrayList_init();
    var index = 0;
    tmp$ = this.tmpStates.iterator();
    while (tmp$.hasNext()) {
      var stateBuilder = tmp$.next();
      var nextStateId = this.id + '_sub_' + (index + 1 | 0);
      if (index === 0) {
        stateBuilder.id = this.id;
      }
       else {
        stateBuilder.id = this.id + '_sub_' + index;
      }
      var moveId = 'h_' + this.id + '_sub_' + index;
      if (index === (this.tmpStates.size - 1 | 0)) {
        if (this.finalTargetId != null) {
          stateBuilder.moveIds.add_11rb$(moveId);
          moves.add_11rb$(new Move(moveId, void 0, void 0, void 0, void 0, this.selfConsuming, ensureNotNull(this.finalTargetId)));
        }
      }
       else {
        stateBuilder.moveIds.add_11rb$(moveId);
        moves.add_11rb$(new Move(moveId, void 0, void 0, void 0, void 0, this.selfConsuming, nextStateId));
      }
      states.add_11rb$(stateBuilder.build());
      index = index + 1 | 0;
    }
    return new Pair(states, moves);
  };
  SuperStateBuilder.prototype.currentStateBuilder = function () {
    return last(this.tmpStates);
  };
  SuperStateBuilder.prototype.addState = function () {
    this.tmpStates.add_11rb$(new StateBuilder(void 0, void 0, void 0, void 0, void 0, this.chapterId, void 0, void 0, this.currentTheme));
  };
  SuperStateBuilder.prototype.appendMove_61zpoe$ = function (moveId) {
    this.currentStateBuilder().appendMove_61zpoe$(moveId);
  };
  SuperStateBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SuperStateBuilder',
    interfaces: []
  };
  SuperStateBuilder.prototype.component1 = function () {
    return this.id;
  };
  SuperStateBuilder.prototype.component2 = function () {
    return this.currentTheme;
  };
  SuperStateBuilder.prototype.component3 = function () {
    return this.selfConsuming;
  };
  SuperStateBuilder.prototype.component4 = function () {
    return this.finalTargetId;
  };
  SuperStateBuilder.prototype.component5 = function () {
    return this.chapterId;
  };
  SuperStateBuilder.prototype.component6 = function () {
    return this.tmpStates;
  };
  SuperStateBuilder.prototype.copy_b9rorn$ = function (id, currentTheme, selfConsuming, finalTargetId, chapterId, tmpStates) {
    return new SuperStateBuilder(id === void 0 ? this.id : id, currentTheme === void 0 ? this.currentTheme : currentTheme, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, finalTargetId === void 0 ? this.finalTargetId : finalTargetId, chapterId === void 0 ? this.chapterId : chapterId, tmpStates === void 0 ? this.tmpStates : tmpStates);
  };
  SuperStateBuilder.prototype.toString = function () {
    return 'SuperStateBuilder(id=' + Kotlin.toString(this.id) + (', currentTheme=' + Kotlin.toString(this.currentTheme)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', finalTargetId=' + Kotlin.toString(this.finalTargetId)) + (', chapterId=' + Kotlin.toString(this.chapterId)) + (', tmpStates=' + Kotlin.toString(this.tmpStates)) + ')';
  };
  SuperStateBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentTheme) | 0;
    result = result * 31 + Kotlin.hashCode(this.selfConsuming) | 0;
    result = result * 31 + Kotlin.hashCode(this.finalTargetId) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapterId) | 0;
    result = result * 31 + Kotlin.hashCode(this.tmpStates) | 0;
    return result;
  };
  SuperStateBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.currentTheme, other.currentTheme) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.finalTargetId, other.finalTargetId) && Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.tmpStates, other.tmpStates)))));
  };
  var UZEL;
  function fixBOM(text) {
    return replace(text, '\uFEFF', '');
  }
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  function GameConverter() {
    this.currentState_0 = null;
    this.currentMove_0 = null;
    this.currentSuperState_0 = null;
    this.currentChapter_0 = null;
    this.convertState_0 = GameConverter$ConvertState$NONE_getInstance();
    this.game_0 = new GameConfigBuilder();
    this.PARAMETER_0 = Regex_init('([a-z_]+)=(.*)');
    this.SEPARATOR_0 = '----';
    this.HRANA_0 = Regex_init('hrana=(h[0-9A-Za-z_]*)');
    this.KAPITOLA_0 = 'kapitola=';
    this.ILUSTRACE_0 = Regex_init('ilustrace=(.*)');
    this.POZADI_0 = Regex_init('pozadi=(.*)');
    this.KATEGORIE_0 = 'kategorie=';
    this.KONEC_0 = Regex_init('konec=(prohra|nedokonceno)');
    this.TEMA_0 = Regex_init('tema=([a-zA-Z\\-0-9_]+)');
    this.SUPERUZEL_0 = Regex_init('superuzel=(u_[a-zA-Z\\-0-9_]+)');
    this.SUPERUZEL_SEPARATOR_0 = '-';
    this.PRIZNAK_0 = Regex_init('priznak=(.*)');
    this.VYLOUCENA_0 = 'vyloucena=';
    this.PODMINENA_0 = 'podminena=';
    this.POPIS_0 = 'popis=';
    this.OBRAZEK_0 = 'obrazek=';
    this.POZIRACI_0 = Regex_init('poziraci=(ano|ne)');
    this.CIL_0 = 'cil=';
  }
  function GameConverter$ConvertState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameConverter$ConvertState_initFields() {
    GameConverter$ConvertState_initFields = function () {
    };
    GameConverter$ConvertState$NODE_instance = new GameConverter$ConvertState('NODE', 0);
    GameConverter$ConvertState$SUPERNODE_instance = new GameConverter$ConvertState('SUPERNODE', 1);
    GameConverter$ConvertState$EDGE_instance = new GameConverter$ConvertState('EDGE', 2);
    GameConverter$ConvertState$EDGE_CONTENT_instance = new GameConverter$ConvertState('EDGE_CONTENT', 3);
    GameConverter$ConvertState$CHAPTER_instance = new GameConverter$ConvertState('CHAPTER', 4);
    GameConverter$ConvertState$NONE_instance = new GameConverter$ConvertState('NONE', 5);
  }
  var GameConverter$ConvertState$NODE_instance;
  function GameConverter$ConvertState$NODE_getInstance() {
    GameConverter$ConvertState_initFields();
    return GameConverter$ConvertState$NODE_instance;
  }
  var GameConverter$ConvertState$SUPERNODE_instance;
  function GameConverter$ConvertState$SUPERNODE_getInstance() {
    GameConverter$ConvertState_initFields();
    return GameConverter$ConvertState$SUPERNODE_instance;
  }
  var GameConverter$ConvertState$EDGE_instance;
  function GameConverter$ConvertState$EDGE_getInstance() {
    GameConverter$ConvertState_initFields();
    return GameConverter$ConvertState$EDGE_instance;
  }
  var GameConverter$ConvertState$EDGE_CONTENT_instance;
  function GameConverter$ConvertState$EDGE_CONTENT_getInstance() {
    GameConverter$ConvertState_initFields();
    return GameConverter$ConvertState$EDGE_CONTENT_instance;
  }
  var GameConverter$ConvertState$CHAPTER_instance;
  function GameConverter$ConvertState$CHAPTER_getInstance() {
    GameConverter$ConvertState_initFields();
    return GameConverter$ConvertState$CHAPTER_instance;
  }
  var GameConverter$ConvertState$NONE_instance;
  function GameConverter$ConvertState$NONE_getInstance() {
    GameConverter$ConvertState_initFields();
    return GameConverter$ConvertState$NONE_instance;
  }
  GameConverter$ConvertState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConvertState',
    interfaces: [Enum]
  };
  function GameConverter$ConvertState$values() {
    return [GameConverter$ConvertState$NODE_getInstance(), GameConverter$ConvertState$SUPERNODE_getInstance(), GameConverter$ConvertState$EDGE_getInstance(), GameConverter$ConvertState$EDGE_CONTENT_getInstance(), GameConverter$ConvertState$CHAPTER_getInstance(), GameConverter$ConvertState$NONE_getInstance()];
  }
  GameConverter$ConvertState.values = GameConverter$ConvertState$values;
  function GameConverter$ConvertState$valueOf(name) {
    switch (name) {
      case 'NODE':
        return GameConverter$ConvertState$NODE_getInstance();
      case 'SUPERNODE':
        return GameConverter$ConvertState$SUPERNODE_getInstance();
      case 'EDGE':
        return GameConverter$ConvertState$EDGE_getInstance();
      case 'EDGE_CONTENT':
        return GameConverter$ConvertState$EDGE_CONTENT_getInstance();
      case 'CHAPTER':
        return GameConverter$ConvertState$CHAPTER_getInstance();
      case 'NONE':
        return GameConverter$ConvertState$NONE_getInstance();
      default:throwISE('No enum constant eu.karelhovorka.textgame.core.util.GameConverter.ConvertState.' + name);
    }
  }
  GameConverter$ConvertState.valueOf_61zpoe$ = GameConverter$ConvertState$valueOf;
  GameConverter.prototype.convert = function (text) {
    var tmp$;
    var index = 0;
    tmp$ = split(fixBOM(text), ['\n']).iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      try {
        var tmp$_0;
        this.parseLine_bm4lxs$(trim(Kotlin.isCharSequence(tmp$_0 = line) ? tmp$_0 : throwCCE()).toString(), index);
      }
       catch (e) {
        if (Kotlin.isType(e, IncorrectLineException)) {
          throw e;
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
    return this.game_0.build();
  };
  GameConverter.prototype.parseLine_bm4lxs$ = function (line, index) {
    if (!equals(line, this.SEPARATOR_0))
      if (!startsWith(line, '#'))
        if (!equals(line, '')) {
          if (this.SUPERUZEL_0.matches_6bul2c$(line)) {
            var id = this.SUPERUZEL_0.replace_x2uqeu$(line, '$1');
            this.switchConvertState_0(GameConverter$ConvertState$SUPERNODE_getInstance());
            this.currentSuperState_0 = new SuperStateBuilder(id, void 0, void 0, void 0, ensureNotNull(this.currentChapter_0).id);
          }
           else if (startsWith(line, this.KAPITOLA_0)) {
            this.switchConvertState_0(GameConverter$ConvertState$CHAPTER_getInstance());
            var startIndex = this.KAPITOLA_0.length;
            var chapterId = line.substring(startIndex);
            this.currentChapter_0 = new ChapterBuilder(chapterId);
          }
           else {
            if (UZEL.matches_6bul2c$(line)) {
              this.switchConvertState_0(GameConverter$ConvertState$NODE_getInstance());
              if (this.currentChapter_0 == null) {
                throw new IncorrectLineException(index, line, 'Define chapter before defining state first');
              }
              var stateId = this.parameterValue_0(line);
              if (this.game_0.startId == null) {
                this.game_0.startId = stateId;
              }
              this.currentState_0 = new StateBuilder(stateId, void 0, void 0, void 0, void 0, ensureNotNull(this.currentChapter_0).id, void 0, EndType$NONE_getInstance());
            }
             else {
              if (this.HRANA_0.matches_6bul2c$(line)) {
                this.switchConvertState_0(GameConverter$ConvertState$EDGE_getInstance());
                var moveId = this.parameterValue_0(line);
                if (this.currentSuperState_0 == null) {
                  ensureNotNull(this.currentState_0).appendMove_61zpoe$(moveId);
                }
                 else {
                  ensureNotNull(this.currentSuperState_0).appendMove_61zpoe$(moveId);
                }
                this.currentMove_0 = new MoveBuilder(moveId);
              }
               else {
                if (this.convertState_0 === GameConverter$ConvertState$SUPERNODE_getInstance()) {
                  if (equals(this.SUPERUZEL_SEPARATOR_0, line)) {
                    ensureNotNull(this.currentSuperState_0).addState();
                  }
                   else if (startsWith(line, this.CIL_0)) {
                    var startIndex_0 = this.CIL_0.length;
                    var targetId = line.substring(startIndex_0);
                    ensureNotNull(this.currentSuperState_0).finalTargetId = targetId;
                  }
                   else {
                    if (this.TEMA_0.matches_6bul2c$(line)) {
                      var tema = this.TEMA_0.replace_x2uqeu$(line, '$1');
                      ensureNotNull(this.currentSuperState_0).currentTheme = tema;
                      this.parseNodeParameters_okxn75$(ensureNotNull(this.currentSuperState_0).currentStateBuilder(), line, index);
                    }
                     else {
                      this.parseNodeParameters_okxn75$(ensureNotNull(this.currentSuperState_0).currentStateBuilder(), line, index);
                    }
                  }
                }
                 else if (this.convertState_0 === GameConverter$ConvertState$NODE_getInstance()) {
                  this.parseNodeParameters_okxn75$(ensureNotNull(this.currentState_0), line, index);
                }
                 else if (this.convertState_0 === GameConverter$ConvertState$EDGE_getInstance()) {
                  this.parseEdgeLine_bm4lxs$(line, index);
                }
                 else if (this.convertState_0 === GameConverter$ConvertState$EDGE_CONTENT_getInstance()) {
                  this.errorIfParameter_bm4lxs$(line, index);
                  ensureNotNull(this.currentMove_0).appendText_61zpoe$(line);
                }
                 else if (this.convertState_0 === GameConverter$ConvertState$CHAPTER_getInstance()) {
                  this.errorIfParameter_bm4lxs$(line, index);
                  ensureNotNull(this.currentChapter_0).name_61zpoe$(line);
                }
                 else {
                  throw new IncorrectLineException(index, line, 'ELSE-X');
                }
              }
            }
          }
        }
  };
  GameConverter.prototype.parseNodeParameters_okxn75$ = function (builder, line, index) {
    var tmp$;
    if (this.ILUSTRACE_0.matches_6bul2c$(line)) {
      var illustration = this.parameterValue_0(line);
      builder.illustration = illustration;
    }
     else {
      if (this.PRIZNAK_0.matches_6bul2c$(line)) {
        var priznaky = this.parameterValue_0(line);
        var flags = toMutableList(split(priznaky, [',']));
        ensureNotNull(this.currentState_0).flags = flags;
      }
       else {
        if (this.POZADI_0.matches_6bul2c$(line)) {
          builder.background = this.parameterValue_0(line);
        }
         else {
          if (this.TEMA_0.matches_6bul2c$(line)) {
            var tema = this.TEMA_0.replace_x2uqeu$(line, '$1');
            builder.theme = tema;
          }
           else if (startsWith(line, this.CIL_0)) {
            var startIndex = this.CIL_0.length;
            var targetId = line.substring(startIndex);
            var moveId = 'h_' + toString(builder.id) + '_auto_' + targetId;
            builder.moveIds.add_11rb$(moveId);
            this.game_0.moves.add_11rb$(new Move(moveId, void 0, void 0, void 0, void 0, NODE_SELF_CONSUMING, targetId));
          }
           else {
            if (this.KONEC_0.matches_6bul2c$(line)) {
              var konec = this.KONEC_0.replace_x2uqeu$(line, '$1');
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
              builder.endType = tmp$;
            }
             else if (startsWith(line, this.KATEGORIE_0)) {
              var startIndex_0 = this.KATEGORIE_0.length;
              var categories = copyToArray(split(line.substring(startIndex_0), [',']));
              builder.categories = categories;
            }
             else {
              this.errorIfParameter_bm4lxs$(line, index);
              builder.appendText_61zpoe$(line);
            }
          }
        }
      }
    }
  };
  GameConverter.prototype.parameterValue_0 = function (line) {
    return this.PARAMETER_0.replace_x2uqeu$(line, '$2');
  };
  GameConverter.prototype.switchConvertState_0 = function (newConvertState) {
    if (newConvertState === GameConverter$ConvertState$NODE_getInstance() || newConvertState === GameConverter$ConvertState$SUPERNODE_getInstance()) {
      if (this.currentSuperState_0 == null) {
        this.buildState();
      }
       else {
        this.buildSuperState();
      }
    }
     else if (newConvertState === GameConverter$ConvertState$CHAPTER_getInstance()) {
      this.buildChapter();
    }
     else if (newConvertState === GameConverter$ConvertState$EDGE_getInstance()) {
      this.buildMove();
    }
    this.convertState_0 = newConvertState;
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
      var tmp$ = ensureNotNull(this.currentSuperState_0).build();
      var states = tmp$.component1()
      , moves = tmp$.component2();
      this.game_0.states.addAll_brywnq$(states);
      this.game_0.moves.addAll_brywnq$(moves);
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
      var state = ensureNotNull(this.currentState_0).build();
      this.game_0.states.add_11rb$(state);
      this.currentState_0 = null;
    }
  };
  GameConverter.prototype.parseEdgeLine_bm4lxs$ = function (line, index) {
    if (!equals(line, this.SEPARATOR_0)) {
      if (this.PRIZNAK_0.matches_6bul2c$(line)) {
        var priznaky = this.parameterValue_0(line);
        var flags = toMutableList(split(priznaky, [',']));
        ensureNotNull(this.currentMove_0).flags = flags;
      }
       else {
        if (this.TEMA_0.matches_6bul2c$(line)) {
          var tema = this.TEMA_0.replace_x2uqeu$(line, '$1');
          ensureNotNull(this.currentMove_0).theme = tema;
        }
         else {
          if (this.POZIRACI_0.matches_6bul2c$(line)) {
            var selfConsuming = equals(this.POZIRACI_0.replace_x2uqeu$(line, '$1').toLowerCase(), 'ano');
            ensureNotNull(this.currentMove_0).selfConsuming = selfConsuming;
          }
           else if (startsWith(line, this.KATEGORIE_0)) {
            var startIndex = this.KATEGORIE_0.length;
            var categories = copyToArray(split(line.substring(startIndex), [',']));
            ensureNotNull(this.currentMove_0).categories = categories;
          }
           else {
            if (this.ILUSTRACE_0.matches_6bul2c$(line)) {
              var illustration = this.parameterValue_0(line);
              ensureNotNull(this.currentMove_0).illustration = illustration;
            }
             else if (startsWith(line, this.OBRAZEK_0)) {
              var startIndex_0 = this.OBRAZEK_0.length;
              var image = line.substring(startIndex_0);
              ensureNotNull(this.currentMove_0).image = image;
            }
             else if (startsWith(line, this.VYLOUCENA_0)) {
              var startIndex_1 = this.VYLOUCENA_0.length;
              var flagsDisallowing = split(line.substring(startIndex_1), [',']);
              ensureNotNull(this.currentMove_0).flagsDisallowing.addAll_brywnq$(flagsDisallowing);
            }
             else if (startsWith(line, this.PODMINENA_0)) {
              var startIndex_2 = this.PODMINENA_0.length;
              var flagsRequiring = split(line.substring(startIndex_2), [',']);
              ensureNotNull(this.currentMove_0).flagsRequired.addAll_brywnq$(flagsRequiring);
            }
             else if (startsWith(line, this.POPIS_0)) {
              var startIndex_3 = this.POPIS_0.length;
              var caption = line.substring(startIndex_3);
              ensureNotNull(this.currentMove_0).caption = caption;
            }
             else if (startsWith(line, this.CIL_0)) {
              var startIndex_4 = this.CIL_0.length;
              var targetId = line.substring(startIndex_4);
              ensureNotNull(this.currentMove_0).targetId = targetId;
            }
             else if (equals(line, '-')) {
              this.switchConvertState_0(GameConverter$ConvertState$EDGE_CONTENT_getInstance());
            }
             else {
              throw new IncorrectLineException(index, line, 'ELSE');
            }
          }
        }
      }
    }
  };
  GameConverter.prototype.errorIfParameter_bm4lxs$ = function (line, index) {
    if (this.PARAMETER_0.matches_6bul2c$(line)) {
      throw new IncorrectLineException(index, line, 'Neo\u010Dek\xE1van\xFD parametr');
    }
  };
  GameConverter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameConverter',
    interfaces: []
  };
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
  function GameConverterContext() {
  }
  GameConverterContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameConverterContext',
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
    return copyToArray(flags);
  }
  function GameValidator(gameConfig) {
    this.gameConfig = gameConfig;
    this.helper = new GameConfigHelper(this.gameConfig);
    this.flags = getFlags(this.gameConfig);
  }
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
        throw IllegalStateException_init('State ' + state.id + ' already in text!' + '\n' + ' KIKI to znamen\xE1, \u017Ee je n\u011Bkolikr\xE1t v textu tohle id, nejsp\xED\u0161 copy-paste p\u0159eklep.');
      }
      duplicitIds.add_11rb$(state.id);
    }
  };
  GameValidator.prototype.validateState_0 = function (state) {
    if (!STATE_ID_REGEX.matches_6bul2c$(state.id)) {
      println('Invalid state id: ' + state.id + ' ' + '\n' + "KIKI, m\xE1 p\u0159ece za\u010D\xEDnat na 'u'!");
      throw IllegalStateException_init('Invalid state id: ' + state.id + ' ' + '\n' + "KIKI, m\xE1 p\u0159ece za\u010D\xEDnat na 'u'!");
    }
    this.validateStateMovesExist_0(state);
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
      throw IllegalStateException_init('Multiple automoves with no flag restrictions for state ' + state.id + ' ' + '\n' + "KIKI to znamen\xE1, \u017Ee je tam v\xEDc tah\u016F, kter\xFD nemaj popisek. Bu\u010F mus\xED m\xEDt v\u0161echny krom 1 popisek, nebo mus\xED bejt po\u0161\xE9fovan\xFD pomoc\xED podminena/vyloucena, aby v\u017Edycky takovej byl maxim\xE1ln\u011B jeden, ten 'automatickej'");
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
    var movesWithoutImages = destination;
    var destination_0 = ArrayList_init();
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== moves.length; ++tmp$_0) {
      var element_0 = moves[tmp$_0];
      if (element_0.image != null)
        destination_0.add_11rb$(element_0);
    }
    var movesWithImages = destination_0;
    var tmp$_1 = !movesWithImages.isEmpty();
    if (tmp$_1) {
      tmp$_1 = !movesWithoutImages.isEmpty();
    }
    if (tmp$_1) {
      throw IllegalStateException_init('Some moves of state ' + state.id + " have images and some don't. " + '\n' + 'KIKI to znamen\xE1, \u017Ee n\u011Bkter\xFD tahy tohodle stavu maj nastavenej obr\xE1zek a n\u011Bkter\xFD nemaj!');
    }
  };
  GameValidator.prototype.validateStateMovesExist_0 = function (state) {
    var tmp$, tmp$_0;
    tmp$ = state.moveIds;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var moveId = tmp$[tmp$_0];
      try {
        this.helper.moveById_61zpoe$(moveId);
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          println('Cannot find move ' + moveId + ' from state ' + state.id);
          throw IllegalStateException_init('Cannot find move ' + moveId + ' from state ' + state.id);
        }
         else
          throw e;
      }
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
        throw IllegalStateException_init('Move ' + move.id + ' already in text!' + '\n' + ' KIKI to znamen\xE1, \u017Ee je n\u011Bkolikr\xE1t v textu tohle id hrany, nejsp\xED\u0161 copy-paste p\u0159eklep.');
      }
      duplicitIds.add_11rb$(move.id);
    }
  };
  GameValidator.prototype.validateMove_0 = function (move, ignoreAcrossChapters) {
    if (ignoreAcrossChapters === void 0)
      ignoreAcrossChapters = true;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (!MOVE_ID_REGEX.matches_6bul2c$(move.id)) {
      println('Invalid move id: ' + move.id + ' ' + '\n' + "KIKI to znamen\xE1, \u017Ee tah mus\xED za\u010D\xEDnat na 'h' " + '\n');
      throw IllegalStateException_init('Invalid move id: ' + move.id + ' ' + '\n' + "KIKI to znamen\xE1, \u017Ee tah mus\xED za\u010D\xEDnat na 'h'");
    }
    try {
      this.helper.stateById_61zpoe$(move.targetId);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        if (!move.acrossChapters() || !ignoreAcrossChapters) {
          println('Cannot find target ' + move.targetId + ' from move ' + move.id + ' ' + '\n' + "KIKI to znamen\xE1, \u017Ee hrana '" + move.id + "' m\xE1 \u0161patn\u011B nastavenej 'cil'");
          throw IllegalStateException_init('Cannot find target ' + move.targetId + ' from move ' + move.id + ' ' + '\n' + "KIKI to znamen\xE1, \u017Ee hrana '" + move.id + "' m\xE1 \u0161patn\u011B nastavenej 'cil'");
        }
      }
       else
        throw e;
    }
    tmp$ = move.flagsDisallowing;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var flag = tmp$[tmp$_0];
      if (!contains(this.flags, flag)) {
        throw IllegalStateException_init('Non-existent flagsDisallowing ' + flag + ' for move ' + move.id + ' ' + '\n' + 'KIKI to znamen\xE1, \u017Ee ta vlajka neexistuje - neni nikde nastaven\xE1 pomoc\xED p\u0159\xEDznaku, ani to neni existuj\xEDc\xED tah/uzel. Jo a odd\u011Blujou se \u010D\xE1rkou!');
      }
    }
    tmp$_1 = move.flagsRequired;
    for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
      var flag_0 = tmp$_1[tmp$_2];
      if (!contains(this.flags, flag_0)) {
        throw IllegalStateException_init('Non-existent flagsRequired ' + flag_0 + ' for move ' + move.id + ' ' + '\n' + 'KIKI to znamen\xE1, \u017Ee ta vlajka neexistuje - neni nikde nastaven\xE1 pomoc\xED p\u0159\xEDznaku, ani to neni existuj\xEDc\xED tah/uzel. Jo a odd\u011Blujou se \u010D\xE1rkou!');
      }
    }
  };
  GameValidator.prototype.validate = function () {
    this.validateMoves_6taknv$();
    this.validateStates();
  };
  GameValidator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameValidator',
    interfaces: []
  };
  function random($receiver) {
    return $receiver.get_za3lpa$(RandomUtil_getInstance().nextInt_za3lpa$($receiver.size));
  }
  function random_0($receiver) {
    return $receiver[RandomUtil_getInstance().nextInt_za3lpa$($receiver.length)];
  }
  function getOrThrow($receiver, key) {
    var result = $receiver.get_11rb$(key);
    if (result == null) {
      throw IllegalStateException_init('Key not found in map ' + key);
    }
    return result;
  }
  function state(init) {
    var stateBuilder = new StateBuilder();
    init(stateBuilder);
    var state = stateBuilder.build();
    return state;
  }
  function move(init) {
    var moveBuilder = new MoveBuilder();
    init(moveBuilder);
    var move = moveBuilder.build();
    return move;
  }
  function game(init) {
    var gameconfig = new GameConfigBuilder();
    init(gameconfig);
    return gameconfig.build();
  }
  function StateBuilder(id, illustration, text_, flags, moveIds, chapterId, categories, endType, theme, background) {
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
    if (background === void 0)
      background = null;
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
    this.stringBuilder = new CharSequenceBuilder();
    this.text_criql2$_0 = this.text__0;
  }
  Object.defineProperty(StateBuilder.prototype, 'text', {
    get: function () {
      return this.text_criql2$_0;
    },
    set: function (value) {
      if (value != null && contains_0(value, '@')) {
        this.text_criql2$_0 = (new CharSequenceBuilder()).appendFullText_6bul2c$(value).build();
      }
       else {
        this.text_criql2$_0 = value;
      }
    }
  });
  StateBuilder.prototype.build = function () {
    var finalText = this.stringBuilder.build();
    if (this.text != null) {
      finalText = this.text;
    }
    return new State(ensureNotNull(this.id), finalText != null ? trim(finalText) : null, this.illustration, ensureNotNull(this.chapterId), copyToArray(this.flags), copyToArray(this.moveIds), this.categories, this.endType, this.theme, this.background);
  };
  StateBuilder.prototype.text_mumtsc$ = function (init) {
    this.stringBuilder = new CharSequenceBuilder();
    init(this.stringBuilder);
    return this.stringBuilder;
  };
  StateBuilder.prototype.appendText_61zpoe$ = function (value) {
    this.stringBuilder.appendLine_61zpoe$(value);
  };
  StateBuilder.prototype.appendMove_61zpoe$ = function (moveId) {
    this.moveIds.add_11rb$(moveId);
  };
  StateBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateBuilder',
    interfaces: []
  };
  StateBuilder.prototype.component1 = function () {
    return this.id;
  };
  StateBuilder.prototype.component2 = function () {
    return this.illustration;
  };
  StateBuilder.prototype.component3_0 = function () {
    return this.text__0;
  };
  StateBuilder.prototype.component4 = function () {
    return this.flags;
  };
  StateBuilder.prototype.component5 = function () {
    return this.moveIds;
  };
  StateBuilder.prototype.component6 = function () {
    return this.chapterId;
  };
  StateBuilder.prototype.component7 = function () {
    return this.categories;
  };
  StateBuilder.prototype.component8 = function () {
    return this.endType;
  };
  StateBuilder.prototype.component9 = function () {
    return this.theme;
  };
  StateBuilder.prototype.component10 = function () {
    return this.background;
  };
  StateBuilder.prototype.copy_d2xvb3$ = function (id, illustration, text_, flags, moveIds, chapterId, categories, endType, theme, background) {
    return new StateBuilder(id === void 0 ? this.id : id, illustration === void 0 ? this.illustration : illustration, text_ === void 0 ? this.text__0 : text_, flags === void 0 ? this.flags : flags, moveIds === void 0 ? this.moveIds : moveIds, chapterId === void 0 ? this.chapterId : chapterId, categories === void 0 ? this.categories : categories, endType === void 0 ? this.endType : endType, theme === void 0 ? this.theme : theme, background === void 0 ? this.background : background);
  };
  StateBuilder.prototype.toString = function () {
    return 'StateBuilder(id=' + Kotlin.toString(this.id) + (', illustration=' + Kotlin.toString(this.illustration)) + (', text_=' + Kotlin.toString(this.text__0)) + (', flags=' + Kotlin.toString(this.flags)) + (', moveIds=' + Kotlin.toString(this.moveIds)) + (', chapterId=' + Kotlin.toString(this.chapterId)) + (', categories=' + Kotlin.toString(this.categories)) + (', endType=' + Kotlin.toString(this.endType)) + (', theme=' + Kotlin.toString(this.theme)) + (', background=' + Kotlin.toString(this.background)) + ')';
  };
  StateBuilder.prototype.hashCode = function () {
    var result = 0;
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
    return result;
  };
  StateBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.text__0, other.text__0) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.moveIds, other.moveIds) && Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.endType, other.endType) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.background, other.background)))));
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
  }
  GameConfigBuilder.prototype.build = function () {
    return new GameConfig(ensureNotNull(this.startId), copyToArray(this.states), copyToArray(this.moves), copyToArray(this.chapters));
  };
  GameConfigBuilder.prototype.state_mhgdru$ = function (init) {
    var stateBuilder = new StateBuilder(void 0, void 0, void 0, void 0, void 0, void 0, []);
    init(stateBuilder);
    var state = stateBuilder.build();
    this.states.add_11rb$(state);
    return state;
  };
  GameConfigBuilder.prototype.move_ayo8pa$ = function (init) {
    var moveBuilder = new MoveBuilder();
    init(moveBuilder);
    var move = moveBuilder.build();
    this.moves.add_11rb$(move);
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
  function MoveBuilder(id, caption, image, illustration, text, selfConsuming, targetId, flags, flagsRequired, flagsDisallowing, categories, theme) {
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
  }
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
    return new Move(tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_4, this.selfConsuming, ensureNotNull(this.targetId), copyToArray(this.flags), copyToArray(this.flagsRequired), copyToArray(this.flagsDisallowing), this.categories, this.theme);
  };
  MoveBuilder.prototype.addFlag_61zpoe$ = function (value) {
    this.flags.add_11rb$(value);
  };
  MoveBuilder.prototype.appendText_61zpoe$ = function (value) {
    if (this.text == null) {
      this.text = value + '\n';
    }
     else {
      this.text = this.text + (value + '\n');
    }
  };
  MoveBuilder.prototype.disallowFlag_61zpoe$ = function (flagDisallowing) {
    this.flagsDisallowing.add_11rb$(flagDisallowing);
  };
  MoveBuilder.prototype.requireFlag_61zpoe$ = function (flagRequiring) {
    this.flagsRequired.add_11rb$(flagRequiring);
  };
  MoveBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveBuilder',
    interfaces: []
  };
  MoveBuilder.prototype.component1 = function () {
    return this.id;
  };
  MoveBuilder.prototype.component2 = function () {
    return this.caption;
  };
  MoveBuilder.prototype.component3 = function () {
    return this.image;
  };
  MoveBuilder.prototype.component4 = function () {
    return this.illustration;
  };
  MoveBuilder.prototype.component5 = function () {
    return this.text;
  };
  MoveBuilder.prototype.component6 = function () {
    return this.selfConsuming;
  };
  MoveBuilder.prototype.component7 = function () {
    return this.targetId;
  };
  MoveBuilder.prototype.component8 = function () {
    return this.flags;
  };
  MoveBuilder.prototype.component9 = function () {
    return this.flagsRequired;
  };
  MoveBuilder.prototype.component10 = function () {
    return this.flagsDisallowing;
  };
  MoveBuilder.prototype.component11 = function () {
    return this.categories;
  };
  MoveBuilder.prototype.component12 = function () {
    return this.theme;
  };
  MoveBuilder.prototype.copy_9rd7yk$ = function (id, caption, image, illustration, text, selfConsuming, targetId, flags, flagsRequired, flagsDisallowing, categories, theme) {
    return new MoveBuilder(id === void 0 ? this.id : id, caption === void 0 ? this.caption : caption, image === void 0 ? this.image : image, illustration === void 0 ? this.illustration : illustration, text === void 0 ? this.text : text, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, targetId === void 0 ? this.targetId : targetId, flags === void 0 ? this.flags : flags, flagsRequired === void 0 ? this.flagsRequired : flagsRequired, flagsDisallowing === void 0 ? this.flagsDisallowing : flagsDisallowing, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme);
  };
  MoveBuilder.prototype.toString = function () {
    return 'MoveBuilder(id=' + Kotlin.toString(this.id) + (', caption=' + Kotlin.toString(this.caption)) + (', image=' + Kotlin.toString(this.image)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', text=' + Kotlin.toString(this.text)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', targetId=' + Kotlin.toString(this.targetId)) + (', flags=' + Kotlin.toString(this.flags)) + (', flagsRequired=' + Kotlin.toString(this.flagsRequired)) + (', flagsDisallowing=' + Kotlin.toString(this.flagsDisallowing)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + ')';
  };
  MoveBuilder.prototype.hashCode = function () {
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
    return result;
  };
  MoveBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.caption, other.caption) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.targetId, other.targetId) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.flagsRequired, other.flagsRequired) && Kotlin.equals(this.flagsDisallowing, other.flagsDisallowing) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme)))));
  };
  function ChapterBuilder(id, name, categories, theme) {
    if (name === void 0)
      name = null;
    if (categories === void 0) {
      categories = [];
    }
    if (theme === void 0)
      theme = null;
    this.id = id;
    this.name = name;
    this.categories = categories;
    this.theme = theme;
  }
  ChapterBuilder.prototype.build = function () {
    if (this.name != null) {
      return new Chapter(this.id, ensureNotNull(this.name), this.categories, this.theme);
    }
    throw IllegalArgumentException_init('Name not found for chapter: ' + this.id);
  };
  ChapterBuilder.prototype.name_61zpoe$ = function (value) {
    this.name = value;
  };
  ChapterBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChapterBuilder',
    interfaces: []
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
  ChapterBuilder.prototype.copy_wffrkq$ = function (id, name, categories, theme) {
    return new ChapterBuilder(id === void 0 ? this.id : id, name === void 0 ? this.name : name, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme);
  };
  ChapterBuilder.prototype.toString = function () {
    return 'ChapterBuilder(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + ')';
  };
  ChapterBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    return result;
  };
  ChapterBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme)))));
  };
  var incorrect2;
  var incorrect2_replacement;
  var incorrect3;
  function MyslenkaFixer() {
    this.incorrect = Regex_init('.*osoba=[^"\'].*');
  }
  MyslenkaFixer.prototype.find_61zpoe$ = function (content) {
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
    return lines;
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
  function ConsoleMinigameListener() {
  }
  ConsoleMinigameListener.prototype.onLoop = function (delta) {
    println('onLoop(delta: ' + delta + ')');
  };
  ConsoleMinigameListener.prototype.onStart = function (id) {
    println('onStart(id: ' + id + ')');
  };
  ConsoleMinigameListener.prototype.onFinish = function (id, flags) {
    println('onFinish(id: ' + id + ', flags: ' + flags + ')');
  };
  ConsoleMinigameListener.prototype.onEvent = function (event) {
    println('onEvent(event: ' + event + ')');
  };
  ConsoleMinigameListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConsoleMinigameListener',
    interfaces: [GameLoopMinigameListener]
  };
  function AbstractGameLoopBeat(game) {
    this.game = game;
    this.started = false;
  }
  AbstractGameLoopBeat.prototype.start = function () {
    this.started = true;
    this.onStart();
  };
  AbstractGameLoopBeat.prototype.stop = function () {
    this.started = false;
  };
  AbstractGameLoopBeat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractGameLoopBeat',
    interfaces: []
  };
  function GameLoopMinigame(id, listener) {
    Minigame.call(this, id, listener);
    this.listener = listener;
    this.beat = new GameLoopBeat(this);
  }
  GameLoopMinigame.prototype.onStarted = function () {
    this.beat.start();
  };
  GameLoopMinigame.prototype.loop_14dthe$ = function (delta) {
    if (this.state !== MinigameState$RUNNING_getInstance()) {
      return;
    }
    this.doLoop_14dthe$(delta);
    this.listener.onLoop(delta);
  };
  GameLoopMinigame.prototype.kill = function () {
    this.flags = listOf('killed');
    this.beat.stop();
    this.fireFinish();
  };
  GameLoopMinigame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameLoopMinigame',
    interfaces: [Minigame]
  };
  function GameLoopMinigameListener() {
  }
  GameLoopMinigameListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GameLoopMinigameListener',
    interfaces: [MinigameListener]
  };
  function MinigameState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MinigameState_initFields() {
    MinigameState_initFields = function () {
    };
    MinigameState$CREATED_instance = new MinigameState('CREATED', 0);
    MinigameState$RUNNING_instance = new MinigameState('RUNNING', 1);
    MinigameState$FINISHED_instance = new MinigameState('FINISHED', 2);
    MinigameState$PAUSED_instance = new MinigameState('PAUSED', 3);
  }
  var MinigameState$CREATED_instance;
  function MinigameState$CREATED_getInstance() {
    MinigameState_initFields();
    return MinigameState$CREATED_instance;
  }
  var MinigameState$RUNNING_instance;
  function MinigameState$RUNNING_getInstance() {
    MinigameState_initFields();
    return MinigameState$RUNNING_instance;
  }
  var MinigameState$FINISHED_instance;
  function MinigameState$FINISHED_getInstance() {
    MinigameState_initFields();
    return MinigameState$FINISHED_instance;
  }
  var MinigameState$PAUSED_instance;
  function MinigameState$PAUSED_getInstance() {
    MinigameState_initFields();
    return MinigameState$PAUSED_instance;
  }
  MinigameState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MinigameState',
    interfaces: [Enum]
  };
  function MinigameState$values() {
    return [MinigameState$CREATED_getInstance(), MinigameState$RUNNING_getInstance(), MinigameState$FINISHED_getInstance(), MinigameState$PAUSED_getInstance()];
  }
  MinigameState.values = MinigameState$values;
  function MinigameState$valueOf(name) {
    switch (name) {
      case 'CREATED':
        return MinigameState$CREATED_getInstance();
      case 'RUNNING':
        return MinigameState$RUNNING_getInstance();
      case 'FINISHED':
        return MinigameState$FINISHED_getInstance();
      case 'PAUSED':
        return MinigameState$PAUSED_getInstance();
      default:throwISE('No enum constant eu.karelhovorka.textgame.minigame.MinigameState.' + name);
    }
  }
  MinigameState.valueOf_61zpoe$ = MinigameState$valueOf;
  function Minigame(id, listener) {
    this.id = id;
    this.listener_fgipk2$_0 = listener;
    this.state = MinigameState$CREATED_getInstance();
    this.flags_w6fyuv$_0 = this.flags_w6fyuv$_0;
  }
  Object.defineProperty(Minigame.prototype, 'flags', {
    get: function () {
      if (this.flags_w6fyuv$_0 == null)
        return throwUPAE('flags');
      return this.flags_w6fyuv$_0;
    },
    set: function (flags) {
      this.flags_w6fyuv$_0 = flags;
    }
  });
  Minigame.prototype.start = function (flags) {
    if (this.state === MinigameState$RUNNING_getInstance()) {
      throw IllegalStateException_init('Game already running ' + this.id);
    }
    this.flags = flags;
    this.onStarted();
    this.fireStart();
  };
  Minigame.prototype.fireStart = function () {
    this.state = MinigameState$RUNNING_getInstance();
    this.listener_fgipk2$_0.onStart(this.id);
  };
  Minigame.prototype.firePause = function () {
    this.state = MinigameState$PAUSED_getInstance();
    this.fireEvent_4w9ihe$('pause', null);
  };
  Minigame.prototype.fireUnpause = function () {
    this.state = MinigameState$RUNNING_getInstance();
    this.fireEvent_4w9ihe$('unpause', null);
  };
  Minigame.prototype.fireFinish = function () {
    this.state = MinigameState$FINISHED_getInstance();
    this.listener_fgipk2$_0.onFinish(this.id, copyToArray(this.flags));
  };
  Minigame.prototype.fireEvent_4w9ihe$ = function (type, data) {
    this.listener_fgipk2$_0.onEvent(new MinigameEvent(this.id, type, data));
  };
  Minigame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Minigame',
    interfaces: []
  };
  function MinigameEvent(id, type, data) {
    this.id = id;
    this.type = type;
    this.data = data;
  }
  MinigameEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MinigameEvent',
    interfaces: []
  };
  MinigameEvent.prototype.component1 = function () {
    return this.id;
  };
  MinigameEvent.prototype.component2 = function () {
    return this.type;
  };
  MinigameEvent.prototype.component3 = function () {
    return this.data;
  };
  MinigameEvent.prototype.copy_18o3fo$ = function (id, type, data) {
    return new MinigameEvent(id === void 0 ? this.id : id, type === void 0 ? this.type : type, data === void 0 ? this.data : data);
  };
  MinigameEvent.prototype.toString = function () {
    return 'MinigameEvent(id=' + Kotlin.toString(this.id) + (', type=' + Kotlin.toString(this.type)) + (', data=' + Kotlin.toString(this.data)) + ')';
  };
  MinigameEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  MinigameEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.data, other.data)))));
  };
  function MinigameListener() {
  }
  MinigameListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MinigameListener',
    interfaces: []
  };
  function UnlockMiniGame(listener, range, speedValueS, currentPosition) {
    UnlockMiniGame$Companion_getInstance();
    if (range === void 0)
      range = new IntRange(0, 100);
    if (speedValueS === void 0)
      speedValueS = 10.0;
    if (currentPosition === void 0)
      currentPosition = (range.endInclusive - range.start | 0) / 2.0;
    GameLoopMinigame.call(this, UnlockMiniGame$Companion_getInstance().ID, listener);
    this.range = range;
    this.speedValueS = speedValueS;
    this.currentPosition = currentPosition;
    this.progress = 0.0;
  }
  var Math_0 = Math;
  UnlockMiniGame.prototype.doLoop_14dthe$ = function (delta) {
    this.progress += this.speedValueS * delta;
    var x = this.progress / 1000.0;
    this.currentPosition = Math_0.sin(x);
    this.fireEvent_4w9ihe$('position', this.currentPosition);
  };
  UnlockMiniGame.prototype.onStarted = function () {
    GameLoopMinigame.prototype.onStarted.call(this);
  };
  function UnlockMiniGame$Companion() {
    UnlockMiniGame$Companion_instance = this;
    this.ID = 'unlocking';
  }
  UnlockMiniGame$Companion.prototype.create_2ezyj0$ = function (listener) {
    return UnlockMiniGame_init(listener);
  };
  UnlockMiniGame$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UnlockMiniGame$Companion_instance = null;
  function UnlockMiniGame$Companion_getInstance() {
    if (UnlockMiniGame$Companion_instance === null) {
      new UnlockMiniGame$Companion();
    }
    return UnlockMiniGame$Companion_instance;
  }
  UnlockMiniGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnlockMiniGame',
    interfaces: [GameLoopMinigame]
  };
  function UnlockMiniGame_init(listener, $this) {
    $this = $this || Object.create(UnlockMiniGame.prototype);
    UnlockMiniGame.call($this, listener, new IntRange(0, 100));
    return $this;
  }
  function Theme() {
    Theme_instance = this;
    this.themes = ['divoky_pankac', 'drsna_rockerka', 'sexy_baby', 'sladka_princezna', 'slusna_skolacka', 'sportovni_normalka', 'tezka_extravagance'];
  }
  Theme.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Theme',
    interfaces: []
  };
  var Theme_instance = null;
  function Theme_getInstance() {
    if (Theme_instance === null) {
      new Theme();
    }
    return Theme_instance;
  }
  function GameLoader() {
    this.saver__0 = new LocalStorageGameSaver();
  }
  GameLoader.prototype.saver = function () {
    return this.saver__0;
  };
  GameLoader.prototype.hasAutoSave = function () {
    return this.saver().hasAutoSave();
  };
  GameLoader.prototype.hasSave = function () {
    return this.saver().hasSave();
  };
  GameLoader.prototype.autoload = function (gameText) {
    return this.load_0(gameText, GameSaver$Companion_getInstance().AUTOSAVE);
  };
  GameLoader.prototype.load = function (gameText) {
    return this.load_0(gameText, GameSaver$Companion_getInstance().MAIN_SAVE);
  };
  GameLoader.prototype.load_0 = function (gameText, name) {
    var tmp$;
    var gameConfig = (new GameConverter()).convert(gameText);
    if (!this.saver().has_61zpoe$(name)) {
      throw IllegalStateException_init('Cannot load game ' + name + '!');
    }
    var gameState = this.saver().load_61zpoe$(name);
    tmp$ = gameState.currentStateId;
    var game = new Game(toMutableList_0(gameState.flags), gameConfig, this.listener_0(), tmp$, void 0, this.saver());
    var validator = new GameValidator(gameConfig);
    validator.validate();
    return game;
  };
  GameLoader.prototype.newgame = function (gameText) {
    var gameConfig = (new GameConverter()).convert(gameText);
    var game = new Game(void 0, gameConfig, this.listener_0(), void 0, void 0, this.saver());
    var validator = new GameValidator(gameConfig);
    validator.validate();
    return game;
  };
  GameLoader.prototype.crawl = function (gameText) {
    var gameConfig = (new GameConverter()).convert(gameText);
    var game = new Game(void 0, gameConfig, new ListGameListener([new ConsoleGameListener()]), void 0, void 0, this.saver());
    var validator = new GameValidator(gameConfig);
    validator.validate();
    return new GameBot(game);
  };
  GameLoader.prototype.listener_0 = function () {
    return new ListGameListener([new ConsoleGameListener(), new HtmlGameListener(), new JsDelegateGameListener(), new AutosaveListener(this.saver()), new CompletedGameListener(this.saver())]);
  };
  GameLoader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameLoader',
    interfaces: []
  };
  function GameBeat(game) {
    this.game = game;
  }
  GameBeat.prototype.start = function () {
  };
  GameBeat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameBeat',
    interfaces: []
  };
  function RandomUtil() {
    RandomUtil_instance = this;
  }
  RandomUtil.prototype.nextInt_za3lpa$ = function (max) {
    var x = Math.random() * max;
    return numberToInt(Math_0.floor(x));
  };
  RandomUtil.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RandomUtil',
    interfaces: []
  };
  var RandomUtil_instance = null;
  function RandomUtil_getInstance() {
    if (RandomUtil_instance === null) {
      new RandomUtil();
    }
    return RandomUtil_instance;
  }
  function GameJsonState(id, text, movesIds, flags) {
    this.id = id;
    this.text = text;
    this.movesIds = movesIds;
    this.flags = flags;
  }
  GameJsonState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameJsonState',
    interfaces: []
  };
  GameJsonState.prototype.component1 = function () {
    return this.id;
  };
  GameJsonState.prototype.component2 = function () {
    return this.text;
  };
  GameJsonState.prototype.component3 = function () {
    return this.movesIds;
  };
  GameJsonState.prototype.component4 = function () {
    return this.flags;
  };
  GameJsonState.prototype.copy_jngk6g$ = function (id, text, movesIds, flags) {
    return new GameJsonState(id === void 0 ? this.id : id, text === void 0 ? this.text : text, movesIds === void 0 ? this.movesIds : movesIds, flags === void 0 ? this.flags : flags);
  };
  GameJsonState.prototype.toString = function () {
    return 'GameJsonState(id=' + Kotlin.toString(this.id) + (', text=' + Kotlin.toString(this.text)) + (', movesIds=' + Kotlin.toString(this.movesIds)) + (', flags=' + Kotlin.toString(this.flags)) + ')';
  };
  GameJsonState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.movesIds) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    return result;
  };
  GameJsonState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.movesIds, other.movesIds) && Kotlin.equals(this.flags, other.flags)))));
  };
  function GameJsonData(startId, states, moves) {
    this.startId = startId;
    this.states = states;
    this.moves = moves;
  }
  GameJsonData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameJsonData',
    interfaces: []
  };
  GameJsonData.prototype.component1 = function () {
    return this.startId;
  };
  GameJsonData.prototype.component2 = function () {
    return this.states;
  };
  GameJsonData.prototype.component3 = function () {
    return this.moves;
  };
  GameJsonData.prototype.copy_hglyk6$ = function (startId, states, moves) {
    return new GameJsonData(startId === void 0 ? this.startId : startId, states === void 0 ? this.states : states, moves === void 0 ? this.moves : moves);
  };
  GameJsonData.prototype.toString = function () {
    return 'GameJsonData(startId=' + Kotlin.toString(this.startId) + (', states=' + Kotlin.toString(this.states)) + (', moves=' + Kotlin.toString(this.moves)) + ')';
  };
  GameJsonData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.startId) | 0;
    result = result * 31 + Kotlin.hashCode(this.states) | 0;
    result = result * 31 + Kotlin.hashCode(this.moves) | 0;
    return result;
  };
  GameJsonData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.startId, other.startId) && Kotlin.equals(this.states, other.states) && Kotlin.equals(this.moves, other.moves)))));
  };
  function getGameFromConfig(gameConfig) {
    var game = new Game(void 0, gameConfig, new ListGameListener([new ConsoleGameListener(), new HtmlGameListener(), new JsDelegateGameListener()]), void 0, void 0, new LocalStorageGameSaver());
    var validator = new GameValidator(gameConfig);
    validator.validate();
    return game;
  }
  function loadGameFromConfig(gameConfig) {
    var game = getGameFromConfig(gameConfig);
    game.load();
    return game;
  }
  function toHtml($receiver) {
    return textToHtml($receiver.toString());
  }
  function textToHtml(text) {
    var tmp$;
    var result = '';
    tmp$ = Regex_init('\n').split_905azu$(text, 0).iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      result += '<p>' + line + '<\/p>';
    }
    return result;
  }
  function HtmlGameListener() {
    var tmp$, tmp$_0;
    this.gameDiv = Kotlin.isType(tmp$ = document.getElementById('game'), HTMLDivElement) ? tmp$ : throwCCE();
    this.themeDiv = Kotlin.isType(tmp$_0 = document.getElementById('theme'), HTMLDivElement) ? tmp$_0 : throwCCE();
  }
  HtmlGameListener.prototype.onRestart_794nkt$ = function (game) {
    this.gameDiv.innerHTML = '';
  };
  HtmlGameListener.prototype.onPause = function () {
    this.gameDiv.appendChild(this.continueElement_0());
  };
  HtmlGameListener.prototype.hideAllContinues = function () {
    var tmp$;
    var previousStates = document.querySelectorAll('.continue');
    if (previousStates.length > 0) {
      var previousState = Kotlin.isType(tmp$ = previousStates.item(previousStates.length - 1 | 0), HTMLDivElement) ? tmp$ : throwCCE();
      previousState.classList.add('finished');
    }
  };
  HtmlGameListener.prototype.onState_8v5zxy$ = function (state, moves) {
    this.hideAllContinues();
    if (state.theme != null) {
      this.themeDiv.className = ensureNotNull(state.theme);
    }
    var element = this.stateToElement_ktq7vf$(state);
    var $receiver = state.categories;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element_0 = $receiver[tmp$];
      element.classList.add(element_0);
    }
    this.gameDiv.appendChild(element);
    if (isInteractive(moves)) {
      var moveElement = this.movesToElement_0(moves);
      var $receiver_0 = state.categories;
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
        var element_1 = $receiver_0[tmp$_0];
        moveElement.classList.add(element_1);
      }
      moveElement.classList.add('moves-' + state.id);
      this.gameDiv.appendChild(moveElement);
    }
  };
  HtmlGameListener.prototype.continueElement_0 = function () {
    var movesWrap = document.createElement('div');
    movesWrap.classList.add('continue');
    movesWrap.classList.add('version-a-' + toString(RandomUtil_getInstance().nextInt_za3lpa$(10) + 1 | 0));
    movesWrap.classList.add('version-b-' + toString(RandomUtil_getInstance().nextInt_za3lpa$(6) + 1 | 0));
    movesWrap.innerHTML = "<span><a href='javascript:window.game.continueMove()'>Pokra\u010Dovat<\/a><\/span>";
    return movesWrap;
  };
  HtmlGameListener.prototype.movesToElement_0 = function (moves) {
    var tmp$;
    var movesWrap = document.createElement('ul');
    movesWrap.classList.add('moves');
    for (tmp$ = 0; tmp$ !== moves.length; ++tmp$) {
      var move = moves[tmp$];
      var moveElement = document.createElement('li');
      var $receiver = move.categories;
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var element = $receiver[tmp$_0];
        moveElement.classList.add(element);
      }
      moveElement.classList.add('choice-' + move.id);
      moveElement.classList.add('version-a-' + toString(RandomUtil_getInstance().nextInt_za3lpa$(5) + 1 | 0));
      moveElement.classList.add('version-b-' + toString(RandomUtil_getInstance().nextInt_za3lpa$(5) + 1 | 0));
      if (move.image == null) {
        movesWrap.classList.add('no-images');
        moveElement.innerHTML = "<span class='helper-1'><\/span><a href='javascript:window.game.move(" + '"' + move.id + '"' + ")'><span class='helper-2'><\/span>" + toString(move.caption) + '<\/a>';
      }
       else {
        movesWrap.classList.add('has-images');
        moveElement.innerHTML = "<span class='helper-1'><\/span><a href='javascript:window.game.move(" + '"' + move.id + '"' + ")'><span class='helper-2'><\/span><img title='" + toString(move.caption) + "' src='img/moves/" + toString(move.image) + "' /><div class='caption'>" + toString(move.caption) + '<\/div><\/a>';
      }
      movesWrap.appendChild(moveElement);
    }
    return movesWrap;
  };
  HtmlGameListener.prototype.hidePreviousStates_0 = function () {
    var tmp$;
    var previousStates = document.querySelectorAll('.state');
    if (previousStates.length > 0) {
      var previousState = Kotlin.isType(tmp$ = previousStates.item(previousStates.length - 1 | 0), HTMLDivElement) ? tmp$ : throwCCE();
      previousState.classList.add('finished');
    }
  };
  HtmlGameListener.prototype.stateToElement_ktq7vf$ = function (state) {
    var tmp$, tmp$_0;
    this.hidePreviousStates_0();
    var element = document.createElement('div');
    element.classList.add('state');
    element.classList.add(state.id);
    if (state.text == null) {
      element.classList.add('no-text');
    }
     else {
      element.classList.add('has-text');
    }
    if (state.illustration == null) {
      element.classList.add('no-illustration');
    }
     else {
      element.classList.add('has-illustration');
    }
    var text = (tmp$_0 = (tmp$ = state.text) != null ? toHtml(tmp$) : null) != null ? tmp$_0 : '';
    if (state.illustration == null) {
      element.innerHTML = "<span class='helper-1'><\/span><div class='text'>" + text + '<\/div>';
    }
     else {
      element.innerHTML = "<span class='helper-1'><\/span><div class='text'><img class='illustration' src='img/illustrations/" + toString(state.illustration) + "' />" + text + '<\/div>';
    }
    return element;
  };
  HtmlGameListener.prototype.scrollToBottom = function () {
    window.scrollTo(0, document.body.scrollHeight);
  };
  HtmlGameListener.prototype.onMove_8hvgvt$ = function (move) {
    var tmp$, tmp$_0;
    this.hideAllContinues();
    if (move.theme != null) {
      this.themeDiv.className = ensureNotNull(move.theme);
    }
    if (move.text != null) {
      var element = this.moveToElement_0(move);
      this.gameDiv.appendChild(element);
    }
    var liElements = document.querySelectorAll('.choice-' + move.id);
    if (liElements.length === 0) {
      return;
    }
    var li = Kotlin.isType(tmp$ = liElements.item(liElements.length - 1 | 0), HTMLLIElement) ? tmp$ : throwCCE();
    li.classList.add('selected');
    ensureNotNull(li.parentElement).classList.add('finished');
    (Kotlin.isType(tmp$_0 = ensureNotNull(li.parentElement).previousSibling, HTMLElement) ? tmp$_0 : throwCCE()).classList.add('finished');
  };
  HtmlGameListener.prototype.moveToElement_0 = function (move) {
    var tmp$;
    var element = document.createElement('div');
    var $receiver = move.categories;
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var element_0 = $receiver[tmp$_0];
      element.classList.add(element_0);
    }
    element.classList.add('move');
    element.classList.add(move.id);
    if (move.text != null) {
      element.innerHTML = "<div class='text'>" + ((tmp$ = move.text) != null ? toHtml(tmp$) : null) + '<\/div>';
    }
    return element;
  };
  HtmlGameListener.prototype.onStart_794nkt$ = function (game) {
  };
  HtmlGameListener.prototype.onFinish_vi5hg2$ = function (game, endType) {
    var finish = document.createElement('div');
    finish.classList.add('finish');
    finish.innerHTML = 'KONEC';
    this.gameDiv.appendChild(finish);
  };
  HtmlGameListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlGameListener',
    interfaces: [GameListener]
  };
  function JsDelegateGameListener() {
    this.game_19x6n7$_0 = this.game_19x6n7$_0;
    var tmp$;
    this.gameDiv = Kotlin.isType(tmp$ = document.getElementById('game'), HTMLDivElement) ? tmp$ : throwCCE();
  }
  JsDelegateGameListener.prototype.onRestart_794nkt$ = function (game) {
    window.onRestart(game);
  };
  Object.defineProperty(JsDelegateGameListener.prototype, 'game', {
    get: function () {
      if (this.game_19x6n7$_0 == null)
        return throwUPAE('game');
      return this.game_19x6n7$_0;
    },
    set: function (game) {
      this.game_19x6n7$_0 = game;
    }
  });
  JsDelegateGameListener.prototype.onState_8v5zxy$ = function (state, moves) {
    window.onState(state, moves);
  };
  JsDelegateGameListener.prototype.onMove_8hvgvt$ = function (move) {
    window.onMove(move);
  };
  JsDelegateGameListener.prototype.onStart_794nkt$ = function (game) {
    window.onStart(game);
  };
  JsDelegateGameListener.prototype.onFinish_vi5hg2$ = function (game, endType) {
    window.onFinish(game);
  };
  JsDelegateGameListener.prototype.onPause = function () {
    window.onPause();
  };
  JsDelegateGameListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsDelegateGameListener',
    interfaces: [GameListener]
  };
  function LocalStorageGameSaver() {
    GameSaver.call(this);
  }
  LocalStorageGameSaver.prototype.save_6d5tlo$ = function (gameCompletion) {
    localStorage.setItem(GameSaver$Companion_getInstance().VISITED, JSON.stringify(gameCompletion));
  };
  LocalStorageGameSaver.prototype.loadCompletion = function () {
    var tmp$;
    tmp$ = localStorage.getItem(GameSaver$Companion_getInstance().VISITED);
    if (tmp$ == null) {
      return new GameCompletion();
    }
    var text = tmp$;
    var gson = JSON.parse(text);
    return new GameCompletion(gson['stateIds'], gson['moveIds']);
  };
  LocalStorageGameSaver.prototype.has_61zpoe$ = function (name) {
    return localStorage.getItem(name) != null;
  };
  LocalStorageGameSaver.prototype.save_nigx55$ = function (name, game) {
    var saved = JSON.stringify(game);
    localStorage.setItem(name, saved);
  };
  LocalStorageGameSaver.prototype.load_61zpoe$ = function (name) {
    var gson = JSON.parse(ensureNotNull(localStorage.getItem(name)));
    var currentStateId = gson['currentStateId'];
    var flags = gson['flags'];
    return new GameState(flags, currentStateId);
  };
  LocalStorageGameSaver.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalStorageGameSaver',
    interfaces: [GameSaver]
  };
  function Options(path, loop, volume) {
    if (loop === void 0)
      loop = true;
    if (volume === void 0)
      volume = 0;
    this.path = path;
    this.loop = loop;
    this.volume = volume;
  }
  Options.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Options',
    interfaces: []
  };
  Options.prototype.component1 = function () {
    return this.path;
  };
  Options.prototype.component2 = function () {
    return this.loop;
  };
  Options.prototype.component3 = function () {
    return this.volume;
  };
  Options.prototype.copy_i9ez8b$ = function (path, loop, volume) {
    return new Options(path === void 0 ? this.path : path, loop === void 0 ? this.loop : loop, volume === void 0 ? this.volume : volume);
  };
  Options.prototype.toString = function () {
    return 'Options(path=' + Kotlin.toString(this.path) + (', loop=' + Kotlin.toString(this.loop)) + (', volume=' + Kotlin.toString(this.volume)) + ')';
  };
  Options.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.loop) | 0;
    result = result * 31 + Kotlin.hashCode(this.volume) | 0;
    return result;
  };
  Options.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.loop, other.loop) && Kotlin.equals(this.volume, other.volume)))));
  };
  function SoundOptions(source, options) {
    if (source === void 0)
      source = 'file';
    this.source = source;
    this.options = options;
  }
  SoundOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SoundOptions',
    interfaces: []
  };
  SoundOptions.prototype.component1 = function () {
    return this.source;
  };
  SoundOptions.prototype.component2 = function () {
    return this.options;
  };
  SoundOptions.prototype.copy_tso5wx$ = function (source, options) {
    return new SoundOptions(source === void 0 ? this.source : source, options === void 0 ? this.options : options);
  };
  SoundOptions.prototype.toString = function () {
    return 'SoundOptions(source=' + Kotlin.toString(this.source) + (', options=' + Kotlin.toString(this.options)) + ')';
  };
  SoundOptions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.source) | 0;
    result = result * 31 + Kotlin.hashCode(this.options) | 0;
    return result;
  };
  SoundOptions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.source, other.source) && Kotlin.equals(this.options, other.options)))));
  };
  function AudioTrack(fileName, loop, volume) {
    if (loop === void 0)
      loop = false;
    if (volume === void 0)
      volume = 0;
    this.fileName = fileName;
    this.loop = loop;
    this.volume = volume;
    this.sound = null;
    this.distortion = null;
    this.delay = null;
    this.distortion = new Pizzicato.Effects.Distortion({gain: 0.0});
    this.delay = new Pizzicato.Effects.Delay({feedback: 0.6, time: 0.333, mix: 0.5});
  }
  AudioTrack.prototype.load = function () {
    var so = this.soundOptions_0();
    this.sound = new Pizzicato.Sound(so);
    this.sound.addEffect(this.distortion);
    this.sound.addEffect(this.delay);
  };
  AudioTrack.prototype.soundOptions_0 = function () {
    return new SoundOptions(void 0, new Options('./audio/' + this.fileName, this.loop, this.volume));
  };
  AudioTrack.prototype.toggleDistortion = function () {
    if (this.distortion.gain == 0) {
      this.distortion.gain = 0.4;
    }
     else {
      this.distortion.gain = 0;
    }
  };
  AudioTrack.prototype.toggleDelay = function () {
    if (this.delay.feedback > 0) {
      this.delay.feedback = 0;
      this.delay.time = 0;
      this.delay.min = 0;
    }
     else {
      this.delay.feedback = 0.6;
      this.delay.time = 0.333;
      this.delay.min = 0.5;
    }
  };
  AudioTrack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioTrack',
    interfaces: []
  };
  AudioTrack.prototype.component1 = function () {
    return this.fileName;
  };
  AudioTrack.prototype.component2 = function () {
    return this.loop;
  };
  AudioTrack.prototype.component3 = function () {
    return this.volume;
  };
  AudioTrack.prototype.copy_i9ez8b$ = function (fileName, loop, volume) {
    return new AudioTrack(fileName === void 0 ? this.fileName : fileName, loop === void 0 ? this.loop : loop, volume === void 0 ? this.volume : volume);
  };
  AudioTrack.prototype.toString = function () {
    return 'AudioTrack(fileName=' + Kotlin.toString(this.fileName) + (', loop=' + Kotlin.toString(this.loop)) + (', volume=' + Kotlin.toString(this.volume)) + ')';
  };
  AudioTrack.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fileName) | 0;
    result = result * 31 + Kotlin.hashCode(this.loop) | 0;
    result = result * 31 + Kotlin.hashCode(this.volume) | 0;
    return result;
  };
  AudioTrack.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fileName, other.fileName) && Kotlin.equals(this.loop, other.loop) && Kotlin.equals(this.volume, other.volume)))));
  };
  function TrackGroup(tracks, currentIndex) {
    if (currentIndex === void 0)
      currentIndex = 0;
    this.tracks = tracks;
    this.currentIndex = currentIndex;
    var $receiver = this.tracks;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.volume = 0;
    }
    this.currentTrack_0().volume = 1;
  }
  TrackGroup.prototype.load = function () {
    var $receiver = this.tracks;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.load();
    }
  };
  TrackGroup.prototype.currentTrack_0 = function () {
    return this.tracks[this.currentIndex];
  };
  TrackGroup.prototype.switchTrack = function () {
    this.currentTrack_0().sound.volume = 0;
    this.currentTrack_0().volume = 0;
    this.currentIndex = (this.currentIndex + 1 + this.tracks.length | 0) % this.tracks.length;
    this.currentTrack_0().volume = 1;
    this.currentTrack_0().sound.volume = 1;
    println(this.currentTrack_0());
    println('currentTrack: ' + this.currentIndex);
  };
  TrackGroup.prototype.toggleDistortion = function () {
    this.currentTrack_0().toggleDistortion();
  };
  TrackGroup.prototype.toggleDelay = function () {
    this.currentTrack_0().toggleDelay();
  };
  TrackGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrackGroup',
    interfaces: []
  };
  TrackGroup.prototype.component1 = function () {
    return this.tracks;
  };
  TrackGroup.prototype.component2 = function () {
    return this.currentIndex;
  };
  TrackGroup.prototype.copy_61kqhi$ = function (tracks, currentIndex) {
    return new TrackGroup(tracks === void 0 ? this.tracks : tracks, currentIndex === void 0 ? this.currentIndex : currentIndex);
  };
  TrackGroup.prototype.toString = function () {
    return 'TrackGroup(tracks=' + Kotlin.toString(this.tracks) + (', currentIndex=' + Kotlin.toString(this.currentIndex)) + ')';
  };
  TrackGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tracks) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentIndex) | 0;
    return result;
  };
  TrackGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.tracks, other.tracks) && Kotlin.equals(this.currentIndex, other.currentIndex)))));
  };
  function SoundController() {
    this.group = null;
    this.solo = new TrackGroup([new AudioTrack('melodie1_cista.ogg'), new AudioTrack('melodie2.ogg'), new AudioTrack('melodie3.ogg')]);
    this.rhythm = new TrackGroup([new AudioTrack('doprovod_cisty.ogg', true), new AudioTrack('doprovod_delay.ogg', true), new AudioTrack('doprovod_sekany_akordy.ogg', true)]);
    this.trackGroups = mutableMapOf([to('rhythm', this.rhythm), to('solo', this.solo)]);
  }
  SoundController.prototype.switchSolo = function () {
    this.solo.switchTrack();
  };
  SoundController.prototype.switchRhythm = function () {
    this.rhythm.switchTrack();
  };
  SoundController.prototype.toggleSoloDistortion = function () {
    this.solo.toggleDistortion();
  };
  SoundController.prototype.toggleRhythmDistortion = function () {
    this.rhythm.toggleDistortion();
  };
  SoundController.prototype.toggleSoloDelay = function () {
    this.solo.toggleDelay();
  };
  SoundController.prototype.toggleRhythmDelay = function () {
    this.rhythm.toggleDelay();
  };
  SoundController.prototype.trackGroupArray = function () {
    return copyToArray(this.trackGroups.values);
  };
  SoundController.prototype.sounds = function () {
    var list = ArrayList_init();
    var tmp$;
    tmp$ = this.trackGroups.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver = element.tracks;
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var element_0 = $receiver[tmp$_0];
        list.add_11rb$(element_0.sound);
      }
    }
    return copyToArray(list);
  };
  SoundController.prototype.load = function () {
    var tmp$;
    tmp$ = this.trackGroups.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.load();
    }
    var list = this.sounds();
    this.group = new Pizzicato.Group(list);
  };
  SoundController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SoundController',
    interfaces: []
  };
  function GameLoopBeat(game) {
    AbstractGameLoopBeat.call(this, game);
    this.lastTimestamp = -1;
  }
  function GameLoopBeat$frame$lambda(this$GameLoopBeat) {
    return function (ts) {
      this$GameLoopBeat.frame_14dthe$(ts);
      return Unit;
    };
  }
  function GameLoopBeat$frame$lambda_0(this$GameLoopBeat) {
    return function (ts) {
      this$GameLoopBeat.frame_14dthe$(ts);
      return Unit;
    };
  }
  GameLoopBeat.prototype.frame_14dthe$ = function (timestamp) {
    if (!this.started) {
      return;
    }
    if (this.lastTimestamp === -1) {
      this.lastTimestamp = timestamp;
      window.requestAnimationFrame(GameLoopBeat$frame$lambda(this));
      return;
    }
    var delta = timestamp - this.lastTimestamp;
    this.lastTimestamp = timestamp;
    this.game.loop_14dthe$(delta);
    window.requestAnimationFrame(GameLoopBeat$frame$lambda_0(this));
  };
  function GameLoopBeat$onStart$lambda(this$GameLoopBeat) {
    return function (ts) {
      this$GameLoopBeat.frame_14dthe$(ts);
      return Unit;
    };
  }
  GameLoopBeat.prototype.onStart = function () {
    window.requestAnimationFrame(GameLoopBeat$onStart$lambda(this));
  };
  GameLoopBeat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameLoopBeat',
    interfaces: [AbstractGameLoopBeat]
  };
  function GameRepository(listener, games) {
    if (listener === void 0)
      listener = new ConsoleMinigameListener();
    if (games === void 0) {
      games = LinkedHashMap_init();
    }
    this.listener = listener;
    this.games_0 = games;
    var $receiver = this.games_0;
    var key = UnlockMiniGame$Companion_getInstance().ID;
    var value = getCallableRef('UnlockMiniGame', function (listener) {
      return UnlockMiniGame_init(listener);
    });
    $receiver.put_xwzc9p$(key, value);
  }
  GameRepository.prototype.createGame = function (id, listener) {
    return ensureNotNull(this.games_0.get_11rb$(id))(listener);
  };
  GameRepository.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameRepository',
    interfaces: []
  };
  function JsGameLoopBeat(game) {
    AbstractGameLoopBeat.call(this, game);
    this.lastTimestamp = -1;
  }
  function JsGameLoopBeat$frame$lambda(this$JsGameLoopBeat) {
    return function (ts) {
      this$JsGameLoopBeat.frame_14dthe$(ts);
      return Unit;
    };
  }
  JsGameLoopBeat.prototype.frame_14dthe$ = function (timestamp) {
    if (!this.started) {
      return;
    }
    if (this.lastTimestamp === -1) {
      this.lastTimestamp = timestamp;
      return;
    }
    var delta = timestamp - this.lastTimestamp;
    this.lastTimestamp = timestamp;
    this.game.loop_14dthe$(delta);
    window.requestAnimationFrame(JsGameLoopBeat$frame$lambda(this));
  };
  function JsGameLoopBeat$onStart$lambda(this$JsGameLoopBeat) {
    return function (ts) {
      this$JsGameLoopBeat.frame_14dthe$(ts);
      return Unit;
    };
  }
  JsGameLoopBeat.prototype.onStart = function () {
    window.requestAnimationFrame(JsGameLoopBeat$onStart$lambda(this));
  };
  JsGameLoopBeat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGameLoopBeat',
    interfaces: [AbstractGameLoopBeat]
  };
  function JvmStatic() {
  }
  JvmStatic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JvmStatic',
    interfaces: [Annotation]
  };
  function main(args) {
    println('K&K Textgame Engine <3 0.1');
  }
  Game.TestingGame = Game$TestingGame;
  var package$eu = _.eu || (_.eu = {});
  var package$karelhovorka = package$eu.karelhovorka || (package$eu.karelhovorka = {});
  var package$textgame = package$karelhovorka.textgame || (package$karelhovorka.textgame = {});
  var package$core = package$textgame.core || (package$textgame.core = {});
  package$core.Game = Game;
  package$core.gameCompleted_vqcwhu$ = gameCompleted;
  package$core.GameListener = GameListener;
  var package$bo = package$core.bo || (package$core.bo = {});
  package$bo.Chapter = Chapter;
  package$bo.GameCompletion = GameCompletion;
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
  package$bo.EndType = EndType;
  package$bo.State = State;
  var package$bot = package$core.bot || (package$core.bot = {});
  package$bot.GameBot = GameBot;
  package$bot.GameCrawlContext = GameCrawlContext;
  var package$listener = package$core.listener || (package$core.listener = {});
  package$listener.AbstractGameListener = AbstractGameListener;
  package$listener.AutosaveListener = AutosaveListener;
  package$listener.CompletedGameListener = CompletedGameListener;
  package$listener.ConsoleGameListener = ConsoleGameListener;
  package$listener.CountingGameListener = CountingGameListener;
  package$listener.EmptyListener = EmptyListener;
  package$listener.ListGameListener = ListGameListener;
  var package$stack = package$listener.stack || (package$listener.stack = {});
  package$stack.Event = Event;
  package$stack.GameListenerDelegate = GameListenerDelegate;
  Object.defineProperty(GameSaver, 'Companion', {
    get: GameSaver$Companion_getInstance
  });
  var package$saver = package$core.saver || (package$core.saver = {});
  package$saver.GameSaver = GameSaver;
  package$saver.MemoryGameSaver = MemoryGameSaver;
  var package$util = package$core.util || (package$core.util = {});
  package$util.GameConfigHelper = GameConfigHelper;
  Object.defineProperty(package$util, 'SmartRandom', {
    get: SmartRandom_getInstance
  });
  Object.defineProperty(package$util, 'NODE_SELF_CONSUMING', {
    get: function () {
      return NODE_SELF_CONSUMING;
    }
  });
  package$util.SuperStateBuilder = SuperStateBuilder;
  Object.defineProperty(package$util, 'UZEL', {
    get: function () {
      return UZEL;
    }
  });
  package$util.fixBOM_61zpoe$ = fixBOM;
  Object.defineProperty(GameConverter$ConvertState, 'NODE', {
    get: GameConverter$ConvertState$NODE_getInstance
  });
  Object.defineProperty(GameConverter$ConvertState, 'SUPERNODE', {
    get: GameConverter$ConvertState$SUPERNODE_getInstance
  });
  Object.defineProperty(GameConverter$ConvertState, 'EDGE', {
    get: GameConverter$ConvertState$EDGE_getInstance
  });
  Object.defineProperty(GameConverter$ConvertState, 'EDGE_CONTENT', {
    get: GameConverter$ConvertState$EDGE_CONTENT_getInstance
  });
  Object.defineProperty(GameConverter$ConvertState, 'CHAPTER', {
    get: GameConverter$ConvertState$CHAPTER_getInstance
  });
  Object.defineProperty(GameConverter$ConvertState, 'NONE', {
    get: GameConverter$ConvertState$NONE_getInstance
  });
  GameConverter.ConvertState = GameConverter$ConvertState;
  package$util.GameConverter = GameConverter;
  package$util.IncorrectLineException = IncorrectLineException;
  package$util.GameConverterContext = GameConverterContext;
  Object.defineProperty(package$util, 'STATE_ID_REGEX', {
    get: function () {
      return STATE_ID_REGEX;
    }
  });
  Object.defineProperty(package$util, 'MOVE_ID_REGEX', {
    get: function () {
      return MOVE_ID_REGEX;
    }
  });
  package$util.getFlags_u5fyh6$ = getFlags;
  package$util.GameValidator = GameValidator;
  package$util.random_2p1efm$ = random;
  package$util.random_4b5429$ = random_0;
  package$util.getOrThrow_t9ocha$ = getOrThrow;
  package$util.state_mhgdru$ = state;
  package$util.move_ayo8pa$ = move;
  package$util.game_83trrj$ = game;
  package$util.StateBuilder = StateBuilder;
  package$util.CharSequenceBuilder = CharSequenceBuilder;
  package$util.GameConfigBuilder = GameConfigBuilder;
  package$util.MoveBuilder = MoveBuilder;
  package$util.ChapterBuilder = ChapterBuilder;
  var package$validator = package$core.validator || (package$core.validator = {});
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
  var package$minigame = package$textgame.minigame || (package$textgame.minigame = {});
  package$minigame.ConsoleMinigameListener = ConsoleMinigameListener;
  package$minigame.AbstractGameLoopBeat = AbstractGameLoopBeat;
  package$minigame.GameLoopMinigame = GameLoopMinigame;
  package$minigame.GameLoopMinigameListener = GameLoopMinigameListener;
  Object.defineProperty(MinigameState, 'CREATED', {
    get: MinigameState$CREATED_getInstance
  });
  Object.defineProperty(MinigameState, 'RUNNING', {
    get: MinigameState$RUNNING_getInstance
  });
  Object.defineProperty(MinigameState, 'FINISHED', {
    get: MinigameState$FINISHED_getInstance
  });
  Object.defineProperty(MinigameState, 'PAUSED', {
    get: MinigameState$PAUSED_getInstance
  });
  package$minigame.MinigameState = MinigameState;
  package$minigame.Minigame = Minigame;
  package$minigame.MinigameEvent = MinigameEvent;
  package$minigame.MinigameListener = MinigameListener;
  Object.defineProperty(UnlockMiniGame, 'Companion', {
    get: UnlockMiniGame$Companion_getInstance
  });
  package$minigame.UnlockMiniGame_init_2ezyj0$ = UnlockMiniGame_init;
  package$minigame.UnlockMiniGame = UnlockMiniGame;
  var package$specific = package$textgame.specific || (package$textgame.specific = {});
  Object.defineProperty(package$specific, 'Theme', {
    get: Theme_getInstance
  });
  package$core.GameLoader = GameLoader;
  var package$common = package$core.common || (package$core.common = {});
  package$common.GameBeat = GameBeat;
  Object.defineProperty(package$common, 'RandomUtil', {
    get: RandomUtil_getInstance
  });
  package$core.GameJsonState = GameJsonState;
  package$core.GameJsonData = GameJsonData;
  package$core.getGameFromConfig = getGameFromConfig;
  package$core.loadGameFromConfig = loadGameFromConfig;
  package$listener.toHtml_gw00vp$ = toHtml;
  package$listener.textToHtml_61zpoe$ = textToHtml;
  package$listener.HtmlGameListener = HtmlGameListener;
  package$listener.JsDelegateGameListener = JsDelegateGameListener;
  package$saver.LocalStorageGameSaver = LocalStorageGameSaver;
  package$minigame.Options = Options;
  package$minigame.SoundOptions = SoundOptions;
  package$minigame.AudioTrack = AudioTrack;
  package$minigame.TrackGroup = TrackGroup;
  package$minigame.SoundController = SoundController;
  package$minigame.GameLoopBeat = GameLoopBeat;
  package$minigame.GameRepository = GameRepository;
  package$minigame.JsGameLoopBeat = JsGameLoopBeat;
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$js = package$kotlinx.js || (package$kotlinx.js = {});
  package$js.JvmStatic = JvmStatic;
  var package$test = _.test || (_.test = {});
  var package$hello = package$test.hello || (package$test.hello = {});
  package$hello.main_kand9s$ = main;
  prefix = Regex_init('[hu]([^_]+)_.*');
  NODE_SELF_CONSUMING = false;
  UZEL = Regex_init('uzel=(u[0-9A-Za-z_]*)');
  STATE_ID_REGEX = Regex_init('u[0-9A-Za-z_]*');
  MOVE_ID_REGEX = Regex_init('h[0-9A-Za-z_]*');
  incorrect2 = 'osoba=\u201C([^\u201C]*)\u201C>';
  incorrect2_replacement = "osoba='$1'>";
  incorrect3 = Regex_init('.*<myslenka [^>]*>[^<]*<myslenka .*');
  main([]);
  Kotlin.defineModule('textgame', _);
  return _;
}));

//# sourceMappingURL=textgame.js.map
