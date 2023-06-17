<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">

        <div class="row">
          <div class="col-lg-3 col-md-6 ">
            <card style="
            border-bottom-color: #246AFC;
            border-bottom-width: 4px;" :title="stats.money.title" :value="stats.money.value"
              :percentage="stats.money.percentage" :detail="stats.money.detail" directionReverse></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card style="
            border-block-color: #F9CE7E;
            border-bottom-width: 4px;" :title="stats.users.title" :value="stats.users.value"
              :percentage="stats.users.percentage" :iconClass="stats.users.iconClass" :detail="stats.users.detail"
              directionReverse></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card style="
            border-bottom-color: #B8E0D2;
            border-bottom-width: 4px;" :title="stats.clients.title" :value="stats.clients.value"
              :percentage="stats.clients.percentage" :iconClass="stats.clients.iconClass" :detail="stats.clients.detail"
              directionReverse></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card style="
            border-bottom-color: #E26163;
            border-bottom-width: 4px;" :title="stats.sales.title" :value="stats.sales.value"
              :percentage="stats.sales.percentage" :iconClass="stats.sales.iconClass" :detail="stats.sales.detail"
              directionReverse></card>
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
                <div>
                  <table class="table align-items-center">
                    <thead class="thead-light">

                      <tr>
                        <th scope="col" class="sort" data-sort="name">Member Name</th>
                        <th scope="col" class="sort" data-sort="budget">Item Name</th>
                        <th scope="col" class="sort" data-sort="status">Category</th>
                        <th scope="col" class="sort" data-sort="completion">Total</th>
                        <th scope="col" class="sort" data-sort="completion">Due Date</th>
                        <th scope="col" class="sort" data-sort="completion">Status</th>
                        <th scope="col"></th>
                      </tr>

                    </thead>
                    <tbody class="list">

                      <tr v-for="(sale, index) in sales" :key="index">

                        <td class="budget">
                          <span class="name mb-0 text-sm">{{ sale.country }}</span>
                        </td>

                        <td class="budget">
                          <span class="name mb-0 text-sm">{{ sale.sales }}</span>
                        </td>

                        <td>
                          <div class="d-flex align-items-center">
                            <span class="name mb-0 text-sm">{{ sale.value }}</span>
                          </div>
                        </td>

                        <td>
                          <div class="d-flex align-items-center">
                            <span class="name mb-0 text-sm">{{ sale.bounce }}</span>
                          </div>
                        </td>

                        <td>
                          <div class="d-flex align-items-center">
                            <span class="name mb-0 text-sm">{{ sale.bounce }}</span>
                          </div>
                        </td>

                        <td>
                          <div class="d-flex align-items-center">
                            <span class="name mb-0 text-sm">{{ sale.bounce }}</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

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
            value: "12",
            iconBackground: "bg-gradient-primary",
          },
          users: {
            title: "On Progress",
            value: "422",
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