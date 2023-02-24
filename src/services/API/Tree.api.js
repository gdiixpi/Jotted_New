import { axiosInstance } from "../Axios/axios";

export class TREE_API {
    async updateTree(payload) {
        return await axiosInstance.post(`/tree/${payload.id}`, payload)
    };
    async addLinkToNode(payload) {
        return await axiosInstance.post("node_attatchments", payload)
    };
}

