// atoms.ts
import { atom } from "jotai";

// 전구 전원 상태 (on/off)
export const lightOnOffAtom = atom(false);

// 빛의 세기 상태 (0-100)
export const lightPowerAtom = atom(50);

// 빛의 색상 상태
export const lightColorAtom = atom("#ffffff");

// 음량 전원 상태
export const soundOnOffAtom = atom(false);

// 음량 세기 상태
export const soundPowerAtom = atom(50);

// 모터 전원 상태
export const motorOnOffAtom = atom(false);

// 모터 세기 상태
export const motorPowerAtom = atom(50);

// 창문 리니어 상태

// 진동 전원 상테
export const vibrationOnOffAtom = atom(false);

// 진동 세기 상태
export const vibrationPowerAtom = atom(false);