"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[929],{51871:(e,o,t)=>{t.r(o),t.d(o,{data:()=>a});const a={key:"v-025b91b6",path:"/devices/SRAC-23B-ZBSR.html",title:"Climax SRAC-23B-ZBSR control via MQTT",lang:"en-US",frontmatter:{title:"Climax SRAC-23B-ZBSR control via MQTT",description:"Integrate your Climax SRAC-23B-ZBSR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-02-13T14:40:13.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Warning usage",slug:"warning-usage",children:[]},{level:3,title:"Triggering alarm, Advanced",slug:"triggering-alarm-advanced",children:[]},{level:3,title:"Triggering alarm, Simple",slug:"triggering-alarm-simple",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Tamper (binary)",slug:"tamper-binary",children:[]},{level:3,title:"Warning (composite)",slug:"warning-composite",children:[]},{level:3,title:"Max_duration (numeric)",slug:"max-duration-numeric",children:[]},{level:3,title:"Alarm (binary)",slug:"alarm-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SRAC-23B-ZBSR.md",git:{updatedTime:1641501861e3}}},66078:(e,o,t)=>{t.r(o),t.d(o,{default:()=>i});const a=(0,t(66252).uE)('<h1 id="climax-srac-23b-zbsr" tabindex="-1"><a class="header-anchor" href="#climax-srac-23b-zbsr" aria-hidden="true">#</a> Climax SRAC-23B-ZBSR</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SRAC-23B-ZBSR</td></tr><tr><td>Vendor</td><td>Climax</td></tr><tr><td>Description</td><td>Smart siren</td></tr><tr><td>Exposes</td><td>battery_low, tamper, warning, max_duration, alarm, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SRAC-23B-ZBSR.jpg" alt="Climax SRAC-23B-ZBSR"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="warning-usage" tabindex="-1"><a class="header-anchor" href="#warning-usage" aria-hidden="true">#</a> Warning usage</h3><p>Warning only support a single mode, <code>burglar</code></p><p>Duration of using <code>warning</code> can be shorter than <code>max_duration</code> but not longer. If <code>max_duration</code> are set to 60 seconds, and you try to set <code>warning</code> with <code>duration</code> of 90 seconds, the warning will only apply for 60 seconds. Default value of <code>max_duration</code> are 300 seconds</p><p>This device do not support the <code>strobe_duty_cycle</code> functionality</p><h3 id="triggering-alarm-advanced" tabindex="-1"><a class="header-anchor" href="#triggering-alarm-advanced" aria-hidden="true">#</a> Triggering alarm, Advanced</h3><p>This siren can be triggered manually by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with the payloads:</p><p>To start :</p><ul><li><code>{&quot;warning&quot;:{&quot;duration&quot;:60,&quot;level&quot;:&quot;low&quot;,&quot;mode&quot;:&quot;burglar&quot;,&quot;strobe&quot;:false,&quot;strobe_duty_cycle&quot;:0}}</code> Where:</li></ul><ul><li><code>duration</code>: the number of seconds the alarm will be on</li><li><code>level</code>: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>mode</code>: <code>stop</code>, <code>burglar</code></li><li><code>strobe</code>: <code>true</code>, <code>false</code></li><li><code>strobe_duty_cycle</code>: not supported</li></ul><p>To stop:</p><ul><li><code>{&quot;warning&quot;:{&quot;duration&quot;:60,&quot;level&quot;:&quot;low&quot;,&quot;mode&quot;:&quot;stop&quot;,&quot;strobe&quot;:false,&quot;strobe_duty_cycle&quot;:0}}</code></li></ul><h3 id="triggering-alarm-simple" tabindex="-1"><a class="header-anchor" href="#triggering-alarm-simple" aria-hidden="true">#</a> Triggering alarm, Simple</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: &quot;START&quot;}</code> and <code>{&quot;alarm&quot;: &quot;OFF&quot;}</code> Set <code>max_duration</code> from the Zigbee2MQTT UI or by publishing <code>{&quot;max_duration&quot;: NEW_VALUE}</code> This alarm are preset to highest volume</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite" aria-hidden="true">#</a> Warning (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe_level&quot;: VALUE, &quot;strobe&quot;: VALUE, &quot;strobe_duty_cycle&quot;: VALUE, &quot;duration&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect). Allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>level</code> (enum): Sound level. Allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe_level</code> (enum): Intensity of the strobe. Allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) during warning. Allowed values: <code>true</code> or <code>false</code></li><li><code>strobe_duty_cycle</code> (numeric): Length of the flash cycle.</li><li><code>duration</code> (numeric): Duration in seconds of the alarm.</li></ul><h3 id="max-duration-numeric" tabindex="-1"><a class="header-anchor" href="#max-duration-numeric" aria-hidden="true">#</a> Max_duration (numeric)</h3><p>Duration of Siren. Value can be found in the published state on the <code>max_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;max_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>s</code>.</p><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary" aria-hidden="true">#</a> Alarm (binary)</h3><p>Manual start of siren. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> alarm is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',30),d={},i=(0,t(83744).Z)(d,[["render",function(e,o){return a}]])},83744:(e,o)=>{o.Z=(e,o)=>{for(const[t,a]of o)e[t]=a;return e}}}]);