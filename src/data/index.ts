import { proxy } from "@/data/vue3/proxy";
/**
 *@desc 多个objcet
 */
export const vue3Proxy = () => {
  const obj = { proxy1: 11, proxy2: 22 };
  // proxy1
  const proxyInnerHTML1 = document.getElementById("proxy1");
  const proxyInput1 = document.getElementById("proxyInput1");
  proxyInnerHTML1!.innerHTML = "111";
  // proxy2
  const proxyInnerHTML2 = document.getElementById("proxy2");
  const proxyInput2 = document.getElementById("proxyInput2");
  proxyInnerHTML2!.innerHTML = obj.proxy2.toString();
  
  const data = proxy(obj, { proxy1: proxyInnerHTML1, proxy2: proxyInnerHTML2 });
  proxyInput1!.oninput = function (e: any) {
    const value = e.target.value;
    data.proxy1 = value;
  };
  proxyInput2!.oninput = function (e: any) {
    const value = e.target.value;
    data.proxy2 = value;
  };
};
