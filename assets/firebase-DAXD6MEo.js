import{h as H,_ as K,i as j,k as q,m as G,C as W,n as U,p as X,S as Y,F as z,q as Z,g as J}from"./index-DDIDTibN.js";import{g as Q}from"./index.esm2017-BRj4xIj4.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M="firebasestorage.googleapis.com",ee="storageBucket",te=2*60*1e3,ne=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p extends z{constructor(e,n,s=0){super(w(e),`Firebase Storage: ${n} (${w(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,p.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return w(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_||(_={}));function w(t){return"storage/"+t}function se(){const t="An unknown error occurred, please check the error payload for server response.";return new p(_.UNKNOWN,t)}function ie(){return new p(_.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function oe(){return new p(_.CANCELED,"User canceled the upload/download.")}function re(t){return new p(_.INVALID_URL,"Invalid URL '"+t+"'.")}function ae(t){return new p(_.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function P(t){return new p(_.INVALID_ARGUMENT,t)}function S(){return new p(_.APP_DELETED,"The Firebase app was deleted.")}function ce(t){return new p(_.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=d.makeFromUrl(e,n)}catch{return new d(e,"")}if(s.path==="")return s;throw ae(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function o(h){h.path.charAt(h.path.length-1)==="/"&&(h.path_=h.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+i+a,"i"),r={bucket:1,path:3};function l(h){h.path_=decodeURIComponent(h.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",T=new RegExp(`^https?://${g}/${f}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},I=n===M?"(?:storage.googleapis.com|storage.cloud.google.com)":n,u="([^?#]*)",b=new RegExp(`^https?://${I}/${i}/${u}`,"i"),k=[{regex:c,indices:r,postModify:o},{regex:T,indices:R,postModify:l},{regex:b,indices:{bucket:1,path:2},postModify:l}];for(let h=0;h<k.length;h++){const O=k[h],N=O.regex.exec(e);if(N){const $=N[O.indices.bucket];let D=N[O.indices.path];D||(D=""),s=new d($,D),O.postModify(s);break}}if(s==null)throw re(e);return s}}class le{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t,e,n){let s=1,i=null,o=null,a=!1,c=0;function r(){return c===2}let l=!1;function f(...u){l||(l=!0,e.apply(null,u))}function g(u){i=setTimeout(()=>{i=null,t(T,r())},u)}function m(){o&&clearTimeout(o)}function T(u,...b){if(l){m();return}if(u){m(),f.call(null,u,...b);return}if(r()||a){m(),f.call(null,u,...b);return}s<64&&(s*=2);let k;c===1?(c=2,k=0):k=(s+Math.random())*1e3,g(k)}let R=!1;function I(u){R||(R=!0,m(),!l&&(i!==null?(u||(c=2),clearTimeout(i),g(0)):u||(c=1)))}return g(0),o=setTimeout(()=>{a=!0,I(!0)},n),I}function he(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t){return t!==void 0}function C(t,e,n,s){if(s<e)throw P(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw P(`Invalid value for '${t}'. Expected ${n} or less.`)}function _e(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var E;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(E||(E={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n,s,i,o,a,c,r,l,f,g,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=r,this.timeout_=l,this.progressCallback_=f,this.connectionFactory_=g,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,R)=>{this.resolve_=T,this.reject_=R,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new A(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const r=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(r,l)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===E.NO_ERROR,r=o.getStatus();if(!c||pe(r,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===E.ABORT;s(!1,new A(!1,null,f));return}const l=this.successCodes_.indexOf(r)!==-1;s(!0,new A(l,o))})},n=(s,i)=>{const o=this.resolve_,a=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const r=this.callback_(c,c.getResponse());de(r)?o(r):o()}catch(r){a(r)}else if(c!==null){const r=se();r.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,r)):a(r)}else if(i.canceled){const r=this.appDelete_?S():oe();a(r)}else{const r=ie();a(r)}};this.canceled_?n(!1,new A(!1,null,!0)):this.backoffId_=ue(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&he(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class A{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function me(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ge(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Re(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ke(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Te(t,e,n,s,i,o,a=!0){const c=_e(t.urlParams),r=t.url+c,l=Object.assign({},t.headers);return Re(l,e),me(l,n),ge(l,o),ke(l,s),new fe(r,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function be(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,n){this._service=e,n instanceof d?this._location=n:this._location=d.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new v(e,n)}get root(){const e=new d(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return be(this._location.path)}get storage(){return this._service}get parent(){const e=Ie(this._location.path);if(e===null)return null;const n=new d(this._location.bucket,e);return new v(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ce(e)}}function x(t,e){const n=e==null?void 0:e[ee];return n==null?null:d.makeFromBucketSpec(n,t)}function Oe(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:X(i,t.app.options.projectId))}class Ae{constructor(e,n,s,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=M,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=te,this._maxUploadRetryTime=ne,this._requests=new Set,i!=null?this._bucket=d.makeFromBucketSpec(i,this._host):this._bucket=x(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=d.makeFromBucketSpec(this._url,e):this._bucket=x(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new v(this,e)}_makeRequest(e,n,s,i,o=!0){if(this._deleted)return new le(S());{const a=Te(e,this._appId,s,i,n,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const L="@firebase/storage",F="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V="storage";function Ee(t=q(),e){t=H(t);const s=K(t,V).getImmediate({identifier:e}),i=j("storage");return i&&ve(s,...i),s}function ve(t,e,n,s={}){Oe(t,e,n,s)}function Ne(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ae(n,s,i,e,Y)}function De(){G(new W(V,Ne,"PUBLIC").setMultipleInstances(!0)),U(L,F,""),U(L,F,"esm2017")}De();const we={apiKey:"AIzaSyC4CZJRXgvKdg3e0m4QOVx54YtjmxOTva0",authDomain:"karatina-redcroos.firebaseapp.com",projectId:"karatina-redcroos",storageBucket:"karatina-redcroos.appspot.com",messagingSenderId:"770106012239",appId:"1:770106012239:web:d44f1064016fc3ff85303a"},y=Z(we);Q(y);const Pe=J(y);Ee(y);export{Pe as a,Ee as g};
