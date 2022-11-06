import { ObserveDefineProperty } from "@/data/vue2/defineProperty";
import { proxy } from "@/data/vue3/proxy";
/**
 *@desc proxy代理多个objcet
 */
export const vue3Proxy = () => {
  const obj = { proxy1: 11, proxy2: 22 };
  // proxy1
  const proxyInnerHTML1 = document.getElementById("proxy1");
  const proxyInput1 = document.getElementById("proxyInput1");
  proxyInnerHTML1!.innerHTML = obj.proxy1.toString();
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

/**
 * @desc  definePropery 代理一个对象
 */
export const vue2DefinePropery = () => {
  const obj = { proxy1: 11, proxy2: 22 };
  // proxy1
  const definePropertyInnerHTML1 = document.getElementById("defineProperty1");
  const definePropertyInput1 = document.getElementById(
    "definePropertyInput1"
  ) as any;
  definePropertyInnerHTML1!.innerHTML = obj.proxy1.toString();
  // proxy2
  const definePropertyInnerHTML2 = document.getElementById("defineProperty2");
  const definePropertyInput2 = document.getElementById(
    "definePropertyInput2"
  ) as any;
  definePropertyInnerHTML2!.innerHTML = obj.proxy1.toString();

  // 监听输入框
  definePropertyInput1!.oninput = function (e: any) {
    ObserveDefineProperty(obj);
    obj.proxy1 = e.target.value;
    definePropertyInput2!.value = obj.proxy1;
  };
  definePropertyInput2!.oninput = function (e: any) {
    obj.proxy1 = e.target.value;
    definePropertyInnerHTML2!.innerHTML = obj.proxy1.toString();
  };
};
