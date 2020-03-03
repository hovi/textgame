(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlintools'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlintools'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'tg-common'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'tg-common'.");
    }
    if (typeof kotlintools === 'undefined') {
      throw new Error("Error loading module 'tg-common'. Its dependency 'kotlintools' was not found. Please, check whether 'kotlintools' is loaded prior to 'tg-common'.");
    }
    root['tg-common'] = factory(typeof this['tg-common'] === 'undefined' ? {} : this['tg-common'], kotlin, kotlintools);
  }
}(this, function (_, Kotlin, $module$kotlintools) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toString = Kotlin.kotlin.text.toString_dqglrj$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var joinToString = Kotlin.kotlin.collections.joinToString_s78119$;
  var hashCode = Kotlin.hashCode;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ListIterator = Kotlin.kotlin.collections.ListIterator;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var replace_0 = Kotlin.kotlin.text.replace_r2fvfm$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var toChar = Kotlin.toChar;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var numberToInt = Kotlin.numberToInt;
  var Math_0 = Math;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var hide = $module$kotlintools.com.github.hovi.kotlintools.dom.hide_y4uc6z$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var dom = $module$kotlintools.com.github.hovi.kotlintools.dom;
  var getKClass = Kotlin.getKClass;
  var wrapFunction = Kotlin.wrapFunction;
  var throwCCE = Kotlin.throwCCE;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var preloadImage = $module$kotlintools.com.github.hovi.kotlintools.dom.preloadImage_61zpoe$;
  var scrollIntoView = $module$kotlintools.com.github.hovi.kotlintools.dom.scrollIntoView_no0g4u$;
  var debounceEvent = $module$kotlintools.com.github.hovi.kotlintools.dom.debounceEvent_2dst92$;
  var getCallableRef = Kotlin.getCallableRef;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var asElementList = $module$kotlintools.com.github.hovi.kotlintools.dom.asElementList_tphwpc$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  function addIfNegative($receiver, toAdd) {
    if (toAdd === void 0)
      toAdd = 256;
    if ($receiver <= 0) {
      return $receiver + toAdd | 0;
    }
    return $receiver;
  }
  function toHexString$lambda(it) {
    return padStart(toString(addIfNegative(it), 16), 2, 48).toUpperCase();
  }
  function toHexString($receiver) {
    return joinToString($receiver, '', void 0, void 0, void 0, void 0, toHexString$lambda);
  }
  function itemsHashCode($receiver) {
    if ($receiver == null)
      return 0;
    var tmp$;
    var sum = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var tmp$_0;
      sum = sum + (31 * ((tmp$_0 = element != null ? hashCode(element) : null) != null ? tmp$_0 : 0) | 0) | 0;
    }
    return 1 + sum | 0;
  }
  function CyclicListIterator(array, initialIndex) {
    if (initialIndex === void 0)
      initialIndex = 0;
    this.array_0 = array;
    this.currentIndex_0 = initialIndex;
  }
  CyclicListIterator.prototype.randomize = function () {
    this.currentIndex_0 = RandomUtil_getInstance().nextInt_za3lpa$(this.array_0.size);
    return this;
  };
  CyclicListIterator.prototype.current = function () {
    return this.array_0.get_za3lpa$(this.currentIndex_0);
  };
  CyclicListIterator.prototype.hasNext = function () {
    return true;
  };
  CyclicListIterator.prototype.hasPrevious = function () {
    return true;
  };
  CyclicListIterator.prototype.next = function () {
    this.currentIndex_0 = this.nextIndex();
    return this.array_0.get_za3lpa$(this.currentIndex_0);
  };
  CyclicListIterator.prototype.nextIndex = function () {
    var nextIndex = this.currentIndex_0 + 1 | 0;
    if (nextIndex >= this.array_0.size) {
      nextIndex = 0;
    }
    return nextIndex;
  };
  CyclicListIterator.prototype.getPrevious = function () {
    return this.array_0.get_za3lpa$(this.previousIndex());
  };
  CyclicListIterator.prototype.getNext = function () {
    return this.array_0.get_za3lpa$(this.nextIndex());
  };
  CyclicListIterator.prototype.previous = function () {
    this.currentIndex_0 = this.previousIndex();
    return this.array_0.get_za3lpa$(this.currentIndex_0);
  };
  CyclicListIterator.prototype.previousIndex = function () {
    var previousIndex = this.currentIndex_0 - 1 | 0;
    if (previousIndex < 0) {
      previousIndex = this.array_0.size - 1 | 0;
    }
    return previousIndex;
  };
  CyclicListIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CyclicListIterator',
    interfaces: [ListIterator]
  };
  function random($receiver) {
    return $receiver.get_za3lpa$(RandomUtil_getInstance().nextInt_za3lpa$($receiver.size));
  }
  function addUnique($receiver, item) {
    if ($receiver.contains_11rb$(item)) {
      return;
    }
    $receiver.add_11rb$(item);
  }
  function lastOrDefault($receiver, def) {
    var tmp$;
    return (tmp$ = lastOrNull($receiver)) != null ? tmp$ : def();
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
  function removeRandom($receiver) {
    var index = RandomUtil_getInstance().nextInt_za3lpa$($receiver.size);
    return $receiver.removeAt_za3lpa$(index);
  }
  function removeLast($receiver) {
    return $receiver.removeAt_za3lpa$($receiver.size - 1 | 0);
  }
  function push($receiver, item) {
    return $receiver.add_11rb$(item);
  }
  function push_0($receiver, items) {
    var tmp$;
    tmp$ = items.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      push($receiver, element);
    }
  }
  function peek($receiver) {
    return lastOrNull($receiver);
  }
  function pop($receiver) {
    var item = lastOrNull($receiver);
    if (!$receiver.isEmpty()) {
      removeLast($receiver);
    }
    return item;
  }
  function mutableListOfSize(size, init) {
    var result = ArrayList_init();
    for (var x = 0; x < size; x++) {
      result.add_11rb$(init(x));
    }
    return result;
  }
  function throwIfExists($receiver, key) {
    if ($receiver.containsKey_11rb$(key)) {
      throw IllegalStateException_init('Key found in map ' + key);
    }
  }
  function MathUtil() {
    MathUtil_instance = this;
  }
  MathUtil.prototype.min_vux9f0$ = function (a, b) {
    if (a < b) {
      return a;
    }
    return b;
  };
  MathUtil.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MathUtil',
    interfaces: []
  };
  var MathUtil_instance = null;
  function MathUtil_getInstance() {
    if (MathUtil_instance === null) {
      new MathUtil();
    }
    return MathUtil_instance;
  }
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
  function fixBOM($receiver) {
    return replace($receiver, '\uFEFF', '');
  }
  var sdiak;
  var bdiak;
  function removeAccents($receiver) {
    var tmp$;
    var result = $receiver;
    tmp$ = sdiak.length;
    for (var index = 0; index < tmp$; index++) {
      result = replace_0(result, sdiak.charCodeAt(index), bdiak.charCodeAt(index));
    }
    result = replace(result, '\u011B', 'e');
    return result;
  }
  var samohlasky;
  function samohlaska($receiver) {
    return contains(samohlasky, toBoxedChar(removeAccent(toChar(String.fromCharCode($receiver | 0).toLowerCase().charCodeAt(0)))));
  }
  function removeAccent($receiver) {
    if (indexOf(sdiak, $receiver) > 0) {
      return bdiak.charCodeAt(indexOf(sdiak, $receiver));
    }
    return $receiver;
  }
  function simplify($receiver) {
    var tmp$ = removeAccents($receiver);
    var result = Regex_init('(\\s|[, -.!?])*').replace_x2uqeu$(tmp$, '');
    return result;
  }
  function startSharedWith($receiver, finalEncrypted) {
    var maxSize = MathUtil_getInstance().min_vux9f0$($receiver.length, finalEncrypted.length);
    for (var index = 0; index <= maxSize; index++) {
      if (finalEncrypted.charCodeAt(index) !== $receiver.charCodeAt(index)) {
        return index;
      }
    }
    return maxSize;
  }
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
  var createHtmlElement$lambda = wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (typeClosure$E, isE) {
      return function () {
        throw IllegalStateException_init(('Could not find tag name for html element ' + getKClass(typeClosure$E) + ', use createHtmlElement(localName: String) instead to explicitly call tag name').toString());
      };
    };
  });
  function AudioPlayer(finishCallback) {
    AudioPlayer$Companion_getInstance();
    this.currentUrl_0 = null;
    this.audioElement_469nrw$_0 = lazy(AudioPlayer$audioElement$lambda(finishCallback, this));
  }
  Object.defineProperty(AudioPlayer.prototype, 'audioElement_0', {
    get: function () {
      return this.audioElement_469nrw$_0.value;
    }
  });
  function AudioPlayer$play$lambda(it) {
    println('cannot play audio: ');
    println(it);
    return Unit;
  }
  AudioPlayer.prototype.play_61zpoe$ = function (url) {
    this.currentUrl_0 = url;
    this.audioElement_0.src = url;
    this.audioElement_0.play().catch(AudioPlayer$play$lambda);
  };
  AudioPlayer.prototype.pause = function () {
    this.audioElement_0.pause();
  };
  function AudioPlayer$Companion() {
    AudioPlayer$Companion_instance = this;
    this.ID = 'tg-audio-player';
  }
  AudioPlayer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AudioPlayer$Companion_instance = null;
  function AudioPlayer$Companion_getInstance() {
    if (AudioPlayer$Companion_instance === null) {
      new AudioPlayer$Companion();
    }
    return AudioPlayer$Companion_instance;
  }
  function AudioPlayer$audioElement$lambda$lambda$lambda(closure$finishCallback, this$AudioPlayer) {
    return function (it) {
      closure$finishCallback(ensureNotNull(this$AudioPlayer.currentUrl_0));
      return Unit;
    };
  }
  function AudioPlayer$audioElement$lambda(closure$finishCallback, this$AudioPlayer) {
    return function () {
      var $receiver = document;
      var tmp$;
      var $receiver_0 = dom.htmlElementClassesToTagNames;
      var key = getKClass(HTMLAudioElement);
      var tmp$_0;
      var tmp$_1;
      if ((tmp$_0 = $receiver_0.get_11rb$(key)) != null)
        tmp$_1 = tmp$_0;
      else {
        throw IllegalStateException_init(('Could not find tag name for html element ' + getKClass(HTMLAudioElement) + ', use createHtmlElement(localName: String) instead to explicitly call tag name').toString());
      }
      var tagName = tmp$_1;
      var $receiver_1 = Kotlin.isType(tmp$ = $receiver.createElement(tagName), HTMLAudioElement) ? tmp$ : throwCCE();
      var closure$finishCallback_0 = closure$finishCallback;
      var this$AudioPlayer_0 = this$AudioPlayer;
      var tmp$_2;
      (tmp$_2 = document.body) != null ? tmp$_2.appendChild($receiver_1) : null;
      hide($receiver_1);
      $receiver_1.addEventListener('ended', AudioPlayer$audioElement$lambda$lambda$lambda(closure$finishCallback_0, this$AudioPlayer_0));
      return $receiver_1;
    };
  }
  AudioPlayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioPlayer',
    interfaces: []
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
    var destination = ArrayList_init_0($receiver.length);
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
  function SoundController() {
    this.group = null;
    this.finished = 0;
    this.count = 0;
    this.mainCallback = null;
    this.progressCallback = null;
    this.callback = SoundController$callback$lambda(this);
    this.doprovodVolumes = 0.4;
    this.biciVolumes = 0.35;
    this.solo = new TrackGroup([new AudioTrack('melodie_flazolety', void 0, 1.0, void 0, void 0, this.callback), new AudioTrack('melodie2_original', void 0, 0.8, void 0, void 0, this.callback), new AudioTrack('melodie_tap', void 0, 0.8, void 0, void 0, this.callback)]);
    this.rhythm = new TrackGroup([new AudioTrack('doprovod_delay', true, this.doprovodVolumes, void 0, false, this.callback), new AudioTrack('doprovod_rozlozene', true, this.doprovodVolumes, void 0, false, this.callback), new AudioTrack('doprovod_sekany_akordy', true, this.doprovodVolumes, void 0, false, this.callback)]);
    this.drums = new TrackGroup([new AudioTrack('bici3', true, 1.0, void 0, false, this.callback), new AudioTrack('bici1', true, this.biciVolumes, void 0, false, this.callback), new AudioTrack('bici2', true, this.biciVolumes, void 0, false, this.callback)]);
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
  SoundOptions.prototype.copy_f1r503$ = function (source, options) {
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
    println(this.currentTrack_0().fileName + ' - ' + this.currentTrack_0().volume());
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
  TrackGroup.prototype.copy_m6gc2$ = function (tracks, currentIndex) {
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
  function hide_0($receiver) {
    $receiver.style.display = 'none';
  }
  function show($receiver, display) {
    if (display === void 0)
      display = 'block';
    $receiver.style.display = display;
  }
  function setAttributeIfNull($receiver, qualifiedName, value) {
    if ($receiver.getAttribute(qualifiedName) == null) {
      $receiver.setAttribute(qualifiedName, value);
    }
  }
  function clickToHide$lambda(this$clickToHide) {
    return function (it) {
      hide_0(this$clickToHide);
      return Unit;
    };
  }
  function clickToHide($receiver) {
    $receiver.onclick = clickToHide$lambda($receiver);
  }
  function isFormElement($receiver) {
    var toUpperCase$result;
    toUpperCase$result = $receiver.tagName.toUpperCase();
    return contains(['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON'], toUpperCase$result);
  }
  function jsContinueMove() {
    window.game.continueMove();
  }
  function clickToContinue$lambda(it) {
    jsContinueMove();
    return Unit;
  }
  function clickToContinue($receiver) {
    $receiver.onclick = clickToContinue$lambda;
  }
  function newParent($receiver, elementName) {
    if (elementName === void 0)
      elementName = 'div';
    var tmp$;
    var newDiv = Kotlin.isType(tmp$ = document.createElement(elementName), HTMLElement) ? tmp$ : throwCCE();
    while ($receiver.hasChildNodes()) {
      newDiv.appendChild(ensureNotNull($receiver.firstChild));
    }
    $receiver.appendChild(newDiv);
    return newDiv;
  }
  function preloadImages$lambda(f, f_0) {
    return Unit;
  }
  function preloadImages$lambda_0() {
    return Unit;
  }
  function preloadImages$lambda$lambda(closure$index, closure$loader, closure$max, closure$onProgress, closure$url) {
    return function (it) {
      closure$index.v = closure$index.v + 1 | 0;
      closure$loader.updateProgress_vux9f0$(closure$index.v, closure$max);
      closure$onProgress(closure$index.v, closure$max);
      return closure$url;
    };
  }
  function preloadImages$lambda$lambda_0(closure$index, closure$loader, closure$max, closure$onProgress) {
    return function (it) {
      closure$index.v = closure$index.v + 1 | 0;
      closure$loader.updateProgress_vux9f0$(closure$index.v, closure$max);
      closure$onProgress(closure$index.v, closure$max);
      return it;
    };
  }
  function preloadImages$lambda_1(closure$loader, closure$onFinish) {
    return function (it) {
      closure$loader.finish();
      closure$onFinish();
      return Unit;
    };
  }
  function preloadImages$lambda_2(closure$loader, closure$onFinish) {
    return function (it) {
      closure$loader.finish();
      closure$onFinish();
      return Unit;
    };
  }
  function preloadImages($receiver, images, onProgress, onFinish) {
    if (onProgress === void 0)
      onProgress = preloadImages$lambda;
    if (onFinish === void 0)
      onFinish = preloadImages$lambda_0;
    if (images.isEmpty()) {
      return;
    }
    var loader = $receiver;
    loader.start();
    var index = {v: 0};
    var max = images.size;
    var destination = ArrayList_init_0(collectionSizeOrDefault(images, 10));
    var tmp$;
    tmp$ = images.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(preloadImage(item).then(preloadImages$lambda$lambda(index, loader, max, onProgress, item), preloadImages$lambda$lambda_0(index, loader, max, onProgress)));
    }
    Promise.all(copyToArray(destination)).then(preloadImages$lambda_1(loader, onFinish)).catch(preloadImages$lambda_2(loader, onFinish));
  }
  function scrollIntoViewIfNotScrolling($receiver, behavior, block, inline) {
    if (behavior === void 0)
      behavior = 'smooth';
    if (block === void 0)
      block = 'start';
    if (inline === void 0)
      inline = 'nearest';
    var scrollingWatcher = ScrollingWatcher$Companion_getInstance().getOrInit_za3lpa$();
    if (scrollingWatcher.scrolling) {
      return;
    }
    scrollIntoView($receiver, behavior, block, inline);
  }
  function ScrollingWatcher(element, milliseconds) {
    ScrollingWatcher$Companion_getInstance();
    var tmp$;
    if (element === void 0)
      element = Kotlin.isType(tmp$ = document.getElementById('game'), HTMLElement) ? tmp$ : throwCCE();
    if (milliseconds === void 0)
      milliseconds = 500;
    this.element = element;
    this.milliseconds = milliseconds;
    this.scrolling__0 = false;
    this.watchScrolling_0();
  }
  Object.defineProperty(ScrollingWatcher.prototype, 'scrolling', {
    get: function () {
      return this.scrolling__0;
    }
  });
  function ScrollingWatcher$watchScrolling$lambda(this$ScrollingWatcher) {
    return function (it) {
      this$ScrollingWatcher.scrolling__0 = true;
      return Unit;
    };
  }
  function ScrollingWatcher$watchScrolling$lambda_0(this$ScrollingWatcher) {
    return function () {
      this$ScrollingWatcher.scrolling__0 = false;
      return Unit;
    };
  }
  ScrollingWatcher.prototype.watchScrolling_0 = function () {
    this.element.addEventListener('scroll', ScrollingWatcher$watchScrolling$lambda(this));
    this.element.addEventListener('scroll', debounceEvent(ScrollingWatcher$watchScrolling$lambda_0(this), this.milliseconds));
    return this;
  };
  function ScrollingWatcher$Companion() {
    ScrollingWatcher$Companion_instance = this;
    this.KEY_0 = 'scrollingWatcher';
  }
  ScrollingWatcher$Companion.prototype.init_za3lpa$ = function (milliseconds) {
    if (milliseconds === void 0)
      milliseconds = 200;
    var scrollingWatcher = new ScrollingWatcher(void 0, milliseconds);
    window[this.KEY_0] = scrollingWatcher;
    return scrollingWatcher;
  };
  ScrollingWatcher$Companion.prototype.getOrInit_za3lpa$ = function (milliseconds) {
    if (milliseconds === void 0)
      milliseconds = 200;
    var tmp$;
    if (window[this.KEY_0] == null) {
      return this.init_za3lpa$(milliseconds);
    }
    return Kotlin.isType(tmp$ = window[this.KEY_0], ScrollingWatcher) ? tmp$ : throwCCE();
  };
  ScrollingWatcher$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScrollingWatcher$Companion_instance = null;
  function ScrollingWatcher$Companion_getInstance() {
    if (ScrollingWatcher$Companion_instance === null) {
      new ScrollingWatcher$Companion();
    }
    return ScrollingWatcher$Companion_instance;
  }
  ScrollingWatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScrollingWatcher',
    interfaces: []
  };
  function kotlinDoFit() {
    var selector = '#game .inner-bubble, #game ul.lepiky .caption, .needs-textfit, .knihovnicka-cteni .text';
    var tmp$;
    tmp$ = asElementList(document.querySelectorAll(selector)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      textFit(element, {multiLine: true, maxFontSize: 120});
    }
  }
  function fitAfterResize() {
    window.addEventListener('resize', debounceEvent(getCallableRef('kotlinDoFit', function () {
      return kotlinDoFit(), Unit;
    }), 10, true));
  }
  function ProgressLoader(element, bar, caption) {
    var tmp$, tmp$_0, tmp$_1;
    if (element === void 0)
      element = Kotlin.isType(tmp$ = document.getElementById('progress'), HTMLElement) ? tmp$ : throwCCE();
    if (bar === void 0)
      bar = Kotlin.isType(tmp$_0 = document.getElementById('bar'), HTMLElement) ? tmp$_0 : throwCCE();
    if (caption === void 0)
      caption = Kotlin.isType(tmp$_1 = element.querySelector('.caption'), HTMLElement) ? tmp$_1 : throwCCE();
    this.element = element;
    this.bar = bar;
    this.caption = caption;
  }
  ProgressLoader.prototype.start = function () {
    this.updateProgress_0(0.01);
  };
  ProgressLoader.prototype.start_61zpoe$ = function (text) {
    this.caption.innerText = text;
  };
  ProgressLoader.prototype.finish = function () {
    hide_0(this.element);
  };
  ProgressLoader.prototype.updateProgress_vux9f0$ = function (current, max) {
    this.updateProgress_0((current + 1 | 0) / max);
  };
  ProgressLoader.prototype.updateProgress_0 = function (progress) {
    if (progress >= 1.0) {
      this.finish();
      return;
    }
    show(this.element, 'block');
    this.setWidthToValue_0(progress);
  };
  ProgressLoader.prototype.setWidthToValue_0 = function (progress) {
    this.bar.style.width = roundToInt(progress * 100.0).toString() + '%';
  };
  ProgressLoader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProgressLoader',
    interfaces: []
  };
  var package$eu = _.eu || (_.eu = {});
  var package$karelhovorka = package$eu.karelhovorka || (package$eu.karelhovorka = {});
  var package$util = package$karelhovorka.util || (package$karelhovorka.util = {});
  package$util.addIfNegative_798l30$ = addIfNegative;
  package$util.toHexString_964n91$ = toHexString;
  package$util.itemsHashCode_213hj2$ = itemsHashCode;
  package$util.CyclicListIterator = CyclicListIterator;
  package$util.random_2p1efm$ = random;
  package$util.addUnique_dwdffb$ = addUnique;
  package$util.lastOrDefault_tt8tc0$ = lastOrDefault;
  package$util.random_4b5429$ = random_0;
  package$util.random_cgavii$ = random_1;
  package$util.removeRandom_vvxzk3$ = removeRandom;
  package$util.removeLast_vvxzk3$ = removeLast;
  package$util.push_dwdffb$ = push;
  package$util.push_nyyr7g$ = push_0;
  package$util.peek_2p1efm$ = peek;
  package$util.pop_vvxzk3$ = pop;
  package$util.mutableListOfSize_rz0iom$ = mutableListOfSize;
  package$util.throwIfExists_t9ocha$ = throwIfExists;
  Object.defineProperty(package$util, 'MathUtil', {
    get: MathUtil_getInstance
  });
  Object.defineProperty(package$util, 'SmartRandom', {
    get: SmartRandom_getInstance
  });
  package$util.fixBOM_pdl1vz$ = fixBOM;
  Object.defineProperty(package$util, 'sdiak', {
    get: function () {
      return sdiak;
    }
  });
  Object.defineProperty(package$util, 'bdiak', {
    get: function () {
      return bdiak;
    }
  });
  package$util.removeAccents_pdl1vz$ = removeAccents;
  Object.defineProperty(package$util, 'samohlasky', {
    get: function () {
      return samohlasky;
    }
  });
  package$util.samohlaska_myv2d0$ = samohlaska;
  package$util.removeAccent_myv2d0$ = removeAccent;
  package$util.simplify_pdl1vz$ = simplify;
  package$util.startSharedWith_rjktp$ = startSharedWith;
  Object.defineProperty(package$util, 'RandomUtil', {
    get: RandomUtil_getInstance
  });
  Object.defineProperty(AudioPlayer, 'Companion', {
    get: AudioPlayer$Companion_getInstance
  });
  $$importsForInline$$.kotlintools = $module$kotlintools;
  var package$audio = package$util.audio || (package$util.audio = {});
  package$audio.AudioPlayer = AudioPlayer;
  package$audio.AudioTrack = AudioTrack;
  package$audio.Options = Options;
  package$audio.SoundController = SoundController;
  package$audio.SoundOptions = SoundOptions;
  package$audio.TrackGroup = TrackGroup;
  var package$html = package$util.html || (package$util.html = {});
  package$html.hide_y4uc6z$ = hide_0;
  package$html.show_9bm2zh$ = show;
  package$html.setAttributeIfNull_pv4ki3$ = setAttributeIfNull;
  package$html.clickToHide_y4uc6z$ = clickToHide;
  package$html.isFormElement_ejp6nk$ = isFormElement;
  package$html.jsContinueMove = jsContinueMove;
  package$html.clickToContinue_y4uc6z$ = clickToContinue;
  package$html.newParent_9bm2zh$ = newParent;
  package$html.preloadImages_ioktzy$ = preloadImages;
  package$html.scrollIntoViewIfNotScrolling_5kb8nb$ = scrollIntoViewIfNotScrolling;
  Object.defineProperty(ScrollingWatcher, 'Companion', {
    get: ScrollingWatcher$Companion_getInstance
  });
  package$html.ScrollingWatcher = ScrollingWatcher;
  package$html.kotlinDoFit = kotlinDoFit;
  package$html.fitAfterResize = fitAfterResize;
  package$html.ProgressLoader = ProgressLoader;
  sdiak = '\xE1\xE4\u010D\u010F\xE9\u011B\xED\u013A\u013E\u0148\xF3\xF4 \xF6\u0155\u0161\u0165\xFA\u016F \xFC\xFD\u0159\u017E\xC1\xC4\u010C\u010E\xC9\u011A\xCD\u0139\u013D\u0147\xD3\xD4 \xD6\u0154\u0160\u0164\xDA\u016E \xDC\xDD\u0158\u017D';
  bdiak = 'aacdeeillnoo orstuu uyrzAACDEEILLNOO ORSTUU UYRZ';
  samohlasky = [toBoxedChar(97), toBoxedChar(101), toBoxedChar(105), toBoxedChar(111), toBoxedChar(117), toBoxedChar(121)];
  Kotlin.defineModule('tg-common', _);
  return _;
}));

//# sourceMappingURL=tg-common.js.map
