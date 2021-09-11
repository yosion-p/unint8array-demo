import { BufferBigEndian } from './index'

// test code
let str0 = '𠮷';
let str1 = '中';//𝌆𠮷
let str2 = 'a';
let strAll = str0 + str1 + str2;
let buf = new BufferBigEndian();
let len = buf.pushStringWithUtf8(strAll);
console.log("buffer HEX=" + buf.tostring(), "encodeURI=" + encodeURI(strAll));
console.log("befor:" + strAll + ",after:" + buf.getStringWithUtf8(len));