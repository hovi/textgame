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
  var Unit = Kotlin.kotlin.Unit;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var equals = Kotlin.equals;
  var CharSequence = Kotlin.kotlin.CharSequence;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var dropLast = Kotlin.kotlin.collections.dropLast_8ujjk8$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Pair = Kotlin.kotlin.Pair;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var Exception = Kotlin.kotlin.Exception;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toMutableList_0 = Kotlin.kotlin.collections.toMutableList_us0mfu$;
  var toString = Kotlin.toString;
  var contains_0 = Kotlin.kotlin.text.contains_li3zpu$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var throwUPAE = Kotlin.throwUPAE;
  var throwCCE = Kotlin.throwCCE;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toList_1 = Kotlin.kotlin.sequences.toList_veqyi0$;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var isNaN_0 = Kotlin.kotlin.isNaN_81szk$;
  var numberToInt = Kotlin.numberToInt;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var NotImplementedError = Kotlin.kotlin.NotImplementedError;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var getCallableRef = Kotlin.getCallableRef;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var Annotation = Kotlin.kotlin.Annotation;
  FlagType.prototype = Object.create(Enum.prototype);
  FlagType.prototype.constructor = FlagType;
  EndType.prototype = Object.create(Enum.prototype);
  EndType.prototype.constructor = EndType;
  GameConverter$ConvertState.prototype = Object.create(Enum.prototype);
  GameConverter$ConvertState.prototype.constructor = GameConverter$ConvertState;
  IncorrectLineException.prototype = Object.create(Exception.prototype);
  IncorrectLineException.prototype.constructor = IncorrectLineException;
  MoveException.prototype = Object.create(Exception.prototype);
  MoveException.prototype.constructor = MoveException;
  StateException.prototype = Object.create(Exception.prototype);
  StateException.prototype.constructor = StateException;
  AutosaveListener.prototype = Object.create(AbstractGameListener.prototype);
  AutosaveListener.prototype.constructor = AutosaveListener;
  CompletedGameListener.prototype = Object.create(AbstractGameListener.prototype);
  CompletedGameListener.prototype.constructor = CompletedGameListener;
  CountingGameListener.prototype = Object.create(AbstractGameListener.prototype);
  CountingGameListener.prototype.constructor = CountingGameListener;
  MemoryGameSaver.prototype = Object.create(GameSaver.prototype);
  MemoryGameSaver.prototype.constructor = MemoryGameSaver;
  BinaryOperator.prototype = Object.create(Enum.prototype);
  BinaryOperator.prototype.constructor = BinaryOperator;
  BinaryOperator$TIMES.prototype = Object.create(BinaryOperator.prototype);
  BinaryOperator$TIMES.prototype.constructor = BinaryOperator$TIMES;
  BinaryOperator$PLUS.prototype = Object.create(BinaryOperator.prototype);
  BinaryOperator$PLUS.prototype.constructor = BinaryOperator$PLUS;
  BinaryOperator$MINUS.prototype = Object.create(BinaryOperator.prototype);
  BinaryOperator$MINUS.prototype.constructor = BinaryOperator$MINUS;
  BinaryOperator$NONE.prototype = Object.create(BinaryOperator.prototype);
  BinaryOperator$NONE.prototype.constructor = BinaryOperator$NONE;
  MathExpression$TokenType.prototype = Object.create(Enum.prototype);
  MathExpression$TokenType.prototype.constructor = MathExpression$TokenType;
  GameLoopMinigame.prototype = Object.create(Minigame.prototype);
  GameLoopMinigame.prototype.constructor = GameLoopMinigame;
  MinigameState.prototype = Object.create(Enum.prototype);
  MinigameState.prototype.constructor = MinigameState;
  SimpleAddFlagMinigame.prototype = Object.create(Minigame.prototype);
  SimpleAddFlagMinigame.prototype.constructor = SimpleAddFlagMinigame;
  UnlockMiniGame.prototype = Object.create(GameLoopMinigame.prototype);
  UnlockMiniGame.prototype.constructor = UnlockMiniGame;
  ListMinigameRepository.prototype = Object.create(MinigameRepository.prototype);
  ListMinigameRepository.prototype.constructor = ListMinigameRepository;
  GameLoader$newgame$ObjectLiteral.prototype = Object.create(MinigameRepository.prototype);
  GameLoader$newgame$ObjectLiteral.prototype.constructor = GameLoader$newgame$ObjectLiteral;
  HtmlGameListener.prototype = Object.create(EmptyListener.prototype);
  HtmlGameListener.prototype.constructor = HtmlGameListener;
  JsDelegateGameListener.prototype = Object.create(EmptyListener.prototype);
  JsDelegateGameListener.prototype.constructor = JsDelegateGameListener;
  LocalStorageGameSaver.prototype = Object.create(GameSaver.prototype);
  LocalStorageGameSaver.prototype.constructor = LocalStorageGameSaver;
  GameLoopBeat.prototype = Object.create(AbstractGameLoopBeat.prototype);
  GameLoopBeat.prototype.constructor = GameLoopBeat;
  JsGameLoopBeat.prototype = Object.create(AbstractGameLoopBeat.prototype);
  JsGameLoopBeat.prototype.constructor = JsGameLoopBeat;
  MusicMinigame.prototype = Object.create(Minigame.prototype);
  MusicMinigame.prototype.constructor = MusicMinigame;
  function Game(flags, gameConfig, listener, initialStateId, usePause, saver, minigames, variables) {
    if (flags === void 0) {
      flags = ArrayList_init();
    }
    if (listener === void 0)
      listener = new ConsoleGameListener();
    if (initialStateId === void 0)
      initialStateId = null;
    if (usePause === void 0)
      usePause = true;
    if (saver === void 0)
      saver = new MemoryGameSaver();
    if (minigames === void 0)
      minigames = new MinigameRepository();
    if (variables === void 0)
      variables = new VariableTemplate();
    this.flags = flags;
    this.gameConfig = gameConfig;
    this.initialStateId = initialStateId;
    this.usePause = usePause;
    this.saver = saver;
    this.minigames = minigames;
    this.variables = variables;
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
    this.nextState_0(this.initState_0());
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
  Game.prototype.nextState_0 = function (state) {
    if (state.minigame != null) {
      this.startMinigame_0(state);
    }
     else {
      this.visitState_0(state);
    }
  };
  function Game$startMinigame$lambda(this$Game, closure$state) {
    return function (id, gameFlags) {
      addAll(this$Game.flags, gameFlags);
      this$Game.visitState_0(closure$state);
      return Unit;
    };
  }
  Game.prototype.startMinigame_0 = function (state) {
    var minigame = this.minigames.getGame_zesxb9$(ensureNotNull(state.minigame), copyToArray(this.flags), Game$startMinigame$lambda(this, state));
    this.listener.onMinigame_5w5fsm$(minigame);
  };
  Game.prototype.visitState_0 = function (state) {
    this.validateGroupFlags_0(state);
    this.currentState = this.variables.evaluate_ktq7vf$(state);
    this.flags.add_11rb$(this.currentState.id);
    addAll(this.flags, this.currentState.flags);
    var moves = this.filterMoves_15v58o$(this.currentState);
    this.listener.onState_8v5zxy$(this.currentState, moves);
    if (moves.length === 0) {
      if (state.endType === EndType$NONE_getInstance()) {
        throw StateException_init(state, 'Just about to end with no explicit endingType');
      }
      this.listener.onFinish_vi5hg2$(this, state.endType);
    }
     else {
      if (state.endType !== EndType$NONE_getInstance()) {
        throw StateException_init(state, 'State has explicit ending type, but moves out.');
      }
    }
    if (moves.length === 1 && moves[0].isAutoMove()) {
      var move = moves[0];
      this.move(move.id);
    }
  };
  Game.prototype.validateGroupFlags_0 = function (state) {
    var tmp$, tmp$_0;
    var flagGroups = this.gameConfigHelper.flagGroupsOf_ktq7vf$(state);
    tmp$ = flagGroups.iterator();
    while (tmp$.hasNext()) {
      var flagGroup = tmp$.next();
      var flagCount = 0;
      tmp$_0 = this.flags.iterator();
      while (tmp$_0.hasNext()) {
        var flag = tmp$_0.next();
        if (contains(flagGroup.flags, flag)) {
          flagCount = flagCount + 1 | 0;
        }
      }
      if (flagCount < 1) {
        var message = state.id + ' - Group check failed for group ' + flagGroup.name;
        if (flagGroup.type === FlagType$EXACTLY_ONE_getInstance()) {
          message += ' Requires exactly one of these flags set: ' + toList(flagGroup.flags);
        }
         else {
          message += ' Requires at least one of these flags set: ' + toList(flagGroup.flags);
        }
        this.flags.add_11rb$(random_0(flagGroup.flags));
        println(message);
      }
      if (flagCount > 1 && flagGroup.type === FlagType$EXACTLY_ONE_getInstance()) {
        var message_0 = state.id + ' - Group check failed for group ' + flagGroup.name + ' - too many flags.';
        message_0 += ' Requires exactly one of these flags set: ' + toList(flagGroup.flags);
        throw StateException_init(state, message_0);
      }
    }
  };
  Game.prototype.move = function (moveId) {
    if (!contains(this.currentState.moveIds, moveId)) {
      throw StateException_init(this.currentState, 'Move ' + moveId + ' not found in state.');
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
    var evaluatedMove = this.variables.evaluate_8hvgvt$(move);
    this.flags.add_11rb$(evaluatedMove.id);
    addAll(this.flags, evaluatedMove.flags);
    this.listener.onMove_8hvgvt$(evaluatedMove);
    if (!this.gameConfigHelper.containsState_61zpoe$(evaluatedMove.targetId) && evaluatedMove.acrossChapters()) {
      println('Missing target: ' + evaluatedMove.targetId);
      this.listener.onFinish_vi5hg2$(this, EndType$MISSING_CHAPTER_getInstance());
      return;
    }
    var newState = this.gameConfigHelper.stateById_61zpoe$(move.targetId);
    this.nextState_0(newState);
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
  function State(id, text, illustration, chapterId, flags, moveIds, categories, endType, theme, background, minigame, variables) {
    if (text === void 0)
      text = null;
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
    this.moveIds = moveIds;
    this.categories = categories;
    this.endType = endType;
    this.theme = theme;
    this.background = background;
    this.minigame = minigame;
    this.variables = variables;
  }
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
  State.prototype.component11 = function () {
    return this.minigame;
  };
  State.prototype.component12 = function () {
    return this.variables;
  };
  State.prototype.copy_ncd3oo$ = function (id, text, illustration, chapterId, flags, moveIds, categories, endType, theme, background, minigame, variables) {
    return new State(id === void 0 ? this.id : id, text === void 0 ? this.text : text, illustration === void 0 ? this.illustration : illustration, chapterId === void 0 ? this.chapterId : chapterId, flags === void 0 ? this.flags : flags, moveIds === void 0 ? this.moveIds : moveIds, categories === void 0 ? this.categories : categories, endType === void 0 ? this.endType : endType, theme === void 0 ? this.theme : theme, background === void 0 ? this.background : background, minigame === void 0 ? this.minigame : minigame, variables === void 0 ? this.variables : variables);
  };
  State.prototype.toString = function () {
    return 'State(id=' + Kotlin.toString(this.id) + (', text=' + Kotlin.toString(this.text)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', chapterId=' + Kotlin.toString(this.chapterId)) + (', flags=' + Kotlin.toString(this.flags)) + (', moveIds=' + Kotlin.toString(this.moveIds)) + (', categories=' + Kotlin.toString(this.categories)) + (', endType=' + Kotlin.toString(this.endType)) + (', theme=' + Kotlin.toString(this.theme)) + (', background=' + Kotlin.toString(this.background)) + (', minigame=' + Kotlin.toString(this.minigame)) + (', variables=' + Kotlin.toString(this.variables)) + ')';
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
    result = result * 31 + Kotlin.hashCode(this.minigame) | 0;
    result = result * 31 + Kotlin.hashCode(this.variables) | 0;
    return result;
  };
  State.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.moveIds, other.moveIds) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.endType, other.endType) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.background, other.background) && Kotlin.equals(this.minigame, other.minigame) && Kotlin.equals(this.variables, other.variables)))));
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
  GameCrawlContext.prototype.onMinigame_5w5fsm$ = function (minigame) {
  };
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
      throw StateException_init(state, 'Too many visits');
    }
    if (isInteractive(moves)) {
      tmp$ = dropLast(this.filterUnimportantMoves_tfme49$(moves), 1).iterator();
      while (tmp$.hasNext()) {
        var move = tmp$.next();
        if (this.game.flags.contains_11rb$(move.id)) {
          throw MoveException_init(move, 'WTF');
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
  function SuperStateBuilder(id, currentTheme, selfConsuming, finalTargetId, chapterId, tmpStates, endType) {
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
    if (endType === void 0)
      endType = EndType$NONE_getInstance();
    this.id = id;
    this.currentTheme = currentTheme;
    this.selfConsuming = selfConsuming;
    this.finalTargetId = finalTargetId;
    this.chapterId = chapterId;
    this.tmpStates = tmpStates;
    this.endType = endType;
    this.addState();
  }
  SuperStateBuilder.prototype.build = function () {
    var tmp$;
    if (this.finalTargetId == null && this.currentStateBuilder().moveIds.isEmpty() && this.endType === EndType$NONE_getInstance()) {
      throw new StateException(this.id, 'Superuzel pot\u0159ebuje c\xEDl, hrany anebo konec');
    }
    var tmp$_0 = this.finalTargetId != null;
    if (tmp$_0) {
      tmp$_0 = !this.currentStateBuilder().moveIds.isEmpty();
    }
    if (tmp$_0) {
      throw new StateException(this.id, 'Superuzel m\u016F\u017Ee m\xEDt bu\u010F c\xEDl anebo hrany (ne oboj\xED)');
    }
    var states = ArrayList_init();
    var moves = ArrayList_init();
    var index = 0;
    tmp$ = this.tmpStates.iterator();
    while (tmp$.hasNext()) {
      var stateBuilder = tmp$.next();
      var nextStateId = this.id + '_sub_' + (index + 1 | 0);
      var moveId = 'h_' + this.id + '_sub_' + index;
      if (index === (this.tmpStates.size - 1 | 0)) {
        if (this.finalTargetId != null) {
          stateBuilder.moveIds.add_11rb$(moveId);
          moves.add_11rb$(new Move(moveId, void 0, void 0, void 0, void 0, this.selfConsuming, ensureNotNull(this.finalTargetId)));
        }
         else if (this.endType !== EndType$NONE_getInstance()) {
          stateBuilder.endType = this.endType;
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
    var stateId = this.id;
    if (!this.tmpStates.isEmpty()) {
      stateId = this.id + '_sub_' + this.tmpStates.size;
    }
    this.tmpStates.add_11rb$(new StateBuilder(stateId, void 0, void 0, void 0, void 0, this.chapterId, void 0, void 0, this.currentTheme));
    return stateId;
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
  SuperStateBuilder.prototype.component7 = function () {
    return this.endType;
  };
  SuperStateBuilder.prototype.copy_3eoya4$ = function (id, currentTheme, selfConsuming, finalTargetId, chapterId, tmpStates, endType) {
    return new SuperStateBuilder(id === void 0 ? this.id : id, currentTheme === void 0 ? this.currentTheme : currentTheme, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, finalTargetId === void 0 ? this.finalTargetId : finalTargetId, chapterId === void 0 ? this.chapterId : chapterId, tmpStates === void 0 ? this.tmpStates : tmpStates, endType === void 0 ? this.endType : endType);
  };
  SuperStateBuilder.prototype.toString = function () {
    return 'SuperStateBuilder(id=' + Kotlin.toString(this.id) + (', currentTheme=' + Kotlin.toString(this.currentTheme)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', finalTargetId=' + Kotlin.toString(this.finalTargetId)) + (', chapterId=' + Kotlin.toString(this.chapterId)) + (', tmpStates=' + Kotlin.toString(this.tmpStates)) + (', endType=' + Kotlin.toString(this.endType)) + ')';
  };
  SuperStateBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentTheme) | 0;
    result = result * 31 + Kotlin.hashCode(this.selfConsuming) | 0;
    result = result * 31 + Kotlin.hashCode(this.finalTargetId) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapterId) | 0;
    result = result * 31 + Kotlin.hashCode(this.tmpStates) | 0;
    result = result * 31 + Kotlin.hashCode(this.endType) | 0;
    return result;
  };
  SuperStateBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.currentTheme, other.currentTheme) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.finalTargetId, other.finalTargetId) && Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.tmpStates, other.tmpStates) && Kotlin.equals(this.endType, other.endType)))));
  };
  var UZEL;
  function fixBOM(text) {
    return replace(text, '\uFEFF', '');
  }
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  function GameConverter() {
    this.converterContext = new GameConverterContext();
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
    this.TEMA_0 = Regex_init('tema=([a-zA-Z\\-0-9_{}]+)');
    this.SUPERUZEL_0 = Regex_init('superuzel=(u[a-zA-Z\\-0-9_]+)');
    this.SUPERUZEL_SEPARATOR_0 = '-';
    this.FLAG_GROUP_0 = Regex_init('skupina\\(([0-9A-Za-z_-]*),(prave_jeden|aspon_jeden)\\)=(.*)');
    this.PRIZNAK_0 = Regex_init('priznak=(.*)');
    this.MINIHRA_0 = Regex_init('minihra=(.*)');
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
      default:throwISE('No enum constant eu.karelhovorka.textgame.core.build.GameConverter.ConvertState.' + name);
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
    this.buildChapter();
    return this.game_0.build();
  };
  GameConverter.prototype.parseLine_bm4lxs$ = function (line, index) {
    var tmp$;
    if (!equals(line, this.SEPARATOR_0))
      if (!startsWith(line, '#'))
        if (!equals(line, '')) {
          if (this.SUPERUZEL_0.matches_6bul2c$(line)) {
            var id = this.SUPERUZEL_0.replace_x2uqeu$(line, '$1');
            this.switchConvertState_0(GameConverter$ConvertState$SUPERNODE_getInstance());
            this.currentSuperState_0 = new SuperStateBuilder(id, void 0, void 0, void 0, ensureNotNull(this.currentChapter_0).id);
            this.converterContext.addStateId_bm4lxs$(id, index);
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
              this.converterContext.addStateId_bm4lxs$(stateId, index);
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
                this.converterContext.addMoveId_bm4lxs$(moveId, index);
              }
               else {
                if (this.convertState_0 === GameConverter$ConvertState$SUPERNODE_getInstance()) {
                  if (equals(this.SUPERUZEL_SEPARATOR_0, line)) {
                    var stateId_0 = ensureNotNull(this.currentSuperState_0).addState();
                    this.converterContext.addStateId_bm4lxs$(stateId_0, index);
                  }
                   else {
                    if (this.KONEC_0.matches_6bul2c$(line)) {
                      ensureNotNull(this.currentSuperState_0).endType = this.endType_0(line, index);
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
                        this.parseNodeParameters_5gvdsp$(ensureNotNull(this.currentSuperState_0).currentStateBuilder(), line, index);
                      }
                       else {
                        this.parseNodeParameters_5gvdsp$(ensureNotNull(this.currentSuperState_0).currentStateBuilder(), line, index);
                      }
                    }
                  }
                }
                 else if (this.convertState_0 === GameConverter$ConvertState$NODE_getInstance()) {
                  this.parseNodeParameters_5gvdsp$(ensureNotNull(this.currentState_0), line, index);
                }
                 else if (this.convertState_0 === GameConverter$ConvertState$EDGE_getInstance()) {
                  this.parseEdgeLine_bm4lxs$(line, index);
                }
                 else if (this.convertState_0 === GameConverter$ConvertState$EDGE_CONTENT_getInstance()) {
                  this.errorIfParameter_bm4lxs$(line, index);
                  ensureNotNull(this.currentMove_0).appendText_61zpoe$(line);
                }
                 else if (this.convertState_0 === GameConverter$ConvertState$CHAPTER_getInstance()) {
                  if (this.FLAG_GROUP_0.matches_6bul2c$(line)) {
                    var groupName = this.FLAG_GROUP_0.replace_x2uqeu$(line, '$1');
                    var groupType = this.FLAG_GROUP_0.replace_x2uqeu$(line, '$2');
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
                    var $receiver = split(this.FLAG_GROUP_0.replace_x2uqeu$(line, '$3'), [',']);
                    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
                    var tmp$_0;
                    tmp$_0 = $receiver.iterator();
                    while (tmp$_0.hasNext()) {
                      var item = tmp$_0.next();
                      var tmp$_1;
                      destination.add_11rb$(trim(Kotlin.isCharSequence(tmp$_1 = item) ? tmp$_1 : throwCCE()).toString());
                    }
                    var flags = copyToArray(destination);
                    ensureNotNull(this.currentChapter_0).flagGroups.add_11rb$(new FlagGroup(groupName, flags, type));
                  }
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
  GameConverter.prototype.parseNodeParameters_5gvdsp$ = function (builder, line, index) {
    if (this.ILUSTRACE_0.matches_6bul2c$(line)) {
      var illustration = this.parameterValue_0(line);
      builder.illustration = illustration;
    }
     else {
      if (Variable$Companion_getInstance().REGEX.matches_6bul2c$(line)) {
        builder.variables.add_11rb$(Variable$Companion_getInstance().parse_61zpoe$(line));
      }
       else {
        if (this.PRIZNAK_0.matches_6bul2c$(line)) {
          var flags = toMutableList_0(this.parameterArray_0(line));
          ensureNotNull(this.currentState_0).flags = flags;
        }
         else {
          if (this.MINIHRA_0.matches_6bul2c$(line)) {
            builder.minigame = this.parameterValue_0(line);
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
                  builder.endType = this.endType_0(line, index);
                }
                 else if (startsWith(line, this.KATEGORIE_0)) {
                  var categories = this.parameterArray_0(line);
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
      }
    }
  };
  GameConverter.prototype.endType_0 = function (line, index) {
    var tmp$;
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
    return tmp$;
  };
  GameConverter.prototype.parameterValue_0 = function (line) {
    return this.PARAMETER_0.replace_x2uqeu$(line, '$2');
  };
  GameConverter.prototype.parameterArray_0 = function (line) {
    var $receiver = split(this.PARAMETER_0.replace_x2uqeu$(line, '$2'), [',']);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(trim(Kotlin.isCharSequence(tmp$_0 = item) ? tmp$_0 : throwCCE()).toString());
    }
    return copyToArray(destination);
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
        var flags = toMutableList_0(this.parameterArray_0(line));
        ensureNotNull(this.currentMove_0).flags = flags;
      }
       else {
        if (Variable$Companion_getInstance().REGEX.matches_6bul2c$(line)) {
          ensureNotNull(this.currentMove_0).variables.add_11rb$(Variable$Companion_getInstance().parse_61zpoe$(line));
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
              var categories = this.parameterArray_0(line);
              ensureNotNull(this.currentMove_0).categories = categories;
            }
             else {
              if (this.ILUSTRACE_0.matches_6bul2c$(line)) {
                var illustration = this.parameterValue_0(line);
                ensureNotNull(this.currentMove_0).illustration = illustration;
              }
               else if (startsWith(line, this.OBRAZEK_0)) {
                var startIndex = this.OBRAZEK_0.length;
                var image = line.substring(startIndex);
                ensureNotNull(this.currentMove_0).image = image;
              }
               else if (startsWith(line, this.VYLOUCENA_0)) {
                var flagsDisallowing = this.parameterArray_0(line);
                addAll(ensureNotNull(this.currentMove_0).flagsDisallowing, flagsDisallowing);
              }
               else if (startsWith(line, this.PODMINENA_0)) {
                var flagsRequiring = this.parameterArray_0(line);
                addAll(ensureNotNull(this.currentMove_0).flagsRequired, flagsRequiring);
              }
               else if (startsWith(line, this.POPIS_0)) {
                var startIndex_0 = this.POPIS_0.length;
                var caption = line.substring(startIndex_0);
                ensureNotNull(this.currentMove_0).caption = caption;
              }
               else if (startsWith(line, this.CIL_0)) {
                var startIndex_1 = this.CIL_0.length;
                var targetId = line.substring(startIndex_1);
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
    }
  };
  GameConverter.prototype.errorIfParameter_bm4lxs$ = function (line, index) {
    if (this.PARAMETER_0.matches_6bul2c$(line)) {
      throw new IncorrectLineException(index, line, 'Neo\u010Dek\xE1van\xFD parametr');
    }
  };
  GameConverter.prototype.context = function () {
    return this.converterContext;
  };
  GameConverter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameConverter',
    interfaces: []
  };
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
  function StateBuilder(id, illustration, text_, flags, moveIds, chapterId, categories, endType, theme, background, minigame, variables) {
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
    if (minigame === void 0)
      minigame = null;
    if (variables === void 0) {
      variables = ArrayList_init();
    }
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
    this.stringBuilder = new CharSequenceBuilder();
    this.text_nigrv0$_0 = this.text__0;
  }
  Object.defineProperty(StateBuilder.prototype, 'text', {
    get: function () {
      return this.text_nigrv0$_0;
    },
    set: function (value) {
      if (value != null && contains_0(value, '@')) {
        this.text_nigrv0$_0 = (new CharSequenceBuilder()).appendFullText_6bul2c$(value).build();
      }
       else {
        this.text_nigrv0$_0 = value;
      }
    }
  });
  StateBuilder.prototype.build = function () {
    var finalText = this.stringBuilder.build();
    if (this.text != null) {
      finalText = this.text;
    }
    return new State(ensureNotNull(this.id), finalText != null ? trim(finalText) : null, this.illustration, ensureNotNull(this.chapterId), copyToArray(this.flags), copyToArray(this.moveIds), this.categories, this.endType, this.theme, this.background, this.minigame, copyToArray(this.variables));
  };
  StateBuilder.prototype.text_g3lzrs$ = function (init) {
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
  StateBuilder.prototype.component11 = function () {
    return this.minigame;
  };
  StateBuilder.prototype.component12 = function () {
    return this.variables;
  };
  StateBuilder.prototype.copy_4ffalc$ = function (id, illustration, text_, flags, moveIds, chapterId, categories, endType, theme, background, minigame, variables) {
    return new StateBuilder(id === void 0 ? this.id : id, illustration === void 0 ? this.illustration : illustration, text_ === void 0 ? this.text__0 : text_, flags === void 0 ? this.flags : flags, moveIds === void 0 ? this.moveIds : moveIds, chapterId === void 0 ? this.chapterId : chapterId, categories === void 0 ? this.categories : categories, endType === void 0 ? this.endType : endType, theme === void 0 ? this.theme : theme, background === void 0 ? this.background : background, minigame === void 0 ? this.minigame : minigame, variables === void 0 ? this.variables : variables);
  };
  StateBuilder.prototype.toString = function () {
    return 'StateBuilder(id=' + Kotlin.toString(this.id) + (', illustration=' + Kotlin.toString(this.illustration)) + (', text_=' + Kotlin.toString(this.text__0)) + (', flags=' + Kotlin.toString(this.flags)) + (', moveIds=' + Kotlin.toString(this.moveIds)) + (', chapterId=' + Kotlin.toString(this.chapterId)) + (', categories=' + Kotlin.toString(this.categories)) + (', endType=' + Kotlin.toString(this.endType)) + (', theme=' + Kotlin.toString(this.theme)) + (', background=' + Kotlin.toString(this.background)) + (', minigame=' + Kotlin.toString(this.minigame)) + (', variables=' + Kotlin.toString(this.variables)) + ')';
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
    result = result * 31 + Kotlin.hashCode(this.minigame) | 0;
    result = result * 31 + Kotlin.hashCode(this.variables) | 0;
    return result;
  };
  StateBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.text__0, other.text__0) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.moveIds, other.moveIds) && Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.endType, other.endType) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.background, other.background) && Kotlin.equals(this.minigame, other.minigame) && Kotlin.equals(this.variables, other.variables)))));
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
  GameConfigBuilder.prototype.state_mk2rj2$ = function (init) {
    var stateBuilder = new StateBuilder(void 0, void 0, void 0, void 0, void 0, void 0, []);
    init(stateBuilder);
    var state = stateBuilder.build();
    this.states.add_11rb$(state);
    return state;
  };
  GameConfigBuilder.prototype.move_d92qwi$ = function (init) {
    var moveBuilder = new MoveBuilder();
    init(moveBuilder);
    var move = moveBuilder.build();
    this.moves.add_11rb$(move);
    return move;
  };
  GameConfigBuilder.prototype.chapter_qya1jy$ = function (init) {
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
  function MoveBuilder(id, caption, image, illustration, text, selfConsuming, targetId, flags, flagsRequired, flagsDisallowing, categories, theme, variables) {
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
  MoveBuilder.prototype.component13 = function () {
    return this.variables;
  };
  MoveBuilder.prototype.copy_g29ftq$ = function (id, caption, image, illustration, text, selfConsuming, targetId, flags, flagsRequired, flagsDisallowing, categories, theme, variables) {
    return new MoveBuilder(id === void 0 ? this.id : id, caption === void 0 ? this.caption : caption, image === void 0 ? this.image : image, illustration === void 0 ? this.illustration : illustration, text === void 0 ? this.text : text, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, targetId === void 0 ? this.targetId : targetId, flags === void 0 ? this.flags : flags, flagsRequired === void 0 ? this.flagsRequired : flagsRequired, flagsDisallowing === void 0 ? this.flagsDisallowing : flagsDisallowing, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme, variables === void 0 ? this.variables : variables);
  };
  MoveBuilder.prototype.toString = function () {
    return 'MoveBuilder(id=' + Kotlin.toString(this.id) + (', caption=' + Kotlin.toString(this.caption)) + (', image=' + Kotlin.toString(this.image)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', text=' + Kotlin.toString(this.text)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', targetId=' + Kotlin.toString(this.targetId)) + (', flags=' + Kotlin.toString(this.flags)) + (', flagsRequired=' + Kotlin.toString(this.flagsRequired)) + (', flagsDisallowing=' + Kotlin.toString(this.flagsDisallowing)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + (', variables=' + Kotlin.toString(this.variables)) + ')';
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
    result = result * 31 + Kotlin.hashCode(this.variables) | 0;
    return result;
  };
  MoveBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.caption, other.caption) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.targetId, other.targetId) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.flagsRequired, other.flagsRequired) && Kotlin.equals(this.flagsDisallowing, other.flagsDisallowing) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.variables, other.variables)))));
  };
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
  AbstractGameListener.prototype.onMinigame_5w5fsm$ = function (minigame) {
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
  ConsoleGameListener.prototype.onMinigame_5w5fsm$ = function (minigame) {
    println('minigame: ' + minigame.id);
  };
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
    AbstractGameListener.call(this);
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
    interfaces: [AbstractGameListener]
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
  EmptyListener.prototype.onMinigame_5w5fsm$ = function (minigame) {
  };
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
  ListGameListener.prototype.onMinigame_5w5fsm$ = function (minigame) {
    var $receiver = this.gameListeners;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.onMinigame_5w5fsm$(minigame);
    }
  };
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
  GameListenerDelegate.prototype.onMinigame_5w5fsm$ = function (minigame) {
    if (this.eventStack.isEmpty() && !this.paused) {
      this.listener.onMinigame_5w5fsm$(minigame);
      minigame.start();
    }
     else {
      this.eventStack.add_11rb$(new Event('onMinigame', minigame));
    }
  };
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
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
     else if (equals(first_0.name, 'onMinigame')) {
      var minigame = Kotlin.isType(tmp$_5 = first_0.data, Minigame) ? tmp$_5 : throwCCE();
      this.listener.onMinigame_5w5fsm$(minigame);
      minigame.start();
    }
     else {
      throw IllegalArgumentException_init('Invalid name: ' + first_0.name);
    }
    this.paused = false;
    if (this.eventStack.size === 1 && equals(first(this.eventStack).name, 'onFinish')) {
      var second = this.eventStack.removeAt_za3lpa$(0);
      var endType_0 = Kotlin.isType(tmp$_6 = second.data2, EndType) ? tmp$_6 : throwCCE();
      var game = Kotlin.isType(tmp$_7 = second.data, Game) ? tmp$_7 : throwCCE();
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
  MemoryGameSaver.prototype.loadCompletion = function () {
    throw new NotImplementedError('An operation is not implemented: ' + 'not implemented');
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
    var tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var $receiver_2 = this.chaptersById_0;
    var destination_2 = ArrayList_init($receiver_2.size);
    var tmp$_9;
    tmp$_9 = $receiver_2.entries.iterator();
    while (tmp$_9.hasNext()) {
      var item = tmp$_9.next();
      destination_2.add_11rb$(item.value.flagGroups);
    }
    var tmp$_10;
    tmp$_10 = destination_2.iterator();
    while (tmp$_10.hasNext()) {
      var element_2 = tmp$_10.next();
      var tmp$_11;
      for (tmp$_11 = 0; tmp$_11 !== element_2.length; ++tmp$_11) {
        var flagGroup = element_2[tmp$_11];
        this.flagGroups.add_11rb$(flagGroup);
      }
    }
    tmp$_2 = this.gameConfig.states;
    for (tmp$_3 = 0; tmp$_3 !== tmp$_2.length; ++tmp$_3) {
      var state = tmp$_2[tmp$_3];
      if (this.flagGroupsByStateId_0.get_11rb$(state.id) == null) {
        var tmp$_12 = this.flagGroupsByStateId_0;
        var tmp$_13 = state.id;
        var value = ArrayList_init();
        tmp$_12.put_xwzc9p$(tmp$_13, value);
      }
      var $receiver_3 = state.moveIds;
      var destination_3 = ArrayList_init($receiver_3.length);
      var tmp$_14;
      for (tmp$_14 = 0; tmp$_14 !== $receiver_3.length; ++tmp$_14) {
        var item_0 = $receiver_3[tmp$_14];
        destination_3.add_11rb$(this.moveById_61zpoe$(item_0));
      }
      var moves = destination_3;
      tmp$_4 = moves.iterator();
      while (tmp$_4.hasNext()) {
        var move = tmp$_4.next();
        tmp$_5 = move.flagsDisallowing;
        for (tmp$_6 = 0; tmp$_6 !== tmp$_5.length; ++tmp$_6) {
          var flag = tmp$_5[tmp$_6];
          var flagGroup_0 = this.isInGroup_puj7f4$(state.chapterId, flag);
          if (flagGroup_0 != null) {
            ensureNotNull(this.flagGroupsByStateId_0.get_11rb$(state.id)).add_11rb$(flagGroup_0);
          }
        }
        tmp$_7 = move.flagsRequired;
        for (tmp$_8 = 0; tmp$_8 !== tmp$_7.length; ++tmp$_8) {
          var flag_0 = tmp$_7[tmp$_8];
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
  GameConfigHelper.prototype.isInGroup_puj7f4$ = function (chapterId, flag) {
    var tmp$;
    tmp$ = this.flagGroups.iterator();
    while (tmp$.hasNext()) {
      var flagGroup = tmp$.next();
      if (contains(flagGroup.flags, flag)) {
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
  GameConfigHelper.prototype.printFlagGroups = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.gameConfig.states;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var state = tmp$[tmp$_0];
      var $receiver = state.moveIds;
      var destination = ArrayList_init($receiver.length);
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== $receiver.length; ++tmp$_2) {
        var item = $receiver[tmp$_2];
        destination.add_11rb$(this.moveById_61zpoe$(item));
      }
      var moves = destination;
      var flags = LinkedHashSet_init();
      tmp$_1 = moves.iterator();
      while (tmp$_1.hasNext()) {
        var move = tmp$_1.next();
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
    tmp$ = this.gameConfig.states;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var state = tmp$[tmp$_0];
      if (state.illustration != null) {
        println(this.preload_61zpoe$(PathConstants$Companion_getInstance().ILLUSTRATIONS + state.illustration));
      }
      if (state.background != null) {
        println(this.preload_61zpoe$(PathConstants$Companion_getInstance().BACKGROUNDS + state.background));
      }
    }
    tmp$_1 = this.gameConfig.moves;
    for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
      var move = tmp$_1[tmp$_2];
      if (move.illustration != null) {
        println(this.preload_61zpoe$(PathConstants$Companion_getInstance().ILLUSTRATIONS + move.illustration));
      }
    }
    tmp$_3 = this.gameConfig.moves;
    for (tmp$_4 = 0; tmp$_4 !== tmp$_3.length; ++tmp$_4) {
      var move_0 = tmp$_3[tmp$_4];
      if (move_0.image != null) {
        println(this.preload_61zpoe$(PathConstants$Companion_getInstance().MOVES + move_0.image));
      }
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
  function random($receiver) {
    return $receiver.get_za3lpa$(RandomUtil_getInstance().nextInt_za3lpa$($receiver.size));
  }
  function random_0($receiver) {
    return $receiver[RandomUtil_getInstance().nextInt_za3lpa$($receiver.length)];
  }
  function random_1($receiver) {
    var tmp$;
    var rnd = RandomUtil_getInstance().nextInt_za3lpa$($receiver.size);
    var index = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (rnd === index) {
        return item;
      }
      index = index + 1 | 0;
    }
    throw IllegalStateException_init('should not reach');
  }
  function getOrThrow($receiver, key) {
    var result = $receiver.get_11rb$(key);
    if (result == null) {
      throw IllegalStateException_init('Key not found in map ' + key);
    }
    return result;
  }
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
          this.warn_3epqxe$('Cannot find move ' + moveId + ' from state ' + state.id, state);
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
      if (!contains(this.flags, flag)) {
        this.warn_3epqxe$('Non-existent flagsDisallowing ' + flag + ' for move ' + move.id + ' ' + '\n' + 'KIKI to znamen\xE1, \u017Ee ta vlajka neexistuje - neni nikde nastaven\xE1 pomoc\xED p\u0159\xEDznaku, ani to neni existuj\xEDc\xED tah/uzel. Jo a odd\u011Blujou se \u010D\xE1rkou!', void 0, move);
      }
    }
    tmp$_1 = move.flagsRequired;
    for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
      var flag_0 = tmp$_1[tmp$_2];
      if (!contains(this.flags, flag_0)) {
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
  function BinaryOperator(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BinaryOperator_initFields() {
    BinaryOperator_initFields = function () {
    };
    new BinaryOperator$TIMES();
    new BinaryOperator$PLUS();
    new BinaryOperator$MINUS();
    new BinaryOperator$NONE();
    BinaryOperator$Companion_getInstance();
  }
  function BinaryOperator$TIMES() {
    BinaryOperator$TIMES_instance = this;
    BinaryOperator.call(this, 'TIMES', 0);
  }
  BinaryOperator$TIMES.prototype.evaluate_dleff0$ = function (first, second) {
    return first * second;
  };
  BinaryOperator$TIMES.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TIMES',
    interfaces: [BinaryOperator]
  };
  var BinaryOperator$TIMES_instance = null;
  function BinaryOperator$TIMES_getInstance() {
    BinaryOperator_initFields();
    return BinaryOperator$TIMES_instance;
  }
  function BinaryOperator$PLUS() {
    BinaryOperator$PLUS_instance = this;
    BinaryOperator.call(this, 'PLUS', 1);
  }
  BinaryOperator$PLUS.prototype.evaluate_dleff0$ = function (first, second) {
    return first + second;
  };
  BinaryOperator$PLUS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PLUS',
    interfaces: [BinaryOperator]
  };
  var BinaryOperator$PLUS_instance = null;
  function BinaryOperator$PLUS_getInstance() {
    BinaryOperator_initFields();
    return BinaryOperator$PLUS_instance;
  }
  function BinaryOperator$MINUS() {
    BinaryOperator$MINUS_instance = this;
    BinaryOperator.call(this, 'MINUS', 2);
  }
  BinaryOperator$MINUS.prototype.evaluate_dleff0$ = function (first, second) {
    return first - second;
  };
  BinaryOperator$MINUS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MINUS',
    interfaces: [BinaryOperator]
  };
  var BinaryOperator$MINUS_instance = null;
  function BinaryOperator$MINUS_getInstance() {
    BinaryOperator_initFields();
    return BinaryOperator$MINUS_instance;
  }
  function BinaryOperator$NONE() {
    BinaryOperator$NONE_instance = this;
    BinaryOperator.call(this, 'NONE', 3);
  }
  BinaryOperator$NONE.prototype.evaluate_dleff0$ = function (first, second) {
    throw IllegalArgumentException_init('No operation');
  };
  BinaryOperator$NONE.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NONE',
    interfaces: [BinaryOperator]
  };
  var BinaryOperator$NONE_instance = null;
  function BinaryOperator$NONE_getInstance() {
    BinaryOperator_initFields();
    return BinaryOperator$NONE_instance;
  }
  function BinaryOperator$Companion() {
    BinaryOperator$Companion_instance = this;
  }
  BinaryOperator$Companion.prototype.parse_61zpoe$ = function (string) {
    switch (string) {
      case '+':
        return BinaryOperator$PLUS_getInstance();
      case '-':
        return BinaryOperator$MINUS_getInstance();
      case '*':
        return BinaryOperator$TIMES_getInstance();
      default:throw IllegalArgumentException_init(string);
    }
  };
  BinaryOperator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BinaryOperator$Companion_instance = null;
  function BinaryOperator$Companion_getInstance() {
    BinaryOperator_initFields();
    if (BinaryOperator$Companion_instance === null) {
      new BinaryOperator$Companion();
    }
    return BinaryOperator$Companion_instance;
  }
  BinaryOperator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BinaryOperator',
    interfaces: [Enum]
  };
  function BinaryOperator$values() {
    return [BinaryOperator$TIMES_getInstance(), BinaryOperator$PLUS_getInstance(), BinaryOperator$MINUS_getInstance(), BinaryOperator$NONE_getInstance()];
  }
  BinaryOperator.values = BinaryOperator$values;
  function BinaryOperator$valueOf(name) {
    switch (name) {
      case 'TIMES':
        return BinaryOperator$TIMES_getInstance();
      case 'PLUS':
        return BinaryOperator$PLUS_getInstance();
      case 'MINUS':
        return BinaryOperator$MINUS_getInstance();
      case 'NONE':
        return BinaryOperator$NONE_getInstance();
      default:throwISE('No enum constant eu.karelhovorka.textgame.core.variables.BinaryOperator.' + name);
    }
  }
  BinaryOperator.valueOf_61zpoe$ = BinaryOperator$valueOf;
  function MathExpression(expression, tokens) {
    MathExpression$Companion_getInstance();
    this.expression = expression;
    this.tokens = tokens;
  }
  function MathExpression$TokenType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MathExpression$TokenType_initFields() {
    MathExpression$TokenType_initFields = function () {
    };
    MathExpression$TokenType$OPERATOR_instance = new MathExpression$TokenType('OPERATOR', 0);
    MathExpression$TokenType$VALUE_instance = new MathExpression$TokenType('VALUE', 1);
    MathExpression$TokenType$BRACKET_instance = new MathExpression$TokenType('BRACKET', 2);
  }
  var MathExpression$TokenType$OPERATOR_instance;
  function MathExpression$TokenType$OPERATOR_getInstance() {
    MathExpression$TokenType_initFields();
    return MathExpression$TokenType$OPERATOR_instance;
  }
  var MathExpression$TokenType$VALUE_instance;
  function MathExpression$TokenType$VALUE_getInstance() {
    MathExpression$TokenType_initFields();
    return MathExpression$TokenType$VALUE_instance;
  }
  var MathExpression$TokenType$BRACKET_instance;
  function MathExpression$TokenType$BRACKET_getInstance() {
    MathExpression$TokenType_initFields();
    return MathExpression$TokenType$BRACKET_instance;
  }
  MathExpression$TokenType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TokenType',
    interfaces: [Enum]
  };
  function MathExpression$TokenType$values() {
    return [MathExpression$TokenType$OPERATOR_getInstance(), MathExpression$TokenType$VALUE_getInstance(), MathExpression$TokenType$BRACKET_getInstance()];
  }
  MathExpression$TokenType.values = MathExpression$TokenType$values;
  function MathExpression$TokenType$valueOf(name) {
    switch (name) {
      case 'OPERATOR':
        return MathExpression$TokenType$OPERATOR_getInstance();
      case 'VALUE':
        return MathExpression$TokenType$VALUE_getInstance();
      case 'BRACKET':
        return MathExpression$TokenType$BRACKET_getInstance();
      default:throwISE('No enum constant eu.karelhovorka.textgame.core.variables.MathExpression.TokenType.' + name);
    }
  }
  MathExpression$TokenType.valueOf_61zpoe$ = MathExpression$TokenType$valueOf;
  function MathExpression$Token(value, type) {
    MathExpression$Token$Companion_getInstance();
    this.value = value;
    this.type = type;
  }
  function MathExpression$Token$Companion() {
    MathExpression$Token$Companion_instance = this;
  }
  MathExpression$Token$Companion.prototype.parse_61zpoe$ = function (expression) {
    if (MathExpression$Companion_getInstance().value.matches_6bul2c$(expression)) {
      return new MathExpression$Token(expression, MathExpression$TokenType$VALUE_getInstance());
    }
     else {
      if (MathExpression$Companion_getInstance().operator.matches_6bul2c$(expression)) {
        return new MathExpression$Token(expression, MathExpression$TokenType$OPERATOR_getInstance());
      }
       else {
        throw IllegalArgumentException_init(expression);
      }
    }
  };
  MathExpression$Token$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MathExpression$Token$Companion_instance = null;
  function MathExpression$Token$Companion_getInstance() {
    if (MathExpression$Token$Companion_instance === null) {
      new MathExpression$Token$Companion();
    }
    return MathExpression$Token$Companion_instance;
  }
  MathExpression$Token.prototype.operator = function () {
    return BinaryOperator$Companion_getInstance().parse_61zpoe$(this.value);
  };
  MathExpression$Token.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Token',
    interfaces: []
  };
  MathExpression$Token.prototype.component1 = function () {
    return this.value;
  };
  MathExpression$Token.prototype.component2 = function () {
    return this.type;
  };
  MathExpression$Token.prototype.copy_d8c93f$ = function (value, type) {
    return new MathExpression$Token(value === void 0 ? this.value : value, type === void 0 ? this.type : type);
  };
  MathExpression$Token.prototype.toString = function () {
    return 'Token(value=' + Kotlin.toString(this.value) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  MathExpression$Token.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  MathExpression$Token.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.type, other.type)))));
  };
  function MathExpression$Companion() {
    MathExpression$Companion_instance = this;
    this.math = Regex_init('[0-9+\\-*. ]+');
    this.simpleMath = Regex_init('([0-9]+(?:\\.[0-9])?|[+\\-*])');
    this.value = Regex_init('([0-9]+(?:\\.[0-9])?)');
    this.operator = Regex_init('([+\\-*])');
  }
  function MathExpression$Companion$parse$lambda(it) {
    return MathExpression$Token$Companion_getInstance().parse_61zpoe$(ensureNotNull(it.groups.get_za3lpa$(1)).value);
  }
  MathExpression$Companion.prototype.parse_61zpoe$ = function (expression) {
    return copyToArray(toList_1(map(this.simpleMath.findAll_905azu$(expression), MathExpression$Companion$parse$lambda)));
  };
  MathExpression$Companion.prototype.isExpression_61zpoe$ = function (expression) {
    return this.math.matches_6bul2c$(expression);
  };
  MathExpression$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MathExpression$Companion_instance = null;
  function MathExpression$Companion_getInstance() {
    if (MathExpression$Companion_instance === null) {
      new MathExpression$Companion();
    }
    return MathExpression$Companion_instance;
  }
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  MathExpression.prototype.evaluate = function () {
    var $receiver = this.expression;
    if (MathExpression$Companion_getInstance().math.matches_6bul2c$($receiver)) {
      var floatResult = {v: kotlin_js_internal_FloatCompanionObject.NaN};
      var lastOperator = {v: BinaryOperator$NONE_getInstance()};
      var $receiver_0 = this.tokens;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        if (element.type === MathExpression$TokenType$VALUE_getInstance()) {
          if (isNaN_0(floatResult.v)) {
            floatResult.v = toDouble(element.value);
          }
           else {
            floatResult.v = lastOperator.v.evaluate_dleff0$(floatResult.v, toDouble(element.value));
            lastOperator.v === BinaryOperator$NONE_getInstance();
          }
        }
         else if (element.type === MathExpression$TokenType$OPERATOR_getInstance()) {
          lastOperator.v = element.operator();
        }
      }
      return floatResult.v;
    }
    throw IllegalArgumentException_init('Not math expression ' + this.expression);
  };
  MathExpression.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MathExpression',
    interfaces: []
  };
  function MathExpression_init(expression, $this) {
    $this = $this || Object.create(MathExpression.prototype);
    MathExpression.call($this, expression, MathExpression$Companion_getInstance().parse_61zpoe$(expression));
    return $this;
  }
  MathExpression.prototype.component1 = function () {
    return this.expression;
  };
  MathExpression.prototype.component2 = function () {
    return this.tokens;
  };
  MathExpression.prototype.copy_oxy0vj$ = function (expression, tokens) {
    return new MathExpression(expression === void 0 ? this.expression : expression, tokens === void 0 ? this.tokens : tokens);
  };
  MathExpression.prototype.toString = function () {
    return 'MathExpression(expression=' + Kotlin.toString(this.expression) + (', tokens=' + Kotlin.toString(this.tokens)) + ')';
  };
  MathExpression.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expression) | 0;
    result = result * 31 + Kotlin.hashCode(this.tokens) | 0;
    return result;
  };
  MathExpression.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expression, other.expression) && Kotlin.equals(this.tokens, other.tokens)))));
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
  function VariableContainer(strings) {
    if (strings === void 0) {
      strings = LinkedHashMap_init();
    }
    this.strings = strings;
  }
  VariableContainer.prototype.addStringValue_puj7f4$ = function (name, value) {
    this.strings.put_xwzc9p$(name, new Variable(name, value));
  };
  VariableContainer.prototype.addVariable_ok00n2$ = function (variable) {
    this.strings.put_xwzc9p$(variable.name, variable);
  };
  VariableContainer.prototype.evaluate_61zpoe$ = function (expression) {
    var result = this.replaceVariables_0(expression);
    if (MathExpression$Companion_getInstance().isExpression_61zpoe$(result)) {
      return numberToInt(MathExpression_init(result).evaluate()).toString();
    }
    return result;
  };
  VariableContainer.prototype.replaceVariables_0 = function (expression) {
    var result = {v: expression};
    var tmp$;
    tmp$ = this.strings.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = this.strings.values.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        result.v = replace(result.v, element_0.name, element_0.value);
      }
    }
    return result.v;
  };
  VariableContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VariableContainer',
    interfaces: []
  };
  function VariableContainer_init(variables, $this) {
    $this = $this || Object.create(VariableContainer.prototype);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(variables, 10)), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    tmp$ = variables.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var pair = to(element.name, element);
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    VariableContainer.call($this, toMutableMap(destination));
    return $this;
  }
  function VariableContainer_init_0(variable, $this) {
    $this = $this || Object.create(VariableContainer.prototype);
    VariableContainer_init(listOf(variable), $this);
    return $this;
  }
  function VariableTemplate(container) {
    if (container === void 0)
      container = new VariableContainer();
    this.container = container;
    this.variableRegex = Regex_init('\\{\\{(.*)\\}\\}');
  }
  VariableTemplate.prototype.runNullcheck_gw00v9$ = function (text) {
    if (text == null) {
      return null;
    }
    return this.run_61zpoe$(text.toString());
  };
  VariableTemplate.prototype.run_61zpoe$ = function (text) {
    var result = {v: text};
    var tmp$;
    tmp$ = this.variableRegex.findAll_905azu$(result.v).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var expression = ensureNotNull(element.groups.get_za3lpa$(1)).value;
      var expressionResult = this.container.evaluate_61zpoe$(expression);
      result.v = replace(result.v, '{{' + expression + '}}', expressionResult);
    }
    return result.v;
  };
  VariableTemplate.prototype.evaluate_ktq7vf$ = function (state) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = state.variables;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var variable = tmp$[tmp$_0];
      this.container.addVariable_ok00n2$(variable);
    }
    tmp$_1 = this.runNullcheck_gw00v9$(state.theme);
    return state.copy_ncd3oo$(void 0, this.runNullcheck_gw00v9$(state.text), void 0, void 0, void 0, void 0, void 0, void 0, tmp$_1);
  };
  VariableTemplate.prototype.evaluate_8hvgvt$ = function (move) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = move.variables;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var variable = tmp$[tmp$_0];
      this.container.addVariable_ok00n2$(variable);
    }
    tmp$_1 = this.runNullcheck_gw00v9$(move.caption);
    tmp$_2 = this.runNullcheck_gw00v9$(move.theme);
    return move.copy_hrwrza$(void 0, tmp$_1, void 0, void 0, this.runNullcheck_gw00v9$(move.text), void 0, void 0, void 0, void 0, void 0, void 0, tmp$_2);
  };
  VariableTemplate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VariableTemplate',
    interfaces: []
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
    Minigame.call(this, id, [], void 0, listener);
    this.listener = listener;
    this.beat = new GameLoopBeat(this);
  }
  GameLoopMinigame.prototype.onAfterStarted = function () {
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
    this.newFlags = mutableListOf(['killed']);
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
  function Minigame(id, originalFlags, finishListener, listener) {
    if (originalFlags === void 0)
      originalFlags = [];
    if (finishListener === void 0)
      finishListener = Minigame_init$lambda;
    if (listener === void 0)
      listener = new ConsoleMinigameListener();
    this.id = id;
    this.originalFlags = originalFlags;
    this.finishListener = finishListener;
    this.listener_fgipk2$_0 = listener;
    this.state = MinigameState$CREATED_getInstance();
    this.newFlags = ArrayList_init();
  }
  Minigame.prototype.start = function () {
    if (this.state === MinigameState$RUNNING_getInstance()) {
      throw IllegalStateException_init('Game already running ' + this.id);
    }
    this.onBeforeStarted();
    this.fireStart_s7lymq$_0();
    this.onAfterStarted();
  };
  Minigame.prototype.onBeforeStarted = function () {
  };
  Minigame.prototype.onAfterStarted = function () {
  };
  Minigame.prototype.fireStart_s7lymq$_0 = function () {
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
    this.listener_fgipk2$_0.onFinish(this.id, copyToArray(this.newFlags));
    this.finishListener.call(this, this.id, copyToArray(this.newFlags));
  };
  Minigame.prototype.fireEvent_4w9ihe$ = function (type, data) {
    this.listener_fgipk2$_0.onEvent(new MinigameEvent(this.id, type, data));
  };
  function Minigame_init$lambda(f, f_0) {
    return Unit;
  }
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
  function SimpleAddFlagMinigame(listener, finishListener) {
    if (listener === void 0)
      listener = new ConsoleMinigameListener();
    Minigame.call(this, 'simpleAdd', void 0, finishListener, listener);
  }
  SimpleAddFlagMinigame.prototype.onAfterStarted = function () {
    this.newFlags.add_11rb$('minigameflag');
    this.fireFinish();
  };
  SimpleAddFlagMinigame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleAddFlagMinigame',
    interfaces: [Minigame]
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
  function ConsoleMinigameListener() {
  }
  ConsoleMinigameListener.prototype.onLoop = function (delta) {
    println('onLoop(delta: ' + delta + ')');
  };
  ConsoleMinigameListener.prototype.onStart = function (id) {
    println('onStart(id: ' + id + ')');
  };
  ConsoleMinigameListener.prototype.onFinish = function (id, flags) {
    println('onFinish(id: ' + id + ', flags: ' + toList(flags) + ')');
  };
  ConsoleMinigameListener.prototype.onEvent = function (event) {
    println('onEvent(event: ' + event + ')');
  };
  ConsoleMinigameListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConsoleMinigameListener',
    interfaces: [GameLoopMinigameListener]
  };
  function EmptyMinigameListener() {
  }
  EmptyMinigameListener.prototype.onStart = function (id) {
  };
  EmptyMinigameListener.prototype.onEvent = function (event) {
  };
  EmptyMinigameListener.prototype.onFinish = function (id, flags) {
  };
  EmptyMinigameListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmptyMinigameListener',
    interfaces: [MinigameListener]
  };
  function MinigameFinishListener() {
  }
  MinigameFinishListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MinigameFinishListener',
    interfaces: []
  };
  function MinigameListener() {
  }
  MinigameListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MinigameListener',
    interfaces: [MinigameFinishListener]
  };
  function ListMinigameRepository(games) {
    MinigameRepository.call(this);
    this.games = games;
  }
  ListMinigameRepository.prototype.getGame_zesxb9$ = function (id, flags, finishListener) {
    return getOrThrow(this.games, id);
  };
  ListMinigameRepository.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListMinigameRepository',
    interfaces: [MinigameRepository]
  };
  function MinigameRepository() {
  }
  MinigameRepository.prototype.getGame_zesxb9$ = function (id, flags, finishListener) {
    throw new NotImplementedError();
  };
  MinigameRepository.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MinigameRepository',
    interfaces: []
  };
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
  function GameLoader$newgame$ObjectLiteral() {
    MinigameRepository.call(this);
  }
  GameLoader$newgame$ObjectLiteral.prototype.getGame_zesxb9$ = function (id, flags, finishListener) {
    return new MusicMinigame(flags, finishListener);
  };
  GameLoader$newgame$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MinigameRepository]
  };
  GameLoader.prototype.newgame = function (gameText) {
    var gameConfig = (new GameConverter()).convert(gameText);
    var game = new Game(void 0, gameConfig, this.listener_0(), void 0, void 0, this.saver(), new GameLoader$newgame$ObjectLiteral());
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
  function lastState($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.gameDiv.querySelector('.state:last-of-type'), HTMLDivElement) ? tmp$ : throwCCE();
  }
  function HtmlGameListener() {
    EmptyListener.call(this);
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
  HtmlGameListener.prototype.onState_8v5zxy$ = function (state, moves) {
    this.hideAllMoves();
    this.hideAllContinues();
    if (state.theme != null) {
      this.removeAllElements();
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
  HtmlGameListener.prototype.removeAllElements = function () {
    var range = document.createRange();
    range.selectNodeContents(this.gameDiv);
    range.deleteContents();
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
        var innerHTML = "<span class='helper-1'><\/span><a href='javascript:window.game.move(" + '"' + move.id + '"' + ")'><span class='helper-2'><\/span>";
        if (move.caption == null) {
          innerHTML += "<img src='/img/moves/" + toString(move.image) + "' />";
        }
         else {
          innerHTML += "<img title='" + toString(move.caption) + "' src='/img/moves/" + toString(move.image) + "' />";
          innerHTML += "<div class='caption'>" + toString(move.caption) + '<\/div>';
        }
        innerHTML += '<\/a>';
        moveElement.innerHTML = innerHTML;
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
  HtmlGameListener.prototype.hideAllContinues = function () {
    var tmp$;
    var previousContinues = document.querySelectorAll('.continue');
    if (previousContinues.length > 0) {
      var previousState = Kotlin.isType(tmp$ = previousContinues.item(previousContinues.length - 1 | 0), HTMLDivElement) ? tmp$ : throwCCE();
      previousState.classList.add('finished');
    }
  };
  HtmlGameListener.prototype.hideAllMoves = function () {
    var tmp$;
    var moves = document.querySelectorAll('.move');
    if (moves.length > 0) {
      var previousState = Kotlin.isType(tmp$ = moves.item(moves.length - 1 | 0), HTMLDivElement) ? tmp$ : throwCCE();
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
      if (equals(state.theme, 'iq-test')) {
        element.innerHTML = "<span class='helper-1'><\/span><div class='text'>" + text + "<img class='illustration' src='/img/illustrations/" + toString(state.illustration) + "' /><\/div>";
      }
       else {
        element.innerHTML = "<span class='helper-1'><\/span><div class='text'><img class='illustration' src='/img/illustrations/" + toString(state.illustration) + "' />" + text + '<\/div>';
      }
    }
    if (equals(state.theme, 'music')) {
      element.innerHTML = element.innerHTML + '\n    <div class="celi muzikant"><\/div>\n    <div class="bejk muzikant"><\/div>\n    <div class="kodzin muzikant" ><\/div>\n    <button class="music-stop" disabled>Stop<\/button>\n    <div class="music-distortion">P\u0159epnout efekt solo<\/div>\n    <div class="music-delay">P\u0159epnout delay solo<\/div>\n                ';
    }
    if (state.background != null) {
      element.setAttribute('style', "background-image: url('/img/backgrounds/" + toString(state.background) + "');");
    }
    return element;
  };
  HtmlGameListener.prototype.scrollToBottom = function () {
    window.scrollTo(0, document.body.scrollHeight);
  };
  HtmlGameListener.prototype.onMinigame_5w5fsm$ = function (minigame) {
    this.hideAllContinues();
  };
  HtmlGameListener.prototype.onMove_8hvgvt$ = function (move) {
    var tmp$, tmp$_0;
    this.hideAllContinues();
    if (move.theme != null) {
      this.removeAllElements();
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
    finish.classList.add(endType.toString());
    finish.innerHTML = '<div>KONEC<\/div>';
    this.gameDiv.appendChild(finish);
  };
  HtmlGameListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlGameListener',
    interfaces: [EmptyListener]
  };
  function JsDelegateGameListener() {
    EmptyListener.call(this);
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
    interfaces: [EmptyListener]
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
      volume = 0.0;
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
  Options.prototype.copy_l6oe1j$ = function (path, loop, volume) {
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
  function AudioTrack(fileName, loop, maxVolume, muted, effects, callback) {
    if (loop === void 0)
      loop = false;
    if (maxVolume === void 0)
      maxVolume = 1.0;
    if (muted === void 0)
      muted = false;
    if (effects === void 0)
      effects = true;
    if (callback === void 0)
      callback = null;
    this.fileName = fileName;
    this.loop = loop;
    this.maxVolume = maxVolume;
    this.muted = muted;
    this.effects = effects;
    this.callback = callback;
    this.sound = null;
    this.distortion = null;
    this.delay = null;
    this.distortion = new Pizzicato.Effects.Distortion({gain: 0.0});
    this.delay = new Pizzicato.Effects.Delay({feedback: 0.0, time: 0.0, mix: 0.0});
  }
  AudioTrack.prototype.load = function () {
    var so = this.soundOptions_0();
    var cb = this.callback;
    this.sound = new Pizzicato.Sound(so, cb);
    if (this.effects) {
      this.sound.addEffect(this.distortion);
      this.sound.addEffect(this.delay);
    }
  };
  AudioTrack.prototype.mute = function () {
    this.muted = true;
    if (this.sound != null) {
      this.sound.volume = this.volume();
    }
  };
  AudioTrack.prototype.unmute = function () {
    this.muted = false;
    if (this.sound != null) {
      this.sound.volume = this.volume();
    }
  };
  AudioTrack.prototype.volume = function () {
    if (this.muted) {
      return 0.0;
    }
    return this.maxVolume;
  };
  AudioTrack.prototype.soundOptions_0 = function () {
    var tmp$ = void 0;
    var $receiver = ['.ogg', '.mp3'];
    var destination = ArrayList_init($receiver.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var item = $receiver[tmp$_0];
      destination.add_11rb$('/audio/' + this.fileName + item);
    }
    return new SoundOptions(tmp$, new Options(copyToArray(destination), this.loop, this.volume()));
  };
  AudioTrack.prototype.toggleDistortion = function () {
    if (this.distortion.gain == 0) {
      println('gain ON');
      this.distortion.gain = 0.2;
    }
     else {
      println('gain OFF');
      this.distortion.gain = 0;
    }
  };
  AudioTrack.prototype.toggleDelay = function () {
    if (this.delay.feedback > 0) {
      println('delay OFF');
      this.delay.feedback = 0;
      this.delay.time = 0;
      this.delay.min = 0;
    }
     else {
      println('delay ON');
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
    return this.maxVolume;
  };
  AudioTrack.prototype.component4 = function () {
    return this.muted;
  };
  AudioTrack.prototype.component5 = function () {
    return this.effects;
  };
  AudioTrack.prototype.component6 = function () {
    return this.callback;
  };
  AudioTrack.prototype.copy_v10sts$ = function (fileName, loop, maxVolume, muted, effects, callback) {
    return new AudioTrack(fileName === void 0 ? this.fileName : fileName, loop === void 0 ? this.loop : loop, maxVolume === void 0 ? this.maxVolume : maxVolume, muted === void 0 ? this.muted : muted, effects === void 0 ? this.effects : effects, callback === void 0 ? this.callback : callback);
  };
  AudioTrack.prototype.toString = function () {
    return 'AudioTrack(fileName=' + Kotlin.toString(this.fileName) + (', loop=' + Kotlin.toString(this.loop)) + (', maxVolume=' + Kotlin.toString(this.maxVolume)) + (', muted=' + Kotlin.toString(this.muted)) + (', effects=' + Kotlin.toString(this.effects)) + (', callback=' + Kotlin.toString(this.callback)) + ')';
  };
  AudioTrack.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fileName) | 0;
    result = result * 31 + Kotlin.hashCode(this.loop) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxVolume) | 0;
    result = result * 31 + Kotlin.hashCode(this.muted) | 0;
    result = result * 31 + Kotlin.hashCode(this.effects) | 0;
    result = result * 31 + Kotlin.hashCode(this.callback) | 0;
    return result;
  };
  AudioTrack.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fileName, other.fileName) && Kotlin.equals(this.loop, other.loop) && Kotlin.equals(this.maxVolume, other.maxVolume) && Kotlin.equals(this.muted, other.muted) && Kotlin.equals(this.effects, other.effects) && Kotlin.equals(this.callback, other.callback)))));
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
      element.mute();
    }
    this.currentTrack_0().unmute();
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
    this.currentTrack_0().mute();
    this.currentIndex = (this.currentIndex + 1 + this.tracks.length | 0) % this.tracks.length;
    this.currentTrack_0().unmute();
    println(this.currentTrack_0().fileName);
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
    this.finished = 0;
    this.count = 0;
    this.mainCallback = null;
    this.progressCallback = null;
    this.callback = SoundController$callback$lambda(this);
    this.melodieVolumes = 1.0;
    this.doprovodVolumes = 0.7;
    this.biciVolumes = 0.6;
    this.solo = new TrackGroup([new AudioTrack('melodie1_cista', void 0, this.melodieVolumes, void 0, void 0, this.callback), new AudioTrack('melodie2_original', void 0, this.melodieVolumes, void 0, void 0, this.callback), new AudioTrack('melodie3', void 0, this.melodieVolumes, void 0, void 0, this.callback), new AudioTrack('melodie_tap', void 0, this.melodieVolumes, void 0, void 0, this.callback)]);
    this.rhythm = new TrackGroup([new AudioTrack('doprovod_rozlozene', true, this.doprovodVolumes, void 0, false, this.callback), new AudioTrack('doprovod_delay', true, this.doprovodVolumes, void 0, false, this.callback), new AudioTrack('doprovod_sekany_akordy', true, this.doprovodVolumes, void 0, false, this.callback)]);
    this.drums = new TrackGroup([new AudioTrack('bici1', true, this.biciVolumes, void 0, false, this.callback), new AudioTrack('bici2', true, this.biciVolumes, void 0, false, this.callback)]);
    this.trackGroups = mutableMapOf([to('rhythm', this.rhythm), to('solo', this.solo), to('drums', this.drums)]);
    var tmp$;
    tmp$ = this.trackGroups.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.count = this.count + element.tracks.length | 0;
    }
  }
  SoundController.prototype.switchSolo = function () {
    this.solo.switchTrack();
  };
  SoundController.prototype.switchDrums = function () {
    this.drums.switchTrack();
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
  SoundController.prototype.load = function (mainCallback, progressCallback) {
    this.mainCallback = mainCallback;
    this.progressCallback = progressCallback;
    var tmp$;
    tmp$ = this.trackGroups.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.load();
    }
    var list = this.sounds();
    this.group = new Pizzicato.Group(list);
  };
  function SoundController$callback$lambda(this$SoundController) {
    return function () {
      this$SoundController.finished = this$SoundController.finished + 1 | 0;
      if (this$SoundController.progressCallback != null) {
        this$SoundController.progressCallback(this$SoundController.finished, this$SoundController.count);
      }
      println('done: ' + this$SoundController.finished + '/' + this$SoundController.count);
      if (this$SoundController.finished === this$SoundController.count) {
        if (this$SoundController.mainCallback != null) {
          this$SoundController.mainCallback();
        }
      }
      return Unit;
    };
  }
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
  function lastStateElement() {
    var tmp$;
    var elements = document.querySelectorAll('#game .state');
    return Kotlin.isType(tmp$ = elements.item(elements.length - 1 | 0), HTMLDivElement) ? tmp$ : throwCCE();
  }
  function MusicMinigame(originalFlags, finishListener) {
    Minigame.call(this, 'music', originalFlags, finishListener, new ConsoleMinigameListener());
    this.score = 0;
    this.maxDurationSeconds = 120;
    this.allNewFlags = ['hudba_libilo', 'hudba_normal', 'hudba_nuda'];
    this.primarec_v9ov50$_0 = this.primarec_v9ov50$_0;
    this.randomHlasky = mutableMapOf([to('celi', mutableListOf(['Bejku nezrychluj!', 'N\u011Bjak\xFD po\u0159\xE1dn\xFD solo tam ho\u010F!', 'Sakra, utrhl jsem dal\u0161\xED strunu', 'Hobluuuuuj'])), to('kodzin', mutableListOf(['Dola\u010F to!', 'Bejku nezpomaluj!', 'Upadlo mi trs\xE1tko'])), to('bejk', mutableListOf(['Kluci m\u011B u\u017E se chce na z\xE1chod', 'Zapomn\u011Bli jsme ud\u011Blat zm\u011Bnu', 'Hej, u\u017E m\u011B bol\xED ruce']))]);
    this.loadingHlasky = mutableListOf([to('celi', 'Po\u010Dkejte, je\u0161t\u011B ladim'), to('kodzin', 'D\u011Blej ty brzdo'), to('bejk', 'Jo d\u011Blej!'), to('celi', 'Neho\u0148te um\u011Blce!')]);
  }
  Object.defineProperty(MusicMinigame.prototype, 'primarec', {
    get: function () {
      if (this.primarec_v9ov50$_0 == null)
        return throwUPAE('primarec');
      return this.primarec_v9ov50$_0;
    },
    set: function (primarec) {
      this.primarec_v9ov50$_0 = primarec;
    }
  });
  function MusicMinigame$onAfterStarted$lambda$lambda$lambda(closure$soundController, this$MusicMinigame) {
    return function (it) {
      this$MusicMinigame.finishPlaying_yx3dp2$(closure$soundController);
      return Unit;
    };
  }
  function MusicMinigame$onAfterStarted$lambda$lambda$lambda_0(this$MusicMinigame, closure$soundController) {
    return function () {
      if (this$MusicMinigame.state !== MinigameState$FINISHED_getInstance()) {
        this$MusicMinigame.addScore_za3lpa$(10);
        println('FINISH after timeout');
        this$MusicMinigame.finishPlaying_yx3dp2$(closure$soundController);
      }
      return Unit;
    };
  }
  function MusicMinigame$onAfterStarted$lambda$lambda$lambda_1(closure$soundController, this$MusicMinigame) {
    return function (it) {
      closure$soundController.switchDrums();
      this$MusicMinigame.onSwitch();
      return Unit;
    };
  }
  function MusicMinigame$onAfterStarted$lambda$lambda$lambda_2(closure$soundController, this$MusicMinigame) {
    return function (it) {
      closure$soundController.switchSolo();
      this$MusicMinigame.onSwitch();
      return Unit;
    };
  }
  function MusicMinigame$onAfterStarted$lambda$lambda$lambda_3(closure$soundController, this$MusicMinigame) {
    return function (it) {
      closure$soundController.switchRhythm();
      this$MusicMinigame.onSwitch();
      return Unit;
    };
  }
  function MusicMinigame$onAfterStarted$lambda$lambda$lambda_4(closure$soundController, this$MusicMinigame) {
    return function (it) {
      closure$soundController.toggleSoloDistortion();
      this$MusicMinigame.onSwitch();
      return Unit;
    };
  }
  function MusicMinigame$onAfterStarted$lambda$lambda$lambda_5(closure$soundController, this$MusicMinigame) {
    return function (it) {
      closure$soundController.toggleSoloDelay();
      this$MusicMinigame.onSwitch();
      return Unit;
    };
  }
  function MusicMinigame$onAfterStarted$lambda$lambda(this$MusicMinigame, closure$soundController) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      println('loaded');
      this$MusicMinigame.primoRict_puj7f4$('celi', 'Tak m\u016F\u017Eeme!');
      this$MusicMinigame.hideProgress();
      lastStateElement().classList.add('ready');
      var stopButton = Kotlin.isType(tmp$ = ensureNotNull(lastStateElement().querySelector('.music-stop')), HTMLButtonElement) ? tmp$ : throwCCE();
      stopButton.addEventListener('click', MusicMinigame$onAfterStarted$lambda$lambda$lambda(closure$soundController, this$MusicMinigame));
      window.setTimeout(MusicMinigame$onAfterStarted$lambda$lambda$lambda_0(this$MusicMinigame, closure$soundController), this$MusicMinigame.maxDurationSeconds * 1000 | 0);
      var bejk = Kotlin.isType(tmp$_0 = ensureNotNull(lastStateElement().querySelector('.muzikant.bejk')), HTMLElement) ? tmp$_0 : throwCCE();
      bejk.addEventListener('click', MusicMinigame$onAfterStarted$lambda$lambda$lambda_1(closure$soundController, this$MusicMinigame));
      var celi = Kotlin.isType(tmp$_1 = ensureNotNull(lastStateElement().querySelector('.muzikant.celi')), HTMLElement) ? tmp$_1 : throwCCE();
      celi.addEventListener('click', MusicMinigame$onAfterStarted$lambda$lambda$lambda_2(closure$soundController, this$MusicMinigame));
      var kodzin = Kotlin.isType(tmp$_2 = ensureNotNull(lastStateElement().querySelector('.muzikant.kodzin')), HTMLElement) ? tmp$_2 : throwCCE();
      kodzin.addEventListener('click', MusicMinigame$onAfterStarted$lambda$lambda$lambda_3(closure$soundController, this$MusicMinigame));
      var distortion = Kotlin.isType(tmp$_3 = ensureNotNull(lastStateElement().querySelector('.music-distortion')), HTMLElement) ? tmp$_3 : throwCCE();
      distortion.addEventListener('click', MusicMinigame$onAfterStarted$lambda$lambda$lambda_4(closure$soundController, this$MusicMinigame));
      var delay = Kotlin.isType(tmp$_4 = ensureNotNull(lastStateElement().querySelector('.music-delay')), HTMLElement) ? tmp$_4 : throwCCE();
      delay.addEventListener('click', MusicMinigame$onAfterStarted$lambda$lambda$lambda_5(closure$soundController, this$MusicMinigame));
      lastStateElement().classList.add('playing');
      stopButton.disabled = false;
      return closure$soundController.group.play();
    };
  }
  function MusicMinigame$onAfterStarted$lambda$lambda_0(this$MusicMinigame) {
    return function (finished, count) {
      if (finished % 2 === 1) {
        this$MusicMinigame.loadingHlaska();
        this$MusicMinigame.updateProgress_14dthe$(finished / count);
      }
      return Unit;
    };
  }
  function MusicMinigame$onAfterStarted$lambda(this$MusicMinigame) {
    return function (Pizzicato) {
      var tmp$;
      window.Pizzicato = Pizzicato;
      var soundController = new SoundController();
      window.soundController = soundController;
      var bar = Kotlin.isType(tmp$ = document.getElementById('bar'), HTMLElement) ? tmp$ : throwCCE();
      soundController.load(MusicMinigame$onAfterStarted$lambda$lambda(this$MusicMinigame, soundController), MusicMinigame$onAfterStarted$lambda$lambda_0(this$MusicMinigame));
      return Unit;
    };
  }
  MusicMinigame.prototype.onAfterStarted = function () {
    var tmp$;
    this.primarec = Kotlin.isType(tmp$ = ensureNotNull(lastStateElement().querySelector('primarec')), HTMLElement) ? tmp$ : throwCCE();
    println('after music started');
    requirejs(['pizzicato'], MusicMinigame$onAfterStarted$lambda(this));
  };
  MusicMinigame.prototype.addScore_za3lpa$ = function (value) {
    println('+' + value + ' skore');
    this.score = this.score + value | 0;
  };
  MusicMinigame.prototype.finishPlaying_yx3dp2$ = function (soundController) {
    lastStateElement().classList.remove('playing');
    soundController.group.stop();
    delete window.group;
    delete window.soundController;
    delete window.Pizzicato;
    if (this.score < 5) {
      this.newFlags.add_11rb$('hudba_nuda');
    }
     else if (this.score < 25) {
      this.newFlags.add_11rb$('hudba_normal');
    }
     else {
      this.newFlags.add_11rb$('hudba_libilo');
    }
    this.fireFinish();
  };
  MusicMinigame.prototype.updateProgress_14dthe$ = function (progress) {
    var tmp$, tmp$_0;
    var progressEl = Kotlin.isType(tmp$ = document.getElementById('progress'), HTMLElement) ? tmp$ : throwCCE();
    progressEl.style.display = 'block';
    var bar = Kotlin.isType(tmp$_0 = document.getElementById('bar'), HTMLElement) ? tmp$_0 : throwCCE();
    bar.style.width = roundToInt(progress * 100.0).toString() + '%';
  };
  MusicMinigame.prototype.hideProgress = function () {
    var tmp$;
    var progress = Kotlin.isType(tmp$ = document.getElementById('progress'), HTMLElement) ? tmp$ : throwCCE();
    progress.style.display = 'none';
  };
  MusicMinigame.prototype.loadingHlaska = function () {
    if (this.loadingHlasky.isEmpty()) {
      return;
    }
    var pair = this.loadingHlasky.removeAt_za3lpa$(0);
    this.primoRict_puj7f4$(pair.first, pair.second);
  };
  MusicMinigame.prototype.onSwitch = function () {
    if (RandomUtil_getInstance().nextInt_za3lpa$(5) === 0) {
      this.randomHlaska();
    }
     else {
      this.clearHlasky();
    }
    this.addScore_za3lpa$(1);
  };
  MusicMinigame.prototype.clearHlasky = function () {
    this.primoRict_puj7f4$('', '');
  };
  MusicMinigame.prototype.randomHlaska = function () {
    if (this.randomHlasky.isEmpty()) {
      println('hlasky dosly');
      this.addScore_za3lpa$(5);
      this.clearHlasky();
      return;
    }
    var typek = random_1(this.randomHlasky.keys);
    var hlaska = random(ensureNotNull(this.randomHlasky.get_11rb$(typek)));
    ensureNotNull(this.randomHlasky.get_11rb$(typek)).remove_11rb$(hlaska);
    if (ensureNotNull(this.randomHlasky.get_11rb$(typek)).isEmpty()) {
      this.randomHlasky.remove_11rb$(typek);
    }
    this.primoRict_puj7f4$(typek, hlaska);
  };
  MusicMinigame.prototype.primoRict_puj7f4$ = function (osoba, text) {
    this.primarec.setAttribute('osoba', osoba);
    this.primarec.innerHTML = text;
  };
  MusicMinigame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MusicMinigame',
    interfaces: [Minigame]
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
  Object.defineProperty(FlagType, 'AT_LEAST_ONE', {
    get: FlagType$AT_LEAST_ONE_getInstance
  });
  Object.defineProperty(FlagType, 'EXACTLY_ONE', {
    get: FlagType$EXACTLY_ONE_getInstance
  });
  package$bo.FlagType = FlagType;
  package$bo.FlagGroup = FlagGroup;
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
  Object.defineProperty(EndType, 'MISSING_CHAPTER', {
    get: EndType$MISSING_CHAPTER_getInstance
  });
  package$bo.EndType = EndType;
  package$bo.State = State;
  var package$bot = package$core.bot || (package$core.bot = {});
  package$bot.GameBot = GameBot;
  package$bot.GameCrawlContext = GameCrawlContext;
  var package$build = package$core.build || (package$core.build = {});
  Object.defineProperty(package$build, 'SmartRandom', {
    get: SmartRandom_getInstance
  });
  Object.defineProperty(package$build, 'NODE_SELF_CONSUMING', {
    get: function () {
      return NODE_SELF_CONSUMING;
    }
  });
  package$build.SuperStateBuilder = SuperStateBuilder;
  Object.defineProperty(package$build, 'UZEL', {
    get: function () {
      return UZEL;
    }
  });
  package$build.fixBOM_61zpoe$ = fixBOM;
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
  package$build.GameConverter = GameConverter;
  package$build.GameConverterContext = GameConverterContext;
  package$build.state_mk2rj2$ = state;
  package$build.move_d92qwi$ = move;
  package$build.game_nxso2d$ = game;
  package$build.StateBuilder = StateBuilder;
  package$build.CharSequenceBuilder = CharSequenceBuilder;
  package$build.GameConfigBuilder = GameConfigBuilder;
  package$build.MoveBuilder = MoveBuilder;
  package$build.ChapterBuilder = ChapterBuilder;
  var package$exception = package$core.exception || (package$core.exception = {});
  package$exception.IncorrectLineException = IncorrectLineException;
  package$exception.MoveException_init_knwv4p$ = MoveException_init;
  package$exception.MoveException = MoveException;
  package$exception.StateException_init_w27nwz$ = StateException_init;
  package$exception.StateException = StateException;
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
  package$util.random_2p1efm$ = random;
  package$util.random_4b5429$ = random_0;
  package$util.random_cgavii$ = random_1;
  package$util.getOrThrow_t9ocha$ = getOrThrow;
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
  Object.defineProperty(BinaryOperator, 'TIMES', {
    get: BinaryOperator$TIMES_getInstance
  });
  Object.defineProperty(BinaryOperator, 'PLUS', {
    get: BinaryOperator$PLUS_getInstance
  });
  Object.defineProperty(BinaryOperator, 'MINUS', {
    get: BinaryOperator$MINUS_getInstance
  });
  Object.defineProperty(BinaryOperator, 'NONE', {
    get: BinaryOperator$NONE_getInstance
  });
  Object.defineProperty(BinaryOperator, 'Companion', {
    get: BinaryOperator$Companion_getInstance
  });
  var package$variables = package$core.variables || (package$core.variables = {});
  package$variables.BinaryOperator = BinaryOperator;
  Object.defineProperty(MathExpression$TokenType, 'OPERATOR', {
    get: MathExpression$TokenType$OPERATOR_getInstance
  });
  Object.defineProperty(MathExpression$TokenType, 'VALUE', {
    get: MathExpression$TokenType$VALUE_getInstance
  });
  Object.defineProperty(MathExpression$TokenType, 'BRACKET', {
    get: MathExpression$TokenType$BRACKET_getInstance
  });
  MathExpression.TokenType = MathExpression$TokenType;
  Object.defineProperty(MathExpression$Token, 'Companion', {
    get: MathExpression$Token$Companion_getInstance
  });
  MathExpression.Token = MathExpression$Token;
  Object.defineProperty(MathExpression, 'Companion', {
    get: MathExpression$Companion_getInstance
  });
  package$variables.MathExpression_init_61zpoe$ = MathExpression_init;
  package$variables.MathExpression = MathExpression;
  Object.defineProperty(Variable, 'Companion', {
    get: Variable$Companion_getInstance
  });
  package$variables.Variable = Variable;
  package$variables.VariableContainer_init_7y7yel$ = VariableContainer_init;
  package$variables.VariableContainer_init_ok00n2$ = VariableContainer_init_0;
  package$variables.VariableContainer = VariableContainer;
  package$variables.VariableTemplate = VariableTemplate;
  var package$minigame = package$textgame.minigame || (package$textgame.minigame = {});
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
  package$minigame.SimpleAddFlagMinigame = SimpleAddFlagMinigame;
  Object.defineProperty(UnlockMiniGame, 'Companion', {
    get: UnlockMiniGame$Companion_getInstance
  });
  package$minigame.UnlockMiniGame_init_2ezyj0$ = UnlockMiniGame_init;
  package$minigame.UnlockMiniGame = UnlockMiniGame;
  var package$listener_0 = package$minigame.listener || (package$minigame.listener = {});
  package$listener_0.ConsoleMinigameListener = ConsoleMinigameListener;
  package$listener_0.EmptyMinigameListener = EmptyMinigameListener;
  package$listener_0.MinigameFinishListener = MinigameFinishListener;
  package$listener_0.MinigameListener = MinigameListener;
  var package$repository = package$minigame.repository || (package$minigame.repository = {});
  package$repository.ListMinigameRepository = ListMinigameRepository;
  package$repository.MinigameRepository = MinigameRepository;
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
  package$listener.lastState_n9jxxt$ = lastState;
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
  package$minigame.lastStateElement = lastStateElement;
  package$minigame.MusicMinigame = MusicMinigame;
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
