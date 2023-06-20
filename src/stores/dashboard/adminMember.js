import { defineStore } from "pinia";
import * as s$adminMember from '@/services/dashboard/adminMember'

const d$adminMember = defineStore({
    id: 'adminMember',
    state: () => ({
        list: [],
    }),
    actions: {
        async a$list() {
            try {
                const { data } = await s$adminMember.list();
                this.list = data;
            } catch (e) {
                console.error('actions todo get list error', e);
                this.list = [];
                throw e;
            }
        },
        async a$update(id, body) {
            try {
                await s$adminMember.update(id, body);
                await this.a$list();
            } catch (e) {
                console.error('actions todo update error', e);
                throw e;
            }
        },
        async a$getById(id) {
            try {
                const {data} = await s$adminMember.getById(id);
                return data
            } catch (e) {
                console.error('actions todo update error', e);
                throw e;
            }
        },
        async a$add(body) {
            try {
                await s$adminMember.add(body);
                await this.a$list();
            } catch (e) {
                console.error('actions todo add error', e);
                throw e;
            }
        },
        async a$delete(id) {
            try {
                await s$adminMember.del(id);
                await this.a$list();
            } catch (e) {
                console.error('actions todo delete error', e);
                throw e;
            }
        },
    },
    getters: {
        g$list: ({ list }) => list,
    },
});

export default d$adminMember;