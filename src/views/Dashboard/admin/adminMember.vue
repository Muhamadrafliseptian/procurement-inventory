<template>
    <div class="card">
      <div class="card-header pb-0">
        <h6>Member</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <!-- <th>No</th> -->
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Username</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- samain kyk database -->
              <tr v-for="(item ) in g$list"  >
                
                <!-- <td class="ps-4">{{ index + 1 }}</td> -->
                <td>
                  <h6>{{ item.name }}</h6>
                </td>
                <td>{{ item.phone }}</td>
                <td >
                  {{ item.email }}
                </td>
                <td>{{ item.username }}</td>
                <td> <button>Action</button> </td>
              </tr>
            </tbody>
          </table>
        </div>  
    </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from "pinia";
  import Modal from "@/components/Modal.vue";
  import ArgonSwitch from "@/components/ArgonSwitch.vue";
  import d$adminMember from "@/stores/dashboard/adminMember";
  
  export default {
    name: "adminMember",
    components: {
      ArgonSwitch,
      Modal,
    },
    data() {
      return {
        editedItem: {
          id: "",
          title: "",
          description: "",
          completed: false,
        },
        isModalEditVisible: false,
        confirmationVisible: false,
        deleteItemId: null,
        deleteItemTitle: "",
      };
    },
    computed: {
      ...mapState(d$adminMember, ["g$list"]),
    },
    methods: {
      showModal(item) {
        this.editedItem = { ...item };
        this.isModalEditVisible = true;
      },
      showConfirmation(itemId, title) {
        this.confirmationVisible = true;
        this.deleteItemId = itemId;
        this.deleteItemTitle = title;
      },
      closeModal() {
        this.isModalEditVisible = false;
      },
      closeModal2() {
        this.confirmationVisible = false;
      },
      async updateList() {
        try {
          const updatedItem = { ...this.editedItem };
          delete updatedItem.id;
  
          // Periksa apakah deskripsi tidak kosong
          if (!updatedItem.description) {
            throw new Error("Description is required.");
          }
  
          await this.a$update(this.editedItem.id, updatedItem);
  
          // Perbarui daftar tugas secara lokal dengan tugas yang diperbarui
          const index = this.g$list.findIndex(
            (item) => item.id === this.editedItem.id
          );
          if (index !== -1) {
            this.g$list[index] = { ...this.g$list[index], ...updatedItem };
          }
  
          this.closeModal();
  
          // Perbarui data tabel secara otomatis setelah operasi pembaruan berhasil
          await this.getList();
        } catch (e) {
          console.error(e);
        }
      },
  
      async deleteItem() {
        try {
          await this.a$delete(this.deleteItemId);
  
          // Hapus item dari daftar tugas secara lokal
          this.g$list = this.g$list.filter(
            (item) => item.id !== this.deleteItemId
          );
  
          // Perbarui data tabel secara otomatis setelah operasi penghapusan berhasil
          await this.getList();
  
          this.closeModal2();
        } catch (e) {
          console.error(e);
        }
      },
  
      ...mapActions(d$adminMember, ["a$list", "a$update", "a$delete"]),
      async getList() {
        try {
          await this.a$list();
        } catch (e) {
          console.error("methods getList error", e);
        }
      },
    },
    async created() {
      await this.getList();
    },
  };
  </script>
  