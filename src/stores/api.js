import { defineStore } from "pinia";
import axiosInstance from "@/services/AxiosService";

export const useApi = defineStore("api", {
  state: () => ({
    mcq_question_papers: [],
    errors: {},
    loading: false,
  }),
  getters: {
    getMcqQuestionPapers: (state)=>{
      return state.mcq_question_papers;
    },
  },

  actions: {

    async fetchMcqQuestionPapers() {
      try {
        const res = await axiosInstance.get("/public/mcq_question_papers");
        if (res.status === 200) {
          this.mcq_question_papers = res.data;
          return res.data;
        }
      } catch (error) {
        if (error.response.data) {
          throw error.response.data.errors;
        }
      }
    },


  },
});
