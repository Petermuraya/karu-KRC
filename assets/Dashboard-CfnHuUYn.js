import{r as x,j as d}from"./index-Co_lAzqo.js";import{g as G,_ as X,a as z,b as Z,c as J,C as Q,r as F,d as ee,S as te,F as se,i as ne}from"./index.esm-BZjDw2V5.js";import{g as H,q as ie,c as re,w as oe,b as ae,d as S,e as C,s as ce}from"./index.esm2017-9138t2Jx.js";import{g as le,c as ue}from"./firebaseConfig-D-F_d2tz.js";/**
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
 */const q="firebasestorage.googleapis.com",de="storageBucket",he=2*60*1e3,pe=10*60*1e3;/**
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
 */class R extends se{constructor(e,s,n=0){super(P(e),`Firebase Storage: ${s} (${P(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,R.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return P(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var g;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(g||(g={}));function P(t){return"storage/"+t}function fe(){const t="An unknown error occurred, please check the error payload for server response.";return new R(g.UNKNOWN,t)}function _e(){return new R(g.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function me(){return new R(g.CANCELED,"User canceled the upload/download.")}function ge(t){return new R(g.INVALID_URL,"Invalid URL '"+t+"'.")}function Re(t){return new R(g.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function j(t){return new R(g.INVALID_ARGUMENT,t)}function K(){return new R(g.APP_DELETED,"The Firebase app was deleted.")}function be(t){return new R(g.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class m{constructor(e,s){this.bucket=e,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,s){let n;try{n=m.makeFromUrl(e,s)}catch{return new m(e,"")}if(n.path==="")return n;throw Re(e)}static makeFromUrl(e,s){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const c="(/(.*))?$",a=new RegExp("^gs://"+i+c,"i"),o={bucket:1,path:3};function l(_){_.path_=decodeURIComponent(_.path)}const f="v[A-Za-z0-9_]+",b=s.replace(/[.]/g,"\\."),u="(/([^?#]*).*)?$",N=new RegExp(`^https?://${b}/${f}/b/${i}/o${u}`,"i"),p={bucket:1,path:3},T=s===q?"(?:storage.googleapis.com|storage.cloud.google.com)":s,h="([^?#]*)",v=new RegExp(`^https?://${T}/${i}/${h}`,"i"),k=[{regex:a,indices:o,postModify:r},{regex:N,indices:p,postModify:l},{regex:v,indices:{bucket:1,path:2},postModify:l}];for(let _=0;_<k.length;_++){const E=k[_],D=E.regex.exec(e);if(D){const Y=D[E.indices.bucket];let U=D[E.indices.path];U||(U=""),n=new m(Y,U),E.postModify(n);break}}if(n==null)throw ge(e);return n}}class ke{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Te(t,e,s){let n=1,i=null,r=null,c=!1,a=0;function o(){return a===2}let l=!1;function f(...h){l||(l=!0,e.apply(null,h))}function b(h){i=setTimeout(()=>{i=null,t(N,o())},h)}function u(){r&&clearTimeout(r)}function N(h,...v){if(l){u();return}if(h){u(),f.call(null,h,...v);return}if(o()||c){u(),f.call(null,h,...v);return}n<64&&(n*=2);let k;a===1?(a=2,k=0):k=(n+Math.random())*1e3,b(k)}let p=!1;function T(h){p||(p=!0,u(),!l&&(i!==null?(h||(a=2),clearTimeout(i),b(0)):h||(a=1)))}return b(0),r=setTimeout(()=>{c=!0,T(!0)},s),T}function Ne(t){t(!1)}/**
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
 */function xe(t){return t!==void 0}function M(t,e,s,n){if(n<e)throw j(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>s)throw j(`Invalid value for '${t}'. Expected ${s} or less.`)}function ve(t){const e=encodeURIComponent;let s="?";for(const n in t)if(t.hasOwnProperty(n)){const i=e(n)+"="+e(t[n]);s=s+i+"&"}return s=s.slice(0,-1),s}var y;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(y||(y={}));/**
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
 */function Ie(t,e){const s=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return s||i||r}/**
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
 */class Ee{constructor(e,s,n,i,r,c,a,o,l,f,b,u=!0){this.url_=e,this.method_=s,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=c,this.callback_=a,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=f,this.connectionFactory_=b,this.retry=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,p)=>{this.resolve_=N,this.reject_=p,this.start_()})}start_(){const e=(n,i)=>{if(i){n(!1,new O(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const c=a=>{const o=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(o,l)};this.progressCallback_!==null&&r.addUploadProgressListener(c),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(c),this.pendingConnection_=null;const a=r.getErrorCode()===y.NO_ERROR,o=r.getStatus();if(!a||Ie(o,this.additionalRetryCodes_)&&this.retry){const f=r.getErrorCode()===y.ABORT;n(!1,new O(!1,null,f));return}const l=this.successCodes_.indexOf(o)!==-1;n(!0,new O(l,r))})},s=(n,i)=>{const r=this.resolve_,c=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const o=this.callback_(a,a.getResponse());xe(o)?r(o):r()}catch(o){c(o)}else if(a!==null){const o=fe();o.serverResponse=a.getErrorText(),this.errorCallback_?c(this.errorCallback_(a,o)):c(o)}else if(i.canceled){const o=this.appDelete_?K():me();c(o)}else{const o=_e();c(o)}};this.canceled_?s(!1,new O(!1,null,!0)):this.backoffId_=Te(e,s,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ne(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class O{constructor(e,s,n){this.wasSuccessCode=e,this.connection=s,this.canceled=!!n}}function Oe(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ae(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ye(t,e){e&&(t["X-Firebase-GMPID"]=e)}function we(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function De(t,e,s,n,i,r,c=!0){const a=ve(t.urlParams),o=t.url+a,l=Object.assign({},t.headers);return ye(l,e),Oe(l,s),Ae(l,r),we(l,n),new Ee(o,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,c)}/**
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
 */function Ue(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ce(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class w{constructor(e,s){this._service=e,s instanceof m?this._location=s:this._location=m.makeFromUrl(s,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,s){return new w(e,s)}get root(){const e=new m(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ce(this._location.path)}get storage(){return this._service}get parent(){const e=Ue(this._location.path);if(e===null)return null;const s=new m(this._location.bucket,e);return new w(this._service,s)}_throwIfRoot(e){if(this._location.path==="")throw be(e)}}function V(t,e){const s=e==null?void 0:e[de];return s==null?null:m.makeFromBucketSpec(s,t)}function Pe(t,e,s,n={}){t.host=`${e}:${s}`,t._protocol="http";const{mockUserToken:i}=n;i&&(t._overrideAuthToken=typeof i=="string"?i:ee(i,t.app.options.projectId))}class Le{constructor(e,s,n,i,r){this.app=e,this._authProvider=s,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=q,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=he,this._maxUploadRetryTime=pe,this._requests=new Set,i!=null?this._bucket=m.makeFromBucketSpec(i,this._host):this._bucket=V(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=m.makeFromBucketSpec(this._url,e):this._bucket=V(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){M("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){M("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const s=await e.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new w(this,e)}_makeRequest(e,s,n,i,r=!0){if(this._deleted)return new ke(K());{const c=De(e,this._appId,n,i,s,this._firebaseVersion,r);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,s){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,s,n,i).getPromise()}}const $="@firebase/storage",B="0.13.2";/**
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
 */const W="storage";function Fe(t=Z(),e){t=G(t);const n=X(t,W).getImmediate({identifier:e}),i=z("storage");return i&&Se(n,...i),n}function Se(t,e,s,n={}){Pe(t,e,s,n)}function je(t,{instanceIdentifier:e}){const s=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Le(s,n,i,e,te)}function Me(){J(new Q(W,je,"PUBLIC").setMultipleInstances(!0)),F($,B,""),F($,B,"esm2017")}Me();const Ve={apiKey:"AIzaSyC4CZJRXgvKdg3e0m4QOVx54YtjmxOTva0",authDomain:"karatina-redcroos.firebaseapp.com",projectId:"karatina-redcroos",storageBucket:"karatina-redcroos.appspot.com",messagingSenderId:"770106012239",appId:"1:770106012239:web:d44f1064016fc3ff85303a"},L=ne(Ve);H(L);const $e=le(L);Fe(L);const A=H(ue),We=()=>{const[t,e]=x.useState([]),[s,n]=x.useState([]),[i,r]=x.useState(""),[c,a]=x.useState(!0),[o,l]=x.useState(""),[f,b]=x.useState(""),u=$e.currentUser;x.useEffect(()=>{const p=async()=>{if(u){a(!0);try{const h=ie(re(A,"activities"),oe("userId","==",u.uid)),v=await ae(h),I=[];v.forEach(k=>{I.push({...k.data(),id:k.id})}),e(I)}catch(h){console.error("Error fetching activities:",h),l("Failed to load activities.")}finally{a(!1)}}},T=async()=>{if(u)try{const h=await S(C(A,"certificates",u.uid));h.exists()?n([h.data()]):console.log("No certificates found!")}catch(h){console.error("Error fetching certificates:",h),l("Failed to load certificates.")}};p(),T()},[u]);const N=async()=>{if(i&&i.startsWith("http"))try{await ce(C(A,"certificates",u.uid),{url:i,userId:u.uid}),r(""),b("Certificate uploaded successfully!");const p=await S(C(A,"certificates",u.uid));p.exists()&&n([p.data()])}catch(p){console.error("Error uploading certificate:",p),l("Failed to upload certificate.")}else l("Please enter a valid certificate URL.")};return d.jsxs("div",{className:"dashboard-container p-6 bg-white rounded-lg shadow-md",children:[d.jsxs("h2",{className:"text-2xl font-bold",children:["Welcome, ",u==null?void 0:u.displayName]}),d.jsxs("p",{className:"text-gray-600",children:["Email: ",u==null?void 0:u.email]}),c?d.jsx("p",{children:"Loading..."}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"activities mt-4",children:[d.jsx("h3",{className:"text-xl font-semibold",children:"Your Activities"}),t.length>0?d.jsx("ul",{className:"list-disc ml-6",children:t.map(p=>d.jsx("li",{className:"my-2 p-2 border rounded",children:p.title},p.id))}):d.jsx("p",{children:"No activities found."})]}),d.jsxs("div",{className:"certificates mt-4",children:[d.jsx("h3",{className:"text-xl font-semibold",children:"Your Certificates"}),s.length>0?d.jsx("ul",{className:"list-disc ml-6",children:s.map((p,T)=>d.jsx("li",{className:"my-2 p-2 border rounded",children:d.jsx("a",{href:p.url,className:"text-blue-500 underline",download:!0,children:"Download Certificate"})},T))}):d.jsx("p",{children:"No certificates found."})]}),d.jsxs("div",{className:"upload-certificate mt-4",children:[d.jsx("h3",{className:"text-xl font-semibold",children:"Upload Certificate"}),d.jsx("input",{type:"text",value:i,onChange:p=>r(p.target.value),placeholder:"Enter certificate URL",className:"border rounded p-2 w-full"}),d.jsx("button",{onClick:N,className:"mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Upload"})]}),o&&d.jsx("p",{className:"mt-4 text-red-500",children:o}),f&&d.jsx("p",{className:"mt-4 text-green-500",children:f})]})]})};export{We as default};
