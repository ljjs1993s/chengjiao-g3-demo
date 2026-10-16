import{J as e,L as t,On as n}from"./runtime-core.esm-bundler-D1Q-n0wH.js";import{n as r,u as i}from"./dist-DClTptH_.js";import{t as a}from"./error-CJo8XTyd.js";import{a as o}from"./install-D6-Yfg-L.js";var s={prefix:Math.floor(Math.random()*1e4),current:0},c=Symbol(`elIdInjection`),l=()=>t()?e(c,s):s,u=e=>{let t=l();!i&&t===s&&a(`IdInjection`,`Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);let c=o();return r(()=>n(e)||`${c.value}-id-${t.prefix}-${t.current++}`)};export{l as n,u as t};