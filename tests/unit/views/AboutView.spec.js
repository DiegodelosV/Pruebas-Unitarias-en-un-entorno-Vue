import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

import AboutView from "@/views/AboutView.vue";

describe("AboutView", () => {
  test("Probando la existencia del componente AboutView ", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/about",
          name: "AboutViewVue",
          component: AboutView,
        },
      ],
    });
    router.push("/about");
    await router.isReady();

    const wrapper = mount(AboutView, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
  });

  test("validación del match con el snapshot", () => {
    const wrapper = mount(AboutView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
