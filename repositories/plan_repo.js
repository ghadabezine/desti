import { reactive } from "vue";


import { Plan } from "@/model/plan.js";

export const planRepo = reactive([]);


export function addPlan(plan) {
  planRepo.push(plan);
}


export function removePlan(plan) {
  const index = planRepo.indexOf(plan);
  if (index !== -1) {
    planRepo.splice(index, 1);
  }
}


export function getPlanList() {
  return planRepo;
}
