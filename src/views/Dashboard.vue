<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-3 col-md-6 ">
            <card
              :title="stats.money.title"
              :value="stats.money.value"
              :percentage="stats.money.percentage"
              :detail="stats.money.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.users.title"
              :value="stats.users.value"
              :percentage="stats.users.percentage"
              :iconClass="stats.users.iconClass"
              :detail="stats.users.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.clients.title"
              :value="stats.clients.value"
              :percentage="stats.clients.percentage"
              :iconClass="stats.clients.iconClass"
              :detail="stats.clients.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.sales.title"
              :value="stats.sales.value"
              :percentage="stats.sales.percentage"
              :iconClass="stats.sales.iconClass"
              :detail="stats.sales.detail"
              directionReverse
            ></card>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 mb-lg">
            <!-- line chart -->
            <div class="card z-index-2">
              <gradient-line-chart />
            </div>
          </div>
          <div class="col-lg-5">
            <carousel />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-12 mb-lg-0 mb-4">
            <div class="card">
              <div class="p-3 pb-0 card-header">
                <div class="d-flex justify-content-between">
                  <h6 class="mb-2">Latest Request</h6>
                </div>
              </div>
              
              <div class="table-responsive">
                <table class="table align-items-center">
                  <tbody>

                    <div class="text-center">
                    <p class="mb-0 text-xs font-weight-bold">Member Name</p>
                    </div>

                    <tr v-for="(sale, index) in sales" :key="index">
                      
                      <td class="w-30">
                  
                        <div class="text-center">
                          <div class="ms-4 ">
                            <h6 class="mb-0 text-sm">{{ sale.country }}</h6>
                          </div>
                        </div>
                      </td>
                      
                      <td>
                        
                        <div class="text-center">
                          <p class="mb-0 text-xs font-weight-bold">Item Name</p>
                          <h6 class="mb-0 text-sm">{{ sale.sales }}</h6>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="mb-0 text-xs font-weight-bold">Category</p>
                          <h6 class="mb-0 text-sm">{{ sale.value }}</h6>
                        </div>
                      </td>
                      <td class="text-sm align-middle">
                        <div class="text-center col">
                          <p class="mb-0 text-xs font-weight-bold">Total</p>
                          <h6 class="mb-0 text-sm">{{ sale.bounce }}</h6>
                        </div>
                      </td>
                      <td class="text-sm align-middle">
                        <div class="text-center col">
                          <p class="mb-0 text-xs font-weight-bold">Due Date</p>
                          <h6 class="mb-0 text-sm">{{ sale.bounce }}</h6>
                        </div>
                      </td>
                      <td class="text-sm align-middle">
                        <div class="text-center col">
                          <p class="mb-0 text-xs font-weight-bold">Status</p>
                          <h6 class="mb-0 text-sm">{{ sale.bounce }}</h6>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <categories-card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/examples/Cards/Card.vue";


import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";

export default {
  name: "dashboard-default",
  data() {
    return {
      stats: {
        money: {
          // update
          title: "Request Total",
          value: "125",
          iconBackground: "bg-gradient-primary",
        },
        users: {
          title: "On Progress",
          value: "42",
          iconBackground: "bg-gradient-danger",
        },
        clients: {
          title: "Approved",
          value: "67",
          iconBackground: "bg-gradient-success",
        },
        sales: {
          title: "Rejected",
          value: "16",
          iconBackground: "bg-gradient-warning",
        },
      },
      sales: {
        us: {
          country: "INI KELOMPOK 4",
          sales: "Pengajuan Mesin",
          value: "Barang",
          bounce: "Rp 1.000.000",
          flag: US,
        },
        germany: {
          country: "INI KELOMPOK 4",
          sales: "Pengajuan Mesin",
          value: "Akomodasi",
          bounce: "Rp 1.000.000",
          flag: DE,
        },
        britain: {
          country: "INI KELOMPOK 4",
          sales: "Pengajuan Mesin",
          value: "Lainnya",
          bounce: "Rp 1.000.000",
          flag: GB,
        },
        brasil: {
          country: "INI KELOMPOK 4",
          sales: "Pengajuan Mesin",
          value: "Barang",
          bounce: "Rp 1.000.000",
          flag: BR,
        },
      },
    };
  },
  components: {
    Card,
  },
};
</script>
