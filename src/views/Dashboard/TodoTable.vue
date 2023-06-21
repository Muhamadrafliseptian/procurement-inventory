<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Procurement</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <data-tabel
          :index="false"
          :data="g$list"
          v-bind="dt"
          @detail-member="showDetail"

        />
    <!-- <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Total</th>
              <th>Due Date</th>
              <th>Submit Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, detailItems ) in g$list"  >
              <td>
                <h6>{{ item.detailItems.name }}</h6>
              </td>
              <td>{{ item.detailItems.categoryId }}</td>
              <td >
                {{ item.detailItems.total }}
              </td>
              <td>{{ item.detailItems.duedate }}</td>
              <td>{{ item.createdAt }}</td>
              <td>{{ item.status }}</td>
              <td> <button>view detail</button> </td>
            </tr>
          </tbody>
        </table>
      </div> -->
    </div>
    <Modal v-show="modalDetail" @close="closeModal">
        <template v-slot:header>This Modal</template>
        <template v-slot:body>
          <h2 style="text-align: center;"> Detail</h2>
          <div class="card">
            <h5 class="card-header">Member Information</h5>
            <div class="card-body">
              <h6>Nama  : {{ detail?.detailItems?.name }}</h6>
              <h6>Category  : {{ detail?.detailItems?.categoryId }}</h6>
              <h6>Description  : {{ detail?.detailItems?.description }}</h6>
              <h6>url  : {{ detail?.detailItems?.url }}</h6>
              <h6>Quantity  : {{ detail?.detailItems?.quantity }}</h6>
              <h6>Price  : {{ detail?.detailItems?.price }}</h6>
              <h6>total  : {{ detail?.detailItems?.total }}</h6>
              <h6>status  : {{ detail?.status }}</h6>
              <h6>Duedate  : {{ detail?.detailItems?.duedate }}</h6>
            </div>
          </div>
        </template>
        <template v-slot:footer>@footerMeme</template>
      </Modal>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import Modal from "@/components/Modal.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import d$member from "@/stores/dashboard/member";
import DataTabel from "@/components/datatabels.vue"


export default {
  name: "ToDoTable",
  components: {
    DataTabel,
    ArgonSwitch,
    Modal,
  },
  data() {
    return {
      dt: {
      columns: [
      {
          name: 'name',
          th: 'Name',
          render: ({ detailItems }) => detailItems.name,
        },
        {
          name: 'categoryId',
          th: 'Category',
          render: ({ detailItems }) => detailItems.categoryId,
        },
        {
          name: 'Total',
          th: 'total',
          render: ({ detailItems }) => detailItems.total,
        },
        {
          name: 'duedate',
          th: 'Duedate',
          render: ({ detailItems }) => detailItems.duedate,
        },
        { name: 'createdAt', th: ' Submit Date' },
        { name: 'status', th: ' Status' },
        
      ],
      actions: [
        {
          text: 'Detail',
          color: 'info',
          disabled: ({ isDisabled }) => isDisabled,
          event: 'detail-member',
        },
      ],
    },
    modalDetail: false,
    detail: {},

  };
},
  computed: {
    ...mapState(d$member, ["g$list"]),
  },
  methods: {
    async showDetail(item){
        console.log(item);
        // this.detail = {...item};
        this.detail = {...(await this.a$getById(item.id))};
        this.modalDetail = true;
      },
    closeModal() {
      this.modalDetail = false;
    },
    // async updateList() {
    //   try {
    //     const updatedItem = { ...this.editedItem };
    //     delete updatedItem.id;

    //     // Periksa apakah deskripsi tidak kosong
    //     if (!updatedItem.description) {
    //       throw new Error("Description is required.");
    //     }

    //     await this.a$update(this.editedItem.id, updatedItem);

    //     // Perbarui daftar tugas secara lokal dengan tugas yang diperbarui
    //     const index = this.g$list.findIndex(
    //       (item) => item.id === this.editedItem.id
    //     );
    //     if (index !== -1) {
    //       this.g$list[index] = { ...this.g$list[index], ...updatedItem };
    //     }

    //     this.closeModal();

    //     // Perbarui data tabel secara otomatis setelah operasi pembaruan berhasil
    //     await this.getList();
    //   } catch (e) {
    //     console.error(e);
    //   }
    // },

      // async deleteItem() {
      //   try {
      //     await this.a$delete(this.deleteItemId);

      //     // Hapus item dari daftar tugas secara lokal
      //     this.g$list = this.g$list.filter(
      //       (item) => item.id !== this.deleteItemId
      //     );

      //     // Perbarui data tabel secara otomatis setelah operasi penghapusan berhasil
      //     await this.getList();

      //     this.closeModal2();
      //   } catch (e) {
      //     console.error(e);
      //   }
      // },

    ...mapActions(d$member, ["a$list",
"a$update",
"a$getById",]),
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
