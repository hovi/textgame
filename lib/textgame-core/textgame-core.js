(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-runtime', 'tg-common'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-runtime'), require('tg-common'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'textgame-core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'textgame-core'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
      throw new Error("Error loading module 'textgame-core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'textgame-core'.");
    }
    if (typeof this['tg-common'] === 'undefined') {
      throw new Error("Error loading module 'textgame-core'. Its dependency 'tg-common' was not found. Please, check whether 'tg-common' is loaded prior to 'textgame-core'.");
    }
    root['textgame-core'] = factory(typeof this['textgame-core'] === 'undefined' ? {} : this['textgame-core'], kotlin, this['kotlinx-serialization-kotlinx-serialization-runtime'], this['tg-common']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_runtime, $module$tg_common) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var L0 = Kotlin.Long.ZERO;
  var Math_0 = Math;
  var L4294967296 = new Kotlin.Long(0, 1);
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toByte = Kotlin.toByte;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var ReferenceArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.ReferenceArraySerializer;
  var equals = Kotlin.equals;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var contentEquals = Kotlin.arrayEquals;
  var itemsHashCode = $module$tg_common.eu.karelhovorka.util.itemsHashCode_213hj2$;
  var hashCode = Kotlin.hashCode;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var toString = Kotlin.toString;
  var NullableSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.NullableSerializer;
  var LinkedHashMapSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.LinkedHashMapSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.MissingFieldException;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var util = $module$tg_common.eu.karelhovorka.util;
  var CharSequence = Kotlin.kotlin.CharSequence;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var fixBOM = $module$tg_common.eu.karelhovorka.util.fixBOM_pdl1vz$;
  var Exception = Kotlin.kotlin.Exception;
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var trimEnd = Kotlin.kotlin.text.trimEnd_gw00vp$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_us0mfu$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var lineSequence = Kotlin.kotlin.text.lineSequence_gw00vp$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var getOrThrow = $module$tg_common.eu.karelhovorka.util.getOrThrow_t9ocha$;
  var contains_0 = Kotlin.kotlin.collections.contains_mjy6jw$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var addUnique = $module$tg_common.eu.karelhovorka.util.addUnique_dwdffb$;
  var asIterable = Kotlin.kotlin.collections.asIterable_us0mfu$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var addAll_0 = Kotlin.kotlin.collections.addAll_ipc267$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var plus = Kotlin.kotlin.collections.plus_khz7k3$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var first_0 = Kotlin.kotlin.collections.first_2p1efm$;
  MD5$Companion.prototype = Object.create(HashFactory.prototype);
  MD5$Companion.prototype.constructor = MD5$Companion;
  MD5.prototype = Object.create(Hash.prototype);
  MD5.prototype.constructor = MD5;
  EndType.prototype = Object.create(Enum.prototype);
  EndType.prototype.constructor = EndType;
  FlagType.prototype = Object.create(Enum.prototype);
  FlagType.prototype.constructor = FlagType;
  PauseFromType.prototype = Object.create(Enum.prototype);
  PauseFromType.prototype.constructor = PauseFromType;
  PauseType.prototype = Object.create(Enum.prototype);
  PauseType.prototype.constructor = PauseType;
  MoveType.prototype = Object.create(Enum.prototype);
  MoveType.prototype.constructor = MoveType;
  Selection.prototype = Object.create(Enum.prototype);
  Selection.prototype.constructor = Selection;
  IncorrectLineException.prototype = Object.create(Exception.prototype);
  IncorrectLineException.prototype.constructor = IncorrectLineException;
  MoveException.prototype = Object.create(Exception.prototype);
  MoveException.prototype.constructor = MoveException;
  StateException.prototype = Object.create(Exception.prototype);
  StateException.prototype.constructor = StateException;
  function HashFactory(create) {
    this.create = create;
  }
  HashFactory.prototype.digest_fqrh44$ = function (data) {
    var $receiver = this.create();
    $receiver.update_mj6st8$(data, 0, data.length);
    return $receiver.digest();
  };
  HashFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HashFactory',
    interfaces: []
  };
  function Hash(chunkSize, digestSize) {
    this.chunkSize = chunkSize;
    this.digestSize = digestSize;
    this.chunk_xu68ku$_0 = new Int8Array(this.chunkSize);
    this.writtenInChunk_57myig$_0 = 0;
    this.totalWritten_kkd7wa$_0 = L0;
  }
  Hash.prototype.reset = function () {
    this.coreReset();
    return this;
  };
  Hash.prototype.update_mj6st8$ = function (data, offset, count) {
    var curr = offset;
    var left = count;
    while (left > 0) {
      var remainingInChunk = this.chunkSize - this.writtenInChunk_57myig$_0 | 0;
      var b = left;
      var toRead = Math_0.min(remainingInChunk, b);
      arraycopy(data, curr, this.chunk_xu68ku$_0, this.writtenInChunk_57myig$_0, toRead);
      left = left - toRead | 0;
      curr = curr + toRead | 0;
      this.writtenInChunk_57myig$_0 = this.writtenInChunk_57myig$_0 + toRead | 0;
      if (this.writtenInChunk_57myig$_0 >= this.chunkSize) {
        this.writtenInChunk_57myig$_0 = this.writtenInChunk_57myig$_0 - this.chunkSize | 0;
        this.coreUpdate_fqrh44$(this.chunk_xu68ku$_0);
      }
    }
    this.totalWritten_kkd7wa$_0 = this.totalWritten_kkd7wa$_0.add(Kotlin.Long.fromInt(count));
    return this;
  };
  Hash.prototype.digestOut_fqrh44$ = function (out) {
    var pad = this.corePadding_s8cxhz$(this.totalWritten_kkd7wa$_0);
    var padPos = 0;
    while (padPos < pad.length) {
      var padSize = this.chunkSize - this.writtenInChunk_57myig$_0 | 0;
      arraycopy(pad, padPos, this.chunk_xu68ku$_0, this.writtenInChunk_57myig$_0, padSize);
      this.coreUpdate_fqrh44$(this.chunk_xu68ku$_0);
      this.writtenInChunk_57myig$_0 = 0;
      padPos = padPos + padSize | 0;
    }
    this.coreDigest_fqrh44$(out);
    this.coreReset();
  };
  Hash.prototype.update_fqrh44$ = function (data) {
    return this.update_mj6st8$(data, 0, data.length);
  };
  Hash.prototype.digest = function () {
    var $receiver = new Int8Array(this.digestSize);
    this.digestOut_fqrh44$($receiver);
    return $receiver;
  };
  Hash.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hash',
    interfaces: []
  };
  function hash($receiver, algo) {
    return algo.digest_fqrh44$($receiver);
  }
  function MD5() {
    MD5$Companion_getInstance();
    Hash.call(this, 64, 16);
    this.r_0 = new Int32Array(4);
    this.o_0 = new Int32Array(4);
    this.b_0 = new Int32Array(16);
    this.coreReset();
  }
  function MD5$Companion() {
    MD5$Companion_instance = this;
    HashFactory.call(this, MD5$MD5$Companion_init$lambda);
    this.S_0 = new Int32Array([7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21]);
    var array = new Int32Array(64);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0 = L4294967296.toNumber();
      var x = 1.0 + i;
      var x_0 = Math_0.sin(x);
      array[i] = Kotlin.Long.fromNumber(tmp$_0 * Math_0.abs(x_0)).toInt();
    }
    this.T_0 = array;
  }
  function MD5$MD5$Companion_init$lambda() {
    return new MD5();
  }
  MD5$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [HashFactory]
  };
  var MD5$Companion_instance = null;
  function MD5$Companion_getInstance() {
    if (MD5$Companion_instance === null) {
      new MD5$Companion();
    }
    return MD5$Companion_instance;
  }
  MD5.prototype.coreReset = function () {
    this.r_0[0] = 1732584193;
    this.r_0[1] = -271733879;
    this.r_0[2] = -1732584194;
    this.r_0[3] = 271733878;
  };
  MD5.prototype.coreUpdate_fqrh44$ = function (chunk) {
    var tmp$, tmp$_0, tmp$_1;
    for (var j = 0; j < 64; j++)
      this.b_0[j >>> 2] = chunk[j] << 24 | this.b_0[j >>> 2] >>> 8;
    for (var j_0 = 0; j_0 < 4; j_0++)
      this.o_0[j_0] = this.r_0[j_0];
    for (var j_1 = 0; j_1 < 64; j_1++) {
      var d16 = j_1 / 16 | 0;
      switch (d16) {
        case 0:
          tmp$ = this.r_0[1] & this.r_0[2] | ~this.r_0[1] & this.r_0[3];
          break;
        case 1:
          tmp$ = this.r_0[1] & this.r_0[3] | this.r_0[2] & ~this.r_0[3];
          break;
        case 2:
          tmp$ = this.r_0[1] ^ this.r_0[2] ^ this.r_0[3];
          break;
        case 3:
          tmp$ = this.r_0[2] ^ (this.r_0[1] | ~this.r_0[3]);
          break;
        default:tmp$ = 0;
          break;
      }
      var f = tmp$;
      switch (d16) {
        case 0:
          tmp$_0 = j_1;
          break;
        case 1:
          tmp$_0 = (j_1 * 5 | 0) + 1 & 15;
          break;
        case 2:
          tmp$_0 = (j_1 * 3 | 0) + 5 & 15;
          break;
        case 3:
          tmp$_0 = (j_1 * 7 | 0) & 15;
          break;
        default:tmp$_0 = 0;
          break;
      }
      var bi = tmp$_0;
      var temp = this.r_0[1] + rotateLeft(this.r_0[0] + f + this.b_0[bi] + MD5$Companion_getInstance().T_0[j_1] | 0, MD5$Companion_getInstance().S_0[d16 << 2 | j_1 & 3]) | 0;
      this.r_0[0] = this.r_0[3];
      this.r_0[3] = this.r_0[2];
      this.r_0[2] = this.r_0[1];
      this.r_0[1] = temp;
    }
    for (var j_2 = 0; j_2 < 4; j_2++) {
      tmp$_1 = this.r_0;
      tmp$_1[j_2] = tmp$_1[j_2] + this.o_0[j_2] | 0;
    }
  };
  MD5.prototype.corePadding_s8cxhz$ = function (totalWritten) {
    var numberOfBlocks = totalWritten.add(Kotlin.Long.fromInt(8)).div(Kotlin.Long.fromInt(this.chunkSize)).add(Kotlin.Long.fromInt(1));
    var totalWrittenBits = totalWritten.multiply(Kotlin.Long.fromInt(8));
    var $receiver = new Int8Array(numberOfBlocks.multiply(Kotlin.Long.fromInt(this.chunkSize)).subtract(totalWritten).toInt());
    $receiver[0] = toByte(128);
    for (var i = 0; i < 8; i++)
      $receiver[$receiver.length - 8 + i | 0] = toByte(totalWrittenBits.shiftRightUnsigned(8 * i | 0).toInt());
    return $receiver;
  };
  MD5.prototype.coreDigest_fqrh44$ = function (out) {
    for (var it = 0; it < 16; it++)
      out[it] = toByte(this.r_0[it / 4 | 0] >>> (it % 4 * 8 | 0));
  };
  MD5.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MD5',
    interfaces: [Hash]
  };
  function md5($receiver) {
    return hash($receiver, MD5$Companion_getInstance());
  }
  var ext8 = defineInlineFunction('textgame-core.com.soywiz.krypto.internal.ext8_b6l1hq$', function ($receiver, offset) {
    return $receiver >>> offset & 255;
  });
  function rotateRight($receiver, amount) {
    return $receiver >>> amount | $receiver << 32 - amount;
  }
  function rotateLeft($receiver, bits) {
    return $receiver << bits | $receiver >>> 32 - bits;
  }
  function arraycopy(src, srcPos, dst, dstPos, count) {
    arrayCopy(src, dst, dstPos, srcPos, srcPos + count | 0);
    return dst;
  }
  function arraycopy_0(src, srcPos, dst, dstPos, count) {
    arrayCopy(src, dst, dstPos, srcPos, srcPos + count | 0);
    return dst;
  }
  function readU8($receiver, o) {
    return $receiver[o] & 255;
  }
  function readS32_be($receiver, o) {
    return readU8($receiver, o + 3 | 0) << 0 | readU8($receiver, o + 2 | 0) << 8 | readU8($receiver, o + 1 | 0) << 16 | readU8($receiver, o + 0 | 0) << 24;
  }
  function Audio(filename, loop, volume) {
    if (loop === void 0)
      loop = false;
    if (volume === void 0)
      volume = 1.0;
    this.filename = filename;
    this.loop = loop;
    this.volume = volume;
  }
  Audio.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Audio',
    interfaces: []
  };
  Audio.prototype.component1 = function () {
    return this.filename;
  };
  Audio.prototype.component2 = function () {
    return this.loop;
  };
  Audio.prototype.component3 = function () {
    return this.volume;
  };
  Audio.prototype.copy_4rplv2$ = function (filename, loop, volume) {
    return new Audio(filename === void 0 ? this.filename : filename, loop === void 0 ? this.loop : loop, volume === void 0 ? this.volume : volume);
  };
  Audio.prototype.toString = function () {
    return 'Audio(filename=' + Kotlin.toString(this.filename) + (', loop=' + Kotlin.toString(this.loop)) + (', volume=' + Kotlin.toString(this.volume)) + ')';
  };
  Audio.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.filename) | 0;
    result = result * 31 + Kotlin.hashCode(this.loop) | 0;
    result = result * 31 + Kotlin.hashCode(this.volume) | 0;
    return result;
  };
  Audio.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.filename, other.filename) && Kotlin.equals(this.loop, other.loop) && Kotlin.equals(this.volume, other.volume)))));
  };
  function Chapter(id, name, categories, theme, flagGroups, states, testDefaultTheme, filePrefix) {
    if (categories === void 0) {
      categories = [];
    }
    if (theme === void 0)
      theme = null;
    if (flagGroups === void 0) {
      flagGroups = [];
    }
    if (testDefaultTheme === void 0)
      testDefaultTheme = null;
    if (filePrefix === void 0)
      filePrefix = null;
    this.id = id;
    this.name = name;
    this.categories = categories;
    this.theme = theme;
    this.flagGroups = flagGroups;
    this.states = states;
    this.testDefaultTheme = testDefaultTheme;
    this.filePrefix = filePrefix;
  }
  Chapter.prototype.withoutStates = function () {
    return this.copy_e53wxx$(void 0, void 0, void 0, void 0, void 0, []);
  };
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
  Chapter.prototype.component6 = function () {
    return this.states;
  };
  Chapter.prototype.component7 = function () {
    return this.testDefaultTheme;
  };
  Chapter.prototype.component8 = function () {
    return this.filePrefix;
  };
  Chapter.prototype.copy_e53wxx$ = function (id, name, categories, theme, flagGroups, states, testDefaultTheme, filePrefix) {
    return new Chapter(id === void 0 ? this.id : id, name === void 0 ? this.name : name, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme, flagGroups === void 0 ? this.flagGroups : flagGroups, states === void 0 ? this.states : states, testDefaultTheme === void 0 ? this.testDefaultTheme : testDefaultTheme, filePrefix === void 0 ? this.filePrefix : filePrefix);
  };
  Chapter.prototype.toString = function () {
    return 'Chapter(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + (', flagGroups=' + Kotlin.toString(this.flagGroups)) + (', states=' + Kotlin.toString(this.states)) + (', testDefaultTheme=' + Kotlin.toString(this.testDefaultTheme)) + (', filePrefix=' + Kotlin.toString(this.filePrefix)) + ')';
  };
  Chapter.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagGroups) | 0;
    result = result * 31 + Kotlin.hashCode(this.states) | 0;
    result = result * 31 + Kotlin.hashCode(this.testDefaultTheme) | 0;
    result = result * 31 + Kotlin.hashCode(this.filePrefix) | 0;
    return result;
  };
  Chapter.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.flagGroups, other.flagGroups) && Kotlin.equals(this.states, other.states) && Kotlin.equals(this.testDefaultTheme, other.testDefaultTheme) && Kotlin.equals(this.filePrefix, other.filePrefix)))));
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
    GameCompletion$Companion_getInstance();
    if (stateIds === void 0) {
      stateIds = [];
    }
    if (moveIds === void 0) {
      moveIds = [];
    }
    this.stateIds = stateIds;
    this.moveIds = moveIds;
  }
  function GameCompletion$Companion() {
    GameCompletion$Companion_instance = this;
    this.EMPTY = new GameCompletion();
  }
  GameCompletion$Companion.prototype.serializer = function () {
    return GameCompletion$$serializer_getInstance();
  };
  GameCompletion$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameCompletion$Companion_instance = null;
  function GameCompletion$Companion_getInstance() {
    if (GameCompletion$Companion_instance === null) {
      new GameCompletion$Companion();
    }
    return GameCompletion$Companion_instance;
  }
  function GameCompletion$$serializer() {
    this.descriptor_d0ny53$_0 = new SerialClassDescImpl('eu.karelhovorka.textgame.core.bo.GameCompletion', this);
    this.descriptor.addElement_ivxn3r$('stateIds', true);
    this.descriptor.addElement_ivxn3r$('moveIds', true);
    GameCompletion$$serializer_instance = this;
  }
  Object.defineProperty(GameCompletion$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_d0ny53$_0;
    }
  });
  GameCompletion$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.stateIds, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeSerializableElement_blecud$(this.descriptor, 0, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.stateIds);
    if (!equals(obj.moveIds, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeSerializableElement_blecud$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.moveIds);
    output.endStructure_qatsm0$(this.descriptor);
  };
  GameCompletion$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return GameCompletion_init(bitMask0, local0, local1, null);
  };
  GameCompletion$$serializer.prototype.childSerializers = function () {
    return [new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)];
  };
  GameCompletion$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var GameCompletion$$serializer_instance = null;
  function GameCompletion$$serializer_getInstance() {
    if (GameCompletion$$serializer_instance === null) {
      new GameCompletion$$serializer();
    }
    return GameCompletion$$serializer_instance;
  }
  function GameCompletion_init(seen1, stateIds, moveIds, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(GameCompletion.prototype);
    if ((seen1 & 1) === 0) {
      $this.stateIds = [];
    }
     else
      $this.stateIds = stateIds;
    if ((seen1 & 2) === 0) {
      $this.moveIds = [];
    }
     else
      $this.moveIds = moveIds;
    return $this;
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
  GameConfig$Companion.prototype.fromStates_duu6qb$ = function (states) {
    var firstState = first(states);
    var chapter = new Chapter(firstState.chapterId, firstState.chapterId, void 0, void 0, void 0, states);
    var moves = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== states.length; ++tmp$) {
      var element = states[tmp$];
      addAll(moves, element.moves);
    }
    return new GameConfig(first(states).id, states, copyToArray(moves), [chapter]);
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
  function GameFlags(usePause, testing) {
    if (usePause === void 0)
      usePause = true;
    if (testing === void 0)
      testing = false;
    this.usePause = usePause;
    this.testing = testing;
  }
  GameFlags.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameFlags',
    interfaces: []
  };
  GameFlags.prototype.component1 = function () {
    return this.usePause;
  };
  GameFlags.prototype.component2 = function () {
    return this.testing;
  };
  GameFlags.prototype.copy_dqye30$ = function (usePause, testing) {
    return new GameFlags(usePause === void 0 ? this.usePause : usePause, testing === void 0 ? this.testing : testing);
  };
  GameFlags.prototype.toString = function () {
    return 'GameFlags(usePause=' + Kotlin.toString(this.usePause) + (', testing=' + Kotlin.toString(this.testing)) + ')';
  };
  GameFlags.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.usePause) | 0;
    result = result * 31 + Kotlin.hashCode(this.testing) | 0;
    return result;
  };
  GameFlags.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.usePause, other.usePause) && Kotlin.equals(this.testing, other.testing)))));
  };
  function toGraphElement$ObjectLiteral(this$toGraphElement) {
    this.this$toGraphElement = this$toGraphElement;
  }
  Object.defineProperty(toGraphElement$ObjectLiteral.prototype, 'id', {
    get: function () {
      return this.this$toGraphElement.id;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral.prototype, 'text', {
    get: function () {
      return this.this$toGraphElement.text;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral.prototype, 'flags', {
    get: function () {
      return this.this$toGraphElement.flags;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral.prototype, 'flagsToRemove', {
    get: function () {
      return this.this$toGraphElement.flagsToRemove;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral.prototype, 'categories', {
    get: function () {
      return this.this$toGraphElement.categories;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral.prototype, 'theme', {
    get: function () {
      return this.this$toGraphElement.theme;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral.prototype, 'background', {
    get: function () {
      return this.this$toGraphElement.background;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral.prototype, 'variables', {
    get: function () {
      return this.this$toGraphElement.variables;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral.prototype, 'pause', {
    get: function () {
      return this.this$toGraphElement.pause;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral.prototype, 'illustration', {
    get: function () {
      return this.this$toGraphElement.illustration;
    }
  });
  toGraphElement$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [GraphElement]
  };
  function toGraphElement($receiver) {
    return new toGraphElement$ObjectLiteral($receiver);
  }
  function toGraphElement$ObjectLiteral_0(this$toGraphElement) {
    this.this$toGraphElement = this$toGraphElement;
  }
  Object.defineProperty(toGraphElement$ObjectLiteral_0.prototype, 'id', {
    get: function () {
      return this.this$toGraphElement.id;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral_0.prototype, 'text', {
    get: function () {
      return this.this$toGraphElement.text;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral_0.prototype, 'flags', {
    get: function () {
      return this.this$toGraphElement.flags;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral_0.prototype, 'flagsToRemove', {
    get: function () {
      return this.this$toGraphElement.flagsToRemove;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral_0.prototype, 'categories', {
    get: function () {
      return this.this$toGraphElement.categories;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral_0.prototype, 'theme', {
    get: function () {
      return this.this$toGraphElement.theme;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral_0.prototype, 'background', {
    get: function () {
      return this.this$toGraphElement.background;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral_0.prototype, 'variables', {
    get: function () {
      return this.this$toGraphElement.variables;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral_0.prototype, 'pause', {
    get: function () {
      return this.this$toGraphElement.pause;
    }
  });
  Object.defineProperty(toGraphElement$ObjectLiteral_0.prototype, 'illustration', {
    get: function () {
      return this.this$toGraphElement.illustration;
    }
  });
  toGraphElement$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [GraphElement]
  };
  function toGraphElement_0($receiver) {
    return new toGraphElement$ObjectLiteral_0($receiver);
  }
  function GraphElement() {
  }
  GraphElement.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GraphElement',
    interfaces: []
  };
  function GameState() {
  }
  GameState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GameState',
    interfaces: []
  };
  function extensionEquals($receiver, other) {
    if ($receiver === other)
      return true;
    if (other == null || !Kotlin.isType(other, GameState))
      return false;
    if (!contentEquals($receiver.flags, other.flags))
      return false;
    if (!equals($receiver.currentStateId, other.currentStateId))
      return false;
    if (!equals($receiver.variables, other.variables))
      return false;
    if (!equals($receiver.currentTheme, other.currentTheme))
      return false;
    if (!contentEquals($receiver.visitedChapters, other.visitedChapters))
      return false;
    return true;
  }
  function extensionHashCode($receiver) {
    var tmp$, tmp$_0;
    var result = itemsHashCode($receiver.flags);
    result = (31 * result | 0) + hashCode($receiver.currentStateId) | 0;
    result = (31 * result | 0) + hashCode($receiver.variables) | 0;
    result = (31 * result | 0) + ((tmp$_0 = (tmp$ = $receiver.currentTheme) != null ? hashCode(tmp$) : null) != null ? tmp$_0 : 0) | 0;
    result = (31 * result | 0) + itemsHashCode($receiver.visitedChapters) | 0;
    return result;
  }
  function toImmutable($receiver) {
    if (Kotlin.isType($receiver, ImmutableGameState)) {
      return $receiver;
    }
    return new ImmutableGameState($receiver.flags, $receiver.currentStateId, $receiver.variables, $receiver.currentTheme, $receiver.visitedChapters, $receiver.timestamp);
  }
  function ImmutableGameState(flags, currentStateId, variables, currentTheme, visitedChapters, timestamp) {
    ImmutableGameState$Companion_getInstance();
    if (visitedChapters === void 0) {
      visitedChapters = [];
    }
    if (timestamp === void 0)
      timestamp = L0;
    this.flags_hghble$_0 = flags;
    this.currentStateId_7oqf1o$_0 = currentStateId;
    this.variables_islbby$_0 = variables;
    this.currentTheme_mwpsvl$_0 = currentTheme;
    this.visitedChapters_c3x8th$_0 = visitedChapters;
    this.timestamp_ib6j1b$_0 = timestamp;
  }
  Object.defineProperty(ImmutableGameState.prototype, 'flags', {
    get: function () {
      return this.flags_hghble$_0;
    }
  });
  Object.defineProperty(ImmutableGameState.prototype, 'currentStateId', {
    get: function () {
      return this.currentStateId_7oqf1o$_0;
    }
  });
  Object.defineProperty(ImmutableGameState.prototype, 'variables', {
    get: function () {
      return this.variables_islbby$_0;
    }
  });
  Object.defineProperty(ImmutableGameState.prototype, 'currentTheme', {
    get: function () {
      return this.currentTheme_mwpsvl$_0;
    }
  });
  Object.defineProperty(ImmutableGameState.prototype, 'visitedChapters', {
    get: function () {
      return this.visitedChapters_c3x8th$_0;
    }
  });
  Object.defineProperty(ImmutableGameState.prototype, 'timestamp', {
    get: function () {
      return this.timestamp_ib6j1b$_0;
    }
  });
  ImmutableGameState.prototype.equals = function (other) {
    return extensionEquals(this, other);
  };
  ImmutableGameState.prototype.hashCode = function () {
    return extensionHashCode(this);
  };
  ImmutableGameState.prototype.toString = function () {
    return 'GameState(flags=' + toList(this.flags) + ", currentStateId='" + this.currentStateId + "', variables=" + this.variables + ', currentTheme=' + toString(this.currentTheme) + ')';
  };
  function ImmutableGameState$Companion() {
    ImmutableGameState$Companion_instance = this;
  }
  ImmutableGameState$Companion.prototype.serializer = function () {
    return ImmutableGameState$$serializer_getInstance();
  };
  ImmutableGameState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ImmutableGameState$Companion_instance = null;
  function ImmutableGameState$Companion_getInstance() {
    if (ImmutableGameState$Companion_instance === null) {
      new ImmutableGameState$Companion();
    }
    return ImmutableGameState$Companion_instance;
  }
  function ImmutableGameState$$serializer() {
    this.descriptor_phjvbs$_0 = new SerialClassDescImpl('eu.karelhovorka.textgame.core.bo.ImmutableGameState', this);
    this.descriptor.addElement_ivxn3r$('flags', false);
    this.descriptor.addElement_ivxn3r$('currentStateId', false);
    this.descriptor.addElement_ivxn3r$('variables', false);
    this.descriptor.addElement_ivxn3r$('currentTheme', false);
    this.descriptor.addElement_ivxn3r$('visitedChapters', true);
    this.descriptor.addElement_ivxn3r$('timestamp', true);
    ImmutableGameState$$serializer_instance = this;
  }
  Object.defineProperty(ImmutableGameState$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_phjvbs$_0;
    }
  });
  ImmutableGameState$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.flags);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.currentStateId);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, new LinkedHashMapSerializer(internal.StringSerializer, internal.StringSerializer), obj.variables);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 3, internal.StringSerializer, obj.currentTheme);
    if (!equals(obj.visitedChapters, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 4))
      output.encodeSerializableElement_blecud$(this.descriptor, 4, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.visitedChapters);
    if (!equals(obj.timestamp, L0) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 5))
      output.encodeLongElement_a3zgoj$(this.descriptor, 5, obj.timestamp);
    output.endStructure_qatsm0$(this.descriptor);
  };
  ImmutableGameState$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, new LinkedHashMapSerializer(internal.StringSerializer, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, new LinkedHashMapSerializer(internal.StringSerializer, internal.StringSerializer), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 3, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 3, internal.StringSerializer, local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 4, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 4, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = input.decodeLongElement_3zr2iy$(this.descriptor, 5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return ImmutableGameState_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  ImmutableGameState$$serializer.prototype.childSerializers = function () {
    return [new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), internal.StringSerializer, new LinkedHashMapSerializer(internal.StringSerializer, internal.StringSerializer), new NullableSerializer(internal.StringSerializer), new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), internal.LongSerializer];
  };
  ImmutableGameState$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var ImmutableGameState$$serializer_instance = null;
  function ImmutableGameState$$serializer_getInstance() {
    if (ImmutableGameState$$serializer_instance === null) {
      new ImmutableGameState$$serializer();
    }
    return ImmutableGameState$$serializer_instance;
  }
  function ImmutableGameState_init(seen1, flags, currentStateId, variables, currentTheme, visitedChapters, timestamp, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(ImmutableGameState.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('flags');
    else
      $this.flags_hghble$_0 = flags;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('currentStateId');
    else
      $this.currentStateId_7oqf1o$_0 = currentStateId;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('variables');
    else
      $this.variables_islbby$_0 = variables;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('currentTheme');
    else
      $this.currentTheme_mwpsvl$_0 = currentTheme;
    if ((seen1 & 16) === 0) {
      $this.visitedChapters_c3x8th$_0 = [];
    }
     else
      $this.visitedChapters_c3x8th$_0 = visitedChapters;
    if ((seen1 & 32) === 0)
      $this.timestamp_ib6j1b$_0 = L0;
    else
      $this.timestamp_ib6j1b$_0 = timestamp;
    return $this;
  }
  ImmutableGameState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImmutableGameState',
    interfaces: [GameState]
  };
  ImmutableGameState.prototype.component1 = function () {
    return this.flags;
  };
  ImmutableGameState.prototype.component2 = function () {
    return this.currentStateId;
  };
  ImmutableGameState.prototype.component3 = function () {
    return this.variables;
  };
  ImmutableGameState.prototype.component4 = function () {
    return this.currentTheme;
  };
  ImmutableGameState.prototype.component5 = function () {
    return this.visitedChapters;
  };
  ImmutableGameState.prototype.component6 = function () {
    return this.timestamp;
  };
  ImmutableGameState.prototype.copy_6fxbot$ = function (flags, currentStateId, variables, currentTheme, visitedChapters, timestamp) {
    return new ImmutableGameState(flags === void 0 ? this.flags : flags, currentStateId === void 0 ? this.currentStateId : currentStateId, variables === void 0 ? this.variables : variables, currentTheme === void 0 ? this.currentTheme : currentTheme, visitedChapters === void 0 ? this.visitedChapters : visitedChapters, timestamp === void 0 ? this.timestamp : timestamp);
  };
  var prefix;
  function isInteractive($receiver) {
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!element.isAutoMove()) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  }
  function isNotInteractive($receiver) {
    return !isInteractive($receiver);
  }
  function isInteractive_0($receiver) {
    var any$result;
    any$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (!element.isAutoMove()) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  }
  function isNotInteractive_0($receiver) {
    return !isInteractive_0($receiver);
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
  function simpleString($receiver) {
    return $receiver.id + ' -> ' + $receiver.targetId;
  }
  function checkMultipleNonInteractive($receiver) {
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.isAutoMove())
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(simpleString(item));
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
    var nonAuto = destination_1;
    if (auto.size > 1 && nonAuto.isEmpty()) {
      throw IllegalStateException_init('V\xEDc neinteraktivn\xEDch tah\u016F najednou ' + auto + ', to je pr\u016Fser');
    }
  }
  function flagsOrEmpty($receiver) {
    if ($receiver.flags.length === 0) {
      return '';
    }
    return toList($receiver.flags).toString();
  }
  function Move(id, text, flags, flagsToRemove, categories, theme, background, variables, pause, illustration, caption, image, selfConsuming, targetId, flagsRequired, flagsDisallowing, hash) {
    if (text === void 0)
      text = null;
    if (flags === void 0) {
      flags = [];
    }
    if (flagsToRemove === void 0) {
      flagsToRemove = [];
    }
    if (categories === void 0) {
      categories = [];
    }
    if (theme === void 0)
      theme = null;
    if (background === void 0) {
      background = [];
    }
    if (variables === void 0) {
      variables = [];
    }
    if (pause === void 0)
      pause = PauseType$AUTO_getInstance();
    if (illustration === void 0)
      illustration = null;
    if (caption === void 0)
      caption = null;
    if (image === void 0)
      image = null;
    if (selfConsuming === void 0)
      selfConsuming = MoveBuilder$Companion_getInstance().DEFAULT_SELF_CONSUMING;
    if (flagsRequired === void 0) {
      flagsRequired = [];
    }
    if (flagsDisallowing === void 0) {
      flagsDisallowing = [];
    }
    if (hash === void 0)
      hash = null;
    this.id = id;
    this.text = text;
    this.flags = flags;
    this.flagsToRemove = flagsToRemove;
    this.categories = categories;
    this.theme = theme;
    this.background = background;
    this.variables = variables;
    this.pause = pause;
    this.illustration = illustration;
    this.caption = caption;
    this.image = image;
    this.selfConsuming = selfConsuming;
    this.targetId = targetId;
    this.flagsRequired = flagsRequired;
    this.flagsDisallowing = flagsDisallowing;
    this.hash = hash;
  }
  Move.prototype.usePause = function () {
    var tmp$;
    switch (this.pause.name) {
      case 'AUTO':
        tmp$ = this.hasContent();
        break;
      case 'NO':
        tmp$ = false;
        break;
      case 'YES':
        tmp$ = true;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  Move.prototype.isAutoMove = function () {
    return this.caption == null && this.image == null && this.hash == null;
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
    return this.text;
  };
  Move.prototype.component3 = function () {
    return this.flags;
  };
  Move.prototype.component4 = function () {
    return this.flagsToRemove;
  };
  Move.prototype.component5 = function () {
    return this.categories;
  };
  Move.prototype.component6 = function () {
    return this.theme;
  };
  Move.prototype.component7 = function () {
    return this.background;
  };
  Move.prototype.component8 = function () {
    return this.variables;
  };
  Move.prototype.component9 = function () {
    return this.pause;
  };
  Move.prototype.component10 = function () {
    return this.illustration;
  };
  Move.prototype.component11 = function () {
    return this.caption;
  };
  Move.prototype.component12 = function () {
    return this.image;
  };
  Move.prototype.component13 = function () {
    return this.selfConsuming;
  };
  Move.prototype.component14 = function () {
    return this.targetId;
  };
  Move.prototype.component15 = function () {
    return this.flagsRequired;
  };
  Move.prototype.component16 = function () {
    return this.flagsDisallowing;
  };
  Move.prototype.component17 = function () {
    return this.hash;
  };
  Move.prototype.copy_lorffr$ = function (id, text, flags, flagsToRemove, categories, theme, background, variables, pause, illustration, caption, image, selfConsuming, targetId, flagsRequired, flagsDisallowing, hash) {
    return new Move(id === void 0 ? this.id : id, text === void 0 ? this.text : text, flags === void 0 ? this.flags : flags, flagsToRemove === void 0 ? this.flagsToRemove : flagsToRemove, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme, background === void 0 ? this.background : background, variables === void 0 ? this.variables : variables, pause === void 0 ? this.pause : pause, illustration === void 0 ? this.illustration : illustration, caption === void 0 ? this.caption : caption, image === void 0 ? this.image : image, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, targetId === void 0 ? this.targetId : targetId, flagsRequired === void 0 ? this.flagsRequired : flagsRequired, flagsDisallowing === void 0 ? this.flagsDisallowing : flagsDisallowing, hash === void 0 ? this.hash : hash);
  };
  Move.prototype.toString = function () {
    return 'Move(id=' + Kotlin.toString(this.id) + (', text=' + Kotlin.toString(this.text)) + (', flags=' + Kotlin.toString(this.flags)) + (', flagsToRemove=' + Kotlin.toString(this.flagsToRemove)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + (', background=' + Kotlin.toString(this.background)) + (', variables=' + Kotlin.toString(this.variables)) + (', pause=' + Kotlin.toString(this.pause)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', caption=' + Kotlin.toString(this.caption)) + (', image=' + Kotlin.toString(this.image)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', targetId=' + Kotlin.toString(this.targetId)) + (', flagsRequired=' + Kotlin.toString(this.flagsRequired)) + (', flagsDisallowing=' + Kotlin.toString(this.flagsDisallowing)) + (', hash=' + Kotlin.toString(this.hash)) + ')';
  };
  Move.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagsToRemove) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    result = result * 31 + Kotlin.hashCode(this.background) | 0;
    result = result * 31 + Kotlin.hashCode(this.variables) | 0;
    result = result * 31 + Kotlin.hashCode(this.pause) | 0;
    result = result * 31 + Kotlin.hashCode(this.illustration) | 0;
    result = result * 31 + Kotlin.hashCode(this.caption) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.selfConsuming) | 0;
    result = result * 31 + Kotlin.hashCode(this.targetId) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagsRequired) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagsDisallowing) | 0;
    result = result * 31 + Kotlin.hashCode(this.hash) | 0;
    return result;
  };
  Move.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.flagsToRemove, other.flagsToRemove) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.background, other.background) && Kotlin.equals(this.variables, other.variables) && Kotlin.equals(this.pause, other.pause) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.caption, other.caption) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.targetId, other.targetId) && Kotlin.equals(this.flagsRequired, other.flagsRequired) && Kotlin.equals(this.flagsDisallowing, other.flagsDisallowing) && Kotlin.equals(this.hash, other.hash)))));
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
  function PauseFromType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PauseFromType_initFields() {
    PauseFromType_initFields = function () {
    };
    PauseFromType$CONTINUE_STATE_instance = new PauseFromType('CONTINUE_STATE', 0);
    PauseFromType$CONTINUE_MOVE_instance = new PauseFromType('CONTINUE_MOVE', 1);
    PauseFromType$MOVES_instance = new PauseFromType('MOVES', 2);
  }
  var PauseFromType$CONTINUE_STATE_instance;
  function PauseFromType$CONTINUE_STATE_getInstance() {
    PauseFromType_initFields();
    return PauseFromType$CONTINUE_STATE_instance;
  }
  var PauseFromType$CONTINUE_MOVE_instance;
  function PauseFromType$CONTINUE_MOVE_getInstance() {
    PauseFromType_initFields();
    return PauseFromType$CONTINUE_MOVE_instance;
  }
  var PauseFromType$MOVES_instance;
  function PauseFromType$MOVES_getInstance() {
    PauseFromType_initFields();
    return PauseFromType$MOVES_instance;
  }
  PauseFromType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PauseFromType',
    interfaces: [Enum]
  };
  function PauseFromType$values() {
    return [PauseFromType$CONTINUE_STATE_getInstance(), PauseFromType$CONTINUE_MOVE_getInstance(), PauseFromType$MOVES_getInstance()];
  }
  PauseFromType.values = PauseFromType$values;
  function PauseFromType$valueOf(name) {
    switch (name) {
      case 'CONTINUE_STATE':
        return PauseFromType$CONTINUE_STATE_getInstance();
      case 'CONTINUE_MOVE':
        return PauseFromType$CONTINUE_MOVE_getInstance();
      case 'MOVES':
        return PauseFromType$MOVES_getInstance();
      default:throwISE('No enum constant eu.karelhovorka.textgame.core.bo.PauseFromType.' + name);
    }
  }
  PauseFromType.valueOf_61zpoe$ = PauseFromType$valueOf;
  function PauseType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PauseType_initFields() {
    PauseType_initFields = function () {
    };
    PauseType$AUTO_instance = new PauseType('AUTO', 0);
    PauseType$YES_instance = new PauseType('YES', 1);
    PauseType$NO_instance = new PauseType('NO', 2);
  }
  var PauseType$AUTO_instance;
  function PauseType$AUTO_getInstance() {
    PauseType_initFields();
    return PauseType$AUTO_instance;
  }
  var PauseType$YES_instance;
  function PauseType$YES_getInstance() {
    PauseType_initFields();
    return PauseType$YES_instance;
  }
  var PauseType$NO_instance;
  function PauseType$NO_getInstance() {
    PauseType_initFields();
    return PauseType$NO_instance;
  }
  PauseType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PauseType',
    interfaces: [Enum]
  };
  function PauseType$values() {
    return [PauseType$AUTO_getInstance(), PauseType$YES_getInstance(), PauseType$NO_getInstance()];
  }
  PauseType.values = PauseType$values;
  function PauseType$valueOf(name) {
    switch (name) {
      case 'AUTO':
        return PauseType$AUTO_getInstance();
      case 'YES':
        return PauseType$YES_getInstance();
      case 'NO':
        return PauseType$NO_getInstance();
      default:throwISE('No enum constant eu.karelhovorka.textgame.core.bo.PauseType.' + name);
    }
  }
  PauseType.valueOf_61zpoe$ = PauseType$valueOf;
  function flagsOrEmpty_0($receiver) {
    if ($receiver.flags.length === 0) {
      return '';
    }
    return toList($receiver.flags).toString();
  }
  function State(id, text, flags, flagsToRemove, theme, background, variables, pause, illustration, chapterId, moves, categories, endType, minigame, checkpoint, selection) {
    if (text === void 0)
      text = null;
    if (flags === void 0) {
      flags = [];
    }
    if (flagsToRemove === void 0) {
      flagsToRemove = [];
    }
    if (theme === void 0)
      theme = null;
    if (background === void 0) {
      background = [];
    }
    if (variables === void 0) {
      variables = [];
    }
    if (pause === void 0)
      pause = PauseType$AUTO_getInstance();
    if (illustration === void 0)
      illustration = null;
    if (moves === void 0) {
      moves = [];
    }
    if (categories === void 0) {
      categories = [];
    }
    if (endType === void 0)
      endType = EndType$NONE_getInstance();
    if (minigame === void 0)
      minigame = null;
    if (checkpoint === void 0)
      checkpoint = null;
    if (selection === void 0)
      selection = Selection$NONE_getInstance();
    this.id = id;
    this.text = text;
    this.flags = flags;
    this.flagsToRemove = flagsToRemove;
    this.theme = theme;
    this.background = background;
    this.variables = variables;
    this.pause = pause;
    this.illustration = illustration;
    this.chapterId = chapterId;
    this.moves = moves;
    this.categories = categories;
    this.endType = endType;
    this.minigame = minigame;
    this.checkpoint = checkpoint;
    this.selection = selection;
  }
  State.prototype.withoutMoves = function () {
    return this.copy_t1tww7$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, []);
  };
  State.prototype.hasContent = function () {
    return !(this.text == null && this.illustration == null && this.background == null);
  };
  State.prototype.usePause_tfme49$ = function (filteredMoves) {
    if (filteredMoves === void 0)
      filteredMoves = this.moves;
    var tmp$;
    switch (this.pause.name) {
      case 'AUTO':
        tmp$ = (this.hasContent() && isNotInteractive_0(filteredMoves));
        break;
      case 'NO':
        tmp$ = false;
        break;
      case 'YES':
        tmp$ = true;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  Object.defineProperty(State.prototype, 'verbose', {
    get: function () {
      return this.chapterId + ' - ' + this.id;
    }
  });
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
    return this.flags;
  };
  State.prototype.component4 = function () {
    return this.flagsToRemove;
  };
  State.prototype.component5 = function () {
    return this.theme;
  };
  State.prototype.component6 = function () {
    return this.background;
  };
  State.prototype.component7 = function () {
    return this.variables;
  };
  State.prototype.component8 = function () {
    return this.pause;
  };
  State.prototype.component9 = function () {
    return this.illustration;
  };
  State.prototype.component10 = function () {
    return this.chapterId;
  };
  State.prototype.component11 = function () {
    return this.moves;
  };
  State.prototype.component12 = function () {
    return this.categories;
  };
  State.prototype.component13 = function () {
    return this.endType;
  };
  State.prototype.component14 = function () {
    return this.minigame;
  };
  State.prototype.component15 = function () {
    return this.checkpoint;
  };
  State.prototype.component16 = function () {
    return this.selection;
  };
  State.prototype.copy_t1tww7$ = function (id, text, flags, flagsToRemove, theme, background, variables, pause, illustration, chapterId, moves, categories, endType, minigame, checkpoint, selection) {
    return new State(id === void 0 ? this.id : id, text === void 0 ? this.text : text, flags === void 0 ? this.flags : flags, flagsToRemove === void 0 ? this.flagsToRemove : flagsToRemove, theme === void 0 ? this.theme : theme, background === void 0 ? this.background : background, variables === void 0 ? this.variables : variables, pause === void 0 ? this.pause : pause, illustration === void 0 ? this.illustration : illustration, chapterId === void 0 ? this.chapterId : chapterId, moves === void 0 ? this.moves : moves, categories === void 0 ? this.categories : categories, endType === void 0 ? this.endType : endType, minigame === void 0 ? this.minigame : minigame, checkpoint === void 0 ? this.checkpoint : checkpoint, selection === void 0 ? this.selection : selection);
  };
  State.prototype.toString = function () {
    return 'State(id=' + Kotlin.toString(this.id) + (', text=' + Kotlin.toString(this.text)) + (', flags=' + Kotlin.toString(this.flags)) + (', flagsToRemove=' + Kotlin.toString(this.flagsToRemove)) + (', theme=' + Kotlin.toString(this.theme)) + (', background=' + Kotlin.toString(this.background)) + (', variables=' + Kotlin.toString(this.variables)) + (', pause=' + Kotlin.toString(this.pause)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', chapterId=' + Kotlin.toString(this.chapterId)) + (', moves=' + Kotlin.toString(this.moves)) + (', categories=' + Kotlin.toString(this.categories)) + (', endType=' + Kotlin.toString(this.endType)) + (', minigame=' + Kotlin.toString(this.minigame)) + (', checkpoint=' + Kotlin.toString(this.checkpoint)) + (', selection=' + Kotlin.toString(this.selection)) + ')';
  };
  State.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagsToRemove) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    result = result * 31 + Kotlin.hashCode(this.background) | 0;
    result = result * 31 + Kotlin.hashCode(this.variables) | 0;
    result = result * 31 + Kotlin.hashCode(this.pause) | 0;
    result = result * 31 + Kotlin.hashCode(this.illustration) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapterId) | 0;
    result = result * 31 + Kotlin.hashCode(this.moves) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.endType) | 0;
    result = result * 31 + Kotlin.hashCode(this.minigame) | 0;
    result = result * 31 + Kotlin.hashCode(this.checkpoint) | 0;
    result = result * 31 + Kotlin.hashCode(this.selection) | 0;
    return result;
  };
  State.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.flagsToRemove, other.flagsToRemove) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.background, other.background) && Kotlin.equals(this.variables, other.variables) && Kotlin.equals(this.pause, other.pause) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.moves, other.moves) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.endType, other.endType) && Kotlin.equals(this.minigame, other.minigame) && Kotlin.equals(this.checkpoint, other.checkpoint) && Kotlin.equals(this.selection, other.selection)))));
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
  function pause(line, index) {
    var tmp$;
    var pause = parameterValue(line);
    switch (pause) {
      case 'ano':
        tmp$ = PauseType$YES_getInstance();
        break;
      case 'ne':
        tmp$ = PauseType$NO_getInstance();
        break;
      case 'auto':
        tmp$ = PauseType$AUTO_getInstance();
        break;
      default:throw new IncorrectLineException(index, line, 'Invalid pauseType: ' + pause);
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
      msg = 'Neo\u010Dek\xE1van\xFD parametr ' + line + ', (' + index + ')';
    if (GameConverter$Companion_getInstance().PARAMETER.matches_6bul2c$(line)) {
      throw new IncorrectLineException(index, line, msg);
    }
  }
  function moveId($receiver) {
    var id = GameConverter$Companion_getInstance().HRANA.replace_x2uqeu$($receiver, '$2');
    if (isBlank(id)) {
      return null;
    }
    if (MOVE_ID_REGEX.matches_6bul2c$(id)) {
      return id;
    }
    return null;
  }
  function MoveType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MoveType_initFields() {
    MoveType_initFields = function () {
    };
    MoveType$LEFT_ARROW_instance = new MoveType('LEFT_ARROW', 0);
    MoveType$RIGHT_ARROW_instance = new MoveType('RIGHT_ARROW', 1);
    MoveType$MOVE_instance = new MoveType('MOVE', 2);
  }
  var MoveType$LEFT_ARROW_instance;
  function MoveType$LEFT_ARROW_getInstance() {
    MoveType_initFields();
    return MoveType$LEFT_ARROW_instance;
  }
  var MoveType$RIGHT_ARROW_instance;
  function MoveType$RIGHT_ARROW_getInstance() {
    MoveType_initFields();
    return MoveType$RIGHT_ARROW_instance;
  }
  var MoveType$MOVE_instance;
  function MoveType$MOVE_getInstance() {
    MoveType_initFields();
    return MoveType$MOVE_instance;
  }
  MoveType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveType',
    interfaces: [Enum]
  };
  function MoveType$values() {
    return [MoveType$LEFT_ARROW_getInstance(), MoveType$RIGHT_ARROW_getInstance(), MoveType$MOVE_getInstance()];
  }
  MoveType.values = MoveType$values;
  function MoveType$valueOf(name) {
    switch (name) {
      case 'LEFT_ARROW':
        return MoveType$LEFT_ARROW_getInstance();
      case 'RIGHT_ARROW':
        return MoveType$RIGHT_ARROW_getInstance();
      case 'MOVE':
        return MoveType$MOVE_getInstance();
      default:throwISE('No enum constant eu.karelhovorka.textgame.core.builder.MoveType.' + name);
    }
  }
  MoveType.valueOf_61zpoe$ = MoveType$valueOf;
  function moveType($receiver) {
    var tmp$;
    var type = GameConverter$Companion_getInstance().HRANA.replace_x2uqeu$($receiver, '$1');
    switch (type) {
      case '->':
        tmp$ = MoveType$RIGHT_ARROW_getInstance();
        break;
      case '<-':
        tmp$ = MoveType$LEFT_ARROW_getInstance();
        break;
      case 'hrana=':
        tmp$ = MoveType$MOVE_getInstance();
        break;
      default:throw IllegalStateException_init(('Unknown move type ' + type).toString());
    }
    return tmp$;
  }
  function stateId($receiver) {
    var id = GameConverter$Companion_getInstance().SUPERUZEL_SEPARATOR.replace_x2uqeu$($receiver, '$2');
    if (isBlank(id)) {
      return null;
    }
    return id;
  }
  function parameterValue($receiver) {
    if (startsWith($receiver, '->')) {
      return fixHtmlEntities(Regex_init('(->)(.*)').replace_x2uqeu$($receiver, '$2'));
    }
     else if (equals($receiver, '<-')) {
      return '';
    }
    checkParameter($receiver);
    return fixHtmlEntities(GameConverter$Companion_getInstance().PARAMETER.replace_x2uqeu$($receiver, '$2'));
  }
  function parameterArray($receiver, delimiter) {
    if (delimiter === void 0)
      delimiter = ',';
    checkParameter($receiver);
    var result = parameterValue($receiver);
    if (isBlank(result)) {
      return [];
    }
    var $receiver_0 = split(result, [delimiter]);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(trim(Kotlin.isCharSequence(tmp$_0 = item) ? tmp$_0 : throwCCE()).toString());
    }
    var destination_0 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (!isBlank(element))
        destination_0.add_11rb$(element);
    }
    return copyToArray(destination_0);
  }
  function fixHtmlEntities($receiver) {
    return replace(replace($receiver, '&gt;', '>'), '&lt;', '<');
  }
  function parse($receiver, text) {
    var tmp$;
    var index = 0;
    tmp$ = split(fixBOM(text), ['\n']).iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      try {
        var tmp$_0;
        var fixedLine = replace(replace(trim(Kotlin.isCharSequence(tmp$_0 = line) ? tmp$_0 : throwCCE()).toString(), '-&gt;', '->'), '&lt;-', '<-');
        $receiver.parseLine_bm4lxs$(fixedLine, index);
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
  }
  function parameterVariable($receiver) {
    return Variable$Companion_getInstance().parse_61zpoe$($receiver);
  }
  function parameterBoolean($receiver) {
    return equals(parameterValue($receiver).toLowerCase(), 'ano');
  }
  function addPrefixIfNotNull($receiver, filename) {
    var tmp$;
    if (filename == null) {
      return null;
    }
    if (($receiver != null ? $receiver.filePrefix : null) == null) {
      return filename;
    }
    if ((tmp$ = $receiver.filePrefix) != null) {
      var tmp$_0;
      if (endsWith(tmp$, '/')) {
        tmp$_0 = tmp$ + toString(filename);
      }
       else {
        tmp$_0 = tmp$ + '/' + toString(filename);
      }
      return tmp$_0;
    }
    return null;
  }
  function addPrefixIfNotNull_0($receiver, filenames) {
    var tmp$;
    if (filenames.length === 0) {
      return [];
    }
    if (($receiver != null ? $receiver.filePrefix : null) == null) {
      return filenames;
    }
    if ((tmp$ = $receiver.filePrefix) != null) {
      var destination = ArrayList_init_0(filenames.length);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== filenames.length; ++tmp$_0) {
        var item = filenames[tmp$_0];
        var tmp$_1 = destination.add_11rb$;
        var transform$result;
        if (endsWith(tmp$, '/')) {
          transform$result = tmp$ + item;
        }
         else {
          transform$result = tmp$ + '/' + item;
        }
        tmp$_1.call(destination, transform$result);
      }
      return copyToArray(destination);
    }
    return [];
  }
  function ChapterBuilder(id, name, categories, theme, flagGroups, states, testDefaultTheme, filePrefix) {
    ChapterBuilder$Companion_getInstance();
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
    if (states === void 0) {
      states = ArrayList_init();
    }
    if (testDefaultTheme === void 0)
      testDefaultTheme = null;
    if (filePrefix === void 0)
      filePrefix = null;
    this.id = id;
    this.name = name;
    this.categories = categories;
    this.theme = theme;
    this.flagGroups = flagGroups;
    this.states = states;
    this.testDefaultTheme = testDefaultTheme;
    this.filePrefix = filePrefix;
  }
  ChapterBuilder.prototype.parseLine_bm4lxs$ = function (line, index) {
    var tmp$;
    if (ChapterBuilder$Companion_getInstance().IMAGE_PREFIX.matches_6bul2c$(line))
      this.filePrefix = parameterValue(line);
    else {
      if (ChapterBuilder$Companion_getInstance().FLAG_GROUP.matches_6bul2c$(line)) {
        var groupName = ChapterBuilder$Companion_getInstance().FLAG_GROUP.replace_x2uqeu$(line, '$1');
        var groupType = ChapterBuilder$Companion_getInstance().FLAG_GROUP.replace_x2uqeu$(line, '$2');
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
        var $receiver = split(ChapterBuilder$Companion_getInstance().FLAG_GROUP.replace_x2uqeu$(line, '$3'), [',']);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
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
       else {
        if (GameConverter$Companion_getInstance().KATEGORIE.matches_6bul2c$(line))
          this.categories = parameterArray(line);
        else {
          if (GameConverter$Companion_getInstance().TEMA.matches_6bul2c$(line)) {
            this.theme = GameConverter$Companion_getInstance().TEMA.replace_x2uqeu$(line, '$1');
          }
           else {
            if (ChapterBuilder$Companion_getInstance().TEST_DEFAULT_TEMA.matches_6bul2c$(line)) {
              this.testDefaultTheme = ChapterBuilder$Companion_getInstance().TEST_DEFAULT_TEMA.replace_x2uqeu$(line, '$1');
            }
             else {
              errorIfParameter(line, index);
              this.name_61zpoe$(line);
            }
          }
        }
      }
    }
  };
  ChapterBuilder.prototype.build = function () {
    var tmp$;
    return new Chapter(ensureNotNull(this.id), (tmp$ = this.name) != null ? tmp$ : '', this.categories, this.theme, copyToArray(this.flagGroups), copyToArray(this.states), this.testDefaultTheme, this.filePrefix);
  };
  ChapterBuilder.prototype.name_61zpoe$ = function (value) {
    this.name = value;
  };
  ChapterBuilder.prototype.addStates_y5x7bk$ = function (states) {
    this.states.addAll_brywnq$(states);
  };
  ChapterBuilder.prototype.addState_ktq7vf$ = function (state) {
    this.states.add_11rb$(state);
  };
  function ChapterBuilder$Companion() {
    ChapterBuilder$Companion_instance = this;
    this.IMAGE_PREFIX = Regex_init('obrazky_prefix=(.*)');
    this.TEST_DEFAULT_TEMA = Regex_init('test_zakladni_tema=([a-zA-Z\\-0-9_{}]+)');
    this.FLAG_GROUP = Regex_init('skupina\\(([0-9A-Za-z_-]*),(prave_jeden|aspon_jeden)\\)=(.*)');
  }
  ChapterBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ChapterBuilder$Companion_instance = null;
  function ChapterBuilder$Companion_getInstance() {
    if (ChapterBuilder$Companion_instance === null) {
      new ChapterBuilder$Companion();
    }
    return ChapterBuilder$Companion_instance;
  }
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
  ChapterBuilder.prototype.component6 = function () {
    return this.states;
  };
  ChapterBuilder.prototype.component7 = function () {
    return this.testDefaultTheme;
  };
  ChapterBuilder.prototype.component8 = function () {
    return this.filePrefix;
  };
  ChapterBuilder.prototype.copy_cajem7$ = function (id, name, categories, theme, flagGroups, states, testDefaultTheme, filePrefix) {
    return new ChapterBuilder(id === void 0 ? this.id : id, name === void 0 ? this.name : name, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme, flagGroups === void 0 ? this.flagGroups : flagGroups, states === void 0 ? this.states : states, testDefaultTheme === void 0 ? this.testDefaultTheme : testDefaultTheme, filePrefix === void 0 ? this.filePrefix : filePrefix);
  };
  ChapterBuilder.prototype.toString = function () {
    return 'ChapterBuilder(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + (', flagGroups=' + Kotlin.toString(this.flagGroups)) + (', states=' + Kotlin.toString(this.states)) + (', testDefaultTheme=' + Kotlin.toString(this.testDefaultTheme)) + (', filePrefix=' + Kotlin.toString(this.filePrefix)) + ')';
  };
  ChapterBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagGroups) | 0;
    result = result * 31 + Kotlin.hashCode(this.states) | 0;
    result = result * 31 + Kotlin.hashCode(this.testDefaultTheme) | 0;
    result = result * 31 + Kotlin.hashCode(this.filePrefix) | 0;
    return result;
  };
  ChapterBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.flagGroups, other.flagGroups) && Kotlin.equals(this.states, other.states) && Kotlin.equals(this.testDefaultTheme, other.testDefaultTheme) && Kotlin.equals(this.filePrefix, other.filePrefix)))));
  };
  function CharSequenceBuilder() {
    this.strings = ArrayList_init();
    this.text = null;
  }
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
    var stateBuilder = new StateBuilder(this.gameConverterContext, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, []);
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
    parse(this, text);
    if (this.currentState_0 != null) {
      this.buildState_pdl1vj$();
    }
    if (this.currentMove_0 != null) {
      this.buildMove();
    }
    if (this.currentSuperState_0 != null) {
      this.buildSuperState_pdl1vj$();
    }
    if (this.currentChapter_0 != null) {
      this.buildChapter();
    }
    return this.game_0.build();
  };
  GameConverter.prototype.parseLine_bm4lxs$ = function (line, index) {
    if (!startsWith(line, '#'))
      if (!equals(line, '') && !equals(line, GameConverter$Companion_getInstance().SEPARATOR)) {
        if (GameConverter$Companion_getInstance().SUPERUZEL.matches_6bul2c$(line)) {
          var id = parameterValue(line);
          this.finishBuild_pdl1vj$(id);
          if (this.game_0.startId == null) {
            this.game_0.startId = id;
          }
          this.converterContext.addStateId_bm4lxs$(id, index);
          this.currentSuperState_0 = new SuperStateBuilder(this.converterContext, id, void 0, void 0, void 0, void 0, void 0, void 0, ensureNotNull(this.currentChapter_0).id);
          this.lineParser = ensureNotNull(this.currentSuperState_0);
        }
         else {
          if (GameConverter$Companion_getInstance().KAPITOLA.matches_6bul2c$(line)) {
            this.finishBuild_pdl1vj$();
            this.buildChapter();
            var chapterId = parameterValue(line);
            this.currentChapter_0 = new ChapterBuilder(chapterId);
            this.lineParser = ensureNotNull(this.currentChapter_0);
          }
           else {
            if (GameConverter$Companion_getInstance().UZEL.matches_6bul2c$(line)) {
              var stateId = parameterValue(line);
              this.finishBuild_pdl1vj$(stateId);
              if (this.game_0.startId == null) {
                this.game_0.startId = stateId;
              }
              this.converterContext.addStateId_bm4lxs$(stateId, index);
              this.currentState_0 = new StateBuilder(this.converterContext, stateId, void 0, void 0, void 0, void 0, void 0, this.currentChapter_0);
              this.lineParser = ensureNotNull(this.currentState_0);
            }
             else {
              this.lineParser.parseLine_bm4lxs$(line, index);
            }
          }
        }
      }
  };
  GameConverter.prototype.finishBuild_pdl1vj$ = function (nextId) {
    if (nextId === void 0)
      nextId = null;
    if (Kotlin.isType(this.lineParser, StateBuilder)) {
      this.buildState_pdl1vj$(nextId);
    }
    if (Kotlin.isType(this.lineParser, SuperStateBuilder)) {
      this.buildSuperState_pdl1vj$(nextId);
    }
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
      this.currentChapter_0 = null;
    }
  };
  GameConverter.prototype.buildSuperState_pdl1vj$ = function (nextId) {
    if (nextId === void 0)
      nextId = null;
    if (this.currentSuperState_0 != null) {
      var states = ensureNotNull(this.currentSuperState_0).build_pdl1vj$(nextId);
      this.game_0.addStates_gnd9sg$(states);
      ensureNotNull(this.currentChapter_0).addStates_y5x7bk$(states);
      this.currentSuperState_0 = null;
      if (this.game_0.startId == null) {
        this.game_0.startId = states.get_za3lpa$(0).id;
      }
    }
  };
  GameConverter.prototype.buildState_pdl1vj$ = function (nextId) {
    if (nextId === void 0)
      nextId = null;
    if (this.currentState_0 != null) {
      var state = ensureNotNull(this.currentState_0).build_pdl1vj$(nextId);
      this.game_0.addState_ktq7vf$(state);
      ensureNotNull(this.currentChapter_0).addState_ktq7vf$(state);
      this.currentState_0 = null;
      if (this.game_0.startId == null) {
        this.game_0.startId = ensureNotNull(this.currentState_0).id;
      }
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
    this.UZEL_VSECHNY_START = Regex_init('(uzel=|superuzel=|-)(u[0-9A-Za-z_]*)?');
    this.HRANA = Regex_init('(hrana=|->|<-)(h[0-9A-Za-z_]*|u[0-9A-Za-z_]*)?');
    this.KAPITOLA = Regex_init('kapitola=(.*)');
    this.ILUSTRACE = Regex_init('ilustrace=(.*)');
    this.POZADI = Regex_init('pozadi=(.*)');
    this.KATEGORIE = Regex_init('kategorie=(.*)');
    this.KONEC = Regex_init('konec=(prohra|nedokonceno)');
    this.TEMA = Regex_init('tema=([a-zA-Z\\-0-9_{}]+)');
    this.SUPERUZEL = Regex_init('superuzel=(u[a-zA-Z\\-0-9_]+)');
    this.SUPERUZEL_SEPARATOR = Regex_init('(-)(u[a-zA-Z\\-0-9_]+)?');
    this.PRIZNAK = Regex_init('priznak=(.*)');
    this.ODSTRANIT_PRIZNAK = Regex_init('odstranit_priznak=(.*)');
    this.POZIRACI = Regex_init('poziraci=(ano|ne)');
    this.CIL = Regex_init('cil=(.*)');
    this.PROMENNA = Regex_init('promenna\\(([a-z_\\-]+)\\)([+\\-]?=)(.*)');
    this.PAUZA = Regex_init('pauza=(ano|ne|auto)');
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
  function MoveBuilder(gameConverterContext, id, caption, image, illustration, text, selfConsuming, targetId, flags, flagsToRemove, flagsRequired, flagsDisallowing, categories, theme, variables, background, pause, hash, chapter) {
    MoveBuilder$Companion_getInstance();
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
      selfConsuming = MoveBuilder$Companion_getInstance().DEFAULT_SELF_CONSUMING;
    if (targetId === void 0)
      targetId = null;
    if (flags === void 0) {
      flags = ArrayList_init();
    }
    if (flagsToRemove === void 0) {
      flagsToRemove = ArrayList_init();
    }
    if (flagsRequired === void 0) {
      flagsRequired = ArrayList_init();
    }
    if (flagsDisallowing === void 0) {
      flagsDisallowing = ArrayList_init();
    }
    if (categories === void 0) {
      categories = [];
    }
    if (theme === void 0)
      theme = null;
    if (variables === void 0) {
      variables = ArrayList_init();
    }
    if (background === void 0) {
      background = [];
    }
    if (pause === void 0)
      pause = PauseType$AUTO_getInstance();
    if (hash === void 0)
      hash = null;
    if (chapter === void 0)
      chapter = null;
    this.gameConverterContext = gameConverterContext;
    this.id = id;
    this.caption = caption;
    this.image = image;
    this.illustration = illustration;
    this.text = text;
    this.selfConsuming = selfConsuming;
    this.targetId = targetId;
    this.flags = flags;
    this.flagsToRemove = flagsToRemove;
    this.flagsRequired = flagsRequired;
    this.flagsDisallowing = flagsDisallowing;
    this.categories = categories;
    this.theme = theme;
    this.variables = variables;
    this.background = background;
    this.pause = pause;
    this.hash = hash;
    this.chapter = chapter;
  }
  MoveBuilder.prototype.parseLine_bm4lxs$ = function (line, index) {
    if (!equals(line, GameConverter$Companion_getInstance().SEPARATOR)) {
      if (GameConverter$Companion_getInstance().PAUZA.matches_6bul2c$(line))
        this.pause = pause(line, index);
      else {
        if (GameConverter$Companion_getInstance().PRIZNAK.matches_6bul2c$(line))
          this.flags = toMutableList(parameterArray(line));
        else {
          if (GameConverter$Companion_getInstance().ODSTRANIT_PRIZNAK.matches_6bul2c$(line))
            this.flagsToRemove = toMutableList(parameterArray(line));
          else {
            if (GameConverter$Companion_getInstance().PROMENNA.matches_6bul2c$(line))
              this.variables.add_11rb$(parameterVariable(line));
            else {
              if (GameConverter$Companion_getInstance().TEMA.matches_6bul2c$(line))
                this.theme = parameterValue(line);
              else {
                if (GameConverter$Companion_getInstance().POZIRACI.matches_6bul2c$(line))
                  this.selfConsuming = parameterBoolean(line);
                else {
                  if (GameConverter$Companion_getInstance().KATEGORIE.matches_6bul2c$(line))
                    this.categories = parameterArray(line);
                  else {
                    if (GameConverter$Companion_getInstance().ILUSTRACE.matches_6bul2c$(line))
                      this.illustration = parameterValue(line);
                    else {
                      if (MoveBuilder$Companion_getInstance().OBRAZEK.matches_6bul2c$(line))
                        this.image = parameterValue(line);
                      else {
                        if (MoveBuilder$Companion_getInstance().VYLOUCENA.matches_6bul2c$(line))
                          addAll(this.flagsDisallowing, parameterArray(line));
                        else {
                          if (MoveBuilder$Companion_getInstance().PODMINENA.matches_6bul2c$(line))
                            addAll(this.flagsRequired, parameterArray(line));
                          else {
                            if (MoveBuilder$Companion_getInstance().POPIS.matches_6bul2c$(line))
                              this.caption = parameterValue(line);
                            else {
                              if (GameConverter$Companion_getInstance().POZADI.matches_6bul2c$(line))
                                this.background = parameterArray(line);
                              else {
                                if (MoveBuilder$Companion_getInstance().HASH.matches_6bul2c$(line))
                                  this.hash = parameterValue(line);
                                else {
                                  if (GameConverter$Companion_getInstance().CIL.matches_6bul2c$(line))
                                    this.targetId = parameterValue(line);
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
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  MoveBuilder.prototype.build = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14;
    if (this.id == null) {
      throw IllegalArgumentException_init('Id not found for move!');
    }
    if (this.targetId == null) {
      throw IllegalArgumentException_init('Target it not found for move ' + toString(this.id) + '!');
    }
    tmp$ = ensureNotNull(this.id);
    tmp$_0 = this.caption;
    tmp$_1 = addPrefixIfNotNull(this.chapter, this.image);
    tmp$_2 = addPrefixIfNotNull(this.chapter, this.illustration);
    var tmp$_15;
    if ((tmp$_3 = this.text) != null) {
      var tmp$_16;
      tmp$_15 = trim(Kotlin.isCharSequence(tmp$_16 = tmp$_3) ? tmp$_16 : throwCCE()).toString();
    }
     else
      tmp$_15 = null;
    tmp$_4 = tmp$_15;
    tmp$_5 = this.selfConsuming;
    tmp$_6 = ensureNotNull(this.targetId);
    tmp$_7 = copyToArray(this.flags);
    tmp$_8 = copyToArray(this.flagsToRemove);
    tmp$_9 = copyToArray(this.flagsRequired);
    tmp$_10 = copyToArray(this.flagsDisallowing);
    tmp$_11 = this.categories;
    tmp$_12 = this.theme;
    tmp$_13 = copyToArray(this.variables);
    return new Move(tmp$, tmp$_4, tmp$_7, tmp$_8, tmp$_11, tmp$_12, addPrefixIfNotNull_0(this.chapter, this.background), tmp$_13, this.pause, tmp$_2, tmp$_0, tmp$_1, tmp$_5, tmp$_6, tmp$_9, tmp$_10, (tmp$_14 = this.hash) != null ? tmp$_14.toUpperCase() : null);
  };
  MoveBuilder.prototype.appendText_61zpoe$ = function (value) {
    if (this.text == null) {
      this.text = value + '\n';
    }
     else {
      this.text = this.text + (value + '\n');
    }
  };
  Object.defineProperty(MoveBuilder.prototype, 'verbose', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      var caption = (tmp$_1 = (tmp$_0 = (tmp$ = this.id) != null ? tmp$ : this.caption) != null ? tmp$_0 : this.image) != null ? tmp$_1 : '';
      return caption + ' -> ' + toString(this.targetId);
    }
  });
  function MoveBuilder$Companion() {
    MoveBuilder$Companion_instance = this;
    this.DEFAULT_SELF_CONSUMING = true;
    this.OBRAZEK = Regex_init('obrazek=(.*)');
    this.POPIS = Regex_init('popis=(.*)');
    this.HASH = Regex_init('hash=(.*)');
    this.VYLOUCENA = Regex_init('vyloucena=(.*)');
    this.PODMINENA = Regex_init('podminena=(.*)');
  }
  MoveBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MoveBuilder$Companion_instance = null;
  function MoveBuilder$Companion_getInstance() {
    if (MoveBuilder$Companion_instance === null) {
      new MoveBuilder$Companion();
    }
    return MoveBuilder$Companion_instance;
  }
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
    return this.flagsToRemove;
  };
  MoveBuilder.prototype.component11 = function () {
    return this.flagsRequired;
  };
  MoveBuilder.prototype.component12 = function () {
    return this.flagsDisallowing;
  };
  MoveBuilder.prototype.component13 = function () {
    return this.categories;
  };
  MoveBuilder.prototype.component14 = function () {
    return this.theme;
  };
  MoveBuilder.prototype.component15 = function () {
    return this.variables;
  };
  MoveBuilder.prototype.component16 = function () {
    return this.background;
  };
  MoveBuilder.prototype.component17 = function () {
    return this.pause;
  };
  MoveBuilder.prototype.component18 = function () {
    return this.hash;
  };
  MoveBuilder.prototype.component19 = function () {
    return this.chapter;
  };
  MoveBuilder.prototype.copy_6wj8hf$ = function (gameConverterContext, id, caption, image, illustration, text, selfConsuming, targetId, flags, flagsToRemove, flagsRequired, flagsDisallowing, categories, theme, variables, background, pause, hash, chapter) {
    return new MoveBuilder(gameConverterContext === void 0 ? this.gameConverterContext : gameConverterContext, id === void 0 ? this.id : id, caption === void 0 ? this.caption : caption, image === void 0 ? this.image : image, illustration === void 0 ? this.illustration : illustration, text === void 0 ? this.text : text, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, targetId === void 0 ? this.targetId : targetId, flags === void 0 ? this.flags : flags, flagsToRemove === void 0 ? this.flagsToRemove : flagsToRemove, flagsRequired === void 0 ? this.flagsRequired : flagsRequired, flagsDisallowing === void 0 ? this.flagsDisallowing : flagsDisallowing, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme, variables === void 0 ? this.variables : variables, background === void 0 ? this.background : background, pause === void 0 ? this.pause : pause, hash === void 0 ? this.hash : hash, chapter === void 0 ? this.chapter : chapter);
  };
  MoveBuilder.prototype.toString = function () {
    return 'MoveBuilder(gameConverterContext=' + Kotlin.toString(this.gameConverterContext) + (', id=' + Kotlin.toString(this.id)) + (', caption=' + Kotlin.toString(this.caption)) + (', image=' + Kotlin.toString(this.image)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', text=' + Kotlin.toString(this.text)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', targetId=' + Kotlin.toString(this.targetId)) + (', flags=' + Kotlin.toString(this.flags)) + (', flagsToRemove=' + Kotlin.toString(this.flagsToRemove)) + (', flagsRequired=' + Kotlin.toString(this.flagsRequired)) + (', flagsDisallowing=' + Kotlin.toString(this.flagsDisallowing)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + (', variables=' + Kotlin.toString(this.variables)) + (', background=' + Kotlin.toString(this.background)) + (', pause=' + Kotlin.toString(this.pause)) + (', hash=' + Kotlin.toString(this.hash)) + (', chapter=' + Kotlin.toString(this.chapter)) + ')';
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
    result = result * 31 + Kotlin.hashCode(this.flagsToRemove) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagsRequired) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagsDisallowing) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    result = result * 31 + Kotlin.hashCode(this.variables) | 0;
    result = result * 31 + Kotlin.hashCode(this.background) | 0;
    result = result * 31 + Kotlin.hashCode(this.pause) | 0;
    result = result * 31 + Kotlin.hashCode(this.hash) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapter) | 0;
    return result;
  };
  MoveBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gameConverterContext, other.gameConverterContext) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.caption, other.caption) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.targetId, other.targetId) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.flagsToRemove, other.flagsToRemove) && Kotlin.equals(this.flagsRequired, other.flagsRequired) && Kotlin.equals(this.flagsDisallowing, other.flagsDisallowing) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.variables, other.variables) && Kotlin.equals(this.background, other.background) && Kotlin.equals(this.pause, other.pause) && Kotlin.equals(this.hash, other.hash) && Kotlin.equals(this.chapter, other.chapter)))));
  };
  function Selection(name, ordinal, text) {
    Enum.call(this);
    this.text = text;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Selection_initFields() {
    Selection_initFields = function () {
    };
    Selection$RANDOM_instance = new Selection('RANDOM', 0, 'nahodny');
    Selection$FIRST_VALID_instance = new Selection('FIRST_VALID', 1, 'prvni_vyhovujici');
    Selection$NONE_instance = new Selection('NONE', 2, 'zadny');
    Selection$Companion_getInstance();
  }
  var Selection$RANDOM_instance;
  function Selection$RANDOM_getInstance() {
    Selection_initFields();
    return Selection$RANDOM_instance;
  }
  var Selection$FIRST_VALID_instance;
  function Selection$FIRST_VALID_getInstance() {
    Selection_initFields();
    return Selection$FIRST_VALID_instance;
  }
  var Selection$NONE_instance;
  function Selection$NONE_getInstance() {
    Selection_initFields();
    return Selection$NONE_instance;
  }
  function Selection$Companion() {
    Selection$Companion_instance = this;
  }
  Selection$Companion.prototype.fromText_61zpoe$ = function (text_) {
    var tmp$, tmp$_0;
    tmp$ = Selection$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var value = tmp$[tmp$_0];
      if (equals(value.text, text_)) {
        return value;
      }
    }
    return Selection$NONE_getInstance();
  };
  Selection$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Selection$Companion_instance = null;
  function Selection$Companion_getInstance() {
    Selection_initFields();
    if (Selection$Companion_instance === null) {
      new Selection$Companion();
    }
    return Selection$Companion_instance;
  }
  Selection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Selection',
    interfaces: [Enum]
  };
  function Selection$values() {
    return [Selection$RANDOM_getInstance(), Selection$FIRST_VALID_getInstance(), Selection$NONE_getInstance()];
  }
  Selection.values = Selection$values;
  function Selection$valueOf(name) {
    switch (name) {
      case 'RANDOM':
        return Selection$RANDOM_getInstance();
      case 'FIRST_VALID':
        return Selection$FIRST_VALID_getInstance();
      case 'NONE':
        return Selection$NONE_getInstance();
      default:throwISE('No enum constant eu.karelhovorka.textgame.core.builder.Selection.' + name);
    }
  }
  Selection.valueOf_61zpoe$ = Selection$valueOf;
  function StateBuilder(gameConverterContext, id, illustration, text_, flags, flagsToRemove, moveIds, chapter, chapterId, categories, endType, theme, background, minigame, variables, moves, checkpoint, selfConsuming, selection, pause, audio) {
    StateBuilder$Companion_getInstance();
    if (id === void 0)
      id = null;
    if (illustration === void 0)
      illustration = null;
    if (text_ === void 0)
      text_ = null;
    if (flags === void 0) {
      flags = ArrayList_init();
    }
    if (flagsToRemove === void 0) {
      flagsToRemove = ArrayList_init();
    }
    if (moveIds === void 0) {
      moveIds = ArrayList_init();
    }
    if (chapter === void 0)
      chapter = null;
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
    if (checkpoint === void 0)
      checkpoint = null;
    if (selfConsuming === void 0)
      selfConsuming = null;
    if (selection === void 0)
      selection = Selection$NONE_getInstance();
    if (pause === void 0)
      pause = PauseType$AUTO_getInstance();
    if (audio === void 0) {
      audio = [];
    }
    this.gameConverterContext = gameConverterContext;
    this.id = id;
    this.illustration = illustration;
    this.text__0 = text_;
    this.flags = flags;
    this.flagsToRemove = flagsToRemove;
    this.moveIds = moveIds;
    this.chapter = chapter;
    this.chapterId = chapterId;
    this.categories = categories;
    this.endType = endType;
    this.theme = theme;
    this.background = background;
    this.minigame = minigame;
    this.variables = variables;
    this.moves = moves;
    this.checkpoint = checkpoint;
    this.selfConsuming = selfConsuming;
    this.selection = selection;
    this.pause = pause;
    this.audio = audio;
    if (this.chapterId != null && this.chapter == null) {
      this.chapter = new ChapterBuilder(this.chapterId);
    }
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
      var move = this.addMove_pdl1vj$(moveId_0);
      var targetId = parameterValue(line);
      var tmp$ = !isBlank(targetId);
      if (tmp$) {
        tmp$ = STATE_ID_REGEX.matches_6bul2c$(targetId);
      }
      if (tmp$) {
        move.targetId = targetId;
      }
      var moveType_0 = moveType(line);
      if (moveType_0 === MoveType$LEFT_ARROW_getInstance()) {
        move.targetId = this.id;
      }
      this.parsingMoves = true;
    }
     else if (this.parsingMoves) {
      this.currentMoveBuilder().parseLine_bm4lxs$(line, index);
    }
     else {
      this.parseStateLine_0(line, index);
    }
  };
  StateBuilder.prototype.parseStateLine_0 = function (line, index) {
    var tmp$;
    if (GameConverter$Companion_getInstance().ILUSTRACE.matches_6bul2c$(line))
      this.illustration = parameterValue(line);
    else {
      if (GameConverter$Companion_getInstance().PAUZA.matches_6bul2c$(line))
        this.pause = pause(line, index);
      else {
        if (GameConverter$Companion_getInstance().PROMENNA.matches_6bul2c$(line))
          this.variables.add_11rb$(parameterVariable(line));
        else {
          if (GameConverter$Companion_getInstance().PRIZNAK.matches_6bul2c$(line))
            this.flags = toMutableList(parameterArray(line));
          else {
            if (GameConverter$Companion_getInstance().ODSTRANIT_PRIZNAK.matches_6bul2c$(line))
              this.flagsToRemove = toMutableList(parameterArray(line));
            else {
              if (StateBuilder$Companion_getInstance().VYBER.matches_6bul2c$(line))
                this.selection = Selection$Companion_getInstance().fromText_61zpoe$(parameterValue(line));
              else {
                if (GameConverter$Companion_getInstance().POZIRACI.matches_6bul2c$(line))
                  this.selfConsuming = parameterBoolean(line);
                else {
                  if (StateBuilder$Companion_getInstance().MINIHRA.matches_6bul2c$(line))
                    this.minigame = parameterValue(line);
                  else {
                    if (GameConverter$Companion_getInstance().POZADI.matches_6bul2c$(line))
                      this.background = parameterArray(line);
                    else {
                      if (StateBuilder$Companion_getInstance().CHECKPOINT.matches_6bul2c$(line))
                        this.checkpoint = parameterValue(line);
                      else {
                        if (GameConverter$Companion_getInstance().TEMA.matches_6bul2c$(line)) {
                          this.theme = GameConverter$Companion_getInstance().TEMA.replace_x2uqeu$(line, '$1');
                        }
                         else {
                          if (GameConverter$Companion_getInstance().CIL.matches_6bul2c$(line)) {
                            var targetId = parameterValue(line);
                            var moveId = 'h_' + toString(this.id) + '_auto_' + targetId;
                            this.gameConverterContext.addMoveId_bm4lxs$(moveId, index);
                            this.moves.add_11rb$(new MoveBuilder(this.gameConverterContext, moveId, void 0, void 0, void 0, void 0, (tmp$ = this.selfConsuming) != null ? tmp$ : MoveBuilder$Companion_getInstance().DEFAULT_SELF_CONSUMING, targetId, void 0, void 0, void 0, void 0, this.categories, void 0, void 0, this.background));
                          }
                           else {
                            if (GameConverter$Companion_getInstance().KONEC.matches_6bul2c$(line))
                              this.endType = endType(line, index);
                            else {
                              if (GameConverter$Companion_getInstance().KATEGORIE.matches_6bul2c$(line))
                                this.categories = parameterArray(line);
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
    var tmp$;
    var moveBuilder = new MoveBuilder(this.gameConverterContext, moveId, void 0, void 0, void 0, void 0, (tmp$ = this.selfConsuming) != null ? tmp$ : MoveBuilder$Companion_getInstance().DEFAULT_SELF_CONSUMING, void 0, void 0, void 0, void 0, void 0, this.categories, void 0, void 0, this.background, void 0, void 0, this.chapter);
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    var finalText = this.stringBuilder.build();
    if (this.text != null) {
      finalText = this.text;
    }
    if (nextStateId != null) {
      var tmp$_13;
      tmp$_13 = this.moves.iterator();
      while (tmp$_13.hasNext()) {
        var element = tmp$_13.next();
        if (element.targetId == null) {
          element.targetId = nextStateId;
        }
      }
    }
    var moveIndex = {v: 0};
    var tmp$_14;
    tmp$_14 = this.moves.iterator();
    while (tmp$_14.hasNext()) {
      var element_0 = tmp$_14.next();
      if (element_0.id == null) {
        var moveId = 'h_' + toString(this.id) + '_m' + moveIndex.v;
        element_0.id = moveId;
      }
      moveIndex.v = moveIndex.v + 1 | 0;
    }
    tmp$ = ensureNotNull(this.id);
    tmp$_0 = addPrefixIfNotNull(this.chapter, this.illustration);
    tmp$_1 = finalText != null ? trim(finalText) : null;
    tmp$_4 = (tmp$_3 = (tmp$_2 = this.chapter) != null ? tmp$_2.id : null) != null ? tmp$_3 : ensureNotNull(this.chapterId);
    tmp$_5 = copyToArray(this.flags);
    tmp$_6 = copyToArray(this.flagsToRemove);
    var $receiver = this.moves;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_15;
    tmp$_15 = $receiver.iterator();
    while (tmp$_15.hasNext()) {
      var item = tmp$_15.next();
      destination.add_11rb$(item.build());
    }
    tmp$_7 = copyToArray(destination);
    tmp$_8 = this.categories;
    tmp$_9 = this.endType;
    tmp$_10 = this.theme;
    tmp$_11 = addPrefixIfNotNull_0(this.chapter, this.background);
    tmp$_12 = this.minigame;
    return new State(tmp$, tmp$_1, tmp$_5, tmp$_6, tmp$_10, tmp$_11, copyToArray(this.variables), this.pause, tmp$_0, tmp$_4, tmp$_7, tmp$_8, tmp$_9, tmp$_12, this.checkpoint, this.selection);
  };
  StateBuilder.prototype.text_66evf9$ = function (init) {
    this.stringBuilder = new CharSequenceBuilder();
    init(this.stringBuilder);
    return this.stringBuilder;
  };
  StateBuilder.prototype.appendText_61zpoe$ = function (value) {
    this.stringBuilder.appendLine_61zpoe$(value);
  };
  function StateBuilder$Companion() {
    StateBuilder$Companion_instance = this;
    this.MINIHRA = Regex_init('minihra=(.*)');
    this.CHECKPOINT = Regex_init('zachytny_bod=(.*)');
    this.VYBER = Regex_init('autovyber=(nahodny|prvni_vyhovujici|zadny)');
  }
  StateBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StateBuilder$Companion_instance = null;
  function StateBuilder$Companion_getInstance() {
    if (StateBuilder$Companion_instance === null) {
      new StateBuilder$Companion();
    }
    return StateBuilder$Companion_instance;
  }
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
    return this.flagsToRemove;
  };
  StateBuilder.prototype.component7 = function () {
    return this.moveIds;
  };
  StateBuilder.prototype.component8 = function () {
    return this.chapter;
  };
  StateBuilder.prototype.component9 = function () {
    return this.chapterId;
  };
  StateBuilder.prototype.component10 = function () {
    return this.categories;
  };
  StateBuilder.prototype.component11 = function () {
    return this.endType;
  };
  StateBuilder.prototype.component12 = function () {
    return this.theme;
  };
  StateBuilder.prototype.component13 = function () {
    return this.background;
  };
  StateBuilder.prototype.component14 = function () {
    return this.minigame;
  };
  StateBuilder.prototype.component15 = function () {
    return this.variables;
  };
  StateBuilder.prototype.component16 = function () {
    return this.moves;
  };
  StateBuilder.prototype.component17 = function () {
    return this.checkpoint;
  };
  StateBuilder.prototype.component18 = function () {
    return this.selfConsuming;
  };
  StateBuilder.prototype.component19 = function () {
    return this.selection;
  };
  StateBuilder.prototype.component20 = function () {
    return this.pause;
  };
  StateBuilder.prototype.component21 = function () {
    return this.audio;
  };
  StateBuilder.prototype.copy_jisuqy$ = function (gameConverterContext, id, illustration, text_, flags, flagsToRemove, moveIds, chapter, chapterId, categories, endType, theme, background, minigame, variables, moves, checkpoint, selfConsuming, selection, pause, audio) {
    return new StateBuilder(gameConverterContext === void 0 ? this.gameConverterContext : gameConverterContext, id === void 0 ? this.id : id, illustration === void 0 ? this.illustration : illustration, text_ === void 0 ? this.text__0 : text_, flags === void 0 ? this.flags : flags, flagsToRemove === void 0 ? this.flagsToRemove : flagsToRemove, moveIds === void 0 ? this.moveIds : moveIds, chapter === void 0 ? this.chapter : chapter, chapterId === void 0 ? this.chapterId : chapterId, categories === void 0 ? this.categories : categories, endType === void 0 ? this.endType : endType, theme === void 0 ? this.theme : theme, background === void 0 ? this.background : background, minigame === void 0 ? this.minigame : minigame, variables === void 0 ? this.variables : variables, moves === void 0 ? this.moves : moves, checkpoint === void 0 ? this.checkpoint : checkpoint, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, selection === void 0 ? this.selection : selection, pause === void 0 ? this.pause : pause, audio === void 0 ? this.audio : audio);
  };
  StateBuilder.prototype.toString = function () {
    return 'StateBuilder(gameConverterContext=' + Kotlin.toString(this.gameConverterContext) + (', id=' + Kotlin.toString(this.id)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', text_=' + Kotlin.toString(this.text__0)) + (', flags=' + Kotlin.toString(this.flags)) + (', flagsToRemove=' + Kotlin.toString(this.flagsToRemove)) + (', moveIds=' + Kotlin.toString(this.moveIds)) + (', chapter=' + Kotlin.toString(this.chapter)) + (', chapterId=' + Kotlin.toString(this.chapterId)) + (', categories=' + Kotlin.toString(this.categories)) + (', endType=' + Kotlin.toString(this.endType)) + (', theme=' + Kotlin.toString(this.theme)) + (', background=' + Kotlin.toString(this.background)) + (', minigame=' + Kotlin.toString(this.minigame)) + (', variables=' + Kotlin.toString(this.variables)) + (', moves=' + Kotlin.toString(this.moves)) + (', checkpoint=' + Kotlin.toString(this.checkpoint)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', selection=' + Kotlin.toString(this.selection)) + (', pause=' + Kotlin.toString(this.pause)) + (', audio=' + Kotlin.toString(this.audio)) + ')';
  };
  StateBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gameConverterContext) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.illustration) | 0;
    result = result * 31 + Kotlin.hashCode(this.text__0) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.flagsToRemove) | 0;
    result = result * 31 + Kotlin.hashCode(this.moveIds) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapter) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapterId) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.endType) | 0;
    result = result * 31 + Kotlin.hashCode(this.theme) | 0;
    result = result * 31 + Kotlin.hashCode(this.background) | 0;
    result = result * 31 + Kotlin.hashCode(this.minigame) | 0;
    result = result * 31 + Kotlin.hashCode(this.variables) | 0;
    result = result * 31 + Kotlin.hashCode(this.moves) | 0;
    result = result * 31 + Kotlin.hashCode(this.checkpoint) | 0;
    result = result * 31 + Kotlin.hashCode(this.selfConsuming) | 0;
    result = result * 31 + Kotlin.hashCode(this.selection) | 0;
    result = result * 31 + Kotlin.hashCode(this.pause) | 0;
    result = result * 31 + Kotlin.hashCode(this.audio) | 0;
    return result;
  };
  StateBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gameConverterContext, other.gameConverterContext) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.text__0, other.text__0) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.flagsToRemove, other.flagsToRemove) && Kotlin.equals(this.moveIds, other.moveIds) && Kotlin.equals(this.chapter, other.chapter) && Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.endType, other.endType) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.background, other.background) && Kotlin.equals(this.minigame, other.minigame) && Kotlin.equals(this.variables, other.variables) && Kotlin.equals(this.moves, other.moves) && Kotlin.equals(this.checkpoint, other.checkpoint) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.selection, other.selection) && Kotlin.equals(this.pause, other.pause) && Kotlin.equals(this.audio, other.audio)))));
  };
  function SuperStateBuilder(gameConverterContext, id, currentTheme, currentBackground, currentCategories, selfConsuming, finalTargetId, chapter, chapterId, tmpStates, endType) {
    if (currentTheme === void 0)
      currentTheme = null;
    if (currentBackground === void 0) {
      currentBackground = [];
    }
    if (currentCategories === void 0) {
      currentCategories = [];
    }
    if (selfConsuming === void 0)
      selfConsuming = null;
    if (finalTargetId === void 0)
      finalTargetId = null;
    if (chapter === void 0)
      chapter = null;
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
    this.currentCategories = currentCategories;
    this.selfConsuming = selfConsuming;
    this.finalTargetId = finalTargetId;
    this.chapter = chapter;
    this.chapterId = chapterId;
    this.tmpStates = tmpStates;
    this.endType = endType;
    this.separated = false;
    this.move = false;
    if (this.chapterId != null && this.chapter == null) {
      this.chapter = new ChapterBuilder(this.chapterId);
    }
    this.addState_pdl1vj$();
  }
  SuperStateBuilder.prototype.parseLine_bm4lxs$ = function (line, index) {
    if (GameConverter$Companion_getInstance().SUPERUZEL_SEPARATOR.matches_6bul2c$(line)) {
      var stateId_0 = this.addState_pdl1vj$(stateId(line));
      this.gameConverterContext.addStateId_bm4lxs$(stateId_0, index);
      this.separated = true;
      this.move = false;
    }
     else {
      if (GameConverter$Companion_getInstance().HRANA.matches_6bul2c$(line)) {
        this.move = true;
        this.currentStateBuilder().parseLine_bm4lxs$(line, index);
      }
       else {
        if (GameConverter$Companion_getInstance().POZIRACI.matches_6bul2c$(line)) {
          this.selfConsuming = parameterBoolean(line);
          this.currentStateBuilder().parseLine_bm4lxs$(line, index);
        }
         else {
          if (GameConverter$Companion_getInstance().KONEC.matches_6bul2c$(line) && this.tmpStates.size === 1) {
            this.endType = endType(line, index);
          }
           else {
            var tmp$ = !this.move;
            if (tmp$) {
              tmp$ = GameConverter$Companion_getInstance().CIL.matches_6bul2c$(line);
            }
            if (tmp$) {
              this.finalTargetId = parameterValue(line);
            }
             else {
              var tmp$_0 = !this.move;
              if (tmp$_0) {
                tmp$_0 = GameConverter$Companion_getInstance().TEMA.matches_6bul2c$(line);
              }
              if (tmp$_0) {
                var tema = GameConverter$Companion_getInstance().TEMA.replace_x2uqeu$(line, '$1');
                this.currentTheme = tema;
                this.currentStateBuilder().parseLine_bm4lxs$(line, index);
              }
               else {
                if (GameConverter$Companion_getInstance().KATEGORIE.matches_6bul2c$(line)) {
                  this.currentCategories = parameterArray(line);
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
        }
      }
    }
  };
  SuperStateBuilder.prototype.build_pdl1vj$ = function (next) {
    if (next === void 0)
      next = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    if (this.finalTargetId == null && this.currentStateBuilder().moves.isEmpty() && this.endType === EndType$NONE_getInstance() && this.currentStateBuilder().endType === EndType$NONE_getInstance()) {
      throw new StateException(this.id, 'Superuzel ' + this.id + ' pot\u0159ebuje c\xEDl, hrany anebo konec, p\u0159\xEDpadn\u011B posledn\xED uzel superuzlu pot\u0159ebuje kon');
    }
    var tmp$_10 = this.finalTargetId != null;
    if (tmp$_10) {
      tmp$_10 = !this.currentStateBuilder().moves.isEmpty();
    }
    if (tmp$_10) {
      var tmp$_11 = this.id;
      var tmp$_12 = 'Superuzel ' + this.id + ' m\u016F\u017Ee m\xEDt bu\u010F c\xEDl (' + toString(this.finalTargetId) + ') anebo hrany (';
      var $receiver = this.currentStateBuilder().moves;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_13;
      tmp$_13 = $receiver.iterator();
      while (tmp$_13.hasNext()) {
        var item = tmp$_13.next();
        destination.add_11rb$(item.verbose);
      }
      throw new StateException(tmp$_11, tmp$_12 + destination + ') (ne oboj\xED)');
    }
    var states = ArrayList_init();
    var index = 0;
    tmp$ = this.tmpStates.iterator();
    while (tmp$.hasNext()) {
      var stateBuilder = tmp$.next();
      if (index === (this.tmpStates.size - 1 | 0)) {
        tmp$_0 = null;
      }
       else {
        tmp$_0 = this.tmpStates.get_za3lpa$(index + 1 | 0);
      }
      var nextState = tmp$_0;
      if (nextState == null) {
        tmp$_1 = this.finalTargetId;
      }
       else {
        tmp$_1 = nextState.id;
      }
      var nextStateId = tmp$_1;
      if (stateBuilder.moves.isEmpty() && stateBuilder.endType === EndType$NONE_getInstance()) {
        var moveId = 'h_' + this.id + '_sub_' + index;
        if (nextState == null) {
          if (this.finalTargetId != null) {
            tmp$_6 = stateBuilder.moves;
            tmp$_2 = this.gameConverterContext;
            tmp$_3 = ensureNotNull(this.finalTargetId);
            tmp$_6.add_11rb$(new MoveBuilder(tmp$_2, moveId, void 0, void 0, void 0, void 0, (tmp$_5 = (tmp$_4 = stateBuilder.selfConsuming) != null ? tmp$_4 : this.selfConsuming) != null ? tmp$_5 : MoveBuilder$Companion_getInstance().DEFAULT_SELF_CONSUMING, tmp$_3, void 0, void 0, void 0, void 0, this.currentCategories, void 0, void 0, this.currentBackground, void 0, void 0, this.chapter));
          }
           else if (this.endType !== EndType$NONE_getInstance()) {
            stateBuilder.endType = this.endType;
          }
        }
         else {
          stateBuilder.moves.add_11rb$(new MoveBuilder(this.gameConverterContext, moveId, void 0, void 0, void 0, void 0, (tmp$_8 = (tmp$_7 = stateBuilder.selfConsuming) != null ? tmp$_7 : this.selfConsuming) != null ? tmp$_8 : MoveBuilder$Companion_getInstance().DEFAULT_SELF_CONSUMING, nextStateId, void 0, void 0, void 0, void 0, this.currentCategories, void 0, void 0, this.currentBackground, void 0, void 0, this.chapter));
        }
      }
      if (nextState == null) {
        tmp$_9 = stateBuilder.build_pdl1vj$(next);
      }
       else {
        tmp$_9 = stateBuilder.build_pdl1vj$(nextStateId);
      }
      var state = tmp$_9;
      states.add_11rb$(state);
      index = index + 1 | 0;
    }
    return states;
  };
  SuperStateBuilder.prototype.currentStateBuilder = function () {
    return last(this.tmpStates);
  };
  SuperStateBuilder.prototype.addState_pdl1vj$ = function (stateId) {
    if (stateId === void 0)
      stateId = null;
    var tmp$, tmp$_0;
    var newStateId;
    if (stateId == null) {
      newStateId = this.id;
      if (!this.tmpStates.isEmpty()) {
        newStateId = this.id + '_sub_' + this.tmpStates.size;
      }
    }
     else {
      newStateId = stateId;
    }
    this.tmpStates.add_11rb$(new StateBuilder(this.gameConverterContext, newStateId, void 0, void 0, void 0, void 0, void 0, void 0, (tmp$_0 = (tmp$ = this.chapter) != null ? tmp$.id : null) != null ? tmp$_0 : this.chapterId, this.currentCategories, void 0, this.currentTheme, this.currentBackground, void 0, void 0, void 0, void 0, this.selfConsuming));
    return newStateId;
  };
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
    return this.currentCategories;
  };
  SuperStateBuilder.prototype.component6 = function () {
    return this.selfConsuming;
  };
  SuperStateBuilder.prototype.component7 = function () {
    return this.finalTargetId;
  };
  SuperStateBuilder.prototype.component8 = function () {
    return this.chapter;
  };
  SuperStateBuilder.prototype.component9 = function () {
    return this.chapterId;
  };
  SuperStateBuilder.prototype.component10 = function () {
    return this.tmpStates;
  };
  SuperStateBuilder.prototype.component11 = function () {
    return this.endType;
  };
  SuperStateBuilder.prototype.copy_ujax4s$ = function (gameConverterContext, id, currentTheme, currentBackground, currentCategories, selfConsuming, finalTargetId, chapter, chapterId, tmpStates, endType) {
    return new SuperStateBuilder(gameConverterContext === void 0 ? this.gameConverterContext : gameConverterContext, id === void 0 ? this.id : id, currentTheme === void 0 ? this.currentTheme : currentTheme, currentBackground === void 0 ? this.currentBackground : currentBackground, currentCategories === void 0 ? this.currentCategories : currentCategories, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, finalTargetId === void 0 ? this.finalTargetId : finalTargetId, chapter === void 0 ? this.chapter : chapter, chapterId === void 0 ? this.chapterId : chapterId, tmpStates === void 0 ? this.tmpStates : tmpStates, endType === void 0 ? this.endType : endType);
  };
  SuperStateBuilder.prototype.toString = function () {
    return 'SuperStateBuilder(gameConverterContext=' + Kotlin.toString(this.gameConverterContext) + (', id=' + Kotlin.toString(this.id)) + (', currentTheme=' + Kotlin.toString(this.currentTheme)) + (', currentBackground=' + Kotlin.toString(this.currentBackground)) + (', currentCategories=' + Kotlin.toString(this.currentCategories)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', finalTargetId=' + Kotlin.toString(this.finalTargetId)) + (', chapter=' + Kotlin.toString(this.chapter)) + (', chapterId=' + Kotlin.toString(this.chapterId)) + (', tmpStates=' + Kotlin.toString(this.tmpStates)) + (', endType=' + Kotlin.toString(this.endType)) + ')';
  };
  SuperStateBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gameConverterContext) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentTheme) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentBackground) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentCategories) | 0;
    result = result * 31 + Kotlin.hashCode(this.selfConsuming) | 0;
    result = result * 31 + Kotlin.hashCode(this.finalTargetId) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapter) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapterId) | 0;
    result = result * 31 + Kotlin.hashCode(this.tmpStates) | 0;
    result = result * 31 + Kotlin.hashCode(this.endType) | 0;
    return result;
  };
  SuperStateBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gameConverterContext, other.gameConverterContext) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.currentTheme, other.currentTheme) && Kotlin.equals(this.currentBackground, other.currentBackground) && Kotlin.equals(this.currentCategories, other.currentCategories) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.finalTargetId, other.finalTargetId) && Kotlin.equals(this.chapter, other.chapter) && Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.tmpStates, other.tmpStates) && Kotlin.equals(this.endType, other.endType)))));
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
  function Command(action, target) {
    this.action = action;
    this.target = target;
  }
  Command.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Command',
    interfaces: []
  };
  Command.prototype.component1 = function () {
    return this.action;
  };
  Command.prototype.component2 = function () {
    return this.target;
  };
  Command.prototype.copy_jyasbz$ = function (action, target) {
    return new Command(action === void 0 ? this.action : action, target === void 0 ? this.target : target);
  };
  Command.prototype.toString = function () {
    return 'Command(action=' + Kotlin.toString(this.action) + (', target=' + Kotlin.toString(this.target)) + ')';
  };
  Command.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.action) | 0;
    result = result * 31 + Kotlin.hashCode(this.target) | 0;
    return result;
  };
  Command.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.action, other.action) && Kotlin.equals(this.target, other.target)))));
  };
  function CommandParser() {
  }
  CommandParser.prototype.parse_61zpoe$ = function (text) {
    return null;
  };
  CommandParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandParser',
    interfaces: []
  };
  var grammar;
  function TreeNode() {
  }
  TreeNode.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TreeNode',
    interfaces: []
  };
  function Terminal(value, parent) {
    this.value_ym8gq5$_0 = value;
    this.parent_99nalw$_0 = parent;
  }
  Object.defineProperty(Terminal.prototype, 'value', {
    get: function () {
      return this.value_ym8gq5$_0;
    }
  });
  Object.defineProperty(Terminal.prototype, 'parent', {
    get: function () {
      return this.parent_99nalw$_0;
    }
  });
  Terminal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Terminal',
    interfaces: [TreeNode]
  };
  function NonTerminal(value, parent) {
    this.value_u6q6v8$_0 = value;
    this.parent_tcc2oz$_0 = parent;
  }
  Object.defineProperty(NonTerminal.prototype, 'value', {
    get: function () {
      return this.value_u6q6v8$_0;
    }
  });
  Object.defineProperty(NonTerminal.prototype, 'parent', {
    get: function () {
      return this.parent_tcc2oz$_0;
    }
  });
  NonTerminal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NonTerminal',
    interfaces: [TreeNode]
  };
  var rules;
  var NON_TERMINAL_REGEX;
  function parse_0(text) {
    var tmp$;
    tmp$ = lineSequence(text).iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
    }
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
  function GameConfigHelper(gameConfig) {
    this.gameConfig = gameConfig;
    var $receiver = this.gameConfig.states;
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.id, element);
    }
    this.statesById_0 = destination;
    var $receiver_0 = this.gameConfig.moves;
    var capacity_0 = coerceAtLeast(mapCapacity($receiver_0.length), 16);
    var destination_0 = LinkedHashMap_init_0(capacity_0);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element_0 = $receiver_0[tmp$_0];
      destination_0.put_xwzc9p$(element_0.id, element_0);
    }
    this.movesById_0 = destination_0;
    var $receiver_1 = this.gameConfig.chapters;
    var capacity_1 = coerceAtLeast(mapCapacity($receiver_1.length), 16);
    var destination_1 = LinkedHashMap_init_0(capacity_1);
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver_1.length; ++tmp$_1) {
      var element_1 = $receiver_1[tmp$_1];
      destination_1.put_xwzc9p$(element_1.id, element_1);
    }
    this.chaptersById_0 = destination_1;
    var $receiver_2 = this.gameConfig.moves;
    var destination_2 = LinkedHashMap_init();
    var tmp$_2;
    for (tmp$_2 = 0; tmp$_2 !== $receiver_2.length; ++tmp$_2) {
      var element_2 = $receiver_2[tmp$_2];
      var key = element_2.targetId;
      var tmp$_0_0;
      var value = destination_2.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination_2.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element_2);
    }
    this.movesByTargetId_0 = destination_2;
    this.flagGroupsByStateId_0 = LinkedHashMap_init();
    var $receiver_3 = this.chaptersById_0;
    var destination_3 = ArrayList_init_0($receiver_3.size);
    var tmp$_3;
    tmp$_3 = $receiver_3.entries.iterator();
    while (tmp$_3.hasNext()) {
      var item = tmp$_3.next();
      destination_3.add_11rb$(item.value.flagGroups);
    }
    var destination_4 = ArrayList_init();
    var tmp$_4;
    tmp$_4 = destination_3.iterator();
    while (tmp$_4.hasNext()) {
      var element_3 = tmp$_4.next();
      var list_0 = asIterable(element_3);
      addAll_0(destination_4, list_0);
    }
    this.flagGroups_0 = destination_4;
    var tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    tmp$_5 = this.gameConfig.states;
    for (tmp$_6 = 0; tmp$_6 !== tmp$_5.length; ++tmp$_6) {
      var state = tmp$_5[tmp$_6];
      if (this.flagGroupsByStateId_0.get_11rb$(state.id) == null) {
        var tmp$_13 = this.flagGroupsByStateId_0;
        var tmp$_14 = state.id;
        var value_0 = ArrayList_init();
        tmp$_13.put_xwzc9p$(tmp$_14, value_0);
      }
      tmp$_7 = state.moves;
      for (tmp$_8 = 0; tmp$_8 !== tmp$_7.length; ++tmp$_8) {
        var move = tmp$_7[tmp$_8];
        tmp$_9 = move.flagsDisallowing;
        for (tmp$_10 = 0; tmp$_10 !== tmp$_9.length; ++tmp$_10) {
          var flag = tmp$_9[tmp$_10];
          var flagGroup = this.isInGroup_puj7f4$(state.chapterId, flag);
          if (flagGroup != null) {
            ensureNotNull(this.flagGroupsByStateId_0.get_11rb$(state.id)).add_11rb$(flagGroup);
          }
        }
        tmp$_11 = move.flagsRequired;
        for (tmp$_12 = 0; tmp$_12 !== tmp$_11.length; ++tmp$_12) {
          var flag_0 = tmp$_11[tmp$_12];
          var flagGroup_0 = this.isInGroup_puj7f4$(state.chapterId, flag_0);
          if (flagGroup_0 != null) {
            ensureNotNull(this.flagGroupsByStateId_0.get_11rb$(state.id)).add_11rb$(flagGroup_0);
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
  GameConfigHelper.prototype.pathExists_puj7f4$ = function (from, to) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (equals(from, to)) {
      return true;
    }
    if (equals(to, this.gameConfig.startId)) {
      return false;
    }
    var moves = getOrThrow(this.movesByTargetId_0, to);
    tmp$ = this.gameConfig.states;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var state = tmp$[tmp$_0];
      tmp$_1 = state.moves;
      for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
        var move2 = tmp$_1[tmp$_2];
        tmp$_3 = moves.iterator();
        while (tmp$_3.hasNext()) {
          var move = tmp$_3.next();
          if (equals(move2.id, move.id)) {
            return this.pathExists_puj7f4$(from, state.id);
          }
        }
      }
    }
    var destination = ArrayList_init_0(collectionSizeOrDefault(moves, 10));
    var tmp$_4;
    tmp$_4 = moves.iterator();
    while (tmp$_4.hasNext()) {
      var item = tmp$_4.next();
      destination.add_11rb$(item.id);
    }
    throw IllegalArgumentException_init('No parent found for moves ' + destination);
  };
  GameConfigHelper.prototype.isInGroup_puj7f4$ = function (chapterId, flag) {
    var tmp$;
    tmp$ = this.flagGroups_0.iterator();
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var results = ArrayList_init();
    tmp$ = this.gameConfig.states;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var state = tmp$[tmp$_0];
      if (state.illustration != null) {
        addUnique(results, this.preload_61zpoe$(PathConstants$Companion_getInstance().ILLUSTRATIONS + state.illustration));
      }
      tmp$_1 = state.background;
      for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
        var background = tmp$_1[tmp$_2];
        addUnique(results, this.preload_61zpoe$(PathConstants$Companion_getInstance().BACKGROUNDS + background));
      }
    }
    tmp$_3 = this.gameConfig.moves;
    for (tmp$_4 = 0; tmp$_4 !== tmp$_3.length; ++tmp$_4) {
      var move = tmp$_3[tmp$_4];
      if (move.illustration != null) {
        addUnique(results, this.preload_61zpoe$(PathConstants$Companion_getInstance().ILLUSTRATIONS + move.illustration));
      }
    }
    tmp$_5 = this.gameConfig.moves;
    for (tmp$_6 = 0; tmp$_6 !== tmp$_5.length; ++tmp$_6) {
      var move_0 = tmp$_5[tmp$_6];
      if (move_0.image != null) {
        addUnique(results, this.preload_61zpoe$(PathConstants$Companion_getInstance().MOVES + move_0.image));
      }
    }
    var tmp$_7;
    tmp$_7 = results.iterator();
    while (tmp$_7.hasNext()) {
      var element = tmp$_7.next();
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
  function ChapterValidator(chapter) {
    this.chapter = chapter;
    this.warningList = ArrayList_init();
  }
  ChapterValidator.prototype.warn_stis2a$ = function (message, chapter, state, move) {
    if (chapter === void 0)
      chapter = null;
    if (state === void 0)
      state = null;
    if (move === void 0)
      move = null;
    println(message + ' - ' + toString(state) + ' - ' + toString(move));
    this.warningList.add_11rb$(new ValidatorWarning(message, void 0, state, move));
  };
  ChapterValidator.prototype.validate = function () {
    this.warningList.addAll_brywnq$((new StatesValidator(this.chapter.states)).validate());
    return toList_0(this.warningList);
  };
  ChapterValidator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChapterValidator',
    interfaces: [Validator]
  };
  function FlagAnalyser(gameConfig) {
    this.gameConfig = gameConfig;
  }
  FlagAnalyser.prototype.run = function () {
    var $receiver = this.gameConfig.states;
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var $receiver_0 = element.flags;
      var destination_0 = ArrayList_init_0($receiver_0.length);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
        var item = $receiver_0[tmp$_0];
        destination_0.add_11rb$(to(item, element));
      }
      var list = destination_0;
      addAll_0(destination, list);
    }
    var destination_1 = LinkedHashMap_init();
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var key = element_0.first;
      var tmp$_0_0;
      var value = destination_1.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination_1.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list_0 = tmp$_0_0;
      list_0.add_11rb$(element_0.second);
    }
    var statesOfFlag = destination_1;
    var $receiver_1 = this.gameConfig.moves;
    var destination_2 = ArrayList_init();
    var tmp$_2;
    for (tmp$_2 = 0; tmp$_2 !== $receiver_1.length; ++tmp$_2) {
      var element_1 = $receiver_1[tmp$_2];
      var $receiver_2 = element_1.flags;
      var destination_3 = ArrayList_init_0($receiver_2.length);
      var tmp$_3;
      for (tmp$_3 = 0; tmp$_3 !== $receiver_2.length; ++tmp$_3) {
        var item_0 = $receiver_2[tmp$_3];
        destination_3.add_11rb$(to(item_0, element_1));
      }
      var list_1 = destination_3;
      addAll_0(destination_2, list_1);
    }
    var destination_4 = LinkedHashMap_init();
    var tmp$_4;
    tmp$_4 = destination_2.iterator();
    while (tmp$_4.hasNext()) {
      var element_2 = tmp$_4.next();
      var key_0 = element_2.first;
      var tmp$_0_1;
      var value_0 = destination_4.get_11rb$(key_0);
      if (value_0 == null) {
        var answer_0 = ArrayList_init();
        destination_4.put_xwzc9p$(key_0, answer_0);
        tmp$_0_1 = answer_0;
      }
       else {
        tmp$_0_1 = value_0;
      }
      var list_2 = tmp$_0_1;
      list_2.add_11rb$(element_2.second);
    }
    var movesOfFlag = destination_4;
    var allFlags = plus(movesOfFlag.keys, statesOfFlag.keys);
    var destination_5 = ArrayList_init_0(collectionSizeOrDefault(allFlags, 10));
    var tmp$_5;
    tmp$_5 = allFlags.iterator();
    while (tmp$_5.hasNext()) {
      var item_1 = tmp$_5.next();
      var tmp$_6, tmp$_7, tmp$_8, tmp$_9;
      destination_5.add_11rb$(to(item_1, new FlagAnalyser$StatesAndMoves((tmp$_7 = (tmp$_6 = statesOfFlag.get_11rb$(item_1)) != null ? copyToArray(tmp$_6) : null) != null ? tmp$_7 : [], (tmp$_9 = (tmp$_8 = movesOfFlag.get_11rb$(item_1)) != null ? copyToArray(tmp$_8) : null) != null ? tmp$_9 : [])));
    }
    return toMap(destination_5);
  };
  FlagAnalyser.prototype.toString = function () {
    var $receiver = this.run();
    var destination = ArrayList_init_0($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.key + ' -> ' + item.value);
    }
    return joinToString(destination, '\n');
  };
  function FlagAnalyser$StatesAndMoves(states, moves) {
    this.states = states;
    this.moves = moves;
  }
  FlagAnalyser$StatesAndMoves.prototype.toString = function () {
    var tmp$, tmp$_0;
    if (this.states.length === 0) {
      tmp$ = '';
    }
     else {
      var $receiver = this.states;
      var destination = ArrayList_init_0($receiver.length);
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
        var item = $receiver[tmp$_1];
        destination.add_11rb$(item.id);
      }
      tmp$ = 'U: ' + toList_0(destination);
    }
    var statesString = tmp$;
    if (this.moves.length === 0) {
      tmp$_0 = '';
    }
     else {
      var $receiver_0 = this.moves;
      var destination_0 = ArrayList_init_0($receiver_0.length);
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== $receiver_0.length; ++tmp$_2) {
        var item_0 = $receiver_0[tmp$_2];
        destination_0.add_11rb$(item_0.id);
      }
      tmp$_0 = 'H: ' + toList_0(destination_0);
    }
    var movesString = tmp$_0;
    return statesString + ' ' + movesString;
  };
  FlagAnalyser$StatesAndMoves.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StatesAndMoves',
    interfaces: []
  };
  FlagAnalyser$StatesAndMoves.prototype.component1 = function () {
    return this.states;
  };
  FlagAnalyser$StatesAndMoves.prototype.component2 = function () {
    return this.moves;
  };
  FlagAnalyser$StatesAndMoves.prototype.copy_f83r0y$ = function (states, moves) {
    return new FlagAnalyser$StatesAndMoves(states === void 0 ? this.states : states, moves === void 0 ? this.moves : moves);
  };
  FlagAnalyser$StatesAndMoves.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.states) | 0;
    result = result * 31 + Kotlin.hashCode(this.moves) | 0;
    return result;
  };
  FlagAnalyser$StatesAndMoves.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.states, other.states) && Kotlin.equals(this.moves, other.moves)))));
  };
  FlagAnalyser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlagAnalyser',
    interfaces: []
  };
  var STATE_ID_REGEX;
  var MOVE_ID_REGEX;
  var COMPARATORS;
  var CMP_REGEX;
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
  function isFlagBooleanExpression($receiver) {
    return CMP_REGEX.matches_6bul2c$($receiver);
  }
  function ValidatorWarning(message, chapter, state, move) {
    if (chapter === void 0)
      chapter = null;
    if (state === void 0)
      state = null;
    if (move === void 0)
      move = null;
    this.message = message;
    this.chapter = chapter;
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
    return this.chapter;
  };
  ValidatorWarning.prototype.component3 = function () {
    return this.state;
  };
  ValidatorWarning.prototype.component4 = function () {
    return this.move;
  };
  ValidatorWarning.prototype.copy_stis2a$ = function (message, chapter, state, move) {
    return new ValidatorWarning(message === void 0 ? this.message : message, chapter === void 0 ? this.chapter : chapter, state === void 0 ? this.state : state, move === void 0 ? this.move : move);
  };
  ValidatorWarning.prototype.toString = function () {
    return 'ValidatorWarning(message=' + Kotlin.toString(this.message) + (', chapter=' + Kotlin.toString(this.chapter)) + (', state=' + Kotlin.toString(this.state)) + (', move=' + Kotlin.toString(this.move)) + ')';
  };
  ValidatorWarning.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    result = result * 31 + Kotlin.hashCode(this.chapter) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.move) | 0;
    return result;
  };
  ValidatorWarning.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.message, other.message) && Kotlin.equals(this.chapter, other.chapter) && Kotlin.equals(this.state, other.state) && Kotlin.equals(this.move, other.move)))));
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
    this.warningList.add_11rb$(new ValidatorWarning(message, void 0, state, move));
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
  GameValidator.prototype.validateStates_0 = function () {
    this.warningList.addAll_brywnq$((new StatesValidator(this.gameConfig.states)).validate());
  };
  GameValidator.prototype.warnings = function () {
    return copyToArray(this.warningList);
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
      if (false && !isFlagBooleanExpression(flag) && !contains_0(this.flags, flag)) {
        this.warn_3epqxe$('Non-existent flagsDisallowing ' + flag + ' for move ' + move.id + ' ' + '\n' + 'KIKI to znamen\xE1, \u017Ee ta vlajka neexistuje - neni nikde nastaven\xE1 pomoc\xED p\u0159\xEDznaku, ani to neni existuj\xEDc\xED tah/uzel. Jo a odd\u011Blujou se \u010D\xE1rkou!', void 0, move);
      }
    }
    tmp$_1 = move.flagsRequired;
    for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
      var flag_0 = tmp$_1[tmp$_2];
      if (false && !isFlagBooleanExpression(flag_0) && !contains_0(this.flags, flag_0)) {
        this.warn_3epqxe$('Non-existent flagsRequired ' + flag_0 + ' for move ' + move.id + ' ' + '\n' + 'KIKI to znamen\xE1, \u017Ee ta vlajka neexistuje - neni nikde nastaven\xE1 pomoc\xED p\u0159\xEDznaku, ani to neni existuj\xEDc\xED tah/uzel. Jo a odd\u011Blujou se \u010D\xE1rkou!', void 0, move);
      }
    }
  };
  GameValidator.prototype.validateAndThrow = function () {
    if (!this.validate().isEmpty()) {
      var firstWarning = first_0(this.validate());
      if (firstWarning.state != null) {
        throw StateException_init(firstWarning.state, firstWarning.message);
      }
       else if (firstWarning.move != null) {
        throw MoveException_init(firstWarning.move, firstWarning.message);
      }
      throw IllegalArgumentException_init(firstWarning.toString());
    }
  };
  GameValidator.prototype.validate = function () {
    this.warningList.clear();
    this.validateMoves_6taknv$();
    this.validateStates_0();
    return this.warningList;
  };
  GameValidator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameValidator',
    interfaces: [Validator]
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
  function StateValidator(state) {
    this.state = state;
    this.warningList = ArrayList_init();
  }
  StateValidator.prototype.warn_3epqxe$ = function (message, state, move) {
    if (state === void 0)
      state = null;
    if (move === void 0)
      move = null;
    println(message + ' - ' + toString(state) + ' - ' + toString(move));
    this.warningList.add_11rb$(new ValidatorWarning(message, void 0, state, move));
  };
  StateValidator.prototype.validate = function () {
    this.validateState_0(this.state);
    return toList_0(this.warningList);
  };
  StateValidator.prototype.validateState_0 = function (state) {
    if (!STATE_ID_REGEX.matches_6bul2c$(state.id)) {
      this.warn_3epqxe$('Invalid state id: ' + state.id + ' ' + '\n' + "KIKI, m\xE1 p\u0159ece za\u010D\xEDnat na 'u'!", state);
    }
    this.validateMovesNotAmbiguous_0(state);
    this.validateMovesAllHaveImageOrNot_0(state);
  };
  StateValidator.prototype.validateMovesNotAmbiguous_0 = function (state) {
    var moves = state.moves;
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
    if (autoMoveNoRestrictionMoves.size > 1 && state.selection === Selection$NONE_getInstance()) {
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault(autoMoveNoRestrictionMoves, 10));
      var tmp$_2;
      tmp$_2 = autoMoveNoRestrictionMoves.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination_0.add_11rb$(item.id);
      }
      var moveIds = toList_0(destination_0);
      this.warn_3epqxe$('Multiple automoves ' + moveIds + ' with no flag restrictions for state ' + '\n' + "To znamen\xE1, \u017Ee je tam v\xEDc tah\u016F, kter\xFD nemaj popisek. Bu\u010F mus\xED m\xEDt v\u0161echny krom 1 popisek, nebo mus\xED bejt po\u0161\xE9fovan\xFD pomoc\xED podminena/vyloucena, aby v\u017Edycky takovej byl maxim\xE1ln\u011B jeden, ten 'automatickej' anebo mus\xED m\xEDt autovyber=nahodny anebo autovyber=prvni_vyhovujici", state);
    }
  };
  StateValidator.prototype.validateMovesAllHaveImageOrNot_0 = function (state) {
    var moves = state.moves;
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== moves.length; ++tmp$) {
      var element = moves[tmp$];
      if (element.image == null)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
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
    var destination_2 = ArrayList_init_0(collectionSizeOrDefault(destination_1, 10));
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
  StateValidator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateValidator',
    interfaces: [Validator]
  };
  function StatesValidator(states) {
    this.states = states;
    this.warningList = ArrayList_init();
  }
  StatesValidator.prototype.warn_3epqxe$ = function (message, state, move) {
    if (state === void 0)
      state = null;
    if (move === void 0)
      move = null;
    println(message + ' - ' + toString(state) + ' - ' + toString(move));
    this.warningList.add_11rb$(new ValidatorWarning(message, void 0, state, move));
  };
  StatesValidator.prototype.validate = function () {
    this.validateStates();
    return toList_0(this.warningList);
  };
  StatesValidator.prototype.validateStates = function () {
    var tmp$, tmp$_0;
    this.validateNotDuplicitStateIds();
    tmp$ = this.states;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var state = tmp$[tmp$_0];
      this.warningList.addAll_brywnq$((new StateValidator(state)).validate());
    }
  };
  StatesValidator.prototype.validateNotDuplicitStateIds = function () {
    var tmp$, tmp$_0;
    var duplicitIds = ArrayList_init();
    tmp$ = this.states;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var state = tmp$[tmp$_0];
      if (duplicitIds.contains_11rb$(state.id)) {
        this.warn_3epqxe$('Duplicitn\xED stav!\nKIKI to znamen\xE1, \u017Ee je n\u011Bkolikr\xE1t v textu tohle id, nejsp\xED\u0161 copy-paste p\u0159eklep.', state);
      }
      duplicitIds.add_11rb$(state.id);
    }
  };
  StatesValidator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StatesValidator',
    interfaces: [Validator]
  };
  function Validator() {
  }
  Validator.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Validator',
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
        expression = variableName + ' - ' + expression;
      }
       else if (equals(operator, '*=')) {
        expression = variableName + '*' + expression;
      }
       else if (equals(operator, '/=')) {
        expression = variableName + '/' + expression;
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
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$krypto = package$soywiz.krypto || (package$soywiz.krypto = {});
  package$krypto.HashFactory = HashFactory;
  package$krypto.Hash = Hash;
  package$krypto.hash_ke3gku$ = hash;
  Object.defineProperty(MD5, 'Companion', {
    get: MD5$Companion_getInstance
  });
  package$krypto.MD5 = MD5;
  package$krypto.md5_964n91$ = md5;
  var package$internal = package$krypto.internal || (package$krypto.internal = {});
  package$internal.ext8_b6l1hq$ = ext8;
  package$internal.rotateRight_b6l1hq$ = rotateRight;
  package$internal.rotateLeft_b6l1hq$ = rotateLeft;
  package$internal.arraycopy_lwkm2r$ = arraycopy;
  package$internal.arraycopy_3jsevz$ = arraycopy_0;
  package$internal.readU8_767k4w$ = readU8;
  package$internal.readS32_be_767k4w$ = readS32_be;
  var package$eu = _.eu || (_.eu = {});
  var package$karelhovorka = package$eu.karelhovorka || (package$eu.karelhovorka = {});
  var package$textgame = package$karelhovorka.textgame || (package$karelhovorka.textgame = {});
  var package$core = package$textgame.core || (package$textgame.core = {});
  var package$bo = package$core.bo || (package$core.bo = {});
  package$bo.Audio = Audio;
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
  Object.defineProperty(GameCompletion, 'Companion', {
    get: GameCompletion$Companion_getInstance
  });
  Object.defineProperty(GameCompletion, '$serializer', {
    get: GameCompletion$$serializer_getInstance
  });
  package$bo.GameCompletion_init_d9rmn0$ = GameCompletion_init;
  package$bo.GameCompletion = GameCompletion;
  Object.defineProperty(GameConfig, 'Companion', {
    get: GameConfig$Companion_getInstance
  });
  package$bo.GameConfig = GameConfig;
  package$bo.GameFlags = GameFlags;
  package$bo.toGraphElement_kqcojs$ = toGraphElement;
  package$bo.toGraphElement_6bkab8$ = toGraphElement_0;
  package$bo.GraphElement = GraphElement;
  package$bo.GameState = GameState;
  package$bo.extensionEquals_5clnly$ = extensionEquals;
  package$bo.extensionHashCode_x8f6t6$ = extensionHashCode;
  package$bo.toImmutable_x8f6t6$ = toImmutable;
  Object.defineProperty(ImmutableGameState, 'Companion', {
    get: ImmutableGameState$Companion_getInstance
  });
  Object.defineProperty(ImmutableGameState, '$serializer', {
    get: ImmutableGameState$$serializer_getInstance
  });
  package$bo.ImmutableGameState_init_gf4fxx$ = ImmutableGameState_init;
  package$bo.ImmutableGameState = ImmutableGameState;
  Object.defineProperty(package$bo, 'prefix', {
    get: function () {
      return prefix;
    }
  });
  package$bo.isInteractive_jk0wgr$ = isInteractive;
  package$bo.isNotInteractive_jk0wgr$ = isNotInteractive;
  package$bo.isInteractive_ay6k20$ = isInteractive_0;
  package$bo.isNotInteractive_ay6k20$ = isNotInteractive_0;
  package$bo.removeNotInteractive_xyj7z9$ = removeNotInteractive;
  package$bo.simpleString_kqcojs$ = simpleString;
  package$bo.checkMultipleNonInteractive_xyj7z9$ = checkMultipleNonInteractive;
  package$bo.flagsOrEmpty_kqcojs$ = flagsOrEmpty;
  package$bo.Move = Move;
  package$bo.MultiString = MultiString;
  Object.defineProperty(PauseFromType, 'CONTINUE_STATE', {
    get: PauseFromType$CONTINUE_STATE_getInstance
  });
  Object.defineProperty(PauseFromType, 'CONTINUE_MOVE', {
    get: PauseFromType$CONTINUE_MOVE_getInstance
  });
  Object.defineProperty(PauseFromType, 'MOVES', {
    get: PauseFromType$MOVES_getInstance
  });
  package$bo.PauseFromType = PauseFromType;
  Object.defineProperty(PauseType, 'AUTO', {
    get: PauseType$AUTO_getInstance
  });
  Object.defineProperty(PauseType, 'YES', {
    get: PauseType$YES_getInstance
  });
  Object.defineProperty(PauseType, 'NO', {
    get: PauseType$NO_getInstance
  });
  package$bo.PauseType = PauseType;
  package$bo.flagsOrEmpty_6bkab8$ = flagsOrEmpty_0;
  package$bo.State = State;
  var package$builder = package$core.builder || (package$core.builder = {});
  package$builder.endType_bm4lxs$ = endType;
  package$builder.pause_bm4lxs$ = pause;
  package$builder.errorIfParameter_h6sd2a$ = errorIfParameter;
  package$builder.moveId_pdl1vz$ = moveId;
  Object.defineProperty(MoveType, 'LEFT_ARROW', {
    get: MoveType$LEFT_ARROW_getInstance
  });
  Object.defineProperty(MoveType, 'RIGHT_ARROW', {
    get: MoveType$RIGHT_ARROW_getInstance
  });
  Object.defineProperty(MoveType, 'MOVE', {
    get: MoveType$MOVE_getInstance
  });
  package$builder.MoveType = MoveType;
  package$builder.moveType_pdl1vz$ = moveType;
  package$builder.stateId_pdl1vz$ = stateId;
  package$builder.parameterValue_pdl1vz$ = parameterValue;
  package$builder.parameterArray_rjktp$ = parameterArray;
  package$builder.fixHtmlEntities_pdl1vz$ = fixHtmlEntities;
  package$builder.parse_empuf4$ = parse;
  package$builder.parameterVariable_pdl1vz$ = parameterVariable;
  package$builder.parameterBoolean_pdl1vz$ = parameterBoolean;
  package$builder.addPrefixIfNotNull_by0zy5$ = addPrefixIfNotNull;
  package$builder.addPrefixIfNotNull_j3f7m4$ = addPrefixIfNotNull_0;
  Object.defineProperty(ChapterBuilder, 'Companion', {
    get: ChapterBuilder$Companion_getInstance
  });
  package$builder.ChapterBuilder = ChapterBuilder;
  package$builder.CharSequenceBuilder = CharSequenceBuilder;
  package$builder.GameConfigBuilder = GameConfigBuilder;
  Object.defineProperty(GameConverter, 'Companion', {
    get: GameConverter$Companion_getInstance
  });
  package$builder.GameConverter = GameConverter;
  package$builder.GameConverterContext = GameConverterContext;
  package$builder.LineParser = LineParser;
  Object.defineProperty(MoveBuilder, 'Companion', {
    get: MoveBuilder$Companion_getInstance
  });
  package$builder.MoveBuilder = MoveBuilder;
  Object.defineProperty(Selection, 'RANDOM', {
    get: Selection$RANDOM_getInstance
  });
  Object.defineProperty(Selection, 'FIRST_VALID', {
    get: Selection$FIRST_VALID_getInstance
  });
  Object.defineProperty(Selection, 'NONE', {
    get: Selection$NONE_getInstance
  });
  Object.defineProperty(Selection, 'Companion', {
    get: Selection$Companion_getInstance
  });
  package$builder.Selection = Selection;
  Object.defineProperty(StateBuilder, 'Companion', {
    get: StateBuilder$Companion_getInstance
  });
  package$builder.StateBuilder = StateBuilder;
  package$builder.SuperStateBuilder = SuperStateBuilder;
  package$builder.state_zhmc9d$ = state;
  package$builder.move_za6fqz$ = move;
  package$builder.game_shlv14$ = game;
  var package$command = package$core.command || (package$core.command = {});
  package$command.Command = Command;
  package$command.CommandParser = CommandParser;
  Object.defineProperty(package$command, 'grammar', {
    get: function () {
      return grammar;
    }
  });
  package$command.TreeNode = TreeNode;
  package$command.Terminal = Terminal;
  package$command.NonTerminal = NonTerminal;
  Object.defineProperty(package$command, 'rules', {
    get: function () {
      return rules;
    }
  });
  Object.defineProperty(package$command, 'NON_TERMINAL_REGEX', {
    get: function () {
      return NON_TERMINAL_REGEX;
    }
  });
  package$command.parse_61zpoe$ = parse_0;
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
  package$validator.ChapterValidator = ChapterValidator;
  FlagAnalyser.StatesAndMoves = FlagAnalyser$StatesAndMoves;
  package$validator.FlagAnalyser = FlagAnalyser;
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
  Object.defineProperty(package$validator, 'COMPARATORS', {
    get: function () {
      return COMPARATORS;
    }
  });
  Object.defineProperty(package$validator, 'CMP_REGEX', {
    get: function () {
      return CMP_REGEX;
    }
  });
  package$validator.getFlags_u5fyh6$ = getFlags;
  package$validator.isFlagBooleanExpression_pdl1vz$ = isFlagBooleanExpression;
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
  package$validator.StateValidator = StateValidator;
  package$validator.StatesValidator = StatesValidator;
  package$validator.Validator = Validator;
  Object.defineProperty(Variable, 'Companion', {
    get: Variable$Companion_getInstance
  });
  var package$variables = package$core.variables || (package$core.variables = {});
  package$variables.Variable = Variable;
  GameCompletion$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  ImmutableGameState$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  prefix = Regex_init('[hu]([^_]+)_.*');
  grammar = trimIndent('\n\n');
  rules = LinkedHashMap_init();
  NON_TERMINAL_REGEX = Regex_init('<[a-z\\-]+> -> (<[a-z\\-]+> ?)+ ');
  STATE_ID_REGEX = Regex_init('u[0-9A-Za-z_]*');
  MOVE_ID_REGEX = Regex_init('h[0-9A-Za-z_]*');
  COMPARATORS = '(<=|>=|<|>|=)';
  CMP_REGEX = Regex_init('([0-9A-Za-z_]+)(<=|>=|<|>|=)(.*)');
  incorrect2 = 'osoba=[\u201C\u201E]?([^\u201C]*)\u201C>';
  incorrect2_replacement = "osoba='$1'>";
  incorrect3 = Regex_init('.*<myslenka [^>]*>[^<]*<myslenka .*');
  Kotlin.defineModule('textgame-core', _);
  return _;
}));

//# sourceMappingURL=textgame-core.js.map
