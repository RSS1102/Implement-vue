// proxy1
const definePropertyInnerHTML1 = document.getElementById("defineProperty1");
// proxy2
const definePropertyInnerHTML2 = document.getElementById("defineProperty2");
/**
 * @desc proxy 代理实现双向绑定
 * @param target {Record<string, any>} 需要代理的对象
 * @url [developer.mozilla.org](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
 */
export function defineReactive(
  data: Record<string, any>,
  key: string,
  value: any
) {
  ObserveDefineProperty(value); // 递归遍历所有子属性
  Object.defineProperty(data, key, {
    get: function () {
      console.log("属性" + key + "已经被监听了，现在值为" + value);
      return value;
    },
    set: function (newValue) {
      value = newValue;
      console.log(
        "属性" + key + "已经被修改了，现在值为：“" + newValue.toString() + "”"
      );
      definePropertyInnerHTML1!.innerHTML = value.toString();
      definePropertyInnerHTML2!.innerHTML = value.toString();
    },
  });
}
/**
 * @desc 遍历对象
 * @param data {Record<string, any>} 需要遍历的对象
 */
export function ObserveDefineProperty(data: Record<string, any>) {
  // 当值为空 或者不为对象时返回(递归边界)
  if (!data || typeof data !== "object") {
    return;
  }
  // 遍历当前层级的对象
  Object.keys(data).forEach((key) => {
    defineReactive(data, key, data[key]);
  });
}
