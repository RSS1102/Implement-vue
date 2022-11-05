import { proxy } from "@/data/vue3/proxy";
const proxyInnerHTML = document.getElementById("proxy");
const proxyInput = document.getElementById("proxyInput");
const data = proxy({ a: 11 }, proxyInnerHTML);
proxyInput!.oninput = function (e: any) {
  const value = e.target.value;
  data.a = value;
};
