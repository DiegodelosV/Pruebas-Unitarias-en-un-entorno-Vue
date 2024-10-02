import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

import ContactoView from "@/views/ContactoView.vue";

describe("ContactoView", () => {
  test("Probando la existencia del componente o vista ContactoView ", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/contacto",
          name: "ContactoViewVue",
          component: ContactoView,
        },
      ],
    });
    router.push("/contacto");
    await router.isReady();

    const wrapper = mount(ContactoView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(ContactoView).exists()).toBe(true);
  });
});
