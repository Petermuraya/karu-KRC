import{r as O,j as u}from"./index-DMUk1THx.js";import{g as W,_ as X,a as z,b as Z,c as J,C as Q,r as L,d as ee,S as te,F as se,i as ne}from"./index.esm-BZjDw2V5.js";import{g as B,q as ie,w as oe,c as re,b as ae,d as F,e as y,s as ce}from"./index.esm2017-9138t2Jx.js";import{g as le,c as ue}from"./firebaseConfig-D-F_d2tz.js";/**
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
 */const H="firebasestorage.googleapis.com",he="storageBucket",de=2*60*1e3,pe=10*60*1e3;/**
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
 */class g extends se{constructor(e,s,n=0){super(C(e),`Firebase Storage: ${s} (${C(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,g.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return C(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var m;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(m||(m={}));function C(t){return"storage/"+t}function _e(){const t="An unknown error occurred, please check the error payload for server response.";return new g(m.UNKNOWN,t)}function fe(){return new g(m.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function me(){return new g(m.CANCELED,"User canceled the upload/download.")}function ge(t){return new g(m.INVALID_URL,"Invalid URL '"+t+"'.")}function Re(t){return new g(m.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function S(t){return new g(m.INVALID_ARGUMENT,t)}function q(){return new g(m.APP_DELETED,"The Firebase app was deleted.")}function ke(t){return new g(m.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class f{constructor(e,s){this.bucket=e,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,s){let n;try{n=f.makeFromUrl(e,s)}catch{return new f(e,"")}if(n.path==="")return n;throw Re(e)}static makeFromUrl(e,s){let n=null;const i="([A-Za-z0-9.\\-_]+)";function a(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),r={bucket:1,path:3};function l(_){_.path_=decodeURIComponent(_.path)}const h="v[A-Za-z0-9_]+",R=s.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",k=new RegExp(`^https?://${R}/${h}/b/${i}/o${p}`,"i"),T={bucket:1,path:3},I=s===H?"(?:storage.googleapis.com|storage.cloud.google.com)":s,d="([^?#]*)",v=new RegExp(`^https?://${I}/${i}/${d}`,"i"),b=[{regex:c,indices:r,postModify:a},{regex:k,indices:T,postModify:l},{regex:v,indices:{bucket:1,path:2},postModify:l}];for(let _=0;_<b.length;_++){const E=b[_],w=E.regex.exec(e);if(w){const G=w[E.indices.bucket];let U=w[E.indices.path];U||(U=""),n=new f(G,U),E.postModify(n);break}}if(n==null)throw ge(e);return n}}class Te{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function be(t,e,s){let n=1,i=null,a=null,o=!1,c=0;function r(){return c===2}let l=!1;function h(...d){l||(l=!0,e.apply(null,d))}function R(d){i=setTimeout(()=>{i=null,t(k,r())},d)}function p(){a&&clearTimeout(a)}function k(d,...v){if(l){p();return}if(d){p(),h.call(null,d,...v);return}if(r()||o){p(),h.call(null,d,...v);return}n<64&&(n*=2);let b;c===1?(c=2,b=0):b=(n+Math.random())*1e3,R(b)}let T=!1;function I(d){T||(T=!0,p(),!l&&(i!==null?(d||(c=2),clearTimeout(i),R(0)):d||(c=1)))}return R(0),a=setTimeout(()=>{o=!0,I(!0)},s),I}function Ie(t){t(!1)}/**
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
 */function ve(t){return t!==void 0}function j(t,e,s,n){if(n<e)throw S(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>s)throw S(`Invalid value for '${t}'. Expected ${s} or less.`)}function Ee(t){const e=encodeURIComponent;let s="?";for(const n in t)if(t.hasOwnProperty(n)){const i=e(n)+"="+e(t[n]);s=s+i+"&"}return s=s.slice(0,-1),s}var x;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(x||(x={}));/**
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
 */function Oe(t,e){const s=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,a=e.indexOf(t)!==-1;return s||i||a}/**
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
 */class Ae{constructor(e,s,n,i,a,o,c,r,l,h,R,p=!0){this.url_=e,this.method_=s,this.headers_=n,this.body_=i,this.successCodes_=a,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=r,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=R,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,T)=>{this.resolve_=k,this.reject_=T,this.start_()})}start_(){const e=(n,i)=>{if(i){n(!1,new A(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const o=c=>{const r=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(r,l)};this.progressCallback_!==null&&a.addUploadProgressListener(o),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(o),this.pendingConnection_=null;const c=a.getErrorCode()===x.NO_ERROR,r=a.getStatus();if(!c||Oe(r,this.additionalRetryCodes_)&&this.retry){const h=a.getErrorCode()===x.ABORT;n(!1,new A(!1,null,h));return}const l=this.successCodes_.indexOf(r)!==-1;n(!0,new A(l,a))})},s=(n,i)=>{const a=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const r=this.callback_(c,c.getResponse());ve(r)?a(r):a()}catch(r){o(r)}else if(c!==null){const r=_e();r.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,r)):o(r)}else if(i.canceled){const r=this.appDelete_?q():me();o(r)}else{const r=fe();o(r)}};this.canceled_?s(!1,new A(!1,null,!0)):this.backoffId_=be(e,s,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ie(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class A{constructor(e,s,n){this.wasSuccessCode=e,this.connection=s,this.canceled=!!n}}function Ne(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function xe(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function De(t,e){e&&(t["X-Firebase-GMPID"]=e)}function we(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ue(t,e,s,n,i,a,o=!0){const c=Ee(t.urlParams),r=t.url+c,l=Object.assign({},t.headers);return De(l,e),Ne(l,s),xe(l,a),we(l,n),new Ae(r,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function ye(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ce(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class D{constructor(e,s){this._service=e,s instanceof f?this._location=s:this._location=f.makeFromUrl(s,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,s){return new D(e,s)}get root(){const e=new f(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ce(this._location.path)}get storage(){return this._service}get parent(){const e=ye(this._location.path);if(e===null)return null;const s=new f(this._location.bucket,e);return new D(this._service,s)}_throwIfRoot(e){if(this._location.path==="")throw ke(e)}}function M(t,e){const s=e==null?void 0:e[he];return s==null?null:f.makeFromBucketSpec(s,t)}function Pe(t,e,s,n={}){t.host=`${e}:${s}`,t._protocol="http";const{mockUserToken:i}=n;i&&(t._overrideAuthToken=typeof i=="string"?i:ee(i,t.app.options.projectId))}class Le{constructor(e,s,n,i,a){this.app=e,this._authProvider=s,this._appCheckProvider=n,this._url=i,this._firebaseVersion=a,this._bucket=null,this._host=H,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=de,this._maxUploadRetryTime=pe,this._requests=new Set,i!=null?this._bucket=f.makeFromBucketSpec(i,this._host):this._bucket=M(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=f.makeFromBucketSpec(this._url,e):this._bucket=M(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){j("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){j("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const s=await e.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new D(this,e)}_makeRequest(e,s,n,i,a=!0){if(this._deleted)return new Te(q());{const o=Ue(e,this._appId,n,i,s,this._firebaseVersion,a);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,s){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,s,n,i).getPromise()}}const V="@firebase/storage",$="0.13.2";/**
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
 */const K="storage";function Fe(t=Z(),e){t=W(t);const n=X(t,K).getImmediate({identifier:e}),i=z("storage");return i&&Se(n,...i),n}function Se(t,e,s,n={}){Pe(t,e,s,n)}function je(t,{instanceIdentifier:e}){const s=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Le(s,n,i,e,te)}function Me(){J(new Q(K,je,"PUBLIC").setMultipleInstances(!0)),L(V,$,""),L(V,$,"esm2017")}Me();const Ve={apiKey:"AIzaSyC4CZJRXgvKdg3e0m4QOVx54YtjmxOTva0",authDomain:"karatina-redcroos.firebaseapp.com",projectId:"karatina-redcroos",storageBucket:"karatina-redcroos.appspot.com",messagingSenderId:"770106012239",appId:"1:770106012239:web:d44f1064016fc3ff85303a"},P=ne(Ve);B(P);const $e=le(P);Fe(P);const N=B(ue),Ye=()=>{const[t,e]=O.useState([]),[s,n]=O.useState([]),[i,a]=O.useState(""),o=$e.currentUser;O.useEffect(()=>{const r=async()=>{if(o){const h=ie(re(N,"activities"),oe("userId","==",o.uid)),R=await ae(h),p=[];R.forEach(k=>{p.push({...k.data(),id:k.id})}),e(p)}},l=async()=>{if(o){const h=await F(y(N,"certificates",o.uid));h.exists()?n([h.data()]):console.log("No certificates found!")}};r(),l()},[o]);const c=async()=>{if(i){await ce(y(N,"certificates",o.uid),{url:i,userId:o.uid}),a("");const r=await F(y(N,"certificates",o.uid));r.exists()&&n([r.data()])}};return u.jsxs("div",{className:"dashboard-container",children:[u.jsxs("h2",{children:["Welcome, ",o==null?void 0:o.displayName]}),u.jsxs("p",{children:["Email: ",o==null?void 0:o.email]}),u.jsxs("div",{className:"activities",children:[u.jsx("h3",{children:"Your Activities"}),u.jsx("ul",{children:t.map(r=>u.jsx("li",{children:r.title},r.id))})]}),u.jsxs("div",{className:"certificates",children:[u.jsx("h3",{children:"Your Certificates"}),u.jsx("ul",{children:s.map((r,l)=>u.jsx("li",{children:u.jsx("a",{href:r.url,download:!0,children:"Download Certificate"})},l))})]}),u.jsxs("div",{className:"upload-certificate",children:[u.jsx("h3",{children:"Upload Certificate"}),u.jsx("input",{type:"text",value:i,onChange:r=>a(r.target.value),placeholder:"Enter certificate URL"}),u.jsx("button",{onClick:c,children:"Upload"})]})]})};export{Ye as default};
