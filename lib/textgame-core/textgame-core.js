(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-runtime', 'minigames', 'tg-common'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-runtime'), require('minigames'), require('tg-common'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'textgame-core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'textgame-core'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
      throw new Error("Error loading module 'textgame-core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'textgame-core'.");
    }
    if (typeof minigames === 'undefined') {
      throw new Error("Error loading module 'textgame-core'. Its dependency 'minigames' was not found. Please, check whether 'minigames' is loaded prior to 'textgame-core'.");
    }
    if (typeof this['tg-common'] === 'undefined') {
      throw new Error("Error loading module 'textgame-core'. Its dependency 'tg-common' was not found. Please, check whether 'tg-common' is loaded prior to 'textgame-core'.");
    }
    root['textgame-core'] = factory(typeof this['textgame-core'] === 'undefined' ? {} : this['textgame-core'], kotlin, this['kotlinx-serialization-kotlinx-serialization-runtime'], minigames, this['tg-common']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_runtime, $module$minigames, $module$tg_common) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var L0 = Kotlin.Long.ZERO;
  var Math_0 = Math;
  var L4294967296 = new Kotlin.Long(0, 1);
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toByte = Kotlin.toByte;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var NullableSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.NullableSerializer;
  var equals = Kotlin.equals;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.MissingFieldException;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var ReferenceArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.ReferenceArraySerializer;
  var getKClass = Kotlin.getKClass;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var EnumSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.EnumSerializer;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var asIterable = Kotlin.kotlin.collections.asIterable_us0mfu$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var MinigameState = $module$minigames.eu.karelhovorka.textgame.minigame.MinigameState;
  var contentEquals = Kotlin.arrayEquals;
  var itemsHashCode = $module$tg_common.eu.karelhovorka.util.itemsHashCode_213hj2$;
  var hashCode = Kotlin.hashCode;
  var toString = Kotlin.toString;
  var LinkedHashMapSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.LinkedHashMapSerializer;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var util = $module$tg_common.eu.karelhovorka.util;
  var CharSequence = Kotlin.kotlin.CharSequence;
  var addAll_0 = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var fixBOM = $module$tg_common.eu.karelhovorka.util.fixBOM_pdl1vz$;
  var Exception = Kotlin.kotlin.Exception;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var trimEnd = Kotlin.kotlin.text.trimEnd_gw00vp$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var first_0 = Kotlin.kotlin.collections.first_2p1efm$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_us0mfu$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var toMutableList_0 = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var contains_0 = Kotlin.kotlin.collections.contains_mjy6jw$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_fmv235$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var addUnique = $module$tg_common.eu.karelhovorka.util.addUnique_dwdffb$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var plus_0 = Kotlin.kotlin.collections.plus_khz7k3$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
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
  Selection.prototype = Object.create(Enum.prototype);
  Selection.prototype.constructor = Selection;
  MoveType.prototype = Object.create(Enum.prototype);
  MoveType.prototype.constructor = MoveType;
  ChapterBuilder.prototype = Object.create(BaseElementBuilder.prototype);
  ChapterBuilder.prototype.constructor = ChapterBuilder;
  GraphElementBuilder.prototype = Object.create(BaseElementBuilder.prototype);
  GraphElementBuilder.prototype.constructor = GraphElementBuilder;
  MoveBuilder.prototype = Object.create(GraphElementBuilder.prototype);
  MoveBuilder.prototype.constructor = MoveBuilder;
  StateBuilder.prototype = Object.create(GraphElementBuilder.prototype);
  StateBuilder.prototype.constructor = StateBuilder;
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
  function Audio(filename, volume, origin) {
    Audio$Companion_getInstance();
    if (volume === void 0)
      volume = 1.0;
    if (origin === void 0)
      origin = null;
    this.filename = filename;
    this.volume = volume;
    this.origin = origin;
  }
  function Audio$Companion() {
    Audio$Companion_instance = this;
    this.FILMMUSIC_IO = Regex_init('https://.*filmmusic.io/song/(.*)');
  }
  Audio$Companion.prototype.fromString_61zpoe$ = function (text) {
    if (this.FILMMUSIC_IO.matches_6bul2c$(text)) {
      return new Audio(this.FILMMUSIC_IO.replace_x2uqeu$(text, '$1') + '.mp3', void 0, text);
    }
    return new Audio(text);
  };
  Audio$Companion.prototype.serializer = function () {
    return Audio$$serializer_getInstance();
  };
  Audio$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Audio$Companion_instance = null;
  function Audio$Companion_getInstance() {
    if (Audio$Companion_instance === null) {
      new Audio$Companion();
    }
    return Audio$Companion_instance;
  }
  function Audio$$serializer() {
    this.descriptor_t5r8bf$_0 = new SerialClassDescImpl('eu.karelhovorka.textgame.core.bo.Audio', this);
    this.descriptor.addElement_ivxn3r$('filename', false);
    this.descriptor.addElement_ivxn3r$('volume', true);
    this.descriptor.addElement_ivxn3r$('origin', true);
    Audio$$serializer_instance = this;
  }
  Object.defineProperty(Audio$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_t5r8bf$_0;
    }
  });
  Audio$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.filename);
    if (!equals(obj.volume, 1.0) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeFloatElement_t7qhdx$(this.descriptor, 1, obj.volume);
    if (!equals(obj.origin, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 2, internal.StringSerializer, obj.origin);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Audio$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeFloatElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 2, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 2, internal.StringSerializer, local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Audio_init(bitMask0, local0, local1, local2, null);
  };
  Audio$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.FloatSerializer, new NullableSerializer(internal.StringSerializer)];
  };
  Audio$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Audio$$serializer_instance = null;
  function Audio$$serializer_getInstance() {
    if (Audio$$serializer_instance === null) {
      new Audio$$serializer();
    }
    return Audio$$serializer_instance;
  }
  function Audio_init(seen1, filename, volume, origin, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Audio.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('filename');
    else
      $this.filename = filename;
    if ((seen1 & 2) === 0)
      $this.volume = 1.0;
    else
      $this.volume = volume;
    if ((seen1 & 4) === 0)
      $this.origin = null;
    else
      $this.origin = origin;
    return $this;
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
    return this.volume;
  };
  Audio.prototype.component3 = function () {
    return this.origin;
  };
  Audio.prototype.copy_euafm8$ = function (filename, volume, origin) {
    return new Audio(filename === void 0 ? this.filename : filename, volume === void 0 ? this.volume : volume, origin === void 0 ? this.origin : origin);
  };
  Audio.prototype.toString = function () {
    return 'Audio(filename=' + Kotlin.toString(this.filename) + (', volume=' + Kotlin.toString(this.volume)) + (', origin=' + Kotlin.toString(this.origin)) + ')';
  };
  Audio.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.filename) | 0;
    result = result * 31 + Kotlin.hashCode(this.volume) | 0;
    result = result * 31 + Kotlin.hashCode(this.origin) | 0;
    return result;
  };
  Audio.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.filename, other.filename) && Kotlin.equals(this.volume, other.volume) && Kotlin.equals(this.origin, other.origin)))));
  };
  function BaseElement() {
  }
  BaseElement.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BaseElement',
    interfaces: []
  };
  function Chapter(id, name, categories, theme, flagGroups, states, testDefaultTheme, filePrefix, audio) {
    Chapter$Companion_getInstance();
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
    if (audio === void 0) {
      audio = [];
    }
    this.id_60r9go$_0 = id;
    this.name = name;
    this.categories_qwv45j$_0 = categories;
    this.theme_oxw3wo$_0 = theme;
    this.flagGroups = flagGroups;
    this.states = states;
    this.testDefaultTheme = testDefaultTheme;
    this.filePrefix = filePrefix;
    this.audio = audio;
  }
  Object.defineProperty(Chapter.prototype, 'id', {
    get: function () {
      return this.id_60r9go$_0;
    }
  });
  Object.defineProperty(Chapter.prototype, 'categories', {
    get: function () {
      return this.categories_qwv45j$_0;
    }
  });
  Object.defineProperty(Chapter.prototype, 'theme', {
    get: function () {
      return this.theme_oxw3wo$_0;
    }
  });
  Chapter.prototype.withoutStates = function () {
    return this.copy_a0fekh$(void 0, void 0, void 0, void 0, void 0, []);
  };
  Chapter.prototype.hasContent = function () {
    return !isBlank(this.name);
  };
  function Chapter$Companion() {
    Chapter$Companion_instance = this;
  }
  Chapter$Companion.prototype.serializer = function () {
    return Chapter$$serializer_getInstance();
  };
  Chapter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Chapter$Companion_instance = null;
  function Chapter$Companion_getInstance() {
    if (Chapter$Companion_instance === null) {
      new Chapter$Companion();
    }
    return Chapter$Companion_instance;
  }
  function Chapter$$serializer() {
    this.descriptor_t8kxzw$_0 = new SerialClassDescImpl('eu.karelhovorka.textgame.core.bo.Chapter', this);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('categories', true);
    this.descriptor.addElement_ivxn3r$('theme', true);
    this.descriptor.addElement_ivxn3r$('flagGroups', true);
    this.descriptor.addElement_ivxn3r$('states', false);
    this.descriptor.addElement_ivxn3r$('testDefaultTheme', true);
    this.descriptor.addElement_ivxn3r$('filePrefix', true);
    this.descriptor.addElement_ivxn3r$('audio', true);
    Chapter$$serializer_instance = this;
  }
  Object.defineProperty(Chapter$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_t8kxzw$_0;
    }
  });
  Chapter$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.name);
    if (!equals(obj.categories, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.categories);
    if (!equals(obj.theme, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 3, internal.StringSerializer, obj.theme);
    if (!equals(obj.flagGroups, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 4))
      output.encodeSerializableElement_blecud$(this.descriptor, 4, new ReferenceArraySerializer(getKClass(FlagGroup), FlagGroup$$serializer_getInstance()), obj.flagGroups);
    output.encodeSerializableElement_blecud$(this.descriptor, 5, new ReferenceArraySerializer(getKClass(State), State$$serializer_getInstance()), obj.states);
    if (!equals(obj.testDefaultTheme, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 6))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 6, internal.StringSerializer, obj.testDefaultTheme);
    if (!equals(obj.filePrefix, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 7))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 7, internal.StringSerializer, obj.filePrefix);
    if (!equals(obj.audio, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 8))
      output.encodeSerializableElement_blecud$(this.descriptor, 8, new ReferenceArraySerializer(getKClass(Audio), Audio$$serializer_getInstance()), obj.audio);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Chapter$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 3, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 3, internal.StringSerializer, local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 4, new ReferenceArraySerializer(getKClass(FlagGroup), FlagGroup$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 4, new ReferenceArraySerializer(getKClass(FlagGroup), FlagGroup$$serializer_getInstance()), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = (bitMask0 & 32) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 5, new ReferenceArraySerializer(getKClass(State), State$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 5, new ReferenceArraySerializer(getKClass(State), State$$serializer_getInstance()), local5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case 6:
          local6 = (bitMask0 & 64) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 6, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 6, internal.StringSerializer, local6);
          bitMask0 |= 64;
          if (!readAll)
            break;
        case 7:
          local7 = (bitMask0 & 128) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 7, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 7, internal.StringSerializer, local7);
          bitMask0 |= 128;
          if (!readAll)
            break;
        case 8:
          local8 = (bitMask0 & 256) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 8, new ReferenceArraySerializer(getKClass(Audio), Audio$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 8, new ReferenceArraySerializer(getKClass(Audio), Audio$$serializer_getInstance()), local8);
          bitMask0 |= 256;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Chapter_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, null);
  };
  Chapter$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new NullableSerializer(internal.StringSerializer), new ReferenceArraySerializer(getKClass(FlagGroup), FlagGroup$$serializer_getInstance()), new ReferenceArraySerializer(getKClass(State), State$$serializer_getInstance()), new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.StringSerializer), new ReferenceArraySerializer(getKClass(Audio), Audio$$serializer_getInstance())];
  };
  Chapter$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Chapter$$serializer_instance = null;
  function Chapter$$serializer_getInstance() {
    if (Chapter$$serializer_instance === null) {
      new Chapter$$serializer();
    }
    return Chapter$$serializer_instance;
  }
  function Chapter_init(seen1, id, name, categories, theme, flagGroups, states, testDefaultTheme, filePrefix, audio, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Chapter.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id_60r9go$_0 = id;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen1 & 4) === 0) {
      $this.categories_qwv45j$_0 = [];
    }
     else
      $this.categories_qwv45j$_0 = categories;
    if ((seen1 & 8) === 0)
      $this.theme_oxw3wo$_0 = null;
    else
      $this.theme_oxw3wo$_0 = theme;
    if ((seen1 & 16) === 0) {
      $this.flagGroups = [];
    }
     else
      $this.flagGroups = flagGroups;
    if ((seen1 & 32) === 0)
      throw new MissingFieldException('states');
    else
      $this.states = states;
    if ((seen1 & 64) === 0)
      $this.testDefaultTheme = null;
    else
      $this.testDefaultTheme = testDefaultTheme;
    if ((seen1 & 128) === 0)
      $this.filePrefix = null;
    else
      $this.filePrefix = filePrefix;
    if ((seen1 & 256) === 0) {
      $this.audio = [];
    }
     else
      $this.audio = audio;
    return $this;
  }
  Chapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Chapter',
    interfaces: [BaseElement]
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
  Chapter.prototype.component9 = function () {
    return this.audio;
  };
  Chapter.prototype.copy_a0fekh$ = function (id, name, categories, theme, flagGroups, states, testDefaultTheme, filePrefix, audio) {
    return new Chapter(id === void 0 ? this.id : id, name === void 0 ? this.name : name, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme, flagGroups === void 0 ? this.flagGroups : flagGroups, states === void 0 ? this.states : states, testDefaultTheme === void 0 ? this.testDefaultTheme : testDefaultTheme, filePrefix === void 0 ? this.filePrefix : filePrefix, audio === void 0 ? this.audio : audio);
  };
  Chapter.prototype.toString = function () {
    return 'Chapter(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + (', flagGroups=' + Kotlin.toString(this.flagGroups)) + (', states=' + Kotlin.toString(this.states)) + (', testDefaultTheme=' + Kotlin.toString(this.testDefaultTheme)) + (', filePrefix=' + Kotlin.toString(this.filePrefix)) + (', audio=' + Kotlin.toString(this.audio)) + ')';
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
    result = result * 31 + Kotlin.hashCode(this.audio) | 0;
    return result;
  };
  Chapter.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.flagGroups, other.flagGroups) && Kotlin.equals(this.states, other.states) && Kotlin.equals(this.testDefaultTheme, other.testDefaultTheme) && Kotlin.equals(this.filePrefix, other.filePrefix) && Kotlin.equals(this.audio, other.audio)))));
  };
  function ChapterCompletion(chapterId, stateIds, moveIds, completion) {
    ChapterCompletion$Companion_getInstance();
    if (stateIds === void 0) {
      stateIds = [];
    }
    if (moveIds === void 0) {
      moveIds = [];
    }
    if (completion === void 0)
      completion = 0.0;
    this.chapterId = chapterId;
    this.stateIds = stateIds;
    this.moveIds = moveIds;
    this.completion = completion;
  }
  ChapterCompletion.prototype.asPercentage = function () {
    return roundToInt(this.completion * 100.0).toString() + '%';
  };
  function ChapterCompletion$Companion() {
    ChapterCompletion$Companion_instance = this;
  }
  ChapterCompletion$Companion.prototype.serializer = function () {
    return ChapterCompletion$$serializer_getInstance();
  };
  ChapterCompletion$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ChapterCompletion$Companion_instance = null;
  function ChapterCompletion$Companion_getInstance() {
    if (ChapterCompletion$Companion_instance === null) {
      new ChapterCompletion$Companion();
    }
    return ChapterCompletion$Companion_instance;
  }
  function ChapterCompletion$$serializer() {
    this.descriptor_1nuel4$_0 = new SerialClassDescImpl('eu.karelhovorka.textgame.core.bo.ChapterCompletion', this);
    this.descriptor.addElement_ivxn3r$('chapterId', false);
    this.descriptor.addElement_ivxn3r$('stateIds', true);
    this.descriptor.addElement_ivxn3r$('moveIds', true);
    this.descriptor.addElement_ivxn3r$('completion', true);
    ChapterCompletion$$serializer_instance = this;
  }
  Object.defineProperty(ChapterCompletion$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_1nuel4$_0;
    }
  });
  ChapterCompletion$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.chapterId);
    if (!equals(obj.stateIds, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeSerializableElement_blecud$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.stateIds);
    if (!equals(obj.moveIds, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.moveIds);
    if (!equals(obj.completion, 0.0) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeFloatElement_t7qhdx$(this.descriptor, 3, obj.completion);
    output.endStructure_qatsm0$(this.descriptor);
  };
  ChapterCompletion$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeFloatElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return ChapterCompletion_init(bitMask0, local0, local1, local2, local3, null);
  };
  ChapterCompletion$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), internal.FloatSerializer];
  };
  ChapterCompletion$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var ChapterCompletion$$serializer_instance = null;
  function ChapterCompletion$$serializer_getInstance() {
    if (ChapterCompletion$$serializer_instance === null) {
      new ChapterCompletion$$serializer();
    }
    return ChapterCompletion$$serializer_instance;
  }
  function ChapterCompletion_init(seen1, chapterId, stateIds, moveIds, completion, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(ChapterCompletion.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('chapterId');
    else
      $this.chapterId = chapterId;
    if ((seen1 & 2) === 0) {
      $this.stateIds = [];
    }
     else
      $this.stateIds = stateIds;
    if ((seen1 & 4) === 0) {
      $this.moveIds = [];
    }
     else
      $this.moveIds = moveIds;
    if ((seen1 & 8) === 0)
      $this.completion = 0.0;
    else
      $this.completion = completion;
    return $this;
  }
  ChapterCompletion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChapterCompletion',
    interfaces: []
  };
  ChapterCompletion.prototype.component1 = function () {
    return this.chapterId;
  };
  ChapterCompletion.prototype.component2 = function () {
    return this.stateIds;
  };
  ChapterCompletion.prototype.component3 = function () {
    return this.moveIds;
  };
  ChapterCompletion.prototype.component4 = function () {
    return this.completion;
  };
  ChapterCompletion.prototype.copy_uaq7jp$ = function (chapterId, stateIds, moveIds, completion) {
    return new ChapterCompletion(chapterId === void 0 ? this.chapterId : chapterId, stateIds === void 0 ? this.stateIds : stateIds, moveIds === void 0 ? this.moveIds : moveIds, completion === void 0 ? this.completion : completion);
  };
  ChapterCompletion.prototype.toString = function () {
    return 'ChapterCompletion(chapterId=' + Kotlin.toString(this.chapterId) + (', stateIds=' + Kotlin.toString(this.stateIds)) + (', moveIds=' + Kotlin.toString(this.moveIds)) + (', completion=' + Kotlin.toString(this.completion)) + ')';
  };
  ChapterCompletion.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.chapterId) | 0;
    result = result * 31 + Kotlin.hashCode(this.stateIds) | 0;
    result = result * 31 + Kotlin.hashCode(this.moveIds) | 0;
    result = result * 31 + Kotlin.hashCode(this.completion) | 0;
    return result;
  };
  ChapterCompletion.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.stateIds, other.stateIds) && Kotlin.equals(this.moveIds, other.moveIds) && Kotlin.equals(this.completion, other.completion)))));
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
    FlagGroup$Companion_getInstance();
    this.name = name;
    this.flags = flags;
    this.type = type;
  }
  function FlagGroup$Companion() {
    FlagGroup$Companion_instance = this;
  }
  FlagGroup$Companion.prototype.serializer = function () {
    return FlagGroup$$serializer_getInstance();
  };
  FlagGroup$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FlagGroup$Companion_instance = null;
  function FlagGroup$Companion_getInstance() {
    if (FlagGroup$Companion_instance === null) {
      new FlagGroup$Companion();
    }
    return FlagGroup$Companion_instance;
  }
  function FlagGroup$$serializer() {
    this.descriptor_7q005e$_0 = new SerialClassDescImpl('eu.karelhovorka.textgame.core.bo.FlagGroup', this);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('flags', false);
    this.descriptor.addElement_ivxn3r$('type', false);
    FlagGroup$$serializer_instance = this;
  }
  Object.defineProperty(FlagGroup$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_7q005e$_0;
    }
  });
  FlagGroup$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.name);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.flags);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, new EnumSerializer(getKClass(FlagType)), obj.type);
    output.endStructure_qatsm0$(this.descriptor);
  };
  FlagGroup$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, new EnumSerializer(getKClass(FlagType))) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, new EnumSerializer(getKClass(FlagType)), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return FlagGroup_init(bitMask0, local0, local1, local2, null);
  };
  FlagGroup$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new EnumSerializer(getKClass(FlagType))];
  };
  FlagGroup$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var FlagGroup$$serializer_instance = null;
  function FlagGroup$$serializer_getInstance() {
    if (FlagGroup$$serializer_instance === null) {
      new FlagGroup$$serializer();
    }
    return FlagGroup$$serializer_instance;
  }
  function FlagGroup_init(seen1, name, flags, type, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(FlagGroup.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('flags');
    else
      $this.flags = flags;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('type');
    else
      $this.type = type;
    return $this;
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
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== states.length; ++tmp$) {
      var element = states[tmp$];
      var list = asIterable(element.moves);
      addAll(destination, list);
    }
    var moves = copyToArray(destination);
    return new GameConfig(first(states).id, states, moves, [chapter]);
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
  function GraphElement() {
  }
  GraphElement.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GraphElement',
    interfaces: [BaseElement]
  };
  function debugString($receiver) {
    var tmp$ = '\n' + '        <pre>' + '\n' + '        flags:' + toList($receiver.flags) + '\n' + '        variables:';
    var $receiver_0 = $receiver.variables;
    var destination = LinkedHashMap_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (!equals(element.key, 'DEBUG')) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    return trimIndent(tmp$ + destination + '\n' + '        visitedChapters:' + toList($receiver.visitedChapters) + '\n' + '        <\/pre>' + '\n' + '    ');
  }
  function toMinigameState($receiver, id) {
    return new MinigameState(id, $receiver.flags, $receiver.variables);
  }
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
    if (!equals($receiver.gameId, other.gameId))
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
    result = (31 * result | 0) + hashCode($receiver.gameId) | 0;
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
    return new ImmutableGameState($receiver.gameId, $receiver.flags, $receiver.currentStateId, $receiver.variables, $receiver.currentTheme, $receiver.visitedChapters, $receiver.timestamp, $receiver.endType);
  }
  function ImmutableGameState(gameId, flags, currentStateId, variables, currentTheme, visitedChapters, timestamp, endType) {
    ImmutableGameState$Companion_getInstance();
    if (visitedChapters === void 0) {
      visitedChapters = [];
    }
    if (timestamp === void 0)
      timestamp = L0;
    if (endType === void 0)
      endType = EndType$NONE_getInstance();
    this.gameId_yboqni$_0 = gameId;
    this.flags_hghble$_0 = flags;
    this.currentStateId_7oqf1o$_0 = currentStateId;
    this.variables_islbby$_0 = variables;
    this.currentTheme_mwpsvl$_0 = currentTheme;
    this.visitedChapters_c3x8th$_0 = visitedChapters;
    this.timestamp_ib6j1b$_0 = timestamp;
    this.endType_bzto2o$_0 = endType;
  }
  Object.defineProperty(ImmutableGameState.prototype, 'gameId', {
    get: function () {
      return this.gameId_yboqni$_0;
    }
  });
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
  Object.defineProperty(ImmutableGameState.prototype, 'endType', {
    get: function () {
      return this.endType_bzto2o$_0;
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
    this.descriptor.addElement_ivxn3r$('gameId', false);
    this.descriptor.addElement_ivxn3r$('flags', false);
    this.descriptor.addElement_ivxn3r$('currentStateId', false);
    this.descriptor.addElement_ivxn3r$('variables', false);
    this.descriptor.addElement_ivxn3r$('currentTheme', false);
    this.descriptor.addElement_ivxn3r$('visitedChapters', true);
    this.descriptor.addElement_ivxn3r$('timestamp', true);
    this.descriptor.addElement_ivxn3r$('endType', true);
    ImmutableGameState$$serializer_instance = this;
  }
  Object.defineProperty(ImmutableGameState$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_phjvbs$_0;
    }
  });
  ImmutableGameState$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.gameId);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.flags);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.currentStateId);
    output.encodeSerializableElement_blecud$(this.descriptor, 3, new LinkedHashMapSerializer(internal.StringSerializer, internal.StringSerializer), obj.variables);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 4, internal.StringSerializer, obj.currentTheme);
    if (!equals(obj.visitedChapters, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 5))
      output.encodeSerializableElement_blecud$(this.descriptor, 5, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.visitedChapters);
    if (!equals(obj.timestamp, L0) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 6))
      output.encodeLongElement_a3zgoj$(this.descriptor, 6, obj.timestamp);
    if (!equals(obj.endType, EndType$NONE_getInstance()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 7))
      output.encodeSerializableElement_blecud$(this.descriptor, 7, new EnumSerializer(getKClass(EndType)), obj.endType);
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
    , local5
    , local6
    , local7;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, new LinkedHashMapSerializer(internal.StringSerializer, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, new LinkedHashMapSerializer(internal.StringSerializer, internal.StringSerializer), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 4, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 4, internal.StringSerializer, local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = (bitMask0 & 32) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 5, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 5, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case 6:
          local6 = input.decodeLongElement_3zr2iy$(this.descriptor, 6);
          bitMask0 |= 64;
          if (!readAll)
            break;
        case 7:
          local7 = (bitMask0 & 128) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 7, new EnumSerializer(getKClass(EndType))) : input.updateSerializableElement_ehubvl$(this.descriptor, 7, new EnumSerializer(getKClass(EndType)), local7);
          bitMask0 |= 128;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return ImmutableGameState_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, null);
  };
  ImmutableGameState$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), internal.StringSerializer, new LinkedHashMapSerializer(internal.StringSerializer, internal.StringSerializer), new NullableSerializer(internal.StringSerializer), new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), internal.LongSerializer, new EnumSerializer(getKClass(EndType))];
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
  function ImmutableGameState_init(seen1, gameId, flags, currentStateId, variables, currentTheme, visitedChapters, timestamp, endType, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(ImmutableGameState.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('gameId');
    else
      $this.gameId_yboqni$_0 = gameId;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('flags');
    else
      $this.flags_hghble$_0 = flags;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('currentStateId');
    else
      $this.currentStateId_7oqf1o$_0 = currentStateId;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('variables');
    else
      $this.variables_islbby$_0 = variables;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('currentTheme');
    else
      $this.currentTheme_mwpsvl$_0 = currentTheme;
    if ((seen1 & 32) === 0) {
      $this.visitedChapters_c3x8th$_0 = [];
    }
     else
      $this.visitedChapters_c3x8th$_0 = visitedChapters;
    if ((seen1 & 64) === 0)
      $this.timestamp_ib6j1b$_0 = L0;
    else
      $this.timestamp_ib6j1b$_0 = timestamp;
    if ((seen1 & 128) === 0)
      $this.endType_bzto2o$_0 = EndType$NONE_getInstance();
    else
      $this.endType_bzto2o$_0 = endType;
    return $this;
  }
  ImmutableGameState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImmutableGameState',
    interfaces: [GameState]
  };
  ImmutableGameState.prototype.component1 = function () {
    return this.gameId;
  };
  ImmutableGameState.prototype.component2 = function () {
    return this.flags;
  };
  ImmutableGameState.prototype.component3 = function () {
    return this.currentStateId;
  };
  ImmutableGameState.prototype.component4 = function () {
    return this.variables;
  };
  ImmutableGameState.prototype.component5 = function () {
    return this.currentTheme;
  };
  ImmutableGameState.prototype.component6 = function () {
    return this.visitedChapters;
  };
  ImmutableGameState.prototype.component7 = function () {
    return this.timestamp;
  };
  ImmutableGameState.prototype.component8 = function () {
    return this.endType;
  };
  ImmutableGameState.prototype.copy_5p854k$ = function (gameId, flags, currentStateId, variables, currentTheme, visitedChapters, timestamp, endType) {
    return new ImmutableGameState(gameId === void 0 ? this.gameId : gameId, flags === void 0 ? this.flags : flags, currentStateId === void 0 ? this.currentStateId : currentStateId, variables === void 0 ? this.variables : variables, currentTheme === void 0 ? this.currentTheme : currentTheme, visitedChapters === void 0 ? this.visitedChapters : visitedChapters, timestamp === void 0 ? this.timestamp : timestamp, endType === void 0 ? this.endType : endType);
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
  function removeNotInteractive_0($receiver) {
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      if (!element.isAutoMove())
        destination.add_11rb$(element);
    }
    return destination;
  }
  function simpleString($receiver) {
    return $receiver.id + ' -> ' + $receiver.targetId;
  }
  function describe($receiver) {
    var result = simpleString($receiver) + '\n';
    if (!($receiver.flags.length === 0)) {
      result += 'Priznaky: ' + toList($receiver.flags) + '\n';
    }
    if (!($receiver.flagsRequired.length === 0)) {
      result += 'podminena: ' + toList($receiver.flagsRequired) + '\n';
    }
    if (!($receiver.flagsDisallowing.length === 0)) {
      result += 'vyloucena: ' + toList($receiver.flagsDisallowing) + '\n';
    }
    if (!($receiver.categories.length === 0)) {
      result += 'kategorie: ' + toList($receiver.categories) + '\n';
    }
    if ($receiver.theme != null) {
      result += 'tema: ' + toString($receiver.theme) + '\n';
    }
    result += 'poziraci: ' + $receiver.selfConsuming + '\n';
    return result;
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
  function Move(id, text, flags, flagsToRemove, categories, theme, background, variables, pause, illustration, caption, image, selfConsuming, targetId, flagsRequired, flagsDisallowing, hash, testChapterId) {
    Move$Companion_getInstance();
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
    if (testChapterId === void 0)
      testChapterId = null;
    this.id_dibsns$_0 = id;
    this.text_g8m8fu$_0 = text;
    this.flags_cqjy3q$_0 = flags;
    this.flagsToRemove_tc6wzp$_0 = flagsToRemove;
    this.categories_d34k5l$_0 = categories;
    this.theme_661qw8$_0 = theme;
    this.background_b71o0r$_0 = background;
    this.variables_ibm8ye$_0 = variables;
    this.pause_85sgdx$_0 = pause;
    this.illustration_t0026b$_0 = illustration;
    this.caption = caption;
    this.image = image;
    this.selfConsuming = selfConsuming;
    this.targetId = targetId;
    this.flagsRequired = flagsRequired;
    this.flagsDisallowing = flagsDisallowing;
    this.hash = hash;
    this.testChapterId = testChapterId;
  }
  Object.defineProperty(Move.prototype, 'id', {
    get: function () {
      return this.id_dibsns$_0;
    }
  });
  Object.defineProperty(Move.prototype, 'text', {
    get: function () {
      return this.text_g8m8fu$_0;
    }
  });
  Object.defineProperty(Move.prototype, 'flags', {
    get: function () {
      return this.flags_cqjy3q$_0;
    }
  });
  Object.defineProperty(Move.prototype, 'flagsToRemove', {
    get: function () {
      return this.flagsToRemove_tc6wzp$_0;
    }
  });
  Object.defineProperty(Move.prototype, 'categories', {
    get: function () {
      return this.categories_d34k5l$_0;
    }
  });
  Object.defineProperty(Move.prototype, 'theme', {
    get: function () {
      return this.theme_661qw8$_0;
    }
  });
  Object.defineProperty(Move.prototype, 'background', {
    get: function () {
      return this.background_b71o0r$_0;
    }
  });
  Object.defineProperty(Move.prototype, 'variables', {
    get: function () {
      return this.variables_ibm8ye$_0;
    }
  });
  Object.defineProperty(Move.prototype, 'pause', {
    get: function () {
      return this.pause_85sgdx$_0;
    }
  });
  Object.defineProperty(Move.prototype, 'illustration', {
    get: function () {
      return this.illustration_t0026b$_0;
    }
  });
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
  function Move$Companion() {
    Move$Companion_instance = this;
  }
  Move$Companion.prototype.serializer = function () {
    return Move$$serializer_getInstance();
  };
  Move$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Move$Companion_instance = null;
  function Move$Companion_getInstance() {
    if (Move$Companion_instance === null) {
      new Move$Companion();
    }
    return Move$Companion_instance;
  }
  function Move$$serializer() {
    this.descriptor_bqcat0$_0 = new SerialClassDescImpl('eu.karelhovorka.textgame.core.bo.Move', this);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('text', true);
    this.descriptor.addElement_ivxn3r$('flags', true);
    this.descriptor.addElement_ivxn3r$('flagsToRemove', true);
    this.descriptor.addElement_ivxn3r$('categories', true);
    this.descriptor.addElement_ivxn3r$('theme', true);
    this.descriptor.addElement_ivxn3r$('background', true);
    this.descriptor.addElement_ivxn3r$('variables', true);
    this.descriptor.addElement_ivxn3r$('pause', true);
    this.descriptor.addElement_ivxn3r$('illustration', true);
    this.descriptor.addElement_ivxn3r$('caption', true);
    this.descriptor.addElement_ivxn3r$('image', true);
    this.descriptor.addElement_ivxn3r$('selfConsuming', true);
    this.descriptor.addElement_ivxn3r$('targetId', false);
    this.descriptor.addElement_ivxn3r$('flagsRequired', true);
    this.descriptor.addElement_ivxn3r$('flagsDisallowing', true);
    this.descriptor.addElement_ivxn3r$('hash', true);
    this.descriptor.addElement_ivxn3r$('testChapterId', true);
    Move$$serializer_instance = this;
  }
  Object.defineProperty(Move$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_bqcat0$_0;
    }
  });
  Move$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    if (!equals(obj.text, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 1, internal.StringSerializer, obj.text);
    if (!equals(obj.flags, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.flags);
    if (!equals(obj.flagsToRemove, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeSerializableElement_blecud$(this.descriptor, 3, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.flagsToRemove);
    if (!equals(obj.categories, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 4))
      output.encodeSerializableElement_blecud$(this.descriptor, 4, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.categories);
    if (!equals(obj.theme, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 5))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 5, internal.StringSerializer, obj.theme);
    if (!equals(obj.background, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 6))
      output.encodeSerializableElement_blecud$(this.descriptor, 6, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.background);
    if (!equals(obj.variables, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 7))
      output.encodeSerializableElement_blecud$(this.descriptor, 7, new ReferenceArraySerializer(getKClass(Variable), Variable$$serializer_getInstance()), obj.variables);
    if (!equals(obj.pause, PauseType$AUTO_getInstance()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 8))
      output.encodeSerializableElement_blecud$(this.descriptor, 8, new EnumSerializer(getKClass(PauseType)), obj.pause);
    if (!equals(obj.illustration, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 9))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 9, internal.StringSerializer, obj.illustration);
    if (!equals(obj.caption, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 10))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 10, internal.StringSerializer, obj.caption);
    if (!equals(obj.image, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 11))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 11, internal.StringSerializer, obj.image);
    if (!equals(obj.selfConsuming, MoveBuilder$Companion_getInstance().DEFAULT_SELF_CONSUMING) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 12))
      output.encodeBooleanElement_w1b0nl$(this.descriptor, 12, obj.selfConsuming);
    output.encodeStringElement_bgm7zs$(this.descriptor, 13, obj.targetId);
    if (!equals(obj.flagsRequired, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 14))
      output.encodeSerializableElement_blecud$(this.descriptor, 14, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.flagsRequired);
    if (!equals(obj.flagsDisallowing, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 15))
      output.encodeSerializableElement_blecud$(this.descriptor, 15, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.flagsDisallowing);
    if (!equals(obj.hash, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 16))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 16, internal.StringSerializer, obj.hash);
    if (!equals(obj.testChapterId, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 17))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 17, internal.StringSerializer, obj.testChapterId);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Move$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8
    , local9
    , local10
    , local11
    , local12
    , local13
    , local14
    , local15
    , local16
    , local17;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 1, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 1, internal.StringSerializer, local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 4, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 4, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = (bitMask0 & 32) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 5, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 5, internal.StringSerializer, local5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case 6:
          local6 = (bitMask0 & 64) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 6, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 6, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local6);
          bitMask0 |= 64;
          if (!readAll)
            break;
        case 7:
          local7 = (bitMask0 & 128) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 7, new ReferenceArraySerializer(getKClass(Variable), Variable$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 7, new ReferenceArraySerializer(getKClass(Variable), Variable$$serializer_getInstance()), local7);
          bitMask0 |= 128;
          if (!readAll)
            break;
        case 8:
          local8 = (bitMask0 & 256) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 8, new EnumSerializer(getKClass(PauseType))) : input.updateSerializableElement_ehubvl$(this.descriptor, 8, new EnumSerializer(getKClass(PauseType)), local8);
          bitMask0 |= 256;
          if (!readAll)
            break;
        case 9:
          local9 = (bitMask0 & 512) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 9, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 9, internal.StringSerializer, local9);
          bitMask0 |= 512;
          if (!readAll)
            break;
        case 10:
          local10 = (bitMask0 & 1024) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 10, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 10, internal.StringSerializer, local10);
          bitMask0 |= 1024;
          if (!readAll)
            break;
        case 11:
          local11 = (bitMask0 & 2048) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 11, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 11, internal.StringSerializer, local11);
          bitMask0 |= 2048;
          if (!readAll)
            break;
        case 12:
          local12 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 12);
          bitMask0 |= 4096;
          if (!readAll)
            break;
        case 13:
          local13 = input.decodeStringElement_3zr2iy$(this.descriptor, 13);
          bitMask0 |= 8192;
          if (!readAll)
            break;
        case 14:
          local14 = (bitMask0 & 16384) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 14, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 14, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local14);
          bitMask0 |= 16384;
          if (!readAll)
            break;
        case 15:
          local15 = (bitMask0 & 32768) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 15, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 15, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local15);
          bitMask0 |= 32768;
          if (!readAll)
            break;
        case 16:
          local16 = (bitMask0 & 65536) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 16, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 16, internal.StringSerializer, local16);
          bitMask0 |= 65536;
          if (!readAll)
            break;
        case 17:
          local17 = (bitMask0 & 131072) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 17, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 17, internal.StringSerializer, local17);
          bitMask0 |= 131072;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Move_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, local11, local12, local13, local14, local15, local16, local17, null);
  };
  Move$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new NullableSerializer(internal.StringSerializer), new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new NullableSerializer(internal.StringSerializer), new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new ReferenceArraySerializer(getKClass(Variable), Variable$$serializer_getInstance()), new EnumSerializer(getKClass(PauseType)), new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.StringSerializer), internal.BooleanSerializer, internal.StringSerializer, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.StringSerializer)];
  };
  Move$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Move$$serializer_instance = null;
  function Move$$serializer_getInstance() {
    if (Move$$serializer_instance === null) {
      new Move$$serializer();
    }
    return Move$$serializer_instance;
  }
  function Move_init(seen1, id, text, flags, flagsToRemove, categories, theme, background, variables, pause, illustration, caption, image, selfConsuming, targetId, flagsRequired, flagsDisallowing, hash, testChapterId, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Move.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id_dibsns$_0 = id;
    if ((seen1 & 2) === 0)
      $this.text_g8m8fu$_0 = null;
    else
      $this.text_g8m8fu$_0 = text;
    if ((seen1 & 4) === 0) {
      $this.flags_cqjy3q$_0 = [];
    }
     else
      $this.flags_cqjy3q$_0 = flags;
    if ((seen1 & 8) === 0) {
      $this.flagsToRemove_tc6wzp$_0 = [];
    }
     else
      $this.flagsToRemove_tc6wzp$_0 = flagsToRemove;
    if ((seen1 & 16) === 0) {
      $this.categories_d34k5l$_0 = [];
    }
     else
      $this.categories_d34k5l$_0 = categories;
    if ((seen1 & 32) === 0)
      $this.theme_661qw8$_0 = null;
    else
      $this.theme_661qw8$_0 = theme;
    if ((seen1 & 64) === 0) {
      $this.background_b71o0r$_0 = [];
    }
     else
      $this.background_b71o0r$_0 = background;
    if ((seen1 & 128) === 0) {
      $this.variables_ibm8ye$_0 = [];
    }
     else
      $this.variables_ibm8ye$_0 = variables;
    if ((seen1 & 256) === 0)
      $this.pause_85sgdx$_0 = PauseType$AUTO_getInstance();
    else
      $this.pause_85sgdx$_0 = pause;
    if ((seen1 & 512) === 0)
      $this.illustration_t0026b$_0 = null;
    else
      $this.illustration_t0026b$_0 = illustration;
    if ((seen1 & 1024) === 0)
      $this.caption = null;
    else
      $this.caption = caption;
    if ((seen1 & 2048) === 0)
      $this.image = null;
    else
      $this.image = image;
    if ((seen1 & 4096) === 0)
      $this.selfConsuming = MoveBuilder$Companion_getInstance().DEFAULT_SELF_CONSUMING;
    else
      $this.selfConsuming = selfConsuming;
    if ((seen1 & 8192) === 0)
      throw new MissingFieldException('targetId');
    else
      $this.targetId = targetId;
    if ((seen1 & 16384) === 0) {
      $this.flagsRequired = [];
    }
     else
      $this.flagsRequired = flagsRequired;
    if ((seen1 & 32768) === 0) {
      $this.flagsDisallowing = [];
    }
     else
      $this.flagsDisallowing = flagsDisallowing;
    if ((seen1 & 65536) === 0)
      $this.hash = null;
    else
      $this.hash = hash;
    if ((seen1 & 131072) === 0)
      $this.testChapterId = null;
    else
      $this.testChapterId = testChapterId;
    return $this;
  }
  Move.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Move',
    interfaces: [GraphElement]
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
  Move.prototype.component18 = function () {
    return this.testChapterId;
  };
  Move.prototype.copy_41ewgc$ = function (id, text, flags, flagsToRemove, categories, theme, background, variables, pause, illustration, caption, image, selfConsuming, targetId, flagsRequired, flagsDisallowing, hash, testChapterId) {
    return new Move(id === void 0 ? this.id : id, text === void 0 ? this.text : text, flags === void 0 ? this.flags : flags, flagsToRemove === void 0 ? this.flagsToRemove : flagsToRemove, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme, background === void 0 ? this.background : background, variables === void 0 ? this.variables : variables, pause === void 0 ? this.pause : pause, illustration === void 0 ? this.illustration : illustration, caption === void 0 ? this.caption : caption, image === void 0 ? this.image : image, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, targetId === void 0 ? this.targetId : targetId, flagsRequired === void 0 ? this.flagsRequired : flagsRequired, flagsDisallowing === void 0 ? this.flagsDisallowing : flagsDisallowing, hash === void 0 ? this.hash : hash, testChapterId === void 0 ? this.testChapterId : testChapterId);
  };
  Move.prototype.toString = function () {
    return 'Move(id=' + Kotlin.toString(this.id) + (', text=' + Kotlin.toString(this.text)) + (', flags=' + Kotlin.toString(this.flags)) + (', flagsToRemove=' + Kotlin.toString(this.flagsToRemove)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + (', background=' + Kotlin.toString(this.background)) + (', variables=' + Kotlin.toString(this.variables)) + (', pause=' + Kotlin.toString(this.pause)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', caption=' + Kotlin.toString(this.caption)) + (', image=' + Kotlin.toString(this.image)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', targetId=' + Kotlin.toString(this.targetId)) + (', flagsRequired=' + Kotlin.toString(this.flagsRequired)) + (', flagsDisallowing=' + Kotlin.toString(this.flagsDisallowing)) + (', hash=' + Kotlin.toString(this.hash)) + (', testChapterId=' + Kotlin.toString(this.testChapterId)) + ')';
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
    result = result * 31 + Kotlin.hashCode(this.testChapterId) | 0;
    return result;
  };
  Move.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.flagsToRemove, other.flagsToRemove) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.background, other.background) && Kotlin.equals(this.variables, other.variables) && Kotlin.equals(this.pause, other.pause) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.caption, other.caption) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.targetId, other.targetId) && Kotlin.equals(this.flagsRequired, other.flagsRequired) && Kotlin.equals(this.flagsDisallowing, other.flagsDisallowing) && Kotlin.equals(this.hash, other.hash) && Kotlin.equals(this.testChapterId, other.testChapterId)))));
  };
  function MoveCommand(moveId, moveIndex, text) {
    MoveCommand$Companion_getInstance();
    if (moveId === void 0)
      moveId = null;
    if (moveIndex === void 0)
      moveIndex = null;
    if (text === void 0)
      text = null;
    this.moveId = moveId;
    this.moveIndex = moveIndex;
    this.text = text;
    this.continueMove = (this.moveIndex == null && this.moveId == null);
    if (this.moveId != null && this.moveIndex != null) {
      throw IllegalArgumentException_init('only one from moveId and moveIndex can be set');
    }
    if (this.moveId == null && this.text != null) {
      throw IllegalArgumentException_init('text also needs moveId');
    }
  }
  function MoveCommand$Companion() {
    MoveCommand$Companion_instance = this;
  }
  MoveCommand$Companion.prototype.serializer = function () {
    return MoveCommand$$serializer_getInstance();
  };
  MoveCommand$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MoveCommand$Companion_instance = null;
  function MoveCommand$Companion_getInstance() {
    if (MoveCommand$Companion_instance === null) {
      new MoveCommand$Companion();
    }
    return MoveCommand$Companion_instance;
  }
  function MoveCommand$$serializer() {
    this.descriptor_9kk16x$_0 = new SerialClassDescImpl('eu.karelhovorka.textgame.core.bo.MoveCommand', this);
    this.descriptor.addElement_ivxn3r$('moveId', true);
    this.descriptor.addElement_ivxn3r$('moveIndex', true);
    this.descriptor.addElement_ivxn3r$('text', true);
    this.descriptor.addElement_ivxn3r$('continueMove', true);
    MoveCommand$$serializer_instance = this;
  }
  Object.defineProperty(MoveCommand$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_9kk16x$_0;
    }
  });
  MoveCommand$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.moveId, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 0, internal.StringSerializer, obj.moveId);
    if (!equals(obj.moveIndex, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 1, internal.IntSerializer, obj.moveIndex);
    if (!equals(obj.text, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 2, internal.StringSerializer, obj.text);
    if (!equals(obj.continueMove, this.moveIndex == null && this.moveId == null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeBooleanElement_w1b0nl$(this.descriptor, 3, obj.continueMove);
    output.endStructure_qatsm0$(this.descriptor);
  };
  MoveCommand$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 0, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 0, internal.StringSerializer, local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 1, internal.IntSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 1, internal.IntSerializer, local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 2, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 2, internal.StringSerializer, local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeBooleanElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return MoveCommand_init(bitMask0, local0, local1, local2, local3, null);
  };
  MoveCommand$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.IntSerializer), new NullableSerializer(internal.StringSerializer), internal.BooleanSerializer];
  };
  MoveCommand$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MoveCommand$$serializer_instance = null;
  function MoveCommand$$serializer_getInstance() {
    if (MoveCommand$$serializer_instance === null) {
      new MoveCommand$$serializer();
    }
    return MoveCommand$$serializer_instance;
  }
  function MoveCommand_init(seen1, moveId, moveIndex, text, continueMove, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MoveCommand.prototype);
    if ((seen1 & 1) === 0)
      $this.moveId = null;
    else
      $this.moveId = moveId;
    if ((seen1 & 2) === 0)
      $this.moveIndex = null;
    else
      $this.moveIndex = moveIndex;
    if ((seen1 & 4) === 0)
      $this.text = null;
    else
      $this.text = text;
    if ((seen1 & 8) === 0)
      $this.continueMove = ($this.moveIndex == null && $this.moveId == null);
    else
      $this.continueMove = continueMove;
    if ($this.moveId != null && $this.moveIndex != null) {
      throw IllegalArgumentException_init('only one from moveId and moveIndex can be set');
    }
    if ($this.moveId == null && $this.text != null) {
      throw IllegalArgumentException_init('text also needs moveId');
    }
    return $this;
  }
  MoveCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveCommand',
    interfaces: []
  };
  MoveCommand.prototype.component1 = function () {
    return this.moveId;
  };
  MoveCommand.prototype.component2 = function () {
    return this.moveIndex;
  };
  MoveCommand.prototype.component3 = function () {
    return this.text;
  };
  MoveCommand.prototype.copy_mkitq3$ = function (moveId, moveIndex, text) {
    return new MoveCommand(moveId === void 0 ? this.moveId : moveId, moveIndex === void 0 ? this.moveIndex : moveIndex, text === void 0 ? this.text : text);
  };
  MoveCommand.prototype.toString = function () {
    return 'MoveCommand(moveId=' + Kotlin.toString(this.moveId) + (', moveIndex=' + Kotlin.toString(this.moveIndex)) + (', text=' + Kotlin.toString(this.text)) + ')';
  };
  MoveCommand.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.moveId) | 0;
    result = result * 31 + Kotlin.hashCode(this.moveIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  MoveCommand.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.moveId, other.moveId) && Kotlin.equals(this.moveIndex, other.moveIndex) && Kotlin.equals(this.text, other.text)))));
  };
  function MultiString(strings, rnd) {
    MultiString$Companion_getInstance();
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
  function MultiString$Companion() {
    MultiString$Companion_instance = this;
  }
  MultiString$Companion.prototype.serializer = function () {
    return MultiString$$serializer_getInstance();
  };
  MultiString$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MultiString$Companion_instance = null;
  function MultiString$Companion_getInstance() {
    if (MultiString$Companion_instance === null) {
      new MultiString$Companion();
    }
    return MultiString$Companion_instance;
  }
  function MultiString$$serializer() {
    this.descriptor_bqsex3$_0 = new SerialClassDescImpl('eu.karelhovorka.textgame.core.bo.MultiString', this);
    this.descriptor.addElement_ivxn3r$('strings', false);
    this.descriptor.addElement_ivxn3r$('rnd', true);
    MultiString$$serializer_instance = this;
  }
  Object.defineProperty(MultiString$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_bqsex3$_0;
    }
  });
  MultiString$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.strings);
    if (!equals(obj.rnd, 0) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeIntElement_4wpqag$(this.descriptor, 1, obj.rnd);
    output.endStructure_qatsm0$(this.descriptor);
  };
  MultiString$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
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
          local1 = input.decodeIntElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return MultiString_init(bitMask0, local0, local1, null);
  };
  MultiString$$serializer.prototype.childSerializers = function () {
    return [new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), internal.IntSerializer];
  };
  MultiString$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var MultiString$$serializer_instance = null;
  function MultiString$$serializer_getInstance() {
    if (MultiString$$serializer_instance === null) {
      new MultiString$$serializer();
    }
    return MultiString$$serializer_instance;
  }
  function MultiString_init(seen1, strings, rnd, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(MultiString.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('strings');
    else
      $this.strings = strings;
    if ((seen1 & 2) === 0)
      $this.rnd = 0;
    else
      $this.rnd = rnd;
    return $this;
  }
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
      default:throwISE('No enum constant eu.karelhovorka.textgame.core.bo.Selection.' + name);
    }
  }
  Selection.valueOf_61zpoe$ = Selection$valueOf;
  function flagsOrEmpty_0($receiver) {
    if ($receiver.flags.length === 0) {
      return '';
    }
    return toList($receiver.flags).toString();
  }
  function State(id, text, flags, flagsToRemove, categories, theme, background, variables, pause, illustration, chapterId, moves, endType, minigame, checkpoint, selection) {
    State$Companion_getInstance();
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
    if (moves === void 0) {
      moves = [];
    }
    if (endType === void 0)
      endType = EndType$NONE_getInstance();
    if (minigame === void 0)
      minigame = null;
    if (checkpoint === void 0)
      checkpoint = null;
    if (selection === void 0)
      selection = Selection$NONE_getInstance();
    this.id_c71dgs$_0 = id;
    this.text_1suqu$_0 = text;
    this.flags_831jei$_0 = flags;
    this.flagsToRemove_u4i1zt$_0 = flagsToRemove;
    this.categories_ntcayz$_0 = categories;
    this.theme_1ijc70$_0 = theme;
    this.background_ppf73t$_0 = background;
    this.variables_h4riei$_0 = variables;
    this.pause_3ia1op$_0 = pause;
    this.illustration_nq4gvd$_0 = illustration;
    this.chapterId = chapterId;
    this.moves = moves;
    this.endType = endType;
    this.minigame = minigame;
    this.checkpoint = checkpoint;
    this.selection = selection;
  }
  Object.defineProperty(State.prototype, 'id', {
    get: function () {
      return this.id_c71dgs$_0;
    }
  });
  Object.defineProperty(State.prototype, 'text', {
    get: function () {
      return this.text_1suqu$_0;
    }
  });
  Object.defineProperty(State.prototype, 'flags', {
    get: function () {
      return this.flags_831jei$_0;
    }
  });
  Object.defineProperty(State.prototype, 'flagsToRemove', {
    get: function () {
      return this.flagsToRemove_u4i1zt$_0;
    }
  });
  Object.defineProperty(State.prototype, 'categories', {
    get: function () {
      return this.categories_ntcayz$_0;
    }
  });
  Object.defineProperty(State.prototype, 'theme', {
    get: function () {
      return this.theme_1ijc70$_0;
    }
  });
  Object.defineProperty(State.prototype, 'background', {
    get: function () {
      return this.background_ppf73t$_0;
    }
  });
  Object.defineProperty(State.prototype, 'variables', {
    get: function () {
      return this.variables_h4riei$_0;
    }
  });
  Object.defineProperty(State.prototype, 'pause', {
    get: function () {
      return this.pause_3ia1op$_0;
    }
  });
  Object.defineProperty(State.prototype, 'illustration', {
    get: function () {
      return this.illustration_nq4gvd$_0;
    }
  });
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
  function State$Companion() {
    State$Companion_instance = this;
  }
  State$Companion.prototype.serializer = function () {
    return State$$serializer_getInstance();
  };
  State$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var State$Companion_instance = null;
  function State$Companion_getInstance() {
    if (State$Companion_instance === null) {
      new State$Companion();
    }
    return State$Companion_instance;
  }
  function State$$serializer() {
    this.descriptor_edc0tc$_0 = new SerialClassDescImpl('eu.karelhovorka.textgame.core.bo.State', this);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('text', true);
    this.descriptor.addElement_ivxn3r$('flags', true);
    this.descriptor.addElement_ivxn3r$('flagsToRemove', true);
    this.descriptor.addElement_ivxn3r$('categories', true);
    this.descriptor.addElement_ivxn3r$('theme', true);
    this.descriptor.addElement_ivxn3r$('background', true);
    this.descriptor.addElement_ivxn3r$('variables', true);
    this.descriptor.addElement_ivxn3r$('pause', true);
    this.descriptor.addElement_ivxn3r$('illustration', true);
    this.descriptor.addElement_ivxn3r$('chapterId', false);
    this.descriptor.addElement_ivxn3r$('moves', true);
    this.descriptor.addElement_ivxn3r$('endType', true);
    this.descriptor.addElement_ivxn3r$('minigame', true);
    this.descriptor.addElement_ivxn3r$('checkpoint', true);
    this.descriptor.addElement_ivxn3r$('selection', true);
    State$$serializer_instance = this;
  }
  Object.defineProperty(State$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_edc0tc$_0;
    }
  });
  State$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.id);
    if (!equals(obj.text, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 1, internal.StringSerializer, obj.text);
    if (!equals(obj.flags, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.flags);
    if (!equals(obj.flagsToRemove, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeSerializableElement_blecud$(this.descriptor, 3, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.flagsToRemove);
    if (!equals(obj.categories, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 4))
      output.encodeSerializableElement_blecud$(this.descriptor, 4, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.categories);
    if (!equals(obj.theme, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 5))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 5, internal.StringSerializer, obj.theme);
    if (!equals(obj.background, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 6))
      output.encodeSerializableElement_blecud$(this.descriptor, 6, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), obj.background);
    if (!equals(obj.variables, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 7))
      output.encodeSerializableElement_blecud$(this.descriptor, 7, new ReferenceArraySerializer(getKClass(Variable), Variable$$serializer_getInstance()), obj.variables);
    if (!equals(obj.pause, PauseType$AUTO_getInstance()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 8))
      output.encodeSerializableElement_blecud$(this.descriptor, 8, new EnumSerializer(getKClass(PauseType)), obj.pause);
    if (!equals(obj.illustration, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 9))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 9, internal.StringSerializer, obj.illustration);
    output.encodeStringElement_bgm7zs$(this.descriptor, 10, obj.chapterId);
    if (!equals(obj.moves, []) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 11))
      output.encodeSerializableElement_blecud$(this.descriptor, 11, new ReferenceArraySerializer(getKClass(Move), Move$$serializer_getInstance()), obj.moves);
    if (!equals(obj.endType, EndType$NONE_getInstance()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 12))
      output.encodeSerializableElement_blecud$(this.descriptor, 12, new EnumSerializer(getKClass(EndType)), obj.endType);
    if (!equals(obj.minigame, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 13))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 13, internal.StringSerializer, obj.minigame);
    if (!equals(obj.checkpoint, null) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 14))
      output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 14, internal.StringSerializer, obj.checkpoint);
    if (!equals(obj.selection, Selection$NONE_getInstance()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 15))
      output.encodeSerializableElement_blecud$(this.descriptor, 15, new EnumSerializer(getKClass(Selection)), obj.selection);
    output.endStructure_qatsm0$(this.descriptor);
  };
  State$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8
    , local9
    , local10
    , local11
    , local12
    , local13
    , local14
    , local15;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 1, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 1, internal.StringSerializer, local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 4, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 4, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = (bitMask0 & 32) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 5, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 5, internal.StringSerializer, local5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case 6:
          local6 = (bitMask0 & 64) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 6, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 6, new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), local6);
          bitMask0 |= 64;
          if (!readAll)
            break;
        case 7:
          local7 = (bitMask0 & 128) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 7, new ReferenceArraySerializer(getKClass(Variable), Variable$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 7, new ReferenceArraySerializer(getKClass(Variable), Variable$$serializer_getInstance()), local7);
          bitMask0 |= 128;
          if (!readAll)
            break;
        case 8:
          local8 = (bitMask0 & 256) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 8, new EnumSerializer(getKClass(PauseType))) : input.updateSerializableElement_ehubvl$(this.descriptor, 8, new EnumSerializer(getKClass(PauseType)), local8);
          bitMask0 |= 256;
          if (!readAll)
            break;
        case 9:
          local9 = (bitMask0 & 512) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 9, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 9, internal.StringSerializer, local9);
          bitMask0 |= 512;
          if (!readAll)
            break;
        case 10:
          local10 = input.decodeStringElement_3zr2iy$(this.descriptor, 10);
          bitMask0 |= 1024;
          if (!readAll)
            break;
        case 11:
          local11 = (bitMask0 & 2048) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 11, new ReferenceArraySerializer(getKClass(Move), Move$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 11, new ReferenceArraySerializer(getKClass(Move), Move$$serializer_getInstance()), local11);
          bitMask0 |= 2048;
          if (!readAll)
            break;
        case 12:
          local12 = (bitMask0 & 4096) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 12, new EnumSerializer(getKClass(EndType))) : input.updateSerializableElement_ehubvl$(this.descriptor, 12, new EnumSerializer(getKClass(EndType)), local12);
          bitMask0 |= 4096;
          if (!readAll)
            break;
        case 13:
          local13 = (bitMask0 & 8192) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 13, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 13, internal.StringSerializer, local13);
          bitMask0 |= 8192;
          if (!readAll)
            break;
        case 14:
          local14 = (bitMask0 & 16384) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 14, internal.StringSerializer) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 14, internal.StringSerializer, local14);
          bitMask0 |= 16384;
          if (!readAll)
            break;
        case 15:
          local15 = (bitMask0 & 32768) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 15, new EnumSerializer(getKClass(Selection))) : input.updateSerializableElement_ehubvl$(this.descriptor, 15, new EnumSerializer(getKClass(Selection)), local15);
          bitMask0 |= 32768;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return State_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, local11, local12, local13, local14, local15, null);
  };
  State$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new NullableSerializer(internal.StringSerializer), new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new NullableSerializer(internal.StringSerializer), new ReferenceArraySerializer(PrimitiveClasses$stringClass, internal.StringSerializer), new ReferenceArraySerializer(getKClass(Variable), Variable$$serializer_getInstance()), new EnumSerializer(getKClass(PauseType)), new NullableSerializer(internal.StringSerializer), internal.StringSerializer, new ReferenceArraySerializer(getKClass(Move), Move$$serializer_getInstance()), new EnumSerializer(getKClass(EndType)), new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.StringSerializer), new EnumSerializer(getKClass(Selection))];
  };
  State$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var State$$serializer_instance = null;
  function State$$serializer_getInstance() {
    if (State$$serializer_instance === null) {
      new State$$serializer();
    }
    return State$$serializer_instance;
  }
  function State_init(seen1, id, text, flags, flagsToRemove, categories, theme, background, variables, pause, illustration, chapterId, moves, endType, minigame, checkpoint, selection, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(State.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id_c71dgs$_0 = id;
    if ((seen1 & 2) === 0)
      $this.text_1suqu$_0 = null;
    else
      $this.text_1suqu$_0 = text;
    if ((seen1 & 4) === 0) {
      $this.flags_831jei$_0 = [];
    }
     else
      $this.flags_831jei$_0 = flags;
    if ((seen1 & 8) === 0) {
      $this.flagsToRemove_u4i1zt$_0 = [];
    }
     else
      $this.flagsToRemove_u4i1zt$_0 = flagsToRemove;
    if ((seen1 & 16) === 0) {
      $this.categories_ntcayz$_0 = [];
    }
     else
      $this.categories_ntcayz$_0 = categories;
    if ((seen1 & 32) === 0)
      $this.theme_1ijc70$_0 = null;
    else
      $this.theme_1ijc70$_0 = theme;
    if ((seen1 & 64) === 0) {
      $this.background_ppf73t$_0 = [];
    }
     else
      $this.background_ppf73t$_0 = background;
    if ((seen1 & 128) === 0) {
      $this.variables_h4riei$_0 = [];
    }
     else
      $this.variables_h4riei$_0 = variables;
    if ((seen1 & 256) === 0)
      $this.pause_3ia1op$_0 = PauseType$AUTO_getInstance();
    else
      $this.pause_3ia1op$_0 = pause;
    if ((seen1 & 512) === 0)
      $this.illustration_nq4gvd$_0 = null;
    else
      $this.illustration_nq4gvd$_0 = illustration;
    if ((seen1 & 1024) === 0)
      throw new MissingFieldException('chapterId');
    else
      $this.chapterId = chapterId;
    if ((seen1 & 2048) === 0) {
      $this.moves = [];
    }
     else
      $this.moves = moves;
    if ((seen1 & 4096) === 0)
      $this.endType = EndType$NONE_getInstance();
    else
      $this.endType = endType;
    if ((seen1 & 8192) === 0)
      $this.minigame = null;
    else
      $this.minigame = minigame;
    if ((seen1 & 16384) === 0)
      $this.checkpoint = null;
    else
      $this.checkpoint = checkpoint;
    if ((seen1 & 32768) === 0)
      $this.selection = Selection$NONE_getInstance();
    else
      $this.selection = selection;
    return $this;
  }
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: [GraphElement]
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
    return this.categories;
  };
  State.prototype.component6 = function () {
    return this.theme;
  };
  State.prototype.component7 = function () {
    return this.background;
  };
  State.prototype.component8 = function () {
    return this.variables;
  };
  State.prototype.component9 = function () {
    return this.pause;
  };
  State.prototype.component10 = function () {
    return this.illustration;
  };
  State.prototype.component11 = function () {
    return this.chapterId;
  };
  State.prototype.component12 = function () {
    return this.moves;
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
  State.prototype.copy_crfuzz$ = function (id, text, flags, flagsToRemove, categories, theme, background, variables, pause, illustration, chapterId, moves, endType, minigame, checkpoint, selection) {
    return new State(id === void 0 ? this.id : id, text === void 0 ? this.text : text, flags === void 0 ? this.flags : flags, flagsToRemove === void 0 ? this.flagsToRemove : flagsToRemove, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme, background === void 0 ? this.background : background, variables === void 0 ? this.variables : variables, pause === void 0 ? this.pause : pause, illustration === void 0 ? this.illustration : illustration, chapterId === void 0 ? this.chapterId : chapterId, moves === void 0 ? this.moves : moves, endType === void 0 ? this.endType : endType, minigame === void 0 ? this.minigame : minigame, checkpoint === void 0 ? this.checkpoint : checkpoint, selection === void 0 ? this.selection : selection);
  };
  State.prototype.toString = function () {
    return 'State(id=' + Kotlin.toString(this.id) + (', text=' + Kotlin.toString(this.text)) + (', flags=' + Kotlin.toString(this.flags)) + (', flagsToRemove=' + Kotlin.toString(this.flagsToRemove)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + (', background=' + Kotlin.toString(this.background)) + (', variables=' + Kotlin.toString(this.variables)) + (', pause=' + Kotlin.toString(this.pause)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', chapterId=' + Kotlin.toString(this.chapterId)) + (', moves=' + Kotlin.toString(this.moves)) + (', endType=' + Kotlin.toString(this.endType)) + (', minigame=' + Kotlin.toString(this.minigame)) + (', checkpoint=' + Kotlin.toString(this.checkpoint)) + (', selection=' + Kotlin.toString(this.selection)) + ')';
  };
  State.prototype.hashCode = function () {
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
    result = result * 31 + Kotlin.hashCode(this.chapterId) | 0;
    result = result * 31 + Kotlin.hashCode(this.moves) | 0;
    result = result * 31 + Kotlin.hashCode(this.endType) | 0;
    result = result * 31 + Kotlin.hashCode(this.minigame) | 0;
    result = result * 31 + Kotlin.hashCode(this.checkpoint) | 0;
    result = result * 31 + Kotlin.hashCode(this.selection) | 0;
    return result;
  };
  State.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.flagsToRemove, other.flagsToRemove) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.background, other.background) && Kotlin.equals(this.variables, other.variables) && Kotlin.equals(this.pause, other.pause) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.moves, other.moves) && Kotlin.equals(this.endType, other.endType) && Kotlin.equals(this.minigame, other.minigame) && Kotlin.equals(this.checkpoint, other.checkpoint) && Kotlin.equals(this.selection, other.selection)))));
  };
  function BaseElementBuilder(id, categories, theme) {
    BaseElementBuilder$Companion_getInstance();
    if (id === void 0)
      id = null;
    if (categories === void 0) {
      categories = ArrayList_init();
    }
    if (theme === void 0)
      theme = null;
    this.id_rrdrfj$_0 = id;
    this.categories_nn5u0u$_0 = categories;
    this.theme_91j4kx$_0 = theme;
  }
  Object.defineProperty(BaseElementBuilder.prototype, 'id', {
    get: function () {
      return this.id_rrdrfj$_0;
    },
    set: function (id) {
      this.id_rrdrfj$_0 = id;
    }
  });
  Object.defineProperty(BaseElementBuilder.prototype, 'categories', {
    get: function () {
      return this.categories_nn5u0u$_0;
    },
    set: function (categories) {
      this.categories_nn5u0u$_0 = categories;
    }
  });
  Object.defineProperty(BaseElementBuilder.prototype, 'theme', {
    get: function () {
      return this.theme_91j4kx$_0;
    },
    set: function (theme) {
      this.theme_91j4kx$_0 = theme;
    }
  });
  BaseElementBuilder.prototype.parseBaseElement_bm4lxs$ = function (line, index) {
    if (BaseElementBuilder$Companion_getInstance().KATEGORIE.matches_6bul2c$(line)) {
      this.categories.clear();
      addAll_0(this.categories, parameterArray(line));
    }
     else {
      if (BaseElementBuilder$Companion_getInstance().TEMA.matches_6bul2c$(line)) {
        this.theme = BaseElementBuilder$Companion_getInstance().TEMA.replace_x2uqeu$(line, '$1');
      }
       else {
        return false;
      }
    }
    return true;
  };
  function BaseElementBuilder$Companion() {
    BaseElementBuilder$Companion_instance = this;
    this.KATEGORIE = Regex_init('kategorie=(.*)');
    this.TEMA = Regex_init('tema=([a-zA-Z\\-0-9_{}]+)');
  }
  BaseElementBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BaseElementBuilder$Companion_instance = null;
  function BaseElementBuilder$Companion_getInstance() {
    if (BaseElementBuilder$Companion_instance === null) {
      new BaseElementBuilder$Companion();
    }
    return BaseElementBuilder$Companion_instance;
  }
  BaseElementBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseElementBuilder',
    interfaces: [LineParser]
  };
  var stringToEndtype;
  var endTypeToString;
  function toGenerated($receiver) {
    var tmp$;
    tmp$ = endTypeToString.get_11rb$($receiver);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('Cannot generate for ' + $receiver);
    }
    return 'konec=' + toString(tmp$) + '\n';
  }
  function endType(line, index) {
    var tmp$;
    var konec = parameterValue(line);
    tmp$ = stringToEndtype.get_11rb$(konec);
    if (tmp$ == null) {
      throw new IncorrectLineException(index, line, 'Invalid endType: ' + konec);
    }
    return tmp$;
  }
  var stringToPause;
  var pauseToString;
  function toGenerated_0($receiver) {
    var tmp$;
    tmp$ = pauseToString.get_11rb$($receiver);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('Cannot generate for ' + $receiver);
    }
    return 'pauza=' + toString(tmp$) + '\n';
  }
  function pause(line, index) {
    var tmp$;
    var pause = parameterValue(line);
    tmp$ = stringToPause.get_11rb$(pause);
    if (tmp$ == null) {
      throw new IncorrectLineException(index, line, 'Invalid pauseType: ' + pause);
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
  function ChapterBuilder(id, name, categories, theme, flagGroups, states, testDefaultTheme, filePrefix, audio) {
    ChapterBuilder$Companion_getInstance();
    if (id === void 0)
      id = null;
    if (name === void 0)
      name = null;
    if (categories === void 0) {
      categories = ArrayList_init();
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
    if (audio === void 0) {
      audio = [];
    }
    BaseElementBuilder.call(this, id, categories, theme);
    this.id_68w6f7$_0 = id;
    this.name = name;
    this.categories_3fp50c$_0 = categories;
    this.theme_d43wz$_0 = theme;
    this.flagGroups = flagGroups;
    this.states = states;
    this.testDefaultTheme = testDefaultTheme;
    this.filePrefix = filePrefix;
    this.audio = audio;
  }
  Object.defineProperty(ChapterBuilder.prototype, 'id', {
    get: function () {
      return this.id_68w6f7$_0;
    },
    set: function (id) {
      this.id_68w6f7$_0 = id;
    }
  });
  Object.defineProperty(ChapterBuilder.prototype, 'categories', {
    get: function () {
      return this.categories_3fp50c$_0;
    },
    set: function (categories) {
      this.categories_3fp50c$_0 = categories;
    }
  });
  Object.defineProperty(ChapterBuilder.prototype, 'theme', {
    get: function () {
      return this.theme_d43wz$_0;
    },
    set: function (theme) {
      this.theme_d43wz$_0 = theme;
    }
  });
  ChapterBuilder.prototype.parseLine_bm4lxs$ = function (line, index) {
    var tmp$;
    if (!this.parseBaseElement_bm4lxs$(line, index)) {
      if (ChapterBuilder$Companion_getInstance().IMAGE_PREFIX.matches_6bul2c$(line))
        this.filePrefix = parameterValue(line);
      else {
        if (ChapterBuilder$Companion_getInstance().AUDIO.matches_6bul2c$(line)) {
          var $receiver = parameterArray(line);
          var destination = ArrayList_init_0($receiver.length);
          var tmp$_0;
          for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
            var item = $receiver[tmp$_0];
            destination.add_11rb$(Audio$Companion_getInstance().fromString_61zpoe$(item));
          }
          this.audio = copyToArray(destination);
        }
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
            var $receiver_0 = split(ChapterBuilder$Companion_getInstance().FLAG_GROUP.replace_x2uqeu$(line, '$3'), [',']);
            var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
            var tmp$_1;
            tmp$_1 = $receiver_0.iterator();
            while (tmp$_1.hasNext()) {
              var item_0 = tmp$_1.next();
              var tmp$_2;
              destination_0.add_11rb$(trim(Kotlin.isCharSequence(tmp$_2 = item_0) ? tmp$_2 : throwCCE()).toString());
            }
            var flags = copyToArray(destination_0);
            this.flagGroups.add_11rb$(new FlagGroup(groupName, flags, type));
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
    return new Chapter(ensureNotNull(this.id), (tmp$ = this.name) != null ? tmp$ : '', copyToArray(this.categories), this.theme, copyToArray(this.flagGroups), copyToArray(this.states), this.testDefaultTheme, this.filePrefix, this.audio);
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
    this.AUDIO = Regex_init('hudba=(.*)');
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
    interfaces: [BaseElementBuilder]
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
  ChapterBuilder.prototype.component9 = function () {
    return this.audio;
  };
  ChapterBuilder.prototype.copy_lsr62x$ = function (id, name, categories, theme, flagGroups, states, testDefaultTheme, filePrefix, audio) {
    return new ChapterBuilder(id === void 0 ? this.id : id, name === void 0 ? this.name : name, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme, flagGroups === void 0 ? this.flagGroups : flagGroups, states === void 0 ? this.states : states, testDefaultTheme === void 0 ? this.testDefaultTheme : testDefaultTheme, filePrefix === void 0 ? this.filePrefix : filePrefix, audio === void 0 ? this.audio : audio);
  };
  ChapterBuilder.prototype.toString = function () {
    return 'ChapterBuilder(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + (', flagGroups=' + Kotlin.toString(this.flagGroups)) + (', states=' + Kotlin.toString(this.states)) + (', testDefaultTheme=' + Kotlin.toString(this.testDefaultTheme)) + (', filePrefix=' + Kotlin.toString(this.filePrefix)) + (', audio=' + Kotlin.toString(this.audio)) + ')';
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
    result = result * 31 + Kotlin.hashCode(this.audio) | 0;
    return result;
  };
  ChapterBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.flagGroups, other.flagGroups) && Kotlin.equals(this.states, other.states) && Kotlin.equals(this.testDefaultTheme, other.testDefaultTheme) && Kotlin.equals(this.filePrefix, other.filePrefix) && Kotlin.equals(this.audio, other.audio)))));
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
    var tmp$ = ensureNotNull(this.startId);
    var tmp$_0 = copyToArray(this.states);
    var tmp$_1 = copyToArray(this.moves);
    var $receiver = this.chapters;
    var destination = LinkedHashMap_init();
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      var key = element.id;
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
    var $receiver_0 = destination.values;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_3;
    tmp$_3 = $receiver_0.iterator();
    while (tmp$_3.hasNext()) {
      var item = tmp$_3.next();
      destination_0.add_11rb$(this.mergeChapters_dvyamk$(item));
    }
    return new GameConfig(tmp$, tmp$_0, tmp$_1, copyToArray(destination_0));
  };
  GameConfigBuilder.prototype.mergeChapters_dvyamk$ = function (list) {
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(list, 10)), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      destination.put_xwzc9p$(element.filePrefix, element);
    }
    if (!(destination.size === 1)) {
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault(list, 10));
      var tmp$_0;
      tmp$_0 = list.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(item.filePrefix);
      }
      var message = 'different filePrefix for same chapterId: ' + distinct(destination_0);
      throw IllegalStateException_init(message.toString());
    }
    var destination_1 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = list.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var list_0 = asIterable(element_0.states);
      addAll(destination_1, list_0);
    }
    var states = copyToArray(destination_1);
    var tmp$_2;
    var set = HashSet_init();
    var list_1 = ArrayList_init();
    for (tmp$_2 = 0; tmp$_2 !== states.length; ++tmp$_2) {
      var e = states[tmp$_2];
      var key = e.id;
      if (set.add_11rb$(key))
        list_1.add_11rb$(e);
    }
    if (!(states.length === list_1.size)) {
      var message_0 = 'some states are duplicated for chapter ' + first_0(list).id;
      throw IllegalStateException_init(message_0.toString());
    }
    var tmp$_3 = first_0(list);
    var tmp$_4 = void 0;
    var tmp$_5 = void 0;
    var tmp$_6 = void 0;
    var tmp$_7 = void 0;
    var tmp$_8 = void 0;
    var destination_2 = ArrayList_init();
    var tmp$_9;
    tmp$_9 = list.iterator();
    while (tmp$_9.hasNext()) {
      var element_1 = tmp$_9.next();
      var list_2 = asIterable(element_1.states);
      addAll(destination_2, list_2);
    }
    return tmp$_3.copy_a0fekh$(tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, copyToArray(destination_2));
  };
  GameConfigBuilder.prototype.addState_ktq7vf$ = function (state) {
    this.states.add_11rb$(state);
    addAll_0(this.moves, state.moves);
  };
  GameConfigBuilder.prototype.addStates_gnd9sg$ = function (newStates) {
    this.states.addAll_brywnq$(newStates);
    var tmp$;
    tmp$ = newStates.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      addAll_0(this.moves, element.moves);
    }
  };
  GameConfigBuilder.prototype.state_zhmc9d$ = function (init) {
    var stateBuilder = new StateBuilder(this.gameConverterContext);
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
              this.currentState_0 = new StateBuilder(this.converterContext, stateId, void 0, void 0, void 0, void 0, this.currentChapter_0);
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
    this.KONEC = Regex_init('konec=(prohra|nedokonceno)');
    this.SUPERUZEL = Regex_init('superuzel=(u[a-zA-Z\\-0-9_]+)');
    this.SUPERUZEL_SEPARATOR = Regex_init('(-)(u[a-zA-Z\\-0-9_]+)?');
    this.POZIRACI = Regex_init('poziraci=(ano|ne)');
    this.CIL = Regex_init('cil=(.*)');
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
  function GraphElementBuilder(id, categories, theme, text_, flags, flagsToRemove, background, variables, pause, illustration) {
    GraphElementBuilder$Companion_getInstance();
    if (id === void 0)
      id = null;
    if (categories === void 0) {
      categories = ArrayList_init();
    }
    if (theme === void 0)
      theme = null;
    if (text_ === void 0)
      text_ = null;
    if (flags === void 0) {
      flags = ArrayList_init();
    }
    if (flagsToRemove === void 0) {
      flagsToRemove = ArrayList_init();
    }
    if (background === void 0) {
      background = [];
    }
    if (variables === void 0) {
      variables = ArrayList_init();
    }
    if (pause === void 0)
      pause = PauseType$AUTO_getInstance();
    if (illustration === void 0)
      illustration = null;
    BaseElementBuilder.call(this, id, categories, theme);
    this.id_lvnq1s$_0 = id;
    this.categories_uqje69$_0 = categories;
    this.theme_osvbao$_0 = theme;
    this.text__ou6fa1$_0 = text_;
    this.flags_vddii6$_0 = flags;
    this.flagsToRemove_8nrvgt$_0 = flagsToRemove;
    this.background_sugi1f$_0 = background;
    this.variables_vilyg2$_0 = variables;
    this.pause_qsm0sd$_0 = pause;
    this.illustration_rm67hx$_0 = illustration;
    this.stringBuilder = new CharSequenceBuilder();
    this.text_suegi$_0 = this.text_;
  }
  Object.defineProperty(GraphElementBuilder.prototype, 'id', {
    get: function () {
      return this.id_lvnq1s$_0;
    },
    set: function (id) {
      this.id_lvnq1s$_0 = id;
    }
  });
  Object.defineProperty(GraphElementBuilder.prototype, 'categories', {
    get: function () {
      return this.categories_uqje69$_0;
    },
    set: function (categories) {
      this.categories_uqje69$_0 = categories;
    }
  });
  Object.defineProperty(GraphElementBuilder.prototype, 'theme', {
    get: function () {
      return this.theme_osvbao$_0;
    },
    set: function (theme) {
      this.theme_osvbao$_0 = theme;
    }
  });
  Object.defineProperty(GraphElementBuilder.prototype, 'text_', {
    get: function () {
      return this.text__ou6fa1$_0;
    },
    set: function (text_) {
      this.text__ou6fa1$_0 = text_;
    }
  });
  Object.defineProperty(GraphElementBuilder.prototype, 'flags', {
    get: function () {
      return this.flags_vddii6$_0;
    },
    set: function (flags) {
      this.flags_vddii6$_0 = flags;
    }
  });
  Object.defineProperty(GraphElementBuilder.prototype, 'flagsToRemove', {
    get: function () {
      return this.flagsToRemove_8nrvgt$_0;
    },
    set: function (flagsToRemove) {
      this.flagsToRemove_8nrvgt$_0 = flagsToRemove;
    }
  });
  Object.defineProperty(GraphElementBuilder.prototype, 'background', {
    get: function () {
      return this.background_sugi1f$_0;
    },
    set: function (background) {
      this.background_sugi1f$_0 = background;
    }
  });
  Object.defineProperty(GraphElementBuilder.prototype, 'variables', {
    get: function () {
      return this.variables_vilyg2$_0;
    },
    set: function (variables) {
      this.variables_vilyg2$_0 = variables;
    }
  });
  Object.defineProperty(GraphElementBuilder.prototype, 'pause', {
    get: function () {
      return this.pause_qsm0sd$_0;
    },
    set: function (pause) {
      this.pause_qsm0sd$_0 = pause;
    }
  });
  Object.defineProperty(GraphElementBuilder.prototype, 'illustration', {
    get: function () {
      return this.illustration_rm67hx$_0;
    },
    set: function (illustration) {
      this.illustration_rm67hx$_0 = illustration;
    }
  });
  GraphElementBuilder.prototype.parseBaseElement_bm4lxs$ = function (line, index) {
    if (!BaseElementBuilder.prototype.parseBaseElement_bm4lxs$.call(this, line, index)) {
      if (GraphElementBuilder$Companion_getInstance().ILUSTRACE.matches_6bul2c$(line))
        this.illustration = parameterValue(line);
      else {
        if (GraphElementBuilder$Companion_getInstance().PAUZA.matches_6bul2c$(line))
          this.pause = pause(line, index);
        else {
          if (GraphElementBuilder$Companion_getInstance().PROMENNA.matches_6bul2c$(line))
            this.variables.add_11rb$(parameterVariable(line));
          else {
            if (GraphElementBuilder$Companion_getInstance().PRIZNAK.matches_6bul2c$(line))
              this.flags = toMutableList(parameterArray(line));
            else {
              if (GraphElementBuilder$Companion_getInstance().ODSTRANIT_PRIZNAK.matches_6bul2c$(line))
                this.flagsToRemove = toMutableList(parameterArray(line));
              else {
                if (GraphElementBuilder$Companion_getInstance().POZADI.matches_6bul2c$(line))
                  this.background = parameterArray(line);
                else {
                  return false;
                }
              }
            }
          }
        }
      }
    }
    return true;
  };
  GraphElementBuilder.prototype.finalText = function () {
    var tmp$;
    var finalText = this.stringBuilder.build();
    if (this.text != null) {
      finalText = this.text;
    }
    if (finalText == null) {
      tmp$ = null;
    }
     else {
      var $receiver = finalText.toString();
      var tmp$_0;
      tmp$ = trim(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString();
    }
    var finalText2 = tmp$;
    return finalText2;
  };
  Object.defineProperty(GraphElementBuilder.prototype, 'text', {
    get: function () {
      return this.text_suegi$_0;
    },
    set: function (value) {
      if (value != null && contains(value, '@')) {
        this.text_suegi$_0 = (new CharSequenceBuilder()).appendFullText_6bul2c$(value).build();
      }
       else {
        this.text_suegi$_0 = value;
      }
    }
  });
  GraphElementBuilder.prototype.text_66evf9$ = function (init) {
    this.stringBuilder = new CharSequenceBuilder();
    init(this.stringBuilder);
    return this.stringBuilder;
  };
  GraphElementBuilder.prototype.appendText_61zpoe$ = function (value) {
    this.stringBuilder.appendLine_61zpoe$(value);
  };
  function GraphElementBuilder$Companion() {
    GraphElementBuilder$Companion_instance = this;
    this.PRIZNAK = Regex_init('priznak=(.*)');
    this.ODSTRANIT_PRIZNAK = Regex_init('odstranit_priznak=(.*)');
    this.PROMENNA = Regex_init('promenna\\(([a-z_\\-]+)\\)([+\\-]?=)(.*)');
    this.PAUZA = Regex_init('pauza=(ano|ne|auto)');
    this.ILUSTRACE = Regex_init('ilustrace=(.*)');
    this.POZADI = Regex_init('pozadi=(.*)');
  }
  GraphElementBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GraphElementBuilder$Companion_instance = null;
  function GraphElementBuilder$Companion_getInstance() {
    if (GraphElementBuilder$Companion_instance === null) {
      new GraphElementBuilder$Companion();
    }
    return GraphElementBuilder$Companion_instance;
  }
  GraphElementBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphElementBuilder',
    interfaces: [BaseElementBuilder]
  };
  function LineParser() {
  }
  LineParser.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LineParser',
    interfaces: []
  };
  function MoveBuilder(gameConverterContext, id, caption, image, illustration, selfConsuming, targetId, flags, flagsToRemove, flagsRequired, flagsDisallowing, categories, theme, variables, background, pause, hash, chapter, testChapterId) {
    MoveBuilder$Companion_getInstance();
    if (id === void 0)
      id = null;
    if (caption === void 0)
      caption = null;
    if (image === void 0)
      image = null;
    if (illustration === void 0)
      illustration = null;
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
      categories = ArrayList_init();
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
    if (testChapterId === void 0)
      testChapterId = null;
    GraphElementBuilder.call(this, id, categories, theme);
    this.gameConverterContext = gameConverterContext;
    this.id_m08tc3$_0 = id;
    this.caption = caption;
    this.image = image;
    this.illustration_kb91ew$_0 = illustration;
    this.selfConsuming = selfConsuming;
    this.targetId = targetId;
    this.flags_9d2z11$_0 = flags;
    this.flagsToRemove_ej0cp6$_0 = flagsToRemove;
    this.flagsRequired = flagsRequired;
    this.flagsDisallowing = flagsDisallowing;
    this.categories_jknrfg$_0 = categories;
    this.theme_fxl68j$_0 = theme;
    this.variables_5n6okl$_0 = variables;
    this.background_lgqnka$_0 = background;
    this.pause_dxugqu$_0 = pause;
    this.hash = hash;
    this.chapter = chapter;
    this.testChapterId = testChapterId;
  }
  Object.defineProperty(MoveBuilder.prototype, 'id', {
    get: function () {
      return this.id_m08tc3$_0;
    },
    set: function (id) {
      this.id_m08tc3$_0 = id;
    }
  });
  Object.defineProperty(MoveBuilder.prototype, 'illustration', {
    get: function () {
      return this.illustration_kb91ew$_0;
    },
    set: function (illustration) {
      this.illustration_kb91ew$_0 = illustration;
    }
  });
  Object.defineProperty(MoveBuilder.prototype, 'flags', {
    get: function () {
      return this.flags_9d2z11$_0;
    },
    set: function (flags) {
      this.flags_9d2z11$_0 = flags;
    }
  });
  Object.defineProperty(MoveBuilder.prototype, 'flagsToRemove', {
    get: function () {
      return this.flagsToRemove_ej0cp6$_0;
    },
    set: function (flagsToRemove) {
      this.flagsToRemove_ej0cp6$_0 = flagsToRemove;
    }
  });
  Object.defineProperty(MoveBuilder.prototype, 'categories', {
    get: function () {
      return this.categories_jknrfg$_0;
    },
    set: function (categories) {
      this.categories_jknrfg$_0 = categories;
    }
  });
  Object.defineProperty(MoveBuilder.prototype, 'theme', {
    get: function () {
      return this.theme_fxl68j$_0;
    },
    set: function (theme) {
      this.theme_fxl68j$_0 = theme;
    }
  });
  Object.defineProperty(MoveBuilder.prototype, 'variables', {
    get: function () {
      return this.variables_5n6okl$_0;
    },
    set: function (variables) {
      this.variables_5n6okl$_0 = variables;
    }
  });
  Object.defineProperty(MoveBuilder.prototype, 'background', {
    get: function () {
      return this.background_lgqnka$_0;
    },
    set: function (background) {
      this.background_lgqnka$_0 = background;
    }
  });
  Object.defineProperty(MoveBuilder.prototype, 'pause', {
    get: function () {
      return this.pause_dxugqu$_0;
    },
    set: function (pause) {
      this.pause_dxugqu$_0 = pause;
    }
  });
  MoveBuilder.prototype.parseLine_bm4lxs$ = function (line, index) {
    if (!this.parseBaseElement_bm4lxs$(line, index))
      if (!equals(line, GameConverter$Companion_getInstance().SEPARATOR)) {
        if (GameConverter$Companion_getInstance().POZIRACI.matches_6bul2c$(line))
          this.selfConsuming = parameterBoolean(line);
        else {
          if (MoveBuilder$Companion_getInstance().OBRAZEK.matches_6bul2c$(line))
            this.image = parameterValue(line);
          else {
            if (MoveBuilder$Companion_getInstance().TEST_CHAPTER_ID.matches_6bul2c$(line))
              this.testChapterId = parameterValue(line);
            else {
              if (MoveBuilder$Companion_getInstance().VYLOUCENA.matches_6bul2c$(line))
                addAll_0(this.flagsDisallowing, parameterArray(line));
              else {
                if (MoveBuilder$Companion_getInstance().PODMINENA.matches_6bul2c$(line))
                  addAll_0(this.flagsRequired, parameterArray(line));
                else {
                  if (MoveBuilder$Companion_getInstance().POPIS.matches_6bul2c$(line))
                    this.caption = parameterValue(line);
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
  };
  MoveBuilder.prototype.build = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    if (this.id == null) {
      throw IllegalArgumentException_init('Id not found for move!');
    }
    if (this.targetId == null) {
      throw IllegalArgumentException_init('Target id not found for move ' + toString(this.id) + '!');
    }
    tmp$ = ensureNotNull(this.id);
    tmp$_0 = this.caption;
    tmp$_1 = addPrefixIfNotNull(this.chapter, this.image);
    tmp$_2 = addPrefixIfNotNull(this.chapter, this.illustration);
    tmp$_3 = this.finalText();
    tmp$_4 = this.selfConsuming;
    tmp$_5 = ensureNotNull(this.targetId);
    tmp$_6 = copyToArray(this.flags);
    tmp$_7 = copyToArray(this.flagsToRemove);
    tmp$_8 = copyToArray(this.flagsRequired);
    tmp$_9 = copyToArray(this.flagsDisallowing);
    tmp$_10 = copyToArray(this.categories);
    tmp$_11 = this.theme;
    tmp$_12 = copyToArray(this.variables);
    return new Move(tmp$, tmp$_3, tmp$_6, tmp$_7, tmp$_10, tmp$_11, addPrefixIfNotNull_0(this.chapter, this.background), tmp$_12, this.pause, tmp$_2, tmp$_0, tmp$_1, tmp$_4, tmp$_5, tmp$_8, tmp$_9, (tmp$_13 = this.hash) != null ? tmp$_13.toUpperCase() : null, this.testChapterId);
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
    this.TEST_CHAPTER_ID = Regex_init('test_do_kapitoly=(.*)');
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
    interfaces: [GraphElementBuilder]
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
    return this.selfConsuming;
  };
  MoveBuilder.prototype.component7 = function () {
    return this.targetId;
  };
  MoveBuilder.prototype.component8 = function () {
    return this.flags;
  };
  MoveBuilder.prototype.component9 = function () {
    return this.flagsToRemove;
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
  MoveBuilder.prototype.component15 = function () {
    return this.background;
  };
  MoveBuilder.prototype.component16 = function () {
    return this.pause;
  };
  MoveBuilder.prototype.component17 = function () {
    return this.hash;
  };
  MoveBuilder.prototype.component18 = function () {
    return this.chapter;
  };
  MoveBuilder.prototype.component19 = function () {
    return this.testChapterId;
  };
  MoveBuilder.prototype.copy_dtqwor$ = function (gameConverterContext, id, caption, image, illustration, selfConsuming, targetId, flags, flagsToRemove, flagsRequired, flagsDisallowing, categories, theme, variables, background, pause, hash, chapter, testChapterId) {
    return new MoveBuilder(gameConverterContext === void 0 ? this.gameConverterContext : gameConverterContext, id === void 0 ? this.id : id, caption === void 0 ? this.caption : caption, image === void 0 ? this.image : image, illustration === void 0 ? this.illustration : illustration, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, targetId === void 0 ? this.targetId : targetId, flags === void 0 ? this.flags : flags, flagsToRemove === void 0 ? this.flagsToRemove : flagsToRemove, flagsRequired === void 0 ? this.flagsRequired : flagsRequired, flagsDisallowing === void 0 ? this.flagsDisallowing : flagsDisallowing, categories === void 0 ? this.categories : categories, theme === void 0 ? this.theme : theme, variables === void 0 ? this.variables : variables, background === void 0 ? this.background : background, pause === void 0 ? this.pause : pause, hash === void 0 ? this.hash : hash, chapter === void 0 ? this.chapter : chapter, testChapterId === void 0 ? this.testChapterId : testChapterId);
  };
  MoveBuilder.prototype.toString = function () {
    return 'MoveBuilder(gameConverterContext=' + Kotlin.toString(this.gameConverterContext) + (', id=' + Kotlin.toString(this.id)) + (', caption=' + Kotlin.toString(this.caption)) + (', image=' + Kotlin.toString(this.image)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', targetId=' + Kotlin.toString(this.targetId)) + (', flags=' + Kotlin.toString(this.flags)) + (', flagsToRemove=' + Kotlin.toString(this.flagsToRemove)) + (', flagsRequired=' + Kotlin.toString(this.flagsRequired)) + (', flagsDisallowing=' + Kotlin.toString(this.flagsDisallowing)) + (', categories=' + Kotlin.toString(this.categories)) + (', theme=' + Kotlin.toString(this.theme)) + (', variables=' + Kotlin.toString(this.variables)) + (', background=' + Kotlin.toString(this.background)) + (', pause=' + Kotlin.toString(this.pause)) + (', hash=' + Kotlin.toString(this.hash)) + (', chapter=' + Kotlin.toString(this.chapter)) + (', testChapterId=' + Kotlin.toString(this.testChapterId)) + ')';
  };
  MoveBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gameConverterContext) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.caption) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.illustration) | 0;
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
    result = result * 31 + Kotlin.hashCode(this.testChapterId) | 0;
    return result;
  };
  MoveBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gameConverterContext, other.gameConverterContext) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.caption, other.caption) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.targetId, other.targetId) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.flagsToRemove, other.flagsToRemove) && Kotlin.equals(this.flagsRequired, other.flagsRequired) && Kotlin.equals(this.flagsDisallowing, other.flagsDisallowing) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.variables, other.variables) && Kotlin.equals(this.background, other.background) && Kotlin.equals(this.pause, other.pause) && Kotlin.equals(this.hash, other.hash) && Kotlin.equals(this.chapter, other.chapter) && Kotlin.equals(this.testChapterId, other.testChapterId)))));
  };
  function StateBuilder(gameConverterContext, id, illustration, flags, flagsToRemove, moveIds, chapter, chapterId, categories, endType, theme, background, minigame, variables, moves, checkpoint, selfConsuming, selection, pause, audio) {
    StateBuilder$Companion_getInstance();
    if (id === void 0)
      id = null;
    if (illustration === void 0)
      illustration = null;
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
      categories = ArrayList_init();
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
    GraphElementBuilder.call(this, id, categories, theme);
    this.gameConverterContext = gameConverterContext;
    this.id_37pq6f$_0 = id;
    this.illustration_cu2yp0$_0 = illustration;
    this.flags_8p3o13$_0 = flags;
    this.flagsToRemove_x7wj2e$_0 = flagsToRemove;
    this.moveIds = moveIds;
    this.chapter = chapter;
    this.chapterId = chapterId;
    this.categories_enlzmw$_0 = categories;
    this.endType = endType;
    this.theme_24lgtl$_0 = theme;
    this.background_crj3i2$_0 = background;
    this.minigame = minigame;
    this.variables_4mijiv$_0 = variables;
    this.moves = moves;
    this.checkpoint = checkpoint;
    this.selfConsuming = selfConsuming;
    this.selection = selection;
    this.pause_44c6ba$_0 = pause;
    this.audio = audio;
    if (this.chapterId != null && this.chapter == null) {
      this.chapter = new ChapterBuilder(this.chapterId);
    }
    this.parsingMoves = false;
  }
  Object.defineProperty(StateBuilder.prototype, 'id', {
    get: function () {
      return this.id_37pq6f$_0;
    },
    set: function (id) {
      this.id_37pq6f$_0 = id;
    }
  });
  Object.defineProperty(StateBuilder.prototype, 'illustration', {
    get: function () {
      return this.illustration_cu2yp0$_0;
    },
    set: function (illustration) {
      this.illustration_cu2yp0$_0 = illustration;
    }
  });
  Object.defineProperty(StateBuilder.prototype, 'flags', {
    get: function () {
      return this.flags_8p3o13$_0;
    },
    set: function (flags) {
      this.flags_8p3o13$_0 = flags;
    }
  });
  Object.defineProperty(StateBuilder.prototype, 'flagsToRemove', {
    get: function () {
      return this.flagsToRemove_x7wj2e$_0;
    },
    set: function (flagsToRemove) {
      this.flagsToRemove_x7wj2e$_0 = flagsToRemove;
    }
  });
  Object.defineProperty(StateBuilder.prototype, 'categories', {
    get: function () {
      return this.categories_enlzmw$_0;
    },
    set: function (categories) {
      this.categories_enlzmw$_0 = categories;
    }
  });
  Object.defineProperty(StateBuilder.prototype, 'theme', {
    get: function () {
      return this.theme_24lgtl$_0;
    },
    set: function (theme) {
      this.theme_24lgtl$_0 = theme;
    }
  });
  Object.defineProperty(StateBuilder.prototype, 'background', {
    get: function () {
      return this.background_crj3i2$_0;
    },
    set: function (background) {
      this.background_crj3i2$_0 = background;
    }
  });
  Object.defineProperty(StateBuilder.prototype, 'variables', {
    get: function () {
      return this.variables_4mijiv$_0;
    },
    set: function (variables) {
      this.variables_4mijiv$_0 = variables;
    }
  });
  Object.defineProperty(StateBuilder.prototype, 'pause', {
    get: function () {
      return this.pause_44c6ba$_0;
    },
    set: function (pause) {
      this.pause_44c6ba$_0 = pause;
    }
  });
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
    if (!this.parseBaseElement_bm4lxs$(line, index)) {
      if (StateBuilder$Companion_getInstance().VYBER.matches_6bul2c$(line))
        this.selection = Selection$Companion_getInstance().fromText_61zpoe$(parameterValue(line));
      else {
        if (GameConverter$Companion_getInstance().POZIRACI.matches_6bul2c$(line))
          this.selfConsuming = parameterBoolean(line);
        else {
          if (StateBuilder$Companion_getInstance().MINIHRA.matches_6bul2c$(line))
            this.minigame = parameterValue(line);
          else {
            if (StateBuilder$Companion_getInstance().CHECKPOINT.matches_6bul2c$(line))
              this.checkpoint = parameterValue(line);
            else {
              if (GameConverter$Companion_getInstance().CIL.matches_6bul2c$(line)) {
                var targetId = parameterValue(line);
                var moveId = 'h_' + toString(this.id) + '_auto_' + targetId;
                this.gameConverterContext.addMoveId_bm4lxs$(moveId, index);
                this.moves.add_11rb$(new MoveBuilder(this.gameConverterContext, moveId, void 0, void 0, void 0, (tmp$ = this.selfConsuming) != null ? tmp$ : MoveBuilder$Companion_getInstance().DEFAULT_SELF_CONSUMING, targetId, void 0, void 0, void 0, void 0, toMutableList_0(this.categories), void 0, void 0, this.background));
              }
               else {
                if (GameConverter$Companion_getInstance().KONEC.matches_6bul2c$(line))
                  this.endType = endType(line, index);
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
    var tmp$;
    var moveBuilder = new MoveBuilder(this.gameConverterContext, moveId, void 0, void 0, void 0, (tmp$ = this.selfConsuming) != null ? tmp$ : MoveBuilder$Companion_getInstance().DEFAULT_SELF_CONSUMING, void 0, void 0, void 0, void 0, void 0, toMutableList_0(this.categories), void 0, void 0, this.background, void 0, void 0, this.chapter);
    this.moves.add_11rb$(moveBuilder);
    return moveBuilder;
  };
  StateBuilder.prototype.build_pdl1vj$ = function (nextStateId) {
    if (nextStateId === void 0)
      nextStateId = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15;
    if (nextStateId != null) {
      var tmp$_16;
      tmp$_16 = this.moves.iterator();
      while (tmp$_16.hasNext()) {
        var element = tmp$_16.next();
        if (element.targetId == null) {
          element.targetId = nextStateId;
        }
      }
    }
    var moveIndex = {v: 0};
    var tmp$_17;
    tmp$_17 = this.moves.iterator();
    while (tmp$_17.hasNext()) {
      var element_0 = tmp$_17.next();
      if (element_0.id == null) {
        var moveId = 'h_' + toString(this.id) + '_m' + moveIndex.v;
        element_0.id = moveId;
      }
      moveIndex.v = moveIndex.v + 1 | 0;
    }
    tmp$ = ensureNotNull(this.id);
    tmp$_0 = addPrefixIfNotNull(this.chapter, this.illustration);
    tmp$_1 = this.finalText();
    tmp$_4 = (tmp$_3 = (tmp$_2 = this.chapter) != null ? tmp$_2.id : null) != null ? tmp$_3 : ensureNotNull(this.chapterId);
    tmp$_5 = copyToArray(this.flags);
    tmp$_6 = copyToArray(this.flagsToRemove);
    var $receiver = this.moves;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_18;
    tmp$_18 = $receiver.iterator();
    while (tmp$_18.hasNext()) {
      var item = tmp$_18.next();
      destination.add_11rb$(item.build());
    }
    tmp$_7 = copyToArray(destination);
    tmp$_8 = copyToArray(this.categories);
    tmp$_9 = this.endType;
    tmp$_10 = this.theme;
    tmp$_11 = addPrefixIfNotNull_0(this.chapter, this.background);
    tmp$_12 = this.minigame;
    tmp$_13 = copyToArray(this.variables);
    tmp$_14 = this.checkpoint;
    tmp$_15 = this.selection;
    return new State(tmp$, tmp$_1, tmp$_5, tmp$_6, tmp$_8, tmp$_10, tmp$_11, tmp$_13, this.pause, tmp$_0, tmp$_4, tmp$_7, tmp$_9, tmp$_12, tmp$_14, tmp$_15);
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
    interfaces: [GraphElementBuilder]
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
  StateBuilder.prototype.component4 = function () {
    return this.flags;
  };
  StateBuilder.prototype.component5 = function () {
    return this.flagsToRemove;
  };
  StateBuilder.prototype.component6 = function () {
    return this.moveIds;
  };
  StateBuilder.prototype.component7 = function () {
    return this.chapter;
  };
  StateBuilder.prototype.component8 = function () {
    return this.chapterId;
  };
  StateBuilder.prototype.component9 = function () {
    return this.categories;
  };
  StateBuilder.prototype.component10 = function () {
    return this.endType;
  };
  StateBuilder.prototype.component11 = function () {
    return this.theme;
  };
  StateBuilder.prototype.component12 = function () {
    return this.background;
  };
  StateBuilder.prototype.component13 = function () {
    return this.minigame;
  };
  StateBuilder.prototype.component14 = function () {
    return this.variables;
  };
  StateBuilder.prototype.component15 = function () {
    return this.moves;
  };
  StateBuilder.prototype.component16 = function () {
    return this.checkpoint;
  };
  StateBuilder.prototype.component17 = function () {
    return this.selfConsuming;
  };
  StateBuilder.prototype.component18 = function () {
    return this.selection;
  };
  StateBuilder.prototype.component19 = function () {
    return this.pause;
  };
  StateBuilder.prototype.component20 = function () {
    return this.audio;
  };
  StateBuilder.prototype.copy_5oq6gx$ = function (gameConverterContext, id, illustration, flags, flagsToRemove, moveIds, chapter, chapterId, categories, endType, theme, background, minigame, variables, moves, checkpoint, selfConsuming, selection, pause, audio) {
    return new StateBuilder(gameConverterContext === void 0 ? this.gameConverterContext : gameConverterContext, id === void 0 ? this.id : id, illustration === void 0 ? this.illustration : illustration, flags === void 0 ? this.flags : flags, flagsToRemove === void 0 ? this.flagsToRemove : flagsToRemove, moveIds === void 0 ? this.moveIds : moveIds, chapter === void 0 ? this.chapter : chapter, chapterId === void 0 ? this.chapterId : chapterId, categories === void 0 ? this.categories : categories, endType === void 0 ? this.endType : endType, theme === void 0 ? this.theme : theme, background === void 0 ? this.background : background, minigame === void 0 ? this.minigame : minigame, variables === void 0 ? this.variables : variables, moves === void 0 ? this.moves : moves, checkpoint === void 0 ? this.checkpoint : checkpoint, selfConsuming === void 0 ? this.selfConsuming : selfConsuming, selection === void 0 ? this.selection : selection, pause === void 0 ? this.pause : pause, audio === void 0 ? this.audio : audio);
  };
  StateBuilder.prototype.toString = function () {
    return 'StateBuilder(gameConverterContext=' + Kotlin.toString(this.gameConverterContext) + (', id=' + Kotlin.toString(this.id)) + (', illustration=' + Kotlin.toString(this.illustration)) + (', flags=' + Kotlin.toString(this.flags)) + (', flagsToRemove=' + Kotlin.toString(this.flagsToRemove)) + (', moveIds=' + Kotlin.toString(this.moveIds)) + (', chapter=' + Kotlin.toString(this.chapter)) + (', chapterId=' + Kotlin.toString(this.chapterId)) + (', categories=' + Kotlin.toString(this.categories)) + (', endType=' + Kotlin.toString(this.endType)) + (', theme=' + Kotlin.toString(this.theme)) + (', background=' + Kotlin.toString(this.background)) + (', minigame=' + Kotlin.toString(this.minigame)) + (', variables=' + Kotlin.toString(this.variables)) + (', moves=' + Kotlin.toString(this.moves)) + (', checkpoint=' + Kotlin.toString(this.checkpoint)) + (', selfConsuming=' + Kotlin.toString(this.selfConsuming)) + (', selection=' + Kotlin.toString(this.selection)) + (', pause=' + Kotlin.toString(this.pause)) + (', audio=' + Kotlin.toString(this.audio)) + ')';
  };
  StateBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gameConverterContext) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.illustration) | 0;
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
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gameConverterContext, other.gameConverterContext) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.illustration, other.illustration) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.flagsToRemove, other.flagsToRemove) && Kotlin.equals(this.moveIds, other.moveIds) && Kotlin.equals(this.chapter, other.chapter) && Kotlin.equals(this.chapterId, other.chapterId) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.endType, other.endType) && Kotlin.equals(this.theme, other.theme) && Kotlin.equals(this.background, other.background) && Kotlin.equals(this.minigame, other.minigame) && Kotlin.equals(this.variables, other.variables) && Kotlin.equals(this.moves, other.moves) && Kotlin.equals(this.checkpoint, other.checkpoint) && Kotlin.equals(this.selfConsuming, other.selfConsuming) && Kotlin.equals(this.selection, other.selection) && Kotlin.equals(this.pause, other.pause) && Kotlin.equals(this.audio, other.audio)))));
  };
  function SuperStateBuilder(gameConverterContext, id, currentTheme, currentBackground, currentCategories, selfConsuming, finalTargetId, chapter, chapterId, tmpStates, endType) {
    if (currentTheme === void 0)
      currentTheme = null;
    if (currentBackground === void 0) {
      currentBackground = [];
    }
    if (currentCategories === void 0) {
      currentCategories = ArrayList_init();
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
                tmp$_0 = BaseElementBuilder$Companion_getInstance().TEMA.matches_6bul2c$(line);
              }
              if (tmp$_0) {
                var tema = BaseElementBuilder$Companion_getInstance().TEMA.replace_x2uqeu$(line, '$1');
                this.currentTheme = tema;
                this.currentStateBuilder().parseLine_bm4lxs$(line, index);
              }
               else {
                if (BaseElementBuilder$Companion_getInstance().KATEGORIE.matches_6bul2c$(line)) {
                  this.currentCategories.clear();
                  addAll_0(this.currentCategories, parameterArray(line));
                  this.currentStateBuilder().parseLine_bm4lxs$(line, index);
                }
                 else {
                  if (GraphElementBuilder$Companion_getInstance().POZADI.matches_6bul2c$(line)) {
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15;
    if (this.finalTargetId == null && this.currentStateBuilder().moves.isEmpty() && this.endType === EndType$NONE_getInstance() && this.currentStateBuilder().endType === EndType$NONE_getInstance()) {
      throw new StateException(this.id, 'Superuzel ' + this.id + ' pot\u0159ebuje c\xEDl, hrany anebo konec, p\u0159\xEDpadn\u011B posledn\xED uzel superuzlu pot\u0159ebuje kon');
    }
    var tmp$_16 = this.finalTargetId != null;
    if (tmp$_16) {
      tmp$_16 = !this.currentStateBuilder().moves.isEmpty();
    }
    if (tmp$_16) {
      var tmp$_17 = this.id;
      var tmp$_18 = 'Superuzel ' + this.id + ' m\u016F\u017Ee m\xEDt bu\u010F c\xEDl (' + toString(this.finalTargetId) + ') anebo hrany (';
      var $receiver = this.currentStateBuilder().moves;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_19;
      tmp$_19 = $receiver.iterator();
      while (tmp$_19.hasNext()) {
        var item = tmp$_19.next();
        destination.add_11rb$(item.verbose);
      }
      throw new StateException(tmp$_17, tmp$_18 + destination + ') (ne oboj\xED)');
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
            tmp$_8 = stateBuilder.moves;
            tmp$_2 = this.gameConverterContext;
            tmp$_3 = ensureNotNull(this.finalTargetId);
            tmp$_6 = (tmp$_5 = (tmp$_4 = stateBuilder.selfConsuming) != null ? tmp$_4 : this.selfConsuming) != null ? tmp$_5 : MoveBuilder$Companion_getInstance().DEFAULT_SELF_CONSUMING;
            tmp$_7 = this.currentBackground;
            tmp$_8.add_11rb$(new MoveBuilder(tmp$_2, moveId, void 0, void 0, void 0, tmp$_6, tmp$_3, void 0, void 0, void 0, void 0, toMutableList_0(this.currentCategories), void 0, void 0, tmp$_7, void 0, void 0, this.chapter));
          }
           else if (this.endType !== EndType$NONE_getInstance()) {
            stateBuilder.endType = this.endType;
          }
        }
         else {
          tmp$_14 = stateBuilder.moves;
          tmp$_9 = this.gameConverterContext;
          tmp$_12 = (tmp$_11 = (tmp$_10 = stateBuilder.selfConsuming) != null ? tmp$_10 : this.selfConsuming) != null ? tmp$_11 : MoveBuilder$Companion_getInstance().DEFAULT_SELF_CONSUMING;
          tmp$_13 = this.currentBackground;
          tmp$_14.add_11rb$(new MoveBuilder(tmp$_9, moveId, void 0, void 0, void 0, tmp$_12, nextStateId, void 0, void 0, void 0, void 0, toMutableList_0(this.currentCategories), void 0, void 0, tmp$_13, void 0, void 0, this.chapter));
        }
      }
      if (nextState == null) {
        tmp$_15 = stateBuilder.build_pdl1vj$(next);
      }
       else {
        tmp$_15 = stateBuilder.build_pdl1vj$(nextStateId);
      }
      var state = tmp$_15;
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
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
    tmp$_6 = this.tmpStates;
    tmp$ = this.gameConverterContext;
    tmp$_2 = (tmp$_1 = (tmp$_0 = this.chapter) != null ? tmp$_0.id : null) != null ? tmp$_1 : this.chapterId;
    tmp$_3 = this.currentTheme;
    tmp$_4 = this.currentBackground;
    tmp$_5 = this.selfConsuming;
    tmp$_6.add_11rb$(new StateBuilder(tmp$, newStateId, void 0, void 0, void 0, void 0, void 0, tmp$_2, toMutableList_0(this.currentCategories), void 0, tmp$_3, tmp$_4, void 0, void 0, void 0, void 0, tmp$_5));
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
  SuperStateBuilder.prototype.copy_92c6pi$ = function (gameConverterContext, id, currentTheme, currentBackground, currentCategories, selfConsuming, finalTargetId, chapter, chapterId, tmpStates, endType) {
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
  function GameTextGenerator() {
  }
  GameTextGenerator.prototype.generateText_u5fyh6$ = function (gameConfig) {
    var result = {v: ''};
    var $receiver = gameConfig.chapters;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      result.v += this.generateText_0(element) + '\n';
    }
    var $receiver_0 = result.v;
    var tmp$_0;
    return trimEnd(Kotlin.isCharSequence(tmp$_0 = $receiver_0) ? tmp$_0 : throwCCE()).toString();
  };
  GameTextGenerator.prototype.generateText_0 = function (chapter) {
    var result = {v: trimIndent('\n' + '            kapitola=' + chapter.id + '\n' + '        ') + '\n'};
    if (chapter.theme != null) {
      result.v += 'tema=' + toString(chapter.theme) + '\n';
    }
    result.v += chapter.name + '\n';
    var $receiver = chapter.states;
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      result.v += this.generateText_1((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item) + '\n';
    }
    return result.v;
  };
  GameTextGenerator.prototype.generateTextGe_3umdhg$ = function (graphElement) {
    var result = '';
    if (!(graphElement.flags.length === 0)) {
      result += 'priznak=' + joinToString(graphElement.flags, ',') + '\n';
    }
    if (!(graphElement.categories.length === 0)) {
      result += 'kategorie=' + joinToString(graphElement.categories, ',') + '\n';
    }
    if (graphElement.pause !== PauseType$AUTO_getInstance()) {
      result += toGenerated_0(graphElement.pause);
    }
    var tmp$;
    return trimEnd(Kotlin.isCharSequence(tmp$ = result) ? tmp$ : throwCCE()).toString();
  };
  GameTextGenerator.prototype.generateText_1 = function (stateIndex, state) {
    var result = {v: '\n'};
    result.v += 'uzel=' + state.id + '\n';
    result.v += this.generateTextGe_3umdhg$(state) + '\n';
    if (state.endType !== EndType$NONE_getInstance()) {
      result.v += toGenerated(state.endType);
    }
    if (state.text != null) {
      var $receiver = state.text;
      var tmp$;
      result.v += trimEnd(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString() + '\n';
    }
    var $receiver_0 = state.moves;
    var tmp$_0, tmp$_0_0;
    var index = 0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var item = $receiver_0[tmp$_0];
      result.v += this.generateText_qhmfwd$((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0), item) + '\n';
    }
    var $receiver_1 = result.v;
    var tmp$_1;
    return trimEnd(Kotlin.isCharSequence(tmp$_1 = $receiver_1) ? tmp$_1 : throwCCE()).toString();
  };
  GameTextGenerator.prototype.generateText_qhmfwd$ = function (moveIndex, move) {
    var result = trimIndent('\n' + '            ->' + move.targetId + '\n' + '        ') + '\n';
    result += this.generateTextGe_3umdhg$(move) + '\n';
    if (move.caption != null) {
      result += 'popis=' + toString(move.caption) + '\n';
    }
    if (move.selfConsuming) {
      result += 'poziraci=ano\n';
    }
     else {
      result += 'poziraci=ne\n';
    }
    var tmp$;
    return trimEnd(Kotlin.isCharSequence(tmp$ = result) ? tmp$ : throwCCE()).toString();
  };
  GameTextGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameTextGenerator',
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
    this.statesById = destination;
    var $receiver_0 = this.gameConfig.moves;
    var capacity_0 = coerceAtLeast(mapCapacity($receiver_0.length), 16);
    var destination_0 = LinkedHashMap_init_0(capacity_0);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element_0 = $receiver_0[tmp$_0];
      destination_0.put_xwzc9p$(element_0.id, element_0);
    }
    this.movesById = destination_0;
    var $receiver_1 = this.gameConfig.chapters;
    var capacity_1 = coerceAtLeast(mapCapacity($receiver_1.length), 16);
    var destination_1 = LinkedHashMap_init_0(capacity_1);
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver_1.length; ++tmp$_1) {
      var element_1 = $receiver_1[tmp$_1];
      destination_1.put_xwzc9p$(element_1.id, element_1);
    }
    this.chaptersById = destination_1;
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
    this.movesByTargetId = destination_2;
    this.flagGroupsByStateId = LinkedHashMap_init();
    var $receiver_3 = this.chaptersById;
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
      addAll(destination_4, list_0);
    }
    this.flagGroups = destination_4;
    var tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    tmp$_5 = this.gameConfig.states;
    for (tmp$_6 = 0; tmp$_6 !== tmp$_5.length; ++tmp$_6) {
      var state = tmp$_5[tmp$_6];
      if (this.flagGroupsByStateId.get_11rb$(state.id) == null) {
        var tmp$_13 = this.flagGroupsByStateId;
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
            ensureNotNull(this.flagGroupsByStateId.get_11rb$(state.id)).add_11rb$(flagGroup);
          }
        }
        tmp$_11 = move.flagsRequired;
        for (tmp$_12 = 0; tmp$_12 !== tmp$_11.length; ++tmp$_12) {
          var flag_0 = tmp$_11[tmp$_12];
          var flagGroup_0 = this.isInGroup_puj7f4$(state.chapterId, flag_0);
          if (flagGroup_0 != null) {
            ensureNotNull(this.flagGroupsByStateId.get_11rb$(state.id)).add_11rb$(flagGroup_0);
          }
        }
      }
    }
  }
  GameConfigHelper.prototype.stateById_61zpoe$ = function (id) {
    return getValue(this.statesById, id);
  };
  GameConfigHelper.prototype.start = function () {
    return this.stateById_61zpoe$(this.gameConfig.startId);
  };
  GameConfigHelper.prototype.moveById_61zpoe$ = function (id) {
    return getValue(this.movesById, id);
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
    if (!this.statesById.containsKey_11rb$(from)) {
      return false;
    }
    var state = getValue(this.statesById, from);
    tmp$ = state.moves;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var move = tmp$[tmp$_0];
      if (this.movesById.containsKey_11rb$(move.id)) {
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
    var moves = getValue(this.movesByTargetId, to);
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
    return getValue(this.chaptersById, chapterId);
  };
  GameConfigHelper.prototype.flagGroupsOf_ktq7vf$ = function (state) {
    return getValue(this.flagGroupsByStateId, state.id);
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
        addAll_0(flags, move.flagsDisallowing);
        addAll_0(flags, move.flagsRequired);
      }
      if (flags.size > 1) {
        var flagsStr = joinToString_0(flags, ',');
        println('skupina(' + state.id + '-skupina,prave_jeden)=' + flagsStr);
      }
    }
  };
  GameConfigHelper.prototype.printImageAssets = function () {
    var results = ArrayList_init();
    var $receiver = this.gameConfig.states;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var tmp$_0;
      if ((tmp$_0 = get_illustrationUrl(element)) != null) {
        addUnique(results, this.preload_61zpoe$(tmp$_0));
      }
      var tmp$_1;
      tmp$_1 = get_backgroundUrls(element).iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        addUnique(results, this.preload_61zpoe$(element_0));
      }
    }
    var $receiver_0 = this.gameConfig.moves;
    var tmp$_2;
    for (tmp$_2 = 0; tmp$_2 !== $receiver_0.length; ++tmp$_2) {
      var element_1 = $receiver_0[tmp$_2];
      var tmp$_3, tmp$_4;
      if ((tmp$_3 = get_illustrationUrl(element_1)) != null) {
        addUnique(results, this.preload_61zpoe$(tmp$_3));
      }
      var tmp$_5;
      tmp$_5 = get_backgroundUrls(element_1).iterator();
      while (tmp$_5.hasNext()) {
        var element_2 = tmp$_5.next();
        addUnique(results, this.preload_61zpoe$(element_2));
      }
      if ((tmp$_4 = get_imageUrl(element_1)) != null) {
        addUnique(results, this.preload_61zpoe$(tmp$_4));
      }
    }
    var tmp$_6;
    tmp$_6 = results.iterator();
    while (tmp$_6.hasNext()) {
      var element_3 = tmp$_6.next();
      println(element_3);
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
  function get_url($receiver) {
    return '/' + UrlUtil$Companion_getInstance().AUDIO + '/' + $receiver.filename;
  }
  function get_illustrationUrl($receiver) {
    var tmp$;
    return (tmp$ = $receiver.illustration) != null ? '/' + UrlUtil$Companion_getInstance().IMG + '/' + UrlUtil$Companion_getInstance().ILLUSTRATIONS + '/' + tmp$ : null;
  }
  function get_backgroundUrls($receiver) {
    var $receiver_0 = $receiver.background;
    var destination = ArrayList_init_0($receiver_0.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var item = $receiver_0[tmp$];
      destination.add_11rb$('/' + UrlUtil$Companion_getInstance().IMG + '/' + UrlUtil$Companion_getInstance().BACKGROUNDS + '/' + item);
    }
    return destination;
  }
  function get_imageUrl($receiver) {
    var tmp$;
    return (tmp$ = $receiver.image) != null ? '/' + UrlUtil$Companion_getInstance().IMG + '/' + UrlUtil$Companion_getInstance().MOVES + '/' + tmp$ : null;
  }
  function UrlUtil() {
    UrlUtil$Companion_getInstance();
  }
  UrlUtil.prototype.moveImageUrls_8hvgvt$ = function (move) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = get_imageUrl(move)) != null ? plus(this.graphElementImageUrls_0(move), tmp$) : null) != null ? tmp$_0 : this.graphElementImageUrls_0(move);
  };
  UrlUtil.prototype.graphElementImageUrls_0 = function (graphElement) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = get_illustrationUrl(graphElement)) != null ? plus(get_backgroundUrls(graphElement), tmp$) : null) != null ? tmp$_0 : get_backgroundUrls(graphElement);
  };
  UrlUtil.prototype.stateImageUrls_ktq7vf$ = function (state) {
    return this.graphElementImageUrls_0(state);
  };
  function UrlUtil$Companion() {
    UrlUtil$Companion_instance = this;
    this.ILLUSTRATIONS = 'illustrations';
    this.MOVES = 'moves';
    this.BACKGROUNDS = 'backgrounds';
    this.IMG = 'img';
    this.AUDIO = 'audio';
  }
  UrlUtil$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UrlUtil$Companion_instance = null;
  function UrlUtil$Companion_getInstance() {
    if (UrlUtil$Companion_instance === null) {
      new UrlUtil$Companion();
    }
    return UrlUtil$Companion_instance;
  }
  UrlUtil.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UrlUtil',
    interfaces: []
  };
  function ChapterValidator(chapters) {
    this.chapters = chapters;
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
    this.warningList.clear();
    var $receiver = this.chapters;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      this.warningList.addAll_brywnq$((new StatesValidator(element.states)).validate());
    }
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
      addAll(destination, list);
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
      addAll(destination_2, list_1);
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
    var allFlags = plus_0(movesOfFlag.keys, statesOfFlag.keys);
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
    return joinToString_0(destination, '\n');
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
      addAll_0(flags, move.flags);
    }
    tmp$_1 = gameConfig.states;
    for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
      var state = tmp$_1[tmp$_2];
      flags.add_11rb$(state.id);
      addAll_0(flags, state.flags);
    }
    var $receiver = gameConfig.chapters;
    var tmp$_3;
    for (tmp$_3 = 0; tmp$_3 !== $receiver.length; ++tmp$_3) {
      var element = $receiver[tmp$_3];
      var $receiver_0 = element.flagGroups;
      var tmp$_4;
      for (tmp$_4 = 0; tmp$_4 !== $receiver_0.length; ++tmp$_4) {
        var element_0 = $receiver_0[tmp$_4];
        addAll_0(flags, element_0.flags);
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
  function GameValidator(gameConfig, ignoreAcrossChapters) {
    if (ignoreAcrossChapters === void 0)
      ignoreAcrossChapters = false;
    this.gameConfig = gameConfig;
    this.ignoreAcrossChapters = ignoreAcrossChapters;
    this.helper = new GameConfigHelper(this.gameConfig);
    this.warningList = ArrayList_init();
    this.flags = getFlags(this.gameConfig);
  }
  GameValidator.prototype.warn_3epqxe$ = function (message, state, move) {
    if (state === void 0)
      state = null;
    if (move === void 0)
      move = null;
    println(message + ' - ' + toString(state) + ' - ' + toString(move) + '\n');
    this.warningList.add_11rb$(new ValidatorWarning(message, void 0, state, move));
  };
  GameValidator.prototype.validateMoves = function () {
    var tmp$, tmp$_0;
    this.validateNotDuplicitMoveIds();
    tmp$ = this.gameConfig.moves;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var move = tmp$[tmp$_0];
      this.validateMove_0(move, this.ignoreAcrossChapters);
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
        var tmp$_3 = move.testChapterId != null;
        if (tmp$_3) {
          var $receiver = this.gameConfig.chapters;
          var destination = ArrayList_init_0($receiver.length);
          var tmp$_4;
          for (tmp$_4 = 0; tmp$_4 !== $receiver.length; ++tmp$_4) {
            var item = $receiver[tmp$_4];
            destination.add_11rb$(item.id);
          }
          tmp$_3 = !destination.contains_11rb$(move.testChapterId);
        }
        if (tmp$_3) {
          println("it's okay to miss " + move.id + ' -> ' + move.targetId);
        }
         else if (move.acrossChapters() && ignoreAcrossChapters) {
          println("it's across chapters " + move.id + ' -> ' + move.targetId);
        }
         else {
          this.warn_3epqxe$('Cannot find target ' + move.targetId + ' from move ' + move.id + ' ' + '\n' + "KIKI to znamen\xE1, \u017Ee hrana '" + move.id + "' m\xE1 \u0161patn\u011B nastavenej 'cil' na " + move.targetId, void 0, move);
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
    this.validateMoves();
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
    this.warningList.clear();
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
  Variable$Companion.prototype.serializer = function () {
    return Variable$$serializer_getInstance();
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
  function Variable$$serializer() {
    this.descriptor_4bj8l9$_0 = new SerialClassDescImpl('eu.karelhovorka.textgame.core.variables.Variable', this);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('value', false);
    Variable$$serializer_instance = this;
  }
  Object.defineProperty(Variable$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_4bj8l9$_0;
    }
  });
  Variable$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.name);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.value);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Variable$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
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
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Variable_init(bitMask0, local0, local1, null);
  };
  Variable$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer];
  };
  Variable$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Variable$$serializer_instance = null;
  function Variable$$serializer_getInstance() {
    if (Variable$$serializer_instance === null) {
      new Variable$$serializer();
    }
    return Variable$$serializer_instance;
  }
  function Variable_init(seen1, name, value, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Variable.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('value');
    else
      $this.value = value;
    return $this;
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
  Object.defineProperty(Audio, 'Companion', {
    get: Audio$Companion_getInstance
  });
  Object.defineProperty(Audio, '$serializer', {
    get: Audio$$serializer_getInstance
  });
  var package$eu = _.eu || (_.eu = {});
  var package$karelhovorka = package$eu.karelhovorka || (package$eu.karelhovorka = {});
  var package$textgame = package$karelhovorka.textgame || (package$karelhovorka.textgame = {});
  var package$core = package$textgame.core || (package$textgame.core = {});
  var package$bo = package$core.bo || (package$core.bo = {});
  package$bo.Audio_init_w1pbw7$ = Audio_init;
  package$bo.Audio = Audio;
  package$bo.BaseElement = BaseElement;
  Object.defineProperty(Chapter, 'Companion', {
    get: Chapter$Companion_getInstance
  });
  Object.defineProperty(Chapter, '$serializer', {
    get: Chapter$$serializer_getInstance
  });
  package$bo.Chapter_init_4gxwd1$ = Chapter_init;
  package$bo.Chapter = Chapter;
  Object.defineProperty(ChapterCompletion, 'Companion', {
    get: ChapterCompletion$Companion_getInstance
  });
  Object.defineProperty(ChapterCompletion, '$serializer', {
    get: ChapterCompletion$$serializer_getInstance
  });
  package$bo.ChapterCompletion_init_vmmwy2$ = ChapterCompletion_init;
  package$bo.ChapterCompletion = ChapterCompletion;
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
  Object.defineProperty(FlagGroup, 'Companion', {
    get: FlagGroup$Companion_getInstance
  });
  Object.defineProperty(FlagGroup, '$serializer', {
    get: FlagGroup$$serializer_getInstance
  });
  package$bo.FlagGroup_init_ucn7nr$ = FlagGroup_init;
  package$bo.FlagGroup = FlagGroup;
  Object.defineProperty(FlagType, 'AT_LEAST_ONE', {
    get: FlagType$AT_LEAST_ONE_getInstance
  });
  Object.defineProperty(FlagType, 'EXACTLY_ONE', {
    get: FlagType$EXACTLY_ONE_getInstance
  });
  package$bo.FlagType = FlagType;
  Object.defineProperty(GameConfig, 'Companion', {
    get: GameConfig$Companion_getInstance
  });
  package$bo.GameConfig = GameConfig;
  package$bo.GameFlags = GameFlags;
  package$bo.GraphElement = GraphElement;
  package$bo.debugString_x8f6t6$ = debugString;
  package$bo.toMinigameState_ijyuyw$ = toMinigameState;
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
  package$bo.ImmutableGameState_init_b6ll66$ = ImmutableGameState_init;
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
  package$bo.removeNotInteractive_ay6k20$ = removeNotInteractive_0;
  package$bo.simpleString_kqcojs$ = simpleString;
  package$bo.describe_kqcojs$ = describe;
  package$bo.checkMultipleNonInteractive_xyj7z9$ = checkMultipleNonInteractive;
  package$bo.flagsOrEmpty_kqcojs$ = flagsOrEmpty;
  Object.defineProperty(Move, 'Companion', {
    get: Move$Companion_getInstance
  });
  Object.defineProperty(Move, '$serializer', {
    get: Move$$serializer_getInstance
  });
  package$bo.Move_init_v30zjq$ = Move_init;
  package$bo.Move = Move;
  Object.defineProperty(MoveCommand, 'Companion', {
    get: MoveCommand$Companion_getInstance
  });
  Object.defineProperty(MoveCommand, '$serializer', {
    get: MoveCommand$$serializer_getInstance
  });
  package$bo.MoveCommand_init_cj60sw$ = MoveCommand_init;
  package$bo.MoveCommand = MoveCommand;
  Object.defineProperty(MultiString, 'Companion', {
    get: MultiString$Companion_getInstance
  });
  Object.defineProperty(MultiString, '$serializer', {
    get: MultiString$$serializer_getInstance
  });
  package$bo.MultiString_init_jlky5r$ = MultiString_init;
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
  package$bo.Selection = Selection;
  package$bo.flagsOrEmpty_6bkab8$ = flagsOrEmpty_0;
  Object.defineProperty(State, 'Companion', {
    get: State$Companion_getInstance
  });
  Object.defineProperty(State, '$serializer', {
    get: State$$serializer_getInstance
  });
  package$bo.State_init_9h32zw$ = State_init;
  package$bo.State = State;
  Object.defineProperty(BaseElementBuilder, 'Companion', {
    get: BaseElementBuilder$Companion_getInstance
  });
  var package$builder = package$core.builder || (package$core.builder = {});
  package$builder.BaseElementBuilder = BaseElementBuilder;
  Object.defineProperty(package$builder, 'stringToEndtype', {
    get: function () {
      return stringToEndtype;
    }
  });
  Object.defineProperty(package$builder, 'endTypeToString', {
    get: function () {
      return endTypeToString;
    }
  });
  package$builder.toGenerated_rejs34$ = toGenerated;
  package$builder.endType_bm4lxs$ = endType;
  Object.defineProperty(package$builder, 'stringToPause', {
    get: function () {
      return stringToPause;
    }
  });
  Object.defineProperty(package$builder, 'pauseToString', {
    get: function () {
      return pauseToString;
    }
  });
  package$builder.toGenerated_qh7mmt$ = toGenerated_0;
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
  Object.defineProperty(GraphElementBuilder, 'Companion', {
    get: GraphElementBuilder$Companion_getInstance
  });
  package$builder.GraphElementBuilder = GraphElementBuilder;
  package$builder.LineParser = LineParser;
  Object.defineProperty(MoveBuilder, 'Companion', {
    get: MoveBuilder$Companion_getInstance
  });
  package$builder.MoveBuilder = MoveBuilder;
  Object.defineProperty(StateBuilder, 'Companion', {
    get: StateBuilder$Companion_getInstance
  });
  package$builder.StateBuilder = StateBuilder;
  package$builder.SuperStateBuilder = SuperStateBuilder;
  package$builder.state_zhmc9d$ = state;
  package$builder.move_za6fqz$ = move;
  package$builder.game_shlv14$ = game;
  var package$string = package$builder.string || (package$builder.string = {});
  package$string.GameTextGenerator = GameTextGenerator;
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
  package$util.get_url_26nf5d$ = get_url;
  package$util.get_illustrationUrl_moyhw5$ = get_illustrationUrl;
  package$util.get_backgroundUrls_moyhw5$ = get_backgroundUrls;
  package$util.get_imageUrl_kqcojs$ = get_imageUrl;
  Object.defineProperty(UrlUtil, 'Companion', {
    get: UrlUtil$Companion_getInstance
  });
  package$util.UrlUtil = UrlUtil;
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
  Object.defineProperty(Variable, '$serializer', {
    get: Variable$$serializer_getInstance
  });
  var package$variables = package$core.variables || (package$core.variables = {});
  package$variables.Variable_init_2u6d5w$ = Variable_init;
  package$variables.Variable = Variable;
  Audio$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Chapter$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  ChapterCompletion$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  FlagGroup$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  ImmutableGameState$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Move$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  MoveCommand$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  MultiString$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  State$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Variable$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  prefix = Regex_init('[hu]([^_]+)_.*');
  stringToEndtype = mapOf([to('prohra', EndType$LOSE_getInstance()), to('nedokonceno', EndType$UNFINISHED_getInstance()), to('vyhra', EndType$WIN_getInstance())]);
  var $receiver = stringToEndtype.entries;
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
  var destination = LinkedHashMap_init_0(capacity);
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var element = tmp$.next();
    destination.put_xwzc9p$(element.value, element.key);
  }
  endTypeToString = destination;
  stringToPause = mapOf([to('ano', PauseType$YES_getInstance()), to('ne', PauseType$NO_getInstance()), to('auto', PauseType$AUTO_getInstance())]);
  var $receiver_0 = stringToPause.entries;
  var capacity_0 = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_0, 10)), 16);
  var destination_0 = LinkedHashMap_init_0(capacity_0);
  var tmp$_0;
  tmp$_0 = $receiver_0.iterator();
  while (tmp$_0.hasNext()) {
    var element_0 = tmp$_0.next();
    destination_0.put_xwzc9p$(element_0.value, element_0.key);
  }
  pauseToString = destination_0;
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
