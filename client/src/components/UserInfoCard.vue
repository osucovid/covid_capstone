<template>
  <div>
    <b-col>
      <b-card
        :title="name"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="info"
        img-top
        tag="article"
        style="max-width:20rem"
        class="mb-2"
        footer="Card Footer"
      >
        <b-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          accusantium ducimus adipisci deserunt tempora! Non distinctio odio
          corrupti, aut fuga quod, tenetur et iusto vitae ipsa asperiores in
          nobis quaerat!
        </b-card-text>

        <!-- <b-button
          v-b-tooltip.hover
          title="Edit"
          v-b-modal="modalID"
          variant="primary"
          >Edit</b-button
        >
        <b-modal :id="modalId" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal> -->

        <b-button
          v-b-tooltip.hover
          title="Tooltip content"
          v-b-modal="modalId"
          variant="primary"
          >Edit</b-button
        >
        <b-modal :id="modalId" title="Edit your details">
          <p class="my-4">Details go here</p>
        </b-modal>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["name", "id"],
  computed: {
    modalId() {
      // return `modal-$(this.id)`;
      return `modal-${this.id}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
