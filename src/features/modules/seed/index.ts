import { MONTH_1_LESSONS, MONTH_1_MODULES } from "./month-1";
import { MONTH_2_LESSONS, MONTH_2_MODULES } from "./month-2";
import { MONTH_3_LESSONS, MONTH_3_MODULES } from "./month-3";
import { Lesson, Module } from "../../../types";

export const INITIAL_MODULES: Module[] = [
  ...MONTH_1_MODULES,
  ...MONTH_2_MODULES,
  ...MONTH_3_MODULES,
];

export const INITIAL_LESSONS: Lesson[] = [
  ...MONTH_1_LESSONS,
  ...MONTH_2_LESSONS,
  ...MONTH_3_LESSONS,
];
