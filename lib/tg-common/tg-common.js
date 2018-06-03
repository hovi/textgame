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
  var numberToInt = Kotlin.numberToInt;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var equals = Kotlin.equals;
  var hashCode = Kotlin.hashCode;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  function RandomUtil() {
    RandomUtil_instance = this;
  }
  var Math_0 = Math;
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
  function JvmStatic() {
  }
  JvmStatic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JvmStatic',
    interfaces: [Annotation]
  };
  function itemsEqual($receiver, other) {
    if (equals($receiver, other))
      return true;
    if (other == null)
      return false;
    var length = $receiver.length;
    if (other.length !== length)
      return false;
    for (var i = 0; i < length; i++) {
      var o1 = $receiver[i];
      var o2 = other[i];
      if (!(o1 == null ? o2 == null : equals(o1, o2)))
        return false;
    }
    return true;
  }
  function itemsHashCode($receiver) {
    var tmp$, tmp$_0;
    if ($receiver == null)
      return 0;
    var result = 1;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      result = (31 * result | 0) + ((tmp$_0 = element != null ? hashCode(element) : null) != null ? tmp$_0 : 0) | 0;
    }
    return result;
  }
  function random($receiver) {
    return $receiver.get_za3lpa$(RandomUtil_getInstance().nextInt_za3lpa$($receiver.size));
  }
  function addUnique($receiver, item) {
    if ($receiver.contains_11rb$(item)) {
      return;
    }
    $receiver.add_11rb$(item);
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
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function toPairs($receiver) {
    var destination = ArrayList_init($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item.key, item.value));
    }
    return copyToArray(destination);
  }
  var package$eu = _.eu || (_.eu = {});
  var package$karelhovorka = package$eu.karelhovorka || (package$eu.karelhovorka = {});
  var package$util = package$karelhovorka.util || (package$karelhovorka.util = {});
  Object.defineProperty(package$util, 'RandomUtil', {
    get: RandomUtil_getInstance
  });
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$js = package$kotlinx.js || (package$kotlinx.js = {});
  package$js.JvmStatic = JvmStatic;
  package$util.itemsEqual_rckbjs$ = itemsEqual;
  package$util.itemsHashCode_4b5429$ = itemsHashCode;
  package$util.random_2p1efm$ = random;
  package$util.addUnique_dwdffb$ = addUnique;
  package$util.random_4b5429$ = random_0;
  package$util.random_cgavii$ = random_1;
  package$util.removeLast_vvxzk3$ = removeLast;
  package$util.push_dwdffb$ = push;
  package$util.push_nyyr7g$ = push_0;
  package$util.peek_2p1efm$ = peek;
  package$util.pop_vvxzk3$ = pop;
  package$util.getOrThrow_t9ocha$ = getOrThrow;
  package$util.throwIfExists_t9ocha$ = throwIfExists;
  package$util.toPairs_go3l1a$ = toPairs;
  Kotlin.defineModule('tg-common', _);
  return _;
}));

//# sourceMappingURL=tg-common.js.map