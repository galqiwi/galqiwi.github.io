(function(){"use strict";let s;const g=new Array(128).fill(void 0);g.push(void 0,null,!0,!1);function o(n){return g[n]}let h=g.length;function U(n){n<132||(g[n]=h,h=n)}function d(n){const e=o(n);return U(n),e}const S=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&S.decode();let R=null;function m(){return(R===null||R.byteLength===0)&&(R=new Uint8Array(s.memory.buffer)),R}function p(n,e){return n=n>>>0,S.decode(m().subarray(n,n+e))}function i(n){h===g.length&&g.push(g.length+1);const e=h;return h=g[e],g[e]=n,e}let f=0;const j=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},q=typeof j.encodeInto=="function"?function(n,e){return j.encodeInto(n,e)}:function(n,e){const t=j.encode(n);return e.set(t),{read:n.length,written:t.length}};function F(n,e,t){if(t===void 0){const b=j.encode(n),l=e(b.length,1)>>>0;return m().subarray(l,l+b.length).set(b),f=b.length,l}let r=n.length,_=e(r,1)>>>0;const c=m();let a=0;for(;a<r;a++){const b=n.charCodeAt(a);if(b>127)break;c[_+a]=b}if(a!==r){a!==0&&(n=n.slice(a)),_=t(_,r,r=a+n.length*3,1)>>>0;const b=m().subarray(_+a,_+r),l=q(n,b);a+=l.written,_=t(_,r,a,1)>>>0}return f=a,_}function D(n){return n==null}let y=null;function w(){return(y===null||y.buffer.detached===!0||y.buffer.detached===void 0&&y.buffer!==s.memory.buffer)&&(y=new DataView(s.memory.buffer)),y}function A(n){const e=typeof n;if(e=="number"||e=="boolean"||n==null)return`${n}`;if(e=="string")return`"${n}"`;if(e=="symbol"){const _=n.description;return _==null?"Symbol":`Symbol(${_})`}if(e=="function"){const _=n.name;return typeof _=="string"&&_.length>0?`Function(${_})`:"Function"}if(Array.isArray(n)){const _=n.length;let c="[";_>0&&(c+=A(n[0]));for(let a=1;a<_;a++)c+=", "+A(n[a]);return c+="]",c}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(t.length>1)r=t[1];else return toString.call(n);if(r=="Object")try{return"Object("+JSON.stringify(n)+")"}catch{return"Object"}return n instanceof Error?`${n.name}: ${n.message}
${n.stack}`:r}function C(n,e){return n=n>>>0,m().subarray(n/1,n/1+e)}const k=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>{s.__wbindgen_export_3.get(n.dtor)(n.a,n.b)});function L(n,e,t,r){const _={a:n,b:e,cnt:1,dtor:t},c=(...a)=>{_.cnt++;const b=_.a;_.a=0;try{return r(b,_.b,...a)}finally{--_.cnt===0?(s.__wbindgen_export_3.get(_.dtor)(b,_.b),k.unregister(_)):_.a=b}};return c.original=_,k.register(c,_,_),c}function V(n,e,t){s._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4bec5ddadf657f0a(n,e,i(t))}function $(n,e){const t=e(n.length*4,4)>>>0,r=w();for(let _=0;_<n.length;_++)r.setUint32(t+4*_,i(n[_]),!0);return f=n.length,t}function E(n,e){const t=e(n.length*1,1)>>>0;return m().set(n,t/1),f=n.length,t}function u(n,e){try{return n.apply(this,e)}catch(t){s.__wbindgen_exn_store(i(t))}}function N(n,e,t,r){s.wasm_bindgen__convert__closures__invoke2_mut__h13f65718120893e4(n,e,i(t),i(r))}typeof FinalizationRegistry>"u"||new FinalizationRegistry(n=>s.__wbg_downloadstatussender_free(n>>>0,1));const M=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>s.__wbg_llamaapi_free(n>>>0,1));class T{static __wrap(e){e=e>>>0;const t=Object.create(T.prototype);return t.__wbg_ptr=e,M.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,M.unregister(this),e}free(){const e=this.__destroy_into_raw();s.__wbg_llamaapi_free(e,0)}set_prefix(e){const t=$(e,s.__wbindgen_malloc),r=f,_=s.llamaapi_set_prefix(this.__wbg_ptr,t,r);return d(_)}next(){const e=s.llamaapi_next(this.__wbg_ptr);return d(e)}is_finished(){return s.llamaapi_is_finished(this.__wbg_ptr)!==0}clear(){s.llamaapi_clear(this.__wbg_ptr)}}typeof FinalizationRegistry>"u"||new FinalizationRegistry(n=>s.__wbg_llamaloader_free(n>>>0,1));const I=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>s.__wbg_rpclinearregistryserver_free(n>>>0,1));class x{static __wrap(e){e=e>>>0;const t=Object.create(x.prototype);return t.__wbg_ptr=e,I.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,I.unregister(this),e}free(){const e=this.__destroy_into_raw();s.__wbg_rpclinearregistryserver_free(e,0)}static wasm_new(){const e=s.rpclinearregistryserver_wasm_new();return x.__wrap(e)}serve_serialized(e){const t=E(e,s.__wbindgen_malloc),r=f,_=s.rpclinearregistryserver_serve_serialized(this.__wbg_ptr,t,r);return d(_)}}const W=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>s.__wbg_workerresponsesender_free(n>>>0,1));class O{static __wrap(e){e=e>>>0;const t=Object.create(O.prototype);return t.__wbg_ptr=e,W.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,W.unregister(this),e}free(){const e=this.__destroy_into_raw();s.__wbg_workerresponsesender_free(e,0)}register_response(e){const t=E(e,s.__wbindgen_malloc),r=f,_=s.workerresponsesender_register_response(this.__wbg_ptr,t,r);return d(_)}}async function B(n,e){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,e)}catch(r){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}function P(){const n={};return n.wbg={},n.wbg.__wbindgen_object_drop_ref=function(e){d(e)},n.wbg.__wbindgen_string_new=function(e,t){const r=p(e,t);return i(r)},n.wbg.__wbg_llamaapi_new=function(e){const t=T.__wrap(e);return i(t)},n.wbg.__wbg_workerresponsesender_new=function(e){const t=O.__wrap(e);return i(t)},n.wbg.__wbindgen_array_new=function(){return i([])},n.wbg.__wbindgen_array_push=function(e,t){o(e).push(d(t))},n.wbg.__wbindgen_cb_drop=function(e){const t=d(e).original;return t.cnt--==1?(t.a=0,!0):!1},n.wbg.__wbindgen_string_get=function(e,t){const r=o(t),_=typeof r=="string"?r:void 0;var c=D(_)?0:F(_,s.__wbindgen_malloc,s.__wbindgen_realloc),a=f;w().setInt32(e+4*1,a,!0),w().setInt32(e+4*0,c,!0)},n.wbg.__wbg_fetch_a95fe72aaf1c876c=function(e){const t=fetch(o(e));return i(t)},n.wbg.__wbg_setbody_734cb3d7ee8e6e96=function(e,t){o(e).body=o(t)},n.wbg.__wbg_setmethod_dc68a742c2db5c6a=function(e,t,r){o(e).method=p(t,r)},n.wbg.__wbg_setmode_a781aae2bd3df202=function(e,t){o(e).mode=["same-origin","no-cors","cors","navigate"][t]},n.wbg.__wbg_headers_7d46f181de2aa1dd=function(e){const t=o(e).headers;return i(t)},n.wbg.__wbg_newwithstrandinit_a31c69e4cc337183=function(){return u(function(e,t,r){const _=new Request(p(e,t),o(r));return i(_)},arguments)},n.wbg.__wbg_postMessage_37faac1bc005e5c0=function(){return u(function(e,t){o(e).postMessage(o(t))},arguments)},n.wbg.__wbg_debug_5a33c41aeac15ee6=function(e){console.debug(o(e))},n.wbg.__wbg_error_09480e4aadca50ad=function(e){console.error(o(e))},n.wbg.__wbg_info_c261acb2deacd903=function(e){console.info(o(e))},n.wbg.__wbg_log_b103404cc5920657=function(e){console.log(o(e))},n.wbg.__wbg_warn_2b3adb99ce26c314=function(e){console.warn(o(e))},n.wbg.__wbg_set_b3c7c6d2e5e783d6=function(){return u(function(e,t,r,_,c){o(e).set(p(t,r),p(_,c))},arguments)},n.wbg.__wbg_instanceof_Response_e91b7eb7c611a9ae=function(e){let t;try{t=o(e)instanceof Response}catch{t=!1}return t},n.wbg.__wbg_url_1bf85c8abeb8c92d=function(e,t){const r=o(t).url,_=F(r,s.__wbindgen_malloc,s.__wbindgen_realloc),c=f;w().setInt32(e+4*1,c,!0),w().setInt32(e+4*0,_,!0)},n.wbg.__wbg_status_ae8de515694c5c7c=function(e){return o(e).status},n.wbg.__wbg_ok_227b0624f5926a87=function(e){return o(e).ok},n.wbg.__wbg_statusText_2c9a12f90531c8ed=function(e,t){const r=o(t).statusText,_=F(r,s.__wbindgen_malloc,s.__wbindgen_realloc),c=f;w().setInt32(e+4*1,c,!0),w().setInt32(e+4*0,_,!0)},n.wbg.__wbg_headers_5e283e8345689121=function(e){const t=o(e).headers;return i(t)},n.wbg.__wbg_arrayBuffer_a5fbad63cc7e663b=function(){return u(function(e){const t=o(e).arrayBuffer();return i(t)},arguments)},n.wbg.__wbg_queueMicrotask_48421b3cc9052b68=function(e){const t=o(e).queueMicrotask;return i(t)},n.wbg.__wbindgen_is_function=function(e){return typeof o(e)=="function"},n.wbg.__wbg_queueMicrotask_12a30234db4045d3=function(e){queueMicrotask(o(e))},n.wbg.__wbg_crypto_1d1f22824a6a080c=function(e){const t=o(e).crypto;return i(t)},n.wbg.__wbindgen_is_object=function(e){const t=o(e);return typeof t=="object"&&t!==null},n.wbg.__wbg_process_4a72847cc503995b=function(e){const t=o(e).process;return i(t)},n.wbg.__wbg_versions_f686565e586dd935=function(e){const t=o(e).versions;return i(t)},n.wbg.__wbg_node_104a2ff8d6ea03a2=function(e){const t=o(e).node;return i(t)},n.wbg.__wbindgen_is_string=function(e){return typeof o(e)=="string"},n.wbg.__wbg_require_cca90b1a94a0255b=function(){return u(function(){const e=module.require;return i(e)},arguments)},n.wbg.__wbg_msCrypto_eb05e62b530a1508=function(e){const t=o(e).msCrypto;return i(t)},n.wbg.__wbg_randomFillSync_5c9c955aa56b6049=function(){return u(function(e,t){o(e).randomFillSync(d(t))},arguments)},n.wbg.__wbg_getRandomValues_3aa56aa6edec874c=function(){return u(function(e,t){o(e).getRandomValues(o(t))},arguments)},n.wbg.__wbg_performance_a1b8bde2ee512264=function(e){const t=o(e).performance;return i(t)},n.wbg.__wbindgen_is_undefined=function(e){return o(e)===void 0},n.wbg.__wbg_now_abd80e969af37148=function(e){return o(e).now()},n.wbg.__wbg_get_3baa728f9d58d3f6=function(e,t){const r=o(e)[t>>>0];return i(r)},n.wbg.__wbg_length_ae22078168b726f5=function(e){return o(e).length},n.wbg.__wbg_newnoargs_76313bd6ff35d0f2=function(e,t){const r=new Function(p(e,t));return i(r)},n.wbg.__wbg_next_de3e9db4440638b2=function(e){const t=o(e).next;return i(t)},n.wbg.__wbg_next_f9cb570345655b9a=function(){return u(function(e){const t=o(e).next();return i(t)},arguments)},n.wbg.__wbg_done_bfda7aa8f252b39f=function(e){return o(e).done},n.wbg.__wbg_value_6d39332ab4788d86=function(e){const t=o(e).value;return i(t)},n.wbg.__wbg_iterator_888179a48810a9fe=function(){return i(Symbol.iterator)},n.wbg.__wbg_get_224d16597dbbfd96=function(){return u(function(e,t){const r=Reflect.get(o(e),o(t));return i(r)},arguments)},n.wbg.__wbg_call_1084a111329e68ce=function(){return u(function(e,t){const r=o(e).call(o(t));return i(r)},arguments)},n.wbg.__wbg_new_525245e2b9901204=function(){const e=new Object;return i(e)},n.wbg.__wbindgen_object_clone_ref=function(e){const t=o(e);return i(t)},n.wbg.__wbg_self_3093d5d1f7bcb682=function(){return u(function(){const e=self.self;return i(e)},arguments)},n.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return u(function(){const e=window.window;return i(e)},arguments)},n.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return u(function(){const e=globalThis.globalThis;return i(e)},arguments)},n.wbg.__wbg_global_e5a3fe56f8be9485=function(){return u(function(){const e=global.global;return i(e)},arguments)},n.wbg.__wbg_call_89af060b4e1523f2=function(){return u(function(e,t,r){const _=o(e).call(o(t),o(r));return i(_)},arguments)},n.wbg.__wbg_instanceof_TypeError_eeccd04a800fcce2=function(e){let t;try{t=o(e)instanceof TypeError}catch{t=!1}return t},n.wbg.__wbg_new_b85e72ed1bfd57f9=function(e,t){try{var r={a:e,b:t},_=(a,b)=>{const l=r.a;r.a=0;try{return N(l,r.b,a,b)}finally{r.a=l}};const c=new Promise(_);return i(c)}finally{r.a=r.b=0}},n.wbg.__wbg_resolve_570458cb99d56a43=function(e){const t=Promise.resolve(o(e));return i(t)},n.wbg.__wbg_then_95e6edc0f89b73b1=function(e,t){const r=o(e).then(o(t));return i(r)},n.wbg.__wbg_then_876bb3c633745cc6=function(e,t,r){const _=o(e).then(o(t),o(r));return i(_)},n.wbg.__wbg_buffer_b7b08af79b0b0974=function(e){const t=o(e).buffer;return i(t)},n.wbg.__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9=function(e,t,r){const _=new Uint8Array(o(e),t>>>0,r>>>0);return i(_)},n.wbg.__wbg_new_ea1883e1e5e86686=function(e){const t=new Uint8Array(o(e));return i(t)},n.wbg.__wbg_set_d1e79e2388520f18=function(e,t,r){o(e).set(o(t),r>>>0)},n.wbg.__wbg_length_8339fcf5d8ecd12e=function(e){return o(e).length},n.wbg.__wbg_newwithlength_ec548f448387c968=function(e){const t=new Uint8Array(e>>>0);return i(t)},n.wbg.__wbg_subarray_7c2e3576afe181d1=function(e,t,r){const _=o(e).subarray(t>>>0,r>>>0);return i(_)},n.wbg.__wbindgen_debug_string=function(e,t){const r=A(o(t)),_=F(r,s.__wbindgen_malloc,s.__wbindgen_realloc),c=f;w().setInt32(e+4*1,c,!0),w().setInt32(e+4*0,_,!0)},n.wbg.__wbindgen_throw=function(e,t){throw new Error(p(e,t))},n.wbg.__wbindgen_memory=function(){const e=s.memory;return i(e)},n.wbg.__wbindgen_uint8_array_new=function(e,t){var r=C(e,t).slice();return s.__wbindgen_free(e,t*1,1),i(r)},n.wbg.__wbindgen_closure_wrapper882=function(e,t,r){const _=L(e,t,299,V);return i(_)},n}function J(n,e){return s=n.exports,v.__wbindgen_wasm_module=e,y=null,R=null,s.__wbindgen_start(),s}async function v(n){if(s!==void 0)return s;typeof n<"u"&&Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead"),typeof n>"u"&&(n=new URL("/aqlm-rs/assets/wasm_bg-tNIE5ijR.wasm",self.location.href));const e=P();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:t,module:r}=await B(await n,e);return J(t,r)}let z;onmessage=async n=>{z===void 0&&(await v(),z=x.wasm_new());let e=await z.serve_serialized(n.data);postMessage(e)}})();