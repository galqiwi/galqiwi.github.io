(function(){"use strict";let o;const p=new Array(128).fill(void 0);p.push(void 0,null,!0,!1);function s(t){return p[t]}let j=p.length;function D(t){t<132||(p[t]=j,j=t)}function w(t){const e=s(t);return D(t),e}const I=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&I.decode();let x=null;function h(){return(x===null||x.byteLength===0)&&(x=new Uint8Array(o.memory.buffer)),x}function y(t,e){return t=t>>>0,I.decode(h().subarray(t,t+e))}function i(t){j===p.length&&p.push(p.length+1);const e=j;return j=p[e],p[e]=t,e}let g=0;const F=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},V=typeof F.encodeInto=="function"?function(t,e){return F.encodeInto(t,e)}:function(t,e){const n=F.encode(t);return e.set(n),{read:t.length,written:n.length}};function k(t,e,n){if(n===void 0){const u=F.encode(t),l=e(u.length,1)>>>0;return h().subarray(l,l+u.length).set(u),g=u.length,l}let _=t.length,r=e(_,1)>>>0;const c=h();let a=0;for(;a<_;a++){const u=t.charCodeAt(a);if(u>127)break;c[r+a]=u}if(a!==_){a!==0&&(t=t.slice(a)),r=n(r,_,_=a+t.length*3,1)>>>0;const u=h().subarray(r+a,r+_),l=V(t,u);a+=l.written,r=n(r,_,a,1)>>>0}return g=a,r}function N(t){return t==null}let m=null;function f(){return(m===null||m.buffer.detached===!0||m.buffer.detached===void 0&&m.buffer!==o.memory.buffer)&&(m=new DataView(o.memory.buffer)),m}function S(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const r=t.description;return r==null?"Symbol":`Symbol(${r})`}if(e=="function"){const r=t.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(t)){const r=t.length;let c="[";r>0&&(c+=S(t[0]));for(let a=1;a<r;a++)c+=", "+S(t[a]);return c+="]",c}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let _;if(n.length>1)_=n[1];else return toString.call(t);if(_=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:_}function $(t,e){return t=t>>>0,h().subarray(t/1,t/1+e)}const W=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>{o.__wbindgen_export_3.get(t.dtor)(t.a,t.b)});function J(t,e,n,_){const r={a:t,b:e,cnt:1,dtor:n},c=(...a)=>{r.cnt++;const u=r.a;r.a=0;try{return _(u,r.b,...a)}finally{--r.cnt===0?(o.__wbindgen_export_3.get(r.dtor)(u,r.b),W.unregister(r)):r.a=u}};return c.original=r,W.register(c,r,r),c}function P(t,e,n){o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4bec5ddadf657f0a(t,e,i(n))}function E(t,e){const n=e(t.length*4,4)>>>0,_=f();for(let r=0;r<t.length;r++)_.setUint32(n+4*r,i(t[r]),!0);return g=t.length,n}function B(t,e){t=t>>>0;const n=f(),_=[];for(let r=t;r<t+4*e;r+=4)_.push(w(n.getUint32(r,!0)));return _}function H(t,e){const n=e(t.length*1,1)>>>0;return h().set(t,n/1),g=t.length,n}function b(t,e){try{return t.apply(this,e)}catch(n){o.__wbindgen_exn_store(i(n))}}function Y(t,e,n,_){o.wasm_bindgen__convert__closures__invoke2_mut__h13f65718120893e4(t,e,i(n),i(_))}const U=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_downloadstatussender_free(t>>>0,1));class O{static __wrap(e){e=e>>>0;const n=Object.create(O.prototype);return n.__wbg_ptr=e,U.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,U.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_downloadstatussender_free(e,0)}get_status(){const e=o.downloadstatussender_get_status(this.__wbg_ptr);return w(e)}}const q=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_llamaapi_free(t>>>0,1));class T{static __wrap(e){e=e>>>0;const n=Object.create(T.prototype);return n.__wbg_ptr=e,q.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,q.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_llamaapi_free(e,0)}set_prefix(e){const n=E(e,o.__wbindgen_malloc),_=g,r=o.llamaapi_set_prefix(this.__wbg_ptr,n,_);return w(r)}next(){const e=o.llamaapi_next(this.__wbg_ptr);return w(e)}is_finished(){return o.llamaapi_is_finished(this.__wbg_ptr)!==0}clear(){o.llamaapi_clear(this.__wbg_ptr)}}const v=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_llamaloader_free(t>>>0,1));class M{static __wrap(e){e=e>>>0;const n=Object.create(M.prototype);return n.__wbg_ptr=e,v.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,v.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_llamaloader_free(e,0)}static new(e){const n=E(e,o.__wbindgen_malloc),_=g,r=o.llamaloader_new(n,_);return M.__wrap(r)}get_worker_response_senders(){try{const r=o.__wbindgen_add_to_stack_pointer(-16);o.llamaloader_get_worker_response_senders(r,this.__wbg_ptr);var e=f().getInt32(r+4*0,!0),n=f().getInt32(r+4*1,!0),_=B(e,n).slice();return o.__wbindgen_free(e,n*4,4),_}finally{o.__wbindgen_add_to_stack_pointer(16)}}set_load_scheme(e,n){const _=k(e,o.__wbindgen_malloc,o.__wbindgen_realloc),r=g,c=k(n,o.__wbindgen_malloc,o.__wbindgen_realloc),a=g,u=o.llamaloader_set_load_scheme(this.__wbg_ptr,_,r,c,a);return w(u)}get_download_status_sender(){const e=o.llamaloader_get_download_status_sender(this.__wbg_ptr);return O.__wrap(e)}into_llama_api(){const e=this.__destroy_into_raw(),n=o.llamaloader_into_llama_api(e);return w(n)}}typeof FinalizationRegistry>"u"||new FinalizationRegistry(t=>o.__wbg_rpclinearregistryserver_free(t>>>0,1));const L=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_workerresponsesender_free(t>>>0,1));class z{static __wrap(e){e=e>>>0;const n=Object.create(z.prototype);return n.__wbg_ptr=e,L.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,L.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_workerresponsesender_free(e,0)}register_response(e){const n=H(e,o.__wbindgen_malloc),_=g,r=o.workerresponsesender_register_response(this.__wbg_ptr,n,_);return w(r)}}async function G(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(_){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",_);else throw _}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}function K(){const t={};return t.wbg={},t.wbg.__wbindgen_object_drop_ref=function(e){w(e)},t.wbg.__wbindgen_string_new=function(e,n){const _=y(e,n);return i(_)},t.wbg.__wbg_llamaapi_new=function(e){const n=T.__wrap(e);return i(n)},t.wbg.__wbg_workerresponsesender_new=function(e){const n=z.__wrap(e);return i(n)},t.wbg.__wbindgen_array_new=function(){return i([])},t.wbg.__wbindgen_array_push=function(e,n){s(e).push(w(n))},t.wbg.__wbindgen_cb_drop=function(e){const n=w(e).original;return n.cnt--==1?(n.a=0,!0):!1},t.wbg.__wbindgen_string_get=function(e,n){const _=s(n),r=typeof _=="string"?_:void 0;var c=N(r)?0:k(r,o.__wbindgen_malloc,o.__wbindgen_realloc),a=g;f().setInt32(e+4*1,a,!0),f().setInt32(e+4*0,c,!0)},t.wbg.__wbg_fetch_a95fe72aaf1c876c=function(e){const n=fetch(s(e));return i(n)},t.wbg.__wbg_setbody_734cb3d7ee8e6e96=function(e,n){s(e).body=s(n)},t.wbg.__wbg_setmethod_dc68a742c2db5c6a=function(e,n,_){s(e).method=y(n,_)},t.wbg.__wbg_setmode_a781aae2bd3df202=function(e,n){s(e).mode=["same-origin","no-cors","cors","navigate"][n]},t.wbg.__wbg_headers_7d46f181de2aa1dd=function(e){const n=s(e).headers;return i(n)},t.wbg.__wbg_newwithstrandinit_a31c69e4cc337183=function(){return b(function(e,n,_){const r=new Request(y(e,n),s(_));return i(r)},arguments)},t.wbg.__wbg_postMessage_37faac1bc005e5c0=function(){return b(function(e,n){s(e).postMessage(s(n))},arguments)},t.wbg.__wbg_debug_5a33c41aeac15ee6=function(e){console.debug(s(e))},t.wbg.__wbg_error_09480e4aadca50ad=function(e){console.error(s(e))},t.wbg.__wbg_info_c261acb2deacd903=function(e){console.info(s(e))},t.wbg.__wbg_log_b103404cc5920657=function(e){console.log(s(e))},t.wbg.__wbg_warn_2b3adb99ce26c314=function(e){console.warn(s(e))},t.wbg.__wbg_set_b3c7c6d2e5e783d6=function(){return b(function(e,n,_,r,c){s(e).set(y(n,_),y(r,c))},arguments)},t.wbg.__wbg_instanceof_Response_e91b7eb7c611a9ae=function(e){let n;try{n=s(e)instanceof Response}catch{n=!1}return n},t.wbg.__wbg_url_1bf85c8abeb8c92d=function(e,n){const _=s(n).url,r=k(_,o.__wbindgen_malloc,o.__wbindgen_realloc),c=g;f().setInt32(e+4*1,c,!0),f().setInt32(e+4*0,r,!0)},t.wbg.__wbg_status_ae8de515694c5c7c=function(e){return s(e).status},t.wbg.__wbg_ok_227b0624f5926a87=function(e){return s(e).ok},t.wbg.__wbg_statusText_2c9a12f90531c8ed=function(e,n){const _=s(n).statusText,r=k(_,o.__wbindgen_malloc,o.__wbindgen_realloc),c=g;f().setInt32(e+4*1,c,!0),f().setInt32(e+4*0,r,!0)},t.wbg.__wbg_headers_5e283e8345689121=function(e){const n=s(e).headers;return i(n)},t.wbg.__wbg_arrayBuffer_a5fbad63cc7e663b=function(){return b(function(e){const n=s(e).arrayBuffer();return i(n)},arguments)},t.wbg.__wbg_queueMicrotask_48421b3cc9052b68=function(e){const n=s(e).queueMicrotask;return i(n)},t.wbg.__wbindgen_is_function=function(e){return typeof s(e)=="function"},t.wbg.__wbg_queueMicrotask_12a30234db4045d3=function(e){queueMicrotask(s(e))},t.wbg.__wbg_crypto_1d1f22824a6a080c=function(e){const n=s(e).crypto;return i(n)},t.wbg.__wbindgen_is_object=function(e){const n=s(e);return typeof n=="object"&&n!==null},t.wbg.__wbg_process_4a72847cc503995b=function(e){const n=s(e).process;return i(n)},t.wbg.__wbg_versions_f686565e586dd935=function(e){const n=s(e).versions;return i(n)},t.wbg.__wbg_node_104a2ff8d6ea03a2=function(e){const n=s(e).node;return i(n)},t.wbg.__wbindgen_is_string=function(e){return typeof s(e)=="string"},t.wbg.__wbg_require_cca90b1a94a0255b=function(){return b(function(){const e=module.require;return i(e)},arguments)},t.wbg.__wbg_msCrypto_eb05e62b530a1508=function(e){const n=s(e).msCrypto;return i(n)},t.wbg.__wbg_randomFillSync_5c9c955aa56b6049=function(){return b(function(e,n){s(e).randomFillSync(w(n))},arguments)},t.wbg.__wbg_getRandomValues_3aa56aa6edec874c=function(){return b(function(e,n){s(e).getRandomValues(s(n))},arguments)},t.wbg.__wbg_performance_a1b8bde2ee512264=function(e){const n=s(e).performance;return i(n)},t.wbg.__wbindgen_is_undefined=function(e){return s(e)===void 0},t.wbg.__wbg_now_abd80e969af37148=function(e){return s(e).now()},t.wbg.__wbg_get_3baa728f9d58d3f6=function(e,n){const _=s(e)[n>>>0];return i(_)},t.wbg.__wbg_length_ae22078168b726f5=function(e){return s(e).length},t.wbg.__wbg_newnoargs_76313bd6ff35d0f2=function(e,n){const _=new Function(y(e,n));return i(_)},t.wbg.__wbg_next_de3e9db4440638b2=function(e){const n=s(e).next;return i(n)},t.wbg.__wbg_next_f9cb570345655b9a=function(){return b(function(e){const n=s(e).next();return i(n)},arguments)},t.wbg.__wbg_done_bfda7aa8f252b39f=function(e){return s(e).done},t.wbg.__wbg_value_6d39332ab4788d86=function(e){const n=s(e).value;return i(n)},t.wbg.__wbg_iterator_888179a48810a9fe=function(){return i(Symbol.iterator)},t.wbg.__wbg_get_224d16597dbbfd96=function(){return b(function(e,n){const _=Reflect.get(s(e),s(n));return i(_)},arguments)},t.wbg.__wbg_call_1084a111329e68ce=function(){return b(function(e,n){const _=s(e).call(s(n));return i(_)},arguments)},t.wbg.__wbg_new_525245e2b9901204=function(){const e=new Object;return i(e)},t.wbg.__wbindgen_object_clone_ref=function(e){const n=s(e);return i(n)},t.wbg.__wbg_self_3093d5d1f7bcb682=function(){return b(function(){const e=self.self;return i(e)},arguments)},t.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return b(function(){const e=window.window;return i(e)},arguments)},t.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return b(function(){const e=globalThis.globalThis;return i(e)},arguments)},t.wbg.__wbg_global_e5a3fe56f8be9485=function(){return b(function(){const e=global.global;return i(e)},arguments)},t.wbg.__wbg_call_89af060b4e1523f2=function(){return b(function(e,n,_){const r=s(e).call(s(n),s(_));return i(r)},arguments)},t.wbg.__wbg_instanceof_TypeError_eeccd04a800fcce2=function(e){let n;try{n=s(e)instanceof TypeError}catch{n=!1}return n},t.wbg.__wbg_new_b85e72ed1bfd57f9=function(e,n){try{var _={a:e,b:n},r=(a,u)=>{const l=_.a;_.a=0;try{return Y(l,_.b,a,u)}finally{_.a=l}};const c=new Promise(r);return i(c)}finally{_.a=_.b=0}},t.wbg.__wbg_resolve_570458cb99d56a43=function(e){const n=Promise.resolve(s(e));return i(n)},t.wbg.__wbg_then_95e6edc0f89b73b1=function(e,n){const _=s(e).then(s(n));return i(_)},t.wbg.__wbg_then_876bb3c633745cc6=function(e,n,_){const r=s(e).then(s(n),s(_));return i(r)},t.wbg.__wbg_buffer_b7b08af79b0b0974=function(e){const n=s(e).buffer;return i(n)},t.wbg.__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9=function(e,n,_){const r=new Uint8Array(s(e),n>>>0,_>>>0);return i(r)},t.wbg.__wbg_new_ea1883e1e5e86686=function(e){const n=new Uint8Array(s(e));return i(n)},t.wbg.__wbg_set_d1e79e2388520f18=function(e,n,_){s(e).set(s(n),_>>>0)},t.wbg.__wbg_length_8339fcf5d8ecd12e=function(e){return s(e).length},t.wbg.__wbg_newwithlength_ec548f448387c968=function(e){const n=new Uint8Array(e>>>0);return i(n)},t.wbg.__wbg_subarray_7c2e3576afe181d1=function(e,n,_){const r=s(e).subarray(n>>>0,_>>>0);return i(r)},t.wbg.__wbindgen_debug_string=function(e,n){const _=S(s(n)),r=k(_,o.__wbindgen_malloc,o.__wbindgen_realloc),c=g;f().setInt32(e+4*1,c,!0),f().setInt32(e+4*0,r,!0)},t.wbg.__wbindgen_throw=function(e,n){throw new Error(y(e,n))},t.wbg.__wbindgen_memory=function(){const e=o.memory;return i(e)},t.wbg.__wbindgen_uint8_array_new=function(e,n){var _=$(e,n).slice();return o.__wbindgen_free(e,n*1,1),i(_)},t.wbg.__wbindgen_closure_wrapper882=function(e,n,_){const r=J(e,n,299,P);return i(r)},t}function Q(t,e){return o=t.exports,C.__wbindgen_wasm_module=e,m=null,x=null,o.__wbindgen_start(),o}async function C(t){if(o!==void 0)return o;typeof t<"u"&&Object.getPrototypeOf(t)===Object.prototype?{module_or_path:t}=t:console.warn("using deprecated parameters for the initialization function; pass a single object instead"),typeof t>"u"&&(t=new URL("/aqlm-rs/assets/wasm_bg-tNIE5ijR.wasm",self.location.href));const e=K();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:_}=await G(await t,e);return Q(n,_)}let R;onmessage=async t=>{let e=t.data.messages;if(R===void 0){await C();let r=[];for(let d=0;d<navigator.hardwareConcurrency;d++){let A=new Worker(new URL("/aqlm-rs/assets/linear_worker-Cb5yJOSA.js",self.location.href));r.push(A)}let c=await M.new(r),a=c.get_worker_response_senders();for(let d=0;d<r.length;d++){let A=r[d],Z=a[d];A.onmessage=async ee=>{await Z.register_response(ee.data)}}let u=t.data.load_scheme;await c.set_load_scheme(u.prefix,u.suffix);let l=c.get_download_status_sender(),X=(async()=>{for(;;){let d=e.slice(),A=await l.get_status();if(A==="cyanide")break;d.push({role:"Assistant",content:A}),postMessage({messages:d,is_finished:!1})}})();R=await c.into_llama_api(),await X}if(e.length===0){R.clear(),postMessage({messages:[],is_finished:!0});return}let n=e.slice();n.push({role:"Assistant",content:"Processing..."}),postMessage({messages:n,is_finished:!1});let _=[{role:"System",content:"You are a helpful chat assistant."}].concat(e);for(await R.set_prefix(_.map(r=>JSON.stringify(r)));;){let r=(await R.next()).map(a=>JSON.parse(a)).filter(a=>a.role!=="System"),c=R.is_finished();if(postMessage({messages:r,is_finished:c}),c)break}}})();
