(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'tg-common'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'tg-common'.");
    }
    root['tg-common'] = factory(typeof this['tg-common'] === 'undefined' ? {} : this['tg-common'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var toString = Kotlin.kotlin.text.toString_dqglrj$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var joinToString = Kotlin.kotlin.collections.joinToString_s78119$;
  var hashCode = Kotlin.hashCode;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ListIterator = Kotlin.kotlin.collections.ListIterator;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
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
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var Annotation = Kotlin.kotlin.Annotation;
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
  function getOrThrow($receiver, key) {
    var result = $receiver.get_11rb$(key);
    if (result == null) {
      throw IllegalStateException_init('Key not found in map ' + key);
    }
    return result;
  }
  function throwIfExists($receiver, key) {
    if ($receiver.containsKey_11rb$(key)) {
      throw IllegalStateException_init('Key found in map ' + key);
    }
  }
  function toPairs($receiver) {
    var destination = ArrayList_init_0($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item.key, item.value));
    }
    return copyToArray(destination);
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
  function hide($receiver) {
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
      hide(this$clickToHide);
      return Unit;
    };
  }
  function clickToHide($receiver) {
    $receiver.onclick = clickToHide$lambda($receiver);
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
  function primarecFix($receiver) {
    var tmp$, tmp$_0;
    var elements = asList($receiver.querySelectorAll('primarec, myslenka'));
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var node = tmp$.next();
      var element = Kotlin.isType(tmp$_0 = node, HTMLElement) ? tmp$_0 : throwCCE();
      var newParent_0 = newParent(element);
      newParent_0.classList.add('inner-bubble');
    }
    return $receiver;
  }
  function ProgressLoader(element, bar, caption) {
    var tmp$, tmp$_0, tmp$_1;
    if (element === void 0)
      element = Kotlin.isType(tmp$ = document.getElementById('progress'), HTMLElement) ? tmp$ : throwCCE();
    if (bar === void 0)
      bar = Kotlin.isType(tmp$_0 = document.getElementById('bar'), HTMLElement) ? tmp$_0 : throwCCE();
    if (caption === void 0)
      caption = Kotlin.isType(tmp$_1 = bar.querySelector('.caption'), HTMLElement) ? tmp$_1 : throwCCE();
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
    hide(this.element);
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
  function JvmStatic() {
  }
  JvmStatic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JvmStatic',
    interfaces: [Annotation]
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
  package$util.getOrThrow_t9ocha$ = getOrThrow;
  package$util.throwIfExists_t9ocha$ = throwIfExists;
  package$util.toPairs_go3l1a$ = toPairs;
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
  var package$html = package$util.html || (package$util.html = {});
  package$html.hide_y4uc6z$ = hide;
  package$html.show_9bm2zh$ = show;
  package$html.setAttributeIfNull_pv4ki3$ = setAttributeIfNull;
  package$html.clickToHide_y4uc6z$ = clickToHide;
  package$html.jsContinueMove = jsContinueMove;
  package$html.clickToContinue_y4uc6z$ = clickToContinue;
  package$html.newParent_9bm2zh$ = newParent;
  package$html.primarecFix_y4uc6z$ = primarecFix;
  package$html.ProgressLoader = ProgressLoader;
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$js = package$kotlinx.js || (package$kotlinx.js = {});
  package$js.JvmStatic = JvmStatic;
  sdiak = '\xE1\xE4\u010D\u010F\xE9\u011B\xED\u013A\u013E\u0148\xF3\xF4 \xF6\u0155\u0161\u0165\xFA\u016F \xFC\xFD\u0159\u017E\xC1\xC4\u010C\u010E\xC9\u011A\xCD\u0139\u013D\u0147\xD3\xD4 \xD6\u0154\u0160\u0164\xDA\u016E \xDC\xDD\u0158\u017D';
  bdiak = 'aacdeeillnoo orstuu uyrzAACDEEILLNOO ORSTUU UYRZ';
  samohlasky = [toBoxedChar(97), toBoxedChar(101), toBoxedChar(105), toBoxedChar(111), toBoxedChar(117), toBoxedChar(121)];
  Kotlin.defineModule('tg-common', _);
  return _;
}));

//# sourceMappingURL=tg-common.js.map
