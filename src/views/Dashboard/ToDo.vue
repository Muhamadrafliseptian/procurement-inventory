<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <button
          class="btn-primary rounded px-5 py-1.9 mb-3"
          type="button"
          @click="showModal"
        >
          Add
        </button>
        <!-- <Modal v-show="isModalAddVisible" @close="closeModal" > -->
          <!-- <template v-slot:header>Procurement Inventory</template> -->
          <!-- <template v-slot:body> -->
            <div class="mt-3">
              <form v-on:submit.prevent="submitAddList" v-show="isModalAddVisible" @close="closeModal">
                <div class="form-group">
                  <label for="title">Nama:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="input.title"
                  />
                </div>
                <!-- role mei ganti jadi NIK -->
                <div class="form-group">
                  <label for="inputnik">NIK:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputnik"
                    v-model="input.inputnik"
                  />
                </div>
                <!-- nambahin address -->
                <div class="form-group">
                  <label for="inputaddress">Address:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputaddress"
                    v-model="input.inputaddress"
                  />
                </div>
                <!-- nambahin phone Number -->
                <div class="form-group">
                  <label for="inputnumber">Phone Number:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputnumber"
                    v-model="input.inputnumber"
                  />
                </div>
                <!-- nambahin Username -->
                <div class="form-group">
                  <label for="category">Username:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    v-model="input.category"
                  />
                </div>
                <!-- nambahin Email -->
                <div class="form-group">
                  <label for="exampleInputEmail1">Email:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    v-model="input.exampleInputEmail1"
                  />
                </div>
                <!-- jobdesk mei ganti jadi password -->
                <div class="form-group">
                  <label for="exampleInputPassword1">Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    v-model="input.exampleInputPassword1"
                  />
                </div>
                <!-- gabisa pindah ke kanan -->
                <div class="form-group">
                  <label class="col-md-4 control-label" for="submit"></label>
                  <div class="col-md-8">
                    <a href="/stores/dashboard/todo" id="cancel" name="cancel" class="btn btn-default">Cancel</a>
                    <button id="submit" name="submit" class="btn btn-primary" value="1">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          <!-- </template> -->
          <!-- <template v-slot:footer> Procurement Inventory </template> -->
        <!-- </Modal> -->
        <TodoTable />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import d$todo from "@/stores/dashboard/todo";
import Modal from "@/components/Modal.vue";
import TodoTable from "@/views/Dashboard/TodoTable.vue";

export default {
  name: "Todo",
  components: {
    TodoTable,
    Modal,
  },
  data: () => ({
    input: {
      title: "",
      description: "",
      category: "",
    },
    isModalAddVisible: false,
  }),
  methods: {
    showModal() {
      this.isModalAddVisible = true;
    },
    closeModal() {
      this.isModalAddVisible = false;
    },
    ...mapActions(d$todo, ["a$list", "a$add"]),
    async submitAddList() {
      try {
        await this.a$add({ ...this.input });
        await this.a$list();
        this.isModalAddVisible = false;
        this.input.title = "";
        this.input.description = "";
        this.input.category = "";
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style></style>
